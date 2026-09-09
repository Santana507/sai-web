# Validación del proyecto BPVDA

## Validación automatizada

Desde la raíz del repositorio:

```bash
git diff --check
node tools/generate-pages.mjs
```

El generador debe ejecutarse solo cuando se haya modificado su fuente o cuando la tarea indique regeneración. Si falla o no está disponible alguna herramienta, registra la razón y no marques la tarea como completamente validada.

## Validación de contenido y enlaces

1. Abrir las ocho áreas y comprobar que las rutas funcionen.
2. Revisar que navegación, pie, imágenes, videos, favicon y enlaces locales no estén rotos.
3. Comparar los párrafos y contenidos preservados cuando el cambio sea visual.
4. Confirmar que los datos pendientes sigan identificados como provisionales.

## Validación visual y responsive

1. Revisar portada, menú, slider, tarjetas, introducciones, videos, formulario y botón de retorno.
2. Probar escritorio y móvil en los tamaños objetivo.
3. Confirmar que no haya desbordamiento horizontal, solapamientos o controles fuera de pantalla.

## Validación de accesibilidad

1. Recorrer el sitio solo con teclado.
2. Comprobar foco visible y nombres accesibles.
3. Verificar jerarquía de encabezados, alt, contraste y reduced motion.
4. Confirmar que el menú y el formulario puedan usarse en móvil.

## Cierre

Relaciona cada tarea con los archivos modificados y la evidencia de validación. No marques una tarea como terminada si depende de datos o aprobaciones que todavía no existen.