<?php
/**
 * Pagina: plantel (copia fiel de plantel.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/IMG_9538.webp" alt="">
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
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/IMG_9538.webp" alt="">
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
  <article><h3>Una propuesta con propósito</h3><p>Aquí se incorporará el contenido institucional final de Plantel docente.</p></article>
  <article><h3>Experiencias que acompañan</h3><p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p></article>
  <article><h3>Una comunidad cercana</h3><p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p></article>
</section>
<section class="editorial-flow">
  <div class="editorial-flow__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza o pasa el cursor para explorar una selección visual de nuestra comunidad.</p>
  </div>
  <div class="editorial-track">
    <article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/1.png" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/2.png" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/3.png" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/1.png" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/2.png" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article><article class="editorial-card"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/teachers/3.png" alt=""><div><h3>BPVDA</h3><p>Una experiencia que acompaña cada etapa.</p></div></article>
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
