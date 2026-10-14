<?php
/**
 * Pagina: portal-padres (copia fiel de portal-padres.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Portal de Padres BPVDA -->
    <section class="padres-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9370.webp" alt="Fachada y recepción del Colegio Buen Pastor Voz de Alerta" loading="eager">
      <div class="padres-hero__overlay"></div>
      <div class="padres-hero__container">
        <span class="padres-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          03 FAMILIA Y COMUNIDAD · PORTAL DE PADRES
        </span>
        <h1>Una alianza viva entre el <mark>hogar</mark> y el colegio.</h1>
        <p class="padres-hero__lead">Acompañamos el crecimiento integral de tus hijos. Centraliza aquí los accesos a las plataformas digitales de comunicación, seguimiento académico en SAI, trámites administrativos, pagos escolares y canales directos de secretaría y consejería.</p>
        <div class="padres-hero__actions">
          <a href="#plataformas" class="hero-btn-primary">Accesos Directos a Plataformas <b>↓</b></a>
          <a href="#guia-padres" class="hero-btn-outline">Guía de Nuevas Familias <b>↓</b></a>
        </div>
        <div class="padres-hero__badges">
          <div class="padres-badge-item">
            <span class="padres-badge-dot" aria-hidden="true"></span>
            <span><strong>Edvoice:</strong> Circulares y avisos al instante</span>
          </div>
          <div class="padres-badge-item">
            <span class="padres-badge-dot" aria-hidden="true"></span>
            <span><strong>SAI Moodle:</strong> Aula virtual y notas</span>
          </div>
          <div class="padres-badge-item">
            <span class="padres-badge-dot" aria-hidden="true"></span>
            <span><strong>Secretaría:</strong> L-V 7:30 a.m. – 2:00 p.m.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Franja de Métricas y Compromisos -->
    <section class="padres-facts-strip">
      <div class="padres-facts-grid">
        <div class="padres-fact-card">
          <span class="padres-fact-num">100<span>%</span></span>
          <span class="padres-fact-label">Comunicación digital sin papel vía Edvoice y correo</span>
        </div>
        <div class="padres-fact-card">
          <span class="padres-fact-num">24<span>/7</span></span>
          <span class="padres-fact-label">Disponibilidad del aula virtual SAI y recursos de estudio</span>
        </div>
        <div class="padres-fact-card">
          <span class="padres-fact-num">4<span> Periodos</span></span>
          <span class="padres-fact-label">Informes bimestrales de avance académico y formativo</span>
        </div>
        <div class="padres-fact-card">
          <span class="padres-fact-num">&lt;24<span>h</span></span>
          <span class="padres-fact-label">Tiempo promedio de respuesta en canales de secretaría</span>
        </div>
      </div>
    </section>

    <!-- Hub Central de Plataformas y Servicios -->
    <section class="padres-services-section" id="plataformas">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--turquoise);">SERVICIOS DIGITALES & TRÁMITES</span>
        <h2>Accesos directos para la familia</h2>
        <p>Selecciona la plataforma o servicio que requieres para gestionar el día a día escolar de tu hijo.</p>
      </div>

      <div class="padres-services-grid">
        <!-- 01 Edvoice -->
        <article class="padres-service-card padres-service-card--featured">
          <div class="padres-card-top">
            <div class="padres-card-logo">
              <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/Edvoice1.webp" alt="Logo de Edvoice" loading="lazy">
            </div>
            <span class="padres-card-pill">COMUNICACIÓN OFICIAL</span>
          </div>
          <h3>Edvoice: App Escolar de Avisos y Circulares</h3>
          <p>Canal prioritario para recibir comunicados oficiales, justificar inasistencias por motivos médicos, autorizar salidas pedagógicas y conversar directamente con el docente tutor.</p>
          <div class="padres-card-features">
            <span>✓ Mensajería instantánea y segura</span>
            <span>✓ Notificaciones push en tu celular</span>
            <span>✓ Justificación ágil de ausencias</span>
          </div>
          <div class="padres-card-actions">
            <a href="https://edvoice.additioapp.com/access/login" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Ingresar a Edvoice Web <b>↗</b></a>
            <a href="#guia-edvoice" class="padres-link-aux">¿Cómo activar mi cuenta? →</a>
          </div>
        </article>

        <!-- 02 SAI Moodle -->
        <article class="padres-service-card padres-service-card--featured">
          <div class="padres-card-top">
            <div class="padres-card-logo">
              <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/new/alliances/SAI logo oficial.jpg" alt="Logo oficial SAI Moodle" loading="lazy">
            </div>
            <span class="padres-card-pill" style="background: rgba(16, 184, 176, 0.15); color: var(--turquoise);">AULA VIRTUAL</span>
          </div>
          <h3>SAI BPVDA: Aula Virtual y Tareas</h3>
          <p>Plataforma de seguimiento pedagógico continuo. Consulta las tareas semanales de tu hijo, guías de estudio descargables, evaluaciones programadas y cronograma de exámenes.</p>
          <div class="padres-card-features">
            <span>✓ Repositorio de materias y guías</span>
            <span>✓ Calendario de entregas y pruebas</span>
            <span>✓ Retroalimentación del docente</span>
          </div>
          <div class="padres-card-actions">
            <a href="https://sai.bpvda.edu.pa/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="hero-btn-primary" style="background: var(--navy); border-color: var(--turquoise);">Entrar a SAI Moodle <b>↗</b></a>
            <a href="<?php echo esc_url( home_url( '/sai/' ) ); ?>" class="padres-link-aux">Conocer la plataforma SAI →</a>
          </div>
        </article>

        <!-- 03 Tesorería y Pagos -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <span class="padres-card-pill">TESORERÍA & FINANZAS</span>
          </div>
          <h3>Pagos de Mensualidades y Paz y Salvo</h3>
          <p>Paga cómodamente desde tu banca digital. Aceptamos transferencias ACH, depósito en Banco General y Yappy Comercial. Envía tu comprobante con el nombre completo y grado del estudiante.</p>
          <ul class="padres-list-compact">
            <li><strong>Banco General:</strong> Cuenta Corriente oficial BPVDA</li>
            <li><strong>Yappy Comercial:</strong> Directorio institucional Buen Pastor</li>
            <li><strong>Caja Presencial:</strong> L-V 7:30 a.m. a 2:00 p.m.</li>
          </ul>
          <div class="padres-card-actions">
            <a href="https://wa.me/50767441351?text=Hola,%20deseo%20enviar%20comprobante%20de%20pago%20o%20consultar%20mi%20estado%20de%20cuenta" target="_blank" rel="noopener noreferrer" class="hero-btn-outline">Enviar Comprobante WhatsApp <b>↗</b></a>
          </div>
        </article>

        <!-- 04 Calendario Escolar -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <span class="padres-card-pill">CRONOGRAMA LECTIVO</span>
          </div>
          <h3>Calendario y Fechas Clave del Año</h3>
          <p>Mantente al día con los eventos más importantes del año lectivo: asambleas de padres, semanas de evaluaciones trimestrales, entrega de boletines oficiales, feriados y vacaciones.</p>
          <ul class="padres-list-compact">
            <li><strong>Boletines:</strong> Cierre de cada período bimestral/trimestral</li>
            <li><strong>Asambleas:</strong> Convocatorias generales y por grado</li>
            <li><strong>Eventos cívicos:</strong> Fiestas patrias y semana del colegio</li>
          </ul>
          <div class="padres-card-actions">
            <a href="#calendario-fechas" class="hero-btn-outline">Ver Hitos del Calendario <b>↓</b></a>
          </div>
        </article>

        <!-- 05 Consejería y Bienestar -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <span class="padres-card-pill">APOYO SOCIOEMOCIONAL</span>
          </div>
          <h3>Consejería Pastoral y Bienestar Escolar</h3>
          <p>Espacio confidencial para brindar orientación espiritual, psicológica y formativa a los estudiantes y sus familias. Coordinamos entrevistas individuales para atender necesidades específicas.</p>
          <ul class="padres-list-compact">
            <li><strong>Capellanía:</strong> Consejería cristiana y oración por familias</li>
            <li><strong>Gabinete psicopedagógico:</strong> Hábitos de estudio y convivencia</li>
            <li><strong>Atención:</strong> Citas programadas con anticipación</li>
          </ul>
          <div class="padres-card-actions">
            <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-outline">Solicitar Cita de Consejería <b>↗</b></a>
          </div>
        </article>

        <!-- 06 Secretaría y Certificaciones -->
        <article class="padres-service-card">
          <div class="padres-card-top">
            <div class="padres-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <span class="padres-card-pill">GESTIÓN ACADÉMICA</span>
          </div>
          <h3>Secretaría Escolar y Trámites Oficiales</h3>
          <p>Emisión de constancias de matrícula, récord oficial de notas para traslados, certificaciones de buena conducta, actualización de expedientes del acudiente y carnets escolares.</p>
          <ul class="padres-list-compact">
            <li><strong>Teléfono directo:</strong> 391-5811</li>
            <li><strong>Correo:</strong> info@buenpastor-vda.net</li>
            <li><strong>Tiempo de entrega:</strong> 48 a 72 horas hábiles</li>
          </ul>
          <div class="padres-card-actions">
            <a href="tel:+5073915811" class="hero-btn-outline">Llamar a Secretaría: 391-5811 <b>📞</b></a>
          </div>
        </article>
      </div>
    </section>

    <!-- Manifiesto de Alianza Hogar-Escuela -->
    <section class="padres-manifesto">
      <div class="padres-manifesto__inner">
        <div class="padres-manifesto__media">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9374.webp" alt="Instalaciones del Colegio Buen Pastor donde la comunidad de familias se reúne" loading="lazy">
          <div class="padres-manifesto__badge">
            <strong>PRINCIPIO BÍBLICO DE LA FAMILIA</strong>
            «Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.» · Proverbios 22:6
          </div>
        </div>
        <div class="padres-manifesto__content">
          <span class="padres-hero__eyebrow" style="color: var(--orange);">VALORES Y COMPROMISO</span>
          <h2>Caminamos de la mano en la formación de tus hijos</h2>
          <p class="padres-manifesto__lead">En el Colegio Buen Pastor Voz de Alerta consideramos a los padres de familia como los primeros y fundamentales formadores del carácter.</p>
          <p class="padres-manifesto__text">Nuestra misión educativa alcanza su máxima plenitud cuando existe una comunicación abierta y un compromiso mutuo entre el colegio y el hogar. Al compartir valores bíblicos sólidos, disciplina con amor y metas académicas claras, creamos para los niños y jóvenes un ambiente seguro y coherente en el que florecen con confianza.</p>
          <div class="padres-manifesto__quote">
            <p>«La verdadera educación no sólo transmite conocimientos a la mente; forja el carácter en el corazón a través del ejemplo coherente de padres y maestros.»</p>
            <cite>Comunidad Educativa BPVDA · Dirección Pastoral</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Guía Paso a Paso para Nuevos Padres -->
    <section class="padres-guide-section" id="guia-padres">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--turquoise);">INDUCCIÓN PARA ACUDIENTES</span>
        <h2>Primeros pasos en la comunidad BPVDA</h2>
        <p>Sigue estos sencillos pasos para asegurar que tu familia esté conectada y al día con todas las actividades escolares desde el primer día de clases.</p>
      </div>

      <div class="padres-steps-grid" id="guia-edvoice">
        <div class="padres-step-card">
          <div class="padres-step-num">01</div>
          <h3>Instala la App Edvoice</h3>
          <p>Descarga la aplicación gratuita <strong>Edvoice</strong> desde App Store o Google Play Store. Te permitirá recibir notificaciones urgentes y circulares institucionales al instante.</p>
          <span class="padres-step-tip">💡 Disponible también en versión navegador web.</span>
        </div>

        <div class="padres-step-card">
          <div class="padres-step-num">02</div>
          <h3>Ingresa tu Código de Familia</h3>
          <p>Al matricular a tu hijo en Secretaría, recibirás un <strong>código de vinculación único</strong>. Introdúcelo en Edvoice para enlazar inmediatamente tu perfil con el salón y los profesores de tu hijo.</p>
          <span class="padres-step-tip">💡 Si extraviaste tu código, solicítalo al 391-5811.</span>
        </div>

        <div class="padres-step-card">
          <div class="padres-step-num">03</div>
          <h3>Activa el Acceso a SAI Moodle</h3>
          <p>Cada estudiante cuenta con un usuario institucional para ingresar al Campus Virtual SAI en <a href="https://sai.bpvda.edu.pa" target="_blank" rel="noopener">sai.bpvda.edu.pa</a>. Revisa semanalmente las tareas y guías de estudio asignadas.</p>
          <span class="padres-step-tip">💡 Recomendamos guardar el acceso en favoritos.</span>
        </div>

        <div class="padres-step-card">
          <div class="padres-step-num">04</div>
          <h3>Participa en las Asambleas</h3>
          <p>Asiste a las reuniones trimestrales de acudientes y citas de consejería. Tu presencia activa demuestra a tus hijos el valor que la familia otorga a su educación y progreso.</p>
          <span class="padres-step-tip">💡 Las fechas se avisan con anticipación por Edvoice.</span>
        </div>
      </div>
    </section>

    <!-- Hitos del Año Escolar -->
    <section class="padres-calendar-section" id="calendario-fechas">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--orange);">CRONOGRAMA GENERAL</span>
        <h2>Hitos y períodos clave del año escolar</h2>
        <p>Planifica con tiempo las actividades académicas y familiares de acuerdo con el calendario institucional.</p>
      </div>

      <div class="padres-terms-grid">
        <div class="padres-term-card">
          <div class="padres-term-header">
            <span class="padres-term-tag">PERÍODO I</span>
            <h3>Inicio de Clases & Adaptación</h3>
          </div>
          <ul class="padres-term-events">
            <li><strong>Bienvenida y Apertura:</strong> Asamblea inicial de padres y entrega del reglamento escolar.</li>
            <li><strong>Diagnóstico de Aprendizajes:</strong> Evaluación de nivelación diagnóstica en materias troncales.</li>
            <li><strong>Semana de Evaluaciones I:</strong> Exámenes parciales del primer período lectivo.</li>
            <li><strong>Entrega de Boletines I:</strong> Primera reunión formal de entrega de informes académicos.</li>
          </ul>
        </div>

        <div class="padres-term-card">
          <div class="padres-term-header">
            <span class="padres-term-tag">PERÍODO II</span>
            <h3>Consolidación, Ciencia & Cultura</h3>
          </div>
          <ul class="padres-term-events">
            <li><strong>Feria Científica y de Robótica:</strong> Exposición de proyectos estudiantiles abierta a la familia.</li>
            <li><strong>Aniversario del Colegio:</strong> Jornada cívica y deportiva conmemorativa de la comunidad.</li>
            <li><strong>Semana de Evaluaciones II:</strong> Exámenes trimestrales intermedios.</li>
            <li><strong>Receso de Medio Año:</strong> Semana de descanso escolar de mitad de ciclo.</li>
          </ul>
        </div>

        <div class="padres-term-card">
          <div class="padres-term-header">
            <span class="padres-term-tag">PERÍODO III</span>
            <h3>Cierre, Logros & Graduaciones</h3>
          </div>
          <ul class="padres-term-events">
            <li><strong>Feria de la Hispanidad & Folclore:</strong> Fiestas patrias, presentaciones folclóricas y gastronomía.</li>
            <li><strong>Exámenes Finales Trimestrales:</strong> Cierre de asignaturas y proyectos finales de graduación.</li>
            <li><strong>Entrega Final de Calificaciones:</strong> Boletines definitivos y paz y salvo del año escolar.</li>
            <li><strong>Actos de Graduación:</strong> Ceremonia solemne para Preescolar, Primaria, Premedia y Bachilleres.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Preguntas Frecuentes de Familias -->
    <section class="padres-faq-section" id="faq-padres">
      <div class="padres-section-header">
        <span class="padres-hero__eyebrow" style="color: var(--turquoise);">RESOLUCIÓN DE DUDAS</span>
        <h2>Preguntas frecuentes de las familias</h2>
        <p>Encuentra respuestas inmediatas a las consultas más comunes sobre la dinámica escolar y administrativa.</p>
      </div>

      <div class="padres-faq-accordion">
        <details class="padres-faq-item" open>
          <summary class="padres-faq-question">
            <span>¿Cómo justifico una inasistencia o tardanza médica de mi acudido?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Las inasistencias por salud deben notificarse a través de la aplicación <strong>Edvoice</strong> el mismo día de la ausencia, adjuntando la constancia médica o excusa formal firmada por el acudiente. Para citas médicas programadas, se solicita enviar el aviso con al menos 24 horas de anticipación a la coordinación de nivel.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Cuáles son los canales y fechas límite para el pago de colegiaturas?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Las mensualidades escolares vencen dentro de los primeros diez (10) días de cada mes. Puedes realizar el pago mediante <strong>Banco General (banca en línea / ACH)</strong> o <strong>Yappy Comercial</strong>. Tras efectuar la transacción, envía el comprobante por WhatsApp al <strong>6744-1351</strong> detallando el nombre completo del estudiante y su grado para registrar el paz y salvo.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Qué debo hacer si olvidé las credenciales de SAI Moodle o Edvoice?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Para recuperar tu clave de acceso a la plataforma <strong>SAI BPVDA</strong>, puedes utilizar el enlace de "¿Olvidó su contraseña?" en la pantalla de inicio con el correo del estudiante, o escribir a <a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a> solicitando el restablecimiento. Para la app <strong>Edvoice</strong>, secretaría docente puede emitir un nuevo código de vinculación en ventanilla.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Cómo solicito una cita individual con un docente o profesor consejero?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Las reuniones con docentes consejeros se coordinan por medio de la mensajería interna de <strong>Edvoice</strong> en el horario de atención a padres designado para cada profesor, o comunicándose con Secretaría al <strong>391-5811</strong>. Esto asegura que el profesor reserve el espacio sin interrumpir su tiempo de docencia frente a grupo.</p>
          </div>
        </details>

        <details class="padres-faq-item">
          <summary class="padres-faq-question">
            <span>¿Cuál es el horario de atención presencial en oficinas y caja?</span>
            <span class="padres-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="padres-faq-answer">
            <p>Nuestra oficina de atención al cliente, caja y secretaría docente atiende de manera continua de <strong>lunes a viernes de 7:30 a.m. a 2:00 p.m.</strong> en las instalaciones de Monterrico, 24 de Diciembre. En período de vacaciones escolares o de verano rige el horario de 8:00 a.m. a 2:00 p.m.</p>
          </div>
        </details>
      </div>
    </section>

    <!-- Banner de Soporte Final -->
    <section class="padres-support-banner">
      <div class="padres-support-inner">
        <span class="padres-hero__eyebrow" style="color: var(--turquoise); justify-content: center;">ESTAMOS PARA SERVIRTE</span>
        <h2>¿Necesitas asistencia adicional o atención personalizada?</h2>
        <p>Nuestro equipo de secretaría docente, tesorería y bienestar pastoral está a tu completa disposición para acompañar a tu familia en todo momento.</p>
        <div class="padres-support-actions">
          <a href="tel:+5073915811" class="hero-btn-primary">Llamar a Secretaría: 391-5811 <b>📞</b></a>
          <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="hero-btn-outline">Escribir por WhatsApp <b>💬</b></a>
          <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="hero-btn-outline">Ver Horarios y Ubicación <b>📍</b></a>
        </div>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
