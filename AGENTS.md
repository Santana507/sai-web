# AGENTS.md — Colegio Buen Pastor Voz de Alerta (BPVDA)

> **Metodología**: Spec-Driven Development (SDD).
> **Propósito**: Manual de instrucciones, directrices y reglas innegociables para agentes de inteligencia artificial y desarrolladores en este repositorio.

---

## Migración a WordPress

Rama de trabajo: main. No usar pruebas-smith.

### Estructura
- Sitio estatico original: HTML/CSS/JS en la raiz (fuente de verdad del diseno).
- wordpress-theme/: tema WordPress (pvda-theme).
  - header.php / ooter.php: cabecera con menu y pie compartidos.
  - ront-page.php: portada; su contenido se edita en Paginas > Inicio (bloques Gutenberg).
  - page-<slug>.php: una plantilla por pagina, copia fiel de <slug>.html (estaticas por ahora).
  - inc/home-blocks.html: contenido inicial de la portada en bloques.
  - unctions.php: crea las paginas, fija la portada y carga el contenido inicial una sola vez.
- wordpress-export/bpvda-contenido.xml: exportacion WXR (Herramientas > Importar > WordPress).
- 	ools/build-wp-pages.ps1: regenera page-*.php y la cabecera desde los HTML.
- 	ools/build-home-blocks.php: regenera inc/home-blocks.html desde index.html (php tools/build-home-blocks.php).

### Pendiente
- Hacer editable el menu (Apariencia > Menus, 5 grupos actuales).
- Convertir las demas paginas a bloques/widgets, una por una.
- Al desplegar: reemplazar URLs localhost en el contenido importado.

### Local
XAMPP: C:\xampp\htdocs\BPVDA_WP; el tema esta enlazado por junction a wordpress-theme/.

---

## 1. Proyecto y Visión General
* **Qué es**: Sitio web institucional de alto nivel para el **Colegio Buen Pastor Voz de Alerta (BPVDA)**, ubicado en 24 de Diciembre, Ciudad de Panamá.
* **Arquitectura**: Sitio estático multipágina estructurado en **16 páginas** agrupadas bajo **5 pilares institucionales**.
* **Tecnologías**: HTML5 semántico puro, CSS3 autocontenido (con variables globales y diseño responsive sin preprocesadores) y JavaScript nativo (Vanilla JS, modularizado en IIFE). Sin dependencias de compilación en el navegador ni frameworks como Tailwind, React o Vue.
* **Estilo y Composición**: Dinamismo visual superior, slider horizontal multipantalla, composiciones asimétricas en tarjetas y jerarquía editorial estructurada.
* **Meta Futura**: Preparado para una conversión directa y modular a plantilla dinámica (*Theme*) de **WordPress**.

---

## 2. Comandos Esenciales del Proyecto

| Acción | Comando | Descripción |
| :--- | :--- | :--- |
| **Visualizar sitio** | Abrir index.html en el navegador | No requiere servidor ni paso de compilación para visualizarse. |
| **Servidor local (opcional)** | 
px serve . o python -m http.server 8080 | Para probar comportamiento HTTP en entorno local. |
| **Regenerar páginas** | 
ode tools/generate-pages.mjs | Compila las 16 páginas desde las plantillas modulares (	ools/templates/). |
| **Verificación de integridad** | 
ode tools/verify-integrity.mjs | Valida 0 enlaces rotos (href) y 0 recursos multimedia faltantes (src). |
| **Control de Git** | git status / git diff | Comprueba el estado del árbol de trabajo. |

---

## 3. Estilo y Convenciones de Código

### HTML
* Uso estricto de HTML5 semántico (<header>, <nav>, <main>, <section>, <article>, <footer>).
* Atributos de accesibilidad obligatorios: ria-expanded, ria-hidden, ria-label, <a class="skip-link" href="#contenido">.
* Solo un encabezado <h1> semántico por página; las tarjetas y diapositivas subsecuentes deben usar <h2> o <h3> con las clases tipográficas apropiadas.

### CSS
* Ubicado exclusivamente en css/styles.css, estructurado bajo el índice arquitectónico de 9 módulos.
* Uso obligatorio de variables CSS para la paleta de colores institucional:
  * --navy: #072b49 (Azul corporativo principal)
  * --deep: #031c31 (Fondo de alto contraste y hero)
  * --turquoise: #10b8b0 (Acento primario)
  * --orange: #ff6b2c (Acento secundario cálido)
  * --paper: #f4f1ea y --cream: #fbf9f3 (Fondos cálidos de contenido)
  * --gray: #5c6873 (Textos secundarios y metadatos)
* Tipografía única: Montserrat (Google Fonts), fluidamente escalada mediante clamp().

### JavaScript
* Código nativo encapsulado en función auto-ejecutable (IIFE) en js/main.js.
* Sin librerías externas ni polyfills pesados.
* Gestión rigurosa del foco (*Focus Trap*) en elementos interactivos modales (teclas Tab y Shift+Tab).
* Detección de visibilidad eficiente mediante IntersectionObserver para Scroll Reveal y control de videos.

---

## 4. Reglas Innegociables (Constitución del Proyecto)

1. **Prioridad Visual Absoluta**: **NUNCA sacrificar la calidad visual** por aspectos técnicos. Cualquier optimización debe preservar intacta la estética, fuentes y dinamismo aprobados.
2. **Duración del Video Hero**: El video principal de inicio en index.html debe durar al menos 10 segundos antes de avanzar al siguiente slide como enganche visual inmersivo.
3. **Uso Exclusivo de Multimedia Real (No IA)**:
   * **PROHIBIDO generar imágenes sintéticas con Inteligencia Artificial** para inventar estudiantes, docentes o aulas.
   * Utilizar exclusivamente las fotografías y videos reales del colegio provistos en el repositorio.
   * Si falta una fotografía definitiva, usar contenedores estructurados con fondos institucionales y textos descriptivos de guía.
4. **Taxonomía Canónica de Archivos Multimedia**:
   * Las imágenes de producción deben servirse en formato .webp dentro de ssets/fotos/.
   * Los videos deben estar en formato .mp4 dentro de ssets/videos/ con codificación H.264 y atom moov al inicio (+faststart).
   * Los videos secundarios **no deben llevar bucle (loop)**: inician al ser visibles y se pausan en el último fotograma al terminar (ended).
   * Los archivos crudos de alta resolución (.JPG/.PNG de 10 MB) deben resguardarse en ssets/raw-originals/.
5. **Coherencia Temática y Selección Contextual Obligatoria (Regla de Oro)**:
   * **LECTURA PREVIA OBLIGATORIA**: Cuando la IA o el desarrollador vaya a integrar o cambiar una imagen o video, **debe leer primero el contenido de la carpeta específica** correspondiente a la sección que está editando.
   * **ASIGNACIÓN ESTRICTA POR SECCIÓN (Prohibido mezclar categorías sin petición expresa)**:
     * **Apartados de Secundaria / Bachilleres / Ciencias / Robótica**: Usar **únicamente** archivos de ssets/fotos/secundaria/ (o videos afines de ssets/videos/). **PROHIBIDO** tomar fotos de ssets/fotos/exterior/ o de ssets/fotos/primaria-preescolar/ para secciones de secundaria, salvo que el usuario lo solicite explícitamente.
     * **Apartados de Prekínder / Kínder / Primaria**: Usar **únicamente** imágenes de ssets/fotos/primaria-preescolar/. **PROHIBIDO** colocar estudiantes de secundaria o bachillerato en estas secciones.
     * **Apartados de Instalaciones / Campus / Áreas Exteriores**: Usar **únicamente** imágenes de ssets/fotos/exterior/.
     * **Apartados Institucionales / Filosofía / Admisiones / Comunidad / Valores**: Usar imágenes de ssets/fotos/institucional/ (o fotos específicas de fachada de ssets/fotos/exterior/ cuando se refiera a la sede).
     * **Apartados de Video**: Usar videos alojados exclusivamente en ssets/videos/ acordes al tema del bloque.
6. **Copywriting con Propósito (No Lorem Ipsum)**:
   * **PROHIBIDO el uso de Lorem Ipsum** o textos de relleno genéricos y cliché.
   * Si falta contenido institucional final, utilizar textos de guía descriptivos (Ej: *"En esta sección se detallará el programa formativo de Primaria..."*).
7. **Comportamiento del Menú**:
   * Debe conservar su diseño flotante modal con bordes y base redondeados (inset: 0 14px 14px 14px; border-radius: 0 0 16px 16px;).
   * Debe ocultar el logo principal con opacity: 0 al abrirse para evitar superposiciones.
   * Debe cerrarse inmediatamente con la tecla Escape o al hacer clic en cualquier enlace interno.
8. **Fuente Canónica de Verdad (spec.md)**:
   * Cualquier desarrollo o adición funcional debe contrastarse primero con [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md) antes de escribir código.

---

## 5. Protocolo de Trabajo Agéntico (Flujo SDD)

Antes de realizar cambios, el agente debe seguir obligatoriamente este flujo:
1. **Revisión de Especificación**: Leer [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md) para confirmar qué se requiere construir y por qué.
2. **Inspección de Medios**: Si la tarea involucra imágenes o videos, listar los archivos disponibles en la subcarpeta pertinente (ssets/fotos/{sección}/ o ssets/videos/) antes de redactar las rutas.
3. **Ejecución Incremental**: Trabajar por tareas específicas y atómicas. No intentar refactorizar toda la web en un solo paso descontrolado.
4. **Sincronización de Plantillas**: Si se modifica la cabecera, el menú o el pie de página, editar los fragmentos en 	ools/templates/ y ejecutar 
ode tools/generate-pages.mjs.
5. **Verificación Obligatoria**: Antes de dar por finalizada cualquier tarea, ejecutar:
   \\\ash
   node tools/verify-integrity.mjs
   \\\
   El reporte debe confirmar **0 enlaces rotos** y **0 recursos multimedia faltantes**.
6. **Documentación de Cambios**: Registrar las adiciones relevantes en DOCUMENTACION_CAMBIOS.md.
