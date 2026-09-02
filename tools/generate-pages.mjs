import { writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

console.log('Las páginas HTML de la Sesión #2 están sincronizadas con los contenidos completos de la edición de Sebastián y la estructura de navegación de la Sesión #1.');
