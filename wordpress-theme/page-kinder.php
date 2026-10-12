<?php
/**
 * Pagina: kinder (copia fiel de kinder.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Específico del Nivel con Imagen de Fondo y Llamado a la Acción -->
    <section class="level-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9454.webp" alt="Estudiantes BPVDA">
      <div>
        <span>02 PREESCOLAR Y PRIMARIA</span>
        <h1>La curiosidad encuentra su <mark>voz</mark>.</h1>
        <p>Una etapa para preguntar, imaginar y construir aprendizajes con entusiasmo.</p>
        <a href="#experiencias">Descubre la etapa <b>↓</b></a>
      </div>
    </section>

    <!-- Composición Específica de la Etapa Formativa -->
    <section id="experiencias" class="kinder-journey">
  <div class="kinder-journey__copy">
    <span>KÍNDER</span>
    <h2>Ideas pequeñas, descubrimientos enormes.</h2>
    <p>La experiencia de Kínder conecta juego, lenguaje, exploración y convivencia. Este espacio recibirá los contenidos oficiales del programa.</p>
  </div>
  <img class="kinder-journey__main" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9425.webp" alt="Estudiantes en el aula de kínder">
  <div class="kinder-journey__facts">
    <article><b>01</b><p>Explorar</p></article>
    <article><b>02</b><p>Crear</p></article>
    <article><b>03</b><p>Compartir</p></article>
  </div>
</section>
<section class="kinder-gallery">
  <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9428.webp" alt="Aprendizaje en kínder">
  <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9431.webp" alt="Descubrimiento en kínder">
  <div>
    <h2>Aprender también es imaginar.</h2>
    <p>Un ambiente cercano para desarrollar autonomía y disfrutar cada logro.</p>
  </div>
</section>
  </main>

<?php get_footer(); ?>
