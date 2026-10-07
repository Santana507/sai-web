<?php
/**
 * Template Name: Plantilla primaria
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Específico del Nivel con Imagen de Fondo y Llamado a la Acción -->
    <section class="level-hero">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/primaria/IMG_9484.webp" alt="Estudiantes BPVDA">
      <div>
        <span>04 PRIMARIA</span>
        <h1>Aprender para comprender y <mark>transformar</mark>.</h1>
        <p>Una formación que fortalece hábitos, conocimiento, colaboración y propósito.</p>
        <a href="#experiencias">Descubre la etapa <b>↓</b></a>
      </div>
    </section>

    <!-- Composición Específica de la Etapa Formativa -->
    <section id="experiencias" class="primary-statement">
  <div>
    <span>PRIMARIA</span>
    <h2>Conocimiento que cobra sentido.</h2>
  </div>
  <p>En primaria, cada experiencia invita a pensar, colaborar y desarrollar autonomía. Aquí se incorporará la descripción institucional de metodologías, áreas y proyectos.</p>
</section>
<section class="primary-mosaic">
  <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/primaria/IMG_9494.webp" alt="">
  <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/primaria/IMG_9538.webp" alt="">
  <div>
    <h2>Aprender juntos abre nuevas posibilidades.</h2>
    <p>Retos, lectura, creatividad y experiencias que conectan con la vida.</p>
  </div>
  <img src="<?php echo get_template_directory_uri(); ?>/assets/new/levels/primaria/IMG_1605.JPG" alt="">
</section>
  </main>

<?php get_footer(); ?>


