# BPVDA — sitio institucional

Repositorio del sitio web del colegio Buen Pastor Voz de Alerta.

## Estado actual

- El entregable actual es un sitio estático multipágina construido con HTML, CSS y JavaScript.
- Se conservan ocho áreas: inicio, nosotros, misión, visión, currículo, actividades, admisión y contacto.
- La documentación SDD organiza el trabajo futuro y evita cambios sin alcance, criterios o validación.
- Los datos institucionales de contacto siguen pendientes de confirmación antes de publicar.

## Estructura de trabajo

- AGENTS.md: contexto operativo principal y reglas para cualquier cambio.
- docs/constitution.md: principios, límites y fuente de verdad.
- specs/001-site-quality/: requisitos, decisiones, plan y roadmap del sitio.
- index.html ... contacto.html: páginas del prototipo.
- css/styles.css: estilos compartidos y responsive.
- js/main.js: menú, slider y controles de accesibilidad.
- assets/: logos, imágenes, videos, favicon y recursos sociales.
- tools/: generación o verificación del contenido cuando exista.

## Cómo trabajar

1. Leer AGENTS.md y docs/constitution.md.
2. Revisar la spec activa, clarifications.md, plan.md y tasks.md.
3. Tomar una tarea concreta del roadmap.
4. Implementar el cambio sin romper las ocho rutas ni los recursos existentes.
5. Validar escritorio, móvil, teclado, accesibilidad y enlaces.
6. Marcar la tarea únicamente cuando su criterio de terminado tenga evidencia.

## Abrir el sitio

Abre index.html en un navegador moderno. Para desarrollo local también puedes servir la carpeta con cualquier servidor HTTP estático.

## Validación rápida

```bash
git diff --check
node tools/generate-pages.mjs
```

El recorrido manual completo está en docs/validation.md.

## Nota editorial

Los textos, imágenes y datos deben provenir de material aprobado por BPVDA. Dirección, teléfonos, correo y horarios deben confirmarse antes de una publicación definitiva.