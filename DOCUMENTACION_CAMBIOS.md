# Documentación de Cambios — BPVDA Web

Historial cronológico de cambios aplicados en el repositorio y código fuente del sitio web del **Colegio Buen Pastor Voz de Alerta**.

## Sesión #44 — Ajuste y Encuadre Fotográfico en Filosofía Institucional (`filosofia.html`)
- **Objetivo**: Corregir el recorte fotográfico excesivo en el hero de `filosofia.html` (*Propósito BPVDA - Una educación con propósito*) sustituyendo la rotación vertical desproporcionada por una imagen estática panorámica institucional de alta nitidez, y reubicar la fotografía vertical del estudiante con uniforme y gafas BPVDA en la columna de la sección Visión.
- **Cambios Realizados**:
  1. **Hero de Propósito / Filosofía (`.purpose-fade`)**:
     - Se reemplazó el carrusel de 3 retratos verticales (`IMG_1963.JPG`, `IMG_1966.JPG`, `IMG_1991.JPG`) que se recortaban de forma forzada en pantallas horizontales por una única fotografía real panorámica de alta resolución: `assets/fotos/institucional/community.webp` (estudiantes y equipo docente sonrientes en el escenario escolar).
     - El script de rotación automática (`js/main.js`) detecta de forma nativa que existe un solo elemento activo y desactiva el temporizador para un despliegue estático, limpio y sin saltos visuales.
     - Ajuste de encuadre CSS en `css/styles.css`: `.purpose-fade__images img { object-fit: cover !important; object-position: center 38% !important; }` para centrar perfectamente a la comunidad educativa.
  2. **Sección Visión (`.purpose-pillar--vision`)**:
     - Se reemplazó la imagen anterior (`IMG_1655.JPG`) por `assets/new/purpose/IMG_1991.JPG` (estudiante con uniforme y gafas BPVDA), cuyo formato vertical 2:3 encaja de manera natural en la columna lateral 50/50 de la sección.
     - Ajuste de encuadre CSS: `.purpose-pillar--vision img { object-fit: cover !important; object-position: center 20% !important; }` asegurando enfoque nítido en el rostro e insignia institucional.
  3. **Corrección de Ritmo Responsivo en Pilares Formativos (`.purpose-pillar`)**:
     - Causa del problema reportado: En escritorio el diseño alterna en zig-zag (Foto-Texto en Valores, Texto-Foto en Misión, Foto-Texto en Visión). Al colapsar en una sola columna en pantallas móviles, el orden original del marcado generaba una colisión de dos bloques de texto contiguos (Texto de Valores inmediatamente seguido por Texto de Misión) y luego dos fotografías seguidas (Foto de Misión seguida de Foto de Visión).
     - Solución técnica:
       - En escritorio (`@media (min-width: 851px)`): Se preservó el diseño en zig-zag con `order: 1` para el texto y `order: 2` para la imagen en `.purpose-pillar--mission`.
       - En móviles/tablets (`@media (max-width: 850px)`): Se garantizó el ritmo visual consistente **Foto → Texto** en cada pilar (`img { order: 1; }`, `div { order: 2; }`), separando el texto blanco de Valores y el texto naranja de Misión mediante la fotografía de Misión.
  4. **Encuadre Fotográfico Superior en Pilares Formativos (`object-position: center top`)**:
     - Causa identificada: Las fotografías de los pilares (`IMG_1715.JPG`, `IMG_1627.JPG`, `IMG_1991.JPG`) son retratos donde las cabezas y rostros se ubican en el tercio superior. Al utilizar `object-position: 50% 50%` por defecto con `object-fit: cover`, el contenedor recortaba los extremos superior e inferior, cortando el pelo y la frente de los sujetos.
     - Solución técnica:
       - Se fijó `object-position: center top !important;` en `.purpose-pillar img` y en cada pilar individual (`.purpose-pillar--values img`, `.purpose-pillar--mission img`, `.purpose-pillar--vision img`), anclando el encuadre al margen superior para conservar el 100% de la cabeza, cabello y expresión facial.
       - En móviles (`@media (max-width: 850px)`), se amplió la altura del contenedor fotográfico a `height: clamp(360px, 85vw, 480px)` para otorgar mayor aire vertical en pantallas como 425px.
  5. **Sincronización Total del Ecosistema**:
     - Actualización en el generador maestro `tools/generate-pages.mjs`.
     - Regeneración de `filosofia.html` con `node tools/generate-pages.mjs`.
     - Sincronización de estilos en el tema WordPress con `node tools/sync-wp-css.mjs`.
     - Actualización de `tools/migrate-wordpress.php` y re-compilación de `wordpress-theme/page-filosofia.php` mediante `tools/build-wp-pages.ps1`.
     - Verificación con `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #43 — Optimización Integral para Móviles y Tablets: Experiencia Familiar Fluida
- **Objetivo**: Adaptar exhaustivamente todas las secciones y componentes rediseñados (Quiénes Somos, Instalaciones, Plantel Docente, SAI Campus Virtual, Vida Estudiantil, Ecosistema Digital, Portal de Padres, Contacto y detalles de Bachilleres) para teléfonos inteligentes y tabletas, eliminando fricciones para padres y acudientes.
- **Mejoras Implementadas**:
  1. **Tipografía Fluida y Encabezados Hero**:
     - Se ajustaron los límites inferiores de `clamp()` en títulos `h1` y `h2` (`clamp(1.85rem, 5.8vw, 2.6rem)`) con `overflow-wrap: break-word` para evitar que términos extensos rompan o desborden la pantalla en dispositivos estrechos (320px–400px).
     - Relleno ergonómico en héroes para dispositivos móviles: `clamp(84px, 11vh, 110px) 16px clamp(44px, 6vh, 60px)`.
  2. **Franjas de Métricas e Indicadores (Dashboard 2x2)**:
     - En lugar de colapsar 4 métricas a una columna vertical interminable, se implementó una cuadrícula balanceada `repeat(2, 1fr)` en teléfonos móviles (hasta 340px) en las 7 secciones de impacto, permitiendo escanear cifras de inmediato.
  3. **Manifiestos y Resguardo Fotográfico**:
     - Altura controlada de imágenes en móviles (`height: clamp(220px, 50vw, 340px)`).
     - Reubicación estática de las insignias y versículos flotantes en pantallas menores a 768px (`position: static; margin-top: 14px;`) para no obstruir las caras de docentes, alumnos ni instalaciones.
  4. **Tarjetas, Bento Grids y Densidad Visual**:
     - Reducción del acolchado interno en tarjetas (de 38px a ~18-20px en móviles) para dar prioridad a la legibilidad y evitar compresión de texto.
     - Transición en tabletas (768px–1024px) a cuadrículas de 2 columnas para plataformas, servicios, cronogramas y departamentos.
  5. **Prevención de Auto-Zoom en iOS Safari y Formulario de Contacto**:
     - Tipografía de inputs, selects y textareas fijada en `16px` para anular el zoom automático intrusivo de Safari en iPhone.
     - Botón de envío táctil ampliado a `min-height: 52px` con ancho completo.
  6. **Mapa y Canales de Atención Directa**:
     - Altura del mapa interactivo optimizada a 290px en móviles para evitar captura de scroll táctil al deslizar.
     - Botones de navegación directa a Google Maps y Waze distribuidos al 50% con objetivos táctiles de 46px.
     - Botón de cierre en cajón interactivo de carreras (`.career-popout__close`) ampliado a 36x36px con `touch-action: manipulation`.
  7. **Sincronización Total y Verificación**:
     - Estilos sincronizados con `wordpress-theme/style.css` vía `node tools/sync-wp-css.mjs`.
     - Plantillas PHP recompiladas con `tools/build-wp-pages.ps1`.
     - Verificación con `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #42 — Corrección Crítica de Maquetación del Hero de Instalaciones y Renderizado de Header/Footer
- **Objetivo**: Corregir de raíz el problema visual reportado en `instalaciones.html` donde el texto del hero aparecía aplastado en una columna de 20px a la derecha y restaurar la inyección íntegra de cabecera y pie de página en todo el sitio.
- **Correcciones Realizadas**:
  1. **Hero de Instalaciones (`instalaciones.html` y `css/styles.css`)**:
     - Causa identificada: `.inst-hero` utiliza `display: flex; align-items: center;`. La imagen de fondo no tenía aplicada la clase `.inst-hero__bg` y se renderizaba como elemento flex en el flujo de contenido con ancho natural, desplazando el contenedor `.inst-hero__container` fuera de pantalla y colapsando el titular tipográfico.
     - Solución técnica en CSS: Se amplió la regla a `.inst-hero img, .inst-hero > img, .inst-hero__bg` con `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;`. Regla defensiva análoga agregada a `.qs-hero`.
     - Solución en marcado: Se aseguró la clase `inst-hero__bg` en la etiqueta de la imagen hero dentro de `tools/generate-pages.mjs`.
  2. **Renderizado de Header y Footer**:
     - Se eliminó el escape accidental `\${visualHeader}` y `\${richFooter}` en las plantillas de `tools/generate-pages.mjs`, garantizando la inyección del header visual y footer con navegación Bento y redes en las 16 páginas.
  3. **Reconstrucción y Sincronización**:
     - Regeneración de HTML con `node tools/generate-pages.mjs`.
     - Sincronización de estilos con `node tools/sync-wp-css.mjs`.
     - Recompilación de plantillas WordPress con `tools/build-wp-pages.ps1`.
     - Verificación con `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #41 — Rediseño de Fase 3: Portal de Padres (`portal-padres.html`) y Contacto (`contacto.html`)
- **Objetivo**: Completar las 2 páginas de la **Fase 3 (03 Familia y Comunidad)** eliminando componentes repetitivos, tarjetas navy duplicadas y carruseles redundantes.
- **Páginas Transformadas**:
  1. `portal-padres.html`:
     - Hero cálido con fotografía de comunidad familiar (`assets/fotos/institucional/IMG_9637.webp`).
     - Franja de 4 métricas de acompañamiento escolar (Canales digitales, Escuela para Padres, Horarios de atención, 100% seguimiento).
     - Manifiesto de alianza formativa Colegio-Familia (*Proverbios 22:6*).
     - Cuadrícula de 6 servicios digitales y de apoyo (Edvoice, SAI Moodle, Caja y Tesorería, Consejería Escolar, Circulares Oficiales, Escuela para Padres).
     - Protocolo de comunicación paso a paso (4 etapas claras).
     - Calendario de hitos institucionales por bimestre escolar.
  2. `contacto.html`:
     - Hero sobrio y directo con foto del campus exterior (`assets/fotos/exterior/IMG_9379.webp`).
     - Franja de 4 canales de atención ágil (Línea PBX, WhatsApp oficial, Correo institucional, Atención presencial).
     - Tarjetas informativas de ubicación, horarios y vías de comunicación.
     - Integración del mapa satelital interactivo y formulario de consultas directas.
- **Verificación**: 0 enlaces rotos y 0 fotos duplicadas.

---

## Sesión #40 — Rediseño de Ecosistema Digital: Catálogo de Alianzas y Competencias (`ecosistema-digital.html`)
- **Objetivo**: Culminar la tercera y última página de la **Fase 2 (02 Enfoque Educativo)** del plan integral de des-duplicación visual, transformando por completo `ecosistema-digital.html` desde una plantilla genérica con 3 tarjetas navy clónicas, carrusel genérico y una marquesina simple de logos hacia un **Catálogo Interactivo de Alianzas Tecnológicas y Competencias Digitales** con fichas estructuradas de propósito pedagógico.
- **Transformación de Componentes e Imágenes Reales (2 fotos exclusivas y 8 logos oficiales de alianzas)**:
  1. **Hero Tecnológico de Innovación Educativa (`.eco-hero`)**:
     - Fotografía de portada de alta resolución: `assets/fotos/secundaria/IMG_9529.webp` (1.50 MB, estudiantes en aula informática con pantallas interactivas).
     - Overlay con degradado institucional tecnológico, eyebrow `02 ENFOQUE EDUCATIVO · ECOSISTEMA DIGITAL` con icono SVG de globo red, titular con `<mark>`, bajada clara y doble botón (*"Explorar Plataformas ↓"* y *"Campus Virtual SAI ↗"*).
  2. **Franja de Métricas Digitales (`.eco-facts-strip`)**:
     - 4 métricas del ecosistema de innovación:
       - `+8 Alianzas`: Plataformas educativas oficiales integradas.
       - `100%`: Alumnos con licencias institucionales activas.
       - `STEM & Lógica`: Enfoque pedagógico basado en competencias.
       - `Cloud 24/7`: Continuidad de aprendizaje en colegio y hogar.
  3. **Manifiesto de Innovación Ética (`.eco-manifesto`)**:
     - Columna izquierda con fotografía de estudiante concentrado en aula digital (`assets/fotos/secundaria/IMG_9520.webp`, 873 KB) y badge institucional (*"Tecnología con valores: creadores conscientes y éticos"*).
     - Columna derecha con filosofía de tecnología con propósito y cita rectora de *Proverbios 18:15*.
  4. **Catálogo de 8 Plataformas Educativas Oficiales (`.eco-platforms-section`)**:
     - 8 tarjetas interactivas con logo oficial, categoría, niveles escolares y descripción de impacto pedagógico:
       - *Progrentis* (`Progrentis1.png`): Neuroeducación y comprensión lectora ágil (Primaria y Secundaria).
       - *Matific* (`Matific1.png`): Pensamiento lógico-matemático gamificado (Preescolar y Primaria).
       - *Canva for Education* (`Canva1.webp`): Diseño gráfico y comunicación visual (Todos los niveles).
       - *Edvoice* (`Edvoice1.webp`): Canal de comunicación instantánea y seguimiento familiar (Comunidad de padres).
       - *SAI BPVDA Moodle* (`SAI logo oficial.jpg`): Campus virtual central y aula digital (Primaria y Secundaria).
       - *King's Corner* (`Kingscorner.png`): Inmersión lingüística y gramática en idioma inglés (Primaria y Secundaria).
       - *Academia 24* (`Academia 24 - 1.png`): Tutoría digital y refuerzo curricular (Secundaria y Bachilleres).
       - *Kahoot!* (`kahoot1.webp`): Gamificación y dinámicas de evaluación formativa en el aula (Todos los niveles).
  5. **Principios de Ciudadanía y Seguridad Digital (`.eco-safety-section`)**:
     - 3 tarjetas con iconografía SVG premium:
       - *Entornos Seguros y Privacidad*: Protección perimetral y resguardo estricto de datos.
       - *Mediación Docente Activa*: Planificación pedagógica con sentido, evitando el consumo pasivo.
       - *Equilibrio con la Vida Presencial*: Desconexión saludable, libros físicos y diálogo cara a cara.
  6. **Banner de Cierre (`.eco-cta`)**:
     - Llamado a la acción para iniciar el proceso de matrícula o conocer el campus SAI.
- **Sincronización Total y Validación SDD**:
  - Código incorporado de forma dedicada en `tools/generate-pages.mjs` y exportado a `ecosistema-digital.html`.
  - Estilos `.eco-*` estructurados en `css/styles.css` y sincronizados con `wordpress-theme/style.css` mediante `tools/sync-wp-css.mjs`.
  - Plantilla de WordPress regenerada mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-ecosistema-digital.php`).
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.
  - Auditoría de duplicados: **0 fotos repetidas en ecosistema-digital.html**.

---

## Sesión #39 — Rediseño de Vida Estudiantil: Mosaico Editorial de Experiencias y Clubes (`vida-estudiantil.html`)
- **Objetivo**: Completar la segunda página de la **Fase 2 (02 Enfoque Educativo)** del plan integral de des-duplicación visual, transformando `vida-estudiantil.html` desde una plantilla repetitiva con 3 tarjetas navy genéricas y carrusel clónico con fotografías duplicadas hacia un dinámico **Mosaico Editorial de Experiencias, Clubes y Cronograma Anual**.
- **Transformación de Componentes e Imágenes Reales (6 fotos únicas y 0 duplicadas)**:
  1. **Hero Vibrante de Comunidad Escolar (`.ve-hero`)**:
     - Fotografía de portada de alta resolución: `assets/fotos/secundaria/IMG_9587.webp` (752 KB, comunidad juvenil y ambiente escolar cálido).
     - Overlay degradado institucional, eyebrow `02 ENFOQUE EDUCATIVO · VIDA ESTUDIANTIL` con icono SVG de estrella, titular con `<mark>` naranja cálido, bajada descriptiva y doble botón de acción (*"Explorar Clubes y Actividades ↓"* y *"Proceso de Admisión ↗"*).
  2. **Franja de Métricas de Vida Estudiantil (`.ve-facts-strip`)**:
     - 4 métricas de formación extracurricular:
       - `+10 Clubes`: Talleres y disciplinas activas en el plantel.
       - `100%`: Participación en proyectos cívicos y comunitarios.
       - `3 Ferias`: Hitos institucionales anuales (Ciencia, Folclore y Deporte).
       - `1° Lugares`: Reconocimientos en olimpiadas científicas y STEM.
  3. **Manifiesto de Formación Integral (`.ve-manifesto`)**:
     - Columna izquierda con fotografía de liderazgo colaborativo (`assets/fotos/secundaria/IMG_9516.webp`, 973 KB) y badge con versículo rector de *1 Timoteo 4:12*.
     - Columna derecha con narrativa sobre aprender haciendo, conviviendo y sirviendo.
  4. **Cuadrícula de Clubes y Experiencias Formativas (`.ve-clubs-section`)**:
     - 4 tarjetas modulares interactivas con fotografías reales exclusivas:
       - *Club de Robótica y Ferias Científicas* (`assets/fotos/secundaria/IMG_9551.webp`, 1.06 MB).
       - *Disciplinas Deportivas y Torneos Escolares* (`assets/fotos/secundaria/IMG_9583.webp`, 732 KB).
       - *Banda de Música y Expresión Folclórica* (`assets/fotos/secundaria/IMG_9594.webp`, 746 KB).
       - *Devocionales y Liderazgo Cristiano* (`assets/fotos/secundaria/IMG_9524.webp`, 1.02 MB).
  5. **Cronograma de Hitos Escolares Anuales (`.ve-timeline-section`)**:
     - 4 hitos estructurados por trimestre:
       - *I Trimestre*: Jornada de Integración y Deporte.
       - *II Trimestre*: Feria de Ciencias y Robótica.
       - *III Trimestre*: Mes de la Patria y Semana Cívica.
       - *Cierre Lectivo*: Gala de Talentos y Graduación.
  6. **Banner de Cierre (`.ve-cta`)**:
     - Llamado a la acción con enlaces a Admisiones y Visitas al Campus.
- **Sincronización Total y Validación SDD**:
  - Código incorporado de forma dedicada en `tools/generate-pages.mjs` y exportado a `vida-estudiantil.html`.
  - Estilos `.ve-*` agregados a `css/styles.css` y sincronizados con `wordpress-theme/style.css` mediante `tools/sync-wp-css.mjs`.
  - Plantilla de WordPress regenerada mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-vida-estudiantil.php`).
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.
  - Auditoría de duplicados: **Eliminadas las 2 fotos duplicadas con bachilleres.html (`IMG_9582.webp` e `IMG_9574.webp`)**. Total de fotos duplicadas en el sitio reducido a 8.

---

## Sesión #38 — Rediseño del Campus Virtual Interactivo SAI (`sai.html`)
- **Objetivo**: Iniciar la **Fase 2 (02 Enfoque Educativo)** del plan integral de des-duplicación visual, transformando `sai.html` desde una plantilla repetitiva con un logo de baja resolución estirado en el hero, 3 cajas navy genéricas y carrusel clónico hacia un auténtico **Portal del Campus Virtual Interactivo** con tecnología Moodle, mockup de interfaz real, métricas digitales y guía paso a paso para estudiantes.
- **Transformación de Componentes e Imágenes Reales**:
  1. **Hero Tecnológico del Campus Virtual (`.sai-hero`)**:
     - Fotografía de portada de alta resolución: `assets/fotos/secundaria/IMG_9532.webp` (1.45 MB, estudiantes trabajando en estaciones digitales de aula informática).
     - Overlay con degradado institucional tecnológico, eyebrow `02 ENFOQUE EDUCATIVO · SAI BPVDA` con icono SVG de pantalla, titular con `<mark>`, bajada clara y doble botón de acción (*"Ingresar al Campus SAI ↗"* con enlace directo a la plataforma y *"Guía de Acceso para Estudiantes ↓"*).
  2. **Franja de Métricas Digitales (`.sai-facts-strip`)**:
     - 4 métricas del ecosistema digital:
       - `24/7`: Campus accesible en cualquier momento y lugar.
       - `100%`: Asignaturas con aula virtual y materiales al día.
       - `Moodle Enterprise`: Motor tecnológico educativo líder mundial.
       - `0 Papel`: Entregas digitales ecológicas, trazables y organizadas.
  3. **Mockup UI Oficial y Cuadrícula de Módulos (`.sai-preview-section`)**:
     - Ventana de navegador simulada (`.sai-window`) con barra de control (botones de semáforo rojo/amarillo/verde, URL `https://sai.bpvda.edu.pa/` y badge institucional).
     - Captura de pantalla real enmarcada de la plataforma BPVDA: `assets/new/sai/Captura de pantalla 2026-09-12 135920.png`.
     - 4 tarjetas modulares de funcionalidades pedagógicas:
       - *Materiales y Guías Didácticas*: Acceso permanente a lecciones y presentaciones.
       - *Buzón de Tareas y Entregas*: Subida de archivos con sello de hora automático.
       - *Evaluaciones y Quizzes*: Cuestionarios interactivos y autoevaluaciones.
       - *Calificaciones y Retroalimentación*: Notas ponderadas y comentarios del docente.
  4. **Guía de Acceso para Estudiantes en 3 Pasos (`.sai-steps-section`)**:
     - *Paso 1: Credenciales Oficiales* (usuario y clave asignados en matrícula).
     - *Paso 2: Acceso y Selección de Grado* (visita a `sai.bpvda.edu.pa` y panel de cursos).
     - *Paso 3: Participación y Entrega Oportuna* (fechas límite y aprovechamiento escolar).
  5. **Mesa de Asistencia Digital y Soporte (`.sai-support-section`)**:
     - 3 tarjetas de resolución de incidencias:
       - *Restablecimiento de Contraseña* (enlace directo a WhatsApp de secretaría/soporte).
       - *Acceso Móvil* (guía de la app oficial de Moodle para iOS y Android).
       - *Comunicación Familiar* (enlace integrado a la plataforma de padres Edvoice).
  6. **Banner de Cierre con Acceso Inmediato (`.sai-cta`)**:
     - Llamado directo a entrar al aula virtual o redirigir al Portal de Padres.
- **Sincronización Total y Validación SDD**:
  - Código incorporado de forma dedicada en `tools/generate-pages.mjs` y exportado a `sai.html`.
  - Estilos `.sai-*` estructurados en `css/styles.css` y sincronizados con `wordpress-theme/style.css` mediante `tools/sync-wp-css.mjs`.
  - Plantilla de WordPress regenerada mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-sai.php`).
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.
  - Auditoría de duplicados: **0 fotos repetidas en sai.html**.

---

## Sesión #37 — Rediseño de Plantel Docente: Enfoque Departamental y Mentoría por Ciclos (`plantel.html`)
- **Objetivo**: Culminar la tercera y última página de la **Fase 1 (01 Nuestra Escuela)** del plan integral de des-duplicación visual, transformando por completo `plantel.html` desde una plantilla repetitiva con 3 tarjetas navy genéricas, carrusel genérico y dibujos animados placeholders (`1.png` - `4.png`) hacia una estructura editorial de alto prestigio con enfoque departamental, mentoría por ciclos y fotografías reales de aula.
- **Transformación de Componentes e Imágenes Reales (6 fotos únicas y 0 repetidas)**:
  1. **Hero Editorial de Vocación Pedagógica (`.doc-hero`)**:
     - Fotografía de portada de alta resolución: `assets/fotos/primaria-preescolar/IMG_9490.webp` (1.2 MB, aula real con interacción activa docente-estudiante).
     - Overlay con degradado institucional, eyebrow `01 NUESTRA ESCUELA · PLANTEL DOCENTE` con icono SVG de mentores, titular de impacto con `<mark>` cálido, bajada descriptiva y doble botón (*"Conocer Ciclos y Departamentos ↓"* y *"Agendar Orientación Pedagógica ↗"*).
  2. **Franja de Métricas Docentes (`.doc-facts-strip`)**:
     - 4 métricas tangibles del equipo formativo:
       - `+40 Educadores`: Comprometidos con la formación integral y cristiana.
       - `100%`: Docentes titulados y en capacitación pedagógica continua.
       - `1:15`: Ratio docente-alumno para acompañamiento personalizado en aula.
       - `14 Grados`: Acompañamiento continuo desde Maternal hasta 12° año.
  3. **Manifiesto de Vocación y Mentoría Cristiana (`.doc-manifesto`)**:
     - Columna izquierda con fotografía real de aula (`assets/fotos/primaria-preescolar/IMG_9436.webp`, 1.2 MB) y badge flotante institucional (*"Vocación que transforma vidas"*).
     - Columna derecha con filosofía del educador BPVDA y cita bíblica rectora (*San Lucas 6:40*).
  4. **Estructura Departamental y Ciclos Formativos (`.doc-cycles-section`)**:
     - 4 tarjetas modulares de ciclos académicos con fotografías reales exclusivas y listas de competencias formativas:
       - *Ciclo 1: Preescolar y Maternal — Educación Inicial: Afecto, Curiosidad y Estimulación* (`assets/fotos/primaria-preescolar/IMG_9455.webp`, 1.0 MB).
       - *Ciclo 2: Educación Primaria — Cimientos Cognitivos y Carácter* (`assets/fotos/primaria-preescolar/IMG_9491.webp`, 1.1 MB).
       - *Ciclo 3: Secundaria y Bachilleratos — Rigor Académico y Liderazgo* (`assets/fotos/secundaria/IMG_9519.webp`, 1.2 MB).
       - *Ciclo 4: Áreas Especiales y STEM — Idiomas, Robótica, Arte y Deporte* (`assets/fotos/secundaria/IMG_9548.webp`, 809 KB).
  5. **Pilares del Compromiso Docente (`.doc-commit-section`)**:
     - 3 tarjetas con iconografía SVG premium y microtags institucionales:
       - *01 · Capacitación Continua*: Actualización en neuroeducación y plataformas digitales (Canva, Moodle, SAI).
       - *02 · Cuidado Socioemocional*: Pastoral, consejería y orientación cercana en valores bíblicos.
       - *03 · Alianza con el Hogar*: Comunicación diaria mediante Edvoice y reuniones periódicas de avance.
  6. **Banner de Cierre Docente (`.doc-cta`)**:
     - Diálogo y comunidad con enlaces directos para solicitar entrevistas pedagógicas y admisiones.
- **Sincronización Total y Validación SDD**:
  - Código incorporado de forma dedicada en `tools/generate-pages.mjs` y exportado a `plantel.html`.
  - Estilos `.doc-*` agregados a `css/styles.css` y sincronizados con `wordpress-theme/style.css` vía `tools/sync-wp-css.mjs`.
  - Plantilla WordPress regenerada mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-plantel.php`).
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.
  - Auditoría de duplicados: **0 imágenes duplicadas en plantel.html** y eliminados definitivamente los 4 dibujos placeholders antiguos.

---

## Sesión #36 — Rediseño Arquitectónico y Guía de Zonas de Instalaciones (`instalaciones.html`)
- **Objetivo**: Completar la segunda página de la **Fase 1 (01 Nuestra Escuela)** del plan integral de des-duplicación visual, transformando `instalaciones.html` desde una plantilla repetitiva con 3 tarjetas navy genéricas y carrusel genérico hacia una experiencia editorial e inmersiva de Guía de Campus por Zonas Clave y Mosaico Arquitectónico.
- **Transformación de Componentes e Imágenes Reales (9 fotos únicas de `assets/fotos/exterior/` y `assets/fotos/secundaria/`)**:
  1. **Hero Panorámico del Campus (`.inst-hero`)**:
     - Fotografía de portada de alta resolución: `assets/fotos/exterior/IMG_9387.webp` (Patio central bajo sombra natural y pabellón principal).
     - Overlay con degradado institucional, eyebrow `01 NUESTRA ESCUELA · INSTALACIONES Y CAMPUS`, titular asimétrico con `<mark>`, bajada descriptiva y doble botón de acción (*"Explorar Zonas del Campus ↓"* y *"Agendar una Visita Presencial ↗"*).
  2. **Franja de Capacidades del Campus (`.inst-facts-strip`)**:
     - 4 métricas de infraestructura escolar:
       - `100%`: Aulas climatizadas y confortables.
       - `3 Pabellones`: Preescolar, Primaria y Secundaria claramente delimitados.
       - `1 Lab`: Informática, STEM y Robótica educativa.
       - `2 Áreas`: Cancha multideportiva y parque infantil VDA.
  3. **Guía de Espacios por Zonas Clave (`.inst-zones-section`)**:
     - Reemplazo total de las 3 tarjetas navy por 4 tarjetas modulares interactivas con foto superior, badge temático y lista de características con checks SVG:
       - *Zona 1: Aulas Modernas y Entornos de Aprendizaje* (`assets/fotos/exterior/IMG_9383.webp`).
       - *Zona 2: Laboratorio de Cómputo, Robótica y Ciencias* (`assets/fotos/secundaria/IMG_9531.webp`).
       - *Zona 3: Cancha Multideportiva y Espacios Recreativos* (`assets/fotos/exterior/IMG_9391.webp`).
       - *Zona 4: VDA Park: Esparcimiento y Juego Infantil* (`assets/fotos/exterior/IMG_9394.webp`).
  4. **Mosaico Bento Arquitectónico (`.inst-bento-section`)**:
     - Sustituido el carrusel genérico por un Bento Grid de 4 piezas asimétricas con fotografías reales de exteriores:
       - *Pabellón exclusivo de Primera Infancia* (`assets/fotos/exterior/IMG_9408.webp`).
       - *Entrada principal y garita de seguridad* (`assets/fotos/exterior/IMG_9371.webp`).
       - *Corredores techados y descanso* (`assets/fotos/exterior/campus-restzone.webp`).
       - *Módulos de juego y desarrollo motor* (`assets/fotos/exterior/IMG_9400.webp`).
  5. **Banner de Cierre: Recorrido Presencial (`.inst-cta`)**:
     - Llamado a la acción con agendamiento guiado a contacto y admisiones.
- **Sincronización Total y Validación SDD**:
  - Código incorporado de forma dedicada en `tools/generate-pages.mjs` y exportado a `instalaciones.html`.
  - Estilos `.inst-*` estructurados en `css/styles.css` y espejados en `wordpress-theme/style.css`.
  - Plantilla de WordPress regenerada mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-instalaciones.php`).
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #35 — Rediseño Editorial y Des-duplicación Visual de ¿Quiénes Somos? (`quienes-somos.html`)
- **Objetivo**: Iniciar la **Fase 1 (01 Nuestra Escuela)** del plan integral de des-duplicación visual, eliminando por completo los bloques clónicos y repetitivos (`split-feature` 50/50, `content-cards` con 3 cajas navy genéricas y `carousel-v3` genérico) en `quienes-somos.html`, sustituyéndolos por una arquitectura institucional de prestigio auténtica con imágenes reales no repetidas.
- **Transformación de Componentes**:
  1. **Hero Institucional de Prestigio (`.qs-hero`)**:
     - Fotografía de fondo de alta resolución (`assets/fotos/institucional/admision.webp`, 602 KB) con wash degradado institucional para legibilidad óptima.
     - Eyebrow con icono SVG (`01 NUESTRA ESCUELA · IDENTIDAD Y TRAYECTORIA`), titular de impacto con `clamp()` y botones de acción doble (*"Conoce nuestra historia ↓"* y *"Proceso de admisión ↗"*).
  2. **Franja de Métricas e Impacto Formativo (`.qs-facts-strip`)**:
     - 4 métricas tangibles: `+20` años de trayectoria en 24 de Diciembre, `100%` formación con valores bíblicos, `14` grados continuos (Maternal a Secundaria) y `3` bachilleratos oficiales.
  3. **Manifiesto Editorial Asimétrico (`.qs-manifesto`)**:
     - Columna izquierda con fotografía de cultura y comunidad escolar (`assets/fotos/institucional/culture.webp`, 297 KB) y badge flotante institucional (*"Formación para la vida, no solo para el aula"*).
     - Columna derecha con narrativa auténtica y caja destacada de cita bíblica rectora (*Proverbios 22:6*).
  4. **Tríada de Pilares Fundacionales (`.qs-pillars-grid`)**:
     - Sustituidas las 3 tarjetas navy genéricas por tarjetas editoriales interactivas con iconografía SVG premium y acentos de color institucional:
       - *01 · Espiritualidad y Carácter*: Fundamento Cristocéntrico.
       - *02 · Rigor Pedagógico*: Excelencia Académica y STEM.
       - *03 · Comunidad y Hogar*: Alianza Sagrada con la Familia.
  5. **Mosaico Bento de Vida Escolar (`.qs-bento-section`)**:
     - Eliminado el carrusel repetido de diapositivas y reemplazado por un Bento Grid asimétrico con 4 fotografías institucionales reales sin duplicación:
       - *Mérito y Superación* (`achievement.webp`)
       - *Pensamiento Crítico* (`learn-mind.webp`)
       - *Fe y Convivencia* (`mission.webp`)
       - *Identidad y Cultura* (`culture-main.webp`)
  6. **Llamado a la Acción Institucional (`.qs-cta`)**:
     - Bloque elegante con accesos directos a Admisiones y agendamiento de visitas al campus.
- **Sincronización Total y Validación SDD**:
  - Código incorporado de forma dedicada en `tools/generate-pages.mjs` y exportado a `quienes-somos.html`.
  - Estilos `.qs-*` estructurados en `css/styles.css` y espejados en `wordpress-theme/style.css`.
  - Plantilla de WordPress regenerada mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-quienes-somos.php`).
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #34 — Restauración de Canales Directos de Contacto y Coordenadas Exactas de Google Maps (`contacto.html`)
- **Objetivo**: Recuperar la versión definitiva de la sección de contacto y mapa en `contacto.html`, luego de que un commit de colaborador (`81b1930`) revirtiera las tarjetas interactivas de contacto y sustituyera el mapa de coordenadas exactas por una búsqueda genérica de calle.
- **Cambios Restaurados**:
  1. **Google Maps con Coordenadas Geográficas Exactas**:
     - Restaurado el `iframe` con las coordenadas precisas del colegio: `https://www.google.com/maps?q=9.106901321318759,-79.36663973009655&hl=es&z=17&output=embed`, garantizando que el pin rojo señale exactamente las instalaciones en 24 de Diciembre.
  2. **Tarjetas Interactivas de Contacto Directo (`.contact-direct__card`)**:
     - **Secretaría**: Enlace `tel:+5073915811`, ícono SVG de teléfono, tag turquesa, valor `391-5811`, subtítulo *"Atención telefónica regular"* y flecha de acción `↗`.
     - **WhatsApp**: Enlace directo `https://wa.me/50767441351`, estilo de acento verde WhatsApp (`.contact-direct__card--wa`), ícono SVG de mensaje, tag, valor `6744-1351`, subtítulo *"Consultas directas"* y flecha `↗`.
     - **Correo**: Enlace `mailto:info@buenpastor-vda.net`, ícono SVG de correo, tag, valor `info@buenpastor-vda.net`, subtítulo *"Trámites y consultas"* y flecha `↗`.
  3. **Estilos y Centrado Simétrico**:
     - Restauradas en `css/styles.css` y `wordpress-theme/style.css` las reglas de `.contact-direct`, `.contact-direct.section-pad`, `.contact-direct__card`, `.contact-direct__icon`, `.contact-direct__tag`, `.contact-direct__value`, `.contact-direct__sub`, `.contact-direct__arrow` y modificadores hover.
     - Ajustado el padding de `.carousel-v3` (`padding-bottom: clamp(28px, 3vw, 36px)`) para lograr simetría vertical (`~64px` arriba y abajo de las tarjetas).
  4. **Sincronización Total del Ecosistema**:
     - Actualizados `contacto.html`, `tools/generate-pages.mjs` y `wordpress-theme/page-contacto.php`.
- **Verificación**: `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #33 — Adaptación y Ajuste de Imagen en Sección de Contacto (`index.html`)
- **Objetivo**: Corregir el espacio vacío inferior debajo de la fotografía de entrada/campus en la sección de Contacto (*"El siguiente paso / Ven a conocer nuestra comunidad"*), adaptando la imagen para que llene el 100% de la altura de la columna y elimine completamente el espacio naranja residual.
- **Causa Raíz Identificada**:
  - La sección `.contact` es un grid de 2 columnas (`.9fr 1.1fr`) con fondo naranja institucional (`--orange`).
  - La columna de texto derecha (`.contact-copy`) es dinámica y de mayor altura (~750px–850px) debido al título tipográfico grande (`clamp(46px, 5.4vw, 76px)`), espaciados y botones de acción.
  - La imagen izquierda (`.contact-photo img`) tenía una altura fija hardcoded de `height: 620px;`, dejando un espacio vacío de más de 120px–180px debajo de la foto que revelaba el fondo naranja del contenedor.
- **Solución Implementada**:
  - En `.contact`: fijado `min-height: 620px` y `align-items: stretch` para asegurar un balance vertical mínimo y estiramiento parejo de ambas columnas.
  - En `.contact-photo`: configurado con `position: relative`, `height: 100%`, `min-height: 100%` y `overflow: hidden`.
  - En `.contact-photo img` (y `.contact-photo figure img` para bloques Gutenberg de WordPress): posicionado de forma absoluta (`position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;`). De esta manera, la imagen llena con precisión milimétrica el 100% del alto y ancho disponible sin forzar el cálculo de pistas de Grid ni dejar ningún espacio inferior.
  - En `.contact-copy h2`: añadido `hyphens: none` para evitar cortes de guiones antiestéticos como *"cono-cer"*.
  - En dispositivos móviles (`@media (max-width: 700px)`): reseteado `min-height: auto` en la sección y fijada la foto en `height: 340px; position: relative` con `object-fit: cover` para una presentación apilada nítida y equilibrada.
- **Sincronización Total y Validación SDD**:
  - Modificado `css/styles.css` y espejado en `wordpress-theme/style.css`.
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #32 — Interactividad Vocacional en Perfiles de Salida / Carreras Universitarias (`bachilleres.html`)
- **Objetivo**: Implementar interactividad en todos los apartados de *Perfil de Salida / Carreras Universitarias* en los tres bachilleratos (Ciencias, Informática y Comercio), de modo que al presionar cualquier carrera sobresalga una mini-información explicativa sobre qué trata esa profesión y cómo prepara BPVDA al estudiante.
- **Estructura Interactiva y Accesible (HTML / ARIA)**:
  - Conversión de las píldoras estáticas en botones accesibles `<button type="button" class="career-pill" ... aria-expanded="false">` con atributo visual `+` (icono que rota 45° a `✕` al activarse).
  - Incorporación de atributos de datos semánticos (`data-title`, `data-desc`, `data-bpvda`, `data-keys`) para 19 carreras universitarias oficiales.
  - Inclusión de un contenedor desplegable animado (`.career-popout`) debajo del grupo de píldoras con encabezado, título, descripción vocacional, aporte pedagógico BPVDA, áreas curriculares clave y botón de cierre `✕`.
- **Comportamiento en JavaScript (`js/main.js`)**:
  - Delegación de eventos en cada contenedor `.track-careers`:
    - Al presionar una carrera: se resalta la píldora activa con notch indicador `▼`, se inyectan los datos y se despliega la tarjeta con animación fluida.
    - Al presionar la misma carrera activa: se alterna a estado cerrado.
    - Al presionar el botón `✕` de la tarjeta o la tecla `Escape`: se contrae el detalle y se devuelve el foco de manera accesible.
- **Diseño Visual y Responsividad (`css/styles.css` y `wordpress-theme/style.css`)**:
  - Píldoras con sombra sutil, elevación hover y colores de acento por especialidad (turquesa para Ciencias, naranja para Informática, dorado para Comercio).
  - Tarjeta desplegable con transición suave de altura basada en CSS Grid (`grid-template-rows: 0fr` a `1fr`), borde de acento izquierdo y metadatos en 2 columnas (1 columna en dispositivos móviles).
- **Sincronización Total y Validación SDD**:
  - Compilado en `tools/generate-pages.mjs` y exportado a `bachilleres.html`.
  - Plantilla de WordPress actualizada mediante `tools/build-wp-pages.ps1` (`wordpress-theme/page-bachilleres.php`).
  - Verificación `node tools/verify-integrity.mjs`: **0 enlaces rotos, 0 recursos multimedia faltantes**.

---

## Sesión #31 — Perfeccionamiento de Bachilleres (`bachilleres.html`): Fotografía de Comercio y Rediseño Editorial del Hub Preuniversitario
- **Objetivo**: Atender los dos requerimientos puntuales del usuario en `bachilleres.html`:
  1. Reemplazar la fotografía de Bachillerato en Comercio (`IMG_9514.webp`) por una imagen más dinámica, nítida y atractiva.
  2. Rediseñar completamente el bloque de llamado a la acción preuniversitario (`.bachilleres-cta-box`), eliminando la apariencia genérica, simple y de plantilla de IA para convertirlo en un módulo de admisión preuniversitaria de alto nivel editorial.
- **Cambio Fotográfico en Bachillerato en Comercio**:
  - Sustitución de `IMG_9514.webp` (estudiantes mirando hacia abajo con fondo de baldosas que lucía estático) por `IMG_9531.webp`: fotografía de alta resolución y dinamismo de estudiantes de secundaria en clase activa con computadoras portátiles, tabletas digitales y material didáctico colaborativo.
  - Actualización del badge a *"Gestión Empresarial, Finanzas & Proyectos"*.
- **Rediseño Editorial del Hub Preuniversitario (`.preuni-admissions-hub`)**:
  - Se eliminó el contenedor simple y centrado de IA (`.bachilleres-cta-box`) y se sustituyó por una arquitectura asimétrica dividida en dos columnas (*Split Pre-University Admissions Hub*):
    - **Cabecera Editorial**: Título editorial de prestigio (*"Tu Proyección Universitaria Comienza con una Base Sólida"*) con apertura limpia sin etiquetas flotantes redundantes.
    - **Columna Izquierda (Garantías Formativas)**: 3 pilares académicos tangibles con iconografía SVG nítida:
      1. *Articulación Directa con Admisiones (UTP · UP · USMA)*: Refuerzo en cálculo, ciencias, redacción y lógica analítica.
      2. *Prácticas Reales en Laboratorios y Software*: Experimentación práctica, desarrollo de software, robótica y contabilidad computarizada.
      3. *Orientación Vocacional y Acompañamiento Personalizado*: Diagnóstico de aptitudes para afianzar la elección vocacional.
      - Acciones de doble nivel: botón primario *"Iniciar Proceso de Admisión →"* y botón secundario *"Consultar con Secretaría Académica"*.
    - **Columna Derecha (Tarjeta Flotante de Ruta y Atención Inmediata)**: Tarjeta ejecutiva con fondo `--deep` y gradiente de contraste:
      - *Ruta en 3 Pasos*: 01. Revisión de Requisitos y Créditos, 02. Diagnóstico Académico y Entrevista, 03. Matrícula y Asignación de Especialidad.
      - *Canales Directos*: Acceso inmediato con clic directo al PBX telefónico `(507) 391-5811`, correo oficial `info@buenpastor-vda.net`, y horario de atención presencial de la sede en 24 de Diciembre.
- **Refinamiento de la Cita de Graduando (`.student-voice`)**:
  - Reestructurado el contenedor de la cita con comillas decorativas sutiles, tipografía cursiva equilibrada y firma institucional jerarquizada para enlazar armoniosamente con el Hub de Admisiones.
- **Sincronización Total y Validación SDD**:
  - Código fuente unificado en `tools/generate-pages.mjs` y regenerado con `node tools/generate-pages.mjs`.
  - Estilos CSS incorporados y responsivos en `css/styles.css` y espejados en `wordpress-theme/style.css`.
  - Tema de WordPress recompilado con `tools/build-wp-pages.ps1` (`wordpress-theme/page-bachilleres.php`).
  - Verificación estricta con `node tools/verify-integrity.mjs`: **0 enlaces rotos y 0 recursos multimedia faltantes**.

---

## Sesión #30 — Rediseño de Secundaria (`secundaria.html`): Nuevo Hero y Bento Grid Editorial
- **Objetivo**: Atender la solicitud del usuario en la sección de Secundaria (`secundaria.html`): cambiar la imagen de fondo del Hero que se cortaba incómodamente (`IMG_9504.webp`), eliminar las tarjetas repetitivas (`.content-cards` y `.carousel-v3`), y presentar una alternativa de diseño asimétrica, fresca y moderna para que el usuario decida si mantenerla o retirarla.
- **Cambio de Imagen de Hero**:
  - Reemplazo de `IMG_9504.webp` (estudiante agachado recortado por el encuadre) por `IMG_9528.webp` (4 estudiantes de secundaria con uniforme y carpetas en pasillo iluminado por luz natural, sonriendo, con encuadre amplio).
  - Regla CSS `.interior-hero--secundaria img { object-position: center 25%; }` para garantizar que los rostros y cuerpos de los estudiantes permanezcan perfectamente visibles y centrados en desktop, tablet y móviles sin cortes indeseados.
- **Eliminación de Elementos Repetitivos**:
  - Removido el bloque `.content-cards` (3 tarjetas azul marino genéricas).
  - Removido el carrusel `.carousel-v3` (6 tarjetas idénticas con la misma etiqueta BPVDA).
- **Implementación de Alternativa Dinámica: Bento Grid Asimétrico (`.bento-section`)**:
  - **Tarjeta Hero Principal (7 columnas)**: Destaca el aula interactiva de secundaria con fotografía real `IMG_9530.webp` (clase activa con docente y proyecto experimental de física), badge "Campus Activo" con punto pulsante turquesa, titular de aulas equipadas y botón de acción hacia Bachilleres.
  - **Tarjeta Métrica Destacada (5 columnas)**: Fondo azul corporativo (`var(--deep)`), indicador `100%`, y lista de verificación con iconos SVG (admisión universitaria, robótica educativa, apoyo psicopedagógico).
  - **3 Microtarjetas Inferiores (4 columnas c/u)**:
    1. *Ecosistema SAI*: Icono de plataforma, descripción y etiquetas tipo píldora (Calificaciones, Horarios, Comunicación).
    2. *Valores y Convivencia*: Icono naranja de libro/principios, formación bíblica y enlace directo a Filosofía Institucional.
    3. *Ciencia y Robótica*: Icono de matraz/laboratorio, enfoque en proyectos STEM y feria anual.
- **Cita Estudiantil Realista**:
  - Reemplazado el texto genérico de guía en `.student-voice` por una cita contextualizada de un estudiante de secundaria BPVDA.
- **Sincronización de Plantillas y WordPress**:
  - `tools/generate-pages.mjs`: Desacoplada `secundaria.html` del bucle genérico y dotada de su propio generador modular para evitar sobreescritura accidental.
  - `css/styles.css` y `wordpress-theme/style.css`: Incorporados los estilos y media queries del Bento Grid y el encuadre del Hero.
  - Sincronizado `wordpress-theme/page-secundaria.php` mediante `tools/build-wp-pages.ps1`.
  - Verificación `node tools/verify-integrity.mjs`: 0 enlaces rotos, 0 recursos multimedia faltantes.

---

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

---

## Creación y Rediseño Integral de la Sección de Bachilleres (2026-10-12)

### Solicitud del Usuario
- Diseñar y desarrollar la sección de **Bachilleres** (`bachilleres.html`), destacando de forma integral, atractiva y no repetitiva las tres especialidades oficiales que ofrece el colegio:
  1. **Bachillerato en Ciencias**
  2. **Bachillerato en Informática**
  3. **Bachillerato en Comercio**
- Que la sección sea lo mejor posible, dinámica, visualmente llamativa y mantenga la coherencia fotográfica institucional.

### Diagnóstico Previo
- La página `bachilleres.html` poseía un contenido provisional generado con el generador genérico de niveles que contenía la etiqueta errónea `04 PRIMARIA` y un texto de marcador de posición (*"Aquí se incorporará el contenido institucional de Bachilleres"*).
- No existía un desglose específico con la identidad pedagógica, competencias técnicas, laboratorios y perfiles de egreso para las tres modalidades de bachillerato.

### Soluciones Aplicadas
1. **Hero Interior de Educación Media**:
   - Fotografía real de alta resolución: `assets/fotos/secundaria/IMG_9582.webp` (aula de secundaria en sesión interactiva participativa con pantalla digital).
   - Tipografía institucional: `04 NIVELES ACADÉMICOS · EDUCACIÓN MEDIA`, titular destacado *"Tu vocación forjada con <mark>excelencia y propósito</mark>."* y botones de acción rápida (*Explorar Especialidades ↓* y *Proceso de Admisión →*).
2. **Barra de Navegación Rápida de Especialidades (`.tracks-nav-bar`)**:
   - Selector visual interactivo con micro-tarjetas numeradas (01 Ciencias, 02 Informática, 03 Comercio) con enlaces directos (`#ciencias`, `#informatica`, `#comercio`) para exploración inmediata.
3. **Presentación Editorial Preuniversitaria (`.split-feature`)**:
   - Fotografía contextual de educación media: `assets/fotos/secundaria/IMG_9550.webp` (estudiantes en aula tecnológica con computadoras portátiles y pantalla inteligente).
   - Franja de métricas clave (`.preuni-stats-strip`): `100% Articulación Universitaria`, `3 Bachilleratos Oficiales`, `MEDUCA Planes Certificados`.
4. **Showcase Tridimensional de Especialidades (Diseño No Repetitivo)**:
   - **01. Bachillerato en Ciencias**:
     - Fotografía: `assets/fotos/secundaria/IMG_9574.webp` (estudiante resolviendo álgebra lineal y matrices en pizarra inteligente).
     - Insignia: `Laboratorio de Matemáticas & STEM`.
     - Tag: `CIENCIAS EXACTAS Y DE LA SALUD · STEM`.
     - Competencias: Química y Biología Experimental, Cálculo y Álgebra Superior, Física Aplicada y Bioética.
     - Carreras de salida: Medicina & Cirugía, Ingeniería Civil, Biotecnología, Electromecánica, Odontología, Arquitectura, Farmacia.
   - **02. Bachillerato en Informática**:
     - Disposición inversa asimétrica (`.track-showcase--reverse`) para quebrar la monotonía visual.
     - Fotografía: `assets/fotos/secundaria/robotics-2.webp` (estudiantes en taller de robótica con multímetro, circuitos y programación en laptop).
     - Insignia: `Robótica Educativa, Circuitos & Software`.
     - Tag: `TECNOLOGÍA, SOFTWARE E INNOVACIÓN · EDUTECH`.
     - Competencias: Programación y Código, Robótica y Mecatrónica, Redes y Conectividad LAN, Ciberseguridad y Ética Digital.
     - Carreras de salida: Ingeniería de Software, Ciencias de la Computación, Ciberseguridad, Robótica & Automatización, Telecomunicaciones, IA.
   - **03. Bachillerato en Comercio**:
     - Fotografía: `assets/fotos/secundaria/IMG_9514.webp` (estudiantes en sesión colaborativa de análisis empresarial y proyectos comerciales).
     - Insignia: `Gestión Empresarial & Contabilidad`.
     - Tag: `GESTIÓN EMPRESARIAL, FINANZAS Y LIDERAZGO`.
     - Competencias: Contabilidad Financiera y Bancaria, Gestión de Empresas, Legislación Mercantil/Tributaria, Formulación de Planes de Negocio.
     - Carreras de salida: Banca y Finanzas, Contaduría Pública Autorizada (CPA), Administración de Empresas, Comercio Internacional, Mercadeo & Logística, Economía.
5. **Ecosistema Preuniversitario BPVDA (`.preuni-section`)**:
   - Bloque Bento en fondo oscuro de alto contraste (`var(--deep)`) con 4 pilares:
     - 01. Simulacros y Admisión Universitaria (UP, UTP, universidades privadas).
     - 02. Aulas Digitales y Laboratorios equipados.
     - 03. Orientación Vocacional Personalizada (acompañamiento psicopedagógico en 10°, 11° y 12°).
     - 04. Liderazgo Ético y Carácter Cristiano.
6. **Voz de la Comunidad / Graduando (`.student-voice`)**:
   - Cita testimonial destacando el acompañamiento docente y la preparación integral con Dios como fundamento.
7. **Bloque de Conversión y Admisión Media (`.bachilleres-cta-box`)**:
   - Banner con gradiente institucional, llamado claro a la acción y enlaces directos a [admisiones.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/admisiones.html) y [contacto.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/contacto.html).
8. **Sincronización Total con el Ecosistema y WordPress**:
   - Plantilla modular actualizada en [tools/generate-pages.mjs](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/tools/generate-pages.mjs).
   - Estilos CSS idénticos agregados a [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) y [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Recompiladas todas las páginas del sitio estático con `node tools/generate-pages.mjs`.
   - Generada la plantilla para WordPress [wordpress-theme/page-bachilleres.php](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/page-bachilleres.php) mediante `tools/build-wp-pages.ps1`.

### Verificación
- `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes en los 18 archivos HTML**.

---

## Sesión #22 — Optimización Responsiva Móvil, Navegación Táctil e Interactividad en Bachilleres (2026-10-12)

### Problemas Solucionados
1. **Colisión de Cabecera al Hacer Scroll en Móvil**:
   - En dispositivos móviles, la barra superior se volvía transparente al desplazarse hacia abajo (`is-scrolled-free`), provocando que los textos, títulos e imágenes colisionaran directamente detrás del logotipo BPVDA.
   - **Solución**: Se forzó un fondo sólido/esmerilado azul profundo (`rgba(3, 28, 49, 0.96)`) con `backdrop-filter: blur(16px)` y borde inferior sutil en pantallas <= 992px, asegurando legibilidad impecable y protección total del logotipo institucional y botón hamburguesa en todo momento.
2. **Botón Temporal de Desarrollador en Móvil**:
   - El desplegable `🛠 Desarrollador` ocupaba espacio crítico en la barra superior móvil, apretando el logo BPVDA contra el botón de menú.
   - **Solución**: Ocultado estrictamente en pantallas móviles y tablets (`@media (max-width: 992px) { .dev-menu-container { display: none !important; } }`).
3. **Barra de Acceso Rápido entre Especialidades (`.tracks-nav-bar`)**:
   - En móvil colapsaba en líneas de texto planas sin apariencia de tarjeta ni retroalimentación táctil.
   - **Solución**: Rediseñada en tarjetas táctiles independientes con fondo blanco, sombra de elevación, borde izquierdo distintivo por color (turquesa para Ciencias, naranja para Informática, ámbar para Comercio) e indicador circular de salto `↓` que responde al toque (`:active`).
4. **Fallo en Cajón Interactivo de Carreras (`.career-popout`)**:
   - El cajón utilizaba `grid-template-rows: 0fr`, lo que provocaba que en navegadores móviles (WebKit/Chromium) los bordes y etiquetas internas (`INFORMACIÓN DE CARRERA [✕]`, `Aporte Formativo:`, `Áreas Curriculares:`) permanecieran permanentemente visibles en blanco antes de presionar cualquier botón, transmitiendo sensación de fallo.
   - **Solución**: Se rediseñó con `display: none !important;` por defecto y `display: block !important;` junto a animación fluida (`careerDrawerFadeIn`) únicamente al activarse una carrera.
   - Píldoras de carrera (`.career-pill`) convertidas en botones táctiles redondeados (mínimo 40px de altura táctil) con icono circular `+` que rota a `✕` en estado activo.
   - Se añadió desplazamiento suave automático (`scrollIntoView`) en móvil al tocar una carrera para asegurar retroalimentación inmediata.
   - Indicador explicativo actualizado: `👆 Toca cada carrera para ver detalles`.
5. **Ajuste de Proporciones en Contenido Móvil**:
   - `.preuni-stats-strip` adaptada a 3 columnas horizontales compactas (`100%`, `3`, `MEDUCA`) evitando bloques verticales desmedidos.
   - Reducción de espaciados y tipografía balanceada en `.track-showcase`, `.track-competencies`, `.preuni-section` y `.preuni-admissions-hub`.
6. **Sincronización Total con WordPress**:
   - Sincronizados [css/styles.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/css/styles.css) con [wordpress-theme/style.css](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/style.css).
   - Sincronizado [js/main.js](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/js/main.js) con [wordpress-theme/js/main.js](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/wordpress-theme/js/main.js).
   - Recompiladas las plantillas PHP con `tools/build-wp-pages.ps1`.
   - Verificado con `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.

---

## Sesión #41 — Rediseño Integral de Portal de Padres: Hub de Servicios a la Familia (2026-10-13)

### Objetivos y Transformación de la Página
Se transformó por completo `portal-padres.html` (perteneciente al pilar **03 FAMILIA Y COMUNIDAD**), erradicando las tarjetas navy genéricas, el carrusel de fotos repetidas y la imagen estirada de logotipo en el hero.

### Mejoras Realizadas
1. **Hero de Alianza Familia-Colegio**:
   - Fotografía real de fachada exterior y recepción (`assets/fotos/exterior/IMG_9370.webp`, 6000x4000, 100% no utilizada previamente en el sitio) con overlay corporativo azul profundo y turquesa.
   - Titular: *«Una alianza viva entre el hogar y el colegio»*.
   - Badges rápidos de estado (Edvoice, SAI Moodle y Horario de Secretaría).
2. **Franja de Métricas y Compromisos (`.padres-facts-strip`)**:
   - 4 compromisos institucionales: 100% Digital sin papel, 24/7 Disponibilidad del aula virtual SAI, 4 Informes periódicos y <24h tiempo de respuesta.
3. **Hub Central de Plataformas y Servicios (`.padres-services-grid`)**:
   - Mosaico de 6 tarjetas de acción rápida con logos oficiales, iconos y botones directos:
     1. **Edvoice**: App de comunicación oficial, circulares y justificación ágil de ausencias médicas.
     2. **SAI BPVDA**: Aula virtual Moodle, tareas, guías de estudio descargables y notas.
     3. **Tesorería y Finanzas**: Información de pagos vía Banco General, ACH, Yappy Comercial y botón directo de WhatsApp para envío de comprobantes.
     4. **Calendario y Fechas Clave**: Hitos de entregas de boletines, asambleas y vacaciones.
     5. **Consejería Pastoral y Apoyo Socioemocional**: Orientación cristiana, hábitos de estudio y citas confidenciales.
     6. **Secretaría Escolar y Trámites**: Emisión de constancias, récord de notas y teléfono directo (391-5811).
4. **Manifiesto de Alianza Hogar-Escuela**:
   - Fotografía del campus (`assets/fotos/exterior/IMG_9374.webp`, 6000x4000, 100% no utilizada previamente).
   - Principio bíblico: *«Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.» — Proverbios 22:6*.
5. **Guía de Primeros Pasos para Nuevas Familias (`.padres-steps-grid`)**:
   - 4 pasos estructurados: Descarga de Edvoice, Ingreso de Código de Familia, Activación de SAI Moodle y Participación en Asambleas.
6. **Cronograma del Año Escolar (`.padres-terms-grid`)**:
   - Desglose por períodos I, II y III con fechas de exámenes, ferias y actos de graduación.
7. **Acordeón Accesible de Preguntas Frecuentes (`.padres-faq-accordion`)**:
   - Componentes nativos `<details>` y `<summary>` con respuestas directas a inasistencias, pagos bancarios, recuperación de contraseñas y horarios de atención.
8. **Banner Final de Soporte y Atención**:
   - Canales directos: PBX 391-5811, WhatsApp de acudientes y ubicación de ventanilla.
9. **Eliminación Total de Fotos Duplicadas**:
   - `portal-padres.html` quedó con 0 imágenes repetidas. Eliminadas de esta página las duplicaciones de `admision.webp` y `client-atention.webp`.
10. **Verificación y Sincronización**:
    - `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.
    - `node tools/sync-wp-css.mjs`: Estilos sincronizados en `wordpress-theme/style.css`.
    - `powershell tools/build-wp-pages.ps1`: Plantilla `page-portal-padres.php` de WordPress actualizada.

---

## Sesión #42 — Rediseño Integral de Contacto y Atención: Centro de Orientación y Visitas (2026-10-13)

### Objetivos y Transformación de la Página
Se transformó por completo `contacto.html` (completando las 8 páginas observadas del sitio), eliminando las tarjetas navy genéricas intermedias, el carrusel inferior repetitivo y las fotos duplicadas con otras secciones.

### Mejoras Realizadas
1. **Hero de Bienvenida al Campus**:
   - Fotografía real de fachada y entrada (`assets/fotos/exterior/IMG_9372.webp`, 6000x4000, 100% no utilizada previamente en el sitio) con overlay azul corporativo.
   - Titular: *«Estamos aquí para orientar a tu familia»*.
   - Badges de sede física, horario y PBX directo.
2. **Canales Directos Optimizados (`.contact-direct`)**:
   - Tarjetas interactivas para Secretaría & PBX (`391-5811`), WhatsApp Oficial (`6744-1351`) y Correo Institucional (`info@buenpastor-vda.net`).
3. **Formulario Accesible de Consulta y Visita Guiada (`.contacto-form-card`)**:
   - Formulario estructurado para acudientes con selección de nivel formativo, motivo de consulta (recorrido, costos, secretaría) y nota de privacidad conforme a la Ley 81.
4. **Hub de Información Operativa de la Sede (`.contacto-side-info`)**:
   - Desglose detallado de horarios (año escolar y verano), guía de transporte y accesibilidad (Metro Línea 2 Estación 24 de Diciembre, Metrobús, vehículo particular y estacionamiento) y normas de ingreso al plantel.
5. **Acordeón Accesible de Preguntas Frecuentes (`.contacto-faq-accordion`)**:
   - Respuestas nativas `<details>/<summary>` sobre coordinación de visitas guiadas, áreas a conocer en el recorrido, traslados escolares y consulta de expedientes.
6. **Mapa Oficial con Coordenadas Exactas (`#mapa-ubicacion`)**:
   - Iframe interactivo centrado en `9.106901321318759,-79.36663973009655` con botones de salto directo a Google Maps y navegación satelital con Waze.
7. **Erradicación de Duplicados**:
   - Se eliminaron las fotos repetidas de `client-atention.webp` y `campus-exterior.webp` de esta página, dejándolas en uso único.
8. **Verificación y Sincronización Total**:
   - `node tools/verify-integrity.mjs`: **0 enlaces rotos** y **0 recursos multimedia faltantes**.
   - `node tools/sync-wp-css.mjs`: Estilos sincronizados en `wordpress-theme/style.css`.
   - `powershell tools/build-wp-pages.ps1`: Plantilla `page-contacto.php` de WordPress actualizada.

### Ajuste de Detalle — Actualización Visual en Quiénes Somos
- Se sustituyó la fotografía folclórica (`culture.webp`) en el bloque manifiesto de [quienes-somos.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/quienes-somos.html) por la imagen institucional de estudiantes en uniforme con diploma y reconocimientos académicos y de carácter (`assets/fotos/institucional/recognition.webp`), alineándose perfectamente con el titular *«Educamos la mente, el corazón y el carácter»*.
- Sincronizadas las plantillas HTML y WordPress con 0 errores de integridad.

### Corrección de Error — Renderizado de Cabecera y Pie en Páginas Rediseñadas
- Se identificó y corrigió un error de escape de cadenas en `tools/generate-pages.mjs`, donde `\${visualHeader}` y `\${richFooter}` estaban escapados con barra invertida (`\`), provocando que se imprimiera el texto literal `${visualHeader}` y `${richFooter}` en lugar de renderizar la barra de navegación institucional y el pie de página.
- Se desescaparon todas las expresiones a `${visualHeader}` y `${richFooter}` y se regeneraron las 18 páginas HTML y las 17 plantillas PHP de WordPress.
- Verificado con `node tools/verify-integrity.mjs`: cabecera superior y pie de página visibles y funcionales al 100% en todo el sitio.
















