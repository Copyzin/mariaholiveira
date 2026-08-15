/* ==========================================================================
   reveal.js — fades de seção estilo off.site (opacity + leve translateY)
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};

  // Hero: revelada após a intro (ou no load) via classe .hero--in, que dispara
  // as animações CSS de entrada (eyebrow, palavras do título, sub, CTA) e o
  // desabrochar da lótus marca d'água.
  MH.revealHero = function () {
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('hero--in');

    var mark = document.getElementById('lotusMark');
    if (mark) {
      mark.classList.add('bloom');
      if (!MH.reducedMotion) {
        // quando a última pétala assenta, troca para o balanço contínuo
        setTimeout(function () { mark.classList.add('sway'); }, 1900);
      }
    }

    ScrollTrigger.refresh();
  };

  MH.initReveals = function () {
    var items = gsap.utils.toArray('[data-reveal]').filter(function (el) {
      return !el.closest('.hero');
    });

    if (MH.reducedMotion) {
      gsap.set(items, { autoAlpha: 1 });
      return;
    }

    gsap.set(items, { autoAlpha: 0, y: 28 });

    ScrollTrigger.batch(items, {
      start: 'top 88%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.09
        });
      }
    });

    // Segurança: se algo entrar na viewport antes do batch calcular
    ScrollTrigger.refresh();

    // Delight do CTA final: a lótus desabrocha uma única vez quando o
    // convite entra na viewport (em reduced-motion aparece já formada)
    var contactLotus = document.querySelector('.contact__lotus');
    if (contactLotus) {
      if (MH.reducedMotion) {
        contactLotus.classList.add('is-in');
      } else {
        ScrollTrigger.create({
          trigger: contactLotus,
          start: 'top 82%',
          once: true,
          onEnter: function () { contactLotus.classList.add('is-in'); }
        });
      }
    }
  };
})();
