<?php
/**
 * Pagina: plantel (copia fiel de plantel.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Plantel Docente BPVDA -->
    <section class="doc-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9490.webp" alt="Docente de aula interactuando activamente con sus estudiantes en el Colegio Buen Pastor" loading="eager">
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
          <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-outline">Agendar Orientación Pedagógica <b>↗</b></a>
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
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9436.webp" alt="Maestra guiando con afecto y atención cercana a niños en aula" loading="lazy">
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
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9455.webp" alt="Aula de preescolar con actividades lúdicas y estimulación temprana" loading="lazy">
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
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9491.webp" alt="Estudiantes de primaria participando en clase interactiva" loading="lazy">
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
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9519.webp" alt="Docente de secundaria explicando conceptos avanzados en pizarra y proyector" loading="lazy">
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
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9548.webp" alt="Laboratorio de robótica y tecnología con instructor guiando proyectos" loading="lazy">
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
          <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-primary">Solicitar una Cita Pedagógica <b>↗</b></a>
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-outline">Proceso de Matrícula <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
