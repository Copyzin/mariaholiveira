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
    var lastX = 0, lastY = 0, lastMove = 0;
    var prevX = 0, prevY = 0;

    // Sobre o mapa interativo (iframe do Google Maps) o cursor customizado
    // some: dentro de um iframe cross-origin a página não recebe NENHUM
    // evento de ponteiro (nem :hover no elemento), então o anel ficaria
    // congelado na borda. Solução: vigilância periódica — se o ponteiro
    // parou de emitir eventos enquanto se movia EM DIREÇÃO à área do mapa,
    // ele entrou no iframe. A direção importa: sem ela, o anel sumiria de
    // quem apenas estaciona o cursor perto do mapa.
    var mapFrame = document.querySelector('.location__media iframe');
    var overMap = false;

    function distToRect(x, y, r) {
      var dx = Math.max(r.left - x, 0, x - r.right);
      var dy = Math.max(r.top - y, 0, y - r.bottom);
      return Math.sqrt(dx * dx + dy * dy);
    }

    window.addEventListener('pointermove', function (event) {
      prevX = lastX;
      prevY = lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      lastMove = performance.now();
      overMap = false;
      if (!visible) {
        visible = true;
        gsap.to(ring, { opacity: 1, duration: 0.3 });
      }
      ringX(event.clientX);
      ringY(event.clientY);
    }, { passive: true });

    if (mapFrame) {
      setInterval(function () {
        if (overMap || !visible) return;
        var r = mapFrame.getBoundingClientRect();
        var dLast = distToRect(lastX, lastY, r);
        var dPrev = distToRect(prevX, prevY, r);
        var headingToMap = dLast < dPrev && dLast <= 64;
        var goneSilent = performance.now() - lastMove > 120;
        if (headingToMap && goneSilent) {
          overMap = true;
          visible = false;
          ring.classList.remove('is-active');
          gsap.to(ring, { opacity: 0, duration: 0.3 });
        }
      }, 120);
    }

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
