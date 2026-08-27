/* Esporte em Rota — scroll reveal + animated counters (progressive, reduced-motion aware) */
(function () {
  function count(el) {
    if (el.__erc) return; el.__erc = 1;
    var raw = el.getAttribute('data-count');
    var target = parseFloat(raw) || 0, dur = 1500, t0 = performance.now();
    var decs = raw.indexOf('.') >= 0 ? raw.split('.')[1].length : 0;
    var pre = el.getAttribute('data-prefix') || '', suf = el.getAttribute('data-suffix') || '';
    function fmt(n) {
      var s = decs ? n.toFixed(decs).replace('.', ',') : Math.round(n).toLocaleString('pt-BR');
      return pre + s + suf;
    }
    function step(t) {
      var p = Math.min(1, (t - t0) / dur); p = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function fx() {
    var rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) {
      document.querySelectorAll('[data-reveal]').forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target; if (el.__ers) return; el.__ers = 1;
        el.style.animationDelay = (el.getAttribute('data-delay') || '0') + 'ms';
        el.style.animation = 'erReveal .72s var(--ease-out) forwards';
        io.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
    var io2 = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { count(e.target); io2.unobserve(e.target); } });
    }, { threshold: 0.35 });
    document.querySelectorAll('[data-count]').forEach(function (el) { io2.observe(el); });
  }
  // Expose; pages call ER.fx() from componentDidMount (with retry until loaded).
  window.ER = { fx: fx };
})();
