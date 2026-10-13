<?php
/**
 * Pagina: bachilleres (copia fiel de bachilleres.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Bachilleratos con encuadre óptimo y fotografía real de secundaria -->
    <section class="interior-hero interior-hero--bachilleres">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9582.webp" alt="Estudiantes de educación media en salón de clases interactivo en Colegio Buen Pastor Voz de Alerta">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>04 NIVELES ACADÉMICOS · EDUCACIÓN MEDIA</span>
        <h1>Tu vocación forjada con <mark>excelencia y propósito</mark>.</h1>
        <p>Tres bachilleratos oficiales orientados al éxito universitario: Ciencias, Informática y Comercio. Rigor académico preuniversitario, tecnología aplicada y formación ética cristiana para transformar el futuro de Panamá.</p>
        <div class="hero-actions">
          <a href="#especialidades" class="hero-btn-primary">Explorar Especialidades ↓</a>
          <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-outline">Proceso de Admisión →</a>
        </div>
      </div>
    </section>

    <!-- Barra de Accesos Rápidos entre Especialidades -->
    <nav class="tracks-nav-bar" aria-label="Especialidades de Bachillerato">
      <a href="#ciencias" class="tracks-nav-item">
        <span class="tracks-nav-num">01</span>
        <div class="tracks-nav-info">
          <strong class="tracks-nav-title">Bachillerato en Ciencias</strong>
          <span class="tracks-nav-sub">STEM, Salud e Ingenierías</span>
        </div>
      </a>
      <a href="#informatica" class="tracks-nav-item">
        <span class="tracks-nav-num">02</span>
        <div class="tracks-nav-info">
          <strong class="tracks-nav-title">Bachillerato en Informática</strong>
          <span class="tracks-nav-sub">Software, Redes y Robótica</span>
        </div>
      </a>
      <a href="#comercio" class="tracks-nav-item">
        <span class="tracks-nav-num">03</span>
        <div class="tracks-nav-info">
          <strong class="tracks-nav-title">Bachillerato en Comercio</strong>
          <span class="tracks-nav-sub">Finanzas, Gestión y Negocios</span>
        </div>
      </a>
    </nav>

    <!-- Presentación Editorial Preuniversitaria (Split Feature) -->
    <section class="split-feature">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9550.webp" alt="Estudiantes de bachillerato en aula tecnológica con computadoras y pantalla interactiva">
      <div>
        <span class="section-number">EDUCACIÓN MEDIA OFICIAL</span>
        <h2>Formación Preuniversitaria con Estándares de Excelencia</h2>
        <p>En el Colegio Buen Pastor Voz de Alerta, el ciclo de bachillerato (10°, 11° y 12°) representa la consolidación de las competencias analíticas, creativas y humanas de nuestros estudiantes. Con planes de estudio avalados por el Ministerio de Educación (MEDUCA), docentes especializados y una metodología de alto rendimiento, preparamos a cada alumno para destacar en las universidades más prestigiosas del país e internacionales.</p>
        
        <div class="preuni-stats-strip">
          <div class="preuni-stat-box">
            <span class="preuni-stat-val">100<span>%</span></span>
            <span class="preuni-stat-lbl">Articulación Universitaria</span>
          </div>
          <div class="preuni-stat-box">
            <span class="preuni-stat-val">3</span>
            <span class="preuni-stat-lbl">Bachilleratos Oficiales</span>
          </div>
          <div class="preuni-stat-box">
            <span class="preuni-stat-val">MEDUCA</span>
            <span class="preuni-stat-lbl">Planes Certificados</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Showcase Tridimensional de Especialidades -->
    <section id="especialidades" class="tracks-showcase-section">
      <div class="bento-header">
        <span class="bento-tagline">Propuesta Curricular de Media</span>
        <h2 class="bento-title">Nuestras Tres Especialidades de Bachillerato</h2>
        <p class="bento-desc">Cada bachillerato combina formación técnica de vanguardia, laboratorios equipados y desarrollo integral del pensamiento crítico, fundamentados en valores cristianos.</p>
      </div>

      <!-- 01. BACHILLERATO EN CIENCIAS -->
      <article id="ciencias" class="track-showcase track-showcase--ciencias">
        <div class="track-media">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9574.webp" alt="Estudiante resolviendo cálculo matricial en pantalla inteligente durante clase de ciencias">
          <div class="track-media-badge">
            <span class="badge-dot"></span>
            Laboratorio de Matemáticas & STEM
          </div>
        </div>
        <div class="track-content">
          <span class="track-tag track-tag--ciencias">CIENCIAS EXACTAS Y DE LA SALUD · STEM</span>
          <h3>Bachillerato en Ciencias</h3>
          <p class="track-quote">“Rigor analítico, experimentación en laboratorio y pensamiento lógico para liderar en ingeniería, medicina y tecnología.”</p>
          <p class="track-text">Diseñado para estudiantes con vocación científica y analítica. Nuestro programa articula biología experimental, química orgánica e inorgánica, física aplicada y cálculo diferencial e integral, dotando al alumno de una preparación sólida para superar los exámenes de admisión más exigentes en facultades de ciencias de la salud, tecnología y exactas.</p>
          
          <div class="track-competencies">
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                Química y Biología
              </span>
              <p class="track-comp-desc">Prácticas de laboratorio con instrumental analítico y método experimental.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                Cálculo y Álgebra
              </span>
              <p class="track-comp-desc">Dominio de matrices, funciones complejas y modelado matemático superior.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Física Experimental
              </span>
              <p class="track-comp-desc">Cinemática, dinámica, termodinámica y electromagnetismo aplicados.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                Bioética y Rigor
              </span>
              <p class="track-comp-desc">Investigación científica guiada por la ética y el respeto a la creación.</p>
            </div>
          </div>

          <div class="track-careers">
            <div class="careers-header-row">
              <span class="careers-label">Perfil de Salida / Carreras Universitarias</span>
              <span class="careers-hint">Toca cada carrera para ver de qué trata</span>
            </div>
            <div class="careers-pills">
              <button type="button" class="career-pill" data-title="Medicina & Cirugía" data-desc="Diagnóstico, tratamiento clínico, prevención de enfermedades y preservación de la salud humana y comunitaria." data-bpvda="Prácticas continuas de laboratorio en biología celular, química orgánica y sólidos fundamentos de bioética." data-keys="Biología celular, Química orgánica, Bioética, Fisiología humana" aria-expanded="false">
                <span>Medicina & Cirugía</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Ingeniería Civil" data-desc="Planificación, cálculo estructural, diseño y supervisión de infraestructuras como puentes, carreteras, represas y edificaciones seguras." data-bpvda="Alto dominio en cálculo diferencial e integral, trigonometría aplicada y física mecánica experimental." data-keys="Cálculo avanzado, Física mecánica, Geometría analítica, Materiales" aria-expanded="false">
                <span>Ingeniería Civil</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Biotecnología" data-desc="Aplicación tecnológica y molecular de organismos vivos en salud genética, producción agroindustrial y remediación ambiental." data-bpvda="Experimentación rigurosa con el método científico, microbiología y análisis de procesos moleculares complejos." data-keys="Microbiología, Genética, Química analítica, Bioquímica" aria-expanded="false">
                <span>Biotecnología</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Electromecánica" data-desc="Integración sinérgica de diseño mecánico, circuitos eléctricos de potencia y sistemas de automatización industrial." data-bpvda="Comprensión de electromagnetismo, termodinámica y talleres de diseño de circuitos funcionales." data-keys="Circuitos eléctricos, Termodinámica, Mecánica analítica, Automatismos" aria-expanded="false">
                <span>Electromecánica</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Odontología" data-desc="Diagnóstico, prevención y tratamiento integral de afecciones estomatológicas, maxilofaciales y salud bucodental." data-bpvda="Destreza analítica y motricidad fina desarrollada en prácticas de laboratorio, junto a ciencias biológicas." data-keys="Anatomía craneal, Bioquímica, Histología, Farmacología básica" aria-expanded="false">
                <span>Odontología</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Arquitectura" data-desc="Diseño y construcción del hábitat humano, integrando estética funcional, sostenibilidad ambiental y viabilidad estructural." data-bpvda="Pensamiento espacial tridimensional, física de estructuras, geometría descriptiva y dibujo técnico analítico." data-keys="Diseño espacial, Geometría descriptiva, Cálculo, Urbanismo sostenible" aria-expanded="false">
                <span>Arquitectura</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Farmacia" data-desc="Investigación, formulación química, control de calidad y dispensación responsable de medicamentos terapéuticos." data-bpvda="Enfoque riguroso en química general e inorgánica, estequiometría analítica y farmacocinética elemental." data-keys="Química farmacéutica, Toxicología, Biología molecular, Bioética" aria-expanded="false">
                <span>Farmacia</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
            </div>
            
            <div class="career-popout" aria-hidden="true">
              <div class="career-popout__inner">
                <div class="career-popout__top">
                  <span class="career-popout__badge">INFORMACIÓN DE CARRERA</span>
                  <button type="button" class="career-popout__close" aria-label="Cerrar información de la carrera">✕</button>
                </div>
                <h4 class="career-popout__title"></h4>
                <p class="career-popout__desc"></p>
                <div class="career-popout__meta">
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Aporte Formativo BPVDA:</span>
                    <span class="career-popout__bpvda"></span>
                  </div>
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Áreas Curriculares Clave:</span>
                    <span class="career-popout__keys-list"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- 02. BACHILLERATO EN INFORMÁTICA -->
      <article id="informatica" class="track-showcase track-showcase--informatica track-showcase--reverse">
        <div class="track-media">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/robotics-2.webp" alt="Estudiantes en taller de robótica conectando multímetro y programando computadora">
          <div class="track-media-badge">
            <span class="badge-dot badge-dot--orange"></span>
            Robótica Educativa, Circuitos & Software
          </div>
        </div>
        <div class="track-content">
          <span class="track-tag track-tag--informatica">TECNOLOGÍA, SOFTWARE E INNOVACIÓN · EDUTECH</span>
          <h3>Bachillerato en Informática</h3>
          <p class="track-quote">“Desarrollo de software, robótica aplicada y pensamiento computacional para los creadores e innovadores de la era digital.”</p>
          <p class="track-text">Un programa activo y práctico enfocado en capacitar a las nuevas generaciones en los principios del desarrollo de software, robótica educativa, mantenimiento de hardware, redes telemáticas y ciberseguridad. A través del trabajo en proyectos reales, los alumnos adquieren competencias para crear soluciones tecnológicas con impacto.</p>
          
          <div class="track-competencies">
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                Programación y Código
              </span>
              <p class="track-comp-desc">Algoritmos, estructuras de datos y lógica aplicada al desarrollo de software.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                Robótica y Mecatrónica
              </span>
              <p class="track-comp-desc">Integración de microcontroladores, sensores y automatización práctica.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                Redes y Conectividad
              </span>
              <p class="track-comp-desc">Configuración de redes LAN, protocolos IP y soporte de infraestructura.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                Seguridad de Datos
              </span>
              <p class="track-comp-desc">Protección de información, privacidad en la nube y ética digital.</p>
            </div>
          </div>

          <div class="track-careers">
            <div class="careers-header-row">
              <span class="careers-label">Perfil de Salida / Carreras Universitarias</span>
              <span class="careers-hint">Toca cada carrera para ver de qué trata</span>
            </div>
            <div class="careers-pills">
              <button type="button" class="career-pill" data-title="Ingeniería de Software" data-desc="Diseño sistemático, desarrollo, pruebas y mantenimiento de plataformas en la nube, aplicaciones complejas y software a gran escala." data-bpvda="Fundamentos de lógica computacional, algoritmia estructurada y programación orientada a objetos en proyectos reales." data-keys="Algoritmos, Arquitectura de software, Bases de datos, Metodologías ágiles" aria-expanded="false">
                <span>Ingeniería de Software</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Ciencias de la Computación" data-desc="Estudio científico de la computación, estructuras de datos avanzadas, diseño algorítmico, teoría de autómatas y criptografía." data-bpvda="Matemáticas discretas, resolución de problemas algorítmicos complejos y modelado conceptual abstracto." data-keys="Estructuras de datos, Teoría de autómatas, Lógica matemática, Optimización" aria-expanded="false">
                <span>Ciencias de la Computación</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Ciberseguridad" data-desc="Protección de infraestructuras críticas, mitigación de vulnerabilidades cibernéticas, defensa perimetral y auditoría forense digital." data-bpvda="Configuración de redes de comunicaciones, protocolos IP, principios de cifrado y normativas de ética digital." data-keys="Criptografía, Seguridad de redes, Ethical hacking, Respuesta a incidentes" aria-expanded="false">
                <span>Ciberseguridad</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Robótica & Automatización" data-desc="Integración de mecatrónica, sensores electrónicos y programación para crear dispositivos y mecanismos autónomos o industriales." data-bpvda="Uso continuo de microcontroladores, sensores analógicos/digitales y ensamblaje de prototipos mecánicos en aula." data-keys="Microcontroladores, Sensores, Cinemática robótica, Control automático" aria-expanded="false">
                <span>Robótica & Automatización</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Telecomunicaciones" data-desc="Diseño y transmisión de señales digitales y electromagnéticas mediante fibra óptica, enlaces satelitales y redes inalámbricas." data-bpvda="Topologías de red, cableado estructurado, direccionamiento IP y conmutación de paquetes telemáticos." data-keys="Fibra óptica, Redes inalámbricas, Telefonía IP, Ondas electromagnéticas" aria-expanded="false">
                <span>Telecomunicaciones</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Inteligencia Artificial" data-desc="Desarrollo de modelos predictivos, redes neuronales y algoritmos de aprendizaje automático para resolver retos cognitivos complejos." data-bpvda="Lógica matemática superior, estadística analítica, manejo estructurado de datos y programación de algoritmos." data-keys="Machine learning, Procesamiento de datos, Redes neuronales, Visión por computadora" aria-expanded="false">
                <span>Inteligencia Artificial</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
            </div>
            
            <div class="career-popout" aria-hidden="true">
              <div class="career-popout__inner">
                <div class="career-popout__top">
                  <span class="career-popout__badge">INFORMACIÓN DE CARRERA</span>
                  <button type="button" class="career-popout__close" aria-label="Cerrar información de la carrera">✕</button>
                </div>
                <h4 class="career-popout__title"></h4>
                <p class="career-popout__desc"></p>
                <div class="career-popout__meta">
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Aporte Formativo BPVDA:</span>
                    <span class="career-popout__bpvda"></span>
                  </div>
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Áreas Curriculares Clave:</span>
                    <span class="career-popout__keys-list"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- 03. BACHILLERATO EN COMERCIO -->
      <article id="comercio" class="track-showcase track-showcase--comercio">
        <div class="track-media">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/secundaria/IMG_9531.webp" alt="Estudiantes de educación media en aula activa con computadoras portátiles y material didáctico">
          <div class="track-media-badge">
            <span class="badge-dot badge-dot--gold"></span>
            Gestión Empresarial, Finanzas & Proyectos
          </div>
        </div>
        <div class="track-content">
          <span class="track-tag track-tag--comercio">GESTIÓN EMPRESARIAL, FINANZAS Y LIDERAZGO</span>
          <h3>Bachillerato en Comercio</h3>
          <p class="track-quote">“Visión de negocios, rigor contable y gestión estratégica con ética cristiana para liderar en el sector corporativo y financiero.”</p>
          <p class="track-text">Especialidad orientada a la formación de líderes con capacidad de análisis económico, dominio contable y visión emprendedora. Los estudiantes aprenden contabilidad general, bancaria y computarizada, administración de empresas, finanzas y el marco legal comercial y tributario de Panamá, preparándose para desempeñarse con éxito en la economía actual.</p>
          
          <div class="track-competencies">
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                Contabilidad Financiera
              </span>
              <p class="track-comp-desc">Libros contables, balances, conciliaciones bancarias y software financiero.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Gestión de Empresas
              </span>
              <p class="track-comp-desc">Planificación corporativa, desarrollo organizacional y toma de decisiones.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
                Legislación y Tributos
              </span>
              <p class="track-comp-desc">Código de comercio, normativas laborales y régimen fiscal panameño.</p>
            </div>
            <div class="track-comp-item">
              <span class="track-comp-title">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Planes de Negocio
              </span>
              <p class="track-comp-desc">Modelos de emprendimiento sostenible, presupuestos y costos comerciales.</p>
            </div>
          </div>

          <div class="track-careers">
            <div class="careers-header-row">
              <span class="careers-label">Perfil de Salida / Carreras Universitarias</span>
              <span class="careers-hint">Toca cada carrera para ver de qué trata</span>
            </div>
            <div class="careers-pills">
              <button type="button" class="career-pill" data-title="Banca y Finanzas" data-desc="Administración estratégica del capital, análisis de riesgos crediticios, valoración de inversiones y regulación de mercados financieros." data-bpvda="Operaciones bancarias, matemáticas financieras, cálculo de tasas de interés y conciliaciones de cuentas." data-keys="Evaluación de proyectos, Mercados bursátiles, Análisis crediticio, Finanzas corporativas" aria-expanded="false">
                <span>Banca y Finanzas</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Contaduría Pública Autorizada (CPA)" data-desc="Registro sistemático, análisis e interpretación de estados contables, auditoría fiscal independiente y cumplimiento tributario oficial." data-bpvda="Dominio del ciclo contable completo, balances generales, software contable computarizado y leyes fiscales de Panamá." data-keys="Auditoría externa, Contabilidad tributaria, Normas NIIF, Costos y presupuestos" aria-expanded="false">
                <span>Contaduría Pública Autorizada (CPA)</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Administración de Empresas" data-desc="Planificación, organización, dirección y control de organizaciones para maximizar su eficiencia, rentabilidad e impacto humano." data-bpvda="Métodos de gestión organizacional, liderazgo con valores cristianos, formulación de proyectos y toma de decisiones." data-keys="Gestión del talento, Planeación estratégica, Dirección comercial, Desarrollo corporativo" aria-expanded="false">
                <span>Administración de Empresas</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Comercio Internacional" data-desc="Operaciones de importación y exportación, régimen aduanero, tratados de libre comercio y transporte multimodal en el hub panameño." data-bpvda="Normativa comercial panameña e internacional, Incoterms, logística de carga y geografía económica mundial." data-keys="Logística portuaria, Aranceles y aduanas, Negociación internacional, Comercio marítimo" aria-expanded="false">
                <span>Comercio Internacional</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Mercadeo & Logística" data-desc="Estudio del comportamiento del consumidor, estrategias de comercialización digital, distribución física y cadenas de suministro." data-bpvda="Diseño de propuestas comerciales sostenibles, estimación de costos y técnicas de comunicación efectiva." data-keys="Marketing digital, Cadena de suministro (SCM), Investigación de mercados, Branding" aria-expanded="false">
                <span>Mercadeo & Logística</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
              <button type="button" class="career-pill" data-title="Economía" data-desc="Análisis de la producción, distribución y consumo de bienes y servicios, formulación de políticas monetarias y tendencias globales." data-bpvda="Pensamiento crítico sobre indicadores económicos, análisis estadístico y comprensión del entorno financiero del país." data-keys="Macroeconomía, Microeconomía, Econometría, Políticas públicas" aria-expanded="false">
                <span>Economía</span>
                <i class="career-pill-icon" aria-hidden="true">+</i>
              </button>
            </div>
            
            <div class="career-popout" aria-hidden="true">
              <div class="career-popout__inner">
                <div class="career-popout__top">
                  <span class="career-popout__badge">INFORMACIÓN DE CARRERA</span>
                  <button type="button" class="career-popout__close" aria-label="Cerrar información de la carrera">✕</button>
                </div>
                <h4 class="career-popout__title"></h4>
                <p class="career-popout__desc"></p>
                <div class="career-popout__meta">
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Aporte Formativo BPVDA:</span>
                    <span class="career-popout__bpvda"></span>
                  </div>
                  <div class="career-popout__field">
                    <span class="career-popout__meta-lbl">Áreas Curriculares Clave:</span>
                    <span class="career-popout__keys-list"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Ecosistema Preuniversitario BPVDA (Bento de Alto Contraste) -->
    <section class="preuni-section">
      <div class="preuni-header">
        <span class="bento-tagline">El Valor Añadido BPVDA</span>
        <h2 class="bento-title">Ecosistema Preuniversitario Integral</h2>
        <p class="bento-desc">Respaldamos cada itinerario vocacional con recursos pedagógicos de alto nivel, acompañamiento psicopedagógico y una visión clara de éxito para la educación superior.</p>
      </div>

      <div class="preuni-grid">
        <article class="preuni-card">
          <div class="preuni-card-num">01</div>
          <h4>Simulacros y Admisión Universitaria</h4>
          <p>Entrenamiento continuo en razonamiento verbal, numérico y pruebas de aptitud académica orientadas a los exámenes de ingreso de la UP, UTP y universidades privadas.</p>
        </article>

        <article class="preuni-card">
          <div class="preuni-card-num">02</div>
          <h4>Aulas Digitales y Laboratorios</h4>
          <p>Salones equipados con pantallas inteligentes interactivas, kits de robótica educativa y herramientas informáticas que potencian el aprendizaje colaborativo.</p>
        </article>

        <article class="preuni-card">
          <div class="preuni-card-num">03</div>
          <h4>Orientación Vocacional Personalizada</h4>
          <p>Acompañamiento psicopedagógico especializado a lo largo de 10°, 11° y 12° grado para definir aptitudes, intereses y metas profesionales con seguridad.</p>
        </article>

        <article class="preuni-card">
          <div class="preuni-card-num">04</div>
          <h4>Liderazgo Ético y Carácter Cristiano</h4>
          <p>Formación fundamentada en valores bíblicos de integridad, disciplina, servicio y respeto al prójimo, preparando ciudadanos que transformen positivamente la sociedad.</p>
        </article>
      </div>
    </section>

    <!-- Testimonio Vocacional de Graduandos BPVDA -->
    <section class="student-voice">
      <div class="student-voice__inner">
        <span class="student-voice__mark" aria-hidden="true">“</span>
        <blockquote>Elegir mi bachillerato en BPVDA me dio las herramientas y la confianza para afrontar la universidad con excelencia. Los docentes no solo enseñan contenidos: te acompañan a descubrir tu vocación profesional con principios que perduran.</blockquote>
        <div class="student-voice__author">
          <strong>Voz de Graduando BPVDA</strong>
          <span>Educación Media · Colegio Buen Pastor Voz de Alerta</span>
        </div>
      </div>
    </section>

    <!-- Convocatoria y Hub de Admisiones Preuniversitario -->
    <section class="preuni-admissions-hub">
      <div class="preuni-hub-container">
        
        <!-- Columna Izquierda: Propuesta Formativa y Garantías Académicas -->
        <div class="preuni-hub-left">
          <h2 class="preuni-hub-title">Tu Proyección Universitaria Comienza con una Base Sólida</h2>
          
          <p class="preuni-hub-desc">
            Elegir la especialidad correcta en 10°, 11° y 12° grado define tu éxito en la educación superior. En BPVDA combinamos programas certificados por MEDUCA con acompañamiento vocacional permanente, laboratorios avanzados y una sólida formación ética.
          </p>

          <div class="preuni-guarantees-list">
            <div class="preuni-guarantee-item">
              <div class="preuni-guarantee-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <strong>Articulación Directa con Admisiones (UTP · UP · USMA)</strong>
                <p>Módulos de refuerzo en cálculo, ciencias, redacción académica y lógica analítica para asegurar altos puntajes de ingreso universitario.</p>
              </div>
            </div>

            <div class="preuni-guarantee-item">
              <div class="preuni-guarantee-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <strong>Prácticas Reales en Laboratorios y Software Especializado</strong>
                <p>Experimentación en ciencias, desarrollo de proyectos informáticos, robótica y contabilidad computarizada aplicada.</p>
              </div>
            </div>

            <div class="preuni-guarantee-item">
              <div class="preuni-guarantee-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <strong>Orientación Vocacional y Acompañamiento Personalizado</strong>
                <p>Evaluación diagnóstica de aptitudes para que cada estudiante seleccione el bachillerato afín a su proyecto de vida.</p>
              </div>
            </div>
          </div>

          <div class="preuni-hub-actions">
            <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="hero-btn-primary">Iniciar Proceso de Admisión →</a>
            <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-outline">Consultar con Secretaría Académica</a>
          </div>
        </div>

        <!-- Columna Derecha: Tarjeta de Ruta de Admisión y Contacto -->
        <div class="preuni-hub-right">
          <div class="preuni-roadmap-card">
            <div class="preuni-roadmap-header">
              <span class="preuni-roadmap-tag">RUTA PASO A PASO</span>
              <h3>Proceso de Ingreso a Media</h3>
              <p>Itinerario guiado para estudiantes de nuevo ingreso y traslados.</p>
            </div>

            <ol class="preuni-steps-list">
              <li class="preuni-step-item">
                <span class="preuni-step-badge">1</span>
                <div>
                  <strong>Revisión de Requisitos y Créditos</strong>
                  <p>Presentación de historial académico y asesoría inicial sobre las especialidades disponibles.</p>
                </div>
              </li>
              <li class="preuni-step-item">
                <span class="preuni-step-badge">2</span>
                <div>
                  <strong>Diagnóstico Académico y Entrevista</strong>
                  <p>Sesión diagnóstica de competencias y entrevista con el equipo pedagógico y pastoral.</p>
                </div>
              </li>
              <li class="preuni-step-item">
                <span class="preuni-step-badge">3</span>
                <div>
                  <strong>Matrícula y Asignación de Especialidad</strong>
                  <p>Formalización de cupo en Ciencias, Informática o Comercio con entrega del plan de estudio oficial.</p>
                </div>
              </li>
            </ol>

            <div class="preuni-direct-contact">
              <span class="preuni-contact-label">CANALES DE ATENCIÓN DIRECTA</span>
              <div class="preuni-contact-links">
                <a href="tel:+5073915811" class="preuni-contact-item">
                  <span class="preuni-contact-icon">📞</span>
                  <div>
                    <span class="contact-sub">Central Telefónica</span>
                    <strong>(507) 391-5811</strong>
                  </div>
                </a>
                <a href="mailto:info@buenpastor-vda.net" class="preuni-contact-item">
                  <span class="preuni-contact-icon">✉️</span>
                  <div>
                    <span class="contact-sub">Correo Oficial</span>
                    <strong>info@buenpastor-vda.net</strong>
                  </div>
                </a>
              </div>
              <div class="preuni-office-hours">
                <span>📍 Sede 24 de Diciembre, Calle San José · Lunes a Viernes 7:00 a.m. – 3:00 p.m.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>

<?php get_footer(); ?>
