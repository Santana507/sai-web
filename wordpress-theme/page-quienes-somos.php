<?php
/**
 * Template Name: Plantilla quienes-somos
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/new/IMG_9370.webp" alt="">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>01 NUESTRA ESCUELA</span>
        <h1>Una comunidad que educa con <mark>propósito</mark>.</h1>
        <p>Conoce la historia, el compromiso y la comunidad que hacen posible BPVDA.</p>
      </div>
    </section>

    
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/new/IMG_9370.webp" alt="">
      <div>
        <span class="section-number">01 NUESTRA ESCUELA</span>
        <h2>¿Quiénes somos?</h2>
        <p>Conoce la historia, el compromiso y la comunidad que hacen posible BPVDA. En esta sección se añadirá la información institucional definitiva cuando sea aprobada.</p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: TARJETAS FORMATIVAS Y CARRUSEL EDITORIAL            -->
    <!-- ============================================================ -->
    
<section class="content-cards section-pad">
  <article><h3>Una propuesta con propósito</h3><p>Aquí se incorporará el contenido institucional final de ¿Quiénes somos?.</p></article>
  <article><h3>Experiencias que acompañan</h3><p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p></article>
  <article><h3>Una comunidad cercana</h3><p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p></article>
</section>
<section class="editorial-flow">
  <div class="editorial-flow__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza o pasa el cursor para explorar una selección visual de nuestra comunidad.</p>
  </div>
  <div class="editorial-track">
    <article class="editorial-card"><img src="<?php echo get_template_directory_uri(); ?>/assets/media/community.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo get_template_directory_uri(); ?>/assets/new/IMG_9370.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo get_template_directory_uri(); ?>/assets/new/IMG_9413.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo get_template_directory_uri(); ?>/assets/media/community.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo get_template_directory_uri(); ?>/assets/new/IMG_9370.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo get_template_directory_uri(); ?>/assets/new/IMG_9413.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article>
  </div>
</section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    
  </main>

<?php get_footer(); ?>


