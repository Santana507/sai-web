<?php
/**
 * Pagina: quienes-somos (copia fiel de quienes-somos.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Institucional de Prestigio -->
    <section class="qs-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/admision.webp" alt="Comunidad educativa del Colegio Buen Pastor Voz de Alerta" class="qs-hero__bg">
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
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-outline">Proceso de admisión <b>↗</b></a>
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
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/recognition.webp" alt="Estudiantes del Colegio Buen Pastor formados en valores y excelencia" class="qs-manifesto__img" loading="lazy">
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
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/achievement.webp" alt="Estudiantes BPVDA recibiendo reconocimiento académico" loading="lazy">
          <div class="qs-bento-overlay">
            <span class="qs-bento-tag">MÉRITO Y SUPERACIÓN</span>
            <h3>Reconocimiento a la constancia académica</h3>
            <p>Estimulamos el esfuerzo de cada alumno premiando el desempeño, la conducta intachable y el espíritu de liderazgo.</p>
          </div>
        </article>

        <!-- Item 2 (5 cols) -->
        <article class="qs-bento-item qs-bento-item--2">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/learn-mind.webp" alt="Estudiante en aula de clase concentrado en su aprendizaje" loading="lazy">
          <div class="qs-bento-overlay">
            <span class="qs-bento-tag">PENSAMIENTO CRÍTICO</span>
            <h3>Aulas activas e investigación</h3>
            <p>Entornos pedagógicos diseñados para fomentar la indagación, la lectura comprensiva y la resolución analítica.</p>
          </div>
        </article>

        <!-- Item 3 (5 cols) -->
        <article class="qs-bento-item qs-bento-item--3">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/mission.webp" alt="Comunidad de estudiantes compartiendo en ambiente escolar cristiano" loading="lazy">
          <div class="qs-bento-overlay">
            <span class="qs-bento-tag">FE Y CONVIVENCIA</span>
            <h3>Comunidad unida por el amor fraternal</h3>
            <p>Espacios de devoción y reflexión donde se consolidan amistades sanas que perduran por toda la vida.</p>
          </div>
        </article>

        <!-- Item 4 (7 cols) -->
        <article class="qs-bento-item qs-bento-item--4">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/culture-main.webp" alt="Estudiantes en celebración cívica e identidad panameña" loading="lazy">
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
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-primary">Conocer Admisiones <b>↗</b></a>
          <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-outline">Agendar una Visita al Campus <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
