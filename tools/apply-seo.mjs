/**
 * apply-seo.mjs — Inserta metadatos SEO únicos en el <head> de cada página raíz:
 * description, canonical, Open Graph, Twitter Card y (en portada) JSON-LD.
 * Genera también robots.txt y sitemap.xml. Es idempotente: se puede ejecutar varias veces.
 *
 * Para fijar el dominio definitivo: cambiar SITE_URL abajo y volver a ejecutar
 *   node tools/apply-seo.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://santana507.github.io/sai-web/'; // Dominio en GitHub Pages (con / final)
const OG_IMAGE = 'assets/og.jpg'; // 1200×630, ligera
const SITE_NAME = 'Colegio Buen Pastor Voz de Alerta';

const START = '<!-- SEO:START -->';
const END = '<!-- SEO:END -->';

/** Descripciones únicas (≈150 caracteres) por página. noindex = formularios internos. */
const PAGES = {
  'index.html': { d: 'Colegio Buen Pastor Voz de Alerta en 24 de Diciembre, Panamá: formación cristiana, excelencia académica y comunidad desde prekínder hasta bachillerato.' },
  'quienes-somos.html': { d: 'Conoce la historia, la comunidad y el equipo del Colegio Buen Pastor Voz de Alerta, una escuela que educa con propósito, fe y excelencia en Panamá.' },
  'filosofia.html': { d: 'Misión, visión y valores del Colegio Buen Pastor Voz de Alerta: una educación con propósito que forma el carácter y la mente de cada estudiante.' },
  'instalaciones.html': { d: 'Recorre el campus del Colegio Buen Pastor Voz de Alerta: espacios seguros, aulas y áreas recreativas pensadas para aprender y convivir.' },
  'plantel.html': { d: 'Conoce al plantel docente del Colegio Buen Pastor Voz de Alerta: educadores que inspiran con fe, ciencia y corazón a cada estudiante.' },
  'sai.html': { d: 'SAI BPVDA, el campus virtual interactivo del colegio: accede a tareas, calificaciones y recursos para acompañar el aprendizaje de tu hijo.' },
  'vida-estudiantil.html': { d: 'Arte, deporte, robótica y proyectos: la vida estudiantil del Colegio Buen Pastor Voz de Alerta donde los talentos florecen más allá del aula.' },
  'ecosistema-digital.html': { d: 'Plataformas y alianzas educativas del Colegio Buen Pastor Voz de Alerta: tecnología pedagógica que potencia cada habilidad.' },
  'admisiones.html': { d: 'Admisiones y matrícula 2027 en el Colegio Buen Pastor Voz de Alerta: requisitos, fechas, preguntas frecuentes y cómo iniciar el proceso.' },
  'portal-padres.html': { d: 'Portal de padres del Colegio Buen Pastor Voz de Alerta: accesos a SAI, Edvoice y comunicaciones para una alianza viva entre hogar y colegio.' },
  'contacto.html': { d: 'Contacta al Colegio Buen Pastor Voz de Alerta: teléfono 391-5811, WhatsApp, correo, horarios de atención y ubicación en 24 de Diciembre, Panamá.' },
  'prekinder.html': { d: 'Prekínder en el Colegio Buen Pastor Voz de Alerta: un lugar seguro y afectivo para comenzar el camino escolar con juego, fe y descubrimiento.' },
  'kinder.html': { d: 'Kínder en el Colegio Buen Pastor Voz de Alerta: explorar, crear y compartir en un ambiente donde la curiosidad de cada niño encuentra su voz.' },
  'primaria.html': { d: 'Primaria en el Colegio Buen Pastor Voz de Alerta: pensamiento activo y proyectos para aprender a comprender y transformar el entorno.' },
  'secundaria.html': { d: 'Secundaria en el Colegio Buen Pastor Voz de Alerta: ciencias, robótica y formación en valores para preparar a los jóvenes para los retos que vienen.' },
  'bachilleres.html': { d: 'Bachilleres en el Colegio Buen Pastor Voz de Alerta: formación académica y vocacional con excelencia y propósito para el siguiente paso.' },
  'form-nuevo-ingreso.html': { d: 'Registro de nuevo ingreso 2027 del Colegio Buen Pastor Voz de Alerta.', noindex: true },
  'form-preingreso.html': { d: 'Formulario de preingreso 2027 del Colegio Buen Pastor Voz de Alerta.', noindex: true },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_NAME,
  alternateName: 'BPVDA',
  url: SITE_URL,
  logo: SITE_URL + 'assets/brand/bpvda-logo.png',
  image: SITE_URL + OG_IMAGE,
  email: 'info@buenpastor-vda.net',
  telephone: '+507-391-5811',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle San José, Urb. Monterrico',
    addressLocality: '24 de Diciembre, Ciudad de Panamá',
    addressCountry: 'PA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 9.106901, longitude: -79.36664 },
  sameAs: [
    'https://www.facebook.com/people/Escuela-Buen-Pastor-Voz-De-Alerta/100045208036432/',
    'https://www.instagram.com/bpvda/',
  ],
};

const root = process.cwd();
for (const [file, meta] of Object.entries(PAGES)) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) { console.warn('⚠️  No existe', file); continue; }
  let html = fs.readFileSync(p, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || SITE_NAME;
  const url = SITE_URL + (file === 'index.html' ? '' : file);

  // Limpia versión previa del bloque y metas sueltas que reemplazamos.
  html = html.replace(new RegExp(`\\s*${START}[\\s\\S]*?${END}`), '');
  html = html.replace(/\s*<meta\s+(?:name="description"|property="og:[^"]*")[^>]*>/g, '');

  const lines = [
    START,
    `<meta name="description" content="${esc(meta.d)}">`,
    meta.noindex ? '<meta name="robots" content="noindex, follow">' : `<link rel="canonical" href="${url}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    '<meta property="og:locale" content="es_PA">',
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(meta.d)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${SITE_URL}${OG_IMAGE}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta name="twitter:card" content="summary_large_image">',
  ];
  if (file === 'index.html') {
    lines.push(`<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`);
  }
  lines.push(END);
  const block = '\n  ' + lines.join('\n  ');

  html = html.replace(/(<\/title>)/, `$1${block}`);
  fs.writeFileSync(p, html, 'utf8');
}

// robots.txt y sitemap.xml
fs.writeFileSync(path.join(root, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /plantillas/\nDisallow: /pruebas/\nDisallow: /sandbox/\nDisallow: /form-nuevo-ingreso.html\nDisallow: /form-preingreso.html\n\nSitemap: ${SITE_URL}sitemap.xml\n`);

const urls = Object.entries(PAGES).filter(([, m]) => !m.noindex)
  .map(([f]) => `  <url><loc>${SITE_URL}${f === 'index.html' ? '' : f}</loc></url>`).join('\n');
fs.writeFileSync(path.join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

console.log('✅ SEO aplicado a', Object.keys(PAGES).length, 'páginas + robots.txt + sitemap.xml');
