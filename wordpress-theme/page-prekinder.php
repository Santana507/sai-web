<?php
/**
 * Template Name: Plantilla prekinder
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Específico del Nivel con Imagen de Fondo y Llamado a la Acción -->
    <section class="level-hero">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/prekinder/IMG_9410.webp" alt="Estudiantes BPVDA">
      <div>
        <span>04 PRIMARIA</span>
        <h1>Un lugar seguro para <mark>comenzar</mark>.</h1>
        <p>Juego, afecto y descubrimiento acompañan los primeros pasos de cada niño.</p>
        <a href="#experiencias">Descubre la etapa <b>↓</b></a>
      </div>
    </section>

    <!-- Composición Específica de la Etapa Formativa -->
    <section id="experiencias" class="level-welcome">
  <div>
    <span>PREKÍNDER</span>
    <h2>Las primeras experiencias se viven con asombro.</h2>
    <p>Un entorno preparado para explorar, crear vínculos y descubrir el mundo a través del juego. Aquí se incorporará la propuesta pedagógica final de Prekínder.</p>
  </div>
  <div class="level-photo-stack">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/prekinder/IMG_9417.webp" alt="">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/prekinder/IMG_9400.webp" alt="">
  </div>
</section>
<section class="level-moments">
  <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/prekinder/IMG_1694.JPG" alt="">
  <div>
    <span>UN DÍA PARA DESCUBRIR</span>
    <h2>Movimiento, imaginación y compañía.</h2>
    <p>Rutinas diseñadas para fortalecer la confianza y la alegría de aprender.</p>
  </div>
</section>
  </main>

<?php get_footer(); ?>


