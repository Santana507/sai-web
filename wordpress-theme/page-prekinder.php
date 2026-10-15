<?php
/**
 * Pagina: prekinder (copia fiel de prekinder-y-kinder.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Específico de Preescolar (Prekínder y Kínder) -->
    <section class="level-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9410.webp" alt="Estudiantes de Preescolar BPVDA">
      <div>
        <span>04 PREESCOLAR</span>
        <h1>Un lugar seguro para <mark>crecer y descubrir</mark>.</h1>
        <p>Juego, afecto, imaginación y lenguaje acompañan los primeros pasos de cada niño en su etapa formativa.</p>
        <a href="#experiencias">Descubre la etapa <b>↓</b></a>
      </div>
    </section>

    <!-- Bloque 1: Experiencias Formativas en Prekínder -->
    <section id="experiencias" class="level-welcome">
      <div>
        <span>ETAPA 01 · PREKÍNDER</span>
        <h2>Las primeras experiencias se viven con asombro.</h2>
        <p>Un entorno preparado para explorar, crear vínculos afectivos y descubrir el mundo a través del juego y el movimiento. En Prekínder acompañamos la curiosidad natural, el desarrollo motriz y la confianza de cada pequeño.</p>
      </div>
      <div class="level-photo-stack">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9417.webp" alt="Estudiantes en actividades de prekínder">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9421.webp" alt="Primeras experiencias formativas en BPVDA">
      </div>
    </section>

    <!-- Bloque 2: Dinámicas de Descubrimiento y Confianza -->
    <section class="level-moments">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9423.webp" alt="Rutinas y juegos en preescolar">
      <div>
        <span>UN DÍA PARA DESCUBRIR</span>
        <h2>Movimiento, imaginación y compañía.</h2>
        <p>Rutinas diseñadas para fortalecer la seguridad, la alegría de convivir y el amor por el aprendizaje desde los primeros años.</p>
      </div>
    </section>

    <!-- Bloque 3: Propuesta Pedagógica de Kínder -->
    <section class="kinder-journey">
      <div class="kinder-journey__copy">
        <span>ETAPA 02 · KÍNDER</span>
        <h2>Ideas pequeñas, descubrimientos enormes.</h2>
        <p>La experiencia de Kínder conecta el juego reflexivo, la expresión del lenguaje, la exploración del entorno y la formación de valores, consolidando las bases para el ingreso a la Primaria.</p>
      </div>
      <img class="kinder-journey__main" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9425.webp" alt="Estudiantes en el aula de kínder">
      <div class="kinder-journey__facts">
        <article><b>01</b><p>Explorar</p></article>
        <article><b>02</b><p>Crear</p></article>
        <article><b>03</b><p>Compartir</p></article>
      </div>
    </section>

    <!-- Bloque 4: Creatividad y Autonomía en Kínder -->
    <section class="kinder-gallery">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9428.webp" alt="Aprendizaje en kínder">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9431.webp" alt="Descubrimiento en kínder">
      <div>
        <h2>Aprender también es imaginar.</h2>
        <p>Un ambiente cristiano, cercano y estimulante para desarrollar autonomía y disfrutar cada logro con entusiasmo.</p>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
