<?php
/**
 * Pagina: vida-estudiantil (copia fiel de vida-estudiantil.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7544.JPG" alt="">
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
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7544.JPG" alt="">
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
<section class="editorial-flow">
  <div class="editorial-flow__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza o pasa el cursor para explorar una selección visual de nuestra comunidad.</p>
  </div>
  <div class="editorial-track">
    <article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7544.JPG" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7549.JPG" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7550.JPG" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7544.JPG" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7549.JPG" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/achievements/IMG_7550.JPG" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article>
  </div>
</section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    
  </main>

<?php get_footer(); ?>
