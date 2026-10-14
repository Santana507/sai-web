import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const files = readdirSync('.').filter(f => f.endsWith('.html'));
const imgMap = {};

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const regex = /assets\/fotos\/[^\s"'<>\)]+/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const img = match[0];
    if (!imgMap[img]) imgMap[img] = [];
    if (!imgMap[img].includes(file)) {
      imgMap[img].push(file);
    }
  }
}

console.log('--- REPORTE DE FOTOS DUPLICADAS ENTRE PÁGINAS ---');
const duplicates = Object.entries(imgMap).filter(([k, v]) => v.length > 1);
console.log(`Total fotos registradas: ${Object.keys(imgMap).length}`);
console.log(`Fotos duplicadas: ${duplicates.length}\n`);

for (const [img, pageList] of duplicates) {
  console.log(`[DUPLICADA x${pageList.length}] ${img}`);
  console.log(`   Páginas: ${pageList.join(', ')}`);
}
