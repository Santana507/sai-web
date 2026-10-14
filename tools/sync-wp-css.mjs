import { readFileSync, writeFileSync } from 'fs';

const wpStylePath = 'wordpress-theme/style.css';
const cssStylesPath = 'css/styles.css';

const wpCurrent = readFileSync(wpStylePath, 'utf8');
const headerMatch = wpCurrent.match(/^\/\*[\s\S]*?\*\/\n*/);
const header = headerMatch ? headerMatch[0] : '';

const cssContent = readFileSync(cssStylesPath, 'utf8');
writeFileSync(wpStylePath, header + cssContent, 'utf8');
console.log('✅ wordpress-theme/style.css sincronizado exitosamente con css/styles.css');
