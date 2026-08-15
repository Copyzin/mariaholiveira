/* ==========================================================================
   lotus-bloom.js — módulo reutilizável da animação da logo em layers.

   Uso:
     var lotus = MH.createLotusBloom(containerEl, {
       onBloomComplete: function () {},
       wind: true          // inicia o "vento" após a abertura (default: true)
     });
     lotus.bloom();        // abre a flor (retorna a timeline GSAP)
     lotus.startWind();    // balanço contínuo suave
     lotus.stopWind();     // para o balanço
     lotus.destroy();      // limpa tweens

   O container deve conter <img class="lotus__layer"> com data-depth:
   "center" | "mid-left" | "mid-right" | "outer-left" | "outer-right".
   Todas as layers compartilham o mesmo canvas (inset: 0), então o
   alinhamento é garantido por CSS.
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};

  // Quanto cada pétala "fecha" (rotação em direção ao centro) e quanto
  // o vento a balança depois de aberta. Pétalas externas fecham e
  // balançam mais — como numa flor real.
  var PETALS = {
    'center':       { closedRotation: 0,   closedScale: 0.5,  sway: 1.2 },
    'mid-left':     { closedRotation: 24,  closedScale: 0.62, sway: 2.2 },
    'mid-right':    { closedRotation: -24, closedScale: 0.62, sway: 2.2 },
    'outer-left':   { closedRotation: 42,  closedScale: 0.68, sway: 3.4 },
    'outer-right':  { closedRotation: -42, closedScale: 0.68, sway: 3.4 }
  };

  // Ordem de abertura: do centro para fora.
  var BLOOM_ORDER = ['center', 'mid-left', 'mid-right', 'outer-left', 'outer-right'];

  MH.createLotusBloom = function (container, options) {
    options = options || {};

    var layers = {};
    container.querySelectorAll('.lotus__layer').forEach(function (img) {
      var depth = img.getAttribute('data-depth') || 'center';
      layers[depth] = img;
      img.style.transformOrigin = '50% 88%'; // base das pétalas
    });

    var windTweens = [];

    function setClosed() {
      Object.keys(layers).forEach(function (depth) {
        var p = PETALS[depth];
        gsap.set(layers[depth], {
          rotation: p.closedRotation,
          scale: p.closedScale,
          autoAlpha: 0,
          transformOrigin: '50% 88%'
        });
      });
    }

    function bloom() {
      setClosed();
      var tl = gsap.timeline({
        defaults: { ease: 'elastic.out(1, 0.5)' },
        onComplete: function () {
          if (options.wind !== false) startWind();
          if (typeof options.onBloomComplete === 'function') {
            options.onBloomComplete();
          }
        }
      });

      BLOOM_ORDER.forEach(function (depth, i) {
        var img = layers[depth];
        if (!img) return;
        tl.to(img, {
          rotation: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.7
        }, i * 0.16);
      });

      return tl;
    }

    function startWind() {
      stopWind();
      Object.keys(layers).forEach(function (depth, i) {
        var p = PETALS[depth];
        windTweens.push(
          gsap.to(layers[depth], {
            rotation: p.sway * (i % 2 === 0 ? 1 : -1),
            duration: 2.6 + i * 0.35,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: i * 0.3
          })
        );
      });
    }

    function stopWind() {
      windTweens.forEach(function (t) { t.kill(); });
      windTweens = [];
      Object.keys(layers).forEach(function (depth) {
        gsap.to(layers[depth], { rotation: 0, duration: 0.6, ease: 'sine.out' });
      });
    }

    function destroy() {
      stopWind();
      Object.keys(layers).forEach(function (depth) {
        gsap.killTweensOf(layers[depth]);
      });
    }

    setClosed();

    return {
      bloom: bloom,
      startWind: startWind,
      stopWind: stopWind,
      destroy: destroy,
      layers: layers
    };
  };
})();
