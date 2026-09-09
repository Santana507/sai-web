# Plan 001 — Organización y calidad del sitio BPVDA

## Arquitectura actual

1. Mantener las páginas HTML como entregable actual.
2. Compartir css/styles.css y js/main.js.
3. Conservar assets/ como fuente local de recursos visuales.
4. Usar tools/generate-pages.mjs solo como fuente de generación cuando corresponda.
5. Mantener docs/ y specs/ separados del código de producción.

## Orden de trabajo

1. Completar y mantener la documentación SDD.
2. Auditar contenido y enlaces sin rediseñar todavía.
3. Auditar accesibilidad y responsive.
4. Priorizar mejoras visuales pequeñas con evidencia.
5. Revisar rendimiento multimedia.
6. Confirmar datos editoriales y publicar.
7. Tratar cualquier CMS o integración como una nueva spec.

## Estrategia de cambios

- Cada tarea debe modificar el menor número de archivos posible.
- Los cambios compartidos en CSS o JavaScript requieren revisar las ocho áreas.
- Las mejoras visuales deben conservar el contenido salvo que la tarea indique una edición editorial.
- Las decisiones no confirmadas se registran en clarifications.md.

## Verificación

- Ejecutar las comprobaciones de docs/validation.md.
- Revisar escritorio y móvil.
- Comparar el estado antes y después cuando el cambio sea visual.
- Actualizar tasks.md solo con evidencia.