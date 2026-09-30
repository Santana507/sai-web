/**
 * ==============================================================================
 * BPVDA — JavaScript Institucional Modular (Vanilla JS)
 * ==============================================================================
 * Metodología: Spec-Driven Development (SDD) — Estándar MoureDev.
 * Arquitectura: IIFE (Immediately Invoked Function Expression) auto-ejecutable.
 * Dependencias: Ninguna (0 frameworks, 0 polyfills pesados).
 * Accesibilidad: Conforme a WCAG 2.1 Nivel AA (Focus Trap, ARIA, Teclado).
 * ==============================================================================
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------------------------
   * 1. MEJORA PROGRESIVA (Progressive Enhancement)
   * ----------------------------------------------------------------------------
   * Elimina la clase 'no-js' del elemento raíz <html> tan pronto como el script
   * se ejecuta, indicando al CSS que el entorno soporta interactividad avanzada.
   */
  document.documentElement.classList.remove('no-js');

  /* ----------------------------------------------------------------------------
   * 2. CACHÉ DE ELEMENTOS PRINCIPALES DEL DOM
   * ----------------------------------------------------------------------------
   * Consultas selectivas reutilizadas a lo largo del ciclo de vida de la página.
   */
  const menuButton = document.querySelector('[data-menu-button]');
  const menuPanel = document.querySelector('[data-menu-panel]');
  const header = document.querySelector('.site-header');
  const backToTopButton = document.querySelector('.back-to-top');

  /* ----------------------------------------------------------------------------
   * 3. GESTIÓN DEL MENÚ MODAL Y ATRAPAMIENTO DE FOCO (Focus Trap)
   * ----------------------------------------------------------------------------
   * Garantiza la navegación accesible por teclado (Tab / Shift+Tab) dentro del
   * menú desplegable cuando está abierto, impidiendo que el foco escape al fondo.
   */

  /**
   * Obtiene todos los elementos interactivos habilitados y visibles dentro de un contenedor.
   * @param {HTMLElement} container - El elemento contenedor (ej. menuPanel).
   * @returns {HTMLElement[]} Lista de elementos que pueden recibir el foco.
   */
  function getFocusableElements(container) {
    const selector = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
    return Array.from(container.querySelectorAll(selector)).filter(function(el) {
      return !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden') && el.offsetParent !== null;
    });
  }

  /**
   * Abre o cierra el panel del menú modal actualizando clases, atributos ARIA y foco.
   * @param {boolean} open - true para abrir el menú, false para cerrarlo.
   */
  function setMenu(open) {
    if (!menuButton || !menuPanel) return;
    
    // Actualización de atributos de accesibilidad en el botón disparador
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    
    // Alternancia de visibilidad en el panel y bloqueo de scroll en el body
    menuPanel.classList.toggle('is-open', open);
    menuPanel.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-is-open', open);
    
    // Gestión del Foco accesible (Focus Trap)
    if (open) {
      const focusable = getFocusableElements(menuPanel);
      if (focusable.length > 0) focusable[0].focus();
    } else {
      menuButton.focus(); // Retorna el foco al botón disparador al cerrar
    }
  }

  // Asignación de escuchadores de eventos para el menú si existen en la página
  if (menuButton && menuPanel) {
    // Clic en el botón hamburguesa / cruz
    menuButton.addEventListener('click', function () {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    // Clic en cualquier enlace interno dentro del menú: cierra automáticamente el panel
    menuPanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    // Control por Teclado: Escape y navegación con Tabulador (Focus Trap)
    document.addEventListener('keydown', function (event) {
      // 1. Tecla Escape: Cierre inmediato del menú
      if (event.key === 'Escape' && menuPanel.classList.contains('is-open')) {
        setMenu(false);
      }
      
      // 2. Tecla Tab: Ciclo circular del foco dentro del menú modal
      if (event.key === 'Tab' && menuPanel.classList.contains('is-open')) {
        const focusableElements = getFocusableElements(menuPanel);
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Retroceso (Shift + Tab): Si está en el primer elemento, salta al último
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          // Avance (Tab): Si está en el último elemento, regresa al primero
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    });
  }

  /* ----------------------------------------------------------------------------
   * 4. SCROLL DEL HEADER, MODO LIBRE Y BOTÓN VOLVER ARRIBA
   * ----------------------------------------------------------------------------
   * Controla la transición de la barra superior:
   * - En la portada (index.html): Permanece translúcida hasta superar la mitad del slider.
   * - En páginas interiores: Pasa a "Modo Libre" tras bajar 40px, desvaneciendo el fondo
   *   y texto pero manteniendo estables el logo oficial y el botón de menú.
   */
  const heroSlider = document.querySelector('[data-slider]');

  function onScroll() {
    const scrollY = window.scrollY;
    
    // Distancia umbral para activar el "Modo Libre"
    let triggerDistance = 40;
    if (heroSlider) {
      // En index se activa a la mitad del slider de portada (~55% de la altura o mín. 260px)
      triggerDistance = Math.max(Math.round(heroSlider.offsetHeight * 0.55), 260);
    }

    // Cabecera compacta y desvanecimiento a modo libre
    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 20);
      header.classList.toggle('is-scrolled-free', scrollY > triggerDistance);
    }

    // Botón flotante 'Volver Arriba': visible a partir de 600px de scroll
    if (backToTopButton) {
      backToTopButton.classList.toggle('is-visible', scrollY > 600);
    }
  }
  
  // Escucha pasiva para optimizar el rendimiento del hilo principal (60 FPS)
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Clic en botón "Volver Arriba": desplazamiento suave al inicio del documento
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------------------------
   * 5. MOTOR DEL HERO SLIDER (Portada index.html)
   * ----------------------------------------------------------------------------
   * Administra el carrusel horizontal con video de fondo, barra de progreso,
   * avances temporizados, soporte para pausa y gestos táctiles (Swipe).
   */
  const slider = document.querySelector('[data-slider]');
  
  if (slider) {
    const track = slider.querySelector('[data-slider-track]');
    const slides = Array.from(slider.querySelectorAll('[data-slide]'));
    const currentLabel = slider.querySelector('[data-current]');
    const totalLabel = slider.querySelector('[data-total]');
    const progress = slider.querySelector('[data-progress]');
    const pauseButton = slider.querySelector('[data-pause]');
    let active = 0;
    let paused = false;
    let timer;

    /**
     * Programa el avance automático al siguiente slide.
     * Regla innegociable de AGENTS.md: El video inicial dura 10 segundos antes de avanzar;
     * los slides subsecuentes avanzan cada 7 segundos.
     */
    function schedule() {
      window.clearTimeout(timer);
      if (paused) return;
      const duration = (active === 0) ? 10000 : 7000;
      timer = window.setTimeout(function () { move(1); }, duration);
    }

    /**
     * Aplica la transformación CSS en el track y actualiza estados de accesibilidad.
     */
    function render() {
      // Desplazamiento horizontal del riel
      track.style.transform = 'translateX(-' + (active * 100) + '%)';
      
      // Control de accesibilidad y reproducción de videos por slide
      slides.forEach(function (slide, index) {
        const isActive = index === active;
        slide.setAttribute('aria-hidden', String(!isActive));
        
        // Deshabilitar navegación por tabulador en slides ocultos
        slide.querySelectorAll('a, button').forEach(function (element) {
          element.tabIndex = isActive ? 0 : -1;
        });

        // Reproduce el video si el slide está activo, o lo pausa si está inactivo
        const video = slide.querySelector('video');
        if (video) {
          if (isActive) video.play().catch(function () {});
          else video.pause();
        }
      });

      // Actualización de contadores numéricos y barra visual de progreso
      if (currentLabel) currentLabel.textContent = String(active + 1).padStart(2, '0');
      if (totalLabel) totalLabel.textContent = String(slides.length).padStart(2, '0');
      if (progress) progress.style.width = (((active + 1) / slides.length) * 100) + '%';
      
      schedule();
    }

    /**
     * Mueve el slider hacia adelante (+1) o hacia atrás (-1) con navegación cíclica.
     * @param {number} direction - Dirección del avance.
     */
    function move(direction) {
      active = (active + direction + slides.length) % slides.length;
      render();
    }

    // Botones de navegación prev/next
    const prevBtn = slider.querySelector('[data-prev]');
    const nextBtn = slider.querySelector('[data-next]');
    
    if (prevBtn) prevBtn.addEventListener('click', function () { move(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { move(1); });
    
    // Botón de alternancia Pausa / Reanudar (Ⅱ / ▶)
    if (pauseButton) {
      pauseButton.addEventListener('click', function () {
        paused = !paused;
        pauseButton.textContent = paused ? '▶' : 'Ⅱ';
        pauseButton.setAttribute('aria-label', paused ? 'Reanudar historias' : 'Pausar historias');
        schedule();
      });
    }

    // Soporte para gestos táctiles en dispositivos móviles (Touch Swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchmove', function(e) {
      touchEndX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', function() {
      const distance = touchStartX - touchEndX;
      const swipeThreshold = 50; // Umbral de 50px para confirmar el gesto de swipe
      if (distance > swipeThreshold) {
        move(1);  // Deslizamiento hacia la izquierda: avanza
      } else if (distance < -swipeThreshold) {
        move(-1); // Deslizamiento hacia la derecha: retrocede
      }
    });

    // Inicialización del primer render
    render();
  }

  /* ----------------------------------------------------------------------------
   * 6. ANIMACIONES DE APARICIÓN AL HACER SCROLL (Scroll Reveal)
   * ----------------------------------------------------------------------------
   * Utiliza la API moderna IntersectionObserver para activar animaciones de
   * entrada (.is-visible) conforme las tarjetas y secciones entran en pantalla.
   */
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Se activa al mostrar el 15% del elemento
    };

    // Observador para elementos individuales
    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Dejar de observar una vez animado
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function(el) {
      revealObserver.observe(el);
    });

    // Observador para contenedores escalonados (stagger reveal para tarjetas hijas)
    const staggerObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).forEach(function(child) {
            child.classList.add('is-visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-stagger').forEach(function(el) {
      staggerObserver.observe(el);
    });
  }

  /* ----------------------------------------------------------------------------
   * 7. DESPLAZAMIENTO SUAVE PARA ANCLAJES (#)
   * ----------------------------------------------------------------------------
   * Intercepta clics en enlaces con hash (#id) para realizar un scroll suave.
   */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----------------------------------------------------------------------------
   * 8. CONTROL INTELIGENTE DE VIDEOS SECUNDARIOS (No en Loop)
   * ----------------------------------------------------------------------------
   * Regla de AGENTS.md: Los videos secundarios (actividades, curriculo, escuela)
   * no se reproducen en bucle; inician automáticamente al entrar en el viewport
   * y se detienen de forma definitiva en el último fotograma al terminar ('ended').
   */
  const nonLoopVideos = document.querySelectorAll('video:not([loop])');
  if ('IntersectionObserver' in window && nonLoopVideos.length > 0) {
    const videoObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        const video = entry.target;
        if (entry.isIntersecting) {
          // Si entra en pantalla y no ha terminado, reproduce
          if (!video.dataset.hasFinished) {
            video.play().catch(function() {});
          }
        } else {
          // Si sale de pantalla y no ha terminado, pausa para ahorrar CPU
          if (!video.dataset.hasFinished) {
            video.pause();
          }
        }
      });
    }, { threshold: 0.2 });

    nonLoopVideos.forEach(function(video) {
      video.removeAttribute('loop');
      video.addEventListener('ended', function() {
        video.dataset.hasFinished = 'true';
        video.pause(); // Congela en el último frame
      });
      videoObserver.observe(video);
    });
  }

  /* ----------------------------------------------------------------------------
   * 9. SECUENCIA DE IMÁGENES CON FUNDIDO EN PROPÓSITO BPVDA (filosofia.html)
   * ----------------------------------------------------------------------------
   * Alterna suavemente la clase .is-active entre las fotografías de estudiantes
   * con uniforme cada 6 segundos para un efecto de transición continuo y sobrio.
   */
  const purposeImages = Array.from(document.querySelectorAll('.purpose-fade__images img'));
  if (purposeImages.length > 1) {
    let purposeIndex = purposeImages.findIndex(function(image) { return image.classList.contains('is-active'); });
    if (purposeIndex < 0) purposeIndex = 0;
    
    window.setInterval(function() {
      purposeImages[purposeIndex].classList.remove('is-active');
      purposeIndex = (purposeIndex + 1) % purposeImages.length;
      purposeImages[purposeIndex].classList.add('is-active');
    }, 6000);
  }

  /* ----------------------------------------------------------------------------
   * 10. UNIFICACIÓN DE ENLACES SOCIALES OFICIALES (Footer y Menú)
   * ----------------------------------------------------------------------------
   * Inyecta el marcado homogéneo de iconos corporativos (Gmail, Facebook,
   * Instagram, WhatsApp) asegurando perfecta coherencia gráfica entre el
   * pie de página institucional y el panel de navegación modal.
   */
  const socialMarkup = [
    '<a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@buenpastor-vda.net" target="_blank" rel="noopener noreferrer" aria-label="Correo electrónico" class="social-link"><img src="assets/brand/email.png" alt=""></a>',
    '<a href="https://www.facebook.com/people/Escuela-Buen-Pastor-Voz-De-Alerta/100045208036432/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-link"><img src="assets/brand/facebook.png" alt=""></a>',
    '<a href="https://www.instagram.com/bpvda/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-link"><img src="assets/brand/instagram.png" alt=""></a>',
    '<a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="social-link"><img src="assets/icons/whatsapp-icon.png" alt=""></a>'
  ].join('');

  // Inyección en los contenedores del pie de página
  document.querySelectorAll('.footer-socials').forEach(function(socials) {
    socials.innerHTML = socialMarkup;
  });

  // Inyección en el pie del panel del menú modal si no está presente
  document.querySelectorAll('.menu-panel__foot').forEach(function(foot) {
    if (!foot.querySelector('.menu-panel__socials')) {
      const socials = document.createElement('div');
      socials.className = 'menu-panel__socials';
      socials.setAttribute('aria-label', 'Redes sociales');
      socials.innerHTML = socialMarkup;
      foot.appendChild(socials);
    }
  });

}());

