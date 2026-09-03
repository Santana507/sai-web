/* Interacciones compartidas del sitio estático BPVDA. */
(function () {
  'use strict';

  // Eliminar clase fallback
  document.documentElement.classList.remove('no-js');

  // Elementos principales del DOM
  const menuButton = document.querySelector('[data-menu-button]');
  const menuPanel = document.querySelector('[data-menu-panel]');
  const header = document.querySelector('.site-header');
  const backToTopButton = document.querySelector('.back-to-top');

  // --- Funciones del Menú y Focus Trap ---
  function getFocusableElements(container) {
    return Array.from(container.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter(function(el) {
      return !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden') && el.offsetParent !== null;
    });
  }

  function setMenu(open) {
    if (!menuButton || !menuPanel) return;
    
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    
    menuPanel.classList.toggle('is-open', open);
    menuPanel.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-is-open', open);
    
    // Gestión del Focus (Focus Trap)
    if (open) {
      const focusable = getFocusableElements(menuPanel);
      if (focusable.length > 0) focusable[0].focus();
    } else {
      menuButton.focus();
    }
  }

  if (menuButton && menuPanel) {
    menuButton.addEventListener('click', function () {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    menuPanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuPanel.classList.contains('is-open')) {
        setMenu(false);
      }
      
      // Control de teclado dentro del menú (Tab / Shift+Tab)
      if (event.key === 'Tab' && menuPanel.classList.contains('is-open')) {
        const focusableElements = getFocusableElements(menuPanel);
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    });
  }

  // --- Scroll Header, Modo Libre y Back to Top ---
  const heroSlider = document.querySelector('[data-slider]');

  function onScroll() {
    const scrollY = window.scrollY;
    
    // En index: se activa al pasar la mitad del slider horizontal
    // En las demás páginas: se activa apenas baja un poco (> 40px)
    let triggerDistance = 40;
    if (heroSlider) {
      triggerDistance = Math.max(Math.round(heroSlider.offsetHeight * 0.55), 260);
    }

    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 20);
      header.classList.toggle('is-scrolled-free', scrollY > triggerDistance);
    }
    if (backToTopButton) {
      backToTopButton.classList.toggle('is-visible', scrollY > 600);
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Hero Slider ---
  const slider = document.querySelector('[data-slider]');
  
  // Corregido: envolver en un if para evitar early return en subpáginas
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

    function schedule() {
      window.clearTimeout(timer);
      if (paused) return;
      timer = window.setTimeout(function () { move(1); }, active === 0 ? 10000 : 7000);
    }

    function render() {
      track.style.transform = 'translateX(-' + (active * 100) + '%)';
      slides.forEach(function (slide, index) {
        const isActive = index === active;
        slide.setAttribute('aria-hidden', String(!isActive));
        slide.querySelectorAll('a, button').forEach(function (element) {
          element.tabIndex = isActive ? 0 : -1;
        });
        const video = slide.querySelector('video');
        if (video) {
          if (isActive) video.play().catch(function () {});
          else video.pause();
        }
      });
      if (currentLabel) currentLabel.textContent = String(active + 1).padStart(2, '0');
      if (totalLabel) totalLabel.textContent = String(slides.length).padStart(2, '0');
      if (progress) progress.style.width = (((active + 1) / slides.length) * 100) + '%';
      schedule();
    }

    function move(direction) {
      active = (active + direction + slides.length) % slides.length;
      render();
    }

    const prevBtn = slider.querySelector('[data-prev]');
    const nextBtn = slider.querySelector('[data-next]');
    
    if (prevBtn) prevBtn.addEventListener('click', function () { move(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { move(1); });
    
    if (pauseButton) {
      pauseButton.addEventListener('click', function () {
        paused = !paused;
        pauseButton.textContent = paused ? '▶' : 'Ⅱ';
        pauseButton.setAttribute('aria-label', paused ? 'Reanudar historias' : 'Pausar historias');
        schedule();
      });
    }

    // Soporte para gestos táctiles (Swipe)
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
      // Umbral de 50px para el swipe
      if (distance > 50) {
        move(1); // Izquierda
      } else if (distance < -50) {
        move(-1); // Derecha
      }
    });

    render();
  }

  // --- Animaciones de Aparición (Scroll Reveal) ---
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    // Observador para elementos individuales
    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function(el) {
      revealObserver.observe(el);
    });

    // Observador para contenedores con efecto escalonado (stagger)
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

  // --- Smooth Scroll para Anclajes (#) ---
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

}());
