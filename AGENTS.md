# Notas para agentes (Codex, Antigravity, etc.) - Migracion a WordPress

Rama de trabajo: `main`. No usar `pruebas-smith`.

## Estructura
- Sitio estatico original: HTML/CSS/JS en la raiz (fuente de verdad del diseno).
- `wordpress-theme/`: tema WordPress (`bpvda-theme`).
  - `header.php` / `footer.php`: cabecera con menu y pie compartidos.
  - `front-page.php`: portada; su contenido se edita en Paginas > Inicio (bloques Gutenberg).
  - `page-<slug>.php`: una plantilla por pagina, copia fiel de `<slug>.html` (estaticas por ahora).
  - `inc/home-blocks.html`: contenido inicial de la portada en bloques.
  - `functions.php`: crea las paginas, fija la portada y carga el contenido inicial una sola vez.
- `wordpress-export/bpvda-contenido.xml`: exportacion WXR (Herramientas > Importar > WordPress).
- `tools/build-wp-pages.ps1`: regenera `page-*.php` y la cabecera desde los HTML.
- `tools/build-home-blocks.php`: regenera `inc/home-blocks.html` desde `index.html` (`php tools/build-home-blocks.php`).

## Pendiente
- Hacer editable el menu (Apariencia > Menus, 5 grupos actuales).
- Convertir las demas paginas a bloques/widgets, una por una.
- Al desplegar: reemplazar URLs `localhost` en el contenido importado.

## Local
XAMPP: `C:\xampp\htdocs\BPVDA_WP`; el tema esta enlazado por junction a `wordpress-theme/`.