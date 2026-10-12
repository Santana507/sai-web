<?php
/**
 * Pagina: contacto (copia fiel de contacto.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/campus-exterior.webp" alt="">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>05 FAMILIA Y COMUNIDAD</span>
        <h1>Estamos aquí para <mark>orientarte</mark>.</h1>
        <p>Canales directos para conversar, visitar y conocer la comunidad BPVDA.</p>
      </div>
    </section>

    
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/client-atention.webp" alt="">
      <div>
        <span class="section-number">05 FAMILIA Y COMUNIDAD</span>
        <h2>Contacto y atención</h2>
        <p>Canales directos para conversar, visitar y conocer la comunidad BPVDA. En esta sección se añadirá la información institucional definitiva cuando sea aprobada.</p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: TARJETAS FORMATIVAS Y CARRUSEL EDITORIAL            -->
    <!-- ============================================================ -->
    
<section class="content-cards section-pad">
  <article class="content-card">
    <div class="content-card__head">
      <div class="content-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
      </div>
      <span class="content-card__tag">01 · Propósito</span>
    </div>
    <h3>Una propuesta con propósito</h3>
    <p>Aquí se incorporará el contenido institucional final de Contacto y atención.</p>
    <div class="content-card__foot">
      <span>Enfoque formativo</span>
      <b>→</b>
    </div>
  </article>

  <article class="content-card">
    <div class="content-card__head">
      <div class="content-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      </div>
      <span class="content-card__tag">02 · Acompañamiento</span>
    </div>
    <h3>Experiencias que acompañan</h3>
    <p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p>
    <div class="content-card__foot">
      <span>Ruta de aprendizaje</span>
      <b>→</b>
    </div>
  </article>

  <article class="content-card">
    <div class="content-card__head">
      <div class="content-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <span class="content-card__tag">03 · Comunidad</span>
    </div>
    <h3>Una comunidad cercana</h3>
    <p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p>
    <div class="content-card__foot">
      <span>Alianza familiar</span>
      <b>→</b>
    </div>
  </article>
</section>
<section class="carousel-v3" aria-label="Galería visual de momentos BPVDA">
  <div class="carousel-v3__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza o disfruta del recorrido continuo por los espacios y vivencias de nuestra comunidad educativa.</p>
  </div>
  <div class="carousel-v3__track-container">
    <div class="carousel-v3__track">
      <div class="carousel-v3__group">
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/community.webp" alt="Una comunidad que te respalda y te acompaña." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              COMUNIDAD
            </span>
            <h3>Una comunidad que te respalda y te acompaña.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/campus-main.webp" alt="Instalaciones preparadas para recibir a tu familia." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              CAMPUS
            </span>
            <h3>Instalaciones preparadas para recibir a tu familia.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/admision.webp" alt="Atención cercana en cada consulta y trámite." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              ORIENTACIÓN
            </span>
            <h3>Atención cercana en cada consulta y trámite.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/culture.webp" alt="Formación integral que inspira vidas." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              VALORES
            </span>
            <h3>Formación integral que inspira vidas.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/campus-restzone.webp" alt="Espacios seguros diseñados para aprender y compartir." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              CONVIVENCIA
            </span>
            <h3>Espacios seguros diseñados para aprender y compartir.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/achievement.webp" alt="Guiando los pasos de las nuevas generaciones." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              FUTURO
            </span>
            <h3>Guiando los pasos de las nuevas generaciones.</h3>
          </div>
        </article>
      </div>
      <div class="carousel-v3__group" aria-hidden="true">
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/community.webp" alt="Una comunidad que te respalda y te acompaña." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              COMUNIDAD
            </span>
            <h3>Una comunidad que te respalda y te acompaña.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/campus-main.webp" alt="Instalaciones preparadas para recibir a tu familia." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              CAMPUS
            </span>
            <h3>Instalaciones preparadas para recibir a tu familia.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/admision.webp" alt="Atención cercana en cada consulta y trámite." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              ORIENTACIÓN
            </span>
            <h3>Atención cercana en cada consulta y trámite.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/culture.webp" alt="Formación integral que inspira vidas." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              VALORES
            </span>
            <h3>Formación integral que inspira vidas.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/campus-restzone.webp" alt="Espacios seguros diseñados para aprender y compartir." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              CONVIVENCIA
            </span>
            <h3>Espacios seguros diseñados para aprender y compartir.</h3>
          </div>
        </article>
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/achievement.webp" alt="Guiando los pasos de las nuevas generaciones." loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">
              <span class="carousel-v3__tag-dot" aria-hidden="true"></span>
              FUTURO
            </span>
            <h3>Guiando los pasos de las nuevas generaciones.</h3>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    <section class="contact-direct section-pad">
  <a href="tel:+5073915811" class="contact-direct__card">
    <div class="contact-direct__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    </div>
    <div class="contact-direct__info">
      <span class="contact-direct__tag">SECRETARÍA</span>
      <strong class="contact-direct__value">391-5811</strong>
      <span class="contact-direct__sub">Atención telefónica regular</span>
    </div>
    <span class="contact-direct__arrow" aria-hidden="true">↗</span>
  </a>
  <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="contact-direct__card contact-direct__card--wa">
    <div class="contact-direct__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    </div>
    <div class="contact-direct__info">
      <span class="contact-direct__tag">WHATSAPP</span>
      <strong class="contact-direct__value">6744-1351</strong>
      <span class="contact-direct__sub">Consultas directas</span>
    </div>
    <span class="contact-direct__arrow" aria-hidden="true">↗</span>
  </a>
  <a href="mailto:info@buenpastor-vda.net" class="contact-direct__card">
    <div class="contact-direct__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    </div>
    <div class="contact-direct__info">
      <span class="contact-direct__tag">CORREO</span>
      <strong class="contact-direct__value">info@buenpastor-vda.net</strong>
      <span class="contact-direct__sub">Trámites y consultas</span>
    </div>
    <span class="contact-direct__arrow" aria-hidden="true">↗</span>
  </a>
</section>
<section class="map-section">
  <iframe title="Ubicación exacta de Colegio Buen Pastor Voz de Alerta" src="https://www.google.com/maps?q=9.106901321318759,-79.36663973009655&amp;hl=es&amp;z=17&amp;output=embed" loading="lazy"></iframe>
</section>
  </main>

<?php get_footer(); ?>
