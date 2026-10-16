import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const appUrl = "https://script.google.com/macros/s/AKfycbzgLqWTXbA1c-3fi6G8CBxNDRvEMRocJMsw6S06yKpMRGcCBzYmLO3X5F2eBKQi2yrKHw/exec";

function redirectPage(title) {
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta http-equiv="refresh" content="0;url=${appUrl}">
  <link rel="canonical" href="${appUrl}">
  <title>${title} | Colegio Buen Pastor Voz de Alerta</title>
  <script>window.location.replace(${JSON.stringify(appUrl)});</script>
</head>
<body>
  <main>
    <h1>${title}</h1>
    <p>Este formulario fue unificado. Selecciona Nuevo ingreso o Reingreso al abrir la solicitud.</p>
    <p><a href="${appUrl}">Abrir formulario de matrícula 2027</a></p>
  </main>
</body>
</html>
`;
}

writeFileSync(join(root, 'form-nuevo-ingreso.html'), redirectPage('Formulario de Nuevo Ingreso 2027'));
writeFileSync(join(root, 'form-preingreso.html'), redirectPage('Formulario de Reingreso 2027'));
console.log('Formularios anteriores redirigen al formulario unificado.');
