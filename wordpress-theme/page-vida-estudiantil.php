<?php
/**
 * Pagina: vida-estudiantil (copia fiel de vida-estudiantil.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9585.webp" alt="">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>02 ENFOQUE EDUCATIVO</span>
        <h1>Talentos que se convierten en <mark>experiencias</mark>.</h1>
        <p>Proyectos, actividades, cultura, deporte y logros que enriquecen la vida escolar.</p>
      </div>
    </section>

    
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9575.webp" alt="">
      <div>
        <span class="section-number">02 ENFOQUE EDUCATIVO</span>
        <h2>Vida estudiantil</h2>
        <p>Proyectos, actividades, cultura, deporte y logros que enriquecen la vida escolar. En esta sección se añadirá la información institucional definitiva cuando sea aprobada.</p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: TARJETAS FORMATIVAS Y CARRUSEL EDITORIAL            -->
    <!-- ============================================================ -->
    
<section class="content-cards section-pad">
  <article><h3>Una propuesta con propósito</h3><p>Aquí se incorporará el contenido institucional final de Vida estudiantil.</p></article>
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
      
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9582.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Un entorno diseñado para descubrir.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9586.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Cada paso es un logro alcanzado.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9580.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Una comunidad que te respalda.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9574.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Innovación presente en cada aula.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9590.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Formando a los líderes del mañana.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9593.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Creciendo juntos cada día.</h3>
          </div>
        </article>
        
    </div>
  </div>
</section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    
  </main>

<?php get_footer(); ?>
