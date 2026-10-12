import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const templatesDir = join(root, 'tools', 'templates');

// 1. Definición de los 5 Pilares y Enlaces de Navegación (Orden Pedagógico Natural)
const groups = [
  {
    num: '01',
    title: 'Nuestra Escuela',
    links: [
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
  },
  {
    num: '04',
    title: 'Enfoque Educativo',
    links: [
      ['SAI BPVDA', 'sai.html'],
      ['Vida estudiantil', 'vida-estudiantil.html'],
      ['Ecosistema digital', 'ecosistema-digital.html']
    ]
  },
  {
    num: '05',
    title: 'Familia y Comunidad',
    links: [
      ['Admisiones y matrícula', 'admisiones.html'],
      ['Portal de padres', 'portal-padres.html'],
      ['Contacto y atención', 'contacto.html']
    ]
  }
];

// 2. Construcción de Columnas de Navegación (Diseño Nítido y Natural)
const menuGroupsHtml = groups
  .map(g =>
    `<div class="menu-group">
      <div class="menu-group-header">
        <span class="menu-group-num">${g.num}</span>
        <h3 class="menu-group-title">${g.title}</h3>
      </div>
      <ul class="menu-list">` +
    g.links.map(([name, url]) =>
      `<li><a href="${url}" class="menu-link"><span class="menu-link-text">${name}</span><i class="menu-chevron" aria-hidden="true">↗</i></a></li>`
    ).join('') +
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
  ['quienes-somos.html', '¿Quiénes somos?', '01 NUESTRA ESCUELA', 'Una comunidad que educa con <mark>propósito</mark>.', 'assets/fotos/institucional/community.webp', 'assets/fotos/institucional/recognition.webp', 'Conoce la historia, el compromiso y la comunidad que hacen posible BPVDA.'],
  ['filosofia.html', 'Propósito BPVDA', '01 NUESTRA ESCUELA', 'Valores que orientan cada <mark>decisión</mark>.', 'assets/fotos/institucional/mission.webp', 'assets/fotos/institucional/mission.webp', 'Misión, visión y principios cristianos que sostienen nuestra propuesta educativa.'],
  ['instalaciones.html', 'Instalaciones', '01 NUESTRA ESCUELA', 'Espacios para aprender, convivir y <mark>crecer</mark>.', 'assets/fotos/exterior/IMG_9374.webp', 'assets/fotos/exterior/campus-restzone.webp', 'Conoce los espacios que reciben diariamente a nuestra comunidad escolar.'],
  ['plantel.html', 'Plantel docente', '01 NUESTRA ESCUELA', 'Educadores que inspiran y <mark>guían</mark>.', 'assets/fotos/primaria-preescolar/IMG_9484.webp', 'assets/fotos/primaria-preescolar/IMG_9489.webp', 'Un equipo comprometido con acompañar los procesos y talentos de cada estudiante.'],
  ['secundaria.html', 'Secundaria y Bachilleres', '03 SECUNDARIA Y BACHILLERES', 'Preparación para los retos que <mark>vienen</mark>.', 'assets/fotos/secundaria/IMG_9504.webp', 'assets/fotos/secundaria/IMG_9510.webp', 'Secundaria y bachillerato para impulsar habilidades, propósito y futuro.'],
  ['sai.html', 'SAI BPVDA', '04 ENFOQUE EDUCATIVO', 'Todo el aprendizaje, en un mismo <mark>lugar</mark>.', 'assets/new/alliances/SAI logo oficial.jpg', 'assets/new/sai/Captura de pantalla 2026-09-12 135920.png', 'SAI centraliza las herramientas, actividades y comunicaciones importantes para nuestra comunidad.'],
  ['vida-estudiantil.html', 'Vida estudiantil', '04 ENFOQUE EDUCATIVO', 'Talentos que se convierten en <mark>experiencias</mark>.', 'assets/fotos/secundaria/IMG_9585.webp', 'assets/fotos/secundaria/IMG_9575.webp', 'Proyectos, actividades, cultura, deporte y logros que enriquecen la vida escolar.'],
  ['ecosistema-digital.html', 'Ecosistema digital', '04 ENFOQUE EDUCATIVO', 'Herramientas para aprender sin <mark>límites</mark>.', 'assets/fotos/secundaria/IMG_9514.webp', 'assets/fotos/secundaria/IMG_9511.webp', 'Una red de plataformas que acompaña el aprendizaje dentro y fuera del aula.'],
  ['portal-padres.html', 'Portal de padres', '05 FAMILIA Y COMUNIDAD', 'Información escolar al alcance de tu <mark>familia</mark>.', 'assets/new/alliances/Edvoice1.webp', 'assets/fotos/institucional/client-atention.webp', 'Accesos directos a las plataformas donde las familias consultan información académica.'],
  ['contacto.html', 'Contacto y atención', '05 FAMILIA Y COMUNIDAD', 'Estamos aquí para <mark>orientarte</mark>.', 'assets/fotos/exterior/campus-exterior.webp', 'assets/fotos/institucional/client-atention.webp', 'Canales directos para conversar, visitar y conocer la comunidad BPVDA.']
];

const visualSets = {
  '¿Quiénes somos?': [
    'assets/fotos/institucional/achievement.webp',
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
    'assets/fotos/institucional/community.webp',
    'assets/fotos/exterior/campus-main.webp',
    'assets/fotos/institucional/admision.webp',
    'assets/fotos/institucional/culture.webp',
    'assets/fotos/exterior/campus-restzone.webp',
    'assets/fotos/institucional/achievement.webp'
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

const carouselMeta = {
  'Contacto y atención': [
    { tag: 'COMUNIDAD', caption: 'Una comunidad que te respalda y te acompaña.' },
    { tag: 'CAMPUS', caption: 'Instalaciones preparadas para recibir a tu familia.' },
    { tag: 'ORIENTACIÓN', caption: 'Atención cercana en cada consulta y trámite.' },
    { tag: 'VALORES', caption: 'Formación integral que inspira vidas.' },
    { tag: 'CONVIVENCIA', caption: 'Espacios seguros diseñados para aprender y compartir.' },
    { tag: 'FUTURO', caption: 'Guiando los pasos de las nuevas generaciones.' }
  ],
  'default': [
    { tag: 'PROPÓSITO', caption: 'Un entorno diseñado para descubrir y trascender.' },
    { tag: 'LOGROS', caption: 'Cada paso es una meta formativa alcanzada.' },
    { tag: 'COMUNIDAD', caption: 'Una comunidad educativa que te respalda.' },
    { tag: 'INNOVACIÓN', caption: 'Tecnología y pedagogía presentes en cada aula.' },
    { tag: 'LIDERAZGO', caption: 'Formando a los líderes del mañana con valores.' },
    { tag: 'CRECIMIENTO', caption: 'Creciendo juntos con dedicación cada día.' }
  ]
};

const cards = (title) => {
  const images = visualSets[title] || visualSets['¿Quiénes somos?'];
  const metaList = carouselMeta[title] || carouselMeta['default'];

  const renderCard = (img, i) => {
    const meta = metaList[i % metaList.length];
    return `
        <article class="carousel-v3__card">
          <img src="${img}" alt="${meta.caption}" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              ${meta.tag}
            </span>
            <h3>${meta.caption}</h3>
          </div>
        </article>`;
  };

  const groupHtml = images.map((img, i) => renderCard(img, i)).join('');

  return `
<section class="content-cards section-pad">
  <article class="content-card">
    <div class="content-card__head">
      <div class="content-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
      </div>
      <span class="content-card__tag">01 · Propósito</span>
    </div>
    <h3>Una propuesta con propósito</h3>
    <p>Aquí se incorporará el contenido institucional final de ${title}.</p>
    <div class="content-card__foot">
      <span>Enfoque formativo</span>
      <b>→</b>
    </div>
  </article>

  <article class="content-card">
    <div class="content-card__head">
      <div class="content-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      </div>
      <span class="content-card__tag">02 · Acompañamiento</span>
    </div>
    <h3>Experiencias que acompañan</h3>
    <p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p>
    <div class="content-card__foot">
      <span>Ruta de aprendizaje</span>
      <b>→</b>
    </div>
  </article>

  <article class="content-card">
    <div class="content-card__head">
      <div class="content-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <span class="content-card__tag">03 · Comunidad</span>
    </div>
    <h3>Una comunidad cercana</h3>
    <p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p>
    <div class="content-card__foot">
      <span>Alianza familiar</span>
      <b>→</b>
    </div>
  </article>
</section>
<section class="carousel-v3" aria-label="Galería visual de momentos BPVDA">
  <div class="carousel-v3__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza o disfruta del recorrido continuo por los espacios y vivencias de nuestra comunidad educativa.</p>
  </div>
  <div class="carousel-v3__track-container">
    <div class="carousel-v3__track">
      <div class="carousel-v3__group">
        ${groupHtml}
      </div>
      <div class="carousel-v3__group" aria-hidden="true">
        ${groupHtml}
      </div>
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
  if (file === 'secundaria.html') {
    return `<section class="student-voice section-pad">
  <blockquote>“Aquí se incorporará una cita real de un estudiante sobre su experiencia en BPVDA.”</blockquote>
  <span>ESTUDIANTE BPVDA</span>
</section>
<section class="media-placeholder section-pad">
  <h2>Graduaciones y momentos que dejan huella.</h2>
  <p>Espacio preparado para videos y fotografías oficiales.</p>
</section>`;
  }
  return '';
};

// 5. Generación de Páginas Interiores Estándar
for (const [file, title, eyebrow, hero, heroImage, splitImage, intro] of data.filter(entry => entry[0] !== 'filosofia.html')) {
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
    <!-- Hero Institucional con Imagen Fija de Alta Calidad -->
    <section class="purpose-fade">
      <div class="purpose-fade__images">
        <img class="is-active" src="assets/fotos/institucional/mission.webp" alt="Estudiante BPVDA en auditorio institucional">
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

// 7. Generación de Páginas por Niveles Educativos
const levelPage = (file, title, hero, lead, photos, body, levelPillar = '02 PREESCOLAR Y PRIMARIA') => {
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
        <span>${levelPillar}</span>
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
  ['assets/fotos/primaria-preescolar/IMG_9494.webp', 'assets/fotos/primaria-preescolar/IMG_9538.webp', 'assets/fotos/primaria-preescolar/IMG_9540.webp', 'assets/fotos/primaria-preescolar/IMG_9542.webp'],
  `<section id="experiencias" class="primary-statement">
  <div>
    <span>PRIMARIA</span>
    <h2>Conocimiento que cobra sentido.</h2>
  </div>
  <p>En primaria, cada experiencia invita a pensar, colaborar y desarrollar autonomía. Aquí se incorporará la descripción institucional de metodologías, áreas y proyectos.</p>
</section>
<section class="primary-mosaic">
  <img src="assets/fotos/primaria-preescolar/IMG_9538.webp" alt="Estudiantes en proyectos de primaria">
  <img src="assets/fotos/primaria-preescolar/IMG_9540.webp" alt="Actividades académicas de primaria">
  <div>
    <h2>Aprender juntos abre nuevas posibilidades.</h2>
    <p>Retos, lectura, creatividad y experiencias que conectan con la vida.</p>
  </div>
  <img src="assets/fotos/primaria-preescolar/IMG_9542.webp" alt="Compañerismo y aprendizaje en primaria">
</section>`
);

levelPage(
  'bachilleres.html',
  'Bachilleres',
  'Preparación para decidir con <mark>propósito</mark>.',
  'Página preparada para la propuesta específica de Bachilleres.',
  ['assets/fotos/secundaria/IMG_9505.webp'],
  `<section class="primary-statement">
  <div>
    <span>03 SECUNDARIA Y BACHILLERES</span>
    <h2>Una etapa orientada al futuro.</h2>
  </div>
  <p>Aquí se incorporará el contenido institucional de Bachilleres.</p>
</section>`,
  '03 SECUNDARIA Y BACHILLERES'
);

// 8. Actualizar Cabecera de Portada (index.html) y Admisiones (admisiones.html)
const updatePageHeader = (filePath) => {
  try {
    const content = readFileSync(filePath, 'utf8');
    const headerStart = content.indexOf('<header class="site-header">');
    const headerEnd = content.indexOf('</header>', headerStart) + 9;

    if (headerStart !== -1 && headerEnd !== -1) {
      let updated = content.slice(0, headerStart) + visualHeader + content.slice(headerEnd);
      writeFileSync(filePath, updated);
    }
  } catch (e) {
    console.error(`Error actualizando cabecera en ${filePath}:`, e);
  }
};

updatePageHeader(join(root, 'index.html'));
updatePageHeader(join(root, 'admisiones.html'));

console.log('✅ Páginas y navegación actualizadas con éxito desde plantillas modulares.');

