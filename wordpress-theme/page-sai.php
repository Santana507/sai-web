<?php
/**
 * Pagina: sai (copia fiel de sai.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: SAI Campus Virtual -->
    <section class="sai-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9532.webp" alt="Estudiantes en aula digital interactiva con equipos informáticos en el Colegio Buen Pastor" loading="eager">
      <div class="sai-hero__overlay"></div>
      <div class="sai-hero__container">
        <span class="sai-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          02 ENFOQUE EDUCATIVO · SAI BPVDA
        </span>
        <h1>Campus virtual interactivo al servicio del <mark>aprendizaje</mark>.</h1>
        <p class="sai-hero__lead">La plataforma educativa oficial del Colegio Buen Pastor que conecta tus clases presenciales con recursos multimedia, tareas digitales y seguimiento académico continuo las 24 horas del día.</p>
        <div class="sai-hero__actions">
          <a href="https://sai.bpvda.edu.pa/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Ingresar al Campus SAI <b>↗</b></a>
          <a href="#guia" class="hero-btn-outline">Guía de Acceso para Estudiantes <b>↓</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas Digitales -->
    <section class="sai-facts-strip">
      <div class="sai-facts-grid">
        <div class="sai-fact-card">
          <span class="sai-fact-num">24<span>/7</span></span>
          <span class="sai-fact-label">Campus accesible en cualquier momento y lugar</span>
        </div>
        <div class="sai-fact-card">
          <span class="sai-fact-num">100<span>%</span></span>
          <span class="sai-fact-label">Asignaturas con aula virtual y materiales al día</span>
        </div>
        <div class="sai-fact-card">
          <span class="sai-fact-num">Moodle<span> Enterprise</span></span>
          <span class="sai-fact-label">Motor tecnológico educativo líder mundial</span>
        </div>
        <div class="sai-fact-card">
          <span class="sai-fact-num">0<span> Papel</span></span>
          <span class="sai-fact-label">Entregas digitales ecológicas y organizadas</span>
        </div>
      </div>
    </section>

    <!-- Mockup UI de la Plataforma y Módulos -->
    <section class="sai-preview-section">
      <div class="sai-preview-header">
        <span class="sai-hero__eyebrow" style="color: var(--orange);">INTERFAZ OFICIAL</span>
        <h2>Tu aula de clases ahora cabe en tu pantalla</h2>
        <p>Diseñada con una navegación intuitiva y herramientas pedagógicas que permiten a cada estudiante organizar su horario, descargar lecciones y entregar asignaciones sin complicaciones.</p>
      </div>

      <!-- Ventana de Navegador Simulada -->
      <div class="sai-window">
        <div class="sai-window__bar">
          <div class="sai-window__dots">
            <span class="sai-window__dot sai-window__dot--red"></span>
            <span class="sai-window__dot sai-window__dot--yellow"></span>
            <span class="sai-window__dot sai-window__dot--green"></span>
          </div>
          <div class="sai-window__url">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>https://sai.bpvda.edu.pa/</span>
          </div>
          <span class="sai-window__tag">PLATAFORMA OFICIAL BPVDA</span>
        </div>
        <div class="sai-window__body">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/sai/Captura de pantalla 2026-09-12 135920.png" alt="Captura de pantalla de la plataforma virtual SAI Colegio Buen Pastor" loading="lazy">
        </div>
      </div>

      <!-- Módulos de Aprendizaje -->
      <div class="sai-modules-grid">
        <!-- Módulo 1 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          </div>
          <div class="sai-module-content">
            <h3>Materiales y Guías Didácticas</h3>
            <p>Accede en cualquier momento a las diapositivas de clase, documentos complementarios, enlaces a bibliotecas digitales y lecturas compartidas por tus profesores.</p>
          </div>
        </article>

        <!-- Módulo 2 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </div>
          <div class="sai-module-content">
            <h3>Buzón de Tareas y Entregas Digitales</h3>
            <p>Carga tus proyectos individuales o grupales en formato PDF, documentos o presentaciones con sello de hora y confirmación de recepción automática.</p>
          </div>
        </article>

        <!-- Módulo 3 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          </div>
          <div class="sai-module-content">
            <h3>Evaluaciones y Quizzes Interactivos</h3>
            <p>Comprueba tus conocimientos mediante cuestionarios formativos con corrección inmediata, cronómetros de práctica y retroalimentación pregunta por pregunta.</p>
          </div>
        </article>

        <!-- Módulo 4 -->
        <article class="sai-module-card">
          <div class="sai-module-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div class="sai-module-content">
            <h3>Calificaciones y Retroalimentación</h3>
            <p>Consulta tus notas ponderadas por trimestre, comentarios pedagógicos del docente y observaciones para fortalecer tus hábitos de estudio.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Guía de Acceso en 3 Pasos -->
    <section class="sai-steps-section" id="guia">
      <div class="sai-steps-header">
        <span class="sai-hero__eyebrow" style="color: var(--turquoise);">PASO A PASO</span>
        <h2>¿Cómo ingresar al campus SAI?</h2>
        <p>Tres sencillos pasos para iniciar tu sesión y comenzar a interactuar con tus asignaturas desde el primer día de clases.</p>
      </div>

      <div class="sai-steps-grid">
        <!-- Paso 1 -->
        <article class="sai-step-card">
          <span class="sai-step-badge">1</span>
          <h3>Usa tus credenciales oficiales</h3>
          <p>Tu usuario y contraseña institucional son entregados por secretaría al formalizar la matrícula. Tu usuario generalmente corresponde a tu número de cédula escolar.</p>
        </article>

        <!-- Paso 2 -->
        <article class="sai-step-card">
          <span class="sai-step-badge">2</span>
          <h3>Ingresa al portal y ubica tu grado</h3>
          <p>Visita <strong>sai.bpvda.edu.pa</strong> e inicia sesión. En tu panel principal verás las asignaturas activas de tu nivel con los avisos del docente.</p>
        </article>

        <!-- Paso 3 -->
        <article class="sai-step-card">
          <span class="sai-step-badge">3</span>
          <h3>Participa y entrega tus asignaciones</h3>
          <p>Revisa las fechas límite en el calendario virtual, descarga tus recursos y sube tus tareas antes del cierre para mantener un rendimiento óptimo.</p>
        </article>
      </div>
    </section>

    <!-- Mesa de Soporte Digital y Preguntas Frecuentes -->
    <section class="sai-support-section">
      <div class="sai-support-header">
        <span class="sai-hero__eyebrow" style="color: var(--orange);">ASISTENCIA TÉCNICA</span>
        <h2>¿Necesitas ayuda con tu cuenta?</h2>
        <p>Canales rápidos para resolver dificultades de acceso, olvido de contraseñas o configuración de tus dispositivos móviles.</p>
      </div>

      <div class="sai-support-grid">
        <!-- Tarjeta 1 -->
        <article class="sai-support-card">
          <div class="sai-support-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <h3>Restablecimiento de Contraseña</h3>
          <p>Si olvidaste tu clave o tienes problemas para ingresar, solicítalo al departamento de informática o a secretaría del plantel.</p>
          <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer">Solicitar por WhatsApp ↗</a>
        </article>

        <!-- Tarjeta 2 -->
        <article class="sai-support-card">
          <div class="sai-support-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
          <h3>Acceso desde Teléfonos Móviles</h3>
          <p>Puedes descargar la app oficial de Moodle para iOS y Android e ingresar la dirección <code>sai.bpvda.edu.pa</code> para recibir alertas.</p>
          <a href="https://moodle.com/app/" target="_blank" rel="noopener noreferrer">Ver App Moodle ↗</a>
        </article>

        <!-- Tarjeta 3 -->
        <article class="sai-support-card">
          <div class="sai-support-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <h3>Comunicación con Padres (Edvoice)</h3>
          <p>Los acudientes cuentan con la app Edvoice para circulares, reportes de asistencia y comunicaciones oficiales del colegio.</p>
          <a href="https://edvoice.additioapp.com/access/login" target="_blank" rel="noopener noreferrer">Ingresar a Edvoice ↗</a>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre: Acceso Inmediato -->
    <section class="sai-cta">
      <div class="sai-cta__inner">
        <span class="sai-hero__eyebrow" style="color: var(--turquoise); justify-content: center;">INGRESO DIRECTO</span>
        <h2>Comienza tu jornada de aprendizaje en SAI</h2>
        <p>Inicia sesión ahora y descubre todo lo que tus profesores han preparado para fortalecer tus materias y enriquecer tu aprendizaje.</p>
        <div class="sai-cta__actions">
          <a href="https://sai.bpvda.edu.pa/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Entrar a SAI Moodle <b>↗</b></a>
          <a href="<?php echo esc_url( home_url( '/portal-padres/' ) ); ?>" class="hero-btn-outline">Ir al Portal de Padres <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
