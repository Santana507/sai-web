<?php
/**
 * Footer Template - BPVDA Official Theme
 *
 * @package BPVDA
 */
?>
  <!-- ========================================== -->
  <!-- PIE DE PÁGINA INSTITUCIONAL -->
  <!-- ========================================== -->
  <footer id="contacto">
    <!-- Contenedor Superior del Footer Dividido en 3 Columnas Principales -->
    <div class="footer-top">
      <!-- Columna 1: Marca Institucional, Dirección Física y Enlace a Google Maps -->
      <div class="footer-col footer-col--brand">
        <div class="footer-brand">
          <img decoding="async" src="<?php echo esc_url( bpvda_asset( 'brand/pastor-logo-white.png' ) ); ?>" alt="Buen Pastor" class="footer-pastor-logo">
          <div class="footer-brand-meta">
            <span class="footer-school-name">Colegio Buen Pastor</span>
            <span class="footer-school-sub">Voz de Alerta</span>
          </div>
        </div>
        <p class="footer-location">Calle San José, Urb. Monterrico, Corregimiento 24 de Diciembre, Ciudad de Panamá</p>
        <a href="https://maps.app.goo.gl/r5Arxesjc7P2Uzew7" target="_blank" rel="noopener noreferrer" class="footer-maps-link">
          <img decoding="async" src="<?php echo esc_url( bpvda_asset( 'icons/place-icon.png' ) ); ?>" alt="" class="footer-maps-icon">
          <span>Ver en Google Maps</span>
        </a>
      </div>

      <!-- Columna 2: Teléfono de Oficina Central y Desglose de Horarios -->
      <div class="footer-col">
        <h4>Oficina</h4>
        <p class="footer-phone"><a href="tel:+5073915811">391-5811</a></p>
        <div class="footer-hours-block">
          <span class="footer-hours-tag">Horario regular</span>
          <p class="footer-hours">7:30 a.m. - 2:00 p.m.</p>
        </div>
        <div class="footer-hours-block">
          <span class="footer-hours-tag">Horario de verano</span>
          <p class="footer-hours">8:00 a.m. - 2:00 p.m.</p>
        </div>
      </div>

      <!-- Columna 3: Atención al Cliente, WhatsApp Oficial y Correo Electrónico -->
      <div class="footer-col">
        <h4>Atención al cliente</h4>
        <p class="footer-phone"><a href="tel:+5073915811">391-5811</a> <span class="footer-phone-sep">/</span> <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" class="footer-phone-wa">6744-1351</a></p>
        <p class="footer-email"><a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a></p>
      </div>
    </div>

    <!-- Barra Inferior del Footer: Derechos de Autor y Redes Sociales -->
    <div class="footer-bottom">
      <p class="footer-copy">© <?php echo esc_html( date( 'Y' ) ); ?> BUEN PASTOR VOZ DE ALERTA</p>
      <div class="footer-socials">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@buenpastor-vda.net" target="_blank" rel="noopener noreferrer" aria-label="Enviar correo por Gmail" class="social-link">
          <svg viewBox="0 0 512 512" fill="none" style="width:20px; height:20px; display:block;"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        </a>
        <a href="https://www.facebook.com/people/Escuela-Buen-Pastor-Voz-De-Alerta/100045208036432/?locale=de_DE" target="_blank" rel="noopener noreferrer" aria-label="Facebook BPVDA" class="social-link">
          <svg viewBox="0 0 320 512" fill="none" style="width:20px; height:20px; display:block;"><path fill="#ffffff" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
        </a>
        <a href="https://www.instagram.com/bpvda/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram BPVDA" class="social-link">
          <svg viewBox="0 0 24 24" fill="none" style="width:20px; height:20px; display:block;"><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6C16.4477 6 16 6.44772 16 7C16 7.55228 16.4477 8 17 8Z"/></svg>
        </a>
        <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp BPVDA" class="social-link">
          <img src="<?php echo esc_url( bpvda_asset( 'icons/whatsapp-icon.png' ) ); ?>" alt="WhatsApp" class="social-icon-img">
        </a>
      </div>
    </div>
  </footer>

  <!-- Botón Volver Arriba -->
  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>

<?php wp_footer(); ?>
</body>
</html>
