# Guía del Agente — Proyecto BPVDA (SDD)

> Este archivo complementa a [AGENTS.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/AGENTS.md) y se rige por la especificación canónica [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md).

---

## 1. Arquitectura Autorizada
* **Entregable Estático**: Sitio web multipágina estático compuesto por 16 páginas HTML puras compartiendo `css/styles.css` y `js/main.js`.
* **Prohibido**: No introducir frameworks de JS (React, Next.js, Vue), preprocesadores de CSS (Sass, Tailwind) ni pasos de compilación en tiempo de ejecución.
* **Preparación para WordPress**: Estructura modular pensada para futura conversión a tema dinámico de WordPress.

---

## 2. Reglas de Mantenimiento e Inmutabilidad
1. **Preservar la Identidad Visual**: Mantener la estética superior inspirada en *The Walker School* y *The Dunham School*.
2. **Duración del Video Hero**: El video inicial en `index.html` debe permanecer un mínimo de 10 segundos antes del siguiente slide.
3. **Contenido del Slider**: Misión, visión, valores y llamado a admisión deben mantenerse activos y accesibles.
4. **Comportamiento del Menú**: Panel flotante con margen exterior visible, esquinas redondeadas y cierre automático con la tecla `Escape`.
5. **Cero Imágenes con IA**: Utilizar exclusivamente la multimedia real escolar resguardada en `assets/media/`.
6. **Cero Lorem Ipsum**: Redacción con propósito o textos descriptivos de guía.

---

## 3. Regeneración y Verificación
* **Plantillas Modulares**: La cabecera y el pie comunes residen en `tools/templates/header.html` y `tools/templates/footer.html`.
* **Compilación**: Ante cualquier ajuste de componentes comunes, ejecutar:
  ```bash
  node tools/generate-pages.mjs
  ```
* **Auditoría Técnica Obligatoria**: Tras cualquier cambio, ejecutar:
  ```bash
  node tools/verify-integrity.mjs
  ```
  El reporte debe arrojar 0 enlaces rotos y 0 recursos multimedia faltantes.

