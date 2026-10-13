<?php
/**
 * Pagina: secundaria (copia fiel de secundaria.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Secundaria y Bachilleres con encuadre óptimo y fotografía real -->
    <section class="interior-hero interior-hero--secundaria">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9528.webp" alt="Estudiantes de secundaria en los pasillos del Colegio Buen Pastor Voz de Alerta">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>04 NIVELES ACADÉMICOS · SECUNDARIA</span>
        <h1>Preparación para los retos que <mark>vienen</mark>.</h1>
        <p>Acompañamos a los jóvenes con solidez académica, principios cristianos y herramientas tecnológicas para descubrir su vocación y liderar con propósito.</p>
      </div>
    </section>

    <!-- Presentación Editorial (Split Feature) -->
    <section class="split-feature">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9510.webp" alt="Estudiantes de secundaria en actividades formativas">
      <div>
        <span class="section-number">04 NIVELES ACADÉMICOS</span>
        <h2>Secundaria y Bachilleres</h2>
        <p>En el Colegio Buen Pastor Voz de Alerta acompañamos a los jóvenes en una etapa crucial de definición vocacional, fortaleciendo el pensamiento crítico, la solidez académica y el carácter cristiano para triunfar en los estudios superiores.</p>
      </div>
    </section>

    <!-- Alternativa Editorial Dinámica: Bento Grid Asimétrico (Reemplaza las tarjetas repetitivas) -->
    <section class="bento-section">
      <div class="bento-header">
        <span class="bento-tagline">Formación de Vanguardia</span>
        <h2 class="bento-title">Un Entorno Diseñado para Descubrir, Crear y Liderar</h2>
        <p class="bento-desc">
          Combinamos rigor académico, laboratorios de ciencias y tecnología, y formación humana para preparar a las nuevas generaciones frente a los desafíos universitarios y profesionales.
        </p>
      </div>

      <div class="bento-grid">
        <!-- 1. Tarjeta Principal Hero Bento (7 columnas) -->
        <article class="bento-card-main">
          <img class="bento-bg" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9530.webp" alt="Clase activa con proyecto experimental en secundaria">
          <div class="bento-overlay"></div>
          <div class="bento-content">
            <span class="bento-badge-live">Campus Activo</span>
            <h3>Aulas Equipadas con Enfoque Tecnológico</h3>
            <p>Espacios donde la teoría se convierte en experimentación constante con herramientas interactivas, proyectos colaborativos y metodología STEM aplicada al aula.</p>
            <a href="<?php echo esc_url( home_url( '/bachilleres/' ) ); ?>" class="bento-btn-action">Explorar Bachilleres →</a>
          </div>
        </article>

        <!-- 2. Tarjeta Métrica Destacada (5 columnas) -->
        <article class="bento-card-stat">
          <div>
            <div class="bento-stat-num">100<span>%</span></div>
            <h4>Bachillerato con Énfasis Práctico</h4>
            <p>Nuestros planes de estudio integran laboratorios de ciencias exactas, contabilidad moderna y programación desde los primeros ciclos.</p>
          </div>
          <ul class="bento-mini-checks">
            <li>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Preparación directa para admisión universitaria
            </li>
            <li>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Robótica educativa y pensamiento computacional
            </li>
            <li>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Acompañamiento psicopedagógico permanente
            </li>
          </ul>
        </article>

        <!-- 3. Tarjeta Micro 1 (4 columnas) -->
        <article class="bento-card-sub">
          <div>
            <div class="bento-sub-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h4>Ecosistema SAI</h4>
            <p>Portal web para seguimiento de calificaciones, asistencias y tareas en tiempo real para padres y alumnos.</p>
          </div>
          <div class="bento-pill-group">
            <span>Calificaciones</span>
            <span>Horarios</span>
            <span>Comunicación</span>
          </div>
        </article>

        <!-- 4. Tarjeta Micro 2 (4 columnas) -->
        <article class="bento-card-sub">
          <div>
            <div class="bento-sub-icon orange">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h4>Valores y Convivencia</h4>
            <p>Formación ética con principios cristianos que inspiran integridad, empatía y sentido de comunidad.</p>
          </div>
          <a href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>" class="bento-link-arrow">Ver Filosofía Institucional →</a>
        </article>

        <!-- 5. Tarjeta Micro 3 (4 columnas) -->
        <article class="bento-card-sub">
          <div>
            <div class="bento-sub-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
            </div>
            <h4>Ciencia y Robótica</h4>
            <p>Proyectos de robótica y ferias científicas donde cada alumno desarrolla pensamiento crítico y autonomía.</p>
          </div>
          <div class="bento-pill-group">
            <span>Laboratorio</span>
            <span>Proyectos STEM</span>
            <span>Feria Anual</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Voz Estudiantil BPVDA -->
    <section class="student-voice section-pad">
      <blockquote>“En BPVDA encontramos las herramientas para superarnos día a día, docentes comprometidos y una comunidad que cree en nuestro potencial.”</blockquote>
      <span>ESTUDIANTE BPVDA</span>
    </section>
  </main>

<?php get_footer(); ?>
