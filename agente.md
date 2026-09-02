# Agente del proyecto BPVDA

## Arquitectura autorizada

El entregable es un sitio estático multipágina. Las páginas deben permanecer en HTML y compartir `css/styles.css` y `js/main.js`. No introducir frameworks o pasos de compilación sin autorización expresa.

## Reglas de mantenimiento

1. Preservar la identidad visual derivada de SMITH.
2. Mantener la segmentación multipágina adaptada de Santana.
3. El video inicial debe permanecer 10 segundos antes del siguiente estado.
4. Misión, visión, valores y admisión deben seguir presentes en el slider.
5. El menú debe dejar margen visible alrededor y cerrarse con Escape.
6. Mantener `mix-blend-mode: difference` en el texto principal de navegación.
7. No generar imágenes con IA ni inventar fotografías del personal.
8. Confirmar los datos institucionales antes de publicar.
9. Comentar únicamente la lógica o los estilos cuya intención no sea evidente.

## Regeneración de páginas

`tools/generate-pages.mjs` contiene las plantillas y el contenido compartido. Si se modifica ese generador, debe ejecutarse nuevamente y comprobar todas las páginas antes de empaquetar.

