import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = { index: 7, nosotros: 3, mision: 3, vision: 4, curriculo: 4, actividades: 3, admision: 3, contacto: 0 };
const baseline = '67bfdf21399c687c99197ebbb323c1a65ad97f10';
const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
let total = 0;

for (const [page, count] of Object.entries(pages)) {
  const file = `${page}.html`;
  const html = readFileSync(resolve(root, file), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${file}: IDs duplicados`);
  assert.equal([...html.matchAll(/data-discovery-card/g)].length, count, `${file}: tarjetas esperadas`);
  for (const [, control] of html.matchAll(/aria-controls="([^"]+)"/g)) {
    assert.ok(ids.includes(control), `${file}: control sin destino ${control}`);
  }
  for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|tel:|#)/.test(url)) continue;
    assert.ok(existsSync(resolve(root, url.split(/[?#]/)[0])), `${file}: ruta inexistente ${url}`);
  }
  // This baseline guards the institutional paragraphs moved into disclosures.
  const previous = execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root, encoding: 'utf8' });
  for (const [paragraph] of previous.matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/g)) {
    assert.ok(text(html).includes(text(paragraph)), `${file}: párrafo institucional ausente: ${text(paragraph)}`);
  }
  total += count;
  console.log(`${file}: contenido, rutas y ${count} tarjetas verificados`);
}
console.log(`${total} tarjetas verificadas. La revisión visual y de interacción se documenta en docs/TARJETAS_INTERACTIVAS.md.`);
