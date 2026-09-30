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
    '04 PRIMARIA',
    [
      ['Prekínder', 'prekinder.html'],
      ['Kínder', 'kinder.html'],
      ['Primaria', 'primaria.html']
    ]
  ],
  [
    '05 SECUNDARIA Y BACHILLERES',
    [
      ['Secundaria', 'secundaria.html'],
      ['Bachilleres', 'bachilleres.html']
    ]
  ]
];

// 2. Construcción de Grupos de Menú
const menuGroupsHtml = groups
  .map(([title, links]) =>
    `<section><span>${title}</span>` +
    links.map(([name, url]) => `<a href="${url}">${name}<b>↗</b></a>`).join('') +
    `</section>`
  )
  .join('');

// 3. Cargar y compilar Plantillas
const headerTemplate = readFileSync(join(templatesDir, 'header.html'), 'utf8');
const visualHeader = headerTemplate.replace('{{MENU_GROUPS}}', menuGroupsHtml).trim();
const richFooter = readFileSync(join(templatesDir, 'footer.html'), 'utf8').trim();

// 4. Catálogo de Datos para Páginas Interiores
const data = [
  ['quienes-somos.html', '¿Quiénes somos?', '01 NUESTRA ESCUELA', 'Una comunidad que educa con <mark>propósito</mark>.', 'assets/new/IMG_9370.webp', 'Conoce la historia, el compromiso y la comunidad que hacen posible BPVDA.'],
  ['filosofia.html', 'Propósito BPVDA', '01 NUESTRA ESCUELA', 'Valores que orientan cada <mark>decisión</mark>.', 'assets/media/mission.webp', 'Misión, visión y principios cristianos que sostienen nuestra propuesta educativa.'],
  ['instalaciones.html', 'Instalaciones', '01 NUESTRA ESCUELA', 'Espacios para aprender, convivir y <mark>crecer</mark>.', 'assets/new/IMG_9413.webp', 'Conoce los espacios que reciben diariamente a nuestra comunidad escolar.'],
  ['plantel.html', 'Plantel docente', '01 NUESTRA ESCUELA', 'Educadores que inspiran y <mark>guían</mark>.', 'assets/new/IMG_9538.webp', 'Un equipo comprometido con acompañar los procesos y talentos de cada estudiante.'],
  ['sai.html', 'SAI BPVDA', '02 ENFOQUE EDUCATIVO', 'Todo el aprendizaje, en un mismo <mark>lugar</mark>.', 'assets/new/alliances/SAI logo oficial.jpg', 'SAI centraliza las herramientas, actividades y comunicaciones importantes para nuestra comunidad.'],
  ['vida-estudiantil.html', 'Vida estudiantil', '02 ENFOQUE EDUCATIVO', 'Talentos que se convierten en <mark>experiencias</mark>.', 'assets/new/achievements/IMG_7544.JPG', 'Proyectos, actividades, cultura, deporte y logros que enriquecen la vida escolar.'],
  ['ecosistema-digital.html', 'Ecosistema digital', '02 ENFOQUE EDUCATIVO', 'Herramientas para aprender sin <mark>límites</mark>.', 'assets/new/alliances/Edvoice1.webp', 'Una red de plataformas que acompaña el aprendizaje dentro y fuera del aula.'],
  ['admisiones.html', 'Admisiones y matrícula', '03 FAMILIA Y COMUNIDAD', 'El primer paso hacia una educación con <mark>propósito</mark>.', 'assets/media/admision-main.webp', 'Conoce el proceso de admisión y recibe orientación directa de nuestro equipo.'],
  ['portal-padres.html', 'Portal de padres', '03 FAMILIA Y COMUNIDAD', 'Información escolar al alcance de tu <mark>familia</mark>.', 'assets/new/sai/Captura de pantalla 2026-09-12 135920.png', 'Accesos directos a las plataformas donde las familias consultan información académica.'],
  ['contacto.html', 'Contacto y atención', '03 FAMILIA Y COMUNIDAD', 'Estamos aquí para <mark>orientarte</mark>.', 'assets/media/campus-exterior.webp', 'Canales directos para conversar, visitar y conocer la comunidad BPVDA.'],
  ['secundaria.html', 'Secundaria y Bachilleres', '05 SECUNDARIA Y BACHILLERES', 'Preparación para los retos que <mark>vienen</mark>.', 'assets/media/science-student.webp', 'Secundaria y bachillerato para impulsar habilidades, propósito y futuro.']
];

const visualSets = {
  '¿Quiénes somos?': ['assets/media/community.webp', 'assets/new/IMG_9370.webp', 'assets/new/IMG_9413.webp'],
  'Propósito BPVDA': ['assets/media/mission.webp', 'assets/media/culture.webp', 'assets/media/learn-mind.webp'],
  'Instalaciones': ['assets/new/IMG_9413.webp', 'assets/new/IMG_9484.webp', 'assets/new/IMG_9538.webp'],
  'Plantel docente': ['assets/new/teachers/1.png', 'assets/new/teachers/2.png', 'assets/new/teachers/3.png'],
  'SAI BPVDA': ['assets/new/sai/Captura de pantalla 2026-09-12 135528.png', 'assets/new/sai/Captura de pantalla 2026-09-12 135545.png', 'assets/new/sai/Captura de pantalla 2026-09-12 135920.png'],
  'Vida estudiantil': ['assets/new/achievements/IMG_7544.JPG', 'assets/new/achievements/IMG_7549.JPG', 'assets/new/achievements/IMG_7550.JPG'],
  'Ecosistema digital': ['assets/new/alliances/Canva1.webp', 'assets/new/alliances/Edvoice1.webp', 'assets/new/alliances/Progrentis1.png'],
  'Admisiones y matrícula': ['assets/media/admision-main.webp', 'assets/media/campus-entry.webp', 'assets/media/client-atention.webp'],
  'Portal de padres': ['assets/new/sai/Captura de pantalla 2026-09-12 135920.png', 'assets/new/alliances/Edvoice1.webp', 'assets/new/alliances/Moodle1.png'],
  'Contacto y atención': ['assets/media/campus-exterior.webp', 'assets/media/campus-restzone.webp', 'assets/media/client-atention.webp'],
  'Secundaria y Bachilleres': ['assets/media/science-student.webp', 'assets/media/robotics-1.webp', 'assets/media/robotics-2.webp']
};

const cards = (title) => {
  const images = (visualSets[title] || visualSets['¿Quiénes somos?']).concat(visualSets[title] || visualSets['¿Quiénes somos?']);
  return `
<section class="content-cards section-pad">
  <article><h3>Una propuesta con propósito</h3><p>Aquí se incorporará el contenido institucional final de ${title}.</p></article>
  <article><h3>Experiencias que acompañan</h3><p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p></article>
  <article><h3>Una comunidad cercana</h3><p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p></article>
</section>
<section class="editorial-flow">
  <div class="editorial-flow__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza o pasa el cursor para explorar una selección visual de nuestra comunidad.</p>
  </div>
  <div class="editorial-track">
    ${images.map(img => `<article class="editorial-card"><img src="${img}" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article>`).join('')}
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
  <div><span>SECRETARÍA</span><a href="tel:+5073915811">391-5811</a></div>
  <div><span>WHATSAPP</span><a href="https://wa.me/50767441351">6744-1351</a></div>
  <div><span>CORREO</span><a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a></div>
</section>
<section class="map-section">
  <iframe title="Ubicación de Buen Pastor Voz de Alerta" src="https://www.google.com/maps?q=Calle%20San%20Jos%C3%A9%2C%2024%20de%20Diciembre%2C%20Ciudad%20de%20Panam%C3%A1&output=embed" loading="lazy"></iframe>
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
for (const [file, title, eyebrow, hero, image, intro] of data.filter(entry => entry[0] !== 'filosofia.html')) {
  const body = `
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="${image}" alt="">
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
      <img src="${image}" alt="">
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
        <img src="assets/new/purpose/IMG_1963.JPG" alt="Estudiante BPVDA">
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
        <img src="assets/new/purpose/IMG_1966.JPG" alt="Estudiante BPVDA">
      </article>
      <article class="purpose-pillar purpose-pillar--vision">
        <img src="assets/new/purpose/IMG_1991.JPG" alt="Estudiante BPVDA">
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
  ['assets/new/levels/prekinder/IMG_9410.webp', 'assets/new/levels/prekinder/IMG_9417.webp', 'assets/new/levels/prekinder/IMG_9400.webp', 'assets/new/levels/prekinder/IMG_1694.JPG'],
  `<section id="experiencias" class="level-welcome">
  <div>
    <span>PREKÍNDER</span>
    <h2>Las primeras experiencias se viven con asombro.</h2>
    <p>Un entorno preparado para explorar, crear vínculos y descubrir el mundo a través del juego. Aquí se incorporará la propuesta pedagógica final de Prekínder.</p>
  </div>
  <div class="level-photo-stack">
    <img src="assets/new/levels/prekinder/IMG_9417.webp" alt="">
    <img src="assets/new/levels/prekinder/IMG_9400.webp" alt="">
  </div>
</section>
<section class="level-moments">
  <img src="assets/new/levels/prekinder/IMG_1694.JPG" alt="">
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
  ['assets/new/levels/kinder/IMG_9434.webp', 'assets/new/levels/kinder/IMG_9454.webp', 'assets/new/levels/kinder/IMG_9408.webp', 'assets/new/levels/kinder/IMG_1695.JPG'],
  `<section id="experiencias" class="kinder-journey">
  <div class="kinder-journey__copy">
    <span>KÍNDER</span>
    <h2>Ideas pequeñas, descubrimientos enormes.</h2>
    <p>La experiencia de Kínder conecta juego, lenguaje, exploración y convivencia. Este espacio recibirá los contenidos oficiales del programa.</p>
  </div>
  <img class="kinder-journey__main" src="assets/new/levels/kinder/IMG_9454.webp" alt="">
  <div class="kinder-journey__facts">
    <article><b>01</b><p>Explorar</p></article>
    <article><b>02</b><p>Crear</p></article>
    <article><b>03</b><p>Compartir</p></article>
  </div>
</section>
<section class="kinder-gallery">
  <img src="assets/new/levels/kinder/IMG_9408.webp" alt="">
  <img src="assets/new/levels/kinder/IMG_1695.JPG" alt="">
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
  ['assets/new/levels/primaria/IMG_9484.webp', 'assets/new/levels/primaria/IMG_9494.webp', 'assets/new/levels/primaria/IMG_9538.webp', 'assets/new/levels/primaria/IMG_1605.JPG'],
  `<section id="experiencias" class="primary-statement">
  <div>
    <span>PRIMARIA</span>
    <h2>Conocimiento que cobra sentido.</h2>
  </div>
  <p>En primaria, cada experiencia invita a pensar, colaborar y desarrollar autonomía. Aquí se incorporará la descripción institucional de metodologías, áreas y proyectos.</p>
</section>
<section class="primary-mosaic">
  <img src="assets/new/levels/primaria/IMG_9494.webp" alt="">
  <img src="assets/new/levels/primaria/IMG_9538.webp" alt="">
  <div>
    <h2>Aprender juntos abre nuevas posibilidades.</h2>
    <p>Retos, lectura, creatividad y experiencias que conectan con la vida.</p>
  </div>
  <img src="assets/new/levels/primaria/IMG_1605.JPG" alt="">
</section>`
);

levelPage(
  'bachilleres.html',
  'Bachilleres',
  'Preparación para decidir con <mark>propósito</mark>.',
  'Página preparada para la propuesta específica de Bachilleres.',
  ['assets/media/science-action.webp'],
  `<section class="primary-statement">
  <div>
    <span>05 BACHILLERES</span>
    <h2>Una etapa orientada al futuro.</h2>
  </div>
  <p>Aquí se incorporará el contenido institucional de Bachilleres.</p>
</section>`
);

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

