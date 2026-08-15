/* ==========================================================================
   menu.js — hamburger → X + overlay full-screen com stagger (ref jam.dev)
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};

  MH.initMenu = function () {
    var toggle = document.querySelector('[data-menu-toggle]');
    var overlay = document.getElementById('menu-overlay');
    if (!toggle || !overlay) return;

    var links = overlay.querySelectorAll('[data-menu-link]');
    var footerBlocks = overlay.querySelectorAll('.menu-overlay__footer > div');
    var isOpen = false;

    var openTl = gsap.timeline({ paused: true });
    openTl
      .set(overlay, { visibility: 'visible', pointerEvents: 'auto' })
      .to(overlay, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 0)
      .fromTo(links,
        { y: 56, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', stagger: 0.07 },
        0.12)
      .fromTo(footerBlocks,
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 },
        0.35);

    function open() {
      isOpen = true;
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      overlay.classList.add('is-open');
      MH.scrollLock(true);
      openTl.timeScale(1).play();
    }

    function close() {
      isOpen = false;
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      MH.scrollLock(false);
      openTl.timeScale(1.6).reverse().eventCallback('onReverseComplete', function () {
        overlay.classList.remove('is-open');
        gsap.set(overlay, { visibility: 'hidden', pointerEvents: 'none' });
      });
    }

    toggle.addEventListener('click', function () {
      isOpen ? close() : open();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen) close();
    });

    // Fechar ao clicar num link — o smooth-scroll cuida do deslocamento
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        close();
      });
    });
  };
})();
