<?php
/**
 * Pagina: secundaria (copia fiel de secundaria.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/science-student.webp" alt="">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>05 SECUNDARIA Y BACHILLERES</span>
        <h1>Preparación para los retos que <mark>vienen</mark>.</h1>
        <p>Secundaria y bachillerato para impulsar habilidades, propósito y futuro.</p>
      </div>
    </section>

    
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/science-student.webp" alt="">
      <div>
        <span class="section-number">05 SECUNDARIA Y BACHILLERES</span>
        <h2>Secundaria y Bachilleres</h2>
        <p>Secundaria y bachillerato para impulsar habilidades, propósito y futuro. En esta sección se añadirá la información institucional definitiva cuando sea aprobada.</p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: TARJETAS FORMATIVAS Y CARRUSEL EDITORIAL            -->
    <!-- ============================================================ -->
    
<section class="content-cards section-pad">
  <article><h3>Una propuesta con propósito</h3><p>Aquí se incorporará el contenido institucional final de Secundaria y Bachilleres.</p></article>
  <article><h3>Experiencias que acompañan</h3><p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p></article>
  <article><h3>Una comunidad cercana</h3><p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p></article>
</section>
<section class="editorial-flow">
  <div class="editorial-flow__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza o pasa el cursor para explorar una selección visual de nuestra comunidad.</p>
  </div>
  <div class="editorial-track">
    <article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/science-student.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/robotics-1.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/robotics-2.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/science-student.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/robotics-1.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/robotics-2.webp" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article>
  </div>
</section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    <section class="student-voice section-pad">
  <blockquote>“Aquí se incorporará una cita real de un estudiante sobre su experiencia en BPVDA.”</blockquote>
  <span>ESTUDIANTE BPVDA</span>
</section>
<section class="media-placeholder section-pad">
  <h2>Graduaciones y momentos que dejan huella.</h2>
  <p>Espacio preparado para videos y fotografías oficiales.</p>
</section>
  </main>

<?php get_footer(); ?>
