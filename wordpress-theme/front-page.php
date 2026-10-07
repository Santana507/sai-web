<?php
/**
 * Portada (copia fiel de index.html)
 */
get_header(); ?>

<main>
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <!-- Navegación compartida: solo los accesos esenciales quedan visibles. -->
    <!-- ========================================== -->
    <!-- 1. ENCABEZADO Y NAVEGACIÓN PRINCIPAL -->
    <!-- ========================================== -->
    <header class="site-header">
  <!-- Barra de Navegación Superior Fija (Header Bar) -->
  <div class="header-bar">
    <!-- Logotipo Institucional Principal con enlace a Portada -->
    <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Inicio">
      <img decoding="async" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/brand/bpvda-logo-white.png" alt="Buen Pastor Voz de Alerta" class="brand-logo-img">
    </a>

    <!-- Navegación Esencial Visible en Cabecera (Desktop / Top Scroll) -->
    <nav class="essential-nav" aria-label="Navegación esencial">
      <a href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>">Filosofía</a>
      <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>">Admisiones</a>
      <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>">Contacto</a>
      <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="btn-matriculate">MATRICULATE AQUÍ</a>
    </nav>

    <!-- Botón Disparador del Menú Modal Desplegable (Accesible con ARIA) -->
    <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="menu-principal" aria-label="Abrir menú">
      <img decoding="async" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/icons/menu.png" alt="" class="icon-menu-img">
      <img decoding="async" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/icons/close.png" alt="" class="icon-close-img">
    </button>
  </div>

  <!-- Panel del Menú Modal Desplegable (5 Pilares de Navegación) -->
  <div class="menu-panel" id="menu-principal" data-menu-panel aria-hidden="true">
    <div class="menu-panel__main">
      <!-- Título de Bienvenida e Introducción Editorial del Menú -->
      <div class="menu-panel__title">
        <span>BUEN PASTOR VOZ DE ALERTA</span>
        <h2>Encuentra tu camino.</h2>
        <p>Explora cada etapa de la comunidad BPVDA.</p>
      </div>

      <!-- Cuadrícula Dinámica de los 5 Pilares Institucionales -->
      <nav class="menu-nav" aria-label="Navegación principal">
        <div class="menu-panel__groups">
          <div class="menu-group">
      <span class="menu-group-title">01 NUESTRA ESCUELA</span>
      <ul class="menu-list"><li><a href="<?php echo esc_url( home_url( '/quienes-somos/' ) ); ?>" class="menu-link"><span>¿Quiénes somos?</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>" class="menu-link"><span>Propósito BPVDA</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/instalaciones/' ) ); ?>" class="menu-link"><span>Instalaciones</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/plantel/' ) ); ?>" class="menu-link"><span>Plantel docente</span> <i class="menu-chevron">↗</i></a></li></ul>
    </div><div class="menu-group">
      <span class="menu-group-title">02 ENFOQUE EDUCATIVO</span>
      <ul class="menu-list"><li><a href="<?php echo esc_url( home_url( '/sai/' ) ); ?>" class="menu-link"><span>SAI BPVDA</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/vida-estudiantil/' ) ); ?>" class="menu-link"><span>Vida estudiantil</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/ecosistema-digital/' ) ); ?>" class="menu-link"><span>Ecosistema digital</span> <i class="menu-chevron">↗</i></a></li></ul>
    </div><div class="menu-group">
      <span class="menu-group-title">03 FAMILIA Y COMUNIDAD</span>
      <ul class="menu-list"><li><a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="menu-link"><span>Admisiones y matrícula</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/portal-padres/' ) ); ?>" class="menu-link"><span>Portal de padres</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="menu-link"><span>Contacto y atención</span> <i class="menu-chevron">↗</i></a></li></ul>
    </div><div class="menu-group">
      <span class="menu-group-title">04 PRIMARIA</span>
      <ul class="menu-list"><li><a href="<?php echo esc_url( home_url( '/prekinder/' ) ); ?>" class="menu-link"><span>Prekínder</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/kinder/' ) ); ?>" class="menu-link"><span>Kínder</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/primaria/' ) ); ?>" class="menu-link"><span>Primaria</span> <i class="menu-chevron">↗</i></a></li></ul>
    </div><div class="menu-group">
      <span class="menu-group-title">05 SECUNDARIA Y BACHILLERES</span>
      <ul class="menu-list"><li><a href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>" class="menu-link"><span>Secundaria</span> <i class="menu-chevron">↗</i></a></li><li><a href="<?php echo esc_url( home_url( '/bachilleres/' ) ); ?>" class="menu-link"><span>Bachilleres</span> <i class="menu-chevron">↗</i></a></li></ul>
    </div>
        </div>
      </nav>
    </div>

    <!-- Pie del Menú Modal con Contacto Directo y Redes Sociales -->
    <div class="menu-panel__foot">
      <div class="menu-panel__contact">
        <span>Calle San José, 24 de Diciembre, Ciudad de Panamá</span>
        <a href="tel:+5073915811">391-5811</a>
        <a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a>
      </div>
    </div>
  </div>
</header>

    <!-- ============================================================ -->
    <!-- 2. SECCIÓN PRINCIPAL: HERO SLIDER HORIZONTAL               -->
    <!-- ============================================================ -->
    <!-- Slider inmersivo multipantalla con autoplay adaptativo.      -->
    <!-- Primer slide dura 10s (video apertura); siguientes duran 6s. -->
    <!-- Incluye soporte táctil (swipe), teclado y control de foco.   -->
    <section class="hero" id="inicio" aria-label="Presentación destacada" data-slider>
      <div class="hero-track" data-slider-track>
        <!-- Diapositiva 01: Video Hero de Apertura (Duración 10 segundos) -->
        <article class="hero-slide" data-slide aria-hidden="false">
          <video autoplay muted loop playsinline tabindex="-1">
            <source src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/hero-campus.mp4" type="video/mp4">
          </video>
          <div class="hero-wash"></div>
          <div class="hero-content">
            <p class="eyebrow">Educación con propósito Panamá</p>
            <h1>Forjando<br><em>Espíritus Nuevos.</em></h1>
            <p class="hero-copy">Una comunidad cristiana que acompaña a niños y jóvenes para transformar el conocimiento
              en acción y cada talento en una forma de servir. Formamos estudiantes capaces de aprender con propósito,
              crecer en su relación con Dios y aportar con responsabilidad a su comunidad.</p>
            <div class="hero-actions">
              <a class="primary-btn" href="#experiencia">Conoce la experiencia <span>↗</span></a>
            </div>
          </div>
        </article>

        <article class="hero-slide" data-slide aria-hidden="true">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/learn-mind.webp" alt="Estudiante en práctica de aprendizaje reflexivo">
          <div class="hero-wash"></div>
          <div class="hero-content">
            <p class="eyebrow">Nuestra misión</p>
            <h2 class="slide-heading">Educar la mente.<br><em>Formar carácter.</em></h2>
            <p class="hero-copy">Educamos con excelencia, fe y valores cristianos, acompañando a cada estudiante en su
              crecimiento académico, personal y espiritual. Promovemos el amor al prójimo, la responsabilidad, la
              honestidad, la disciplina, la solidaridad y el deseo de poner los talentos al servicio de los demás.</p>
            <div class="hero-actions">
              <a class="primary-btn" href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>" tabindex="-1">Conoce nuestra misión <span>↗</span></a>
            </div>
          </div>
        </article>

        <article class="hero-slide" data-slide aria-hidden="true">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/culture-main.webp" alt="Estudiantes en actividades culturales y artísticas">
          <div class="hero-wash"></div>
          <div class="hero-content">
            <p class="eyebrow">Nuestra visión</p>
            <h2 class="slide-heading">Raíces firmes.<br><em>Mirada amplia.</em></h2>
            <p class="hero-copy">Formamos líderes con carácter y propósito, preparados para aprender, convivir y
              responder a un mundo cambiante. Buscamos que cada etapa fortalezca sus conocimientos, valores, capacidades
              y confianza para afrontar nuevos desafíos sin perder de vista su fe y compromiso con los demás.</p>
            <div class="hero-actions">
              <a class="primary-btn" href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>" tabindex="-1">Explora nuestra visión <span>↗</span></a>
            </div>
          </div>
        </article>

        <article class="hero-slide" data-slide aria-hidden="true">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/recognition.webp" alt="Estudiantes con reconocimientos de excelencia académica">
          <div class="hero-wash"></div>
          <div class="hero-content">
            <p class="eyebrow">Valores que se viven</p>
            <h2 class="slide-heading">Fe. Respeto.<br><em>Excelencia.</em></h2>
            <p class="hero-copy">La esperanza, la dignidad y la mejora constante orientan la experiencia diaria de cada
              estudiante y cada familia. Estos valores se reflejan en la forma de aprender, convivir, asumir
              responsabilidades, superar dificultades y servir a quienes nos rodean.</p>
            <div class="hero-actions">
              <a class="primary-btn" href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>" tabindex="-1">Descubre nuestros valores <span>↗</span></a>
            </div>
          </div>
        </article>

        <article class="hero-slide" data-slide aria-hidden="true">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/campus-entry.webp" alt="Entrada y fachada principal de la escuela">
          <div class="hero-wash"></div>
          <div class="hero-content">
            <p class="eyebrow">Tu familia es bienvenida</p>
            <h2 class="slide-heading">El próximo paso<br><em>comienza aquí.</em></h2>
            <p class="hero-copy">Conoce nuestro proceso de admisión, visita el colegio y conversa con el equipo que
              acompañará a tu familia. Queremos que este primer acercamiento sea claro, cercano y te permita conocer la
              propuesta educativa de nuestra comunidad.</p>
            <div class="hero-actions">
              <a class="primary-btn" href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" tabindex="-1">Inicia tu admisión <span>↗</span></a>
            </div>
          </div>
        </article>
      </div>

      <!-- Controles de Navegación del Slider: Anterior, Contador/Progreso y Siguiente -->
      <div class="hero-controls"><button type="button" data-prev aria-label="Historia anterior">←</button>
        <div class="hero-progress" aria-label="Progreso del slider"><span data-current>01</span><i><b data-progress
              style="width:20%"></b></i><span data-total>05</span></div><button type="button" data-next
          aria-label="Historia siguiente">→</button>
      </div>
      <!-- Leyenda Lateral Vertical de Identidad Institucional -->
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

    <div id="contenido">

      <!-- Dos tarjetas fotográficas permanecen fuera del slider. -->
      <section class="statement section-pad" id="experiencia">
        <div class="section-number">01 — Nuestra experiencia</div>
        <div class="statement-grid">
          <div class="statement-col-left">
            <h2>Una escuela se reconoce por lo que <em>hace posible.</em></h2>
            <div class="guide-copy">
              <span>Nuestra promesa</span>
              Unir fe, conocimiento y acción para que el aprendizaje tenga sentido dentro y fuera del aula, formando
              personas responsables, solidarias y preparadas para utilizar sus talentos con propósito.
            </div>
          </div>
          <div class="statement-col-right">
            <p class="lead">Aquí cada estudiante aprende haciendo, preguntando y colaborando, acompañado por docentes y
              una comunidad comprometida con su crecimiento. Buscamos que el aula sea un espacio para desarrollar
              conocimientos, habilidades, valores y confianza, conectando lo aprendido con situaciones reales.</p>
          </div>
        </div>

        <!-- Mosaico Fotográfico Asimétrico (Aprender Haciendo + Fe/Conocimiento/Acción) -->
        <div class="mosaic">
          <figure class="mosaic-main">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/science-student.webp" alt="Estudiante en una experiencia de laboratorio">
            <figcaption><span>Aprender haciendo</span><b>La curiosidad encuentra método.</b></figcaption>
          </figure>
          <figure class="mosaic-wide">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/roboticfair-team.webp" alt="Estudiantes en feria de robótica y tecnología">
            <figcaption><span>Trabajo colaborativo</span><b>Ideas compartidas, soluciones construidas.</b></figcaption>
          </figure>
          <div class="mosaic-note"><strong>Fe + conocimiento + acción</strong>
            <p>Tres dimensiones de nuestra experiencia formativa.</p><i>✦</i>
          </div>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SECCIÓN 02: OFERTA ACADÉMICA Y RUTAS POR ETAPA FORMATIVA     -->
      <!-- ============================================================ -->
      <section class="programs section-pad" id="niveles">
        <div class="section-heading light">
          <div><span class="section-number">02 — Oferta académica</span>
            <h2>Un camino para<br>cada <em>etapa.</em></h2>
          </div>
          <p>Una ruta continua que reconoce las necesidades de cada edad y prepara el siguiente paso, acompañando el
            desarrollo académico, personal y espiritual de cada estudiante.</p>
        </div>

        <div class="program-grid">
          <article class="program-card">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/campus-prescholar.webp" alt="Área preescolar y espacios lúdicos del campus">
            <div class="program-overlay"></div>
            <span>01</span>
            <div>
              <h3>Preescolar</h3>
              <p>Exploración, juego y primeras bases del aprendizaje, acompañadas por experiencias que fortalecen la
                confianza, la convivencia y el descubrimiento.</p><a href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>">Conoce esta etapa
                <b>↗</b></a>
            </div>
          </article>

          <article class="program-card">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/early-learning.webp" alt="Estudiantes de primaria en aula de aprendizaje activo">
            <div class="program-overlay"></div>
            <span>02</span>
            <div>
              <h3>Primaria</h3>
              <p>Autonomía, curiosidad, hábitos y pensamiento, fortaleciendo conocimientos fundamentales,
                responsabilidad, compañerismo y valores cristianos.</p><a href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>">Conoce esta etapa
                <b>↗</b></a>
            </div>
          </article>

          <article class="program-card">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/robotics-2.webp" alt="Alumnos en taller de tecnología y robótica educativa">
            <div class="program-overlay"></div>
            <span>03</span>
            <div>
              <h3>Secundaria</h3>
              <p>Fortalecimiento académico, social y personal mediante retos que impulsan el pensamiento crítico, la
                disciplina, la perseverancia y el liderazgo.</p><a href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>">Conoce esta etapa <b>↗</b></a>
            </div>
          </article>

          <article class="program-card">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/community.webp" alt="Comunidad educativa de docentes, estudiantes y familias">
            <div class="program-overlay"></div>
            <span>04</span>
            <div>
              <h3>Bachillerato</h3>
              <p>Preparación para la universidad y la vida adulta, consolidando conocimientos, habilidades, carácter y
                propósito para asumir nuevos desafíos con responsabilidad.</p><a href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>">Conoce esta
                etapa <b>↗</b></a>
            </div>
          </article>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SECCIÓN 03: APRENDIZAJE ACTIVO Y MÉTRICAS FORMATIVAS         -->
      <!-- ============================================================ -->
      <section class="feature section-pad">
        <div class="feature-image"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/science-action.webp"
            alt="Estudiantes desarrollando una experiencia científica"><span>En acción</span></div>
        <div class="feature-copy">
          <span class="section-number">03 — Aprendizaje activo</span>
          <h2>Más que clases: <em>experiencias</em> de aprendizaje.</h2>
          <p>Los proyectos científicos, tecnológicos y creativos conectan la planificación con preguntas reales,
            prototipos, investigación y comunicación. Así, los estudiantes pueden aplicar conocimientos, trabajar en
            equipo, experimentar soluciones y aprender de cada proceso.</p>
          <div class="feature-metrics">
            <div><strong>01</strong><span>Plantear<br>preguntas</span></div>
            <div><strong>02</strong><span>Crear<br>prototipos</span></div>
            <div><strong>03</strong><span>Comunicar<br>resultados</span></div>
          </div>
          <a class="text-link" href="<?php echo esc_url( home_url( '/ecosistema-digital/' ) ); ?>">Conoce el currículo <span>→</span></a>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SECCIÓN 04: TALENTO QUE TRASCIENDE (LOGROS Y RETOS)          -->
      <!-- ============================================================ -->
      <section class="achievements section-pad" id="logros">
        <div class="achievement-intro">
          <span class="section-number">04 — Talento que trasciende</span>
          <h2>Cuando una idea<br>sale del <em>aula.</em></h2>
          <p>Celebramos el esfuerzo, la disciplina y la capacidad de convertir una idea en una experiencia compartida.
            Cada proyecto y cada reto representan una oportunidad para descubrir talentos, superar dificultades y
            aprender del proceso.</p>
        </div>

        <article class="achievement-feature">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/achievement.webp" alt="Estudiantes en una actividad escolar">
          <div>
            <span>Robótica · Aprendizaje activo</span>
            <h3>Ingenio, disciplina y trabajo en equipo.</h3>
            <p>Los retos tecnológicos llevan a investigar, probar soluciones y comunicar lo aprendido, fortaleciendo la
              creatividad, el pensamiento lógico, la perseverancia y la capacidad de colaborar.</p>
            <a href="<?php echo esc_url( home_url( '/vida-estudiantil/' ) ); ?>">Explorar actividades →</a>
          </div>
        </article>

        <article class="achievement-small">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/recognition.webp" alt="Estudiantes mostrando un reconocimiento">
          <div>
            <span>Emprendimiento</span>
            <h3>Ideas con propósito</h3>
            <p>Crear también significa escuchar, resolver un problema y aprender del proceso. Cada iniciativa puede
              convertirse en una oportunidad para desarrollar responsabilidad, creatividad y compromiso.</p>
          </div>
        </article>
      </section>

      <!-- ============================================================ -->
      <!-- SECCIÓN 05: SOMOS COMUNIDAD (VIDEO INMERSIVO Y ENLACES)      -->
      <!-- ============================================================ -->
      <section class="community" id="comunidad">
        <video autoplay muted playsinline tabindex="-1">
          <source src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/school-life-1.mp4" type="video/mp4">
        </video>
        <div class="community-wash"></div>
        <div class="community-content">
          <span class="section-number">05 — Somos comunidad</span>
          <h2><span class="title-sub">Una escuela que se</span><em>vive en compañía.</em></h2>
          <p>Estudiantes, familias, docentes e iglesia participan en una misma comunidad que aprende, celebra y sirve.
            Creemos que la formación se fortalece cuando existe acompañamiento, respeto y compromiso entre quienes
            forman parte de la vida escolar.</p>
          <div class="community-links"><a href="<?php echo esc_url( home_url( '/quienes-somos/' ) ); ?>"><span>01</span>Comunidad escolar<b>↗</b></a><a
              href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>"><span>02</span>Comunidad de familias<b>↗</b></a><a
              href="<?php echo esc_url( home_url( '/vida-estudiantil/' ) ); ?>"><span>03</span>Actividades y talentos<b>↗</b></a></div>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SECCIÓN GUÍA: EXPLORA BPVDA (RUTAS EDITORIALES RÁPIDAS)      -->
      <!-- ============================================================ -->
      <section class="guide section-pad">
        <div class="guide-title">
          <span>Explora BPVDA</span>
          <h2>La información que buscas, en el lugar correcto.</h2>
          <p>La portada presenta lo esencial y cada página desarrolla un tema con claridad.</p>
        </div>
        <div class="guide-list">
          <a href="<?php echo esc_url( home_url( '/quienes-somos/' ) ); ?>"><span>01</span>
            <h3>Nuestra escuela</h3>
            <p>Conoce el propósito, los valores y la comunidad que forman parte de BPVDA.</p><b>↗</b>
          </a>
          <a href="<?php echo esc_url( home_url( '/ecosistema-digital/' ) ); ?>"><span>02</span>
            <h3>Currículo</h3>
            <p>Explora las áreas, conocimientos y herramientas que acompañan la formación.</p><b>↗</b>
          </a>
          <a href="<?php echo esc_url( home_url( '/vida-estudiantil/' ) ); ?>"><span>03</span>
            <h3>Actividades</h3>
            <p>Descubre experiencias para desarrollar talentos, convivir y aprender fuera del aula.</p><b>↗</b>
          </a>
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>"><span>04</span>
            <h3>Admisión</h3>
            <p>Encuentra una ruta clara para conocer el colegio y comenzar el proceso con tu familia.</p><b>↗</b>
          </a>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SECCIÓN CONTACTO: EL SIGUIENTE PASO (LLAMADO A LA ACCIÓN)    -->
      <!-- ============================================================ -->
      <section class="contact section-pad" id="contacto">
        <div class="contact-photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/media/campus-entry.webp"
            alt="Entrada del Colegio Buen Pastor Voz de Alerta"></div>
        <div class="contact-copy">
          <span>El siguiente paso</span>
          <h2>Ven a conocer<br>nuestra comunidad.</h2>
          <p>Conversa con nuestro equipo, coordina una visita y conoce el proceso de admisión. Será una oportunidad para
            descubrir de cerca nuestra propuesta educativa, resolver tus preguntas y conocer el entorno donde crecerá tu
            familia.</p>
          <div><a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>">Solicitar información <b>→</b></a><a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>">Ver admisiones
              <b>↗</b></a></div>
        </div>
      </section>

    </div>
    <footer>
      <div class="footer-top">
        <div class="footer-col footer-col--brand">
          <div class="footer-brand">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/brand/pastor-logo-white.png" alt="Buen Pastor" class="footer-pastor-logo">
            <div class="footer-brand-meta">
              <span class="footer-school-name">Colegio Buen Pastor</span>
              <span class="footer-school-sub">Voz de Alerta</span>
            </div>
          </div>
          <p class="footer-location">Calle San José, Urb. Monterrico, Corregimiento 24 de Diciembre, Ciudad de Panamá
          </p>
          <a href="https://maps.app.goo.gl/r5Arxesjc7P2Uzew7" target="_blank" rel="noopener noreferrer"
            class="footer-maps-link">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/icons/place-icon.png" alt="" class="footer-maps-icon">
            <span>Ver en Google Maps</span>
          </a>
        </div>

        <div class="footer-col">
          <h4>Oficina</h4>
          <p class="footer-phone"><a href="tel:+5073915811">391-5811</a></p>
          <div class="footer-hours-block">
            <span class="footer-hours-tag">Horario Regular</span>
            <p class="footer-hours">7:30 a.m. - 2:00 p.m.</p>
          </div>
          <div class="footer-hours-block">
            <span class="footer-hours-tag">Horario de Verano</span>
            <p class="footer-hours">8:00 a.m. - 2:00 p.m.</p>
          </div>
        </div>

        <div class="footer-col">
          <h4>AtenciÓn al cliente</h4>
          <p class="footer-phone">
            <a href="tel:+5073915811">391-5811</a>
            <span class="footer-phone-sep">/</span>
            <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="footer-phone-wa">
              6744-1351
            </a>
          </p>
          <p class="footer-email"><a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a></p>
        </div>
      </div>

      <!-- Bloque Inferior del Footer: Derechos Reservados y Redes Sociales Institucionales -->
      <div class="footer-bottom">
        <p class="footer-copy">&copy; 2026 BUEN PASTOR VOZ DE ALERTA - HOLA JOSE ESTOY AQUI</p>
        <div class="footer-socials">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@buenpastor-vda.net" target="_blank"
            rel="noopener noreferrer" aria-label="Enviar correo por Gmail" class="social-link">
            <svg viewBox="0 0 512 512" fill="none" style="width:20px; height:20px; display:block;">
              <path fill="#ffffff"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/people/Escuela-Buen-Pastor-Voz-De-Alerta/100045208036432/?locale=de_DE"
            target="_blank" rel="noopener noreferrer" aria-label="Facebook BPVDA" class="social-link">
            <svg viewBox="0 0 320 512" fill="none" style="width:20px; height:20px; display:block;">
              <path fill="#ffffff"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/bpvda/?hl=es" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram BPVDA" class="social-link">
            <svg viewBox="0 0 24 24" fill="none" style="width:20px; height:20px; display:block;"><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6C16.4477 6 16 6.44772 16 7C16 7.55228 16.4477 8 17 8Z"/></svg>
          </a>
          <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp BPVDA"
            class="social-link">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/icons/whatsapp-icon.png" alt="WhatsApp" class="social-icon-img">
          </a>
        </div>
      </div>
    </footer>
  </main>

<?php get_footer(); ?>
