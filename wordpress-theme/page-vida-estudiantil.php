<?php
/**
 * Pagina: vida-estudiantil (copia fiel de vida-estudiantil.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Vida Estudiantil BPVDA -->
    <section class="ve-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9587.webp" alt="Estudiantes del Colegio Buen Pastor compartiendo con alegría en la vida escolar" loading="eager">
      <div class="ve-hero__overlay"></div>
      <div class="ve-hero__container">
        <span class="ve-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          02 ENFOQUE EDUCATIVO · VIDA ESTUDIANTIL
        </span>
        <h1>Talentos que florecen más allá del <mark>aula tradicional</mark>.</h1>
        <p class="ve-hero__lead">La experiencia en el Buen Pastor se vive en la ciencia, el deporte, el arte y la fe. Fomentamos la pasión de cada estudiante a través de clubes, proyectos colaborativos y vivencias que forjan líderes con carácter cristiano.</p>
        <div class="ve-hero__actions">
          <a href="#clubes" class="hero-btn-primary">Explorar Clubes y Actividades <b>↓</b></a>
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-outline">Proceso de Admisión <b>↗</b></a>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas de Vida Estudiantil -->
    <section class="ve-facts-strip">
      <div class="ve-facts-grid">
        <div class="ve-fact-card">
          <span class="ve-fact-num">+10<span> Clubes</span></span>
          <span class="ve-fact-label">Talleres y disciplinas extracurriculares activas</span>
        </div>
        <div class="ve-fact-card">
          <span class="ve-fact-num">100<span>%</span></span>
          <span class="ve-fact-label">Participación en proyectos cívicos y comunitarios</span>
        </div>
        <div class="ve-fact-card">
          <span class="ve-fact-num">3<span> Ferias</span></span>
          <span class="ve-fact-label">Hitos anuales en Ciencia, Folclore y Deporte</span>
        </div>
        <div class="ve-fact-card">
          <span class="ve-fact-num">1°<span> Lugares</span></span>
          <span class="ve-fact-label">Reconocimientos en olimpiadas científicas y STEM</span>
        </div>
      </div>
    </section>

    <!-- Manifiesto de Formación Integral -->
    <section class="ve-manifesto">
      <div class="ve-manifesto__inner">
        <div class="ve-manifesto__media">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9516.webp" alt="Estudiantes colaborando en proyectos de liderazgo escolar" loading="lazy">
          <div class="ve-manifesto__badge">
            <strong>CARÁCTER Y LIDERAZGO</strong>
            «Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza.» · 1 Timoteo 4:12
          </div>
        </div>
        <div class="ve-manifesto__content">
          <span class="ve-hero__eyebrow" style="color: var(--orange);">EXPERIENCIAS CON PROPÓSITO</span>
          <h2>Aprender haciendo, conviviendo y sirviendo</h2>
          <p class="ve-manifesto__lead">En el Colegio Buen Pastor Voz de Alerta estamos convencidos de que las lecciones más perdurables ocurren cuando los estudiantes ponen sus dones al servicio de la comunidad.</p>
          <p class="ve-manifesto__text">Nuestra vida estudiantil promueve el equilibrio entre la exigencia académica y el disfrute recreativo. Ya sea diseñando robots en el laboratorio, compitiendo con deportividad en la cancha techada, ejecutando piezas folclóricas o sirviendo en jornadas solidarias, cada alumno descubre que su voz y sus talentos tienen un valor único.</p>
          <div class="ve-manifesto__quote">
            <p>«El verdadero liderazgo escolar no se impone: se demuestra con el ejemplo, el servicio al prójimo y la búsqueda constante de la excelencia.»</p>
            <cite>Ideario Formativo BPVDA · Pastoral Estudiantil</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Bloques Temáticos de Clubes y Experiencias -->
    <section class="ve-clubs-section" id="clubes">
      <div class="ve-clubs-header">
        <span class="ve-hero__eyebrow" style="color: var(--turquoise);">DISCIPLINAS Y TALLERES</span>
        <h2>Áreas extracurriculares que inspiran</h2>
        <p>Espacios dinámicos diseñados para despertar vocaciones, canalizar la energía juvenil y potenciar habilidades blandas para el futuro.</p>
      </div>

      <div class="ve-clubs-grid">
        <!-- Bloque 1: Ciencia, Robótica y STEM -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9551.webp" alt="Estudiantes en laboratorio de robótica y experimentos de ciencias" loading="lazy">
            <span class="ve-club-badge">Innovación y STEM</span>
          </div>
          <div class="ve-club-body">
            <h3>Club de Robótica y Ferias Científicas</h3>
            <p class="ve-club-desc">Diseño, programación y montaje de prototipos interactivos. Los estudiantes aplican conceptos de física, matemáticas e informática en proyectos tangibles para ferias intercolegiales.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Programación de microcontroladores y sensores automatizados.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Metodología de investigación científica aplicada a problemas reales.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Participación en olimpiadas nacionales y muestras STEM.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Bloque 2: Deporte y Vida Saludable -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9583.webp" alt="Estudiantes en la cancha deportiva escolar participando en baloncesto y futsal" loading="lazy">
            <span class="ve-club-badge">Deporte y Salud</span>
          </div>
          <div class="ve-club-body">
            <h3>Disciplinas Deportivas y Torneos Escolares</h3>
            <p class="ve-club-desc">Entrenamiento físico y fomento del espíritu deportivo en nuestra cancha multiuso. Fomentamos la disciplina, la resiliencia y el compañerismo a través del juego activo.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Equipos formativos de baloncesto, voleibol y fútbol sala.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Torneos intercursos y encuentros amistosos intercolegiales.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Acondicionamiento físico, psicomotricidad y hábitos saludables.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Bloque 3: Arte, Música y Tradición Cívica -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9594.webp" alt="Actividades artísticas, musicales y folclóricas de los estudiantes BPVDA" loading="lazy">
            <span class="ve-club-badge">Arte y Tradición</span>
          </div>
          <div class="ve-club-body">
            <h3>Banda de Música y Expresión Folclórica</h3>
            <p class="ve-club-desc">Cultivo de la sensibilidad musical, el folclore panameño y el fervor patriótico. Nuestros estudiantes representan con honor al colegio en actos cívicos y desfiles de fiestas patrias.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Banda escolar de música y percusión institucional.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Agrupaciones de bailes típicos y preservación de tradiciones panameñas.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Oratoria cívica, declamación poética y artes plásticas.</span>
              </li>
            </ul>
          </div>
        </article>

        <!-- Bloque 4: Vida Espiritual y Convivencia Cristiana -->
        <article class="ve-club-card">
          <div class="ve-club-media">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9524.webp" alt="Jóvenes en devocional escolar y convivencia fraterna cristiana" loading="lazy">
            <span class="ve-club-badge">Fe y Comunidad</span>
          </div>
          <div class="ve-club-body">
            <h3>Devocionales y Proyección Comunitaria</h3>
            <p class="ve-club-desc">Espacios semanales de adoración, lectura bíblica y reflexión donde los alumnos fortalecen su identidad espiritual, estrechan lazos fraternales y participan en obras de servicio.</p>
            <ul class="ve-club-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Devocionales matutinos con alabanza, oración y principios bíblicos.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Campañas de solidaridad y apoyo social en la comunidad de 24 de Diciembre.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Grupos de liderazgo juvenil y mentoría pastoral entre pares.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Cronograma de Hitos Anuales -->
    <section class="ve-timeline-section">
      <div class="ve-timeline-header">
        <span class="ve-hero__eyebrow" style="color: var(--orange);">CALENDARIO DE TRADICIONES</span>
        <h2>Los momentos que marcan el año escolar</h2>
        <p>Eventos anuales esperados por toda la comunidad educativa que consolidan el orgullo y la pertenencia al Buen Pastor.</p>
      </div>

      <div class="ve-timeline-grid">
        <!-- Hito 1 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">I TRIMESTRE</span>
          <h3>Jornada de Integración y Deporte</h3>
          <p>Inauguración de torneos deportivos intercursos, convivencias de bienvenida y devocional de apertura de ciclo escolar.</p>
        </article>

        <!-- Hito 2 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">II TRIMESTRE</span>
          <h3>Feria de Ciencias y Robótica</h3>
          <p>Demostración pública de prototipos, experimentos biológicos, aplicaciones tecnológicas y proyectos ecológicos.</p>
        </article>

        <!-- Hito 3 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">III TRIMESTRE</span>
          <h3>Mes de la Patria y Semana Cívica</h3>
          <p>Desfiles de gala de la banda institucional, homenajes a los símbolos patrios, comidas típicas y certamen folclórico.</p>
        </article>

        <!-- Hito 4 -->
        <article class="ve-timeline-card">
          <span class="ve-timeline-period">CIERRE LECTIVO</span>
          <h3>Gala de Talentos y Graduación</h3>
          <p>Reconocimiento al cuadro de honor, devocional solemne de acción de gracias y ceremonia de egreso de bachilleres.</p>
        </article>
      </div>
    </section>

    <!-- Banner de Cierre -->
    <section class="ve-cta">
      <div class="ve-cta__inner">
        <h2>Descubre tu pasión en el Buen Pastor</h2>
        <p>Una comunidad escolar vibrante donde cada estudiante encuentra su vocación, desarrolla su carácter y forja amistades para toda la vida.</p>
        <div class="ve-cta__actions">
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-primary">Conocer Admisiones y Matrícula <b>↗</b></a>
          <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-outline">Visitar Nuestro Campus <b>→</b></a>
        </div>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
