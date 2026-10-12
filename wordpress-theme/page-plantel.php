<?php
/**
 * Pagina: plantel (copia fiel de plantel.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9484.webp" alt="">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>01 NUESTRA ESCUELA</span>
        <h1>Educadores que inspiran y <mark>guían</mark>.</h1>
        <p>Un equipo comprometido con acompañar los procesos y talentos de cada estudiante.</p>
      </div>
    </section>

    
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9489.webp" alt="">
      <div>
        <span class="section-number">01 NUESTRA ESCUELA</span>
        <h2>Plantel docente</h2>
        <p>Un equipo comprometido con acompañar los procesos y talentos de cada estudiante. En esta sección se añadirá la información institucional definitiva cuando sea aprobada.</p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: TARJETAS FORMATIVAS Y CARRUSEL EDITORIAL            -->
    <!-- ============================================================ -->
    
<section class="content-cards section-pad">
  <article class="content-card">
    <div class="content-card__head">
      <div class="content-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
      </div>
      <span class="content-card__tag">01 · Propósito</span>
    </div>
    <h3>Una propuesta con propósito</h3>
    <p>Aquí se incorporará el contenido institucional final de Plantel docente.</p>
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
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9515.webp" alt="Un entorno diseñado para descubrir y trascender." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              PROPÓSITO
            </span>
            <h3>Un entorno diseñado para descubrir y trascender.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9462.webp" alt="Cada paso es una meta formativa alcanzada." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              LOGROS
            </span>
            <h3>Cada paso es una meta formativa alcanzada.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9530.webp" alt="Una comunidad educativa que te respalda." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              COMUNIDAD
            </span>
            <h3>Una comunidad educativa que te respalda.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9430.webp" alt="Tecnología y pedagogía presentes en cada aula." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              INNOVACIÓN
            </span>
            <h3>Tecnología y pedagogía presentes en cada aula.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9570.webp" alt="Formando a los líderes del mañana con valores." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              LIDERAZGO
            </span>
            <h3>Formando a los líderes del mañana con valores.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9471.webp" alt="Creciendo juntos con dedicación cada día." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              CRECIMIENTO
            </span>
            <h3>Creciendo juntos con dedicación cada día.</h3>
          </div>
        </article>
      </div>
      <div class="carousel-v3__group" aria-hidden="true">
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9515.webp" alt="Un entorno diseñado para descubrir y trascender." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              PROPÓSITO
            </span>
            <h3>Un entorno diseñado para descubrir y trascender.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9462.webp" alt="Cada paso es una meta formativa alcanzada." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              LOGROS
            </span>
            <h3>Cada paso es una meta formativa alcanzada.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9530.webp" alt="Una comunidad educativa que te respalda." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              COMUNIDAD
            </span>
            <h3>Una comunidad educativa que te respalda.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9430.webp" alt="Tecnología y pedagogía presentes en cada aula." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              INNOVACIÓN
            </span>
            <h3>Tecnología y pedagogía presentes en cada aula.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9570.webp" alt="Formando a los líderes del mañana con valores." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              LIDERAZGO
            </span>
            <h3>Formando a los líderes del mañana con valores.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9471.webp" alt="Creciendo juntos con dedicación cada día." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              CRECIMIENTO
            </span>
            <h3>Creciendo juntos con dedicación cada día.</h3>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    <section class="teacher-section section-pad">
  <h2>Personas que hacen del aprendizaje una experiencia cercana.</h2>
  <div class="teacher-grid">
    <article><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/1.png" alt="Retrato de docente BPVDA"><div><span>DOCENTE BPVDA</span><h3>Nombre del educador</h3><p>Área, trayectoria y cita inspiradora por confirmar.</p></div></article><article><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/2.png" alt="Retrato de docente BPVDA"><div><span>DOCENTE BPVDA</span><h3>Nombre del educador</h3><p>Área, trayectoria y cita inspiradora por confirmar.</p></div></article><article><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/3.png" alt="Retrato de docente BPVDA"><div><span>DOCENTE BPVDA</span><h3>Nombre del educador</h3><p>Área, trayectoria y cita inspiradora por confirmar.</p></div></article><article><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/4.png" alt="Retrato de docente BPVDA"><div><span>DOCENTE BPVDA</span><h3>Nombre del educador</h3><p>Área, trayectoria y cita inspiradora por confirmar.</p></div></article>
  </div>
</section>
  </main>

<?php get_footer(); ?>
