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
for (const [file, title, eyebrow, hero, heroImage, splitImage, intro] of data.filter(entry => entry[0] !== 'filosofia.html' && entry[0] !== 'secundaria.html')) {
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
    <!-- Hero Interactivo con Secuencia de Fundido Fotográfico (Crossfade) -->
    <section class="purpose-fade">
      <div class="purpose-fade__images">
        <img class="is-active" src="assets/new/purpose/IMG_1963.JPG" alt="Estudiante BPVDA con uniforme">
        <img src="assets/new/purpose/IMG_1966.JPG" alt="Estudiante BPVDA con uniforme">
        <img src="assets/new/purpose/IMG_1991.JPG" alt="Estudiante BPVDA con uniforme">
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
        <div>
          <span>02</span>
          <h2>Misión</h2>
          <p>Brindar una formación de excelencia que fortalezca las capacidades de cada estudiante y lo prepare para servir con propósito.</p>
        </div>
        <img src="assets/new/purpose/IMG_1627.JPG" alt="Estudiante BPVDA">
      </article>
      <article class="purpose-pillar purpose-pillar--vision">
        <img src="assets/new/purpose/IMG_1655.JPG" alt="Estudiante BPVDA">
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

