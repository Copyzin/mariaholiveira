/* ==========================================================================
   shader-gradient.js — campo ultra-borrado em deriva lenta (WebGL) para a
   seção de contato (CTA final). Inspirado no off.site: uma fundação vertical
   clara que aprofunda para o rosado embaixo, atravessada por massas enormes
   de blush/pink/red com falloff larguíssimo — o borrão vem da escala dos
   blobs, nunca de bordas visíveis. Registro claro: é o fecho da progressão
   cromática das camadas da logo (hero escura → vinho → vermelho → rosa → luz).

   - Dithering por hash para matar o banding típico de gradientes mega-suaves.
   - Respeita prefers-reduced-motion (renderiza um frame estático).
   - Pausa fora da viewport (IntersectionObserver) e com a aba oculta.
   - Degrada silenciosamente se WebGL não estiver disponível.
   ========================================================================== */
(function () {
  'use strict';

  window.MH = window.MH || {};

  var VERT = [
    'attribute vec2 a_pos;',
    'void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }'
  ].join('\n');

  var FRAG = [
    'precision mediump float;',
    'uniform vec2 u_res;',
    'uniform float u_time;',
    '',
    'vec3 LOTUS_WHITE = vec3(1.0, 0.973, 0.961);',   // #FFF8F5
    'vec3 LOTUS_BLUSH = vec3(0.988, 0.929, 0.933);',  // #FCEDEE
    'vec3 LOTUS_PINK  = vec3(0.922, 0.514, 0.620);',  // #EB839E
    'vec3 LOTUS_RED   = vec3(0.890, 0.239, 0.294);',  // #E33D4B
    '',
    '// Massa radial com falloff largo — o borrão vem da escala, não de blur',
    'float blob(vec2 p, vec2 c, float r) {',
    '  float d = length(p - c);',
    '  return smoothstep(r, 0.0, d);',
    '}',
    '',
    'float hash(vec2 p) {',
    '  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);',
    '}',
    '',
    'void main() {',
    '  vec2 uv = gl_FragCoord.xy / u_res;',
    '  float aspect = u_res.x / u_res.y;',
    '  vec2 p = vec2(uv.x * aspect, uv.y);',
    '  float t = u_time * 0.05;',
    '',
    '  // Fundação vertical: claro no topo, rosado profundo embaixo',
    '  float vgrad = smoothstep(1.05, -0.05, uv.y);',
    '  vec3 col = mix(LOTUS_WHITE, mix(LOTUS_BLUSH, LOTUS_PINK, 0.45), vgrad * 0.85);',
    '',
    '  // Massas enormes em deriva lenta (Lissajous de períodos dessincronizados)',
    '  vec2 c1 = vec2((0.22 + 0.16 * sin(t * 0.7)) * aspect,        0.78 + 0.10 * cos(t * 0.5));',
    '  vec2 c2 = vec2((0.85 + 0.18 * cos(t * 0.6 + 1.7)) * aspect,  0.42 + 0.14 * sin(t * 0.8 + 0.6));',
    '  vec2 c3 = vec2((0.55 + 0.22 * sin(t * 0.4 + 3.1)) * aspect,  0.06 + 0.10 * cos(t * 0.6 + 2.4));',
    '  vec2 c4 = vec2((0.45 + 0.20 * cos(t * 0.5 + 4.2)) * aspect,  0.60 + 0.12 * sin(t * 0.7 + 1.1));',
    '',
    '  col = mix(col, LOTUS_BLUSH, blob(p, c1, 0.85) * 0.80);',  // névoa blush no topo
    '  col = mix(col, LOTUS_PINK,  blob(p, c2, 0.75) * 0.45);',  // deriva rosa centro-direita
    '  col = mix(col, LOTUS_RED,   blob(p, c3, 0.70) * 0.30);',  // profundidade rosada embaixo
    '  col = mix(col, LOTUS_WHITE, blob(p, c4, 0.65) * 0.50);',  // luz atravessando pétalas
    '',
    '  // Dithering: mata o banding dos gradientes mega-borrados',
    '  col += (hash(gl_FragCoord.xy) - 0.5) * 0.014;',
    '',
    '  gl_FragColor = vec4(col, 1.0);',
    '}'
  ].join('\n');

  function compile(gl, type, src) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  MH.initShaderGradient = function () {
    var canvas = document.querySelector('[data-shader-gradient]');
    if (!canvas) return;

    var gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) { canvas.remove(); return; }

    var vs = compile(gl, gl.VERTEX_SHADER, VERT);
    var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { canvas.remove(); return; }

    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.remove(); return; }
    gl.useProgram(prog);

    // Triângulo fullscreen
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    var uRes = gl.getUniformLocation(prog, 'u_res');
    var uTime = gl.getUniformLocation(prog, 'u_time');

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      var w = Math.round(canvas.clientWidth * dpr);
      var h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    function draw(time) {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    // Movimento reduzido: um único frame estático
    if (MH.reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(0);
      window.addEventListener('resize', function () { draw(0); }, { passive: true });
      return;
    }

    var rafId = null;
    var start = null;

    function tick(now) {
      if (start === null) start = now;
      draw((now - start) / 1000);
      rafId = requestAnimationFrame(tick);
    }

    function play() { if (rafId === null) rafId = requestAnimationFrame(tick); }
    function pause() {
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    }

    // Só anima enquanto a seção estiver na viewport
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { play(); } else { pause(); }
        });
      }, { rootMargin: '80px' }).observe(canvas);
    } else {
      play();
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { pause(); } else { play(); }
    });
  };
})();
