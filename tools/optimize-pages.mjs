/**
 * optimize-pages.mjs — Post-procesado idempotente de las páginas raíz (se ejecuta tras generate-pages.mjs):
 *  1. Google Fonts como <link> con preconnect (en vez de @import dentro del CSS, que encadena peticiones).
 *  2. loading="lazy" en imágenes bajo el pliegue (se omiten las del header y la primera imagen de <main>).
 *  3. rel="noopener noreferrer" en enlaces target="_blank" que no lo tengan.
 *  4. Sustituye .png/.jpg/.jpeg por su gemela .webp cuando ya existe en el mismo directorio.
 *
 * No modifica dimensiones ni estilos: no altera el diseño aprobado.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap';
const FONT_BLOCK =
  '<link rel="preconnect" href="https://fonts.googleapis.com">\n  ' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  ' +
  `<link rel="stylesheet" href="${FONT_URL}">\n  `;

const stats = { lazy: 0, rel: 0, webp: 0, fonts: 0 };

function processImgs(html) {
  const mainIdx = html.search(/<main[\s>]/);
  let firstMainImgSeen = false;
  return html.replace(/<img\b[^>]*>/g, (tag, offset) => {
    let out = tag;

    // 4. Gemelas WebP
    out = out.replace(/\bsrc="([^"]+)\.(png|jpe?g)(\?[^"]*)?"/i, (m, base, ext, q) => {
      if (/^(https?:)?\/\//.test(base)) return m;
      const webp = path.join(root, decodeURI(base) + '.webp');
      if (fs.existsSync(webp)) { stats.webp++; return `src="${base}.webp${q || ''}"`; }
      return m;
    });

    // 2. Carga diferida (no en el header ni en la primera imagen de <main>)
    const inMain = mainIdx !== -1 && offset > mainIdx;
    if (inMain && !/\bloading=/.test(out)) {
      if (!firstMainImgSeen) {
        firstMainImgSeen = true;
      } else {
        out = out.replace(/<img\b/, '<img loading="lazy"');
        stats.lazy++;
      }
    } else if (inMain && !firstMainImgSeen) {
      firstMainImgSeen = true;
    }
    if (!/\bdecoding=/.test(out)) out = out.replace(/<img\b/, '<img decoding="async"');
    return out;
  });
}

for (const file of fs.readdirSync(root).filter((f) => f.endsWith('.html'))) {
  const p = path.join(root, file);
  let html = fs.readFileSync(p, 'utf8');
  const before = html;

  // 1. Fuentes
  if (!html.includes('fonts.googleapis.com')) {
    html = html.replace(/(\s*)(<link[^>]+href="css\/styles\.css[^"]*"[^>]*>)/, (m, ws, link) => `${ws}${FONT_BLOCK}${link}`);
    if (html !== before) stats.fonts++;
  }

  html = processImgs(html);

  // 3. rel en enlaces externos
  html = html.replace(/<a\b[^>]*target="_blank"[^>]*>/g, (tag) => {
    if (/\brel=/.test(tag)) {
      return tag.replace(/\brel="([^"]*)"/, (m, v) => {
        const set = new Set(v.split(/\s+/).filter(Boolean));
        if (set.has('noopener') && set.has('noreferrer')) return m;
        set.add('noopener'); set.add('noreferrer');
        stats.rel++;
        return `rel="${[...set].join(' ')}"`;
      });
    }
    stats.rel++;
    return tag.replace(/target="_blank"/, 'target="_blank" rel="noopener noreferrer"');
  });

  if (html !== before) fs.writeFileSync(p, html, 'utf8');
}

console.log(`✅ Optimización: fuentes=${stats.fonts} lazy=${stats.lazy} rel=${stats.rel} webp=${stats.webp}`);
