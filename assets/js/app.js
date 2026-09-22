/* ============================================================
   Gemmed — maquette front
   Aucune donnée n'est envoyée : le calendrier et les
   disponibilités sont simulés côté navigateur.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. Traductions
     --------------------------------------------------------- */
  const I18N = {
    en: {
      'nav.studio': 'The studio', 'nav.gallery': 'Gallery', 'nav.pricing': 'Pricing',
      'nav.faq': 'FAQ', 'nav.book': 'Book',

      'hero.eyebrow': 'Montreal · Est. 2026',
      'hero.tag': 'Tooth gem studio',
      'hero.lede': 'Hand-set crystals on your smile. Painless, no drilling, fully reversible.',
      'hero.book': 'Book an appointment', 'hero.prices': 'See pricing', 'hero.scroll': 'Scroll',

      'mq.1': 'Painless', 'mq.2': '100% reversible', 'mq.3': 'By appointment',

      'studio.eyebrow': 'The studio',
      'studio.title.a': 'A tiny detail,', 'studio.title.b': 'a huge effect.',
      'studio.p1': 'Gemmed is a Montreal studio devoted to tooth jewellery. Every crystal is picked with you, then bonded to the enamel with professional dental adhesive — the same one used for orthodontic brackets.',
      'studio.p2': 'No drill, no filing, no alteration of the tooth. Placement takes about fifteen minutes, doesn’t hurt, and comes off as easily as it goes on.',
      'studio.f1': 'average session', 'studio.f2': 'typical wear', 'studio.f3': 'enamel altered',

      'process.eyebrow': 'How it works',
      'process.title.a': 'Four steps,', 'process.title.b': 'zero stress.',
      'process.s1.t': 'We choose',
      'process.s1.p': 'Shape, size, colour, placement. We try, step back, check it in the light. Nothing is bonded until you are sure.',
      'process.s2.t': 'We prep',
      'process.s2.p': 'The tooth is cleaned, isolated and dried. It’s the only technical step — and the one that decides how long it lasts.',
      'process.s3.t': 'We place',
      'process.s3.p': 'A drop of dental adhesive, the crystal, then the curing light. A few seconds and it’s set.',
      'process.s4.t': 'You shine',
      'process.s4.p': 'You leave with your smile, the aftercare card, and a sudden urge to smile a lot more often.',

      'gallery.eyebrow': 'Gallery',
      'gallery.title.a': 'Smiles', 'gallery.title.b': 'signed Gemmed.',
      'gallery.note': 'Click an image to enlarge.',

      'pricing.eyebrow': 'Pricing',
      'pricing.title.a': 'Simple:', 'pricing.title.b': 'by the gem.',
      'pricing.sub': 'Prices in Canadian dollars, taxes extra. Crystals, placement and aftercare card included.',
      'price.1.t': '1 gem', 'price.2.t': '2 gems', 'price.3.t': '3 gems', 'price.4.t': '4 gems',
      'price.1.d': 'The classic. A single crystal, set where the light catches it.',
      'price.2.d': 'Perfect symmetry, one on each side. The most requested option.',
      'price.3.d': 'A little constellation. We map the placement together.',
      'price.4.d': 'The fully gemmed smile. Guaranteed to show up on camera.',
      'price.cta': 'Book', 'price.popular': 'Most chosen',
      'pricing.foot': 'More than 4 gems, a custom design, or removal of an existing gem? Message us and we’ll quote you.',

      'booking.eyebrow': 'Booking',
      'booking.title.a': 'Pick your', 'booking.title.b': 'moment.',
      'bk.s1': '1 — Your service', 'bk.s1b': '2 — Your date', 'bk.s1c': '3 — Your time',
      'bk.closed': 'Studio closed on Sundays and Mondays.',
      'bk.pickdate': 'Pick a date first.',
      'bk.next': 'Continue', 'bk.back': 'Back', 'bk.confirm': 'Confirm appointment',
      'bk.s2': '4 — Your details',
      'bk.name': 'Full name', 'bk.phone': 'Phone', 'bk.email': 'Email',
      'bk.notes': 'Anything specific in mind? (optional)',
      'bk.legal': 'No online payment. Your appointment is confirmed by message.',
      'bk.done.t': 'You’re booked!',
      'bk.done.n': 'You’ll get a confirmation by message. See you very soon at the studio.',
      'bk.again': 'Book another appointment',

      'quotes.eyebrow': 'What they say',
      'q1.t': '“I was a bit nervous and honestly you feel nothing at all. Three weeks later my gem hasn’t moved a millimetre.”',
      'q2.t': '“Gorgeous studio, and they take the time to find the right placement. I left with two crystals and a silly grin.”',
      'q3.t': '“Everyone asks me where I got them done. Best 80 bucks I’ve spent on myself this year.”',
      'q1.c': '· Rosemont', 'q2.c': '· Plateau', 'q3.c': '· Mile End',

      'faq.eyebrow': 'FAQ',
      'faq.title.a': 'The questions', 'faq.title.b': 'we get asked.',
      'faq.sub': 'Another question? Message us on Instagram, we reply fast.',
      'faq.q1': 'Does it damage the tooth?',
      'faq.a1': 'No. The crystal is bonded onto the enamel with dental adhesive — no drilling, no sanding. Once removed, a simple polish returns the tooth to its original state.',
      'faq.q2': 'Does it hurt?',
      'faq.a2': 'Not at all. Nothing penetrates the tooth, there is no heat and no pressure. The only sensation is the cheek retractor for a few minutes.',
      'faq.q3': 'How long does it last?',
      'faq.a3': 'Between 6 and 12 months on average, often longer. It depends on your hygiene, your diet and the spot you choose.',
      'faq.q4': 'What if my gem falls off?',
      'faq.a4': 'If it comes off within 14 days of placement, we replace it free of charge. After that, a re-bond is half price.',
      'faq.q5': 'Can I eat and brush normally?',
      'faq.a5': 'Yes. Just avoid biting straight into very hard food with that tooth, and brush gently around the crystal.',
      'faq.q6': 'What’s the minimum age?',
      'faq.a6': '16, with parental consent for minors. Teeth must be healthy and free of untreated cavities.',

      'band.t': 'A smile gets noticed.', 'band.cta': 'Book now',

      'foot.tag': 'Tooth gem studio · Montreal · Est. 2026',
      'foot.visit': 'The studio', 'foot.byappt': 'By appointment only',
      'foot.hours': 'Hours', 'foot.h1': 'Tuesday – Friday', 'foot.h2': 'Saturday',
      'foot.contact': 'Contact',
      'foot.mock': 'Presentation mock-up — content and availability are fictional.'
    }
  };

  /* Mémorise les textes français d'origine pour pouvoir revenir en arrière */
  const FR = {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    FR[el.dataset.i18n] = el.innerHTML;
  });

  let lang = 'fr';

  function money(value) {
    return lang === 'fr' ? value + ' $' : '$' + value;
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = next;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.dataset.i18n;
      const txt = next === 'fr' ? FR[key] : (I18N.en[key] !== undefined ? I18N.en[key] : FR[key]);
      if (txt !== undefined) el.innerHTML = txt;
    });

    document.querySelectorAll('[data-price]').forEach(function (el) {
      el.textContent = money(el.dataset.price);
    });

    document.querySelectorAll('.lang__btn').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === next);
    });

    document.title = next === 'fr'
      ? 'Gemmed — Tooth Gem Studio · Montréal'
      : 'Gemmed — Tooth Gem Studio · Montreal';

    renderCalendar();
    renderSlots();
    renderRecap();
  }

  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });

  /* ---------------------------------------------------------
     2. Chrome : loader, nav, menu, reveal, lightbox
     --------------------------------------------------------- */
  window.addEventListener('load', function () {
    setTimeout(function () { document.getElementById('loader').classList.add('is-out'); }, 420);
  });

  const nav = document.getElementById('nav');
  const hero = document.querySelector('.hero');

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('is-stuck', y > 40);
    nav.classList.toggle('is-top', y < hero.offsetHeight - 90);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  burger.addEventListener('click', function () {
    const open = drawer.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      drawer.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px' });
  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
    io.observe(el);
  });

  const lb = document.getElementById('lb');
  const lbImg = document.getElementById('lbImg');
  document.querySelectorAll('.tile').forEach(function (t) {
    t.addEventListener('click', function () {
      lbImg.src = t.dataset.full;
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
  function closeLb() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.getElementById('lbClose').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     3. Réservation (simulation front)
     --------------------------------------------------------- */
  const PRICES = { 1: 40, 2: 60, 3: 80, 4: 100 };

  const state = { service: null, date: null, time: null };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let cursor = new Date(today.getFullYear(), today.getMonth(), 1);

  const calMonth = document.getElementById('calMonth');
  const calGrid = document.getElementById('calGrid');
  const calDows = document.getElementById('calDows');
  const calPrev = document.getElementById('calPrev');
  const calNext = document.getElementById('calNext');
  const slotsEl = document.getElementById('slots');
  const nextBtn = document.getElementById('toStep2');

  const locale = function () { return lang === 'fr' ? 'fr-CA' : 'en-CA'; };

  /* Studio fermé dimanche (0) et lundi (1) */
  function isOpen(d) { const w = d.getDay(); return w !== 0 && w !== 1; }

  /* Pseudo-aléatoire stable : mêmes créneaux pris à chaque rechargement */
  function seed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0) / 4294967295;
  }

  function key(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function slotsFor(d) {
    const sat = d.getDay() === 6;
    const start = sat ? 10 : 11;
    const end = sat ? 16.5 : 18.5;
    const out = [];
    for (let t = start; t <= end; t += 0.75) out.push(t);
    return out;
  }

  function fmtTime(t) {
    const h = Math.floor(t);
    const m = Math.round((t - h) * 60);
    if (lang === 'fr') return h + ' h' + (m ? ' ' + String(m).padStart(2, '0') : '');
    const ap = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + ':' + String(m).padStart(2, '0') + ' ' + ap;
  }

  function fmtDate(d) {
    return d.toLocaleDateString(locale(), { weekday: 'long', day: 'numeric', month: 'long' });
  }

  function renderCalendar() {
    const dows = lang === 'fr'
      ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    calDows.innerHTML = dows.map(function (d) { return '<span>' + d + '</span>'; }).join('');

    const label = cursor.toLocaleDateString(locale(), { month: 'long', year: 'numeric' });
    calMonth.textContent = label;

    calPrev.disabled = cursor.getFullYear() === today.getFullYear() && cursor.getMonth() === today.getMonth();

    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const pad = (first.getDay() + 6) % 7; /* lundi en première colonne */
    const days = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();

    let html = '';
    for (let i = 0; i < pad; i++) html += '<span class="day day--pad"></span>';

    for (let n = 1; n <= days; n++) {
      const d = new Date(cursor.getFullYear(), cursor.getMonth(), n);
      const past = d < today;
      const free = !past && isOpen(d);
      const sel = state.date && key(state.date) === key(d);
      html += '<button type="button" class="day ' + (free ? 'day--free' : 'day--off') +
        (sel ? ' is-sel' : '') + '" data-day="' + n + '"' + (free ? '' : ' disabled') + '>' + n + '</button>';
    }
    calGrid.innerHTML = html;

    calGrid.querySelectorAll('.day--free').forEach(function (b) {
      b.addEventListener('click', function () {
        state.date = new Date(cursor.getFullYear(), cursor.getMonth(), +b.dataset.day);
        state.time = null;
        renderCalendar();
        renderSlots();
        syncNext();
      });
    });
  }

  function renderSlots() {
    if (!state.date) {
      slotsEl.innerHTML = '<p class="slots__empty">' +
        (lang === 'fr' ? FR['bk.pickdate'] : I18N.en['bk.pickdate']) + '</p>';
      return;
    }
    const k = key(state.date);
    slotsEl.innerHTML = slotsFor(state.date).map(function (t) {
      const taken = seed(k + '|' + t) < 0.32;
      const sel = state.time === t;
      return '<button type="button" class="slot' + (taken ? ' is-taken' : '') + (sel ? ' is-sel' : '') +
        '" data-t="' + t + '"' + (taken ? ' disabled' : '') + '>' + fmtTime(t) + '</button>';
    }).join('');

    slotsEl.querySelectorAll('.slot:not(.is-taken)').forEach(function (b) {
      b.addEventListener('click', function () {
        state.time = parseFloat(b.dataset.t);
        renderSlots();
        syncNext();
      });
    });
  }

  function syncNext() {
    nextBtn.disabled = !(state.service && state.date && state.time !== null);
  }

  calPrev.addEventListener('click', function () {
    cursor = new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1);
    renderCalendar();
  });
  calNext.addEventListener('click', function () {
    cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
    renderCalendar();
  });

  document.querySelectorAll('.bk-service').forEach(function (b) {
    b.addEventListener('click', function () {
      state.service = +b.dataset.service;
      document.querySelectorAll('.bk-service').forEach(function (x) {
        x.classList.toggle('is-sel', x === b);
      });
      syncNext();
    });
  });

  /* Les boutons « Réserver » des cartes de tarifs présélectionnent la prestation */
  document.querySelectorAll('[data-book]').forEach(function (b) {
    b.addEventListener('click', function () {
      const s = document.querySelector('.bk-service[data-service="' + b.dataset.book + '"]');
      if (s) s.click();
      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* --- étapes --- */
  function goStep(n) {
    document.querySelectorAll('.bk-step').forEach(function (s) {
      s.classList.toggle('is-active', +s.dataset.step === n);
    });
    document.querySelectorAll('[data-step-dot]').forEach(function (d) {
      d.classList.toggle('is-on', +d.dataset.stepDot <= n);
    });
    document.querySelector('.booking__box').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderRecap() {
    const recap = document.getElementById('recap');
    if (!recap || !state.service || !state.date || state.time === null) { if (recap) recap.innerHTML = ''; return; }
    const L = lang === 'fr'
      ? { s: 'Prestation', d: 'Date', h: 'Heure', t: 'Total' }
      : { s: 'Service', d: 'Date', h: 'Time', t: 'Total' };
    const gemLabel = lang === 'fr'
      ? state.service + (state.service > 1 ? ' gems' : ' gem')
      : state.service + (state.service > 1 ? ' gems' : ' gem');
    recap.innerHTML =
      '<dl>' +
      '<dt>' + L.s + '</dt><dd>' + gemLabel + '</dd>' +
      '<dt>' + L.d + '</dt><dd>' + fmtDate(state.date) + '</dd>' +
      '<dt>' + L.h + '</dt><dd>' + fmtTime(state.time) + '</dd>' +
      '<dt class="tot">' + L.t + '</dt><dd class="tot">' + money(PRICES[state.service]) + '</dd>' +
      '</dl>';
  }

  document.getElementById('toStep2').addEventListener('click', function () {
    renderRecap();
    goStep(2);
  });
  document.getElementById('backStep1').addEventListener('click', function () { goStep(1); });

  document.getElementById('confirmBtn').addEventListener('click', function () {
    const name = document.getElementById('fName');
    const phone = document.getElementById('fPhone');
    const email = document.getElementById('fEmail');
    let ok = true;

    [name, phone, email].forEach(function (f) {
      const bad = !f.value.trim() || (f === email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
      f.classList.toggle('is-bad', bad);
      if (bad) ok = false;
    });
    if (!ok) { name.focus(); return; }

    const line = lang === 'fr'
      ? 'Rendez-vous pour ' + state.service + (state.service > 1 ? ' gems' : ' gem') +
        ' le ' + fmtDate(state.date) + ' à ' + fmtTime(state.time) + '.'
      : 'Appointment for ' + state.service + (state.service > 1 ? ' gems' : ' gem') +
        ' on ' + fmtDate(state.date) + ' at ' + fmtTime(state.time) + '.';
    document.getElementById('doneLine').textContent = line;

    const ref = 'GEM-' + key(state.date).replace(/-/g, '').slice(2) + '-' +
      String(Math.floor(seed(name.value + key(state.date)) * 900 + 100));
    document.getElementById('doneRef').textContent = (lang === 'fr' ? 'Référence ' : 'Reference ') + ref;

    goStep(3);
  });

  document.getElementById('restartBtn').addEventListener('click', function () {
    state.service = null; state.date = null; state.time = null;
    document.querySelectorAll('.bk-service').forEach(function (x) { x.classList.remove('is-sel'); });
    ['fName', 'fPhone', 'fEmail', 'fNotes'].forEach(function (id) {
      const f = document.getElementById(id); f.value = ''; f.classList.remove('is-bad');
    });
    renderCalendar(); renderSlots(); syncNext();
    goStep(1);
  });

  /* ---------------------------------------------------------
     4. Démarrage
     --------------------------------------------------------- */
  renderCalendar();
  renderSlots();
  syncNext();
  applyLang('fr');
})();
