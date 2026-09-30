# AGENTS.md — Colegio Buen Pastor Voz de Alerta (BPVDA)

> **Metodología**: Spec-Driven Development (SDD) — Estándar MoureDev.  
> **Propósito**: Manual de instrucciones, directrices y reglas innegociables para agentes de inteligencia artificial y desarrolladores en este repositorio.

---

## 1. Proyecto y Visión General
* **Qué es**: Sitio web institucional de alto nivel para el **Colegio Buen Pastor Voz de Alerta (BPVDA)**, ubicado en 24 de Diciembre, Ciudad de Panamá.
* **Arquitectura**: Sitio estático multipágina estructurado en **16 páginas** agrupadas bajo **5 pilares institucionales**.
* **Tecnologías**: HTML5 semántico puro, CSS3 autocontenido (con variables globales y diseño responsive sin preprocesadores) y JavaScript nativo (Vanilla JS, modularizado en IIFE). Sin dependencias de compilación en el navegador ni frameworks como Tailwind, React o Vue.
* **Inspiración**: *The Walker School* (dinamismo, slider horizontal, composiciones en tarjetas) y *The Dunham School* (estructura de contenidos y jerarquías).
* **Meta Futura**: Preparado para una conversión directa y modular a plantilla dinámica (*Theme*) de **WordPress**.

---

## 2. Comandos Esenciales del Proyecto

| Acción | Comando | Descripción |
| :--- | :--- | :--- |
| **Visualizar sitio** | Abrir `index.html` en el navegador | No requiere servidor ni paso de compilación para visualizarse. |
| **Servidor local (opcional)** | `npx serve .` o `python -m http.server 8080` | Para probar comportamiento HTTP en entorno local. |
| **Regenerar páginas** | `node tools/generate-pages.mjs` | Compila las 16 páginas desde las plantillas modulares (`tools/templates/`). |
| **Verificación de integridad** | `node tools/verify-integrity.mjs` | Valida 0 enlaces rotos (`href`) y 0 recursos multimedia faltantes (`src`). |
| **Control de Git** | `git status` / `git diff` | Comprueba el estado del árbol de trabajo. |

---

## 3. Estilo y Convenciones de Código

### HTML
* Uso estricto de HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* Atributos de accesibilidad obligatorios: `aria-expanded`, `aria-hidden`, `aria-label`, `<a class="skip-link" href="#contenido">`.
* Solo un encabezado `<h1>` semántico por página; las tarjetas y diapositivas subsecuentes deben usar `<h2>` o `<h3>` con las clases tipográficas apropiadas.

### CSS
* Ubicado exclusivamente en `css/styles.css`, estructurado bajo el índice arquitectónico de 9 módulos.
* Uso obligatorio de variables CSS para la paleta de colores institucional:
  * `--navy: #072b49` (Azul corporativo principal)
  * `--deep: #031c31` (Fondo de alto contraste y hero)
  * `--turquoise: #10b8b0` (Acento primario)
  * `--orange: #ff6b2c` (Acento secundario cálido)
  * `--paper: #f4f1ea` y `--cream: #fbf9f3` (Fondos cálidos de contenido)
  * `--gray: #5c6873` (Textos secundarios y metadatos)
* Tipografía única: `Montserrat` (Google Fonts), fluidamente escalada mediante `clamp()`.

### JavaScript
* Código nativo encapsulado en función auto-ejecutable (IIFE) en `js/main.js`.
* Sin librerías externas ni polyfills pesados.
* Gestión rigurosa del foco (*Focus Trap*) en elementos interactivos modales (teclas `Tab` y `Shift+Tab`).
* Detección de visibilidad eficiente mediante `IntersectionObserver` para Scroll Reveal y control de videos.

---

## 4. Reglas Innegociables (Constitución del Proyecto)

1. **Prioridad Visual Absoluta**: **NUNCA sacrificar la calidad visual** por aspectos técnicos. Cualquier optimización debe preservar intacta la estética, fuentes y dinamismo aprobados.
2. **Duración del Video Hero**: El video principal de inicio en `index.html` debe durar al menos 10 segundos antes de avanzar al siguiente slide como enganche visual inmersivo.
3. **Uso Exclusivo de Multimedia Real (No IA)**:
   * **PROHIBIDO generar imágenes sintéticas con Inteligencia Artificial** para inventar estudiantes, docentes o aulas.
   * Utilizar exclusivamente las fotografías y videos reales del colegio provistos en el repositorio.
   * Si falta una fotografía definitiva, usar contenedores estructurados con fondos institucionales y textos descriptivos de guía.
4. **Formatos Multimedia de Producción**:
   * Las imágenes de producción deben servirse en formato `.webp`.
   * Los videos deben estar optimizados para web (formato `.mp4` con codificación H.264 y atom `moov` al inicio con `+faststart`).
   * Los videos secundarios **no deben llevar bucle (`loop`)**: inician al ser visibles y se pausan en el último fotograma al terminar (`ended`).
   * Los archivos crudos de alta resolución (`.JPG`/`.PNG` de 10 MB) deben resguardarse en `assets/raw-originals/`, no en `assets/media/`.
5. **Copywriting con Propósito (No Lorem Ipsum)**:
   * **PROHIBIDO el uso de Lorem Ipsum** o textos de relleno genéricos y cliché.
   * Si falta contenido institucional final, utilizar textos de guía descriptivos (Ej: *"En esta sección se detallará el programa formativo de Primaria..."*).
6. **Comportamiento del Menú**:
   * Debe conservar su diseño flotante modal con bordes y base redondeados (`inset: 0 14px 14px 14px; border-radius: 0 0 16px 16px;`).
   * Debe ocultar el logo principal con `opacity: 0` al abrirse para evitar superposiciones.
   * Debe cerrarse inmediatamente con la tecla `Escape` o al hacer clic en cualquier enlace interno.
7. **Fuente Canónica de Verdad (`spec.md`)**:
   * Cualquier desarrollo o adición funcional debe contrastarse primero con [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md) antes de escribir código.

---

## 5. Protocolo de Trabajo Agéntico (Flujo SDD)

Antes de realizar cambios, el agente debe seguir obligatoriamente este flujo:
1. **Revisión de Especificación**: Leer [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md) para confirmar qué se requiere construir y por qué.
2. **Ejecución Incremental**: Trabajar por tareas específicas y atómicas. No intentar refactorizar toda la web en un solo paso descontrolado.
3. **Sincronización de Plantillas**: Si se modifica la cabecera, el menú o el pie de página, editar los fragmentos en `tools/templates/` y ejecutar `node tools/generate-pages.mjs`.
4. **Verificación Obligatoria**: Antes de dar por finalizada cualquier tarea, ejecutar:
   ```bash
   node tools/verify-integrity.mjs
   ```
   El reporte debe confirmar **0 enlaces rotos** y **0 recursos multimedia faltantes**.
5. **Documentación de Cambios**: Registrar las adiciones relevantes en `DOCUMENTACION_CAMBIOS.md`.
