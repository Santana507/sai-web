<?php
/**
 * Pagina: ecosistema-digital (copia fiel de ecosistema-digital.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Ecosistema Digital BPVDA -->
    <section class="eco-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9529.webp" alt="Estudiantes en el laboratorio digital utilizando plataformas educativas en el Colegio Buen Pastor" loading="eager">
      <div class="eco-hero__overlay"></div>
      <div class="eco-hero__container">
        <span class="eco-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
          02 ENFOQUE EDUCATIVO · ECOSISTEMA DIGITAL
        </span>
        <h1>Tecnología pedagógica que potencia cada <mark>habilidad</mark>.</h1>
        <p class="eco-hero__lead">En el Buen Pastor integramos plataformas educativas de clase mundial para expandir el pensamiento crítico, la fluidez lectora, el razonamiento matemático y la creatividad de nuestros alumnos.</p>
        <div class="eco-hero__actions">
          <a href="#plataformas" class="hero-btn-primary">Explorar Plataformas <b>↓</b></a>
          <a href="<?php echo esc_url( home_url( '/sai/' ) ); ?>" class="hero-btn-outline">Campus Virtual SAI <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas Digitales -->
    <section class="eco-facts-strip">
      <div class="eco-facts-grid">
        <div class="eco-fact-card">
          <span class="eco-fact-num">+8<span> Alianzas</span></span>
          <span class="eco-fact-label">Plataformas educativas oficiales integradas</span>
        </div>
        <div class="eco-fact-card">
          <span class="eco-fact-num">100<span>%</span></span>
          <span class="eco-fact-label">Alumnos con licencias institucionales activas</span>
        </div>
        <div class="eco-fact-card">
          <span class="eco-fact-num">STEM<span> &amp; Lógica</span></span>
          <span class="eco-fact-label">Enfoque pedagógico basado en competencias</span>
        </div>
        <div class="eco-fact-card">
          <span class="eco-fact-num">Cloud<span> 24/7</span></span>
          <span class="eco-fact-label">Continuidad de aprendizaje en colegio y hogar</span>
        </div>
      </div>
    </section>

    <!-- Manifiesto de Innovación Ética -->
    <section class="eco-manifesto">
      <div class="eco-manifesto__inner">
        <div class="eco-manifesto__media">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9520.webp" alt="Estudiante en aula concentrado trabajando con herramientas informáticas" loading="lazy">
          <div class="eco-manifesto__badge">
            <strong>TECNOLOGÍA CON VALORES</strong>
            Formamos creadores conscientes y usuarios éticos: la tecnología al servicio de la sabiduría y el carácter.
          </div>
        </div>
        <div class="eco-manifesto__content">
          <span class="eco-hero__eyebrow" style="color: var(--orange);">INNOVACIÓN PEDAGÓGICA</span>
          <h2>Herramientas que despiertan el pensamiento, no la distracción</h2>
          <p class="eco-manifesto__lead">La tecnología en el Colegio Buen Pastor Voz de Alerta no es un sustituto del maestro, sino un amplificador del aprendizaje profundo y personalizado.</p>
          <p class="eco-manifesto__text">Cada una de nuestras alianzas digitales responde a un propósito curricular específico: agilizar la lectura comprensiva, desafiar la resolución lógica de problemas, estimular el diseño visual y garantizar una comunicación transparente con las familias. Todo enmarcado en principios cristianos de sobriedad, discernimiento y uso responsable.</p>
          <div class="eco-manifesto__quote">
            <p>«El corazón del entendido adquiere sabiduría; y el oído de los sabios busca la ciencia.»</p>
            <cite>Proverbios 18:15 · Sabiduría y Conocimiento Digital</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Catálogo de Plataformas -->
    <section class="eco-platforms-section" id="plataformas">
      <div class="eco-platforms-header">
        <span class="eco-hero__eyebrow" style="color: var(--turquoise);">CATÁLOGO INTERACTIVO</span>
        <h2>Alianzas tecnológicas que impulsan el aprendizaje</h2>
        <p>Conoce las herramientas líderes a nivel global que enriquecen cada clase y fortalecen las competencias de nuestros estudiantes.</p>
      </div>

      <div class="eco-platforms-grid">
        <!-- 01 Progrentis -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/Progrentis1.png" alt="Logo oficial Progrentis" loading="lazy">
          </div>
          <span class="eco-platform-tag">NEUROEDUCACIÓN</span>
          <h3>Progrentis</h3>
          <span class="eco-platform-levels">Primaria y Secundaria</span>
          <p>Entrenamiento neurocognitivo que desarrolla la velocidad de lectura comprensiva, el escaneo crítico y la decodificación ágil de textos complejos.</p>
        </article>

        <!-- 02 Matific -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/Matific1.png" alt="Logo oficial Matific" loading="lazy">
          </div>
          <span class="eco-platform-tag">PENSAMIENTO LÓGICO</span>
          <h3>Matific</h3>
          <span class="eco-platform-levels">Preescolar y Primaria</span>
          <p>Laboratorio matemático gamificado donde los niños experimentan con fracciones, geometría y operaciones mediante dinámicas visuales interactivas.</p>
        </article>

        <!-- 03 Canva for Education -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/Canva1.webp" alt="Logo oficial Canva for Education" loading="lazy">
          </div>
          <span class="eco-platform-tag">CREATIVIDAD VISUAL</span>
          <h3>Canva for Education</h3>
          <span class="eco-platform-levels">Todos los Niveles</span>
          <p>Suite creativa profesional que capacita a los alumnos en diseño gráfico, creación de infografías, presentaciones orales y producción multimedia.</p>
        </article>

        <!-- 04 Edvoice -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/Edvoice1.webp" alt="Logo oficial Edvoice" loading="lazy">
          </div>
          <span class="eco-platform-tag">COMUNICACIÓN FAMILIAR</span>
          <h3>Edvoice</h3>
          <span class="eco-platform-levels">Comunidad de Padres</span>
          <p>Canal oficial de mensajería instantánea escolar para entrega de circulares, avisos institucionales, reportes de asistencia y seguimiento de tareas.</p>
        </article>

        <!-- 05 SAI BPVDA Moodle -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/SAI logo oficial.jpg" alt="Logo oficial SAI BPVDA" loading="lazy">
          </div>
          <span class="eco-platform-tag">CAMPUS VIRTUAL</span>
          <h3>SAI BPVDA (Moodle)</h3>
          <span class="eco-platform-levels">Primaria y Secundaria</span>
          <p>Plataforma centralizada del colegio para repositorios de asignaturas, entregas digitales de tareas, cuestionarios formativos y registro de calificaciones.</p>
        </article>

        <!-- 06 King's Corner -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/Kingscorner.png" alt="Logo oficial King's Corner" loading="lazy">
          </div>
          <span class="eco-platform-tag">IDIOMA INGLÉS</span>
          <h3>King's Corner</h3>
          <span class="eco-platform-levels">Primaria y Secundaria</span>
          <p>Entorno interactivo para afianzar el dominio del inglés a través de lecturas graduadas, gramática práctica y ejercicios de comprensión auditiva.</p>
        </article>

        <!-- 07 Academia 24 -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/Academia 24 - 1.png" alt="Logo oficial Academia 24" loading="lazy">
          </div>
          <span class="eco-platform-tag">REFUERZO CURRICULAR</span>
          <h3>Academia 24</h3>
          <span class="eco-platform-levels">Secundaria y Bachilleres</span>
          <p>Tutoría digital y biblioteca de contenidos de apoyo para reforzar materias clave de ciencias, matemáticas y comercio con explicaciones paso a paso.</p>
        </article>

        <!-- 08 Kahoot! -->
        <article class="eco-platform-card">
          <div class="eco-platform-logo-shell">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/kahoot1.webp" alt="Logo oficial Kahoot" loading="lazy">
          </div>
          <span class="eco-platform-tag">APRENDIZAJE LÚDICO</span>
          <h3>Kahoot!</h3>
          <span class="eco-platform-levels">Todos los Niveles</span>
          <p>Dinámicas de evaluación formativa en tiempo real que fomentan el entusiasmo, la participación activa en el aula y la autoevaluación constante.</p>
        </article>
      </div>
    </section>

    <!-- Principios de Ciudadanía y Seguridad Digital -->
    <section class="eco-safety-section">
      <div class="eco-safety-header">
        <span class="eco-hero__eyebrow" style="color: var(--orange);">CIUDADANÍA DIGITAL</span>
        <h2>Pilares de seguridad y acompañamiento ético</h2>
        <p>Cuidamos la huella digital y el bienestar socioemocional de nuestros alumnos con directrices claras y entornos protegidos.</p>
      </div>

      <div class="eco-safety-grid">
        <!-- Pilar 1 -->
        <article class="eco-safety-card">
          <div class="eco-safety-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <h3>Entornos Seguros y Privacidad</h3>
          <p>Todas las cuentas institucionales operan bajo filtros de seguridad perimetral escolar, sin anuncios invasivos y con resguardo estricto de la privacidad infantil.</p>
        </article>

        <!-- Pilar 2 -->
        <article class="eco-safety-card">
          <div class="eco-safety-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3>Mediación Docente Activa</h3>
          <p>El uso de cada software responde a una planificación didáctica previa guiada por el maestro, evitando el consumo pasivo de pantallas sin valor educativo.</p>
        </article>

        <!-- Pilar 3 -->
        <article class="eco-safety-card">
          <div class="eco-safety-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          </div>
          <h3>Equilibrio con la Vida Presencial</h3>
          <p>Promovemos hábitos saludables de desconexión, valorando la lectura en libros físicos, la caligrafía, la actividad física y el diálogo cara a cara en familia.</p>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre -->
    <section class="eco-cta">
      <div class="eco-cta__inner">
        <h2>Una educación moderna con cimientos eternos</h2>
        <p>Preparamos a tus hijos para prosperar en la sociedad del conocimiento, equipados con las mejores herramientas digitales y afianzados en la roca de los valores cristianos.</p>
        <div class="eco-cta__actions">
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-primary">Iniciar Proceso de Matrícula <b>↗</b></a>
          <a href="<?php echo esc_url( home_url( '/sai/' ) ); ?>" class="hero-btn-outline">Conocer el Campus SAI <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
