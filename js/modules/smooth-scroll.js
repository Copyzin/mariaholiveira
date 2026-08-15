/* ==========================================================================
   smooth-scroll.js — Lenis + integração com GSAP ticker/ScrollTrigger
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};
  MH.lenis = null;

  MH.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  MH.initSmoothScroll = function () {
    if (MH.reducedMotion || typeof Lenis === 'undefined') {
      return null;
    }

    var lenis = new Lenis({
      duration: 1.15,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      smoothWheel: true,
      touchMultiplier: 1.4
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    MH.lenis = lenis;

    // Âncoras suaves via Lenis
    document.addEventListener('click', function (event) {
      var anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      var id = anchor.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -20, duration: 1.4 });
    });

    return lenis;
  };

  MH.scrollLock = function (lock) {
    if (MH.lenis) {
      lock ? MH.lenis.stop() : MH.lenis.start();
    }
    document.documentElement.style.overflow = lock ? 'hidden' : '';
  };
})();
