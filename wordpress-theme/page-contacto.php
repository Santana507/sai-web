<?php
/**
 * Pagina: contacto (copia fiel de contacto.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior: Contacto y Atención BPVDA -->
    <section class="contacto-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9372.webp" alt="Entrada y fachada exterior del Colegio Buen Pastor Voz de Alerta" loading="eager">
      <div class="contacto-hero__overlay"></div>
      <div class="contacto-hero__container">
        <span class="contacto-hero__eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          03 FAMILIA Y COMUNIDAD · CONTACTO Y ATENCIÓN
        </span>
        <h1>Estamos aquí para orientar a tu <mark>familia</mark>.</h1>
        <p class="contacto-hero__lead">Acércate a conversar con nuestro equipo, programa una visita guiada para conocer las instalaciones y resuelve cualquier duda sobre admisiones, trámites de secretaría o vida escolar en el Colegio Buen Pastor Voz de Alerta.</p>
        <div class="contacto-hero__actions">
          <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="hero-btn-primary">Escribir por WhatsApp <b>💬</b></a>
          <a href="#visita-form" class="hero-btn-outline">Solicitar Visita al Campus <b>↓</b></a>
          <a href="#mapa-ubicacion" class="hero-btn-outline">Ver Ubicación y Mapa <b>↓</b></a>
        </div>
        <div class="contacto-hero__badges">
          <div class="contacto-badge-item">
            <span class="contacto-badge-dot" aria-hidden="true"></span>
            <span><strong>Sede:</strong> Calle San José, Urb. Monterrico, 24 de Diciembre</span>
          </div>
          <div class="contacto-badge-item">
            <span class="contacto-badge-dot" aria-hidden="true"></span>
            <span><strong>Horario:</strong> L-V 7:30 a.m. – 2:00 p.m.</span>
          </div>
          <div class="contacto-badge-item">
            <span class="contacto-badge-dot" aria-hidden="true"></span>
            <span><strong>Teléfono:</strong> (507) 391-5811</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Franja de Canales Directos de Atención Inmediata -->
    <section class="contact-direct section-pad">
      <a href="tel:+5073915811" class="contact-direct__card">
        <div class="contact-direct__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div class="contact-direct__info">
          <span class="contact-direct__tag">SECRETARÍA & PBX</span>
          <strong class="contact-direct__value">391-5811</strong>
          <span class="contact-direct__sub">Atención telefónica y conmutador</span>
        </div>
        <span class="contact-direct__arrow" aria-hidden="true">↗</span>
      </a>

      <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="contact-direct__card contact-direct__card--wa">
        <div class="contact-direct__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </div>
        <div class="contact-direct__info">
          <span class="contact-direct__tag">WHATSAPP OFICIAL</span>
          <strong class="contact-direct__value">6744-1351</strong>
          <span class="contact-direct__sub">Orientación y consultas rápidas</span>
        </div>
        <span class="contact-direct__arrow" aria-hidden="true">↗</span>
      </a>

      <a href="mailto:info@buenpastor-vda.net" class="contact-direct__card">
        <div class="contact-direct__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div class="contact-direct__info">
          <span class="contact-direct__tag">CORREO INSTITUCIONAL</span>
          <strong class="contact-direct__value">info@buenpastor-vda.net</strong>
          <span class="contact-direct__sub">Trámites y documentos oficiales</span>
        </div>
        <span class="contact-direct__arrow" aria-hidden="true">↗</span>
      </a>
    </section>

    <!-- Sección Principal: Formulario de Visita y Hub de Sede -->
    <section class="contacto-main-section" id="visita-form">
      <div class="contacto-main-grid">
        <!-- Columna Izquierda: Formulario de Contacto / Visita -->
        <div class="contacto-form-card">
          <span class="contacto-hero__eyebrow" style="color: var(--orange);">FORMULARIO DE ORIENTACIÓN</span>
          <h2>Solicitar Visita Guiada o Consulta</h2>
          <p>Completa los siguientes campos y nuestro equipo de admisiones y orientación se comunicará contigo en menos de 24 horas hábiles.</p>

          <form action="mailto:info@buenpastor-vda.net" method="POST" enctype="text/plain" class="contacto-form">
            <div class="contacto-form-row">
              <div class="contacto-form-group">
                <label for="contactNombre">Nombre y Apellido del Acudiente *</label>
                <input type="text" id="contactNombre" name="nombre" placeholder="Ej: María Rodríguez" required>
              </div>
              <div class="contacto-form-group">
                <label for="contactTelefono">Teléfono / WhatsApp *</label>
                <input type="tel" id="contactTelefono" name="telefono" placeholder="Ej: +507 6000-0000" required>
              </div>
            </div>

            <div class="contacto-form-group">
              <label for="contactEmail">Correo Electrónico *</label>
              <input type="email" id="contactEmail" name="email" placeholder="Ej: acudiente@correo.com" required>
            </div>

            <div class="contacto-form-row">
              <div class="contacto-form-group">
                <label for="contactNivel">Nivel o Grado de Interés *</label>
                <select id="contactNivel" name="nivel" required>
                  <option value="" disabled selected>Selecciona un nivel...</option>
                  <option value="Prekínder">Prekínder (Preescolar)</option>
                  <option value="Kínder">Kínder (Preescolar)</option>
                  <option value="Primaria">Primaria (1° a 6° Grado)</option>
                  <option value="Secundaria">Premedia / Secundaria (7° a 9°)</option>
                  <option value="Bachiller Ciencias">Bachiller en Ciencias (10° a 12°)</option>
                  <option value="Bachiller Informatica">Bachiller en Informática (10° a 12°)</option>
                  <option value="Bachiller Comercio">Bachiller en Comercio (10° a 12°)</option>
                  <option value="Tramite Administrativo">Trámite Administrativo / Secretaría</option>
                </select>
              </div>
              <div class="contacto-form-group">
                <label for="contactMotivo">Motivo de Contacto *</label>
                <select id="contactMotivo" name="motivo" required>
                  <option value="Visita Guiada" selected>Recorrido guiado por el campus</option>
                  <option value="Informacion Matricula">Información de matrícula y costos</option>
                  <option value="Entrevista Consejeria">Entrevista con dirección/consejería</option>
                  <option value="Consulta General">Consulta general</option>
                </select>
              </div>
            </div>

            <div class="contacto-form-group">
              <label for="contactMensaje">Mensaje o Pregunta Específica</label>
              <textarea id="contactMensaje" name="mensaje" rows="4" placeholder="Escribe aquí los detalles de tu consulta, fechas preferidas para tu visita o necesidades formativas de tu acudido..."></textarea>
            </div>

            <button type="submit" class="contacto-btn-submit">
              <span>Enviar Consulta / Solicitar Recorrido</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <p class="contacto-privacy-note">🔒 Tus datos personales son tratados con estricta confidencialidad institucional conforme a la legislación vigente de protección de datos.</p>
          </form>
        </div>

        <!-- Columna Derecha: Tarjetas de Información Operativa -->
        <div class="contacto-side-info">
          <!-- Horarios -->
          <div class="contacto-info-box">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Horarios de Atención Presencial
            </h3>
            <p>Nuestras ventanillas de secretaría y caja están disponibles de forma continua para atender trámites familiares:</p>
            <ul class="contacto-schedule-list">
              <li class="contacto-schedule-item">
                <strong>Año Lectivo Regular:</strong>
                <span>7:30 a.m. – 2:00 p.m.</span>
              </li>
              <li class="contacto-schedule-item">
                <strong>Período de Verano:</strong>
                <span>8:00 a.m. – 2:00 p.m.</span>
              </li>
              <li class="contacto-schedule-item">
                <strong>Días de Atención:</strong>
                <span>Lunes a Viernes</span>
              </li>
              <li class="contacto-schedule-item">
                <strong>Fines de Semana:</strong>
                <span>Cerrado (Citas especiales previas)</span>
              </li>
            </ul>
          </div>

          <!-- Ubicación y Accesibilidad -->
          <div class="contacto-info-box">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Cómo Llegar a la Sede
            </h3>
            <p>Estamos ubicados en Calle San José, Urbanización Monterrico, Corregimiento 24 de Diciembre, Ciudad de Panamá.</p>
            <ul class="contacto-transport-list">
              <li>
                <strong>🚇 En Metro (Línea 2):</strong>
                Bájate en la Estación 24 de Diciembre. Desde allí puedes tomar transporte interno o taxi hacia Monterrico (aproximadamente 5 minutos).
              </li>
              <li>
                <strong>🚌 En Transporte Público:</strong>
                Rutas de Vía España, Tumba Muerto o Corredor Sur con destino a 24 de Diciembre / Pacora, con parada cercana a la entrada de Monterrico.
              </li>
              <li>
                <strong>🚗 En Vehículo Particular:</strong>
                Acceso fluido desde la Carretera Panamericana por la entrada principal de Monterrico. Contamos con estacionamiento interno para visitantes.
              </li>
            </ul>
          </div>

          <!-- Normas de Visita -->
          <div class="contacto-info-box" style="background: var(--cream); border-color: rgba(16, 184, 176, 0.3);">
            <h3 style="color: var(--navy);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Normas de Ingreso al Plantel
            </h3>
            <p>Por la seguridad y el bienestar de los estudiantes, todo visitante debe registrarse en la garita principal presentando su documento de identidad personal (cédula o pasaporte). Agradecemos acudir con vestimenta adecuada acorde al entorno escolar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Preguntas Frecuentes de Visitas y Orientación -->
    <section class="contacto-faq-section">
      <div class="padres-section-header">
        <span class="contacto-hero__eyebrow" style="color: var(--turquoise);">RESOLUCIÓN DE DUDAS</span>
        <h2>Preguntas frecuentes sobre visitas y atención</h2>
        <p>Todo lo que necesitas saber antes de acercarte a las instalaciones de nuestro colegio.</p>
      </div>

      <div class="contacto-faq-accordion">
        <details class="contacto-faq-item" open>
          <summary class="contacto-faq-question">
            <span>¿Es indispensable coordinar una cita previa para conocer el campus?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Para trámites administrativos de ventanilla (pagos en caja, entrega de documentos o solicitud de constancias) <strong>no se requiere cita previa</strong> dentro de nuestro horario regular. Sin embargo, para realizar un <strong>recorrido guiado por las instalaciones</strong> o sostener una entrevista con directores de nivel, recomendamos programarla con al menos 24 horas de antelación para asegurar que un orientador esté disponible para atenderte con dedicación.</p>
          </div>
        </details>

        <details class="contacto-faq-item">
          <summary class="contacto-faq-question">
            <span>¿Qué áreas del colegio se pueden conocer durante la visita guiada?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Durante el recorrido podrás conocer los pabellones académicos, las aulas interactivas del nivel correspondiente a tu hijo, los laboratorios de ciencias y robótica, la capilla y auditorio central, la biblioteca, el comedor escolar y el complejo multideportivo techado.</p>
          </div>
        </details>

        <details class="contacto-faq-item">
          <summary class="contacto-faq-question">
            <span>¿Qué documentación debo traer si solicito información para traslado de otro colegio?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Es conveniente presentar una copia del <strong>último boletín de calificaciones o créditos oficiales</strong> del estudiante, así como la copia de la cédula juvenil del alumno y la cédula del acudiente. Con estos documentos, nuestro equipo pedagógico podrá brindarte una orientación precisa sobre el plan de convalidación y cupos disponibles.</p>
          </div>
        </details>

        <details class="contacto-faq-item">
          <summary class="contacto-faq-question">
            <span>¿Cómo consulto el estatus de un trámite o solicitud de admisión ya enviada?</span>
            <span class="contacto-faq-arrow" aria-hidden="true">▾</span>
          </summary>
          <div class="contacto-faq-answer">
            <p>Puedes consultar el estado de tu expediente directamente a través de nuestro WhatsApp institucional <strong>6744-1351</strong> o comunicándote al PBX <strong>391-5811</strong> indicando el nombre completo del estudiante y el nivel académico solicitado.</p>
          </div>
        </details>
      </div>
    </section>

    <!-- Mapa Interactivo Oficial con Coordenadas Exactas -->
    <section class="contacto-map-wrapper" id="mapa-ubicacion">
      <div class="contacto-map-container">
        <div class="contacto-map-header">
          <div>
            <h3>Sede Central BPVDA en Google Maps</h3>
            <p>Calle San José, Urbanización Monterrico, Corregimiento 24 de Diciembre, Ciudad de Panamá</p>
          </div>
          <div class="contacto-map-nav-actions">
            <a href="https://maps.app.goo.gl/r5Arxesjc7P2Uzew7" target="_blank" rel="noopener noreferrer" class="contacto-map-nav-btn">
              <span>Abrir en Google Maps</span> ↗
            </a>
            <a href="https://waze.com/ul?ll=9.106901321318759,-79.36663973009655&navigate=yes" target="_blank" rel="noopener noreferrer" class="contacto-map-nav-btn">
              <span>Navegar con Waze</span> ↗
            </a>
          </div>
        </div>
        <iframe class="contacto-map-frame" title="Ubicación exacta de Colegio Buen Pastor Voz de Alerta" src="https://www.google.com/maps?q=9.106901321318759,-79.36663973009655&amp;hl=es&amp;z=17&amp;output=embed" loading="lazy"></iframe>
      </div>
    </section>
  </main>

<?php get_footer(); ?>
