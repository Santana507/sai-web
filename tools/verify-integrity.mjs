import fs from 'node:fs';
import path from 'node:path';

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let missing = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Enlaces locales
  const hrefMatches = content.matchAll(/href=["']([^#"':]+)["']/g);
  for (const m of hrefMatches) {
    let target = m[1].split('?')[0];
    if (target.startsWith('http') || target.startsWith('mailto:') || target.startsWith('tel:') || target.startsWith('javascript:')) continue;
    if (!fs.existsSync(target)) {
      missing.push({ file, type: 'href', target });
    }
  }

  // Recursos de imagen, video y scripts
  const srcMatches = content.matchAll(/src=["']([^"']+)["']/g);
  for (const m of srcMatches) {
    let target = m[1].split('?')[0];
    if (target.startsWith('http') || target.startsWith('data:')) continue;
    if (!fs.existsSync(target)) {
      missing.push({ file, type: 'src', target });
    }
  }
}

if (missing.length === 0) {
  console.log(`✅ Verificación exitosa: 0 enlaces rotos y 0 recursos multimedia faltantes en los ${htmlFiles.length} archivos HTML.`);
} else {
  console.error('❌ Recursos faltantes:', missing);
  process.exit(1);
}
