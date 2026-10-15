<?php
/**
 * Pagina: instalaciones (copia fiel de instalaciones.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Panorámica del Campus BPVDA -->
    <section class="inst-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9387.webp" alt="Campus y patio central del Colegio Buen Pastor Voz de Alerta bajo sombra natural" class="inst-hero__bg" loading="eager">
      <div class="inst-hero__overlay"></div>
      <div class="inst-hero__container">
        <span class="inst-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          01 NUESTRA ESCUELA · INSTALACIONES Y CAMPUS
        </span>
        <h1>Espacios seguros pensados para <mark>aprender y convivir</mark>.</h1>
        <p class="inst-hero__lead">Un campus integral en 24 de Diciembre diseñado para el confort, la formación académica sólida, la innovación tecnológica y el sano esparcimiento cristiano de cada uno de nuestros estudiantes.</p>
        <div class="inst-hero__actions">
          <a href="#zonas" class="hero-btn-primary">Explorar Zonas del Campus <b>↓</b></a>
          <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-outline">Agendar una Visita Presencial <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Capacidades del Campus -->
    <section class="inst-facts-strip">
      <div class="inst-facts-grid">
        <div class="inst-fact-card">
          <span class="inst-fact-num">100<span>%</span></span>
          <span class="inst-fact-label">Aulas climatizadas y confortables</span>
        </div>
        <div class="inst-fact-card">
          <span class="inst-fact-num">3<span> Pabellones</span></span>
          <span class="inst-fact-label">Preescolar, Primaria y Secundaria delimitados</span>
        </div>
        <div class="inst-fact-card">
          <span class="inst-fact-num">1<span> Lab</span></span>
          <span class="inst-fact-label">Informática, STEM y Robótica educativa</span>
        </div>
        <div class="inst-fact-card">
          <span class="inst-fact-num">2<span> Áreas</span></span>
          <span class="inst-fact-label">Cancha multideportiva y parque infantil VDA</span>
        </div>
      </div>
    </section>

    <!-- Guía de Espacios por Zonas Clave -->
    <section class="inst-zones-section" id="zonas">
      <div class="inst-zones-header">
        <span class="inst-hero__eyebrow" style="color: var(--orange);">INFRAESTRUCTURA EDUCATIVA</span>
        <h2>Áreas diseñadas para cada etapa formativa</h2>
        <p>Cada rincón de nuestras instalaciones responde a estándares de bienestar pedagógico, ventilación, seguridad perimetral y tecnología aplicada al aula.</p>
      </div>

      <div class="inst-zones-grid">
        <!-- Zona 1: Pabellones de Clases -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9383.webp" alt="Pabellón de aulas y corredores del Colegio Buen Pastor" loading="lazy">
            <span class="inst-zone-badge">Academia</span>
          </div>
          <div class="inst-zone-body">
            <h3>Aulas Modernas y Entornos de Aprendizaje</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Aulas amplias con climatización continua y excelente iluminación.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Mobiliario ergonómico adaptado a las edades de cada nivel.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Corredores techados, rampas y señalización de evacuación integral.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Zona 2: Laboratorio de Tecnología y Ciencias -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9531.webp" alt="Laboratorio de cómputo y robótica con estudiantes" loading="lazy">
            <span class="inst-zone-badge">Innovación</span>
          </div>
          <div class="inst-zone-body">
            <h3>Laboratorio de Cómputo, Robótica y Ciencias</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Estaciones informáticas con acceso al ecosistema digital institucional.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Equipamiento interactivo para programación, robótica y ciencia práctica.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Soporte integral a los bachilleratos en Ciencias e Informática.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Zona 3: Cancha Multideportiva -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9391.webp" alt="Cancha polideportiva techada para baloncesto y fútbol" loading="lazy">
            <span class="inst-zone-badge">Deporte</span>
          </div>
          <div class="inst-zone-body">
            <h3>Cancha Multideportiva y Espacios Recreativos</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Área protegida y ventilada para educación física y entrenamiento.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Cancha multiuso acondicionada para baloncesto, voleibol y futsal.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Escenario central para torneos intercolegiales y actos cívicos.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Zona 4: VDA Park Infantil -->
        <article class="inst-zone-card">
          <div class="inst-zone-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9394.webp" alt="Parque infantil VDA Park con juegos modulares protegidos" loading="lazy">
            <span class="inst-zone-badge">Recreación</span>
          </div>
          <div class="inst-zone-body">
            <h3>VDA Park: Esparcimiento y Juego Infantil</h3>
            <ul class="inst-zone-features">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Parque infantil exclusivo para Preescolar y primeros años de Primaria.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Juegos modulares de alta durabilidad bajo supervisión constante.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Piso protector para el libre juego motriz y la convivencia sana.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Mosaico Bento Arquitectónico -->
    <section class="inst-bento-section">
      <div class="inst-bento-header">
        <span class="inst-hero__eyebrow" style="color: var(--turquoise);">RECORRIDO VISUAL</span>
        <h2>Detalles arquitectónicos de nuestro campus</h2>
        <p>Una mirada fotográfica a los ambientes donde cada día florece el compromiso educativo del Buen Pastor.</p>
      </div>

      <div class="inst-bento-grid">
        <!-- Item 1 (7 cols) -->
        <article class="inst-bento-item inst-bento-item--1">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9408.webp" alt="Pabellón de preescolar y áreas de primera infancia" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">PREESCOLAR SEGURO</span>
            <h3>Pabellón exclusivo de Primera Infancia</h3>
            <p>Instalaciones adaptadas con accesos controlados y zonas lúdicas especializadas para los más pequeños.</p>
          </div>
        </article>

        <!-- Item 2 (5 cols) -->
        <article class="inst-bento-item inst-bento-item--2">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9371.webp" alt="Acceso principal y punto de control del colegio" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">ACCESIBILIDAD Y CONTROL</span>
            <h3>Entrada principal y garita de seguridad</h3>
            <p>Seguridad perimetral y protocolos rigurosos de acceso para la tranquilidad de las familias.</p>
          </div>
        </article>

        <!-- Item 3 (5 cols) -->
        <article class="inst-bento-item inst-bento-item--3">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/campus-restzone.webp" alt="Corredores techados y áreas de descanso estudiantil" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">ESPACIOS COMUNES</span>
            <h3>Corredores techados y descanso</h3>
            <p>Zonas frescas y sombreadas que invitan a la sana convivencia y el compañerismo entre clases.</p>
          </div>
        </article>

        <!-- Item 4 (7 cols) -->
        <article class="inst-bento-item inst-bento-item--4">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9400.webp" alt="Módulos de recreación infantil en el patio escolar" loading="lazy">
          <div class="inst-bento-overlay">
            <span class="inst-bento-tag">RECREACIÓN ACTIVA</span>
            <h3>Módulos de juego y desarrollo motor</h3>
            <p>Estructuras diseñadas para la coordinación motriz, la socialización y el juego guiado en un entorno protegido.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre: Recorrido Presencial -->
    <section class="inst-cta">
      <div class="inst-cta__inner">
        <h2>Conoce nuestras instalaciones en persona</h2>
        <p>Te abrimos las puertas de nuestro campus en 24 de Diciembre para que recorras las aulas, conozcas las medidas de seguridad y experimentes el ambiente familiar donde tus hijos crecerán.</p>
        <div class="inst-cta__actions">
          <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-primary">Agendar un Recorrido Guiado <b>↗</b></a>
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-outline">Proceso de Admisión <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
