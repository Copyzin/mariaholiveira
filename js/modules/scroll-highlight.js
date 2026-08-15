/* ==========================================================================
   scroll-highlight.js — port vanilla do Originkit scroll-text-highlight
   (components/originkit/ui/scroll-text-highlight.tsx) para GSAP + ScrollTrigger.

   Fiel ao componente original: cada palavra transiciona de COR (dimColor →
   highlightColor) conforme o scroll, com stagger de 0.1 e janela
   "top center" → "bottom center". A palavra de acento (.script-accent)
   recebe seu próprio par de cores (vinho night), preservando a identidade.
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};

  var WORD_STAGGER = 0.1; // WORD_STAGGER do componente originkit

  // Filosofia sobre rosa pálido #F5D7D8: texto espresso, acento night
  var DIM = 'rgba(62, 39, 35, 0.16)';
  var HIGHLIGHT = '#3E2723';
  var ACCENT_DIM = 'rgba(46, 14, 16, 0.22)';
  var ACCENT_HIGHLIGHT = '#2E0E10';

  function isAccent(target) {
    return target.classList.contains('script-accent');
  }

  function dimColor(index, target) { return isAccent(target) ? ACCENT_DIM : DIM; }
  function highlightColor(index, target) { return isAccent(target) ? ACCENT_HIGHLIGHT : HIGHLIGHT; }

  function splitWords(el) {
    var nodes = Array.from(el.childNodes);
    nodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        var fragment = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            fragment.appendChild(document.createTextNode(' '));
          } else {
            var span = document.createElement('span');
            span.className = 'word';
            span.textContent = part;
            fragment.appendChild(span);
          }
        });
        el.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Elementos de acento (ex.: .script-accent) também participam do highlight
        node.classList.add('word');
      }
    });
    return el.querySelectorAll('.word');
  }

  MH.initScrollHighlight = function () {
    var blocks = document.querySelectorAll('[data-scroll-highlight]');
    if (!blocks.length) return;

    blocks.forEach(function (el) {
      var words = splitWords(el);

      if (MH.reducedMotion) {
        gsap.set(words, { color: highlightColor });
        return;
      }

      gsap.set(words, { color: dimColor });

      gsap.to(words, {
        color: highlightColor,
        ease: 'none',
        stagger: WORD_STAGGER,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });
    });
  };
})();
