<?php
/**
 * Pagina: filosofia (copia fiel de filosofia.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interactivo con Secuencia de Fundido Fotográfico (Crossfade) -->
    <section class="purpose-fade">
      <div class="purpose-fade__images">
        <img class="is-active" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/purpose/IMG_1963.JPG" alt="Estudiante BPVDA con uniforme">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/purpose/IMG_1966.JPG" alt="Estudiante BPVDA con uniforme">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/purpose/IMG_1991.JPG" alt="Estudiante BPVDA con uniforme">
      </div>
      <div class="purpose-fade__content">
        <span>01 NUESTRA ESCUELA</span>
        <h1>Una educación con <mark>propósito</mark>.</h1>
        <p>Formamos personas con valores, conocimiento y una mirada generosa hacia los demás.</p>
      </div>
    </section>

    <!-- Declaración Introductoria de Propósito -->
    <section class="purpose-intro">
      <span>PROPÓSITO BPVDA</span>
      <p>Creemos en una educación integral que impulsa el desarrollo académico, personal y espiritual de niños y jóvenes, fundamentada en la fe, la excelencia y el servicio.</p>
    </section>

    <!-- Pilares Formativos: 01 Valores, 02 Misión y 03 Visión -->
    <section class="purpose-pillars">
      <article class="purpose-pillar purpose-pillar--values">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/purpose/IMG_1963.JPG" alt="Estudiante BPVDA">
        <div>
          <span>01</span>
          <h2>Valores</h2>
          <p>La fe, el respeto, la responsabilidad y el amor al prójimo orientan la manera en que convivimos y aprendemos.</p>
        </div>
      </article>
      <article class="purpose-pillar purpose-pillar--mission">
        <div>
          <span>02</span>
          <h2>Misión</h2>
          <p>Brindar una formación de excelencia que fortalezca las capacidades de cada estudiante y lo prepare para servir con propósito.</p>
        </div>
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/purpose/IMG_1966.JPG" alt="Estudiante BPVDA">
      </article>
      <article class="purpose-pillar purpose-pillar--vision">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/purpose/IMG_1991.JPG" alt="Estudiante BPVDA">
        <div>
          <span>03</span>
          <h2>Visión</h2>
          <p>Ser una comunidad educativa que inspira a sus estudiantes a aprender, liderar y construir un futuro mejor.</p>
        </div>
      </article>
    </section>
  </main>

<?php get_footer(); ?>
