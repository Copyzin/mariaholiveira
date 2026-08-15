/* ==========================================================================
   intro.js — overlay de entrada com o bloom da logo.
   Toda visita: toca o bloom + vento + reveal do hero.
   prefers-reduced-motion: intro removida, hero revelado direto.
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};

  MH.initIntro = function (onDone) {
    var intro = document.getElementById('intro');
    if (!intro) {
      onDone();
      return;
    }

    if (MH.reducedMotion) {
      intro.remove();
      onDone();
      return;
    }

    intro.setAttribute('aria-hidden', 'false');
    MH.scrollLock(true);

    var finished = false;
    var lotus = MH.createLotusBloom(intro.querySelector('[data-lotus]'));
    var name = intro.querySelector('.intro__name');
    var role = intro.querySelector('.intro__role');
    var skipBtn = intro.querySelector('[data-intro-skip]');

    gsap.set([name, role], { autoAlpha: 0, y: 18 });
    gsap.set(skipBtn, { autoAlpha: 0 });

    var tl = gsap.timeline();

    // Flor abre
    tl.add(lotus.bloom(), 0.15);

    // Nome e credencial sobem suavemente enquanto a flor assenta
    tl.to(name, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 1.0);
    tl.to(role, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 1.25);
    tl.to(skipBtn, { autoAlpha: 0.55, duration: 0.5, ease: 'power2.out' }, 1.6);

    // Respiro com a flor aberta ao vento, depois saída
    tl.add(finish, '+=1.1');

    function finish() {
      if (finished) return;
      finished = true;

      var out = gsap.timeline({
        onComplete: function () {
          lotus.destroy();
          intro.remove();
          MH.scrollLock(false);
          onDone();
        }
      });

      out.to([name, role, skipBtn], {
        autoAlpha: 0,
        y: -16,
        duration: 0.45,
        ease: 'power2.in',
        stagger: 0.05
      }, 0);

      // A flor inteira flutua para cima como levada pelo vento
      out.to(intro.querySelector('[data-lotus]'), {
        y: -60,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power2.in'
      }, 0.1);

      out.to(intro, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut'
      }, 0.45);
    }

    skipBtn.addEventListener('click', function () {
      tl.kill();
      finish();
    });

    document.addEventListener('keydown', function onEsc(event) {
      if (event.key === 'Escape') {
        document.removeEventListener('keydown', onEsc);
        tl.kill();
        finish();
      }
    });
  };
})();
