# Documentación de Cambios — BPVDA Web

Historial cronológico de cambios aplicados en el repositorio y código fuente del sitio web del **Colegio Buen Pastor Voz de Alerta**.

## Sesión #29 — Rediseño Minimalista y Editorial de la Sección Primaria (`primaria.html`)
- **Objetivo**: Corregir la repetición de fotografías burst (`IMG_9538.webp` y `IMG_9540.webp`), eliminar el hueco en blanco asimétrico en la cuadrícula y renovar el diseño con una estética minimalista, armónica, natural y sin tono genérico de IA.
- **Cambios Estructurales en HTML y Plantillas (`tools/generate-pages.mjs` y `primaria.html`)**:
  - **Reemplazo Fotográfico Real**: Sustitución de las imágenes repetidas por fotografías auténticas y no duplicadas del plantel: `IMG_9468.webp` (estudiantes en aula interactiva con tabletas educativas) y `IMG_9544.webp` (docente y alumnos dialogando en el patio bajo los árboles).
  - **Declaración y Pilares No-Imagen (`.primary-statement--enriched`)**: Encabezado editorial con tipografía limpia y franja de 3 pilares clave (`01 Lectura y Pensamiento`, `02 Entorno Digital Guiado`, `03 Convivencia y Valores`).
  - **Mosaico Balanceado 2x2 (`.primary-mosaic`)**: Cuadrícula de 4 elementos completamente ocupados (sin huecos ni columnas colapsadas):
    - Celda 1: Fotografía de aprendizaje activo en aula digital (`IMG_9468.webp`) con pie flotante sutil.
    - Celda 2: Tarjeta azul marino institucional (`var(--navy)`) con enfoque de autonomía, lectura comprensiva y retos aplicados.
    - Celda 3: Tarjeta turquesa institucional (`#0e827b`) enfocada en vida escolar, valores cristianos y acompañamiento.
    - Celda 4: Fotografía de convivencia al aire libre (`IMG_9544.webp`) con pie flotante sutil.
- **Estilos CSS (`css/styles.css`)**:
  - Nuevas clases `.primary-statement--enriched`, `.primary-pillars`, `.primary-pillar`, `.primary-mosaic`, `.primary-mosaic__item`, `.primary-mosaic__caption`, `.primary-card__tag`, `.primary-card__list`.
  - Grid simétrico `repeat(2, minmax(0, 1fr))` que se adapta a 1 columna fluida en pantallas `<= 900px` y móviles `<= 600px` sin desbordamientos.
- **Sincronización y Validación**:
  - Compilación automática con `node tools/generate-pages.mjs`.
  - Sincronización del tema WordPress con `tools/build-wp-pages.ps1` (`wordpress-theme/page-primaria.php`).
  - Verificación con `node tools/verify-integrity.mjs`: 0 enlaces rotos y 0 recursos multimedia faltantes en 18 archivos HTML.

---

## Sesión #28 — Laboratorio de Plantillas y Diseños Alternativos (`/pruebas/`)
- **Objetivo**: Atender la retroalimentación de repetición estructural en secciones del sitio, proporcionando al menos 6 variantes de diseño frescas y asimétricas que respetan al 100% el manual de estilo, colores institucionales y fotos reales de BPVDA.
- **Creación de Carpeta `/pruebas/`**:
  - `pruebas/index.html`: Catálogo interactivo central con menú flotante, navegación anclada, selector de código modal con un solo clic y visualización en vivo de cada una de las 6 plantillas.
  - `pruebas/plantilla-1-bento.html`: Mosaico Editorial Asimétrico (Bento Grid) de 12 columnas con tarjeta hero de alto impacto, tarjeta métrica oscura y microtarjetas de acción.
  - `pruebas/plantilla-2-split-tabs.html`: Showcase Dividido con Pestañas Interactivas (`Split Tabs`) para explorar niveles académicos o áreas formativas sin scroll excesivo.
  - `pruebas/plantilla-3-timeline-steps.html`: Proceso Escalonado en Zigzag con conectores e hitos numerados, ideal para admisiones y rutas de aprendizaje.
  - `pruebas/plantilla-4-testimonios-comunidad.html`: Muro de Testimonios y Prueba Social con diseño editorial, avatares con anillo turquesa y tipografía de citas.
  - `pruebas/plantilla-5-metricas-comparativa.html`: Franja de contadores estadísticos institucionales combinada con matriz comparativa entre modelo tradicional y modelo BPVDA.
  - `pruebas/plantilla-6-explorador-inmersivo.html`: Galería fotográfica panorámica con barra de filtros por categoría (Académico, Campus, Convivencia).
  - `pruebas/plantillas.css` & `pruebas/plantillas.js`: Estilos autocontenidos y scripts interactivos para filtros, tabs y modal de código.
  - `pruebas/README.md`: Documentación explicativa para el usuario con guía de adaptación hacia las páginas de producción.
- **Verificación**: Integridad de recursos y rutas validada sin errores ni enlaces rotos.

---

## Sesión #1 — Ajustes de Navegación, Header y Menú
- **Logo Institucional**: Se amplió a 68px (48px en scroll), transparente y ubicado en el extremo izquierdo sin contenedor circular.
- **Navegación Esencial**: Enlaces "Misión", "Admisión" y "Contacto" alineados a la derecha, a la izquierda del botón "MENÚ".
- **Hero Slider**: Duración de video fijada en 10 segundos, botón de pausa `Ⅱ` removido.
- **Menú Desplegable Estático**: Adaptado a 100% de la pantalla sin scroll vertical (`overflow: hidden`), eliminando el banner publicitario inferior sobrante.

---

## Sesión #2, Cambio #1 — Integración de Contenidos de Sebastián
- **Extracción e Integración de Textos**: Se extrajeron todos los nuevos textos de la edición de Sebastián para las 8 páginas (`index.html`, `nosotros.html`, `mision.html`, `vision.html`, `curriculo.html`, `actividades.html`, `admision.html`, `contacto.html`).
- **Respeto de Estructura**: Se conservó al 100% la cabecera, estilos y código funcional de la Sesión #1.
- **6 Preguntas Frecuentes**: Incorporación completa de las 6 FAQs ampliadas de admisión.

---

## Sesión #2, Cambio #2 — Reequilibrio de Sección 01 y Eliminación de Espacio Vacío
- **Alineación Superior (`align-items: start`)**: Eliminación del desbalance donde el título `Una escuela se reconoce por lo que hace posible` descendía al fondo del párrafo.
- **Dos Columnas Armónicas**: Columna izquierda con título principal + bloque de *Nuestra promesa*, columna derecha con párrafo principal.
- **Ajuste de Padding**: Reducción de padding de entrada (`.statement.section-pad`) para que el contenido sea visible inmediatamente tras hacer scroll en el slider.

---

## Sesión #2, Cambio #3 — Rediseño de Footer, Cita Inspiradora y Espaciado de Comunidad
- **Pie de Página en 3 Columnas**:
  - Columna 1: Logo oficial blanco transparente + ubicación institucional.
  - Columna 2: Oficina (teléfono y horarios de atención/verano).
  - Columna 3: Atención al cliente (teléfonos y correo).
- **Redes Sociales Discretas**: Botones circulares idénticos (36px) para Gmail directo, Facebook e Instagram con hover interactivo en color naranja `#ff6b2c`.
- **Cita Motivacional**: Sección `.hero-quote` añadida justo debajo del Slider con la frase de Yokoi Kenji resaltando *disciplina* e *inteligencia*.
- **Espaciado en "Somos Comunidad"**: Aumento de padding y márgenes para otorgarle aire respirable respecto a las secciones adyacentes.
- **Jerarquía Tipográfica**: "Una escuela que se" más pequeño y "vive en compañía" más grande y destacado.

---

## Sesión #2, Cambio #4 — Nav Flotante Cuadrado, Logo Fijo y Panel de Menú
- **Nav Original Preservado en Tope**: El header conserva su fondo azul translúcido original mientras se esté en el extremo superior de la página.
- **Desvanecimiento al Scroll (Modo Libre)**:
  - Al bajar en la página (pasando el slider horizontal o >40px en interiores), el color de fondo de la barra, sus bordes y el texto ("Misión", "Admisión", etc.) se desvanecen suavemente volviéndose invisibles.
  - El logo en la izquierda **se mantiene estático** y disponible para ir a Inicio.
  - El botón de menú **permanece visible** a la derecha.
- **Botón de Menú Cuadrado y Sin Texto**:
  - El botón es estrictamente cuadrado (`44x44px`), eliminando las etiquetas de "MENÚ" y "CERRAR".
  - Se utilizan íconos PNG proporcionados para alternar entre el ícono hamburguesa (cerrado) y la cruz gruesa (abierto).
- **Panel de Menú Mejorado**:
  - Eliminación de placeholders o imágenes superpuestas, limitándose a una **sola fotografía unificada**.
  - Aumento del espaciado (margins y paddings) de los enlaces 01, 02 y 03 para equilibrar la composición vertical de manera armónica.
  - Inclusión de los datos de contacto y redes sociales unificados en la esquina inferior izquierda del panel.
- **Centrado Restituido (Sin Franjas Blancas)**:
  - Centrado de las cuadrículas (`.interior-grid`) aplicado al comportamiento interno del bloque CSS (`justify-content: center`) y el centrado de FAQs (`margin: 0 auto`) en lugar de recortar el contenedor padre. De esta forma, el color del fondo fluye natural al 100% de la pantalla sin romper el layout.
- **Botón "Volver Arriba" (Back-to-top)**: Añadido botón interactivo en la esquina inferior derecha visible en todas las pantallas.
---

## Sesión #2, Cambio #5.1.1 — Perfeccionamiento Visual: Sombra en Logo, Menú sin Brecha Superior, Imagen Cuadrada Única y Botón Centrado
- **Sombra en Logo Principal**: Adición de `drop-shadow(0 3px 8px rgba(0, 0, 0, 0.5))` para mejorar su contraste y jerarquía sobre el hero y los fondos claros.
- **Ocultación del Logo en Menú**: El logo institucional se oculta automáticamente con `opacity: 0` al abrir el menú para evitar superposiciones indeseadas.
- **Eliminación del Gap Superior del Menú**: Ajuste de `.menu-panel` para ocupar `top: 0` eliminando la rendija transparente superior, preservando los laterales y base redondeados flotantes (`inset: 0 14px 14px 14px; border-radius: 0 0 16px 16px;`).
- **Una Sola Imagen Cuadrada**: Erradicación del pseudo-elemento legado `.menu-panel__intro::after` que inyectaba una segunda foto (`community.webp`). La foto del menú pasa a ser estrictamente cuadrada (`240x240px`, `aspect-ratio: 1 / 1`) con bordes suavemente redondeados (`border-radius: 10px;`).
- **Centrado Simétrico del Menú**: Eliminación de padding asimétrico en `.menu-button` para centrar perfectamente los íconos PNG de hamburguesa y cruz (`✕`).
- **Animación Fluida de Nav**: Transiciones sincronizadas de 0.6s para el fondo, sombras y enlaces, activándose suavemente a la mitad del slider principal.
---

## Sesión #3, Cambio #1 — Optimización Multimedia (WebP/Video), Accesibilidad Alt, Jerarquía H1/H2 y Recorte de Logo
- **Creación de Sesión #3**: Rama y carpeta independiente para la nueva fase de optimizaciones y producción.
- **Conversión de Medios a WebP**: Todas las imágenes PNG y JPG/JPEG (`culture.png`, `early-learning.png`, `science-action.png`, `science-student.jpeg`, `achievement.jpg`, `recognition.jpg`, etc.) convertidas a formato `.webp` de última generación con compresión de alta calidad (-q 85), reduciendo el peso de imágenes en más de un 75%.
- **Recorte y Optimización de Videos**:
  - `hero-campus.mp4`: Recortado de 61s a 12s para ajustarse a la duración del primer slide, pista de audio innecesaria eliminada (`-an`), recomprimido con libx264 (CRF 23) y atom `moov` movido al inicio (`+faststart`) para streaming instantáneo. Peso reducido de 8.94 MB a 2.17 MB (reducción del 76%).
  - Videos complementarios (`school-life-1.mp4`, `school-life-2.mp4`) optimizados con faststart.
- **Recorte del Lienzo del Logo**: Lienzo transparente innecesario de 1024x576 recortado a 913x308 píxeles útiles, eliminando 276px de espacios muertos verticales. El CSS de `.brand-logo-img` se simplificó a 48px de alto (38px en scroll) luciendo nítido, balanceado y sin trucos de posicionamiento.
- **Jerarquía Semántica de Encabezados (SEO)**: En `index.html`, solo el primer slide conserva la etiqueta `<h1>`. Los slides 2, 3, 4 y 5 se actualizaron a `<h2 class="slide-heading">`, compartiendo las mismas reglas tipográficas y colores para conservar el diseño visual idéntico.
- **Auditoría de Accesibilidad (`alt`)**: Textos descriptivos enriquecidos para imágenes formativas y pedagógicas (laboratorio, robótica, actividades culturales, instalaciones), y `alt=""` para elementos decorativos.
- **Preparación para WordPress / SMTP**: Anotaciones y estructura limpia en el formulario de contacto para su futura conexión con plugins de formularios y servidor SMTP autenticado.
---

## Sesión #3, Cambio #2 — Fusión de Nuevas Imágenes y Videos Multimedia, Restauración de Logo #2 y Preservación del Menú
- **Restauración del Logo Original de Sesión #2**: Se restituyó el archivo `bpvda-logo-white.png` original proveniente de la carpeta `#2`, restableciendo la altura CSS a `68px` (y `48px` en scroll) manteniendo el sombreado `drop-shadow(0 3px 8px rgba(0,0,0,0.5))` para garantizar perfecta visibilidad y proporciones.
- **Fusión de Nuevo Contenido Multimedia**: Se integraron todos los archivos multimedia aportados por el equipo de texto y multimedia:
  - `activities.mp4` (optimizado a ~998 KB con `+faststart`) implementado como video de fondo en el hero de `actividades.html`.
  - `curriculum.mp4` (optimizado a ~838 KB con `+faststart`) implementado como video de fondo en el hero de `curriculo.html`.
  - `admision-main.webp` en el hero de `admision.html`.
  - `campus-exterior.webp` en el hero de `contacto.html` y sección de contacto de `index.html`.
  - Fotografías reales en las tarjetas de atención de `contacto.html` (`campus-restzone.webp`, `admision.webp`, `client-atention.webp`).
  - Nuevas imágenes en carrusel de `index.html`: `learn-mind.webp` (slide 2), `culture-main.webp` (slide 3), `roboticfair-team.webp` (mosaico 2), y `campus-prescholar.webp` (tarjeta de preescolar).
  - `mission.webp` en el hero de `mision.html`.
- **Compresión WebP y Optimización Web**: Todas las nuevas fotos fueron procesadas y convertidas a `.webp` (reduciendo imágenes de 7-10 MB a 200-800 KB), manteniendo los estándares de rendimiento web.
- **Menú Desplegable Preservado**: La fotografía del menú lateral se mantuvo estrictamente como la imagen única cuadrada `science-team.webp` sin alteraciones ni duplicados.
---

## Sesión #3, Cambio #3 — Control de Videos No-Loop (Inicio y Parada sin Bucle)
- **Eliminación de Bucle en Videos Secundarios**:
  - `hero-campus.mp4` (video inicial del hero en portada) se mantiene en `loop` continuo como fondo ambiental.
  - Se eliminó el atributo `loop` de los videos secundarios: `school-life-1.mp4` (`index.html`), `activities.mp4` (`actividades.html`) y `curriculum.mp4` (`curriculo.html`).
- **Control Inteligente de Reproducción en `main.js`**: Implementado `IntersectionObserver` para videos secundarios que inicia la reproducción cuando entran en pantalla y se detiene automáticamente en el último fotograma al terminar el video (`ended`), sin reiniciar el bucle.
- **Resolución de Conflictos de Git**: Sincronización limpia y resolución de conflictos entre ramas de trabajo para unificación completa en `origin/main`.

---

## Sesión #4 — Modernización Estructural, Modularización de Plantillas y Limpieza de Assets
- **Actualización y Saneamiento de Documentación**:
  - `ESTRUCTURA.md` y `README.md` actualizados con la arquitectura vigente de 16 páginas estáticas estructuradas bajo los 5 pilares institucionales (Nuestra Escuela, Enfoque Educativo, Familia y Comunidad, Primaria, Secundaria y Bachilleres).
- **Modularización del Generador de Plantillas**:
  - Creación de `tools/templates/header.html` y `tools/templates/footer.html` como fragmentos HTML limpios, legibles e independientes.
  - Refactorización de `tools/generate-pages.mjs` para eliminar cadenas ofuscadas de una sola línea, permitiendo mantenimiento ágil de componentes compartidos.
- **Higiene y Reducción de Peso de Multimedia**:
  - Creación de `assets/raw-originals/` para resguardar archivos `.JPG` y `.PNG` en crudo que ya no se usan directamente en producción, aligerando el directorio `assets/media/` con un 100% de archivos optimizados WebP y videos H.264.
- **Arquitectura de Estilos y Preparación para WordPress**:
  - Inclusión de índice canónico y mapeo de temas dinámicos en la cabecera de `css/styles.css` (`header.php`, `footer.php`, `page-templates/`).
- **Herramienta Automatizada de Verificación**:
  - Creación y ejecución de `tools/verify-integrity.mjs`, validando la ausencia total de enlaces rotos o recursos multimedia faltantes en las 16 páginas.

---

## Sesión #5 — Adopción de Spec-Driven Development (SDD) y Documentación Exhaustiva
- **Creación de `spec.md` (Especificación Canónica)**:
  - Redacción integral de la especificación técnica bajo la metodología Spec-Driven Development (SDD).
  - Incluye: Contexto y objetivos, 5 actores clave, 7 historias de usuario (H-01 a H-07), 21 requisitos funcionales con sintaxis formal EARS (RF-01 a RF-21), 6 requisitos no funcionales (RNF), casos límite (EDGE-01 a EDGE-04), fuera de alcance (Out of Scope) y definición de terminado (DoD).
- **Alineación de `AGENTS.md` y `agente.md`**:
  - `AGENTS.md` reformulado con la estructura profesional de SDD: visión del proyecto, tabla de comandos indispensables, estándares de código por lenguaje (HTML, CSS, JS), reglas innegociables consolidadas y protocolo agéntico estricto.
  - `agente.md` sincronizado como referencia rápida de mantenimiento y gobernanza.
- **Ampliación Integral de la Documentación**:
  - `README.md` ampliado con guía de inicio rápido, comandos, estructura visual de 16 páginas y tabla de pilares.
  - `ESTRUCTURA.md` y `COMPARACION_CODEX.md` enriquecidos con análisis cualitativo y referencias a `spec.md`.

---

## Sesión #6 — Documentación y Comentarios Exhaustivos en Código (JS, HTML y CSS)
- **JavaScript (`js/main.js`)**:
  - Código completamente documentado con especificaciones JSDoc y bloques de explicación para cada módulo.
  - Dividido formalmente en 10 módulos funcionales:
    1. *Progressive Enhancement & Estado Global*: Activación de clase `js` y detección de capacidades.
    2. *Cache Centralizado de Elementos DOM*: Referencias constantes al árbol HTML con verificación defensiva.
    3. *Navegación y Menú Modal Accesible*: Control de apertura/cierre, gestión de foco (*Focus Trap*) con teclas Tab y Escape, y ocultación estética del logo.
    4. *Comportamiento de Cabecera en Desplazamiento*: Clases `is-scrolled` e `is-free-mode` para subpáginas editoriales.
    5. *Slider Principal Hero*: Autoplay diferenciado (10s en apertura, 6s en subsiguientes), soporte táctil (swipe con TouchEvent) y navegación por teclado.
    6. *Scroll Reveal y Animaciones Progresivas*: Observación eficiente mediante `IntersectionObserver`.
    7. *Navegación Interna Fluida (Smooth Scroll)*: Enlaces con ancla interna y botón flotante de retorno superior.
    8. *Control Inteligente de Videos (No Loop)*: Reproducción al ser visibles y detención en el último fotograma (`ended`).
    9. *Secuencia de Transición Fotográfica (Crossfade)*: Hero de Propósito (`filosofia.html`) con temporizador periódico seguro.
    10. *Inyección Dinámica de Enlaces Sociales*: Rellenado de iconos y enlaces de contacto en el menú modal.
- **HTML (`index.html`, plantillas modulares y 15 subpáginas)**:
  - `tools/templates/header.html` y `tools/templates/footer.html` anotados con comentarios explicativos de accesibilidad, semántica y responsividad.
  - `tools/generate-pages.mjs` actualizado para inyectar banners comentados en cada una de las 15 subpáginas (`split-feature`, `content-cards`, componentes especiales, `level-hero`, `purpose-fade`).
  - `index.html` documentado con etiquetas descriptivas para:
    - Encabezado y barra fija de navegación.
    - Hero slider (Slide 1 Video 10s, Slide 2 Misión, Slide 3 Visión, Slide 4 Valores, Slide 5 Admisiones).
    - Controles de slider y leyenda de identidad institucional.
    - Cita inspiradora de Yokoi Kenji sobre disciplina e inteligencia.
    - Sección 01 Nuestra experiencia y mosaico fotográfico asimétrico.
    - Sección 02 Oferta académica y tarjetas formativas de programas.
    - Sección 03 Aprendizaje activo y métricas formativas.
    - Sección 04 Talento que trasciende (robótica y emprendimiento).
    - Sección 05 Somos comunidad (video inmersivo y enlaces de vida escolar).
    - Sección Guía Explora BPVDA y Sección Contacto / Siguiente paso.
    - Pie de página institucional enriquecido en 3 columnas y pie legal.
- **CSS (`css/styles.css`)**:
  - Estructuración de los 9 módulos de arquitectura institucional con encabezados claros:
    - *01. VARIABLES & CONFIGURACIÓN GLOBAL*: Paleta de colores (--navy, --deep, --turquoise, --orange, --paper, --cream, --gray, --line) y tipografía Montserrat.
    - *02. RESET Y ESTILOS BASE*: Normalización universal, scroll fluido, accesibilidad y skip-link.
    - *03. NAVEGACIÓN*: Header bar, menú flotante modal con 5 pilares institucionales.
    - *04. HERO COMPONENT*: Portada multipantalla con slider horizontal y video hero.
    - *05. COMPONENTES Y TARJETAS*: Mosaico asimétrico, cards de niveles, aprendizaje activo, logros y video comunitario.
    - *06. MÓDULOS EDITORIALES Y PÁGINAS INTERIORES*: Interior hero, split feature, tarjetas, grid de docentes, alianzas y mapa.
    - *07. PÁGINAS DE NIVEL ACADÉMICO*: Preescolar, Primaria, Secundaria y Bachilleres con composiciones personalizadas.
    - *08. PROPÓSITO Y FILOSOFÍA*: Transición de imágenes en fundido (crossfade), manifiesto y pilares formativos.
    - *09. PIE DE PÁGINA Y MEDIA QUERIES*: Footer en 3 columnas y consultas responsive adaptativas (1000px, 800px, 700px, 600px y prefers-reduced-motion).
- **Verificación de Calidad**:
  - `node tools/verify-integrity.mjs` ejecutado con éxito total: 0 enlaces rotos y 0 recursos multimedia faltantes.
## [2026-09-30] - Rediseño Profesional de Formularios de Admisiones y Validaciones (SDD)
- **Archivos principales**: orm-preingreso.html, orm-nuevo-ingreso.html, css/styles.css
- **Reescritura de Formularios**: Se reconstruyeron ambas páginas con una estructura oficial, separada en bloques lógicos.
- **Validación del lado del cliente (JS Vanilla)**:
  - Validación en tiempo real (al salir del campo - blur).
  - Verificación estricta de formato de cédula (con guiones obligatorios).
  - Validación de correo, tamaño de archivos (máx 10 MB) y fechas lógicas.
  - Checkboxes de compromisos institucionales obligatorios.
  - Lógica condicional (ej. Ficha Médica) y auto-llenado inteligente del Acudiente Legal.
- **Premium Form Redesign (CSS)**:
  - Se eliminaron por completo todos los emojis para un aspecto 100% corporativo y profesional.
  - Se añadieron estilos limpios para alertas, campos de texto interactivos (soft shadows), tarjetas de selección y modales emergentes centralizados con iconos SVG minimalistas.
  - Se corrigió la cuadrícula (orm-grid-2, orm-grid-3) para Nuevo Ingreso.

---

## Animaciones Cinematograficas y Mejora Visual Global (2026-10-02)

### Archivos modificados
- `css/styles.css` — Tokens de animacion, reveal system, hero cascade, microinteracciones, menu cascade, accesibilidad.
- `js/main.js` — Re-disparo de animaciones en slider, IntersectionObserver mejorado con stagger dinamico.

### Cambios realizados

#### 1. Tokens de Animacion en `:root`
- Nuevas variables CSS: `--ease-out-expo`, `--ease-in-out-smooth`, `--ease-spring`, `--ease-out-quint`.
- Duraciones estandarizadas: `--dur-fast` (0.22s), `--dur-normal` (0.45s), `--dur-slow` (0.7s), `--dur-reveal` (0.85s).

#### 2. Scroll Reveal Cinematografico
- `.reveal`, `.reveal-left`, `.reveal-right`: ahora incluyen `filter: blur(5px)` y `translate3d` para desenfoque de movimiento y aceleracion GPU.
- Nueva clase `.reveal-scale`: zoom sutil de `scale(0.92)` a `scale(1)` con blur.
- `will-change: opacity, transform, filter` para prioridad de renderizado GPU.
- Stagger children extendidos hasta `nth-child(8)`.

#### 3. Hero Slider - Entrada Editorial de Textos
- Nuevo `@keyframes slideTextIn`: entrada con blur y translate3d.
- Los textos de cada slide (`.eyebrow`, `h1`, `.hero-copy`, `.hero-actions`) entran en cascada escalonada (0.15s a 0.65s de delay).
- JS: Re-disparo de animaciones al cambiar de slide mediante reset de `animation: none` + reflow forzado.

#### 4. Microinteracciones Mejoradas
- `.primary-btn`: transiciones individuales por propiedad, hover con sombra de resplandor turquesa, icono/flecha se desplaza `translateX(5px)`.
- `.card:hover`: elevacion `translateY(-8px) scale(1.01)` con sombra multicapa y borde turquesa sutil.
- `.editorial-card img`: transicion con easing exponencial.
- `.hero-controls button`: hover con `scale(1.08)`.
- Barra de progreso del hero: transicion elastica de 0.6s.

#### 5. Menu Modal de 5 Pilares - Cascada
- `@keyframes menuColIn`: entrada con blur y translate3d.
- Las 5 columnas entran escalonadas con delays de 0.06s a 0.30s.
- Pie del menu con transicion de opacidad retardada.
- Enlaces con subrayado animado `::after` de izquierda a derecha al hover.

#### 6. Boton Volver Arriba
- Transicion refinada con `translateY(12px)` a `translateY(0)` + hover `translateY(-3px)`.

#### 7. Accesibilidad (prefers-reduced-motion)
- `@media (prefers-reduced-motion: reduce)`: deshabilita todas las animaciones y transiciones.
- Todos los elementos reveal, hero text y menu sections se muestran con opacidad completa.

#### 8. JavaScript - IntersectionObserver Mejorado
- `rootMargin: '0px 0px -60px 0px'` y `threshold: 0.12` para activacion ligeramente anticipada.
- Stagger dinamico: `transitionDelay = (index * 60) + 'ms'` asignado via JS para cascada organica.
- Soporte para nueva clase `.reveal-scale`.

### Verificacion
- `node tools/verify-integrity.mjs`: 0 enlaces rotos, 0 recursos faltantes.

---

## Optimizacion de Rendimiento y Cero Lag (2026-10-02)

### Archivos modificados
- `css/styles.css` — Propiedades de contencion (CSS Containment) y sugerencias de aceleracion de hardware.
- `js/main.js` — Optimizacion de eventos de scroll (requestAnimationFrame).
- `tools/templates/*.html` — Atributos de decodificacion de imagenes asincrona.

### Cambios realizados

#### 1. Aislamiento y Contencion CSS (CSS Containment)
- Se aplico `contain: layout` y `contain: content` a secciones criticas como `.site-header` y `.hero` para evitar que los cambios en estas areas fuercen recálculos de diseno (Reflow) en todo el DOM.
- Se implemento `contain: layout style` en tarjetas (`.card`, `.editorial-card`, etc.) para aislar su renderizado.
- Se anadio `will-change: transform` estrictamente a elementos interactivos, y `transform: translateZ(0)` junto a `backface-visibility: hidden` en elementos animados (`.reveal`, `img`, `video`) para forzar la creacion de capas compuestas en la GPU sin agotar la memoria.

#### 2. Optimizacion JavaScript (Scroll Handler)
- Se reescribio la funcion `onScroll` en `js/main.js`. En lugar de ejecutar cambios sincronos en el DOM por cada pixel de desplazamiento, ahora lee el estado y delega la escritura (cambios de clases del header y boton volver arriba) a `window.requestAnimationFrame`. 
- Esto elimina por completo el Layout Thrashing (forzar el layout sincrono), garantizando 60 FPS consistentes al hacer scroll.
- El calculo de `heroSlider.offsetHeight` ahora esta cacheado y solo se vuelve a evaluar cuando se dispara el evento `resize` de la ventana.

#### 3. Decodificacion Asincrona de Imagenes (HTML)
- Se inyecto el atributo `decoding="async"` en las etiquetas `<img>` dentro de las plantillas base. Esto permite al navegador decodificar imagenes fuera del hilo principal (Main Thread), liberandolo para que las animaciones de UI y el scroll sigan siendo fluidos.
- Se reconstruyo todo el sitio web ejecutando `generate-pages.mjs` para propagar la mejora a los 16 archivos HTML finales.

### Verificacion
- `node tools/verify-integrity.mjs`: Validacion exitosa sin enlaces ni recursos rotos.

### Rediseño del Menú Modal "Encuentra tu camino" (Octubre 2026)
* **Semántica HTML**: Se reescribió la estructura dinámica en `tools/generate-pages.mjs` y `tools/templates/header.html` envolviendo los pilares en una etiqueta `<nav>` e implementando listas `<ul>` y `<li>` para mejor accesibilidad y semántica.
* **Layout Responsive**: 
  * Se transformó el layout a 5 columnas alineadas horizontalmente en Desktop (`min-width: 1024px`).
  * Se implementó una vista de 1 columna limpia en móvil (`max-width: 639px`) con un área táctil mínima recomendada (>44px).
* **Microinteracciones**: Se implementaron transiciones sutiles en Vanilla CSS (hover/focus) simulando la fluidez de un framework, cambiando el fondo a `bg-white/10` y deslizando el chevron direccional (`↗`) 4px a la derecha. Todo utilizando variables institucionales, respetando el `AGENTS.md`.

---

## Consolidación y Migración Total de Multimedia (`assets/media/` a `assets/fotos/` y `assets/videos/`) (2026-10-08)

### Estructura final consolidada
- Se desmanteló y eliminó por completo el directorio `assets/media/`, consolidando el 100% de los recursos multimedia en las carpetas estructuradas `assets/fotos/` y `assets/videos/`.
- **Fotografías (`assets/fotos/` - 229 fotos `.webp` en total)**:
  - `assets/fotos/exterior/` (44 fotos): Campus, fachadas, accesos y zonas de descanso.
  - `assets/fotos/primaria-preescolar/` (90 fotos): Actividades, aulas y estudiantes de preescolar y primaria.
  - `assets/fotos/secundaria/` (85 fotos): Dinámicas de secundaria, proyectos, ciencias y talleres de robótica.
  - `assets/fotos/institucional/` (10 fotos): Filosofía, misión, reconocimientos, admisiones y atención a familias.
- **Videos (`assets/videos/` - 8 videos `.mp4` en total)**:
  - `hero-campus.mp4` (video principal de portada en loop)
  - `school-life-1.mp4`, `school-life-2.mp4`
  - `activities.mp4`, `curriculum.mp4`
  - `mvi-9572.mp4`, `mvi-9573.mp4`, `mvi-9577.mp4` (nuevas tomas institucionales)

### Sincronización de código y enlaces
- Se actualizaron todas las referencias `src` en:
  - `index.html`, `admisiones.html`, `bachilleres.html`, `contacto.html`, `quienes-somos.html`, `secundaria.html`.
  - `tools/generate-pages.mjs` y `tools/build-admisiones.mjs`.
  - `Pruebas-Vacaciones/Prueba-Admision/admisiones.html` e `index.html`.
- Se re-generaron las páginas con `node tools/generate-pages.mjs`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes** en los 18 archivos HTML del sitio.

---

## Actualización de Directrices de Inteligencia Artificial y Especificación Canónica (2026-10-08)

### Archivos modificados
- `AGENTS.md`: Nueva regla innegociable #5 ("Coherencia Temática y Selección Contextual Obligatoria") y paso #2 en el Flujo SDD ("Inspección de Medios").
- `agente.md`: Regla #6 con instrucción explícita de lectura previa de carpetas y prohibición de cruzar categorías multimedia.
- `spec.md`: Actualización de RNF-02 y adición del Criterio de Finalización #3 (Coherencia Temática Multimedia).

### Directiva establecida
- La IA debe obligatoriamente inspeccionar/leer la carpeta específica antes de insertar recursos (`assets/fotos/{sección}/` o `assets/videos/`).
- Se prohíbe terminantemente usar fotografías de otras carpetas (ej. fotos de exteriores o de primaria en apartados de secundaria) a menos que el usuario lo solicite expresamente.

---

## Integración de Imagen de Fondo en Hero de Admisiones (2026-10-08)

### Archivos modificados
- `admisiones.html`: Inserción de `assets/fotos/institucional/admision-main.webp` como fondo inmersivo con capa `.interior-hero__wash`.
- `tools/build-admisiones.mjs`: Sincronización de la plantilla modular generadora de admisiones.
- `css/styles.css`: Estilos de cobertura responsiva (`object-fit: cover; object-position: center 30%;`), gradiente *wash* bicapa de alto contraste y corrección de contraste para `mark.alt`.

### Verificación
- `node tools/verify-integrity.mjs`: 0 enlaces rotos y 0 recursos multimedia faltantes.

---

## Eliminación de Imágenes Duplicadas y Asignación Contextual Estricta (2026-10-08)

### Diagnóstico Realizado
- **Causa raíz de duplicados**: `tools/generate-pages.mjs` duplicaba artificialmente las 3 imágenes de cada carrusel con `.concat()` para alcanzar 6 tarjetas, repitiendo exactamente cada foto.
- Adicionalmente, las imágenes de cabecera (`heroImage`) y del bloque destacado (`splitImage`) compartían el mismo archivo en cada página.
- En `index.html` y `admisiones.html`, se detectaron repeticiones puntuales entre tarjetas y secciones de contacto.

### Soluciones y Mejoras Implementadas
1. **Carruseles Editoriales Únicos**:
   - Se reestructuró `visualSets` en `tools/generate-pages.mjs` para proporcionar **6 fotografías distintas e independientes por sección temática**, eliminando la duplicación por concatenación.
   - Cada foto se seleccionó de acuerdo a su taxonomía canónica:
     - **Primaria y Preescolar**: Fotos 100% exclusivas de `assets/fotos/primaria-preescolar/`.
     - **Secundaria y Bachilleres**: Fotos de robótica, informática, ciencias y aulas de `assets/fotos/secundaria/`.
     - **Filosofía y Misión/Visión/Valores**: Fotos de graduación y actos cívicos/valores de `assets/fotos/institucional/`.
     - **Ecosistema Digital**: Fotos reales del aula de informática (`IMG_9506.webp`, `IMG_9517.webp`, `IMG_9522.webp`, etc.).
     - **Instalaciones y Vida Estudiantil**: Tomas exteriores y de campus de `assets/fotos/exterior/`.
2. **Diferenciación Hero vs. Split**:
   - Cada una de las 10 páginas interiores cuenta ahora con un `heroImage` y un `splitImage` totalmente distintos y contextualmente afines.
3. **Página de Inicio (`index.html`)**:
   - Slide 4 actualizado a `assets/fotos/institucional/culture.webp` (evitando repetir `recognition.webp`).
   - Sección de contacto actualizada a `assets/fotos/exterior/campus-exterior.webp` (evitando repetir `campus-entry.webp`).
4. **Página de Admisiones (`admisiones.html` y `tools/build-admisiones.mjs`)**:
   - Tarjetas de información actualizadas con imágenes únicas (`client-atention.webp` y `IMG_9376.webp`).
5. **Ajuste y Adaptación Visual**:
   - Todas las imágenes mantienen el encuadre responsivo proporcional (`object-fit: cover`) sin distorsión tipográfica o desbordamientos.

### Verificación
- Script de escaneo comprobó **0 imágenes duplicadas internamente por página**.
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes** en los 18 archivos HTML del sitio.

---

## Optimización de Adaptación Visual, Encuadre Fotográfico y Reemplazo de Imágenes (2026-10-08)

### Diagnóstico de Adaptación Visual
- Se analizó la orientación geométrica (relación de aspecto ancho/alto) y la resolución de cada recurso en su contenedor real.
- **Incompatibilidades detectadas**:
  1. **Slide 4 en Inicio (`index.html`)**: Utilizaba una foto vertical (`culture.webp`, relación 0.80) estirándose en un Hero horizontal multipantalla panorámico (`min-height: 84svh`), provocando recorte de sujetos.
  2. **Hero de Bachilleres (`bachilleres.html`)**: Utilizaba una foto vertical (`science-action.webp`) en un banner horizontal.
  3. **Páginas de Niveles Formativos (`prekinder.html`, `kinder.html`, `primaria.html`)**: Mantenían referencias a archivos crudos en `assets/new/levels/` y `IMG_1605/1694/1695`, varios con orientación vertical forzados en contenedores anchos.
  4. **Página de Filosofía (`filosofia.html`)**: Contenía imágenes crudas de `assets/new/purpose/` en el crossfade y pilares.
  5. **Carruseles Editoriales**: Contaban con fotos verticales aisladas (`IMG_9460`, `IMG_9475`, `IMG_9371`, `IMG_7549`, `IMG_7550`) que descompensaban la proporción horizontal de las tarjetas 310x360px.

### Acciones Realizadas
1. **Reemplazo por Imágenes Horizontales Nativas (6000x4000px)**:
   - **Slide 4 de Inicio**: Reemplazada por `assets/fotos/secundaria/IMG_9581.webp` (horizontal nativa de alta resolución de actividades formativas y estudiantes).
   - **Bachilleres (`bachilleres.html`)**: Reemplazada por `assets/fotos/secundaria/IMG_9505.webp` (toma horizontal de estudiantes de secundaria en aula).
   - **Prekínder (`prekinder.html`)**: Reemplazadas por `assets/fotos/primaria-preescolar/IMG_9410.webp`, `IMG_9417.webp`, `IMG_9421.webp` e `IMG_9423.webp`.
   - **Kínder (`kinder.html`)**: Reemplazadas por `assets/fotos/primaria-preescolar/IMG_9454.webp`, `IMG_9425.webp`, `IMG_9428.webp` e `IMG_9431.webp`.
   - **Primaria (`primaria.html`)**: Reemplazadas por `assets/fotos/primaria-preescolar/IMG_9494.webp`, `IMG_9538.webp`, `IMG_9540.webp` e `IMG_9542.webp`.
   - **Filosofía (`filosofia.html`)**: Reemplazadas por fotos institucionales optimizadas `mission.webp`, `learn-mind.webp`, `culture-main.webp`, `culture.webp`, `achievement.webp` y `recognition.webp`.
   - **Carrusel Plantel Docente**: Reemplazadas fotos verticales por `IMG_9462.webp` e `IMG_9471.webp`.
   - **Carrusel Contacto y Atención**: Reemplazada foto vertical por `assets/fotos/exterior/IMG_9378.webp`.
   - **Carrusel Vida Estudiantil**: Reemplazadas fotos crudas por `IMG_9582.webp` e `IMG_9586.webp`.
2. **Refinamiento de Reglas CSS (`css/styles.css`)**:
   - Se actualizaron las propiedades `object-position` para alinear los puntos de interés hacia el tercio superior (`center 25%` a `center 35%`), asegurando que rostros y detalles nunca queden cortados en pantallas de escritorio, tabletas o móviles.

### Verificación
- **0 imágenes verticales en posiciones horizontales/Hero**.
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes** en los 18 archivos HTML del sitio.

---

## Restauración de Imágenes Anteriores en Sección Filosofía (2026-10-08)

### Solicitud del Usuario
- Restaurar las imágenes originales específicas de la sección de Filosofía / Propósito BPVDA ([filosofia.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/filosofia.html)) a las que estaban previamente asignadas.

### Acciones Realizadas
- En [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs):
  - **Hero Interactivo (Crossfade)**: Restauradas las imágenes originales de estudiantes con uniforme (`assets/new/purpose/IMG_1963.JPG`, `assets/new/purpose/IMG_1966.JPG`, `assets/new/purpose/IMG_1991.JPG`).
  - **Pilares Formativos (Valores, Misión, Visión)**: Restauradas las imágenes originales específicas (`assets/new/purpose/IMG_1567.JPG`, `assets/new/purpose/IMG_1627.JPG`, `assets/new/purpose/IMG_1655.JPG`).
- Se re-compilaron las páginas con `node tools/generate-pages.mjs`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes** en los 18 archivos HTML.

---

## Cambio Puntual de Imagen en Pilar "01 Valores" de Filosofía (2026-10-08)

### Solicitud del Usuario
- Modificar exclusivamente la imagen del pilar **01 Valores** en [filosofia.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/filosofia.html) (`IMG_1567.JPG`), reemplazándola por una nueva fotografía no utilizada previamente (sin revertir a `culture.webp`).

### Acciones Realizadas
- Se reemplazó en [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs) la imagen de `IMG_1567.JPG` por `assets/new/purpose/IMG_1715.JPG` (fotografía representativa en alta resolución del entorno de valores formativos de la comunidad estudiantil).
- Se conservaron intactas las imágenes del hero crossfade (`IMG_1963.JPG`, `IMG_1966.JPG`, `IMG_1991.JPG`) y de los pilares de Misión (`IMG_1627.JPG`) y Visión (`IMG_1655.JPG`).
- Se re-compiló [filosofia.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/filosofia.html).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Ajuste de Encuadre Visual en Hero de Filosofía (2026-10-08)

### Diagnóstico de las Imágenes del Hero Crossfade
- En el hero de [filosofia.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/filosofia.html), la secuencia fotográfica de los estudiantes (`IMG_1963.JPG`, `IMG_1966.JPG`, `IMG_1991.JPG`) se mostraba centrada por defecto al 50% vertical, lo que provocaba que los ojos y frentes de los estudiantes quedaran cortados por el límite superior y tapados por el título central.

### Soluciones Aplicadas en CSS (`css/styles.css`)
1. **Reubicación del Foco Visual (`object-position`)**:
   - Se configuró `.purpose-fade__images img { object-position: center 15%; }`, asegurando que las caras, ojos y sonrisas completas de los niños permanezcan visibles en el tercio superior de la pantalla.
2. **Rebalanceo de Contenido**:
   - Se aplicó `margin-top: auto` a `.purpose-fade__content` para que el texto descanse naturalmente hacia la zona inferior y media sin superponerse a los rostros de los estudiantes.
3. **Optimización del Gradiente de Contraste (`.purpose-fade:after`)**:
   - Se calibró la capa de contraste con un degradado vertical suave (`rgba(3,28,49,.35) 0%`, `rgba(3,28,49,.1) 35%`, `rgba(3,28,49,.9) 100%`) y un gradiente lateral que mantiene legible el titular sin oscurecer los rostros.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Integración de Formularios con Google Apps Script (2026-10-08)

### Solicitud del Usuario
- Implementar los cambios realizados por el colaborador (rama Pruebas-Smith) sobre la conexión del formulario de admisiones (Nuevo Ingreso y Preingreso) con Google Drive y Google Sheets.

### Acciones Realizadas
- Se extrajo la lógica en JavaScript para la integración con \etch\ y envío de carga útil (con archivos en base64) mediante el endpoint de Google Apps Script.
- Se actualizó el script generador de formularios \	ools/generate-forms.mjs\ incrustando la nueva lógica de envío y reemplazando las simulaciones de UI originales.
- Se ejecutó `node tools/generate-pages.mjs` para regenerar y aplicar estos cambios dinámicamente en los archivos `form-nuevo-ingreso.html` y `form-preingreso.html`.

---

## Ajuste de Imagen y Eliminación de Franja Naranja en Sección de Contacto (2026-10-11)

### Solicitud del Usuario
- Acomodar la imagen de la sección de contacto en la portada (`index.html`) para eliminar el espacio naranja sobrante visible debajo de la imagen.

### Diagnóstico
- En la sección `#contacto` (`.contact`), el contenedor tiene fondo institucional naranja (`background: var(--orange)`).
- La columna derecha de contenido (`.contact-copy`) supera los 700px de altura debido al titular, textos explicativos, botones y padding (`padding: 72px 8vw`).
- La columna izquierda (`.contact-photo img`) tenía una altura rígida de `height: 620px;`, dejando una franja inferior visible descubierta con el fondo naranja de la sección.

### Soluciones Aplicadas
1. **Ajuste en `css/styles.css`**:
   - Se configuró `.contact-photo` con `height: 100%; display: flex;` para que ocupe todo el alto asignado a la fila de la cuadrícula.
   - Se configuró `.contact-photo img` y `.contact-photo figure` con `width: 100%; height: 100%; object-fit: cover; display: block;` para cubrir el 100% vertical y horizontal del bloque sin dejar ningún margen o espacio naranja debajo.
   - En la consulta responsiva para móviles (`max-width: 700px`), se aseguró `.contact-photo { height: auto; }` y `.contact-photo img { height: 340px; }` para mantener un encuadre fluido.
2. **Sincronización con Tema WordPress (`wordpress-theme/style.css`)**:
   - Se replicaron las mismas reglas en el tema de WordPress para mantener consistencia absoluta entre el sitio estático y la plantilla dinámica.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Rediseño Editorial de Tarjetas de Contenido y Canales de Contacto (2026-10-11)

### Solicitud del Usuario
- Mejorar el diseño de las tarjetas en la página de Contacto (`contacto.html`) para que luzcan modernas, sofisticadas y no se vean planas ni simples, sin incluir imágenes fotográficas.

### Diagnóstico
- Las tarjetas de contenido (`.content-cards article`) y los canales directos (`.contact-direct div`) utilizaban bloques rectangulares oscuros y planos con bordes rígidos (8px), sin íconos, sin jerarquía editorial ni profundidad visual.

### Soluciones Aplicadas
1. **Rediseño de Tarjetas de Contenido (`.content-cards`, `.content-card`)**:
   - **Gradiente y Profundidad**: Fondo con degradado institucional (`linear-gradient(160deg, #083050 0%, #031c31 100%)`), borde sutil translúcido (`border: 1px solid rgba(16, 184, 176, 0.22)`), esquinas refinadas (`border-radius: 16px`) y sombras suaves (`box-shadow`).
   - **Línea de Acento Superior**: Borde superior dinámico de 4px con degradados institucionales (`var(--turquoise)` y `var(--orange)`).
   - **Íconos Vectoriales SVG Inline (Sin Imágenes)**: Se crearon emblemas vectoriales discretos en contenedores redondeados con brillo turquesa y ámbar para representar Propósito, Acompañamiento y Comunidad.
   - **Etiquetas y Microinteracciones**: Pills con numeración institucional (`01 · Propósito`, `02 · Acompañamiento`, `03 · Comunidad`) y pie de tarjeta con indicador interactivo y flecha (`→`) animada al pasar el cursor.
   - **Elevación al Hover**: Microanimación fluida con desplazamiento hacia arriba (`translateY(-8px)`), brillo de borde y sombra profunda.
2. **Rediseño de Canales Directos (`.contact-direct`)**:
   - Estructuración con íconos vectoriales para Secretaría (teléfono), WhatsApp (chat) y Correo (sobre).
   - Tipografía escalada, badges identificadores y enlaces amplios con ajuste de texto responsivo (`word-break: break-all`).
3. **Automatización y Sincronización**:
   - Actualizado [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs) y ejecutada la compilación de todas las páginas interiores.
   - Replicadas las reglas en [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Ejecutado `tools/build-wp-pages.ps1` para sincronizar las plantillas de WordPress.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Optimización de Espacio y Formato Compacto en Sección de Contacto (2026-10-11)

### Solicitud del Usuario
- Corregir el diseño de las tarjetas de contacto que ocupaban demasiado espacio vertical en pantalla.

### Diagnóstico
1. **Regla Selectora Anidada**: La regla CSS `.contact-direct div` se aplicaba a los divs hijos internos (`.contact-direct__head`, `.contact-direct__icon`), duplicando paddings de 32px y generando cajas gigantes anidadas dentro de otras.
2. **Orientación Vertical Excesiva**: Los canales de atención tenían disposición vertical en bloque ocupando ~350px de altura cada uno.
3. **Paddings de Sección Amplios**: Las tarjetas formativas (`.content-cards`) tenían paddings y márgenes elevados para un flujo de contacto.

### Soluciones Aplicadas
1. **Rediseño Compacto y Horizontal de Canales Directos (`.contact-direct__card`)**:
   - Se convirtió cada tarjeta en un enlace directo horizontal de fila (`flex-direction: row`, `align-items: center`, `height ~76px`).
   - Distribución lineal limpia: `[Ícono 42px] [Tag + Número/Email + Subtexto] [↗ Indicador]`.
   - Se redujo el padding de la sección `.contact-direct.section-pad` a `clamp(24px, 3vw, 36px)`.
   - Interacción fluida en toda la tarjeta (ahora todo el bloque es clickable directamente hacia teléfono, WhatsApp o correo).
2. **Compactación de Tarjetas Formativas (`.content-cards`)**:
   - Padding reducido a `24px 22px` con radio redondeado de 14px.
   - Íconos reducidos a 38px y espaciados de cabecera y párrafos ajustados a proporciones más estilizadas y densas sin perder legibilidad.
3. **Sincronización Total**:
   - Actualizado generador [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs) y recompiladas las 16 páginas del sitio estático.
   - Sincronizados [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Reconstruidas las plantillas del tema WordPress mediante `tools/build-wp-pages.ps1`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Galería Dinámica con Movimiento Continuo (Auto-Marquee) y Renovación Visual de Tarjetas (2026-10-11)

### Solicitud del Usuario
- Cambiar las tarjetas de la sección "Momentos que inspiran" (carrusel fotográfico) y añadirles movimiento automático lateral continuo para que se desplacen solas.

### Diagnóstico
1. **Contenido Repetitivo**: En `contacto.html`, el carrusel mostraba 6 fotografías casi idénticas del portón/reja exterior del colegio (`IMG_9378`, `IMG_9373`, `IMG_9381`...), sin reflejar la calidez comunitaria, áreas del campus ni atención de la sede.
2. **Proporciones Rígidas y Dispares**: Las tarjetas tenían anchos asimétricos desmedidos (hasta 620px) y altura de 500px, estirando las fotos y copando la pantalla.
3. **Comportamiento Estático**: El carrusel requería scroll horizontal manual por parte del usuario, sin dinamismo visual propio.

### Soluciones Aplicadas
1. **Renovación Visual de Tarjetas (`.carousel-v3__card`)**:
   - **Selección de Fotografías Contextuales**: En `contacto.html`, se reemplazaron las tomas del portón por imágenes de comunidad institucional (`community.webp`), áreas principales del campus (`campus-main.webp`), orientación/atención (`admision.webp`), formación en valores (`culture.webp`), zonas de descanso/convivencia (`campus-restzone.webp`) y logros (`achievement.webp`).
   - **Proporciones Armoniosas**: Dimensiones uniformes optimizadas a `360px` de ancho por `440px` de altura (`290x380px` en móviles), evitando distorsiones de imagen.
   - **Estilizado Editorial**: Bordes sutiles translúcidos con microanimación hover de elevación (`translateY(-8px)`), brillo turquesa y zoom fotográfico suave (`scale(1.06)`).
   - **Pills de Categoría con Punto Luminoso**: Cada tarjeta incluye una insignia (`COMUNIDAD`, `CAMPUS`, `ATENCIÓN`, `VALORES`, `CONVIVENCIA`, `FUTURO`) con punto pulsante.
2. **Movimiento Continuo Automático (Infinite Auto-Marquee)**:
   - **Estructura en Doble Grupo**: `.carousel-v3__track` ahora contiene dos grupos idénticos (`.carousel-v3__group` original y clon con `aria-hidden="true"`).
   - **Animación Fluida por Hardware**: Desplazamiento lineal infinito (`@keyframes carousel-marquee`) a 38s con aceleración GPU (`will-change: transform`).
   - **Bucle Perfecto sin Saltos**: Al llegar a `-100%`, el reinicio a `0` es milimétricamente imperceptible.
   - **Pausa Inteligente (Pause on Hover/Touch)**: Al colocar el cursor sobre el carrusel o presionar una tarjeta, la animación se pausa automáticamente (`animation-play-state: paused`) para lectura cómoda, y se reanuda al salir.
   - **Máscara de Desvanecimiento**: Bordes laterales con `mask-image` de gradiente suave para un efecto visual de alta gama.
   - **Insignia "GALERÍA DINÁMICA"**: Indicador visual pulsante en la cabecera.
3. **Sincronización Total**:
   - Compiladas las páginas con [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs).
   - Estilos sincronizados en [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Plantillas de WordPress actualizadas con `tools/build-wp-pages.ps1`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Remoción de Insignia "Galería Dinámica" (2026-10-11)

### Solicitud del Usuario
- Eliminar la etiqueta/insignia superior "Galería Dinámica" en la cabecera de la sección "Momentos que inspiran".

### Soluciones Aplicadas
- **Eliminación del Elemento**: Se removió el bloque `.carousel-v3__badge` de la plantilla modular en [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs), dejando la cabecera limpia directamente con el título `<h2>` "Momentos que inspiran." y su texto descriptivo.
- **Sincronización Total**:
  - Recompiladas las páginas interiores con `node tools/generate-pages.mjs`.
  - Reconstruidas las plantillas del tema WordPress mediante `tools/build-wp-pages.ps1`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Centrado Vertical Equilibrado de Canales de Contacto (2026-10-11)

### Solicitud del Usuario
- Centrar verticalmente las tarjetas de contacto (WhatsApp, correo y teléfono) para que el espacio en blanco superior e inferior quede perfectamente simétrico con respecto al carrusel arriba y el mapa abajo.

### Diagnóstico
- La sección superior `.carousel-v3` tenía un `padding-bottom` de hasta 110px que, sumado al `padding-top` de `.contact-direct` (36px), creaba una brecha de ~146px arriba de las tarjetas. En contraste, debajo de las tarjetas solo existía un `padding-bottom` de 36px antes del mapa, generando un fuerte desbalance visual.

### Soluciones Aplicadas
- **Equilibrio de Espacios**:
  - Se redujo el `padding-bottom` de `.carousel-v3` a `clamp(28px, 3vw, 36px)`.
  - Se aumentó el `padding-bottom` de `.contact-direct.section-pad` a `clamp(52px, 6vw, 72px)`.
  - Con esta proporción, la distancia visual superior (`~64px`) coincide milimétricamente con la distancia visual inferior hacia el mapa (`~64px`), logrando un centrado vertical impecable.
- **Sincronización Total**:
  - Estilos sincronizados en [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Actualización de Ubicación Exacta con Coordenadas en Mapa de Contacto (2026-10-11)

### Solicitud del Usuario
- El mapa no señalaba el punto exacto del colegio. Se proporcionaron las coordenadas exactas de la sede (`9.106901321318759, -79.36663973009655`) para que muestre el marcador/pin en el lugar preciso.

### Soluciones Aplicadas
- **Configuración de Coordenadas Geográficas Precisas**:
  - Se actualizó el `iframe` en [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs) y [contacto.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/contacto.html) reemplazando la búsqueda genérica de calle por el parámetro de coordenadas exactas:
    `https://www.google.com/maps?q=9.106901321318759,-79.36663973009655&hl=es&z=17&output=embed`
  - Ahora Google Maps coloca el marcador rojo (pin) directamente sobre las instalaciones del colegio y centra la vista en zoom 17.
- **Sincronización Total**:
  - Recompiladas las páginas interiores con `node tools/generate-pages.mjs`.
  - Reconstruidas las plantillas del tema WordPress mediante `tools/build-wp-pages.ps1` ([wordpress-theme/page-contacto.php](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/page-contacto.php)).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Actualización de Fotografía en Sección "¿Quiénes somos?" (2026-10-11)

### Solicitud del Usuario
- Cambiar la imagen de la presentación editorial (`.split-feature`) en la página `quienes-somos.html`.

### Diagnóstico
- La imagen previa (`culture-main.webp`) mostraba a estudiantes con vestidos folclóricos de pollera con abanicos, la cual se adecuaba más a actividades culturales de vida estudiantil que a la presentación institucional central de "¿Quiénes somos?".

### Soluciones Aplicadas
- **Sustitución Contextual y Exclusiva**:
  - A petición del usuario de contar con una imagen inédita que no se hubiese empleado en las secciones principales ni en la portada, y con una composición perfectamente adaptada al contenedor vertical/panorámico (`.split-feature`), se seleccionó:
    `assets/fotos/institucional/recognition.webp`
  - La fotografía muestra a estudiantes con su uniforme oficial de polo BPVDA sosteniendo con orgullo su reconocimiento oficial: *"RECONOCIMIENTO - COLEGIO BUEN PASTOR VOZ DE ALERTA - Por su destacada participación en el III Concurso Regional de Emprendimiento Juvenil Edición 2025"*.
  - Proporción nativa de 4:5 (1170x1463px) con encuadre centrado que se adapta limpiamente con `object-fit: cover` sin recortes indeseados en rostros ni en el documento.
  - No está repetida en el hero de ninguna página ni en el carrusel de ¿Quiénes somos?.
- **Sincronización Total**:
  - Recompiladas las páginas interiores con `node tools/generate-pages.mjs`.
  - Reconstruidas las plantillas del tema WordPress mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-quienes-somos.php`).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Optimización de Fotografía de Fondo en Hero de Filosofía / Propósito (2026-10-11)

### Solicitud del Usuario
- En la sección hero de `filosofia.html` ("Una educación con propósito"), cambiar las 3 imágenes de fondo que rotaban con fundido cruzado (`.purpose-fade`) debido a que no se veían bien (encuadres demasiado cerrados con rostros recortados y orientación inadecuada).
- El usuario ofreció la opción de dejar una imagen fija institucional de alta calidad en lugar de una secuencia rotativa con temporizador.

### Diagnóstico
- Las imágenes previas (`IMG_1963.JPG`, `IMG_1966.JPG`, `IMG_1991.JPG` en `assets/new/purpose/`) eran archivos JPEG crudos de cámara sin compilar a WebP y guardados en orientación horizontal con datos de sensor vertical, provocando que `object-fit: cover` con `object-position: center 15%` hiciera un zoom extremo sobre los lentes y rostros de los niños de preescolar, obstaculizando la legibilidad del titular.
- La rotación continua de fondos generaba saltos de luminancia y distracción visual detrás del manifiesto formativo.

### Soluciones Aplicadas
- **Selección de Imagen Institucional de Alta Calidad**:
  - Se sustituyó la secuencia por una imagen fija oficial de máxima resolución y encuadre horizontal:
    `assets/fotos/institucional/mission.webp` (2976×1984px, WebP optimizado).
  - La fotografía retrata a un estudiante con el uniforme oficial BPVDA en el auditorio del colegio mirando hacia el escenario iluminado con tecnología.
  - La paleta lumínica de la imagen combina los tonos azul marino (`--deep` #031c31) y turquesa (`--turquoise` #10b8b0), en perfecta sintonía con la identidad de marca del colegio.
- **Ajustes de Maquetación y CSS**:
  - En `css/styles.css`, se ajustó `.purpose-fade__images img` a `object-position: center center !important;` para que el sujeto y el auditorio queden centrados con equilibrio.
  - La capa `:after` con degradado oscuro (`linear-gradient`) proporciona contraste absoluto para el texto blanco y el subtítulo, manteniendo visible el escenario de fondo.
  - Al contar con una sola imagen con la clase `.is-active`, el script en `js/main.js` no dispara temporizadores innecesarios en segundo plano, mejorando el rendimiento y la estabilidad.
- **Sincronización Total**:
  - Actualizado [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs).
  - Recompilado [filosofia.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/filosofia.html).
  - Sincronizadas las plantillas del tema de WordPress con `tools/build-wp-pages.ps1` ([wordpress-theme/page-filosofia.php](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/page-filosofia.php)).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Rediseño Profesional del Menú Modal y Reordenamiento de Pilares (2026-10-11)

### Solicitud del Usuario
- Mejorar el diseño del menú desplegable modal y su orden para que luzca con el más alto nivel de profesionalismo institucional.

### Diagnóstico
1. **Desorden y Desconexión Pedagógica**:
   - En el menú anterior, la oferta académica estaba dispersa al final (`04 PRIMARIA` y `05 SECUNDARIA Y BACHILLERES`), situando `03 FAMILIA Y COMUNIDAD` antes de las etapas escolares.
   - La sección de `04 PRIMARIA` contenía erróneamente Prekínder y Kínder, que pertenecen al nivel inicial/preescolar y no a primaria.
   - La columna 05 contenía únicamente 2 enlaces, generando un vacío visual asimétrico en la esquina inferior derecha.
2. **Diseño Visual Plano y Desprovisto de Contención**:
   - Las columnas flotaban como listas de texto simples sobre un fondo oscuro uniforme sin tarjetas, bordes ni profundidad.
   - Los títulos tenían un subrayado naranja delgado de 1px que restaba sofisticación.
   - La cabecera y el pie de página carecían de detalles editoriales y microiconos de soporte.

### Soluciones Aplicadas
1. **Nuevo Orden Pedagógico Secuencial de 5 Pilares**:
   - **01 NUESTRA ESCUELA** (*Identidad y Valores*): ¿Quiénes somos?, Propósito BPVDA, Instalaciones, Plantel docente.
   - **02 PREESCOLAR Y PRIMARIA** (*Bases Formativas*): Prekínder, Kínder, Primaria.
   - **03 SECUNDARIA Y BACHILLERES** (*Educación Media*): Secundaria, Bachilleres + bloque destacado institucional (*Bachillerato Integral: Ciencias y Humanidades*).
   - **04 ENFOQUE EDUCATIVO** (*Innovación y Vida Escolar*): SAI BPVDA (Badge `Portal`), Vida estudiantil, Ecosistema digital.
   - **05 FAMILIA Y COMUNIDAD** (*Admisiones y Atención*): Admisiones y matrícula (Badge `2026`), Portal de padres, Contacto y atención.
2. **Diseño Visual Premium (Glassmorphism & Jerarquía)**:
   - **Tarjetas Modulares**: Cada pilar ahora reside en una tarjeta con fondo traslúcido (`rgba(255, 255, 255, 0.035)`), borde sutil (`rgba(255, 255, 255, 0.08)`), esquinas redondeadas (`12px`) y elevación en hover con borde turquesa y sombra profunda.
   - **Encabezados con Chips Numéricos**: Cada columna cuenta con un badge numérico distintivo (`01` al `05`), título en mayúsculas con espaciado editorial y subtítulo temático.
   - **Fondo Atmosférico**: Degradado radial y lineal con brillo sutil en el tope (`radial-gradient` + `linear-gradient`), preservando el diseño flotante de bordes redondeados (`inset: 0 14px 14px 14px; border-radius: 0 0 16px 16px;`).
   - **Microinteracciones en Enlaces**: Filas interactivas con esquinas redondeadas, desplazamiento fluido del texto, iconos chevron `↗` animados en hover con color naranja institucional, y badges visuales para "Admisiones 2026" y "Portal SAI".
   - **Pie Institucional Completo**: Datos de contacto con microiconos SVG nítidos (Ubicación física, PBX clickeable, Correo oficial) y botones circulares de redes sociales con hover interactivo.
   - **Microinteracción en Cierre**: Efecto de rotación y feedback cromático en el botón `✕` al cerrarse.
3. **Sincronización Total de Plantillas y WordPress**:
   - Actualizado [tools/templates/header.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/templates/header.html).
   - Actualizado [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs) y recompiladas todas las 16 páginas (incluyendo [index.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/index.html) y [admisiones.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/admisiones.html)).
   - Actualizadas las hojas de estilo [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Ejecutado `tools/build-wp-pages.ps1` sincronizando las plantillas de WordPress (`header.php` y `page-*.php`).
   - Actualizados [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md) (RF-08) y [tools/migrate-wordpress.php](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/migrate-wordpress.php).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes en los 18 archivos HTML**.

---

## Sesión #2, Cambio #8.1 — Evolución Visual: Menú Modal Natural, Nítido y Sobrio

### Diagnóstico de Retroalimentación
- La primera iteración con cajas translúcidas (*glassmorphism*), badges de colores ("2026", "Portal") y bordes discontinuos generaba una percepción recargada y artificial, poco adecuada para la sobriedad y prestigio de un colegio institucional cristiano.
- Se requería una composición **natural, nítida y puramente profesional**, de corte editorial suizo/nórdico.

### Soluciones Aplicadas
1. **Arquitectura Editorial Limpia (Sin Cajas Artificiales ni Glassmorphism)**:
   - Se eliminaron las cajas translúcidas flotantes, badges de colores sintéticos y recuadros punteados.
   - Las 5 columnas ahora se organizan como una cuadrícula editorial limpia sobre fondo oscuro uniforme y elegante (`var(--deep)`: `#031c31`), con bordes divisores tenues de 1px (`rgba(255, 255, 255, 0.12)`).
2. **Jerarquía Tipográfica Nítida**:
   - Cabecera: Kicker institucional discreto `BUEN PASTOR VOZ DE ALERTA` en turquesa sobrio (`var(--turquoise)`), titular `Encuentra tu camino.` en tipografía serifa sobria y subtítulo limpio.
   - Columnas: Prefijo numérico nítido (`01`, `02`, etc.) en turquesa seguido del título del pilar en mayúsculas sobrias.
   - Enlaces: Tipografía blanca con opacidad armónica (`rgba(255, 255, 255, 0.8)`), borde inferior tenue y microinteracción natural: al pasar el cursor, el texto pasa a blanco puro y la flecha `↗` toma el naranja corporativo (`var(--orange)`) con un microdesplazamiento sutil.
3. **Pie Institucional Minimalista y Elegante**:
   - Dirección física, teléfono PBX y correo oficial alineados en una sola línea fluida separados por puntos sutiles (`·`).
   - Accesos a redes sociales con iconos vectoriales limpios y botón de cierre `✕` transparente y nítido.
4. **Sincronización Total de Plantillas y WordPress**:
   - Sincronizados [tools/templates/header.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/templates/header.html) y [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs).
   - Recompiladas las 16 páginas y actualizados [index.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/index.html) y [admisiones.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/admisiones.html).
   - Sincronizados [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Ejecutado `tools/build-wp-pages.ps1` actualizando `wordpress-theme/header.php` y todas las plantillas `page-*.php`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes en los 18 archivos HTML**.

---

## Sesión #2, Cambio #8.2 — Centrado Vertical Armónico, Despeje del Nav y Corrección de Truncamiento

### Diagnóstico de Retroalimentación
1. **Colisión con la Barra Superior (`header-bar`)**:
   - El panel modal tenía un `padding-top: 80px`, inferior a los 88px de altura del `header-bar`. Esto ocasionaba que el título (`BUEN PASTOR VOZ DE ALERTA` / `Encuentra tu camino.`) quedara pegado o colisionando contra el borde inferior de la barra de navegación superior.
2. **Falta de Centrado Vertical**:
   - El contenedor `.menu-panel__main` estaba alineado rígidamente arriba sin `margin: auto` ni `justify-content: center`, dejando un espacio vacío desproporcionado en el tercio inferior del modal.
3. **Corte y Truncamiento de Texto en Columna 03**:
   - El título del pilar 03 (`SECUNDARIA Y BACHILLERES`) se recortaba con puntos suspensivos (`SECUNDARIA Y BACHILLER..`) debido a la regla `white-space: nowrap` y `text-overflow: ellipsis`.

### Soluciones Aplicadas
1. **Despeje y Adaptación del Nav**:
   - Se aumentó el espaciado superior a `clamp(100px, 12vh, 126px)`, garantizando una separación cómoda y elegante entre la barra fija y la cabecera editorial del menú.
   - Se integró visualmente la cabecera cuando el menú está abierto (`.menu-is-open .header-bar { background: transparent; border-bottom: 1px solid rgba(255, 255, 255, 0.08); backdrop-filter: none; }`), fundiéndose orgánicamente en el fondo azul marino del modal sin generar cortes visuales.
2. **Centrado Vertical Armónico (`margin: auto` & `justify-content: center`)**:
   - `.menu-panel__main` ahora utiliza `margin: auto` y `justify-content: center`, logrando una distribución perfectamente equilibrada tanto vertical como horizontalmente entre la barra superior y el pie de contacto.
   - El pie institucional (`.menu-panel__foot`) utiliza `margin-top: auto` para anclarse suavemente en la base sin invadir el bloque de contenido.
3. **Eliminación del Truncamiento en Títulos de Pilares**:
   - Se configuró `.menu-group-title` con `white-space: normal` y un tamaño escalado fluido `clamp(11px, 0.82vw, 12px)`, garantizando que ningún texto institucional se recorte (`SECUNDARIA Y BACHILLERES` se visualiza completo e íntegro).
   - Se estableció `min-height: 38px` en `.menu-group-header` para que todos los separadores horizontales compartan exactamente la misma línea base visual en las 5 columnas.
4. **Modo Altura Reducida (`@media (max-height: 750px)`)**:
   - Reglas específicas para pantallas de baja altura, adaptando paddings y tamaños de fuente para que todo el contenido sea visible sin apretarse.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes en los 18 archivos HTML**.

---

## Sesión #2, Cambio #8.3 — Calibración Tipográfica: Mayor Legibilidad, Presencia y Escala Visual

### Diagnóstico de Retroalimentación
- El usuario reportó que las letras se visualizaban demasiado pequeñas en pantallas de escritorio, perdiendo protagonismo e impacto visual dentro del amplio lienzo del menú modal.

### Soluciones Aplicadas
1. **Escalado Tipográfico en Enlaces y Pilares**:
   - **Enlaces de Páginas (`.menu-link`)**: Aumentados de `14.5px` a un escalado fluido `clamp(15.5px, 1.1vw, 17px)` con `font-weight: 500`, mayor contraste (`rgba(255, 255, 255, 0.88)`) y mayor padding vertical (`12px`), haciéndolos claros, cómodos y destacados.
   - **Títulos de los 5 Pilares (`.menu-group-title`)**: Aumentados de `11-12px` a `clamp(12.5px, 0.92vw, 14px)` con `font-weight: 700` y `letter-spacing: 0.08em`, logrando un encabezado firme y legible en mayúsculas institucionales.
   - **Identificadores Numéricos (`.menu-group-num`)**: Aumentados de `11px` a `13px` con peso negrita `700`.
   - **Flecha Chevron (`.menu-chevron`)**: Aumentada a `15px` con transición fluida en hover.
2. **Jerarquía en Cabecera y Pie**:
   - **Kicker (`.menu-panel__kicker`)**: Aumentado de `11.5px` a `13px` con `letter-spacing: 0.22em`.
   - **Titular Principal `h2`**: Aumentado de `28-38px` a `clamp(34px, 3.2vw, 46px)` con `line-height: 1.12`.
   - **Párrafo Descriptivo `p`**: Aumentado de `14.5px` a `clamp(15px, 1.1vw, 17px)` con opacidad `0.75`.
   - **Contacto en Pie (`.menu-panel__contact`)**: Aumentado a `14px` con separación armónica de `14px`.
3. **Sincronización Total**:
   - Sincronizados [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes en los 18 archivos HTML**.

---

## Sesión #2, Cambio #8.4 — Elevación Óptica: Calibración Vertical Superior con Distancia de Seguridad al Nav

### Diagnóstico de Retroalimentación
- Tras aumentar los tamaños tipográficos, el bloque de navegación se sentía situado ligeramente abajo en pantallas grandes debido al centrado automático (`margin: auto`).
- El usuario solicitó subir la composición un poco más arriba, pero asegurando expresamente que **no colisione ni choque con la barra superior de navegación**.

### Soluciones Aplicadas
1. **Calibración de Espaciado Superior (`padding-top: clamp(98px, 11vh, 112px)`)**:
   - Con la barra de navegación fija en 88px, este espaciado proporciona una holgura limpia y constante de 18px a 24px entre el borde inferior del nav y el kicker superior del menú.
2. **Elevación Controlada de la Cuadrícula (`.menu-panel__main`)**:
   - Se ajustó el margen superior a `clamp(4px, 1.2vh, 14px)`, permitiendo que el titular y las 5 columnas asciendan de forma natural hacia la mitad superior del lienzo modal sin quedar apretadas contra el nav.
   - Margen inferior del titular optimizado a `clamp(20px, 2.8vh, 32px)`.
3. **Sincronización Total**:
   - Sincronizados [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes en los 18 archivos HTML**.

---

## Sesión #2, Cambio #8.5 — Adaptación y Optimización Responsive Integral (Mobile & Tablet)

### Solicitud del Usuario
- Adaptar exhaustivamente el diseño responsive antes de subir todos los cambios al repositorio remoto en GitHub.

### Soluciones Aplicadas
1. **Calibración en Tablets Landscape (769px a 1100px)**:
   - Configuración de la cuadrícula de los 5 pilares en 6 columnas (`grid-template-columns: repeat(6, 1fr)`).
   - Fila 1: Grupos 01, 02 y 03 abarcan 2 columnas cada uno (`span 2`).
   - Fila 2: Grupos 04 y 05 ocupan las columnas 2-3 y 4-5 respectivamente (`grid-column: 2 / span 2` y `4 / span 2`), centrándose de forma natural y simétrica sin dejar huecos vacíos a la derecha.
2. **Calibración en Tablets Portrait (581px a 768px)**:
   - Cuadrícula de 2 columnas balanceada para los 4 primeros pilares.
   - Pilar 05 (`FAMILIA Y COMUNIDAD`) abarca 2 columnas (`grid-column: span 2`) con sus enlaces distribuidos en subcuadrícula responsive (`grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))`), logrando una ocupación equilibrada del ancho disponible.
   - Pie de contacto en fila fluida (`flex-direction: row; justify-content: space-between; flex-wrap: wrap`).
3. **Optimización en Smartphones y Dispositivos Móviles (<= 580px y <= 380px)**:
   - Incorporación de `-webkit-overflow-scrolling: touch` para desplazamiento nativo suave con inercia en iOS/Safari.
   - Transición limpia a 1 columna con espaciados optimizados (`gap: 16px`).
   - Reset de altura de encabezado en columnas individuales (`min-height: auto`), evitando espacios muertos verticales innecesarios.
   - Párrafo descriptivo del titular adaptado con tipografía fluida y márgenes compactos.
   - Enlaces de navegación con área táctil cómoda (`10px 0`, `font-size: 15px`).
   - Contacto en pie estructurado en 3 líneas limpias (`flex-direction: column`) con ocultación de puntos separadores (`.menu-sep { display: none }`) para evitar saltos de línea desordenados.
4. **Pantallas de Altura Reducida (@media (max-height: 750px))**:
   - Reducción de paddings verticales (`clamp(74px, 11vh, 84px)` arriba, `14px` abajo).
   - Ocultación del párrafo descriptivo secundario en cabecera para ganar más de 35px útiles de pantalla.
   - Enlaces compactados a 13.5px para visualización cómoda sin saturar el scroll.
5. **Responsividad en Carrusel Continuo (.carousel-v3)**:
   - Breakpoints dedicados para 768px y 480px adaptando dimensiones de tarjetas (260x340px en tablet, 230x310px en móvil pequeño), escalando el titular `h2` con `clamp(28px, 6vw, 42px)` y reduciendo tags para evitar desbordamientos.
6. **Sincronización Total con WordPress**:
   - Sincronizados [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Recompiladas las plantillas del tema mediante `tools/build-wp-pages.ps1`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes en los 18 archivos HTML**.













