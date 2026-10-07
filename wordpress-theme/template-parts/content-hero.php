<?php
/**
 * Hero Section Template Part - BPVDA Official
 *
 * @package BPVDA
 */
?>
<!-- ============================================================ -->
<!-- 2. SECCIÓN PRINCIPAL: HERO SLIDER HORIZONTAL               -->
<!-- ============================================================ -->
<section class="hero" id="inicio" aria-label="Presentación destacada" data-slider>
  <div class="hero-track" data-slider-track>
    <!-- Diapositiva 01: Video Hero de Apertura (Duración 10 segundos) -->
    <article class="hero-slide" data-slide aria-hidden="false">
      <video autoplay muted loop playsinline tabindex="-1">
        <source src="<?php echo esc_url( bpvda_asset( 'media/hero-campus.mp4' ) ); ?>" type="video/mp4">
      </video>
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow">Educación con propósito Panamá</p>
        <h1>Forjando<br><em>Espíritus Nuevos.</em></h1>
        <p class="hero-copy">Una comunidad cristiana que acompaña a niños y jóvenes para transformar el conocimiento en acción y cada talento en una forma de servir. Formamos estudiantes capaces de aprender con propósito, crecer en su relación con Dios y aportar con responsabilidad a su comunidad.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#experiencia">Conoce la experiencia <span>↗</span></a>
        </div>
      </div>
    </article>

    <!-- Diapositiva 02: Misión -->
    <article class="hero-slide" data-slide aria-hidden="true">
      <img src="<?php echo esc_url( bpvda_asset( 'media/learn-mind.webp' ) ); ?>" alt="Estudiante en práctica de aprendizaje reflexivo">
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow">Nuestra misión</p>
        <h2 class="slide-heading">Educar la mente.<br><em>Formar carácter.</em></h2>
        <p class="hero-copy">Educamos con excelencia, fe y valores cristianos, acompañando a cada estudiante en su crecimiento académico, personal y espiritual. Promovemos el amor al prójimo, la responsabilidad, la honestidad, la disciplina, la solidaridad y el deseo de poner los talentos al servicio de los demás.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#filosofia" tabindex="-1">Conoce nuestra misión <span>↗</span></a>
        </div>
      </div>
    </article>

    <!-- Diapositiva 03: Visión -->
    <article class="hero-slide" data-slide aria-hidden="true">
      <img src="<?php echo esc_url( bpvda_asset( 'media/culture-main.webp' ) ); ?>" alt="Estudiantes en actividades culturales y artísticas">
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow">Nuestra visión</p>
        <h2 class="slide-heading">Raíces firmes.<br><em>Mirada amplia.</em></h2>
        <p class="hero-copy">Formamos líderes con carácter y propósito, preparados para aprender, convivir y responder a un mundo cambiante. Buscamos que cada etapa fortalezca sus conocimientos, valores, capacidades y confianza para afrontar nuevos desafíos sin perder de vista su fe y compromiso con los demás.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#filosofia" tabindex="-1">Explora nuestra visión <span>↗</span></a>
        </div>
      </div>
    </article>

    <!-- Diapositiva 04: Valores -->
    <article class="hero-slide" data-slide aria-hidden="true">
      <img src="<?php echo esc_url( bpvda_asset( 'media/recognition.webp' ) ); ?>" alt="Estudiantes con reconocimientos de excelencia académica">
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow">Valores que se viven</p>
        <h2 class="slide-heading">Fe. Respeto.<br><em>Excelencia.</em></h2>
        <p class="hero-copy">La esperanza, la dignidad y la mejora constante orientan la experiencia diaria de cada estudiante y cada familia. Estos valores se reflejan en la forma de aprender, convivir, asumir responsabilidades, superar dificultades y servir a quienes nos rodean.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#filosofia" tabindex="-1">Descubre nuestros valores <span>↗</span></a>
        </div>
      </div>
    </article>

    <!-- Diapositiva 05: Admisión -->
    <article class="hero-slide" data-slide aria-hidden="true">
      <img src="<?php echo esc_url( bpvda_asset( 'media/campus-entry.webp' ) ); ?>" alt="Entrada y fachada principal de la escuela">
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow">Tu familia es bienvenida</p>
        <h2 class="slide-heading">El próximo paso<br><em>comienza aquí.</em></h2>
        <p class="hero-copy">Conoce nuestro proceso de admisión, visita el colegio y conversa con el equipo que acompañará a tu familia. Queremos que este primer acercamiento sea claro, cercano y te permita conocer la propuesta educativa de nuestra comunidad.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#admisiones" tabindex="-1">Inicia tu admisión <span>↗</span></a>
        </div>
      </div>
    </article>
  </div>

  <!-- Controles de Navegación del Slider -->
  <div class="hero-controls">
    <button type="button" data-prev aria-label="Historia anterior">←</button>
    <div class="hero-progress" aria-label="Progreso del slider">
      <span data-current>01</span>
      <i><b data-progress style="width:20%"></b></i>
      <span data-total>05</span>
    </div>
    <button type="button" data-next aria-label="Historia siguiente">→</button>
  </div>
  <div class="hero-side-note">Formando con fe desde Panamá</div>
</section>

<!-- CITA INSPIRADORA -->
<section class="hero-quote" aria-label="Cita destacada">
  <div class="hero-quote__inner">
    <div class="hero-quote__symbol">“</div>
    <blockquote>
      La <mark>disciplina</mark>, tarde o temprano, vencerá a la <mark>inteligencia</mark>
    </blockquote>
    <cite>Yokoi Kenji <span>— Motivador</span></cite>
  </div>
</section>

<!-- SECCIÓN EXPERIENCIA / MOSAICO -->
<section class="statement section-pad" id="experiencia">
  <div class="section-number">01 — Nuestra experiencia</div>
  <div class="statement-grid">
    <div class="statement-col-left">
      <h2>Una escuela se reconoce por lo que <em>hace posible.</em></h2>
      <div class="guide-copy">
        <span>Nuestra promesa</span>
        Unir fe, conocimiento y acción para que el aprendizaje tenga sentido dentro y fuera del aula, formando personas responsables, solidarias y preparadas para utilizar sus talentos con propósito.
      </div>
    </div>
    <div class="statement-col-right">
      <p class="lead">Aquí cada estudiante aprende haciendo, preguntando y colaborando, acompañado por docentes y una comunidad comprometida con su crecimiento. Buscamos que el aula sea un espacio para desarrollar conocimientos, habilidades, valores y confianza, conectando lo aprendido con situaciones reales.</p>
    </div>
  </div>

  <div class="mosaic">
    <figure class="mosaic-main">
      <img src="<?php echo esc_url( bpvda_asset( 'media/science-student.webp' ) ); ?>" alt="Estudiante en una experiencia de laboratorio">
      <figcaption><span>Aprender haciendo</span><b>La curiosidad encuentra método.</b></figcaption>
    </figure>
    <figure class="mosaic-wide">
      <img src="<?php echo esc_url( bpvda_asset( 'media/roboticfair-team.webp' ) ); ?>" alt="Estudiantes en feria de robótica y tecnología">
      <figcaption><span>Trabajo colaborativo</span><b>Ideas compartidas, soluciones construidas.</b></figcaption>
    </figure>
    <div class="mosaic-note">
      <strong>Fe + conocimiento + acción</strong>
      <p>Tres dimensiones de nuestra experiencia formativa.</p>
      <i>✦</i>
    </div>
  </div>
</section>
