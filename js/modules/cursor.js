/* ==========================================================================
   cursor.js — cursor customizado (ref simonholm.studio).
   Uma única camada: anel vazado com mix-blend-mode: difference (CSS),
   segue o ponteiro com lerp suave e expande sobre interativos.
   Somente em dispositivos com hover/ponteiro fino.
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};

  MH.initCursor = function () {
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer || MH.reducedMotion) return;

    var ring = document.querySelector('.cursor-ring');
    if (!ring) return;

    var ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    var ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    var visible = false;

    window.addEventListener('pointermove', function (event) {
      if (!visible) {
        visible = true;
        gsap.to(ring, { opacity: 1, duration: 0.3 });
      }
      ringX(event.clientX);
      ringY(event.clientY);
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      visible = false;
      gsap.to(ring, { opacity: 0, duration: 0.3 });
    });

    var interactiveSelector = 'a, button, [data-cursor], iframe';
    document.addEventListener('pointerover', function (event) {
      if (event.target.closest(interactiveSelector)) {
        ring.classList.add('is-active');
      }
    }, { passive: true });

    document.addEventListener('pointerout', function (event) {
      if (event.target.closest(interactiveSelector)) {
        ring.classList.remove('is-active');
      }
    }, { passive: true });
  };
})();
