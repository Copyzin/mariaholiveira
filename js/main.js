/* ==========================================================================
   main.js — boot e orquestração dos módulos
   ========================================================================== */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // Header: backdrop blur ao rolar
    var header = document.getElementById('site-header');
    function onScrollHeader() {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();

    // Módulos independentes
    MH.initSmoothScroll();
    MH.initMenu();
    MH.initCursor();
    MH.initHeroShader();
    MH.initShaderGradient();
    MH.initReveals();
    MH.initScrollHighlight();

    // Intro (primeira visita) → depois revela o hero
    MH.initIntro(function () {
      MH.revealHero();
    });

    // Ano do rodapé
    var year = document.getElementById('footer-year');
    if (year) year.textContent = String(new Date().getFullYear());

    // Recalcular triggers quando imagens/fontes terminarem de carregar
    window.addEventListener('load', function () {
      ScrollTrigger.refresh();
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  });
})();
