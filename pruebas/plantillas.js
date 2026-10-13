/**
 * LÓGICA INTERACTIVA PARA EL LABORATORIO DE PLANTILLAS BPVDA
 * Implementa tabs interactivos, filtros de exploración y visor de código.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Manejo de Pestañas Interactivas (Plantilla 2)
  const tabNavItems = document.querySelectorAll(".tab-nav-item");
  const splitImg = document.getElementById("splitFeatureImg");
  const splitTitle = document.getElementById("splitFeatureTitle");
  const splitDesc = document.getElementById("splitFeatureDesc");
  const splitBadgeVal = document.getElementById("splitBadgeVal");
  const splitTags = document.getElementById("splitTags");

  if (tabNavItems.length && splitImg) {
    tabNavItems.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remover activo
        tabNavItems.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // Datos del tab
        const imgSrc = tab.dataset.img;
        const title = tab.dataset.title;
        const desc = tab.dataset.desc;
        const badge = tab.dataset.badge;
        const tags = tab.dataset.tags ? tab.dataset.tags.split(",") : [];

        // Transición suave
        splitImg.style.opacity = "0.2";
        setTimeout(() => {
          splitImg.src = imgSrc;
          splitImg.alt = title;
          if (splitTitle) splitTitle.textContent = title;
          if (splitDesc) splitDesc.textContent = desc;
          if (splitBadgeVal) splitBadgeVal.textContent = badge;

          if (splitTags) {
            splitTags.innerHTML = tags
              .map((tag) => `<span>${tag.trim()}</span>`)
              .join("");
          }

          splitImg.style.opacity = "1";
        }, 200);
      });
    });
  }

  // 2. Filtros de Galería / Campus Explorer (Plantilla 6)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const explorerCards = document.querySelectorAll(".explorer-card");

  if (filterBtns.length && explorerCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.filter;

        explorerCards.forEach((card) => {
          if (category === "all" || card.dataset.category === category) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // 3. Modal para Inspeccionar / Copiar Código
  const modalOverlay = document.getElementById("codeModalOverlay");
  const modalCloseBtn = document.getElementById("codeModalClose");
  const modalPre = document.getElementById("codeModalPre");
  const modalCopyBtn = document.getElementById("codeModalCopyBtn");
  const modalTitle = document.getElementById("codeModalTitle");
  const codeTriggerBtns = document.querySelectorAll(".btn-pill-code");

  if (modalOverlay && modalPre) {
    codeTriggerBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.targetSection;
        const sectionElem = document.getElementById(targetId);

        if (sectionElem) {
          const title = btn.dataset.title || "Código de Plantilla";
          modalTitle.textContent = `Código HTML: ${title}`;

          // Limpiar markup para mostrar HTML formateado
          const rawHtml = sectionElem.outerHTML;
          modalPre.textContent = rawHtml;
          modalOverlay.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });

    const closeModal = () => {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
      if (modalCopyBtn) modalCopyBtn.textContent = "Copiar Código";
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closeModal();
      }
    });

    if (modalCopyBtn) {
      modalCopyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(modalPre.textContent).then(() => {
          modalCopyBtn.textContent = "✓ ¡Código Copiado!";
          setTimeout(() => {
            modalCopyBtn.textContent = "Copiar Código";
          }, 2500);
        });
      });
    }
  }

  // 4. Smooth scroll para enlaces del laboratorio
  document.querySelectorAll(".lab-nav a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelectorAll(".lab-nav a").forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
});
