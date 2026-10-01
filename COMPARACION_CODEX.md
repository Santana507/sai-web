# Control de Calidad y Comparación con Especificaciones Codex

Este documento audita el estado del código actual respecto a las especificaciones de diseño y requerimientos de calidad técnica, integrando los principios de la metodología **Spec-Driven Development (SDD)**.

---

## 🟢 Elementos Cumplidos Satisfactoriamente

1. **Arquitectura y Segmentación Canónica (16 Páginas en 5 Pilares)**:
   * El proyecto superó la segmentación básica inicial de 8 páginas para desplegar una estructura completa de 16 páginas agrupadas en los 5 pilares institucionales (Nuestra Escuela, Enfoque Educativo, Familia y Comunidad, Primaria, Secundaria y Bachilleres). Cumple con el objetivo de ofrecer una experiencia inmersiva, profunda y escalable.

2. **Uso Exclusivo de Multimedia Real (No IA)**:
   * **100% de autenticidad**: Cero imágenes generadas sintéticamente. Todo el contenido gráfico corresponde al alumnado, personal e instalaciones de BPVDA.
   * **Optimización de formatos**: Medios en producción servidos en `.webp` y `.mp4` con `faststart`. Las fotos pesadas en crudo (`.JPG`/`.PNG` de 10 MB) se encuentran aisladas en `assets/raw-originals/`.

3. **Duración y Calidad del Video Hero**:
   * El video ambiental `hero-campus.mp4` está recortado a ~12 segundos, con compresión H.264 optimizada (reducción del 76% en peso), cumpliendo con el umbral mínimo obligatorio de 10 segundos como enganche visual inmersivo.

4. **Comportamiento del Slider Horizontal**:
   * Encabezado por el lema institucional obligatorio *"Forjando Espíritus Nuevos"*.
   * Jerarquía de encabezados semánticos de SEO: un único `<h1>` en el slide 1 y `<h2>` estilizados en los slides sucesivos.
   * Avance automático sincronizado (10s en slide 1, 7s en siguientes), soporte de pausa interactiva (`Ⅱ`/`▶`) y gestos táctiles de deslizamiento (*swipe*).
   * Llamado a la acción que conduce directamente a `admisiones.html`.

5. **Composiciones en Tarjetas (Cards y Mosaicos)**:
   * Cuadrículas modulares específicas para cada etapa: stacks de fotos en Prekínder, cápsulas en Kínder, mosaicos en Primaria y cuadrícula docente en Plantel.

6. **Pie de Página Enriquecido (Footer de 3 Columnas)**:
   * Ubicación física oficial con enlace directo y verificado a Google Maps.
   * Desglose claro de horarios (regular y verano) y canales de secretaría.
   * Enlaces directos a PBX, WhatsApp interactivo y redes sociales con iconos oficiales.

7. **Modularización y Mantenibilidad del Código**:
   * Componentes comunes desacoplados en `tools/templates/header.html` y `tools/templates/footer.html`.
   * Herramienta de auditoría automática `tools/verify-integrity.mjs` que certifica 0 enlaces rotos en las 16 páginas.

---

## 🟡 Puntos de Atención y Filosofía del Menú Flotante

1. **Equilibrio entre Cobertura de Pantalla y Contexto de Fondo**:
   * **Directriz**: El menú flotante debe mantener visibles los márgenes laterales e inferiores (`inset: 0 14px 14px 14px; border-radius: 0 0 16px 16px;`) para conservar la sensación de tarjeta modal superpuesta sin desorientar al usuario.
   * **Accesibilidad**: Se integró gestión rigurosa de foco (*Focus Trap* para usuarios que navegan con teclado), cierre inmediato con la tecla `Escape` y ocultamiento automático del logo institucional (`opacity: 0`) para evitar empalmes gráficos.
   * **Legibilidad Editorial**: El menú distribuye los 5 pilares en columnas limpias sin cortes de palabras, con contraste contrastado sobre fondo azul noche (`--deep`).
