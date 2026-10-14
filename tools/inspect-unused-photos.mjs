import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const htmlFiles = readdirSync('.').filter(f => f.endsWith('.html'));
const usedPhotos = new Set();

for (const file of htmlFiles) {
  const content = readFileSync(file, 'utf8');
  const regex = /assets\/fotos\/[^\s"'<>\)]+/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    usedPhotos.add(match[0]);
  }
}

const folders = [
  'assets/fotos/primaria-preescolar',
  'assets/fotos/secundaria',
  'assets/fotos/institucional',
  'assets/fotos/exterior'
];

console.log('=== FOTOS NO UTILIZADAS POR CARPETA ===');
for (const folder of folders) {
  const allFiles = readdirSync(folder).filter(f => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg'));
  const unused = allFiles.filter(f => !usedPhotos.has(`${folder}/${f}`));
  console.log(`\n📁 ${folder} (Total: ${allFiles.length}, Sin usar: ${unused.length}):`);
  for (const f of unused) {
    const s = statSync(join(folder, f)).size;
    console.log(`   - ${folder}/${f} (${Math.round(s / 1024)} KB)`);
  }
}
