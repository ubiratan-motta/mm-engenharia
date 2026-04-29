/**
 * MM Engenharia — Landing Page
 * Scroll reveal · Header glassmorphism · Mobile menu · Form submission
 */
(function () {
  'use strict';

  /* ── Scroll reveal ── */
  var reveals = Array.from(document.querySelectorAll('.rv,.rvl,.rvr'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('on'); });
  }
  setTimeout(function () {
    reveals.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('on');
    });
  }, 100);

  /* ── Header glassmorphism on scroll ── */
  var hdr = document.getElementById('hdr');
  if (hdr) {
    window.addEventListener('scroll', function () {
      hdr.classList.toggle('up', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── Mobile menu ── */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    var setNav = function (open) {
      nav.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      document.body.classList.toggle('nav-lock', open);
    };
    burger.addEventListener('click', function () {
      setNav(!nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) setNav(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && nav.classList.contains('open')) setNav(false);
    });
  }

  /* ── Form: lead submission ──
   * Encaminha para o WhatsApp da empresa enquanto o backend (Wix/Velo)
   * não está conectado. Quando integrar com Wix Forms ou um endpoint,
   * troque a função `submitLead` pela chamada apropriada.
   */
  var form = document.getElementById('lead-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = {
        nome:    (form.querySelector('#f-nome')    || {}).value || '',
        tel:     (form.querySelector('#f-tel')     || {}).value || '',
        email:   (form.querySelector('#f-email')   || {}).value || '',
        empresa: (form.querySelector('#f-empresa') || {}).value || '',
        produto: (form.querySelector('#f-produto') || {}).value || '',
        msg:     (form.querySelector('#f-msg')     || {}).value || ''
      };
      submitLead(data);
    });
  }

  function submitLead(data) {
    var lines = [
      'Olá! Quero solicitar uma demonstração.',
      '',
      'Nome: '     + data.nome,
      'WhatsApp: ' + data.tel,
      'E-mail: '   + data.email,
      'Empresa: '  + data.empresa,
      'Produto: '  + data.produto
    ];
    if (data.msg) {
      lines.push('', 'Mensagem:', data.msg);
    }
    var url = 'https://wa.me/5541998909345?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener,noreferrer');
  }
})();
