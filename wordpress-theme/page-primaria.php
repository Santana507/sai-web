<?php
/**
 * Pagina: primaria (copia fiel de primaria.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Específico del Nivel con Imagen de Fondo y Llamado a la Acción -->
    <section class="level-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/levels/primaria/IMG_9484.webp" alt="Estudiantes BPVDA">
      <div>
        <span>04 PRIMARIA</span>
        <h1>Aprender para comprender y <mark>transformar</mark>.</h1>
        <p>Una formación que fortalece hábitos, conocimiento, colaboración y propósito.</p>
        <a href="#experiencias">Descubre la etapa <b>↓</b></a>
      </div>
    </section>

    <!-- Composición Específica de la Etapa Formativa -->
    <section id="experiencias" class="primary-statement primary-statement--enriched">
  <div class="primary-statement__intro">
    <div>
      <span>02 · PRIMARIA BPVDA</span>
      <h2>Conocimiento que cobra sentido cada día.</h2>
    </div>
    <p>En primaria acompañamos a cada estudiante a consolidar hábitos de estudio, comprensión lectora y pensamiento crítico. Un ambiente cercano donde la curiosidad natural se transforma en disciplina, respeto y ganas de aprender.</p>
  </div>
  <div class="primary-pillars">
    <article class="primary-pillar">
      <span class="primary-pillar__num">01</span>
      <h3>Lectura y Pensamiento</h3>
      <p>Comprensión lectora diaria, expresión clara y razonamiento matemático aplicados a retos de la vida diaria.</p>
    </article>
    <article class="primary-pillar">
      <span class="primary-pillar__num">02</span>
      <h3>Entorno Digital Guiado</h3>
      <p>Uso intencional de tabletas y plataformas interactivas que fortalecen la autonomía en el aula.</p>
    </article>
    <article class="primary-pillar">
      <span class="primary-pillar__num">03</span>
      <h3>Convivencia y Valores</h3>
      <p>Principios cristianos, compañerismo y respeto mutuo vividos dentro y fuera del salón de clases.</p>
    </article>
  </div>
</section>
<section class="primary-mosaic">
  <figure class="primary-mosaic__item primary-mosaic__item--photo">
    <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9468.webp" alt="Estudiantes de primaria utilizando tabletas educativas en el aula">
    <figcaption class="primary-mosaic__caption">
      <span>AULA DIGITAL</span>
      <p>Concentración y aprendizaje interactivo</p>
    </figcaption>
  </figure>
  <article class="primary-mosaic__item primary-mosaic__item--card primary-mosaic__item--navy">
    <span class="primary-card__tag">AUTONOMÍA Y RETOS</span>
    <h2>Aprender juntos abre nuevas posibilidades.</h2>
    <p>En primaria, cada jornada equilibra la disciplina académica con la alegría de descubrir. Fomentamos la lectura comprensiva, el razonamiento lógico y la expresión oral desde los primeros años.</p>
    <ul class="primary-card__list">
      <li><span class="primary-card__check">✓</span> Hábitos de estudio y lectura diaria</li>
      <li><span class="primary-card__check">✓</span> Pensamiento lógico y ciencias aplicadas</li>
      <li><span class="primary-card__check">✓</span> Proyectos colaborativos en el aula</li>
    </ul>
  </article>
  <article class="primary-mosaic__item primary-mosaic__item--card primary-mosaic__item--teal">
    <span class="primary-card__tag">VALORES Y COMUNIDAD</span>
    <h2>Crecimiento integral en un entorno seguro y cercano.</h2>
    <p>Más allá de las materias, cuidamos el carácter. Los momentos de receso, el diálogo constante con los maestros y los principios cristianos construyen una convivencia donde cada niño aprende a respetar, compartir y superarse.</p>
    <ul class="primary-card__list">
      <li><span class="primary-card__check">✓</span> Acompañamiento docente continuo</li>
      <li><span class="primary-card__check">✓</span> Espacios al aire libre y recreo activo</li>
      <li><span class="primary-card__check">✓</span> Trato basado en la fe y el respeto</li>
    </ul>
  </article>
  <figure class="primary-mosaic__item primary-mosaic__item--photo">
    <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/primaria-preescolar/IMG_9544.webp" alt="Docente y estudiantes de primaria conversando en el patio bajo los árboles">
    <figcaption class="primary-mosaic__caption">
      <span>VIDA ESTUDIANTIL</span>
      <p>Convivencia y diálogo al aire libre</p>
    </figcaption>
  </figure>
</section>
  </main>

<?php get_footer(); ?>
