import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const templatesDir = join(root, 'tools', 'templates');

// 1. Definición de los 5 Pilares y Enlaces de Navegación
const groups = [
  [
    '01 NUESTRA ESCUELA',
    [
      ['¿Quiénes somos?', 'quienes-somos.html'],
      ['Propósito BPVDA', 'filosofia.html'],
      ['Instalaciones', 'instalaciones.html'],
      ['Plantel docente', 'plantel.html']
    ]
  ],
  [
    '02 ENFOQUE EDUCATIVO',
    [
      ['SAI BPVDA', 'sai.html'],
      ['Vida estudiantil', 'vida-estudiantil.html'],
      ['Ecosistema digital', 'ecosistema-digital.html']
    ]
  ],
  [
    '03 FAMILIA Y COMUNIDAD',
    [
      ['Admisiones y matrícula', 'admisiones.html'],
      ['Portal de padres', 'portal-padres.html'],
      ['Contacto y atención', 'contacto.html']
    ]
  ],
  [
    '04 NIVELES ACADÉMICOS',
    [
      ['Prekínder', 'prekinder.html'],
      ['Kínder', 'kinder.html'],
      ['Primaria', 'primaria.html'],
      ['Secundaria', 'secundaria.html'],
      ['Bachilleres', 'bachilleres.html']
    ]
  ]
];

// 2. Construcción de Grupos de Menú
const menuGroupsHtml = groups
  .map(([title, links]) =>
    `<div class="menu-group">
      <span class="menu-group-title">${title}</span>
      <ul class="menu-list">` +
    links.map(([name, url]) => `<li><a href="${url}" class="menu-link"><span>${name}</span> <i class="menu-chevron">↗</i></a></li>`).join('') +
    `</ul>
    </div>`
  )
  .join('');

// 3. Cargar y compilar Plantillas
const headerTemplate = readFileSync(join(templatesDir, 'header.html'), 'utf8');
const visualHeader = headerTemplate.replace('{{MENU_GROUPS}}', menuGroupsHtml).trim();
const richFooter = readFileSync(join(templatesDir, 'footer.html'), 'utf8').trim();

// 4. Catálogo de Datos para Páginas Interiores (heroImage, splitImage)
const data = [
  ['quienes-somos.html', '¿Quiénes somos?', '01 NUESTRA ESCUELA', 'Una comunidad que educa con <mark>propósito</mark>.', 'assets/fotos/institucional/community.webp', 'assets/fotos/institucional/culture-main.webp', 'Conoce la historia, el compromiso y la comunidad que hacen posible BPVDA.'],
  ['filosofia.html', 'Propósito BPVDA', '01 NUESTRA ESCUELA', 'Valores que orientan cada <mark>decisión</mark>.', 'assets/fotos/institucional/mission.webp', 'assets/fotos/institucional/mission.webp', 'Misión, visión y principios cristianos que sostienen nuestra propuesta educativa.'],
  ['instalaciones.html', 'Instalaciones', '01 NUESTRA ESCUELA', 'Espacios para aprender, convivir y <mark>crecer</mark>.', 'assets/fotos/exterior/IMG_9374.webp', 'assets/fotos/exterior/campus-restzone.webp', 'Conoce los espacios que reciben diariamente a nuestra comunidad escolar.'],
  ['plantel.html', 'Plantel docente', '01 NUESTRA ESCUELA', 'Educadores que inspiran y <mark>guían</mark>.', 'assets/fotos/primaria-preescolar/IMG_9484.webp', 'assets/fotos/primaria-preescolar/IMG_9489.webp', 'Un equipo comprometido con acompañar los procesos y talentos de cada estudiante.'],
  ['sai.html', 'SAI BPVDA', '02 ENFOQUE EDUCATIVO', 'Todo el aprendizaje, en un mismo <mark>lugar</mark>.', 'assets/new/alliances/SAI logo oficial.jpg', 'assets/new/sai/Captura de pantalla 2026-09-12 135920.png', 'SAI centraliza las herramientas, actividades y comunicaciones importantes para nuestra comunidad.'],
  ['vida-estudiantil.html', 'Vida estudiantil', '02 ENFOQUE EDUCATIVO', 'Talentos que se convierten en <mark>experiencias</mark>.', 'assets/fotos/secundaria/IMG_9585.webp', 'assets/fotos/secundaria/IMG_9575.webp', 'Proyectos, actividades, cultura, deporte y logros que enriquecen la vida escolar.'],
  ['ecosistema-digital.html', 'Ecosistema digital', '02 ENFOQUE EDUCATIVO', 'Herramientas para aprender sin <mark>límites</mark>.', 'assets/fotos/secundaria/IMG_9514.webp', 'assets/fotos/secundaria/IMG_9511.webp', 'Una red de plataformas que acompaña el aprendizaje dentro y fuera del aula.'],
  ['portal-padres.html', 'Portal de padres', '03 FAMILIA Y COMUNIDAD', 'Información escolar al alcance de tu <mark>familia</mark>.', 'assets/new/alliances/Edvoice1.webp', 'assets/fotos/institucional/client-atention.webp', 'Accesos directos a las plataformas donde las familias consultan información académica.'],
  ['contacto.html', 'Contacto y atención', '03 FAMILIA Y COMUNIDAD', 'Estamos aquí para <mark>orientarte</mark>.', 'assets/fotos/exterior/campus-exterior.webp', 'assets/fotos/institucional/client-atention.webp', 'Canales directos para conversar, visitar y conocer la comunidad BPVDA.'],
  ['secundaria.html', 'Secundaria y Bachilleres', '05 SECUNDARIA Y BACHILLERES', 'Preparación para los retos que <mark>vienen</mark>.', 'assets/fotos/secundaria/IMG_9504.webp', 'assets/fotos/secundaria/IMG_9510.webp', 'Secundaria y bachillerato para impulsar habilidades, propósito y futuro.']
];

const visualSets = {
  '¿Quiénes somos?': [
    'assets/fotos/institucional/learn-mind.webp',
    'assets/fotos/exterior/IMG_9379.webp',
    'assets/fotos/institucional/mission.webp',
    'assets/fotos/exterior/IMG_9372.webp',
    'assets/fotos/secundaria/IMG_9509.webp',
    'assets/fotos/primaria-preescolar/IMG_9480.webp'
  ],
  'Propósito BPVDA': [
    'assets/fotos/institucional/mission.webp',
    'assets/fotos/institucional/culture.webp',
    'assets/fotos/institucional/learn-mind.webp',
    'assets/fotos/institucional/achievement.webp',
    'assets/fotos/institucional/recognition.webp',
    'assets/fotos/institucional/community.webp'
  ],
  'Instalaciones': [
    'assets/fotos/exterior/campus-main.webp',
    'assets/fotos/exterior/IMG_9370.webp',
    'assets/fotos/exterior/IMG_9377.webp',
    'assets/fotos/exterior/IMG_9380.webp',
    'assets/fotos/exterior/IMG_9386.webp',
    'assets/fotos/exterior/IMG_9402.webp'
  ],
  'Plantel docente': [
    'assets/fotos/secundaria/IMG_9515.webp',
    'assets/fotos/primaria-preescolar/IMG_9462.webp',
    'assets/fotos/secundaria/IMG_9530.webp',
    'assets/fotos/primaria-preescolar/IMG_9430.webp',
    'assets/fotos/secundaria/IMG_9570.webp',
    'assets/fotos/primaria-preescolar/IMG_9471.webp'
  ],
  'SAI BPVDA': [
    'assets/new/sai/Captura de pantalla 2026-09-12 135528.png',
    'assets/new/sai/Captura de pantalla 2026-09-12 135545.png',
    'assets/new/alliances/Moodle1.png',
    'assets/new/alliances/Progrentis1.png',
    'assets/new/alliances/Matific1.png',
    'assets/new/alliances/Canva1.webp'
  ],
  'Vida estudiantil': [
    'assets/fotos/secundaria/IMG_9582.webp',
    'assets/fotos/secundaria/IMG_9586.webp',
    'assets/fotos/secundaria/IMG_9580.webp',
    'assets/fotos/secundaria/IMG_9574.webp',
    'assets/fotos/secundaria/IMG_9590.webp',
    'assets/fotos/secundaria/IMG_9593.webp'
  ],
  'Ecosistema digital': [
    'assets/fotos/secundaria/IMG_9506.webp',
    'assets/fotos/secundaria/IMG_9517.webp',
    'assets/fotos/secundaria/IMG_9522.webp',
    'assets/fotos/secundaria/IMG_9533.webp',
    'assets/fotos/secundaria/IMG_9549.webp',
    'assets/fotos/secundaria/IMG_9562.webp'
  ],
  'Admisiones y matrícula': [
    'assets/fotos/institucional/admision-main.webp',
    'assets/fotos/exterior/campus-entry.webp',
    'assets/fotos/institucional/client-atention.webp',
    'assets/fotos/institucional/admision.webp',
    'assets/fotos/exterior/campus-exterior.webp',
    'assets/fotos/institucional/community.webp'
  ],
  'Portal de padres': [
    'assets/new/sai/Captura de pantalla 2026-09-12 135920.png',
    'assets/fotos/institucional/admision.webp',
    'assets/new/alliances/Matific1.png',
    'assets/new/alliances/Progrentis1.png',
    'assets/new/alliances/Moodle1.png',
    'assets/new/alliances/Canva1.webp'
  ],
  'Contacto y atención': [
    'assets/fotos/exterior/IMG_9378.webp',
    'assets/fotos/exterior/IMG_9373.webp',
    'assets/fotos/exterior/IMG_9381.webp',
    'assets/fotos/exterior/IMG_9375.webp',
    'assets/fotos/exterior/IMG_9388.webp',
    'assets/fotos/exterior/IMG_9390.webp'
  ],
  'Secundaria y Bachilleres': [
    'assets/fotos/secundaria/robotics-1.webp',
    'assets/fotos/secundaria/IMG_9518.webp',
    'assets/fotos/secundaria/IMG_9528.webp',
    'assets/fotos/secundaria/IMG_9550.webp',
    'assets/fotos/secundaria/science-team.webp',
    'assets/fotos/secundaria/IMG_9565.webp'
  ]
};

const cards = (title) => {
  const images = visualSets[title] || visualSets['¿Quiénes somos?'];
  return `
<section class="content-cards section-pad">
  <article><h3>Una propuesta con propósito</h3><p>Aquí se incorporará el contenido institucional final de ${title}.</p></article>
  <article><h3>Experiencias que acompañan</h3><p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p></article>
  <article><h3>Una comunidad cercana</h3><p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p></article>
</section>
<section class="carousel-v3">
  <div class="carousel-v3__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza para explorar la riqueza visual de nuestra comunidad educativa.</p>
  </div>
  <div class="carousel-v3__track-container">
    <div class="carousel-v3__track">
      ${images.map((img, i) => {
        const captions = [
          "Un entorno diseñado para descubrir.",
          "Cada paso es un logro alcanzado.",
          "Una comunidad que te respalda.",
          "Innovación presente en cada aula.",
          "Formando a los líderes del mañana.",
          "Creciendo juntos cada día."
        ];
        return `
        <article class="carousel-v3__card">
          <img src="${img}" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>${captions[i % captions.length]}</h3>
          </div>
        </article>
        `;
      }).join('')}
    </div>
  </div>
</section>`;
};

const special = (file) => {
  if (file === 'plantel.html') {
    return `<section class="teacher-section section-pad">
  <h2>Personas que hacen del aprendizaje una experiencia cercana.</h2>
  <div class="teacher-grid">
    ${['1.png', '2.png', '3.png', '4.png'].map(x => `<article><img src="assets/new/teachers/${x}" alt="Retrato de docente BPVDA"><div><span>DOCENTE BPVDA</span><h3>Nombre del educador</h3><p>Área, trayectoria y cita inspiradora por confirmar.</p></div></article>`).join('')}
  </div>
</section>`;
  }
  if (file === 'sai.html' || file === 'portal-padres.html') {
    return `<section class="platform-links section-pad">
  <a href="https://sai.bpvda.edu.pa/login/index.php?loginredirect=1" target="_blank" rel="noopener">Ingresar a SAI <b>↗</b></a>
  <a href="https://edvoice.additioapp.com/access/login" target="_blank" rel="noopener">Ingresar a Edvoice <b>↗</b></a>
</section>`;
  }
  if (file === 'ecosistema-digital.html') {
    return `<section class="alliance-marquee">
  <div>
    ${['SAI logo oficial.jpg', 'Edvoice1.webp', 'Progrentis1.png', 'Matific1.png', 'Kingscorner.png', 'Canva1.webp', 'Academia 24 - 1.png', 'kahoot1.webp', 'Moodle1.png'].map(x => `<img src="assets/new/alliances/${x}" alt="Plataforma educativa">`).join('')}
  </div>
</section>`;
  }
  if (file === 'contacto.html') {
    return `<section class="contact-direct section-pad">
  <a href="tel:+5073915811" class="contact-direct__card">
    <div class="contact-direct__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    </div>
    <div class="contact-direct__info">
      <span class="contact-direct__tag">SECRETARÍA</span>
      <strong class="contact-direct__value">391-5811</strong>
      <span class="contact-direct__sub">Atención telefónica regular</span>
    </div>
    <span class="contact-direct__arrow" aria-hidden="true">↗</span>
  </a>
  <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="contact-direct__card contact-direct__card--wa">
    <div class="contact-direct__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    </div>
    <div class="contact-direct__info">
      <span class="contact-direct__tag">WHATSAPP</span>
      <strong class="contact-direct__value">6744-1351</strong>
      <span class="contact-direct__sub">Consultas directas</span>
    </div>
    <span class="contact-direct__arrow" aria-hidden="true">↗</span>
  </a>
  <a href="mailto:info@buenpastor-vda.net" class="contact-direct__card">
    <div class="contact-direct__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    </div>
    <div class="contact-direct__info">
      <span class="contact-direct__tag">CORREO</span>
      <strong class="contact-direct__value">info@buenpastor-vda.net</strong>
      <span class="contact-direct__sub">Trámites y consultas</span>
    </div>
    <span class="contact-direct__arrow" aria-hidden="true">↗</span>
  </a>
</section>
<section class="map-section">
  <iframe title="Ubicación exacta de Colegio Buen Pastor Voz de Alerta" src="https://www.google.com/maps?q=9.106901321318759,-79.36663973009655&amp;hl=es&amp;z=17&amp;output=embed" loading="lazy"></iframe>
</section>`;
  }
  return '';
};

// 5. Generación de Páginas Interiores Estándar
for (const [file, title, eyebrow, hero, heroImage, splitImage, intro] of data.filter(entry => entry[0] !== 'filosofia.html' && entry[0] !== 'secundaria.html' && entry[0] !== 'quienes-somos.html' && entry[0] !== 'instalaciones.html' && entry[0] !== 'plantel.html' && entry[0] !== 'sai.html' && entry[0] !== 'vida-estudiantil.html' && entry[0] !== 'ecosistema-digital.html' && entry[0] !== 'portal-padres.html' && entry[0] !== 'contacto.html')) {
  const body = `
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="${splitImage}" alt="">
      <div>
        <span class="section-number">${eyebrow}</span>
        <h2>${title}</h2>
        <p>${intro} En esta sección se añadirá la información institucional definitiva cuando sea aprobada.</p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: TARJETAS FORMATIVAS Y CARRUSEL EDITORIAL            -->
    <!-- ============================================================ -->
    ${cards(title)}

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    ${special(file)}`;

  const pageHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla y navegación por teclado -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal de 5 Pilares -->
  ${visualHeader}

  <!-- Contenedor Principal de la Página -->
  <main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="${heroImage}" alt="">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>${eyebrow}</span>
        <h1>${hero}</h1>
        <p>${intro}</p>
      </div>
    </section>

    ${body}
  </main>

  <!-- Pie de Página Institucional Enriquecido en 3 Columnas -->
  ${richFooter}

  <!-- Botón Flotante para Volver al Inicio de la Página -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

  writeFileSync(join(root, file), pageHtml);
}

// 6. Generación de Página Filosofía / Propósito
const filosofiaHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Propósito BPVDA | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero con Fotografía Institucional de Propósito Educativo -->
    <section class="purpose-fade">
      <div class="purpose-fade__images">
        <img class="is-active" src="assets/fotos/institucional/community.webp" alt="Comunidad educativa del Colegio Buen Pastor Voz de Alerta">
      </div>
      <div class="purpose-fade__content">
        <span>01 NUESTRA ESCUELA</span>
        <h1>Una educación con <mark>propósito</mark>.</h1>
        <p>Formamos personas con valores, conocimiento y una mirada generosa hacia los demás.</p>
      </div>
    </section>

    <!-- Declaración Introductoria de Propósito -->
    <section class="purpose-intro">
      <span>PROPÓSITO BPVDA</span>
      <p>Creemos en una educación integral que impulsa el desarrollo académico, personal y espiritual de niños y jóvenes, fundamentada en la fe, la excelencia y el servicio.</p>
    </section>

    <!-- Pilares Formativos: 01 Valores, 02 Misión y 03 Visión -->
    <section class="purpose-pillars">
      <article class="purpose-pillar purpose-pillar--values">
        <img src="assets/new/purpose/IMG_1715.JPG" alt="Estudiantes BPVDA en formación de valores">
        <div>
          <span>01</span>
          <h2>Valores</h2>
          <p>La fe, el respeto, la responsabilidad y el amor al prójimo orientan la manera en que convivimos y aprendemos.</p>
        </div>
      </article>
      <article class="purpose-pillar purpose-pillar--mission">
        <img src="assets/new/purpose/IMG_1627.JPG" alt="Estudiante BPVDA">
        <div>
          <span>02</span>
          <h2>Misión</h2>
          <p>Brindar una formación de excelencia que fortalezca las capacidades de cada estudiante y lo prepare para servir con propósito.</p>
        </div>
      </article>
      <article class="purpose-pillar purpose-pillar--vision">
        <img src="assets/new/purpose/IMG_1991.JPG" alt="Estudiante BPVDA con uniforme">
        <div>
          <span>03</span>
          <h2>Visión</h2>
          <p>Ser una comunidad educativa que inspira a sus estudiantes a aprender, liderar y construir un futuro mejor.</p>
        </div>
      </article>
    </section>
  </main>

  <!-- Pie de Página Institucional Enriquecido -->
  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'filosofia.html'), filosofiaHtml);

// 6a. Generación de Página ¿Quiénes somos? (Arquitectura Institucional de Prestigio)
const quienesSomosHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>¿Quiénes somos? | Colegio Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  ${visualHeader}

  <main id="contenido">
    <!-- Hero Institucional de Prestigio -->
    <section class="qs-hero">
      <img src="assets/fotos/institucional/admision.webp" alt="Comunidad educativa del Colegio Buen Pastor Voz de Alerta" class="qs-hero__bg">
      <div class="qs-hero__overlay"></div>
      <div class="qs-hero__container">
        <span class="qs-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          01 NUESTRA ESCUELA · IDENTIDAD Y TRAYECTORIA
        </span>
        <h1>Una comunidad que educa con <mark>propósito</mark>, fe y excelencia.</h1>
        <p class="qs-hero__lead">Más de dos décadas formando con amor y rigor pedagógico en 24 de Diciembre, guiando a cada estudiante para descubrir sus dones, cultivar carácter cristiano y alcanzar su máximo potencial académico.</p>
        <div class="qs-hero__actions">
          <a href="#manifiesto" class="hero-btn-primary">Conoce nuestra historia <b>↓</b></a>
          <a href="admisiones.html" class="hero-btn-outline">Proceso de admisión <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas e Impacto Formativo -->
    <section class="qs-facts-strip">
      <div class="qs-facts-grid">
        <div class="qs-fact-card">
          <span class="qs-fact-num">+20<span>.</span></span>
          <span class="qs-fact-label">Años de trayectoria formando en Panamá Este</span>
        </div>
        <div class="qs-fact-card">
          <span class="qs-fact-num">100<span>%</span></span>
          <span class="qs-fact-label">Educación fundamentada en valores bíblicos</span>
        </div>
        <div class="qs-fact-card">
          <span class="qs-fact-num">14</span>
          <span class="qs-fact-label">Grados continuos: Maternal, Primaria y Secundaria</span>
        </div>
        <div class="qs-fact-card">
          <span class="qs-fact-num">3</span>
          <span class="qs-fact-label">Bachilleratos oficiales: Ciencias, Informática y Comercio</span>
        </div>
      </div>
    </section>

    <!-- Bloque Manifiesto: Quiénes Somos en Esencia -->
    <section class="qs-manifesto" id="manifiesto">
      <div class="qs-manifesto__inner">
        <div class="qs-manifesto__media">
          <img src="assets/fotos/institucional/recognition.webp" alt="Estudiantes del Colegio Buen Pastor formados en valores y excelencia" class="qs-manifesto__img" loading="lazy">
          <div class="qs-manifesto__badge">
            <strong>Formación para la vida</strong>
            <span>No solo para el aula</span>
          </div>
        </div>
        <div class="qs-manifesto__content">
          <span class="qs-section-tag">NUESTRA ESENCIA INSTITUCIONAL</span>
          <h2>Educamos la mente, el corazón y el carácter.</h2>
          <p>El <strong>Colegio Buen Pastor Voz de Alerta (BPVDA)</strong> es una institución educativa comprometida con la formación integral de niños y jóvenes en el corregimiento de 24 de Diciembre, Ciudad de Panamá. Nuestro modelo une la solidez académica con principios cristianos inquebrantables, preparando a cada generación para afrontar los desafíos universitarios y sociales con solvencia moral y profesional.</p>
          <p>Creemos firmemente en una educación personalizada, donde cada estudiante es conocido por su nombre, acompañado por docentes con vocación pastoral y respaldado por un entorno de sana convivencia y disciplina con propósito.</p>
          
          <div class="qs-bible-verse">
            <blockquote>«Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.»</blockquote>
            <cite>Proverbios 22:6 · Principio Rector BPVDA</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Tríada de Pilares Fundacionales -->
    <section class="qs-pillars" id="pilares">
      <div class="qs-pillars__header">
        <span class="qs-section-tag">PILARES FORMATIVOS</span>
        <h2>Tres dimensiones que definen nuestra identidad</h2>
        <p>Una estructura formativa coherente donde lo espiritual, lo académico y lo familiar se complementan para garantizar el desarrollo pleno de nuestros alumnos.</p>
      </div>

      <div class="qs-pillars-grid">
        <!-- Pilar 1 -->
        <article class="qs-pillar-card qs-pillar-card--1">
          <div class="qs-pillar-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/><path d="M12 7v5l3 3"/></svg>
          </div>
          <span class="qs-pillar-tag">01 · ESPIRITUALIDAD Y CARÁCTER</span>
          <h3>Fundamento Cristocéntrico</h3>
          <p>Formamos la conciencia ética y moral a través de la vivencia diaria de valores bíblicos: respeto, honradez, amor al prójimo y devocionales que fortalecen la fe de cada hogar.</p>
        </article>

        <!-- Pilar 2 -->
        <article class="qs-pillar-card qs-pillar-card--2">
          <div class="qs-pillar-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <span class="qs-pillar-tag">02 · RIGOR PEDAGÓGICO</span>
          <h3>Excelencia Académica y STEM</h3>
          <p>Un currículo riguroso y actualizado que integra plataformas educativas interactivas (SAI, Progrentis, Matific, Edvoice), robótica educativa y reforzamiento científico continuo.</p>
        </article>

        <!-- Pilar 3 -->
        <article class="qs-pillar-card qs-pillar-card--3">
          <div class="qs-pillar-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span class="qs-pillar-tag">03 · COMUNIDAD Y HOGAR</span>
          <h3>Alianza Sagrada con la Familia</h3>
          <p>Entendemos que la educación florece cuando el colegio y la familia caminan en mutuo acuerdo. Mantenemos canales directos de orientación, escuelas para padres y puertas siempre abiertas.</p>
        </article>
      </div>
    </section>

    <!-- Mosaico Bento: Vida Escolar Auténtica -->
    <section class="qs-bento-section">
      <div class="qs-bento-header">
        <span class="qs-section-tag">VIDA ESCOLAR EN ACCIÓN</span>
        <h2>Nuestra comunidad a través de los años</h2>
        <p>Momentos reales capturados en nuestro campus: ciencia, devoción, esfuerzo académico y compañerismo fraterno.</p>
      </div>

      <div class="qs-bento-grid">
        <!-- Item 1 (7 cols) -->
        <article class="qs-bento-item qs-bento-item--1">
          <img src="assets/fotos/institucional/achievement.webp" alt="Estudiantes BPVDA recibiendo reconocimiento académico" loading="lazy">
          <div class="qs-bento-overlay">
            <span class="qs-bento-tag">MÉRITO Y SUPERACIÓN</span>
            <h3>Reconocimiento a la constancia académica</h3>
            <p>Estimulamos el esfuerzo de cada alumno premiando el desempeño, la conducta intachable y el espíritu de liderazgo.</p>
          </div>
        </article>

        <!-- Item 2 (5 cols) -->
        <article class="qs-bento-item qs-bento-item--2">
          <img src="assets/fotos/institucional/learn-mind.webp" alt="Estudiante en aula de clase concentrado en su aprendizaje" loading="lazy">
          <div class="qs-bento-overlay">
            <span class="qs-bento-tag">PENSAMIENTO CRÍTICO</span>
            <h3>Aulas activas e investigación</h3>
            <p>Entornos pedagógicos diseñados para fomentar la indagación, la lectura comprensiva y la resolución analítica.</p>
          </div>
        </article>

        <!-- Item 3 (5 cols) -->
        <article class="qs-bento-item qs-bento-item--3">
          <img src="assets/fotos/institucional/mission.webp" alt="Comunidad de estudiantes compartiendo en ambiente escolar cristiano" loading="lazy">
          <div class="qs-bento-overlay">
            <span class="qs-bento-tag">FE Y CONVIVENCIA</span>
            <h3>Comunidad unida por el amor fraternal</h3>
            <p>Espacios de devoción y reflexión donde se consolidan amistades sanas que perduran por toda la vida.</p>
          </div>
        </article>

        <!-- Item 4 (7 cols) -->
        <article class="qs-bento-item qs-bento-item--4">
          <img src="assets/fotos/institucional/culture-main.webp" alt="Estudiantes en celebración cívica e identidad panameña" loading="lazy">
          <div class="qs-bento-overlay">
            <span class="qs-bento-tag">IDENTIDAD Y CULTURA</span>
            <h3>Tradición cívica y amor patrio</h3>
            <p>Promovemos con orgullo el folclore, la historia nacional y los deberes cívicos que distinguen al ciudadano ejemplar.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre: Llamado a la Acción Institucional -->
    <section class="qs-cta">
      <div class="qs-cta__inner">
        <h2>Forma parte de la familia del Buen Pastor</h2>
        <p>Te invitamos a visitar nuestras instalaciones en 24 de Diciembre, dialogar con nuestro equipo directivo y descubrir de cerca una propuesta educativa pensada para el futuro de tus hijos.</p>
        <div class="qs-cta__actions">
          <a href="admisiones.html" class="hero-btn-primary">Conocer Admisiones <b>↗</b></a>
          <a href="contacto.html" class="hero-btn-outline">Agendar una Visita al Campus <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'quienes-somos.html'), quienesSomosHtml);

// 6c. Generación de Página Instalaciones (Guía de Espacios por Zonas Clave y Mosaico Arquitectónico)
const instalacionesHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Instalaciones y Campus | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Panorámica del Campus BPVDA -->
    <section class="inst-hero">
      <img src="assets/fotos/exterior/IMG_9387.webp" alt="Campus y patio central del Colegio Buen Pastor Voz de Alerta bajo sombra natural" class="inst-hero__bg" loading="eager">
      <div class="inst-hero__overlay"></div>
      <div class="inst-hero__container">
        <span class="inst-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          01 NUESTRA ESCUELA · INSTALACIONES Y CAMPUS
        </span>
        <h1>Espacios seguros pensados para <mark>aprender y convivir</mark>.</h1>
        <p class="inst-hero__lead">Un campus integral en 24 de Diciembre diseñado para el confort, la formación académica sólida, la innovación tecnológica y el sano esparcimiento cristiano de cada uno de nuestros estudiantes.</p>
        <div class="inst-hero__actions">
          <a href="#zonas" class="hero-btn-primary">Explorar Zonas del Campus <b>↓</b></a>
          <a href="contacto.html" class="hero-btn-outline">Agendar una Visita Presencial <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Capacidades del Campus -->
    <section class="inst-facts-strip">
      <div class="inst-facts-grid">
        <div class="inst-fact-card">
          <span class="inst-fact-num">100<span>%</span></span>
          <span class="inst-fact-label">Aulas climatizadas y confortables</span>
        </div>
        <div class="inst-fact-card">
          <span class="inst-fact-num">3<span> Pabellones</span></span>
          <span class="inst-fact-label">Preescolar, Primaria y Secundaria delimitados</span>
        </div>
        <div class="inst-fact-card">
          <span class="inst-fact-num">1<span> Lab</span></span>
          <span class="inst-fact-label">Informática, STEM y Robótica educativa</span>
        </div>
        <div class="inst-fact-card">
          <span class="inst-fact-num">2<span> Áreas</span></span>
          <span class="inst-fact-label">Cancha multideportiva y parque infantil VDA</span>
        </div>
      </div>
    </section>

    <!-- Guía de Espacios por Zonas Clave -->
    <section class="inst-zones-section" id="zonas">
      <div class="inst-zones-header">
        <span class="inst-hero__eyebrow" style="color: var(--orange);">INFRAESTRUCTURA EDUCATIVA</span>
        <h2>Áreas diseñadas para cada etapa formativa</h2>
        <p>Cada rincón de nuestras instalaciones responde a estándares de bienestar pedagógico, ventilación, seguridad perimetral y tecnología aplicada al aula.</p>
      </div>

      <div class="inst-zones-grid">
        <!-- Zona 1: Pabellones de Clases -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="assets/fotos/exterior/IMG_9383.webp" alt="Pabellón de aulas y corredores del Colegio Buen Pastor" loading="lazy">
            <span class="inst-zone-badge">Academia</span>
          </div>
          <div class="inst-zone-body">
            <h3>Aulas Modernas y Entornos de Aprendizaje</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Aulas amplias con climatización continua y excelente iluminación.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Mobiliario ergonómico adaptado a las edades de cada nivel.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Corredores techados, rampas y señalización de evacuación integral.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Zona 2: Laboratorio de Tecnología y Ciencias -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="assets/fotos/secundaria/IMG_9531.webp" alt="Laboratorio de cómputo y robótica con estudiantes" loading="lazy">
            <span class="inst-zone-badge">Innovación</span>
          </div>
          <div class="inst-zone-body">
            <h3>Laboratorio de Cómputo, Robótica y Ciencias</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Estaciones informáticas con acceso al ecosistema digital institucional.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Equipamiento interactivo para programación, robótica y ciencia práctica.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Soporte integral a los bachilleratos en Ciencias e Informática.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Zona 3: Cancha Multideportiva -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="assets/fotos/exterior/IMG_9391.webp" alt="Cancha polideportiva techada para baloncesto y fútbol" loading="lazy">
            <span class="inst-zone-badge">Deporte</span>
          </div>
          <div class="inst-zone-body">
            <h3>Cancha Multideportiva y Espacios Recreativos</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Área protegida y ventilada para educación física y entrenamiento.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Cancha multiuso acondicionada para baloncesto, voleibol y futsal.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Escenario central para torneos intercolegiales y actos cívicos.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Zona 4: VDA Park Infantil -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="assets/fotos/exterior/IMG_9394.webp" alt="Parque infantil VDA Park con juegos modulares protegidos" loading="lazy">
            <span class="inst-zone-badge">Recreación</span>
          </div>
          <div class="inst-zone-body">
            <h3>VDA Park: Esparcimiento y Juego Infantil</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Parque infantil exclusivo para Preescolar y primeros años de Primaria.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Juegos modulares de alta durabilidad bajo supervisión constante.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Piso protector para el libre juego motriz y la convivencia sana.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Mosaico Bento Arquitectónico -->
    <section class="inst-bento-section">
      <div class="inst-bento-header">
        <span class="inst-hero__eyebrow" style="color: var(--turquoise);">RECORRIDO VISUAL</span>
        <h2>Detalles arquitectónicos de nuestro campus</h2>
        <p>Una mirada fotográfica a los ambientes donde cada día florece el compromiso educativo del Buen Pastor.</p>
      </div>

      <div class="inst-bento-grid">
        <!-- Item 1 (7 cols) -->
        <article class="inst-bento-item inst-bento-item--1">
          <img src="assets/fotos/exterior/IMG_9408.webp" alt="Pabellón de preescolar y áreas de primera infancia" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">PREESCOLAR SEGURO</span>
            <h3>Pabellón exclusivo de Primera Infancia</h3>
            <p>Instalaciones adaptadas con accesos controlados y zonas lúdicas especializadas para los más pequeños.</p>
          </div>
        </article>

        <!-- Item 2 (5 cols) -->
        <article class="inst-bento-item inst-bento-item--2">
          <img src="assets/fotos/exterior/IMG_9371.webp" alt="Acceso principal y punto de control del colegio" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">ACCESIBILIDAD Y CONTROL</span>
            <h3>Entrada principal y garita de seguridad</h3>
            <p>Seguridad perimetral y protocolos rigurosos de acceso para la tranquilidad de las familias.</p>
          </div>
        </article>

        <!-- Item 3 (5 cols) -->
        <article class="inst-bento-item inst-bento-item--3">
          <img src="assets/fotos/exterior/campus-restzone.webp" alt="Corredores techados y áreas de descanso estudiantil" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">ESPACIOS COMUNES</span>
            <h3>Corredores techados y descanso</h3>
            <p>Zonas frescas y sombreadas que invitan a la sana convivencia y el compañerismo entre clases.</p>
          </div>
        </article>

        <!-- Item 4 (7 cols) -->
        <article class="inst-bento-item inst-bento-item--4">
          <img src="assets/fotos/exterior/IMG_9400.webp" alt="Módulos de recreación infantil en el patio escolar" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">RECREACIÓN ACTIVA</span>
            <h3>Módulos de juego y desarrollo motor</h3>
            <p>Estructuras diseñadas para la coordinación motriz, la socialización y el juego guiado en un entorno protegido.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre: Recorrido Presencial -->
    <section class="inst-cta">
      <div class="inst-cta__inner">
        <h2>Conoce nuestras instalaciones en persona</h2>
        <p>Te abrimos las puertas de nuestro campus en 24 de Diciembre para que recorras las aulas, conozcas las medidas de seguridad y experimentes el ambiente familiar donde tus hijos crecerán.</p>
        <div class="inst-cta__actions">
          <a href="contacto.html" class="hero-btn-primary">Agendar un Recorrido Guiado <b>↗</b></a>
          <a href="admisiones.html" class="hero-btn-outline">Proceso de Admisión <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'instalaciones.html'), instalacionesHtml);

// 6d. Generación de Página Plantel Docente (Enfoque Departamental y Mentoría por Ciclos)
const plantelHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Plantel Docente | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Plantel Docente BPVDA -->
    <section class="doc-hero">
      <img src="assets/fotos/primaria-preescolar/IMG_9490.webp" alt="Docente de aula interactuando activamente con sus estudiantes en el Colegio Buen Pastor" loading="eager">
      <div class="doc-hero__overlay"></div>
      <div class="doc-hero__container">
        <span class="doc-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          01 NUESTRA ESCUELA · PLANTEL DOCENTE
        </span>
        <h1>Educadores que inspiran con fe, ciencia y <mark>corazón</mark>.</h1>
        <p class="doc-hero__lead">Un cuerpo de maestros y mentores altamente capacitados, unidos por una auténtica vocación cristiana y dedicados a cultivar el potencial académico, moral y humano de cada estudiante en 24 de Diciembre.</p>
        <div class="doc-hero__actions">
          <a href="#ciclos" class="hero-btn-primary">Conocer Ciclos y Departamentos <b>↓</b></a>
          <a href="contacto.html" class="hero-btn-outline">Agendar Orientación Pedagógica <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas Docentes -->
    <section class="doc-facts-strip">
      <div class="doc-facts-grid">
        <div class="doc-fact-card">
          <span class="doc-fact-num">+40<span> Educadores</span></span>
          <span class="doc-fact-label">Comprometidos con la excelencia integral</span>
        </div>
        <div class="doc-fact-card">
          <span class="doc-fact-num">100<span>%</span></span>
          <span class="doc-fact-label">Docentes titulados y en formación continua</span>
        </div>
        <div class="doc-fact-card">
          <span class="doc-fact-num">1<span>:15</span></span>
          <span class="doc-fact-label">Ratio docente-alumno para guía personalizada</span>
        </div>
        <div class="doc-fact-card">
          <span class="doc-fact-num">14<span> Grados</span></span>
          <span class="doc-fact-label">Acompañamiento continuo de Maternal a 12°</span>
        </div>
      </div>
    </section>

    <!-- Manifiesto de Vocación y Mentoría Cristiana -->
    <section class="doc-manifesto">
      <div class="doc-manifesto__inner">
        <div class="doc-manifesto__media">
          <img src="assets/fotos/primaria-preescolar/IMG_9436.webp" alt="Maestra guiando con afecto y atención cercana a niños en aula" loading="lazy">
          <div class="doc-manifesto__badge">
            <strong>VOCACIÓN QUE TRANSFORMA</strong>
            El maestro del Buen Pastor enseña la mente, toca el corazón y siembra principios para toda la vida.
          </div>
        </div>
        <div class="doc-manifesto__content">
          <span class="doc-hero__eyebrow" style="color: var(--orange);">FILOSOFÍA DEL EDUCADOR</span>
          <h2>Más que impartir materias, formamos personas</h2>
          <p class="doc-manifesto__lead">En el Colegio Buen Pastor Voz de Alerta, cada educador asume su labor como un llamado sagrado de mentoría y servicio a las familias.</p>
          <p class="doc-manifesto__text">Nuestros docentes combinan el dominio didáctico y el rigor académico con una escucha activa y empática. Conocemos a cada estudiante por su nombre, detectamos sus talentos específicos y lo motivamos a superar retos académicos bajo un ambiente de disciplina con amor y respeto mutuo.</p>
          <div class="doc-manifesto__quote">
            <p>«El discípulo no es superior a su maestro; mas todo el que fuere perfeccionado, será como su maestro.»</p>
            <cite>San Lucas 6:40 · Principio Rector de Mentoría</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Ciclos Formativos y Equipos Docentes -->
    <section class="doc-cycles-section" id="ciclos">
      <div class="doc-cycles-header">
        <span class="doc-hero__eyebrow" style="color: var(--turquoise);">ESTRUCTURA PEDAGÓGICA</span>
        <h2>Equipos docentes especializados por etapa de vida</h2>
        <p>La pedagogía se adapta con precisión a la madurez cognitiva y socioemocional de cada grado, guiada por maestros especialistas en cada área.</p>
      </div>

      <div class="doc-cycles-grid">
        <!-- Ciclo 1: Educación Inicial -->
        <article class="doc-cycle-card">
          <div class="doc-cycle-media">
            <img src="assets/fotos/primaria-preescolar/IMG_9455.webp" alt="Aula de preescolar con actividades lúdicas y estimulación temprana" loading="lazy">
            <span class="doc-cycle-badge">Preescolar y Maternal</span>
          </div>
          <div class="doc-cycle-body">
            <h3>Educación Inicial: Afecto, Curiosidad y Estimulación</h3>
            <p class="doc-cycle-desc">Docentes especializadas en desarrollo infantil temprano que fomentan la seguridad emocional, la motricidad fina y la socialización en un clima cálido y protector.</p>
            <ul class="doc-cycle-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Estimulación psicomotriz, lenguaje y primeras nociones lógicas.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Iniciación al inglés fonético y cantos devocionales formativos.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Acompañamiento individualizado en hábitos de orden e independencia.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Ciclo 2: Primaria Completa -->
        <article class="doc-cycle-card">
          <div class="doc-cycle-media">
            <img src="assets/fotos/primaria-preescolar/IMG_9491.webp" alt="Estudiantes de primaria participando en clase interactiva" loading="lazy">
            <span class="doc-cycle-badge">Educación Primaria</span>
          </div>
          <div class="doc-cycle-body">
            <h3>Educación Primaria: Cimientos Cognitivos y Carácter</h3>
            <p class="doc-cycle-desc">Maestros enfocados en consolidar la comprensión lectora, el razonamiento matemático y hábitos de estudio sólidos, integrando herramientas digitales dinámicas.</p>
            <ul class="doc-cycle-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Programa lector Progrentis para velocidad y comprensión analítica.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Matemáticas aplicadas con la metodología interactiva Matific.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Formación en valores bíblicos y civismo ciudadano constante.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Ciclo 3: Secundaria y Bachilleres -->
        <article class="doc-cycle-card">
          <div class="doc-cycle-media">
            <img src="assets/fotos/secundaria/IMG_9519.webp" alt="Docente de secundaria explicando conceptos avanzados en pizarra y proyector" loading="lazy">
            <span class="doc-cycle-badge">Secundaria y Bachilleratos</span>
          </div>
          <div class="doc-cycle-body">
            <h3>Premedia y Media: Rigor Académico y Liderazgo</h3>
            <p class="doc-cycle-desc">Profesores de cátedra especializados en Ciencias, Informática, Comercio y Humanidades que preparan al joven para las exigencias de la educación superior.</p>
            <ul class="doc-cycle-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Preparación científica rigurosa y proyectos de investigación real.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Uso del aula virtual SAI (Moodle) para autogestión del aprendizaje.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Orientación vocacional y mentoría para proyectos de vida éticos.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Ciclo 4: Áreas Especiales y Tecnología -->
        <article class="doc-cycle-card">
          <div class="doc-cycle-media">
            <img src="assets/fotos/secundaria/IMG_9548.webp" alt="Laboratorio de robótica y tecnología con instructor guiando proyectos" loading="lazy">
            <span class="doc-cycle-badge">Áreas Especiales y STEM</span>
          </div>
          <div class="doc-cycle-body">
            <h3>Especialidades: Idiomas, Tecnología, Arte y Deporte</h3>
            <p class="doc-cycle-desc">Instructores apasionados que enriquecen la formación escolar mediante la tecnología de punta, el bilingüismo funcional, la expresión artística y el acondicionamiento físico.</p>
            <ul class="doc-cycle-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Robótica educativa, programación y experimentación práctica.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Docentes de inglés enfocados en destrezas comunicativas orales y escritas.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Educación física, bandas musicales y grupos folclóricos representativos.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Pilares del Compromiso Docente -->
    <section class="doc-commit-section">
      <div class="doc-commit-header">
        <span class="doc-hero__eyebrow" style="color: var(--orange);">CALIDAD INSTITUCIONAL</span>
        <h2>Pilares que definen a nuestro equipo pedagógico</h2>
        <p>Principios innegociables que garantizan una educación de excelencia con calidez humana en cada salón de clases.</p>
      </div>

      <div class="doc-commit-grid">
        <!-- Pilar 1 -->
        <article class="doc-commit-card">
          <div class="doc-commit-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          </div>
          <span class="doc-commit-tag">01 · CAPACITACIÓN CONTINUA</span>
          <h3>Actualización y Didáctica Activa</h3>
          <p>Talleres pedagógicos permanentes en neuroeducación, herramientas digitales (Canva, Moodle, SAI) e innovaciones curriculares avaladas por MEDUCA.</p>
        </article>

        <!-- Pilar 2 -->
        <article class="doc-commit-card">
          <div class="doc-commit-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
          <span class="doc-commit-tag">02 · CUIDADO SOCIOEMOCIONAL</span>
          <h3>Pastoral y Orientación Cercana</h3>
          <p>Cada educador brinda acompañamiento con empatía, guiando espiritualmente al alumno y colaborando estrechamente con el departamento de orientación y consejería.</p>
        </article>

        <!-- Pilar 3 -->
        <article class="doc-commit-card">
          <div class="doc-commit-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <span class="doc-commit-tag">03 · ALIANZA CON EL HOGAR</span>
          <h3>Comunicación Transparente</h3>
          <p>Uso diario de Edvoice y reuniones periódicas para mantener a las familias informadas sobre avances académicos, retos y logros de sus hijos.</p>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre Docente -->
    <section class="doc-cta">
      <div class="doc-cta__inner">
        <h2>Conversa con nuestro equipo pedagógico</h2>
        <p>Te invitamos a coordinar una entrevista pedagógica para conocer a los educadores de tu hijo, resolver dudas curriculares y experimentar la calidez de nuestra familia escolar.</p>
        <div class="doc-cta__actions">
          <a href="contacto.html" class="hero-btn-primary">Solicitar una Cita Pedagógica <b>↗</b></a>
          <a href="admisiones.html" class="hero-btn-outline">Proceso de Matrícula <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'plantel.html'), plantelHtml);

// 6e. Generación de Página SAI BPVDA (Portal del Campus Virtual Interactivo)
const saiHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SAI BPVDA | Campus Virtual Interactivo</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: SAI Campus Virtual -->
    <section class="sai-hero">
      <img src="assets/fotos/secundaria/IMG_9532.webp" alt="Estudiantes en aula digital interactiva con equipos informáticos en el Colegio Buen Pastor" loading="eager">
      <div class="sai-hero__overlay"></div>
      <div class="sai-hero__container">
        <span class="sai-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          02 ENFOQUE EDUCATIVO · SAI BPVDA
        </span>
        <h1>Campus virtual interactivo al servicio del <mark>aprendizaje</mark>.</h1>
        <p class="sai-hero__lead">La plataforma educativa oficial del Colegio Buen Pastor que conecta tus clases presenciales con recursos multimedia, tareas digitales y seguimiento académico continuo las 24 horas del día.</p>
        <div class="sai-hero__actions">
          <a href="https://sai.bpvda.edu.pa/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Ingresar al Campus SAI <b>↗</b></a>
          <a href="#guia" class="hero-btn-outline">Guía de Acceso para Estudiantes <b>↓</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas Digitales -->
    <section class="sai-facts-strip">
      <div class="sai-facts-grid">
        <div class="sai-fact-card">
          <span class="sai-fact-num">24<span>/7</span></span>
          <span class="sai-fact-label">Campus accesible en cualquier momento y lugar</span>
        </div>
        <div class="sai-fact-card">
          <span class="sai-fact-num">100<span>%</span></span>
          <span class="sai-fact-label">Asignaturas con aula virtual y materiales al día</span>
        </div>
        <div class="sai-fact-card">
          <span class="sai-fact-num">Moodle<span> Enterprise</span></span>
          <span class="sai-fact-label">Motor tecnológico educativo líder mundial</span>
        </div>
        <div class="sai-fact-card">
          <span class="sai-fact-num">0<span> Papel</span></span>
          <span class="sai-fact-label">Entregas digitales ecológicas y organizadas</span>
        </div>
      </div>
    </section>

    <!-- Mockup UI de la Plataforma y Módulos -->
    <section class="sai-preview-section">
      <div class="sai-preview-header">
        <span class="sai-hero__eyebrow" style="color: var(--orange);">INTERFAZ OFICIAL</span>
        <h2>Tu aula de clases ahora cabe en tu pantalla</h2>
        <p>Diseñada con una navegación intuitiva y herramientas pedagógicas que permiten a cada estudiante organizar su horario, descargar lecciones y entregar asignaciones sin complicaciones.</p>
      </div>

      <!-- Ventana de Navegador Simulada -->
      <div class="sai-window">
        <div class="sai-window__bar">
          <div class="sai-window__dots">
            <span class="sai-window__dot sai-window__dot--red"></span>
            <span class="sai-window__dot sai-window__dot--yellow"></span>
            <span class="sai-window__dot sai-window__dot--green"></span>
          </div>
          <div class="sai-window__url">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>https://sai.bpvda.edu.pa/</span>
          </div>
          <span class="sai-window__tag">PLATAFORMA OFICIAL BPVDA</span>
        </div>
        <div class="sai-window__body">
          <img src="assets/new/sai/Captura de pantalla 2026-09-12 135920.png" alt="Captura de pantalla de la plataforma virtual SAI Colegio Buen Pastor" loading="lazy">
        </div>
      </div>

      <!-- Módulos de Aprendizaje -->
      <div class="sai-modules-grid">
        <!-- Módulo 1 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          </div>
          <div class="sai-module-content">
            <h3>Materiales y Guías Didácticas</h3>
            <p>Accede en cualquier momento a las diapositivas de clase, documentos complementarios, enlaces a bibliotecas digitales y lecturas compartidas por tus profesores.</p>
          </div>
        </article>

        <!-- Módulo 2 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </div>
          <div class="sai-module-content">
            <h3>Buzón de Tareas y Entregas Digitales</h3>
            <p>Carga tus proyectos individuales o grupales en formato PDF, documentos o presentaciones con sello de hora y confirmación de recepción automática.</p>
          </div>
        </article>

        <!-- Módulo 3 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          </div>
          <div class="sai-module-content">
            <h3>Evaluaciones y Quizzes Interactivos</h3>
            <p>Comprueba tus conocimientos mediante cuestionarios formativos con corrección inmediata, cronómetros de práctica y retroalimentación pregunta por pregunta.</p>
          </div>
        </article>

        <!-- Módulo 4 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div class="sai-module-content">
            <h3>Calificaciones y Retroalimentación</h3>
            <p>Consulta tus notas ponderadas por trimestre, comentarios pedagógicos del docente y observaciones para fortalecer tus hábitos de estudio.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Guía de Acceso en 3 Pasos -->
    <section class="sai-steps-section" id="guia">
      <div class="sai-steps-header">
        <span class="sai-hero__eyebrow" style="color: var(--turquoise);">PASO A PASO</span>
        <h2>¿Cómo ingresar al campus SAI?</h2>
        <p>Tres sencillos pasos para iniciar tu sesión y comenzar a interactuar con tus asignaturas desde el primer día de clases.</p>
      </div>

      <div class="sai-steps-grid">
        <!-- Paso 1 -->
        <article class="sai-step-card">
          <span class="sai-step-badge">1</span>
          <h3>Usa tus credenciales oficiales</h3>
          <p>Tu usuario y contraseña institucional son entregados por secretaría al formalizar la matrícula. Tu usuario generalmente corresponde a tu número de cédula escolar.</p>
        </article>

        <!-- Paso 2 -->
        <article class="sai-step-card">
          <span class="sai-step-badge">2</span>
          <h3>Ingresa al portal y ubica tu grado</h3>
          <p>Visita <strong>sai.bpvda.edu.pa</strong> e inicia sesión. En tu panel principal verás las asignaturas activas de tu nivel con los avisos del docente.</p>
        </article>

        <!-- Paso 3 -->
        <article class="sai-step-card">
          <span class="sai-step-badge">3</span>
          <h3>Participa y entrega tus asignaciones</h3>
          <p>Revisa las fechas límite en el calendario virtual, descarga tus recursos y sube tus tareas antes del cierre para mantener un rendimiento óptimo.</p>
        </article>
      </div>
    </section>

    <!-- Mesa de Soporte Digital y Preguntas Frecuentes -->
    <section class="sai-support-section">
      <div class="sai-support-header">
        <span class="sai-hero__eyebrow" style="color: var(--orange);">ASISTENCIA TÉCNICA</span>
        <h2>¿Necesitas ayuda con tu cuenta?</h2>
        <p>Canales rápidos para resolver dificultades de acceso, olvido de contraseñas o configuración de tus dispositivos móviles.</p>
      </div>

      <div class="sai-support-grid">
        <!-- Tarjeta 1 -->
        <article class="sai-support-card">
          <div class="sai-support-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <h3>Restablecimiento de Contraseña</h3>
          <p>Si olvidaste tu clave o tienes problemas para ingresar, solicítalo al departamento de informática o a secretaría del plantel.</p>
          <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer">Solicitar por WhatsApp ↗</a>
        </article>

        <!-- Tarjeta 2 -->
        <article class="sai-support-card">
          <div class="sai-support-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
          <h3>Acceso desde Teléfonos Móviles</h3>
          <p>Puedes descargar la app oficial de Moodle para iOS y Android e ingresar la dirección <code>sai.bpvda.edu.pa</code> para recibir alertas.</p>
          <a href="https://moodle.com/app/" target="_blank" rel="noopener noreferrer">Ver App Moodle ↗</a>
        </article>

        <!-- Tarjeta 3 -->
        <article class="sai-support-card">
          <div class="sai-support-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <h3>Comunicación con Padres (Edvoice)</h3>
          <p>Los acudientes cuentan con la app Edvoice para circulares, reportes de asistencia y comunicaciones oficiales del colegio.</p>
          <a href="https://edvoice.additioapp.com/access/login" target="_blank" rel="noopener noreferrer">Ingresar a Edvoice ↗</a>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre: Acceso Inmediato -->
    <section class="sai-cta">
      <div class="sai-cta__inner">
        <h2>Comienza tu jornada de aprendizaje en SAI</h2>
        <p>Inicia sesión ahora y descubre todo lo que tus profesores han preparado para fortalecer tus materias y enriquecer tu aprendizaje.</p>
        <div class="sai-cta__actions">
          <a href="https://sai.bpvda.edu.pa/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Entrar a SAI Moodle <b>↗</b></a>
          <a href="portal-padres.html" class="hero-btn-outline">Ir al Portal de Padres <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'sai.html'), saiHtml);

// 6f. Generación de Página Vida Estudiantil (Mosaico Editorial de Experiencias y Clubes)
const vidaEstudiantilHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vida Estudiantil | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Vida Estudiantil BPVDA -->
    <section class="ve-hero">
      <img src="assets/fotos/secundaria/IMG_9587.webp" alt="Estudiantes del Colegio Buen Pastor compartiendo con alegría en la vida escolar" loading="eager">
      <div class="ve-hero__overlay"></div>
      <div class="ve-hero__container">
        <span class="ve-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          02 ENFOQUE EDUCATIVO · VIDA ESTUDIANTIL
        </span>
        <h1>Talentos que florecen más allá del <mark>aula tradicional</mark>.</h1>
        <p class="ve-hero__lead">La experiencia en el Buen Pastor se vive en la ciencia, el deporte, el arte y la fe. Fomentamos la pasión de cada estudiante a través de clubes, proyectos colaborativos y vivencias que forjan líderes con carácter cristiano.</p>
        <div class="ve-hero__actions">
          <a href="#clubes" class="hero-btn-primary">Explorar Clubes y Actividades <b>↓</b></a>
          <a href="admisiones.html" class="hero-btn-outline">Proceso de Admisión <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas de Vida Estudiantil -->
    <section class="ve-facts-strip">
      <div class="ve-facts-grid">
        <div class="ve-fact-card">
          <span class="ve-fact-num">+10<span> Clubes</span></span>
          <span class="ve-fact-label">Talleres y disciplinas extracurriculares activas</span>
        </div>
        <div class="ve-fact-card">
          <span class="ve-fact-num">100<span>%</span></span>
          <span class="ve-fact-label">Participación en proyectos cívicos y comunitarios</span>
        </div>
        <div class="ve-fact-card">
          <span class="ve-fact-num">3<span> Ferias</span></span>
          <span class="ve-fact-label">Hitos anuales en Ciencia, Folclore y Deporte</span>
        </div>
        <div class="ve-fact-card">
          <span class="ve-fact-num">1°<span> Lugares</span></span>
          <span class="ve-fact-label">Reconocimientos en olimpiadas científicas y STEM</span>
        </div>
      </div>
    </section>

    <!-- Manifiesto de Formación Integral -->
    <section class="ve-manifesto">
      <div class="ve-manifesto__inner">
        <div class="ve-manifesto__media">
          <img src="assets/fotos/secundaria/IMG_9516.webp" alt="Estudiantes colaborando en proyectos de liderazgo escolar" loading="lazy">
          <div class="ve-manifesto__badge">
            <strong>CARÁCTER Y LIDERAZGO</strong>
            «Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza.» · 1 Timoteo 4:12
          </div>
        </div>
        <div class="ve-manifesto__content">
          <span class="ve-hero__eyebrow" style="color: var(--orange);">EXPERIENCIAS CON PROPÓSITO</span>
          <h2>Aprender haciendo, conviviendo y sirviendo</h2>
          <p class="ve-manifesto__lead">En el Colegio Buen Pastor Voz de Alerta estamos convencidos de que las lecciones más perdurables ocurren cuando los estudiantes ponen sus dones al servicio de la comunidad.</p>
          <p class="ve-manifesto__text">Nuestra vida estudiantil promueve el equilibrio entre la exigencia académica y el disfrute recreativo. Ya sea diseñando robots en el laboratorio, compitiendo con deportividad en la cancha techada, ejecutando piezas folclóricas o sirviendo en jornadas solidarias, cada alumno descubre que su voz y sus talentos tienen un valor único.</p>
          <div class="ve-manifesto__quote">
            <p>«El verdadero liderazgo escolar no se impone: se demuestra con el ejemplo, el servicio al prójimo y la búsqueda constante de la excelencia.»</p>
            <cite>Ideario Formativo BPVDA · Pastoral Estudiantil</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Bloques Temáticos de Clubes y Experiencias -->
    <section class="ve-clubs-section" id="clubes">
      <div class="ve-clubs-header">
        <span class="ve-hero__eyebrow" style="color: var(--turquoise);">DISCIPLINAS Y TALLERES</span>
        <h2>Áreas extracurriculares que inspiran</h2>
        <p>Espacios dinámicos diseñados para despertar vocaciones, canalizar la energía juvenil y potenciar habilidades blandas para el futuro.</p>
      </div>

      <div class="ve-clubs-grid">
        <!-- Bloque 1: Ciencia, Robótica y STEM -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="assets/fotos/secundaria/IMG_9551.webp" alt="Estudiantes en laboratorio de robótica y experimentos de ciencias" loading="lazy">
            <span class="ve-club-badge">Innovación y STEM</span>
          </div>
          <div class="ve-club-body">
            <h3>Club de Robótica y Ferias Científicas</h3>
            <p class="ve-club-desc">Diseño, programación y montaje de prototipos interactivos. Los estudiantes aplican conceptos de física, matemáticas e informática en proyectos tangibles para ferias intercolegiales.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Programación de microcontroladores y sensores automatizados.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Metodología de investigación científica aplicada a problemas reales.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Participación en olimpiadas nacionales y muestras STEM.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Bloque 2: Deporte y Vida Saludable -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="assets/fotos/secundaria/IMG_9583.webp" alt="Estudiantes en la cancha deportiva escolar participando en baloncesto y futsal" loading="lazy">
            <span class="ve-club-badge">Deporte y Salud</span>
          </div>
          <div class="ve-club-body">
            <h3>Disciplinas Deportivas y Torneos Escolares</h3>
            <p class="ve-club-desc">Entrenamiento físico y fomento del espíritu deportivo en nuestra cancha multiuso. Fomentamos la disciplina, la resiliencia y el compañerismo a través del juego activo.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Equipos formativos de baloncesto, voleibol y fútbol sala.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Torneos intercursos y encuentros amistosos intercolegiales.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Acondicionamiento físico, psicomotricidad y hábitos saludables.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Bloque 3: Arte, Música y Tradición Cívica -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="assets/fotos/secundaria/IMG_9594.webp" alt="Actividades artísticas, musicales y folclóricas de los estudiantes BPVDA" loading="lazy">
            <span class="ve-club-badge">Arte y Tradición</span>
          </div>
          <div class="ve-club-body">
            <h3>Banda de Música y Expresión Folclórica</h3>
            <p class="ve-club-desc">Cultivo de la sensibilidad musical, el folclore panameño y el fervor patriótico. Nuestros estudiantes representan con honor al colegio en actos cívicos y desfiles de fiestas patrias.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Banda escolar de música y percusión institucional.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Agrupaciones de bailes típicos y preservación de tradiciones panameñas.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Oratoria cívica, declamación poética y artes plásticas.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Bloque 4: Vida Espiritual y Convivencia Cristiana -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="assets/fotos/secundaria/IMG_9524.webp" alt="Jóvenes en devocional escolar y convivencia fraterna cristiana" loading="lazy">
            <span class="ve-club-badge">Fe y Comunidad</span>
          </div>
          <div class="ve-club-body">
            <h3>Devocionales y Proyección Comunitaria</h3>
            <p class="ve-club-desc">Espacios semanales de adoración, lectura bíblica y reflexión donde los alumnos fortalecen su identidad espiritual, estrechan lazos fraternales y participan en obras de servicio.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Devocionales matutinos con alabanza, oración y principios bíblicos.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Campañas de solidaridad y apoyo social en la comunidad de 24 de Diciembre.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Grupos de liderazgo juvenil y mentoría pastoral entre pares.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Cronograma de Hitos Anuales -->
    <section class="ve-timeline-section">
      <div class="ve-timeline-header">
        <span class="ve-hero__eyebrow" style="color: var(--orange);">CALENDARIO DE TRADICIONES</span>
        <h2>Los momentos que marcan el año escolar</h2>
        <p>Eventos anuales esperados por toda la comunidad educativa que consolidan el orgullo y la pertenencia al Buen Pastor.</p>
      </div>

      <div class="ve-timeline-grid">
        <!-- Hito 1 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">I TRIMESTRE</span>
          <h3>Jornada de Integración y Deporte</h3>
          <p>Inauguración de torneos deportivos intercursos, convivencias de bienvenida y devocional de apertura de ciclo escolar.</p>
        </article>

        <!-- Hito 2 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">II TRIMESTRE</span>
          <h3>Feria de Ciencias y Robótica</h3>
          <p>Demostración pública de prototipos, experimentos biológicos, aplicaciones tecnológicas y proyectos ecológicos.</p>
        </article>

        <!-- Hito 3 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">III TRIMESTRE</span>
          <h3>Mes de la Patria y Semana Cívica</h3>
          <p>Desfiles de gala de la banda institucional, homenajes a los símbolos patrios, comidas típicas y certamen folclórico.</p>
        </article>

        <!-- Hito 4 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">CIERRE LECTIVO</span>
          <h3>Gala de Talentos y Graduación</h3>
          <p>Reconocimiento al cuadro de honor, devocional solemne de acción de gracias y ceremonia de egreso de bachilleres.</p>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre -->
    <section class="ve-cta">
      <div class="ve-cta__inner">
        <h2>Descubre tu pasión en el Buen Pastor</h2>
        <p>Una comunidad escolar vibrante donde cada estudiante encuentra su vocación, desarrolla su carácter y forja amistades para toda la vida.</p>
        <div class="ve-cta__actions">
          <a href="admisiones.html" class="hero-btn-primary">Conocer Admisiones y Matrícula <b>↗</b></a>
          <a href="contacto.html" class="hero-btn-outline">Visitar Nuestro Campus <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'vida-estudiantil.html'), vidaEstudiantilHtml);

// 6g. Generación de Página Ecosistema Digital (Catálogo de Alianzas y Competencias Digitales)
const ecosistemaDigitalHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ecosistema Digital | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Ecosistema Digital BPVDA -->
    <section class="eco-hero">
      <img src="assets/fotos/secundaria/IMG_9529.webp" alt="Estudiantes en el laboratorio digital utilizando plataformas educativas en el Colegio Buen Pastor" loading="eager">
      <div class="eco-hero__overlay"></div>
      <div class="eco-hero__container">
        <span class="eco-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
          02 ENFOQUE EDUCATIVO · ECOSISTEMA DIGITAL
        </span>
        <h1>Tecnología pedagógica que potencia cada <mark>habilidad</mark>.</h1>
        <p class="eco-hero__lead">En el Buen Pastor integramos plataformas educativas de clase mundial para expandir el pensamiento crítico, la fluidez lectora, el razonamiento matemático y la creatividad de nuestros alumnos.</p>
        <div class="eco-hero__actions">
          <a href="#plataformas" class="hero-btn-primary">Explorar Plataformas <b>↓</b></a>
          <a href="sai.html" class="hero-btn-outline">Campus Virtual SAI <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas Digitales -->
    <section class="eco-facts-strip">
      <div class="eco-facts-grid">
        <div class="eco-fact-card">
          <span class="eco-fact-num">+8<span> Alianzas</span></span>
          <span class="eco-fact-label">Plataformas educativas oficiales integradas</span>
        </div>
        <div class="eco-fact-card">
          <span class="eco-fact-num">100<span>%</span></span>
          <span class="eco-fact-label">Alumnos con licencias institucionales activas</span>
        </div>
        <div class="eco-fact-card">
          <span class="eco-fact-num">STEM<span> &amp; Lógica</span></span>
          <span class="eco-fact-label">Enfoque pedagógico basado en competencias</span>
        </div>
        <div class="eco-fact-card">
          <span class="eco-fact-num">Cloud<span> 24/7</span></span>
          <span class="eco-fact-label">Continuidad de aprendizaje en colegio y hogar</span>
        </div>
      </div>
    </section>

    <!-- Manifiesto de Innovación Ética -->
    <section class="eco-manifesto">
      <div class="eco-manifesto__inner">
        <div class="eco-manifesto__media">
          <img src="assets/fotos/secundaria/IMG_9520.webp" alt="Estudiante en aula concentrado trabajando con herramientas informáticas" loading="lazy">
          <div class="eco-manifesto__badge">
            <strong>TECNOLOGÍA CON VALORES</strong>
            Formamos creadores conscientes y usuarios éticos: la tecnología al servicio de la sabiduría y el carácter.
          </div>
        </div>
        <div class="eco-manifesto__content">
          <span class="eco-hero__eyebrow" style="color: var(--orange);">INNOVACIÓN PEDAGÓGICA</span>
          <h2>Herramientas que despiertan el pensamiento, no la distracción</h2>
          <p class="eco-manifesto__lead">La tecnología en el Colegio Buen Pastor Voz de Alerta no es un sustituto del maestro, sino un amplificador del aprendizaje profundo y personalizado.</p>
          <p class="eco-manifesto__text">Cada una de nuestras alianzas digitales responde a un propósito curricular específico: agilizar la lectura comprensiva, desafiar la resolución lógica de problemas, estimular el diseño visual y garantizar una comunicación transparente con las familias. Todo enmarcado en principios cristianos de sobriedad, discernimiento y uso responsable.</p>
          <div class="eco-manifesto__quote">
            <p>«El corazón del entendido adquiere sabiduría; y el oído de los sabios busca la ciencia.»</p>
            <cite>Proverbios 18:15 · Sabiduría y Conocimiento Digital</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Catálogo de Plataformas -->
    <section class="eco-platforms-section" id="plataformas">
      <div class="eco-platforms-header">
        <span class="eco-hero__eyebrow" style="color: var(--turquoise);">CATÁLOGO INTERACTIVO</span>
        <h2>Alianzas tecnológicas que impulsan el aprendizaje</h2>
        <p>Conoce las herramientas líderes a nivel global que enriquecen cada clase y fortalecen las competencias de nuestros estudiantes.</p>
      </div>

      <div class="eco-platforms-grid">
        <!-- 01 Progrentis -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/Progrentis1.png" alt="Logo oficial Progrentis" loading="lazy">
          </div>
          <span class="eco-platform-tag">NEUROEDUCACIÓN</span>
          <h3>Progrentis</h3>
          <span class="eco-platform-levels">Primaria y Secundaria</span>
          <p>Entrenamiento neurocognitivo que desarrolla la velocidad de lectura comprensiva, el escaneo crítico y la decodificación ágil de textos complejos.</p>
        </article>

        <!-- 02 Matific -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/Matific1.png" alt="Logo oficial Matific" loading="lazy">
          </div>
          <span class="eco-platform-tag">PENSAMIENTO LÓGICO</span>
          <h3>Matific</h3>
          <span class="eco-platform-levels">Preescolar y Primaria</span>
          <p>Laboratorio matemático gamificado donde los niños experimentan con fracciones, geometría y operaciones mediante dinámicas visuales interactivas.</p>
        </article>

        <!-- 03 Canva for Education -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/Canva1.webp" alt="Logo oficial Canva for Education" loading="lazy">
          </div>
          <span class="eco-platform-tag">CREATIVIDAD VISUAL</span>
          <h3>Canva for Education</h3>
          <span class="eco-platform-levels">Todos los Niveles</span>
          <p>Suite creativa profesional que capacita a los alumnos en diseño gráfico, creación de infografías, presentaciones orales y producción multimedia.</p>
        </article>

        <!-- 04 Edvoice -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/Edvoice1.webp" alt="Logo oficial Edvoice" loading="lazy">
          </div>
          <span class="eco-platform-tag">COMUNICACIÓN FAMILIAR</span>
          <h3>Edvoice</h3>
          <span class="eco-platform-levels">Comunidad de Padres</span>
          <p>Canal oficial de mensajería instantánea escolar para entrega de circulares, avisos institucionales, reportes de asistencia y seguimiento de tareas.</p>
        </article>

        <!-- 05 SAI BPVDA Moodle -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/SAI logo oficial.jpg" alt="Logo oficial SAI BPVDA" loading="lazy">
          </div>
          <span class="eco-platform-tag">CAMPUS VIRTUAL</span>
          <h3>SAI BPVDA (Moodle)</h3>
          <span class="eco-platform-levels">Primaria y Secundaria</span>
          <p>Plataforma centralizada del colegio para repositorios de asignaturas, entregas digitales de tareas, cuestionarios formativos y registro de calificaciones.</p>
        </article>

        <!-- 06 King's Corner -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/Kingscorner.png" alt="Logo oficial King's Corner" loading="lazy">
          </div>
          <span class="eco-platform-tag">IDIOMA INGLÉS</span>
          <h3>King's Corner</h3>
          <span class="eco-platform-levels">Primaria y Secundaria</span>
          <p>Entorno interactivo para afianzar el dominio del inglés a través de lecturas graduadas, gramática práctica y ejercicios de comprensión auditiva.</p>
        </article>

        <!-- 07 Academia 24 -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/Academia 24 - 1.png" alt="Logo oficial Academia 24" loading="lazy">
          </div>
          <span class="eco-platform-tag">REFUERZO CURRICULAR</span>
          <h3>Academia 24</h3>
          <span class="eco-platform-levels">Secundaria y Bachilleres</span>
          <p>Tutoría digital y biblioteca de contenidos de apoyo para reforzar materias clave de ciencias, matemáticas y comercio con explicaciones paso a paso.</p>
        </article>

        <!-- 08 Kahoot! -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="assets/new/alliances/kahoot1.webp" alt="Logo oficial Kahoot" loading="lazy">
          </div>
          <span class="eco-platform-tag">APRENDIZAJE LÚDICO</span>
          <h3>Kahoot!</h3>
          <span class="eco-platform-levels">Todos los Niveles</span>
          <p>Dinámicas de evaluación formativa en tiempo real que fomentan el entusiasmo, la participación activa en el aula y la autoevaluación constante.</p>
        </article>
      </div>
    </section>

    <!-- Principios de Ciudadanía y Seguridad Digital -->
    <section class="eco-safety-section">
      <div class="eco-safety-header">
        <span class="eco-hero__eyebrow" style="color: var(--orange);">CIUDADANÍA DIGITAL</span>
        <h2>Pilares de seguridad y acompañamiento ético</h2>
        <p>Cuidamos la huella digital y el bienestar socioemocional de nuestros alumnos con directrices claras y entornos protegidos.</p>
      </div>

      <div class="eco-safety-grid">
        <!-- Pilar 1 -->
        <article class="eco-safety-card">
          <div class="eco-safety-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <h3>Entornos Seguros y Privacidad</h3>
          <p>Todas las cuentas institucionales operan bajo filtros de seguridad perimetral escolar, sin anuncios invasivos y con resguardo estricto de la privacidad infantil.</p>
        </article>

        <!-- Pilar 2 -->
        <article class="eco-safety-card">
          <div class="eco-safety-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3>Mediación Docente Activa</h3>
          <p>El uso de cada software responde a una planificación didáctica previa guiada por el maestro, evitando el consumo pasivo de pantallas sin valor educativo.</p>
        </article>

        <!-- Pilar 3 -->
        <article class="eco-safety-card">
          <div class="eco-safety-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          </div>
          <h3>Equilibrio con la Vida Presencial</h3>
          <p>Promovemos hábitos saludables de desconexión, valorando la lectura en libros físicos, la caligrafía, la actividad física y el diálogo cara a cara en familia.</p>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre -->
    <section class="eco-cta">
      <div class="eco-cta__inner">
        <h2>Una educación moderna con cimientos eternos</h2>
        <p>Preparamos a tus hijos para prosperar en la sociedad del conocimiento, equipados con las mejores herramientas digitales y afianzados en la roca de los valores cristianos.</p>
        <div class="eco-cta__actions">
          <a href="admisiones.html" class="hero-btn-primary">Iniciar Proceso de Matrícula <b>↗</b></a>
          <a href="sai.html" class="hero-btn-outline">Conocer el Campus SAI <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'ecosistema-digital.html'), ecosistemaDigitalHtml);

// 6g. Generación de Página Portal de Padres (Hub Integral de Servicios a la Familia)
const portalPadresHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Portal de Padres | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Portal de Padres BPVDA -->
    <section class="padres-hero">
      <img src="assets/fotos/exterior/IMG_9370.webp" alt="Fachada y recepción del Colegio Buen Pastor Voz de Alerta" loading="eager">
      <div class="padres-hero__overlay"></div>
      <div class="padres-hero__container">
        <span class="padres-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          03 FAMILIA Y COMUNIDAD · PORTAL DE PADRES
        </span>
        <h1>Una alianza viva entre el <mark>hogar</mark> y el colegio.</h1>
        <p class="padres-hero__lead">Acompañamos el crecimiento integral de tus hijos. Centraliza aquí los accesos a las plataformas digitales de comunicación, seguimiento académico en SAI, trámites administrativos, pagos escolares y canales directos de secretaría y consejería.</p>
        <div class="padres-hero__actions">
          <a href="#plataformas" class="hero-btn-primary">Accesos Directos a Plataformas <b>↓</b></a>
          <a href="#guia-padres" class="hero-btn-outline">Guía de Nuevas Familias <b>↓</b></a>
        </div>
        <div class="padres-hero__badges">
          <div class="padres-badge-item">
            <span class="padres-badge-dot" aria-hidden="true"></span>
            <span><strong>Edvoice:</strong> Circulares y avisos al instante</span>
          </div>
          <div class="padres-badge-item">
            <span class="padres-badge-dot" aria-hidden="true"></span>
            <span><strong>SAI Moodle:</strong> Aula virtual y notas</span>
          </div>
          <div class="padres-badge-item">
            <span class="padres-badge-dot" aria-hidden="true"></span>
            <span><strong>Secretaría:</strong> L-V 7:30 a.m. – 2:00 p.m.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas y Compromisos -->
    <section class="padres-facts-strip">
      <div class="padres-facts-grid">
        <div class="padres-fact-card">
          <span class="padres-fact-num">100<span>%</span></span>
          <span class="padres-fact-label">Comunicación digital sin papel vía Edvoice y correo</span>
        </div>
        <div class="padres-fact-card">
          <span class="padres-fact-num">24<span>/7</span></span>
          <span class="padres-fact-label">Disponibilidad del aula virtual SAI y recursos de estudio</span>
        </div>
        <div class="padres-fact-card">
          <span class="padres-fact-num">4<span> Periodos</span></span>
          <span class="padres-fact-label">Informes bimestrales de avance académico y formativo</span>
        </div>
        <div class="padres-fact-card">
          <span class="padres-fact-num">&lt;24<span>h</span></span>
          <span class="padres-fact-label">Tiempo promedio de respuesta en canales de secretaría</span>
        </div>
      </div>
    </section>

    <!-- Hub Central de Plataformas y Servicios -->
    <section class="padres-services-section" id="plataformas">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--turquoise);">SERVICIOS DIGITALES & TRÁMITES</span>
        <h2>Accesos directos para la familia</h2>
        <p>Selecciona la plataforma o servicio que requieres para gestionar el día a día escolar de tu hijo.</p>
      </div>

      <div class="padres-services-grid">
        <!-- 01 Edvoice -->
        <article class="padres-service-card padres-service-card--featured">
          <div class="padres-card-top">
            <div class="padres-card-logo">
              <img src="assets/new/alliances/Edvoice1.webp" alt="Logo de Edvoice" loading="lazy">
            </div>
            <span class="padres-card-pill">COMUNICACIÓN OFICIAL</span>
          </div>
          <h3>Edvoice: App Escolar de Avisos y Circulares</h3>
          <p>Canal prioritario para recibir comunicados oficiales, justificar inasistencias por motivos médicos, autorizar salidas pedagógicas y conversar directamente con el docente tutor.</p>
          <div class="padres-card-features">
            <span>✓ Mensajería instantánea y segura</span>
            <span>✓ Notificaciones push en tu celular</span>
            <span>✓ Justificación ágil de ausencias</span>
          </div>
          <div class="padres-card-actions">
            <a href="https://edvoice.additioapp.com/access/login" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Ingresar a Edvoice Web <b>↗</b></a>
            <a href="#guia-edvoice" class="padres-link-aux">¿Cómo activar mi cuenta? →</a>
          </div>
        </article>

        <!-- 02 SAI Moodle -->
        <article class="padres-service-card padres-service-card--featured">
          <div class="padres-card-top">
            <div class="padres-card-logo">
              <img src="assets/new/alliances/SAI logo oficial.jpg" alt="Logo oficial SAI Moodle" loading="lazy">
            </div>
            <span class="padres-card-pill" style="background: rgba(16, 184, 176, 0.15); color: var(--turquoise);">AULA VIRTUAL</span>
          </div>
          <h3>SAI BPVDA: Aula Virtual y Tareas</h3>
          <p>Plataforma de seguimiento pedagógico continuo. Consulta las tareas semanales de tu hijo, guías de estudio descargables, evaluaciones programadas y cronograma de exámenes.</p>
          <div class="padres-card-features">
            <span>✓ Repositorio de materias y guías</span>
            <span>✓ Calendario de entregas y pruebas</span>
            <span>✓ Retroalimentación del docente</span>
          </div>
          <div class="padres-card-actions">
            <a href="https://sai.bpvda.edu.pa/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="hero-btn-primary" style="background: var(--navy); border-color: var(--turquoise);">Entrar a SAI Moodle <b>↗</b></a>
            <a href="sai.html" class="padres-link-aux">Conocer la plataforma SAI →</a>
          </div>
        </article>

        <!-- 03 Tesorería y Pagos -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <span class="padres-card-pill">TESORERÍA & FINANZAS</span>
          </div>
          <h3>Pagos de Mensualidades y Paz y Salvo</h3>
          <p>Paga cómodamente desde tu banca digital. Aceptamos transferencias ACH, depósito en Banco General y Yappy Comercial. Envía tu comprobante con el nombre completo y grado del estudiante.</p>
          <ul class="padres-list-compact">
            <li><strong>Banco General:</strong> Cuenta Corriente oficial BPVDA</li>
            <li><strong>Yappy Comercial:</strong> Directorio institucional Buen Pastor</li>
            <li><strong>Caja Presencial:</strong> L-V 7:30 a.m. a 2:00 p.m.</li>
          </ul>
          <div class="padres-card-actions">
            <a href="https://wa.me/50767441351?text=Hola,%20deseo%20enviar%20comprobante%20de%20pago%20o%20consultar%20mi%20estado%20de%20cuenta" target="_blank" rel="noopener noreferrer" class="hero-btn-outline">Enviar Comprobante WhatsApp <b>↗</b></a>
          </div>
        </article>

        <!-- 04 Calendario Escolar -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <span class="padres-card-pill">CRONOGRAMA LECTIVO</span>
          </div>
          <h3>Calendario y Fechas Clave del Año</h3>
          <p>Mantente al día con los eventos más importantes del año lectivo: asambleas de padres, semanas de evaluaciones trimestrales, entrega de boletines oficiales, feriados y vacaciones.</p>
          <ul class="padres-list-compact">
            <li><strong>Boletines:</strong> Cierre de cada período bimestral/trimestral</li>
            <li><strong>Asambleas:</strong> Convocatorias generales y por grado</li>
            <li><strong>Eventos cívicos:</strong> Fiestas patrias y semana del colegio</li>
          </ul>
          <div class="padres-card-actions">
            <a href="#calendario-fechas" class="hero-btn-outline">Ver Hitos del Calendario <b>↓</b></a>
          </div>
        </article>

        <!-- 05 Consejería y Bienestar -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <span class="padres-card-pill">APOYO SOCIOEMOCIONAL</span>
          </div>
          <h3>Consejería Pastoral y Bienestar Escolar</h3>
          <p>Espacio confidencial para brindar orientación espiritual, psicológica y formativa a los estudiantes y sus familias. Coordinamos entrevistas individuales para atender necesidades específicas.</p>
          <ul class="padres-list-compact">
            <li><strong>Capellanía:</strong> Consejería cristiana y oración por familias</li>
            <li><strong>Gabinete psicopedagógico:</strong> Hábitos de estudio y convivencia</li>
            <li><strong>Atención:</strong> Citas programadas con anticipación</li>
          </ul>
          <div class="padres-card-actions">
            <a href="contacto.html" class="hero-btn-outline">Solicitar Cita de Consejería <b>↗</b></a>
          </div>
        </article>

        <!-- 06 Secretaría y Certificaciones -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <span class="padres-card-pill">GESTIÓN ACADÉMICA</span>
          </div>
          <h3>Secretaría Escolar y Trámites Oficiales</h3>
          <p>Emisión de constancias de matrícula, récord oficial de notas para traslados, certificaciones de buena conducta, actualización de expedientes del acudiente y carnets escolares.</p>
          <ul class="padres-list-compact">
            <li><strong>Teléfono directo:</strong> 391-5811</li>
            <li><strong>Correo:</strong> info@buenpastor-vda.net</li>
            <li><strong>Tiempo de entrega:</strong> 48 a 72 horas hábiles</li>
          </ul>
          <div class="padres-card-actions">
            <a href="tel:+5073915811" class="hero-btn-outline">Llamar a Secretaría: 391-5811 <b>📞</b></a>
          </div>
        </article>
      </div>
    </section>

    <!-- Manifiesto de Alianza Hogar-Escuela -->
    <section class="padres-manifesto">
      <div class="padres-manifesto__inner">
        <div class="padres-manifesto__media">
          <img src="assets/fotos/exterior/IMG_9374.webp" alt="Instalaciones del Colegio Buen Pastor donde la comunidad de familias se reúne" loading="lazy">
          <div class="padres-manifesto__badge">
            <strong>PRINCIPIO BÍBLICO DE LA FAMILIA</strong>
            «Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.» · Proverbios 22:6
          </div>
        </div>
        <div class="padres-manifesto__content">
          <span class="padres-hero__eyebrow" style="color: var(--orange);">VALORES Y COMPROMISO</span>
          <h2>Caminamos de la mano en la formación de tus hijos</h2>
          <p class="padres-manifesto__lead">En el Colegio Buen Pastor Voz de Alerta consideramos a los padres de familia como los primeros y fundamentales formadores del carácter.</p>
          <p class="padres-manifesto__text">Nuestra misión educativa alcanza su máxima plenitud cuando existe una comunicación abierta y un compromiso mutuo entre el colegio y el hogar. Al compartir valores bíblicos sólidos, disciplina con amor y metas académicas claras, creamos para los niños y jóvenes un ambiente seguro y coherente en el que florecen con confianza.</p>
          <div class="padres-manifesto__quote">
            <p>«La verdadera educación no sólo transmite conocimientos a la mente; forja el carácter en el corazón a través del ejemplo coherente de padres y maestros.»</p>
            <cite>Comunidad Educativa BPVDA · Dirección Pastoral</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Guía Paso a Paso para Nuevos Padres -->
    <section class="padres-guide-section" id="guia-padres">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--turquoise);">INDUCCIÓN PARA ACUDIENTES</span>
        <h2>Primeros pasos en la comunidad BPVDA</h2>
        <p>Sigue estos sencillos pasos para asegurar que tu familia esté conectada y al día con todas las actividades escolares desde el primer día de clases.</p>
      </div>

      <div class="padres-steps-grid" id="guia-edvoice">
        <div class="padres-step-card">
          <div class="padres-step-num">01</div>
          <h3>Instala la App Edvoice</h3>
          <p>Descarga la aplicación gratuita <strong>Edvoice</strong> desde App Store o Google Play Store. Te permitirá recibir notificaciones urgentes y circulares institucionales al instante.</p>
          <span class="padres-step-tip">💡 Disponible también en versión navegador web.</span>
        </div>

        <div class="padres-step-card">
          <div class="padres-step-num">02</div>
          <h3>Ingresa tu Código de Familia</h3>
          <p>Al matricular a tu hijo en Secretaría, recibirás un <strong>código de vinculación único</strong>. Introdúcelo en Edvoice para enlazar inmediatamente tu perfil con el salón y los profesores de tu hijo.</p>
          <span class="padres-step-tip">💡 Si extraviaste tu código, solicítalo al 391-5811.</span>
        </div>

        <div class="padres-step-card">
          <div class="padres-step-num">03</div>
          <h3>Activa el Acceso a SAI Moodle</h3>
          <p>Cada estudiante cuenta con un usuario institucional para ingresar al Campus Virtual SAI en <a href="https://sai.bpvda.edu.pa" target="_blank" rel="noopener">sai.bpvda.edu.pa</a>. Revisa semanalmente las tareas y guías de estudio asignadas.</p>
          <span class="padres-step-tip">💡 Recomendamos guardar el acceso en favoritos.</span>
        </div>

        <div class="padres-step-card">
          <div class="padres-step-num">04</div>
          <h3>Participa en las Asambleas</h3>
          <p>Asiste a las reuniones trimestrales de acudientes y citas de consejería. Tu presencia activa demuestra a tus hijos el valor que la familia otorga a su educación y progreso.</p>
          <span class="padres-step-tip">💡 Las fechas se avisan con anticipación por Edvoice.</span>
        </div>
      </div>
    </section>

    <!-- Hitos del Año Escolar -->
    <section class="padres-calendar-section" id="calendario-fechas">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--orange);">CRONOGRAMA GENERAL</span>
        <h2>Hitos y períodos clave del año escolar</h2>
        <p>Planifica con tiempo las actividades académicas y familiares de acuerdo con el calendario institucional.</p>
      </div>

      <div class="padres-terms-grid">
        <div class="padres-term-card">
          <div class="padres-term-header">
            <span class="padres-term-tag">PERÍODO I</span>
            <h3>Inicio de Clases & Adaptación</h3>
          </div>
          <ul class="padres-term-events">
            <li><strong>Bienvenida y Apertura:</strong> Asamblea inicial de padres y entrega del reglamento escolar.</li>
            <li><strong>Diagnóstico de Aprendizajes:</strong> Evaluación de nivelación diagnóstica en materias troncales.</li>
            <li><strong>Semana de Evaluaciones I:</strong> Exámenes parciales del primer período lectivo.</li>
            <li><strong>Entrega de Boletines I:</strong> Primera reunión formal de entrega de informes académicos.</li>
          </ul>
        </div>

        <div class="padres-term-card">
          <div class="padres-term-header">
            <span class="padres-term-tag">PERÍODO II</span>
            <h3>Consolidación, Ciencia & Cultura</h3>
          </div>
          <ul class="padres-term-events">
            <li><strong>Feria Científica y de Robótica:</strong> Exposición de proyectos estudiantiles abierta a la familia.</li>
            <li><strong>Aniversario del Colegio:</strong> Jornada cívica y deportiva conmemorativa de la comunidad.</li>
            <li><strong>Semana de Evaluaciones II:</strong> Exámenes trimestrales intermedios.</li>
            <li><strong>Receso de Medio Año:</strong> Semana de descanso escolar de mitad de ciclo.</li>
          </ul>
        </div>

        <div class="padres-term-card">
          <div class="padres-term-header">
            <span class="padres-term-tag">PERÍODO III</span>
            <h3>Cierre, Logros & Graduaciones</h3>
          </div>
          <ul class="padres-term-events">
            <li><strong>Feria de la Hispanidad & Folclore:</strong> Fiestas patrias, presentaciones folclóricas y gastronomía.</li>
            <li><strong>Exámenes Finales Trimestrales:</strong> Cierre de asignaturas y proyectos finales de graduación.</li>
            <li><strong>Entrega Final de Calificaciones:</strong> Boletines definitivos y paz y salvo del año escolar.</li>
            <li><strong>Actos de Graduación:</strong> Ceremonia solemne para Preescolar, Primaria, Premedia y Bachilleres.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Preguntas Frecuentes de Familias -->
    <section class="padres-faq-section" id="faq-padres">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--turquoise);">RESOLUCIÓN DE DUDAS</span>
        <h2>Preguntas frecuentes de las familias</h2>
        <p>Encuentra respuestas inmediatas a las consultas más comunes sobre la dinámica escolar y administrativa.</p>
      </div>

      <div class="padres-faq-accordion">
        <details class="padres-faq-item" open>
          <summary class="padres-faq-question">
            <span>¿Cómo justifico una inasistencia o tardanza médica de mi acudido?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Las inasistencias por salud deben notificarse a través de la aplicación <strong>Edvoice</strong> el mismo día de la ausencia, adjuntando la constancia médica o excusa formal firmada por el acudiente. Para citas médicas programadas, se solicita enviar el aviso con al menos 24 horas de anticipación a la coordinación de nivel.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Cuáles son los canales y fechas límite para el pago de colegiaturas?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Las mensualidades escolares vencen dentro de los primeros diez (10) días de cada mes. Puedes realizar el pago mediante <strong>Banco General (banca en línea / ACH)</strong> o <strong>Yappy Comercial</strong>. Tras efectuar la transacción, envía el comprobante por WhatsApp al <strong>6744-1351</strong> detallando el nombre completo del estudiante y su grado para registrar el paz y salvo.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Qué debo hacer si olvidé las credenciales de SAI Moodle o Edvoice?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Para recuperar tu clave de acceso a la plataforma <strong>SAI BPVDA</strong>, puedes utilizar el enlace de "¿Olvidó su contraseña?" en la pantalla de inicio con el correo del estudiante, o escribir a <a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a> solicitando el restablecimiento. Para la app <strong>Edvoice</strong>, secretaría docente puede emitir un nuevo código de vinculación en ventanilla.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Cómo solicito una cita individual con un docente o profesor consejero?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Las reuniones con docentes consejeros se coordinan por medio de la mensajería interna de <strong>Edvoice</strong> en el horario de atención a padres designado para cada profesor, o comunicándose con Secretaría al <strong>391-5811</strong>. Esto asegura que el profesor reserve el espacio sin interrumpir su tiempo de docencia frente a grupo.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Cuál es el horario de atención presencial en oficinas y caja?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Nuestra oficina de atención al cliente, caja y secretaría docente atiende de manera continua de <strong>lunes a viernes de 7:30 a.m. a 2:00 p.m.</strong> en las instalaciones de Monterrico, 24 de Diciembre. En período de vacaciones escolares o de verano rige el horario de 8:00 a.m. a 2:00 p.m.</p>
          </div>
        </details>
      </div>
    </section>

    <!-- Banner de Soporte Final -->
    <section class="padres-support-banner">
      <div class="padres-support-inner">
        <h2>¿Necesitas asistencia adicional o atención personalizada?</h2>
        <p>Nuestro equipo de secretaría docente, tesorería y bienestar pastoral está a tu completa disposición para acompañar a tu familia en todo momento.</p>
        <div class="padres-support-actions">
          <a href="tel:+5073915811" class="hero-btn-primary">Llamar a Secretaría: 391-5811 <b>📞</b></a>
          <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="hero-btn-outline">Escribir por WhatsApp <b>💬</b></a>
          <a href="contacto.html" class="hero-btn-outline">Ver Horarios y Ubicación <b>📍</b></a>
        </div>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'portal-padres.html'), portalPadresHtml);

// 6h. Generación de Página Contacto y Atención (Centro de Orientación Familiar)
const contactoHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contacto y Atención | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Contacto y Atención BPVDA -->
    <section class="contacto-hero">
      <img src="assets/fotos/exterior/IMG_9372.webp" alt="Entrada y fachada exterior del Colegio Buen Pastor Voz de Alerta" loading="eager">
      <div class="contacto-hero__overlay"></div>
      <div class="contacto-hero__container">
        <span class="contacto-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          03 FAMILIA Y COMUNIDAD · CONTACTO Y ATENCIÓN
        </span>
        <h1>Estamos aquí para orientar a tu <mark>familia</mark>.</h1>
        <p class="contacto-hero__lead">Acércate a conversar con nuestro equipo, programa una visita guiada para conocer las instalaciones y resuelve cualquier duda sobre admisiones, trámites de secretaría o vida escolar en el Colegio Buen Pastor Voz de Alerta.</p>
        <div class="contacto-hero__actions">
          <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Escribir por WhatsApp <b>💬</b></a>
          <a href="#visita-form" class="hero-btn-outline">Solicitar Visita al Campus <b>↓</b></a>
          <a href="#mapa-ubicacion" class="hero-btn-outline">Ver Ubicación y Mapa <b>↓</b></a>
        </div>
        <div class="contacto-hero__badges">
          <div class="contacto-badge-item">
            <span class="contacto-badge-dot" aria-hidden="true"></span>
            <span><strong>Sede:</strong> Calle San José, Urb. Monterrico, 24 de Diciembre</span>
          </div>
          <div class="contacto-badge-item">
            <span class="contacto-badge-dot" aria-hidden="true"></span>
            <span><strong>Horario:</strong> L-V 7:30 a.m. – 2:00 p.m.</span>
          </div>
          <div class="contacto-badge-item">
            <span class="contacto-badge-dot" aria-hidden="true"></span>
            <span><strong>Teléfono:</strong> (507) 391-5811</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Franja de Canales Directos de Atención Inmediata -->
    <section class="contact-direct section-pad">
      <a href="tel:+5073915811" class="contact-direct__card">
        <div class="contact-direct__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div class="contact-direct__info">
          <span class="contact-direct__tag">SECRETARÍA & PBX</span>
          <strong class="contact-direct__value">391-5811</strong>
          <span class="contact-direct__sub">Atención telefónica y conmutador</span>
        </div>
        <span class="contact-direct__arrow" aria-hidden="true">↗</span>
      </a>

      <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="contact-direct__card contact-direct__card--wa">
        <div class="contact-direct__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </div>
        <div class="contact-direct__info">
          <span class="contact-direct__tag">WHATSAPP OFICIAL</span>
          <strong class="contact-direct__value">6744-1351</strong>
          <span class="contact-direct__sub">Orientación y consultas rápidas</span>
        </div>
        <span class="contact-direct__arrow" aria-hidden="true">↗</span>
      </a>

      <a href="mailto:info@buenpastor-vda.net" class="contact-direct__card">
        <div class="contact-direct__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div class="contact-direct__info">
          <span class="contact-direct__tag">CORREO INSTITUCIONAL</span>
          <strong class="contact-direct__value">info@buenpastor-vda.net</strong>
          <span class="contact-direct__sub">Trámites y documentos oficiales</span>
        </div>
        <span class="contact-direct__arrow" aria-hidden="true">↗</span>
      </a>
    </section>

    <!-- Sección Principal: Formulario de Visita y Hub de Sede -->
    <section class="contacto-main-section" id="visita-form">
      <div class="contacto-main-grid">
        <!-- Columna Izquierda: Formulario de Contacto / Visita -->
        <div class="contacto-form-card">
          <span class="contacto-hero__eyebrow" style="color: var(--orange);">FORMULARIO DE ORIENTACIÓN</span>
          <h2>Solicitar Visita Guiada o Consulta</h2>
          <p>Completa los siguientes campos y nuestro equipo de admisiones y orientación se comunicará contigo en menos de 24 horas hábiles.</p>

          <form action="mailto:info@buenpastor-vda.net" method="POST" enctype="text/plain" class="contacto-form">
            <div class="contacto-form-row">
              <div class="contacto-form-group">
                <label for="contactNombre">Nombre y Apellido del Acudiente *</label>
                <input type="text" id="contactNombre" name="nombre" placeholder="Ej: María Rodríguez" required>
              </div>
              <div class="contacto-form-group">
                <label for="contactTelefono">Teléfono / WhatsApp *</label>
                <input type="tel" id="contactTelefono" name="telefono" placeholder="Ej: +507 6000-0000" required>
              </div>
            </div>

            <div class="contacto-form-group">
              <label for="contactEmail">Correo Electrónico *</label>
              <input type="email" id="contactEmail" name="email" placeholder="Ej: acudiente@correo.com" required>
            </div>

            <div class="contacto-form-row">
              <div class="contacto-form-group">
                <label for="contactNivel">Nivel o Grado de Interés *</label>
                <select id="contactNivel" name="nivel" required>
                  <option value="" disabled selected>Selecciona un nivel...</option>
                  <option value="Prekínder">Prekínder (Preescolar)</option>
                  <option value="Kínder">Kínder (Preescolar)</option>
                  <option value="Primaria">Primaria (1° a 6° Grado)</option>
                  <option value="Secundaria">Premedia / Secundaria (7° a 9°)</option>
                  <option value="Bachiller Ciencias">Bachiller en Ciencias (10° a 12°)</option>
                  <option value="Bachiller Informatica">Bachiller en Informática (10° a 12°)</option>
                  <option value="Bachiller Comercio">Bachiller en Comercio (10° a 12°)</option>
                  <option value="Tramite Administrativo">Trámite Administrativo / Secretaría</option>
                </select>
              </div>
              <div class="contacto-form-group">
                <label for="contactMotivo">Motivo de Contacto *</label>
                <select id="contactMotivo" name="motivo" required>
                  <option value="Visita Guiada" selected>Recorrido guiado por el campus</option>
                  <option value="Informacion Matricula">Información de matrícula y costos</option>
                  <option value="Entrevista Consejeria">Entrevista con dirección/consejería</option>
                  <option value="Consulta General">Consulta general</option>
                </select>
              </div>
            </div>

            <div class="contacto-form-group">
              <label for="contactMensaje">Mensaje o Pregunta Específica</label>
              <textarea id="contactMensaje" name="mensaje" rows="4" placeholder="Escribe aquí los detalles de tu consulta, fechas preferidas para tu visita o necesidades formativas de tu acudido..."></textarea>
            </div>

            <button type="submit" class="contacto-btn-submit">
              <span>Enviar Consulta / Solicitar Recorrido</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <p class="contacto-privacy-note">🔒 Tus datos personales son tratados con estricta confidencialidad institucional conforme a la legislación vigente de protección de datos.</p>
          </form>
        </div>

        <!-- Columna Derecha: Tarjetas de Información Operativa -->
        <div class="contacto-side-info">
          <!-- Horarios -->
          <div class="contacto-info-box">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Horarios de Atención Presencial
            </h3>
            <p>Nuestras ventanillas de secretaría y caja están disponibles de forma continua para atender trámites familiares:</p>
            <ul class="contacto-schedule-list">
              <li class="contacto-schedule-item">
                <strong>Año Lectivo Regular:</strong>
                <span>7:30 a.m. – 2:00 p.m.</span>
              </li>
              <li class="contacto-schedule-item">
                <strong>Período de Verano:</strong>
                <span>8:00 a.m. – 2:00 p.m.</span>
              </li>
              <li class="contacto-schedule-item">
                <strong>Días de Atención:</strong>
                <span>Lunes a Viernes</span>
              </li>
              <li class="contacto-schedule-item">
                <strong>Fines de Semana:</strong>
                <span>Cerrado (Citas especiales previas)</span>
              </li>
            </ul>
          </div>

          <!-- Ubicación y Accesibilidad -->
          <div class="contacto-info-box">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Cómo Llegar a la Sede
            </h3>
            <p>Estamos ubicados en Calle San José, Urbanización Monterrico, Corregimiento 24 de Diciembre, Ciudad de Panamá.</p>
            <ul class="contacto-transport-list">
              <li>
                <strong>🚇 En Metro (Línea 2):</strong>
                Bájate en la Estación 24 de Diciembre. Desde allí puedes tomar transporte interno o taxi hacia Monterrico (aproximadamente 5 minutos).
              </li>
              <li>
                <strong>🚌 En Transporte Público:</strong>
                Rutas de Vía España, Tumba Muerto o Corredor Sur con destino a 24 de Diciembre / Pacora, con parada cercana a la entrada de Monterrico.
              </li>
              <li>
                <strong>🚗 En Vehículo Particular:</strong>
                Acceso fluido desde la Carretera Panamericana por la entrada principal de Monterrico. Contamos con estacionamiento interno para visitantes.
              </li>
            </ul>
          </div>

          <!-- Normas de Visita -->
          <div class="contacto-info-box" style="background: var(--cream); border-color: rgba(16, 184, 176, 0.3);">
            <h3 style="color: var(--navy);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Normas de Ingreso al Plantel
            </h3>
            <p>Por la seguridad y el bienestar de los estudiantes, todo visitante debe registrarse en la garita principal presentando su documento de identidad personal (cédula o pasaporte). Agradecemos acudir con vestimenta adecuada acorde al entorno escolar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Preguntas Frecuentes de Visitas y Orientación -->
    <section class="contacto-faq-section">
      <div class="padres-section-header">
        <span class="contacto-hero__eyebrow" style="color: var(--turquoise);">RESOLUCIÓN DE DUDAS</span>
        <h2>Preguntas frecuentes sobre visitas y atención</h2>
        <p>Todo lo que necesitas saber antes de acercarte a las instalaciones de nuestro colegio.</p>
      </div>

      <div class="contacto-faq-accordion">
        <details class="contacto-faq-item" open>
          <summary class="contacto-faq-question">
            <span>¿Es indispensable coordinar una cita previa para conocer el campus?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Para trámites administrativos de ventanilla (pagos en caja, entrega de documentos o solicitud de constancias) <strong>no se requiere cita previa</strong> dentro de nuestro horario regular. Sin embargo, para realizar un <strong>recorrido guiado por las instalaciones</strong> o sostener una entrevista con directores de nivel, recomendamos programarla con al menos 24 horas de antelación para asegurar que un orientador esté disponible para atenderte con dedicación.</p>
          </div>
        </details>

        <details class="contacto-faq-item">
          <summary class="contacto-faq-question">
            <span>¿Qué áreas del colegio se pueden conocer durante la visita guiada?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Durante el recorrido podrás conocer los pabellones académicos, las aulas interactivas del nivel correspondiente a tu hijo, los laboratorios de ciencias y robótica, la capilla y auditorio central, la biblioteca, el comedor escolar y el complejo multideportivo techado.</p>
          </div>
        </details>

        <details class="contacto-faq-item">
          <summary class="contacto-faq-question">
            <span>¿Qué documentación debo traer si solicito información para traslado de otro colegio?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Es conveniente presentar una copia del <strong>último boletín de calificaciones o créditos oficiales</strong> del estudiante, así como la copia de la cédula juvenil del alumno y la cédula del acudiente. Con estos documentos, nuestro equipo pedagógico podrá brindarte una orientación precisa sobre el plan de convalidación y cupos disponibles.</p>
          </div>
        </details>

        <details class="contacto-faq-item">
          <summary class="contacto-faq-question">
            <span>¿Cómo consulto el estatus de un trámite o solicitud de admisión ya enviada?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Puedes consultar el estado de tu expediente directamente a través de nuestro WhatsApp institucional <strong>6744-1351</strong> o comunicándote al PBX <strong>391-5811</strong> indicando el nombre completo del estudiante y el nivel académico solicitado.</p>
          </div>
        </details>
      </div>
    </section>

    <!-- Mapa Interactivo Oficial con Coordenadas Exactas -->
    <section class="contacto-map-wrapper" id="mapa-ubicacion">
      <div class="contacto-map-container">
        <div class="contacto-map-header">
          <div>
            <h3>Sede Central BPVDA en Google Maps</h3>
            <p>Calle San José, Urbanización Monterrico, Corregimiento 24 de Diciembre, Ciudad de Panamá</p>
          </div>
          <div class="contacto-map-nav-actions">
            <a href="https://maps.app.goo.gl/r5Arxesjc7P2Uzew7" target="_blank" rel="noopener noreferrer" class="contacto-map-nav-btn">
              <span>Abrir en Google Maps</span> ↗
            </a>
            <a href="https://waze.com/ul?ll=9.106901321318759,-79.36663973009655&navigate=yes" target="_blank" rel="noopener noreferrer" class="contacto-map-nav-btn">
              <span>Navegar con Waze</span> ↗
            </a>
          </div>
        </div>
        <iframe class="contacto-map-frame" title="Ubicación exacta de Colegio Buen Pastor Voz de Alerta" src="https://www.google.com/maps?q=9.106901321318759,-79.36663973009655&amp;hl=es&amp;z=17&amp;output=embed" loading="lazy"></iframe>
      </div>
    </section>
  </main>

  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'contacto.html'), contactoHtml);

// 6b. Generación de Página Secundaria y Bachilleres (Bento Grid Editorial Asimétrico)
const secundariaHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Secundaria y Bachilleres | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body>
  <!-- Enlace accesible para lectores de pantalla -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Secundaria y Bachilleres con encuadre óptimo y fotografía real -->
    <section class="interior-hero interior-hero--secundaria">
      <img src="assets/fotos/secundaria/IMG_9528.webp" alt="Estudiantes de secundaria en los pasillos del Colegio Buen Pastor Voz de Alerta">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>04 NIVELES ACADÉMICOS · SECUNDARIA</span>
        <h1>Preparación para los retos que <mark>vienen</mark>.</h1>
        <p>Acompañamos a los jóvenes con solidez académica, principios cristianos y herramientas tecnológicas para descubrir su vocación y liderar con propósito.</p>
      </div>
    </section>

    <!-- Presentación Editorial (Split Feature) -->
    <section class="split-feature">
      <img src="assets/fotos/secundaria/IMG_9510.webp" alt="Estudiantes de secundaria en actividades formativas">
      <div>
        <span class="section-number">04 NIVELES ACADÉMICOS</span>
        <h2>Secundaria y Bachilleres</h2>
        <p>En el Colegio Buen Pastor Voz de Alerta acompañamos a los jóvenes en una etapa crucial de definición vocacional, fortaleciendo el pensamiento crítico, la solidez académica y el carácter cristiano para triunfar en los estudios superiores.</p>
      </div>
    </section>

    <!-- Alternativa Editorial Dinámica: Bento Grid Asimétrico (Reemplaza las tarjetas repetitivas) -->
    <section class="bento-section">
      <div class="bento-header">
        <span class="bento-tagline">Formación de Vanguardia</span>
        <h2 class="bento-title">Un Entorno Diseñado para Descubrir, Crear y Liderar</h2>
        <p class="bento-desc">
          Combinamos rigor académico, laboratorios de ciencias y tecnología, y formación humana para preparar a las nuevas generaciones frente a los desafíos universitarios y profesionales.
        </p>
      </div>

      <div class="bento-grid">
        <!-- 1. Tarjeta Principal Hero Bento (7 columnas) -->
        <article class="bento-card-main">
          <img class="bento-bg" src="assets/fotos/secundaria/IMG_9530.webp" alt="Clase activa con proyecto experimental en secundaria">
          <div class="bento-overlay"></div>
          <div class="bento-content">
            <span class="bento-badge-live">Campus Activo</span>
            <h3>Aulas Equipadas con Enfoque Tecnológico</h3>
            <p>Espacios donde la teoría se convierte en experimentación constante con herramientas interactivas, proyectos colaborativos y metodología STEM aplicada al aula.</p>
            <a href="bachilleres.html" class="bento-btn-action">Explorar Bachilleres →</a>
          </div>
        </article>

        <!-- 2. Tarjeta Métrica Destacada (5 columnas) -->
        <article class="bento-card-stat">
          <div>
            <div class="bento-stat-num">100<span>%</span></div>
            <h4>Bachillerato con Énfasis Práctico</h4>
            <p>Nuestros planes de estudio integran laboratorios de ciencias exactas, contabilidad moderna y programación desde los primeros ciclos.</p>
          </div>
          <ul class="bento-mini-checks">
            <li>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Preparación directa para admisión universitaria
            </li>
            <li>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Robótica educativa y pensamiento computacional
            </li>
            <li>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Acompañamiento psicopedagógico permanente
            </li>
          </ul>
        </article>

        <!-- 3. Tarjeta Micro 1 (4 columnas) -->
        <article class="bento-card-sub">
          <div>
            <div class="bento-sub-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h4>Ecosistema SAI</h4>
            <p>Portal web para seguimiento de calificaciones, asistencias y tareas en tiempo real para padres y alumnos.</p>
          </div>
          <div class="bento-pill-group">
            <span>Calificaciones</span>
            <span>Horarios</span>
            <span>Comunicación</span>
          </div>
        </article>

        <!-- 4. Tarjeta Micro 2 (4 columnas) -->
        <article class="bento-card-sub">
          <div>
            <div class="bento-sub-icon orange">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h4>Valores y Convivencia</h4>
            <p>Formación ética con principios cristianos que inspiran integridad, empatía y sentido de comunidad.</p>
          </div>
          <a href="filosofia.html" class="bento-link-arrow">Ver Filosofía Institucional →</a>
        </article>

        <!-- 5. Tarjeta Micro 3 (4 columnas) -->
        <article class="bento-card-sub">
          <div>
            <div class="bento-sub-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
            </div>
            <h4>Ciencia y Robótica</h4>
            <p>Proyectos de robótica y ferias científicas donde cada alumno desarrolla pensamiento crítico y autonomía.</p>
          </div>
          <div class="bento-pill-group">
            <span>Laboratorio</span>
            <span>Proyectos STEM</span>
            <span>Feria Anual</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Voz Estudiantil BPVDA -->
    <section class="student-voice section-pad">
      <blockquote>“En BPVDA encontramos las herramientas para superarnos día a día, docentes comprometidos y una comunidad que cree en nuestro potencial.”</blockquote>
      <span>ESTUDIANTE BPVDA</span>
    </section>
  </main>

  <!-- Pie de Página Institucional Enriquecido en 3 Columnas -->
  ${richFooter}

  <!-- Botón Flotante para Volver al Inicio de la Página -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'secundaria.html'), secundariaHtml);

// 7. Generación de Páginas por Niveles Educativos
const levelPage = (file, title, hero, lead, photos, body) => {
  const pageHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body class="level-page level-page--${file.replace('.html', '')}">
  <!-- Enlace accesible de salto al contenido -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Específico del Nivel con Imagen de Fondo y Llamado a la Acción -->
    <section class="level-hero">
      <img src="${photos[0]}" alt="Estudiantes BPVDA">
      <div>
        <span>04 PRIMARIA</span>
        <h1>${hero}</h1>
        <p>${lead}</p>
        <a href="#experiencias">Descubre la etapa <b>↓</b></a>
      </div>
    </section>

    <!-- Composición Específica de la Etapa Formativa -->
    ${body}
  </main>

  <!-- Pie de Página Institucional Enriquecido -->
  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;
  writeFileSync(join(root, file), pageHtml);
};

levelPage(
  'prekinder.html',
  'Prekínder',
  'Un lugar seguro para <mark>comenzar</mark>.',
  'Juego, afecto y descubrimiento acompañan los primeros pasos de cada niño.',
  ['assets/fotos/primaria-preescolar/IMG_9410.webp', 'assets/fotos/primaria-preescolar/IMG_9417.webp', 'assets/fotos/primaria-preescolar/IMG_9421.webp', 'assets/fotos/primaria-preescolar/IMG_9423.webp'],
  `<section id="experiencias" class="level-welcome">
  <div>
    <span>PREKÍNDER</span>
    <h2>Las primeras experiencias se viven con asombro.</h2>
    <p>Un entorno preparado para explorar, crear vínculos y descubrir el mundo a través del juego. Aquí se incorporará la propuesta pedagógica final de Prekínder.</p>
  </div>
  <div class="level-photo-stack">
    <img src="assets/fotos/primaria-preescolar/IMG_9417.webp" alt="Estudiantes en actividades de prekínder">
    <img src="assets/fotos/primaria-preescolar/IMG_9421.webp" alt="Primeras experiencias formativas en BPVDA">
  </div>
</section>
<section class="level-moments">
  <img src="assets/fotos/primaria-preescolar/IMG_9423.webp" alt="Rutinas y juegos en preescolar">
  <div>
    <span>UN DÍA PARA DESCUBRIR</span>
    <h2>Movimiento, imaginación y compañía.</h2>
    <p>Rutinas diseñadas para fortalecer la confianza y la alegría de aprender.</p>
  </div>
</section>`
);

levelPage(
  'kinder.html',
  'Kínder',
  'La curiosidad encuentra su <mark>voz</mark>.',
  'Una etapa para preguntar, imaginar y construir aprendizajes con entusiasmo.',
  ['assets/fotos/primaria-preescolar/IMG_9454.webp', 'assets/fotos/primaria-preescolar/IMG_9425.webp', 'assets/fotos/primaria-preescolar/IMG_9428.webp', 'assets/fotos/primaria-preescolar/IMG_9431.webp'],
  `<section id="experiencias" class="kinder-journey">
  <div class="kinder-journey__copy">
    <span>KÍNDER</span>
    <h2>Ideas pequeñas, descubrimientos enormes.</h2>
    <p>La experiencia de Kínder conecta juego, lenguaje, exploración y convivencia. Este espacio recibirá los contenidos oficiales del programa.</p>
  </div>
  <img class="kinder-journey__main" src="assets/fotos/primaria-preescolar/IMG_9425.webp" alt="Estudiantes en el aula de kínder">
  <div class="kinder-journey__facts">
    <article><b>01</b><p>Explorar</p></article>
    <article><b>02</b><p>Crear</p></article>
    <article><b>03</b><p>Compartir</p></article>
  </div>
</section>
<section class="kinder-gallery">
  <img src="assets/fotos/primaria-preescolar/IMG_9428.webp" alt="Aprendizaje en kínder">
  <img src="assets/fotos/primaria-preescolar/IMG_9431.webp" alt="Descubrimiento en kínder">
  <div>
    <h2>Aprender también es imaginar.</h2>
    <p>Un ambiente cercano para desarrollar autonomía y disfrutar cada logro.</p>
  </div>
</section>`
);

levelPage(
  'primaria.html',
  'Primaria',
  'Aprender para comprender y <mark>transformar</mark>.',
  'Una formación que fortalece hábitos, conocimiento, colaboración y propósito.',
  ['assets/fotos/primaria-preescolar/IMG_9494.webp', 'assets/fotos/primaria-preescolar/IMG_9468.webp', 'assets/fotos/primaria-preescolar/IMG_9544.webp'],
  `<section id="experiencias" class="primary-statement primary-statement--enriched">
  <div class="primary-statement__intro">
    <div>
      <span>02 · PRIMARIA BPVDA</span>
      <h2>Conocimiento que cobra sentido cada día.</h2>
    </div>
    <p>En primaria acompañamos a cada estudiante a consolidar hábitos de estudio, comprensión lectora y pensamiento crítico. Un ambiente cercano donde la curiosidad natural se transforma en disciplina, respeto y ganas de aprender.</p>
  </div>
  <div class="primary-pillars">
    <article class="primary-pillar">
      <span class="primary-pillar__num">01</span>
      <h3>Lectura y Pensamiento</h3>
      <p>Comprensión lectora diaria, expresión clara y razonamiento matemático aplicados a retos de la vida diaria.</p>
    </article>
    <article class="primary-pillar">
      <span class="primary-pillar__num">02</span>
      <h3>Entorno Digital Guiado</h3>
      <p>Uso intencional de tabletas y plataformas interactivas que fortalecen la autonomía en el aula.</p>
    </article>
    <article class="primary-pillar">
      <span class="primary-pillar__num">03</span>
      <h3>Convivencia y Valores</h3>
      <p>Principios cristianos, compañerismo y respeto mutuo vividos dentro y fuera del salón de clases.</p>
    </article>
  </div>
</section>
<section class="primary-mosaic">
  <figure class="primary-mosaic__item primary-mosaic__item--photo">
    <img src="assets/fotos/primaria-preescolar/IMG_9468.webp" alt="Estudiantes de primaria utilizando tabletas educativas en el aula">
    <figcaption class="primary-mosaic__caption">
      <span>AULA DIGITAL</span>
      <p>Concentración y aprendizaje interactivo</p>
    </figcaption>
  </figure>
  <article class="primary-mosaic__item primary-mosaic__item--card primary-mosaic__item--navy">
    <span class="primary-card__tag">AUTONOMÍA Y RETOS</span>
    <h2>Aprender juntos abre nuevas posibilidades.</h2>
    <p>En primaria, cada jornada equilibra la disciplina académica con la alegría de descubrir. Fomentamos la lectura comprensiva, el razonamiento lógico y la expresión oral desde los primeros años.</p>
    <ul class="primary-card__list">
      <li><span class="primary-card__check">✓</span> Hábitos de estudio y lectura diaria</li>
      <li><span class="primary-card__check">✓</span> Pensamiento lógico y ciencias aplicadas</li>
      <li><span class="primary-card__check">✓</span> Proyectos colaborativos en el aula</li>
    </ul>
  </article>
  <article class="primary-mosaic__item primary-mosaic__item--card primary-mosaic__item--teal">
    <span class="primary-card__tag">VALORES Y COMUNIDAD</span>
    <h2>Crecimiento integral en un entorno seguro y cercano.</h2>
    <p>Más allá de las materias, cuidamos el carácter. Los momentos de receso, el diálogo constante con los maestros y los principios cristianos construyen una convivencia donde cada niño aprende a respetar, compartir y superarse.</p>
    <ul class="primary-card__list">
      <li><span class="primary-card__check">✓</span> Acompañamiento docente continuo</li>
      <li><span class="primary-card__check">✓</span> Espacios al aire libre y recreo activo</li>
      <li><span class="primary-card__check">✓</span> Trato basado en la fe y el respeto</li>
    </ul>
  </article>
  <figure class="primary-mosaic__item primary-mosaic__item--photo">
    <img src="assets/fotos/primaria-preescolar/IMG_9544.webp" alt="Docente y estudiantes de primaria conversando en el patio bajo los árboles">
    <figcaption class="primary-mosaic__caption">
      <span>VIDA ESTUDIANTIL</span>
      <p>Convivencia y diálogo al aire libre</p>
    </figcaption>
  </figure>
</section>`
);

// 7b. Generación Dedicada de Bachilleres (Educación Media: Ciencias, Informática, Comercio)
const bachilleresHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bachilleres | Colegio Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body class="level-page level-page--bachilleres">
  <!-- Enlace accesible de salto al contenido -->
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- Cabecera Institucional y Menú Modal -->
  ${visualHeader}

  <main id="contenido">
    <!-- Hero Interior: Bachilleratos con encuadre óptimo y fotografía real de secundaria -->
    <section class="interior-hero interior-hero--bachilleres">
      <img src="assets/fotos/secundaria/IMG_9582.webp" alt="Estudiantes de educación media en salón de clases interactivo en Colegio Buen Pastor Voz de Alerta">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>04 NIVELES ACADÉMICOS · EDUCACIÓN MEDIA</span>
        <h1>Tu vocación forjada con <mark>excelencia y propósito</mark>.</h1>
        <p>Tres bachilleratos oficiales orientados al éxito universitario: Ciencias, Informática y Comercio. Rigor académico preuniversitario, tecnología aplicada y formación ética cristiana para transformar el futuro de Panamá.</p>
        <div class="hero-actions">
          <a href="#especialidades" class="hero-btn-primary">Explorar Especialidades ↓</a>
          <a href="admisiones.html" class="hero-btn-outline">Proceso de Admisión →</a>
        </div>
      </div>
    </section>

    <!-- Barra de Accesos Rápidos entre Especialidades -->
    <nav class="tracks-nav-bar" aria-label="Especialidades de Bachillerato">
      <a href="#ciencias" class="tracks-nav-item">
        <span class="tracks-nav-num">01</span>
        <div class="tracks-nav-info">
          <strong class="tracks-nav-title">Bachillerato en Ciencias</strong>
          <span class="tracks-nav-sub">STEM, Salud e Ingenierías</span>
        </div>
      </a>
      <a href="#informatica" class="tracks-nav-item">
        <span class="tracks-nav-num">02</span>
        <div class="tracks-nav-info">
          <strong class="tracks-nav-title">Bachillerato en Informática</strong>
          <span class="tracks-nav-sub">Software, Redes y Robótica</span>
        </div>
      </a>
      <a href="#comercio" class="tracks-nav-item">
        <span class="tracks-nav-num">03</span>
        <div class="tracks-nav-info">
          <strong class="tracks-nav-title">Bachillerato en Comercio</strong>
          <span class="tracks-nav-sub">Finanzas, Gestión y Negocios</span>
        </div>
      </a>
    </nav>

    <!-- Presentación Editorial Preuniversitaria (Split Feature) -->
    <section class="split-feature">
      <img src="assets/fotos/secundaria/IMG_9550.webp" alt="Estudiantes de bachillerato en aula tecnológica con computadoras y pantalla interactiva">
      <div>
        <span class="section-number">EDUCACIÓN MEDIA OFICIAL</span>
        <h2>Formación Preuniversitaria con Estándares de Excelencia</h2>
        <p>En el Colegio Buen Pastor Voz de Alerta, el ciclo de bachillerato (10°, 11° y 12°) representa la consolidación de las competencias analíticas, creativas y humanas de nuestros estudiantes. Con planes de estudio avalados por el Ministerio de Educación (MEDUCA), docentes especializados y una metodología de alto rendimiento, preparamos a cada alumno para destacar en las universidades más prestigiosas del país e internacionales.</p>
        
        <div class="preuni-stats-strip">
          <div class="preuni-stat-box">
            <span class="preuni-stat-val">100<span>%</span></span>
            <span class="preuni-stat-lbl">Articulación Universitaria</span>
          </div>
          <div class="preuni-stat-box">
            <span class="preuni-stat-val">3</span>
            <span class="preuni-stat-lbl">Bachilleratos Oficiales</span>
          </div>
          <div class="preuni-stat-box">
            <span class="preuni-stat-val">MEDUCA</span>
            <span class="preuni-stat-lbl">Planes Certificados</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Showcase Tridimensional de Especialidades -->
    <section id="especialidades" class="tracks-showcase-section">
      <div class="bento-header">
        <span class="bento-tagline">Propuesta Curricular de Media</span>
        <h2 class="bento-title">Nuestras Tres Especialidades de Bachillerato</h2>
        <p class="bento-desc">Cada bachillerato combina formación técnica de vanguardia, laboratorios equipados y desarrollo integral del pensamiento crítico, fundamentados en valores cristianos.</p>
      </div>

      <!-- 01. BACHILLERATO EN CIENCIAS -->
      <article id="ciencias" class="track-showcase track-showcase--ciencias">
        <div class="track-media">
          <img src="assets/fotos/secundaria/IMG_9574.webp" alt="Estudiante resolviendo cálculo matricial en pantalla inteligente durante clase de ciencias">
          <div class="track-media-badge">
            <span class="badge-dot"></span>
            Laboratorio de Matemáticas & STEM
          </div>
        </div>
        <div class="track-content">
          <span class="track-tag track-tag--ciencias">CIENCIAS EXACTAS Y DE LA SALUD · STEM</span>
          <h3>Bachillerato en Ciencias</h3>
          <p class="track-quote">“Rigor analítico, experimentación en laboratorio y pensamiento lógico para liderar en ingeniería, medicina y tecnología.”</p>
          <p class="track-text">Diseñado para estudiantes con vocación científica y analítica. Nuestro programa articula biología experimental, química orgánica e inorgánica, física aplicada y cálculo diferencial e integral, dotando al alumno de una preparación sólida para superar los exámenes de admisión más exigentes en facultades de ciencias de la salud, tecnología y exactas.</p>
          
          <div class="track-competencies">
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                Química y Biología
              </span>
              <p class="track-comp-desc">Prácticas de laboratorio con instrumental analítico y método experimental.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                Cálculo y Álgebra
              </span>
              <p class="track-comp-desc">Dominio de matrices, funciones complejas y modelado matemático superior.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Física Experimental
              </span>
              <p class="track-comp-desc">Cinemática, dinámica, termodinámica y electromagnetismo aplicados.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                Bioética y Rigor
              </span>
              <p class="track-comp-desc">Investigación científica guiada por la ética y el respeto a la creación.</p>
            </div>
          </div>

          <div class="track-careers">
            <div class="careers-header-row">
              <span class="careers-label">Perfil de Salida / Carreras Universitarias</span>
              <span class="careers-hint">👆 Toca cada carrera para ver detalles</span>
            </div>
            <div class="careers-pills">
              <button type="button" class="career-pill" data-title="Medicina & Cirugía" data-desc="Diagnóstico, tratamiento clínico, prevención de enfermedades y preservación de la salud humana y comunitaria." data-bpvda="Prácticas continuas de laboratorio en biología celular, química orgánica y sólidos fundamentos de bioética." data-keys="Biología celular, Química orgánica, Bioética, Fisiología humana" aria-expanded="false">
                <span>Medicina & Cirugía</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Ingeniería Civil" data-desc="Planificación, cálculo estructural, diseño y supervisión de infraestructuras como puentes, carreteras, represas y edificaciones seguras." data-bpvda="Alto dominio en cálculo diferencial e integral, trigonometría aplicada y física mecánica experimental." data-keys="Cálculo avanzado, Física mecánica, Geometría analítica, Materiales" aria-expanded="false">
                <span>Ingeniería Civil</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Biotecnología" data-desc="Aplicación tecnológica y molecular de organismos vivos en salud genética, producción agroindustrial y remediación ambiental." data-bpvda="Experimentación rigurosa con el método científico, microbiología y análisis de procesos moleculares complejos." data-keys="Microbiología, Genética, Química analítica, Bioquímica" aria-expanded="false">
                <span>Biotecnología</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Electromecánica" data-desc="Integración sinérgica de diseño mecánico, circuitos eléctricos de potencia y sistemas de automatización industrial." data-bpvda="Comprensión de electromagnetismo, termodinámica y talleres de diseño de circuitos funcionales." data-keys="Circuitos eléctricos, Termodinámica, Mecánica analítica, Automatismos" aria-expanded="false">
                <span>Electromecánica</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Odontología" data-desc="Diagnóstico, prevención y tratamiento integral de afecciones estomatológicas, maxilofaciales y salud bucodental." data-bpvda="Destreza analítica y motricidad fina desarrollada en prácticas de laboratorio, junto a ciencias biológicas." data-keys="Anatomía craneal, Bioquímica, Histología, Farmacología básica" aria-expanded="false">
                <span>Odontología</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Arquitectura" data-desc="Diseño y construcción del hábitat humano, integrando estética funcional, sostenibilidad ambiental y viabilidad estructural." data-bpvda="Pensamiento espacial tridimensional, física de estructuras, geometría descriptiva y dibujo técnico analítico." data-keys="Diseño espacial, Geometría descriptiva, Cálculo, Urbanismo sostenible" aria-expanded="false">
                <span>Arquitectura</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Farmacia" data-desc="Investigación, formulación química, control de calidad y dispensación responsable de medicamentos terapéuticos." data-bpvda="Enfoque riguroso en química general e inorgánica, estequiometría analítica y farmacocinética elemental." data-keys="Química farmacéutica, Toxicología, Biología molecular, Bioética" aria-expanded="false">
                <span>Farmacia</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
            </div>
            
            <div class="career-popout" aria-hidden="true">
              <div class="career-popout__inner">
                <div class="career-popout__top">
                  <span class="career-popout__badge">INFORMACIÓN DE CARRERA</span>
                  <button type="button" class="career-popout__close" aria-label="Cerrar información de la carrera">✕</button>
                </div>
                <h4 class="career-popout__title"></h4>
                <p class="career-popout__desc"></p>
                <div class="career-popout__meta">
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Aporte Formativo BPVDA:</span>
                    <span class="career-popout__bpvda"></span>
                  </div>
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Áreas Curriculares Clave:</span>
                    <span class="career-popout__keys-list"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- 02. BACHILLERATO EN INFORMÁTICA -->
      <article id="informatica" class="track-showcase track-showcase--informatica track-showcase--reverse">
        <div class="track-media">
          <img src="assets/fotos/secundaria/robotics-2.webp" alt="Estudiantes en taller de robótica conectando multímetro y programando computadora">
          <div class="track-media-badge">
            <span class="badge-dot badge-dot--orange"></span>
            Robótica Educativa, Circuitos & Software
          </div>
        </div>
        <div class="track-content">
          <span class="track-tag track-tag--informatica">TECNOLOGÍA, SOFTWARE E INNOVACIÓN · EDUTECH</span>
          <h3>Bachillerato en Informática</h3>
          <p class="track-quote">“Desarrollo de software, robótica aplicada y pensamiento computacional para los creadores e innovadores de la era digital.”</p>
          <p class="track-text">Un programa activo y práctico enfocado en capacitar a las nuevas generaciones en los principios del desarrollo de software, robótica educativa, mantenimiento de hardware, redes telemáticas y ciberseguridad. A través del trabajo en proyectos reales, los alumnos adquieren competencias para crear soluciones tecnológicas con impacto.</p>
          
          <div class="track-competencies">
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                Programación y Código
              </span>
              <p class="track-comp-desc">Algoritmos, estructuras de datos y lógica aplicada al desarrollo de software.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                Robótica y Mecatrónica
              </span>
              <p class="track-comp-desc">Integración de microcontroladores, sensores y automatización práctica.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                Redes y Conectividad
              </span>
              <p class="track-comp-desc">Configuración de redes LAN, protocolos IP y soporte de infraestructura.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                Seguridad de Datos
              </span>
              <p class="track-comp-desc">Protección de información, privacidad en la nube y ética digital.</p>
            </div>
          </div>

          <div class="track-careers">
            <div class="careers-header-row">
              <span class="careers-label">Perfil de Salida / Carreras Universitarias</span>
              <span class="careers-hint">👆 Toca cada carrera para ver detalles</span>
            </div>
            <div class="careers-pills">
              <button type="button" class="career-pill" data-title="Ingeniería de Software" data-desc="Diseño sistemático, desarrollo, pruebas y mantenimiento de plataformas en la nube, aplicaciones complejas y software a gran escala." data-bpvda="Fundamentos de lógica computacional, algoritmia estructurada y programación orientada a objetos en proyectos reales." data-keys="Algoritmos, Arquitectura de software, Bases de datos, Metodologías ágiles" aria-expanded="false">
                <span>Ingeniería de Software</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Ciencias de la Computación" data-desc="Estudio científico de la computación, estructuras de datos avanzadas, diseño algorítmico, teoría de autómatas y criptografía." data-bpvda="Matemáticas discretas, resolución de problemas algorítmicos complejos y modelado conceptual abstracto." data-keys="Estructuras de datos, Teoría de autómatas, Lógica matemática, Optimización" aria-expanded="false">
                <span>Ciencias de la Computación</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Ciberseguridad" data-desc="Protección de infraestructuras críticas, mitigación de vulnerabilidades cibernéticas, defensa perimetral y auditoría forense digital." data-bpvda="Configuración de redes de comunicaciones, protocolos IP, principios de cifrado y normativas de ética digital." data-keys="Criptografía, Seguridad de redes, Ethical hacking, Respuesta a incidentes" aria-expanded="false">
                <span>Ciberseguridad</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Robótica & Automatización" data-desc="Integración de mecatrónica, sensores electrónicos y programación para crear dispositivos y mecanismos autónomos o industriales." data-bpvda="Uso continuo de microcontroladores, sensores analógicos/digitales y ensamblaje de prototipos mecánicos en aula." data-keys="Microcontroladores, Sensores, Cinemática robótica, Control automático" aria-expanded="false">
                <span>Robótica & Automatización</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Telecomunicaciones" data-desc="Diseño y transmisión de señales digitales y electromagnéticas mediante fibra óptica, enlaces satelitales y redes inalámbricas." data-bpvda="Topologías de red, cableado estructurado, direccionamiento IP y conmutación de paquetes telemáticos." data-keys="Fibra óptica, Redes inalámbricas, Telefonía IP, Ondas electromagnéticas" aria-expanded="false">
                <span>Telecomunicaciones</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Inteligencia Artificial" data-desc="Desarrollo de modelos predictivos, redes neuronales y algoritmos de aprendizaje automático para resolver retos cognitivos complejos." data-bpvda="Lógica matemática superior, estadística analítica, manejo estructurado de datos y programación de algoritmos." data-keys="Machine learning, Procesamiento de datos, Redes neuronales, Visión por computadora" aria-expanded="false">
                <span>Inteligencia Artificial</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
            </div>
            
            <div class="career-popout" aria-hidden="true">
              <div class="career-popout__inner">
                <div class="career-popout__top">
                  <span class="career-popout__badge">INFORMACIÓN DE CARRERA</span>
                  <button type="button" class="career-popout__close" aria-label="Cerrar información de la carrera">✕</button>
                </div>
                <h4 class="career-popout__title"></h4>
                <p class="career-popout__desc"></p>
                <div class="career-popout__meta">
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Aporte Formativo BPVDA:</span>
                    <span class="career-popout__bpvda"></span>
                  </div>
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Áreas Curriculares Clave:</span>
                    <span class="career-popout__keys-list"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- 03. BACHILLERATO EN COMERCIO -->
      <article id="comercio" class="track-showcase track-showcase--comercio">
        <div class="track-media">
          <img src="assets/fotos/secundaria/IMG_9531.webp" alt="Estudiantes de educación media en aula activa con computadoras portátiles y material didáctico">
          <div class="track-media-badge">
            <span class="badge-dot badge-dot--gold"></span>
            Gestión Empresarial, Finanzas & Proyectos
          </div>
        </div>
        <div class="track-content">
          <span class="track-tag track-tag--comercio">GESTIÓN EMPRESARIAL, FINANZAS Y LIDERAZGO</span>
          <h3>Bachillerato en Comercio</h3>
          <p class="track-quote">“Visión de negocios, rigor contable y gestión estratégica con ética cristiana para liderar en el sector corporativo y financiero.”</p>
          <p class="track-text">Especialidad orientada a la formación de líderes con capacidad de análisis económico, dominio contable y visión emprendedora. Los estudiantes aprenden contabilidad general, bancaria y computarizada, administración de empresas, finanzas y el marco legal comercial y tributario de Panamá, preparándose para desempeñarse con éxito en la economía actual.</p>
          
          <div class="track-competencies">
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                Contabilidad Financiera
              </span>
              <p class="track-comp-desc">Libros contables, balances, conciliaciones bancarias y software financiero.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Gestión de Empresas
              </span>
              <p class="track-comp-desc">Planificación corporativa, desarrollo organizacional y toma de decisiones.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
                Legislación y Tributos
              </span>
              <p class="track-comp-desc">Código de comercio, normativas laborales y régimen fiscal panameño.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Planes de Negocio
              </span>
              <p class="track-comp-desc">Modelos de emprendimiento sostenible, presupuestos y costos comerciales.</p>
            </div>
          </div>

          <div class="track-careers">
            <div class="careers-header-row">
              <span class="careers-label">Perfil de Salida / Carreras Universitarias</span>
              <span class="careers-hint">👆 Toca cada carrera para ver detalles</span>
            </div>
            <div class="careers-pills">
              <button type="button" class="career-pill" data-title="Banca y Finanzas" data-desc="Administración estratégica del capital, análisis de riesgos crediticios, valoración de inversiones y regulación de mercados financieros." data-bpvda="Operaciones bancarias, matemáticas financieras, cálculo de tasas de interés y conciliaciones de cuentas." data-keys="Evaluación de proyectos, Mercados bursátiles, Análisis crediticio, Finanzas corporativas" aria-expanded="false">
                <span>Banca y Finanzas</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Contaduría Pública Autorizada (CPA)" data-desc="Registro sistemático, análisis e interpretación de estados contables, auditoría fiscal independiente y cumplimiento tributario oficial." data-bpvda="Dominio del ciclo contable completo, balances generales, software contable computarizado y leyes fiscales de Panamá." data-keys="Auditoría externa, Contabilidad tributaria, Normas NIIF, Costos y presupuestos" aria-expanded="false">
                <span>Contaduría Pública Autorizada (CPA)</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Administración de Empresas" data-desc="Planificación, organización, dirección y control de organizaciones para maximizar su eficiencia, rentabilidad e impacto humano." data-bpvda="Métodos de gestión organizacional, liderazgo con valores cristianos, formulación de proyectos y toma de decisiones." data-keys="Gestión del talento, Planeación estratégica, Dirección comercial, Desarrollo corporativo" aria-expanded="false">
                <span>Administración de Empresas</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Comercio Internacional" data-desc="Operaciones de importación y exportación, régimen aduanero, tratados de libre comercio y transporte multimodal en el hub panameño." data-bpvda="Normativa comercial panameña e internacional, Incoterms, logística de carga y geografía económica mundial." data-keys="Logística portuaria, Aranceles y aduanas, Negociación internacional, Comercio marítimo" aria-expanded="false">
                <span>Comercio Internacional</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Mercadeo & Logística" data-desc="Estudio del comportamiento del consumidor, estrategias de comercialización digital, distribución física y cadenas de suministro." data-bpvda="Diseño de propuestas comerciales sostenibles, estimación de costos y técnicas de comunicación efectiva." data-keys="Marketing digital, Cadena de suministro (SCM), Investigación de mercados, Branding" aria-expanded="false">
                <span>Mercadeo & Logística</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Economía" data-desc="Análisis de la producción, distribución y consumo de bienes y servicios, formulación de políticas monetarias y tendencias globales." data-bpvda="Pensamiento crítico sobre indicadores económicos, análisis estadístico y comprensión del entorno financiero del país." data-keys="Macroeconomía, Microeconomía, Econometría, Políticas públicas" aria-expanded="false">
                <span>Economía</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
            </div>
            
            <div class="career-popout" aria-hidden="true">
              <div class="career-popout__inner">
                <div class="career-popout__top">
                  <span class="career-popout__badge">INFORMACIÓN DE CARRERA</span>
                  <button type="button" class="career-popout__close" aria-label="Cerrar información de la carrera">✕</button>
                </div>
                <h4 class="career-popout__title"></h4>
                <p class="career-popout__desc"></p>
                <div class="career-popout__meta">
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Aporte Formativo BPVDA:</span>
                    <span class="career-popout__bpvda"></span>
                  </div>
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Áreas Curriculares Clave:</span>
                    <span class="career-popout__keys-list"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Ecosistema Preuniversitario BPVDA (Bento de Alto Contraste) -->
    <section class="preuni-section">
      <div class="preuni-header">
        <span class="bento-tagline">El Valor Añadido BPVDA</span>
        <h2 class="bento-title">Ecosistema Preuniversitario Integral</h2>
        <p class="bento-desc">Respaldamos cada itinerario vocacional con recursos pedagógicos de alto nivel, acompañamiento psicopedagógico y una visión clara de éxito para la educación superior.</p>
      </div>

      <div class="preuni-grid">
        <article class="preuni-card">
          <div class="preuni-card-num">01</div>
          <h4>Simulacros y Admisión Universitaria</h4>
          <p>Entrenamiento continuo en razonamiento verbal, numérico y pruebas de aptitud académica orientadas a los exámenes de ingreso de la UP, UTP y universidades privadas.</p>
        </article>

        <article class="preuni-card">
          <div class="preuni-card-num">02</div>
          <h4>Aulas Digitales y Laboratorios</h4>
          <p>Salones equipados con pantallas inteligentes interactivas, kits de robótica educativa y herramientas informáticas que potencian el aprendizaje colaborativo.</p>
        </article>

        <article class="preuni-card">
          <div class="preuni-card-num">03</div>
          <h4>Orientación Vocacional Personalizada</h4>
          <p>Acompañamiento psicopedagógico especializado a lo largo de 10°, 11° y 12° grado para definir aptitudes, intereses y metas profesionales con seguridad.</p>
        </article>

        <article class="preuni-card">
          <div class="preuni-card-num">04</div>
          <h4>Liderazgo Ético y Carácter Cristiano</h4>
          <p>Formación fundamentada en valores bíblicos de integridad, disciplina, servicio y respeto al prójimo, preparando ciudadanos que transformen positivamente la sociedad.</p>
        </article>
      </div>
    </section>

    <!-- Testimonio Vocacional de Graduandos BPVDA -->
    <section class="student-voice">
      <div class="student-voice__inner">
        <span class="student-voice__mark" aria-hidden="true">“</span>
        <blockquote>Elegir mi bachillerato en BPVDA me dio las herramientas y la confianza para afrontar la universidad con excelencia. Los docentes no solo enseñan contenidos: te acompañan a descubrir tu vocación profesional con principios que perduran.</blockquote>
        <div class="student-voice__author">
          <strong>Voz de Graduando BPVDA</strong>
          <span>Educación Media · Colegio Buen Pastor Voz de Alerta</span>
        </div>
      </div>
    </section>

    <!-- Convocatoria y Hub de Admisiones Preuniversitario -->
    <section class="preuni-admissions-hub">
      <div class="preuni-hub-container">
        
        <!-- Columna Izquierda: Propuesta Formativa y Garantías Académicas -->
        <div class="preuni-hub-left">
          <h2 class="preuni-hub-title">Tu Proyección Universitaria Comienza con una Base Sólida</h2>
          
          <p class="preuni-hub-desc">
            Elegir la especialidad correcta en 10°, 11° y 12° grado define tu éxito en la educación superior. En BPVDA combinamos programas certificados por MEDUCA con acompañamiento vocacional permanente, laboratorios avanzados y una sólida formación ética.
          </p>

          <div class="preuni-guarantees-list">
            <div class="preuni-guarantee-item">
              <div class="preuni-guarantee-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <strong>Articulación Directa con Admisiones (UTP · UP · USMA)</strong>
                <p>Módulos de refuerzo en cálculo, ciencias, redacción académica y lógica analítica para asegurar altos puntajes de ingreso universitario.</p>
              </div>
            </div>

            <div class="preuni-guarantee-item">
              <div class="preuni-guarantee-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <strong>Prácticas Reales en Laboratorios y Software Especializado</strong>
                <p>Experimentación en ciencias, desarrollo de proyectos informáticos, robótica y contabilidad computarizada aplicada.</p>
              </div>
            </div>

            <div class="preuni-guarantee-item">
              <div class="preuni-guarantee-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <strong>Orientación Vocacional y Acompañamiento Personalizado</strong>
                <p>Evaluación diagnóstica de aptitudes para que cada estudiante seleccione el bachillerato afín a su proyecto de vida.</p>
              </div>
            </div>
          </div>

          <div class="preuni-hub-actions">
            <a href="admisiones.html" class="hero-btn-primary">Iniciar Proceso de Admisión →</a>
            <a href="contacto.html" class="hero-btn-outline">Consultar con Secretaría Académica</a>
          </div>
        </div>

        <!-- Columna Derecha: Tarjeta de Ruta de Admisión y Contacto -->
        <div class="preuni-hub-right">
          <div class="preuni-roadmap-card">
            <div class="preuni-roadmap-header">
              <span class="preuni-roadmap-tag">RUTA PASO A PASO</span>
              <h3>Proceso de Ingreso a Media</h3>
              <p>Itinerario guiado para estudiantes de nuevo ingreso y traslados.</p>
            </div>

            <ol class="preuni-steps-list">
              <li class="preuni-step-item">
                <span class="preuni-step-badge">1</span>
                <div>
                  <strong>Revisión de Requisitos y Créditos</strong>
                  <p>Presentación de historial académico y asesoría inicial sobre las especialidades disponibles.</p>
                </div>
              </li>
              <li class="preuni-step-item">
                <span class="preuni-step-badge">2</span>
                <div>
                  <strong>Diagnóstico Académico y Entrevista</strong>
                  <p>Sesión diagnóstica de competencias y entrevista con el equipo pedagógico y pastoral.</p>
                </div>
              </li>
              <li class="preuni-step-item">
                <span class="preuni-step-badge">3</span>
                <div>
                  <strong>Matrícula y Asignación de Especialidad</strong>
                  <p>Formalización de cupo en Ciencias, Informática o Comercio con entrega del plan de estudio oficial.</p>
                </div>
              </li>
            </ol>

            <div class="preuni-direct-contact">
              <span class="preuni-contact-label">CANALES DE ATENCIÓN DIRECTA</span>
              <div class="preuni-contact-links">
                <a href="tel:+5073915811" class="preuni-contact-item">
                  <span class="preuni-contact-icon">📞</span>
                  <div>
                    <span class="contact-sub">Central Telefónica</span>
                    <strong>(507) 391-5811</strong>
                  </div>
                </a>
                <a href="mailto:info@buenpastor-vda.net" class="preuni-contact-item">
                  <span class="preuni-contact-icon">✉️</span>
                  <div>
                    <span class="contact-sub">Correo Oficial</span>
                    <strong>info@buenpastor-vda.net</strong>
                  </div>
                </a>
              </div>
              <div class="preuni-office-hours">
                <span>📍 Sede 24 de Diciembre, Calle San José · Lunes a Viernes 7:00 a.m. – 3:00 p.m.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>

  <!-- Pie de Página Institucional Enriquecido -->
  ${richFooter}

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;

writeFileSync(join(root, 'bachilleres.html'), bachilleresHtml);

// 8. Actualizar Cabecera de Portada (index.html)
const indexPath = join(root, 'index.html');
const indexContent = readFileSync(indexPath, 'utf8');
const headerStart = indexContent.indexOf('<header class="site-header">');
const headerEnd = indexContent.indexOf('</header>', headerStart) + 9;

if (headerStart !== -1 && headerEnd !== -1) {
  const links = {
    'mision.html': 'filosofia.html',
    'vision.html': 'secundaria.html',
    'nosotros.html': 'quienes-somos.html',
    'curriculo.html': 'ecosistema-digital.html',
    'actividades.html': 'vida-estudiantil.html',
    'admision.html': 'admisiones.html',
    'admision.html#preguntas': 'contacto.html'
  };

  let updatedIndex = indexContent.slice(0, headerStart) + visualHeader + indexContent.slice(headerEnd);
  for (const [from, to] of Object.entries(links)) {
    updatedIndex = updatedIndex.replaceAll(`href="${from}"`, `href="${to}"`);
  }
  writeFileSync(indexPath, updatedIndex);
}

console.log('✅ Páginas y navegación actualizadas con éxito desde plantillas modulares.');

