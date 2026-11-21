/* Ipertesto v2, prova: motore della pagina.
 * Legge dati/book.json (in produzione: la risposta JSON dell'applicazione che rilegge il Doc),
 * disegna l'accoglienza o un capitolo, e vi innesta lo strato editoriale (strato.js). */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var BOOK, DOVE = {}, scena = $('#scena');
  var LETTI_K = 'cm2-letti', STILE_K = 'cm2-stile';
  var NOTE = false;      // Raffaele, 2026-11-21: «non fare apparire le note». Restano nei dati.
  function senzaNote(h) { return NOTE ? h : h.replace(/<sup class="nota"[^>]*>.*?<\/sup>/g, ''); }

  /* Avanzamento per capitolo (0-1, il punto più lontano raggiunto): mai aperto, cominciato, letto. */
  var AV_K = 'cm2-avanzamento';
  function avanz() { try { return JSON.parse(localStorage.getItem(AV_K)) || {}; } catch (e) { return {}; } }
  function statoDi(q) { return q >= 0.9 ? 2 : (q > 0 ? 1 : 0); }
  function statoCls(id) { var x = statoDi(avanz()[id] || 0); return x === 2 ? ' letto' : (x === 1 ? ' aperto' : ''); }
  function segna(id, q) {
    var a = avanz(), prima = a[id] || 0;
    q = Math.round(q * 100) / 100;
    if (q <= prima) return;
    a[id] = q;
    try { localStorage.setItem(AV_K, JSON.stringify(a)); } catch (e) {}
    if (statoDi(q) !== statoDi(prima)) {
      disegnaMini();
      var v = $('#albero .al-cap.qui');
      if (v) { v.classList.remove('aperto', 'letto'); v.classList.add(statoCls(id).trim()); }
    }
  }
  var SEGNO = '<i class="segno" aria-hidden="true"></i>';

  /* Testo nudo, per ritrovare le àncore dello strato qualunque sia la tipografia del Doc. */
  function nudo(h) {
    return h.replace(/<sup class="nota"[^>]*>.*?<\/sup>/g, '').replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/[’‘]/g, "'").replace(/[   ]/g, ' ').replace(/\s+/g, ' ').toLowerCase();
  }

  /* ───────── Plan ───────── */
  function indicizza() {
    BOOK.plan.forEach(function (v) {
      if (v.tipo === 'solo') { DOVE[v.id] = { parte: null, sezione: null }; return; }
      v.sezioni.forEach(function (s) {
        s.capitoli.forEach(function (id) { DOVE[id] = { parte: v, sezione: s }; });
      });
    });
  }
  function cap(id) { return BOOK.capitoli[id]; }
  /* Le schede fuori dalle parti portano il loro nome: «Introduction», «Conclusion» (dall'etichetta del Plan). */
  function nomeDi(id) {
    var v = BOOK.plan.filter(function (x) { return x.tipo === 'solo' && x.id === id; })[0];
    var m = v && /^(Introduction|Conclusion)/i.exec(v.etichetta || '');
    return m ? m[1] : '';
  }
  function conNome(id) { var n = nomeDi(id); return (n ? '<span class="nome">' + n + '</span> ' : '') + cap(id).titolo; }
  function due(n) { return (n < 10 ? '0' : '') + n; }

  /* Tempo di lettura di una sezione: la somma dei suoi capitoli (Raffaele, 21/11: «scrivi il tempo di lettura dei
   * nove sottocapitoli che appaiono subito in home»). */
  function minutiDi(sez) { return sez.capitoli.reduce(function (t, id) { return t + (cap(id) ? cap(id).minuti : 0); }, 0); }
  function planHtml(corrente) {
    var h = '';
    function riga(id, cls) {
      var c = cap(id); if (!c) return '';
      var stato = (id === corrente ? ' qui' : '') + statoCls(id);
      return '<a class="' + cls + stato + '" href="#/' + id + '">' +
        '<span class="pn">' + (c.num || '') + '</span>' +
        '<span class="pt">' + conNome(id) + '</span>' +
        (c.chapo ? '<span class="pc">' + c.chapo + '</span>' : '') +
        '<span class="pm">' + c.minuti + ' min ' + SEGNO + '</span></a>';
    }
    BOOK.plan.forEach(function (v) {
      if (v.tipo === 'solo') { h += '<div class="plan-solo">' + riga(v.id, 'plan-voce solo') + '</div>'; return; }
      // il titolo della parte porta al suo primo capitolo leggibile (Raffaele, 21/11)
      var primoCap = null;
      v.sezioni.forEach(function (z) { z.capitoli.forEach(function (q) { if (!primoCap && cap(q)) primoCap = q; }); });
      h += '<section class="plan-parte"><header><span class="romano">' + v.num + '</span><h3>' +
        (primoCap ? '<a href="#/' + primoCap + '">' + v.titolo + '</a>' : v.titolo) + '</h3></header>';
      v.sezioni.forEach(function (s) {
        // sezioni chiuse, da aprire con un clic; aperta soltanto quella del capitolo corrente
        h += '<details class="plan-sezione"' + (s.capitoli.indexOf(corrente) >= 0 ? ' open' : '') + '><summary><h4>' + s.titolo + '</h4><span class="sez-min">' + minutiDi(s) + ' min</span></summary>';
        s.capitoli.forEach(function (id) { h += riga(id, 'plan-voce'); });
        h += '</details>';
      });
      h += '</section>';
    });
    return '<nav class="plan">' + h + '</nav>';
  }

  /* La griglia dei 27: tre parti, tre sezioni, tre capitoli. È il segno della casa. */
  function grigliaHtml(corrente) {
    var h = '';
    function cella(id) {
      var c = cap(id); if (!c) return '<i></i>';
      return '<a href="#/' + id + '" title="' + (c.num ? c.num + '. ' : '') + c.titolo.replace(/"/g, '&quot;') + '" class="' +
        (id === corrente ? 'qui' : '') + statoCls(id) + '"></a>';
    }
    BOOK.plan.forEach(function (v) {
      if (v.tipo === 'solo') { h += '<span class="g-solo">' + cella(v.id) + '</span>'; return; }
      h += '<span class="g-parte">';
      v.sezioni.forEach(function (s) { s.capitoli.forEach(function (id) { h += cella(id); }); });
      h += '</span>';
    });
    return h;
  }
  /* Il menu ad albero: parti chiuse, tranne quella del capitolo aperto; sotto il capitolo, i suoi titoletti. */
  function alberoHtml(id) {
    var h = '';
    function voce(cid) {
      var c = cap(cid); if (!c) return '';
      var qui = cid === id;
      var x = '<a class="al-cap' + (qui ? ' qui' : '') + statoCls(cid) + '" href="#/' + cid + '">' +
        (c.num ? '<b>' + due(c.num) + '</b>' : '') + '<span>' + conNome(cid) + '</span>' + SEGNO + '</a>';
      if (qui) {
        var sez = c.blocchi.filter(function (b) { return b.t === 'h2'; });
        if (sez.length) x += '<ol class="al-h2">' + sez.map(function (b) {
          return '<li><a href="#s-' + b.id + '" data-s="s-' + b.id + '">' + b.h + '</a></li>'; }).join('') + '</ol>';
      }
      return x;
    }
    BOOK.plan.forEach(function (v) {
      if (v.tipo === 'solo') { h += '<div class="al-solo">' + voce(v.id) + '</div>'; return; }
      var dentro = v.sezioni.some(function (s) { return s.capitoli.indexOf(id) >= 0; });
      h += '<details class="al-parte"' + (dentro ? ' open' : '') + '><summary><i>' + v.num + '</i><span>' + v.titolo + '</span></summary><div class="al-rami">';
      v.sezioni.forEach(function (s) {
        h += '<div class="al-sez"><span class="al-sez-t">' + s.titolo + '</span>';
        s.capitoli.forEach(function (cid) { h += voce(cid); });
        h += '</div>';
      });
      h += '</div></details>';
    });
    h += '<p class="al-legenda"><span><i class="segno"></i> à lire</span><span><i class="segno aperto"></i> commencé</span><span><i class="segno letto"></i> lu</span></p>';
    return '<nav class="albero" id="albero" aria-label="Sommaire">' + h + '</nav>';
  }
  var corrente = null;
  function disegnaMini() { $('#mini').innerHTML = grigliaHtml(corrente); }

  /* ───────── Accoglienza ───────── */
  /* Titolo cinetico: ogni lettera è un elemento, animato dal CSS con un ritardo a onda (--i). Le parole restano intere a capo. */
  function lettere(t, da) {
    var i = da || 0;
    return t.split(' ').map(function (p) {
      var h = p.split('').map(function (c) { return '<span class="l" aria-hidden="true" style="--i:' + (i++) + '">' + c + '</span>'; }).join('');
      i++;
      return '<span class="parola">' + h + '</span>';
    }).join(' ');
  }

  /* Niente copia del testo: selezione spenta dal CSS, qui si fermano copia, taglio, menu contestuale e trascinamento. */
  ['copy', 'cut', 'contextmenu', 'dragstart', 'selectstart'].forEach(function (ev) {
    document.addEventListener(ev, function (e) {
      if (e.target && e.target.closest && e.target.closest('input')) return;
      e.preventDefault();
    });
  });

  /* La nota sull'autore (Raffaele, 21/11: «aggiungi vicino al nome dell'autore un link Bio»): il testo è quello
   * che Raffaele ha scritto in fondo alla scheda d'accoglienza del Doc, dopo «***». */
  function bio() {
    corrente = null;
    document.title = 'Raffaele Alberto Ventura — ' + BOOK.titolo;
    scena.innerHTML = '<article class="capitolo bio"><header class="testata griglia"><div class="testata-dentro">' +
      '<p class="sopra">L’auteur</p><h1>Raffaele Alberto Ventura</h1></div></header>' +
      '<div class="corpo griglia">' + BOOK.bio.map(function (h) { return '<p>' + h + '</p>'; }).join('') +
      '<p><a class="bottone" href="#/">Retour au sommaire</a></p></div></article>';
    $('#barra-capitolo').textContent = '';
    window.scrollTo(0, 0);
    aggiornaScorrimento();
  }

  function accoglienza() {
    corrente = null;
    document.title = BOOK.titolo;
    var primo = BOOK.ordine[0];
    scena.innerHTML =
      '<section class="copertina griglia"><div class="copertina-dentro">' +
        // illustrazione in alto a destra, un poco coperta dal titolo; se il file manca, sparisce da sola
        '<img class="copertina-img" src="img/home.png?v=1" alt="" onerror="this.remove()">' +
        '<p class="sopra">Raffaele Alberto Ventura' + (BOOK.bio && BOOK.bio.length ? ' <a class="bio-link" href="#/bio">Bio</a>' : '') + '</p>' +
        // bandella (dritta, fra virgolette) davanti all'illustrazione: testo dato da Raffaele il 21/11 (frasi della scheda d'accoglienza)
        '<p class="bandella">«\u00a0Les représentations de soi ne sont pas des caprices que l’on pourrait ajuster. Profondément enracinées, elles sont le produit de causes sociales et culturelles. Aujourd’hui, la jeunesse se révolte. Pouvait-elle réagir autrement\u00a0? La crise n’est pas seulement économique, elle est existentielle.\u00a0»</p>' +
        '<h1 aria-label="La classe malaisée">' + lettere('La classe', 0) + ' <em>' + lettere('malaisée', 9) + '</em></h1>' +
        '<p class="sottotitolo" aria-label="Socio-philosophie du déclassement">' + lettere('Socio-philosophie du déclassement', 0) + '</p>' +
        '<div class="copertina-griglia">' + grigliaHtml(null) + '</div>' +
        '<a class="bottone" href="#/' + primo + '">Commencer la lecture</a>' +
      '</div></section>' +
      '<section class="griglia"><div class="plan-largo">' + planHtml(null) + '</div></section>';
    $('#barra-capitolo').textContent = '';
    disegnaMini();
    window.scrollTo(0, 0);
    aggiornaScorrimento();
  }

  /* ───────── Capitolo ───────── */
  function capitolo(id) {
    var c = cap(id);
    if (!c) return accoglienza();
    corrente = id;
    segna(id, 0.01);
    document.title = c.titolo + ' · ' + BOOK.titolo;
    var d = DOVE[id] || {}, i = BOOK.ordine.indexOf(id);
    var sopra = d.parte ? 'Partie ' + d.parte.num + ' · ' + d.sezione.titolo : (nomeDi(id) || BOOK.titolo);

    var h = '<header class="testata griglia"><div class="testata-dentro">' +
      (c.num ? '<span class="testata-num" aria-hidden="true">' + due(c.num) + '</span>' : '') +
      '<p class="sopra">' + sopra + '</p>' +
      '<h1>' + c.titolo + '</h1>' +
      (c.chapo ? '<p class="chapo">' + c.chapo + '</p>' : '') +
      '<p class="meta">' + c.minuti + ' min de lecture' + (NOTE && c.note.length ? ' · ' + c.note.length + ' notes' : '') + '</p>' +
      '</div></header>';

    // glossario: una scheda in cui ogni blocco è una voce che comincia con il termine in grassetto
    var glossario = c.blocchi.length > 3 && c.blocchi.every(function (x) { return x.t === 'p' && /^\s*<strong>/.test(x.h); });
    h += '<article class="capitolo griglia' + (glossario ? ' glossario' : '') + '" id="articolo">';
    var aperta = false, primoP = true, nSez = 0;
    c.blocchi.forEach(function (b0, k) {
      var b = Object.assign({}, b0, { h: senzaNote(b0.h || '') });
      if (b.t !== 'li' && aperta) { h += '</ul>'; aperta = false; }
      if (b.t === 'h2') { nSez++; h += '<h2 id="s-' + b.id + '" data-b="' + k + '"><span class="h2-n">' + due(nSez) + '</span>' + b.h + '</h2>'; }
      else if (b.t === 'quote') h += '<blockquote data-b="' + k + '">' + b.h + '</blockquote>';
      else if (b.t === 'hr') h += '<hr data-b="' + k + '">';
      else if (b.t === 'li') { if (!aperta) { h += '<ul>'; aperta = true; } h += '<li data-b="' + k + '" style="--l:' + (b.l || 0) + '">' + b.h + '</li>'; }
      else { h += '<p data-b="' + k + '"' + (primoP && /^[A-Za-zÀ-ÿ]/.test(b.h) ? ' class="attacco"' : '') + '>' + b.h + '</p>'; primoP = false; }
    });
    if (aperta) h += '</ul>';
    h += '</article>';

    var succ = BOOK.ordine[i + 1], prec = BOOK.ordine[i - 1];
    h += '<footer class="coda griglia"><div class="coda-dentro">';
    if (succ) {
      var s = cap(succ), ds = DOVE[succ] || {};
      h += '<a class="seguito" href="#/' + succ + '"><span class="sopra">À suivre' + (ds.sezione ? ' · ' + ds.sezione.titolo : (nomeDi(succ) ? ' · ' + nomeDi(succ) : '')) + '</span>' +
        (s.num ? '<span class="seguito-num">' + due(s.num) + '</span>' : '') +
        '<span class="seguito-titolo">' + s.titolo + '</span>' + (s.chapo ? '<span class="seguito-chapo">' + s.chapo + '</span>' : '') + '</a>';
    }
    h += '<p class="coda-link">' + (prec ? '<a href="#/' + prec + '">← ' + cap(prec).titolo + '</a>' : '') +
      '<a href="#/">Tout le sommaire</a></p></div></footer>';

    h += alberoHtml(id);

    scena.innerHTML = h;
    $('#barra-capitolo').textContent = (c.num ? c.num + '. ' : (nomeDi(id) ? nomeDi(id) + '. ' : '')) + c.titolo;
    innestaStrato(c);
    if (NOTE) note(c);
    osservaEntrate();
    disegnaMini();
    window.scrollTo(0, 0);
    aggiornaScorrimento();
  }

  /* Lo strato: ogni voce trova il blocco che contiene la sua àncora; se non lo trova, non compare. */
  function innestaStrato(c) {
    var k0 = c.num || nomeDi(c.id).toLowerCase();
    var voci = (window.STRATO || {})[k0] || (window.STRATO_AUTO || {})[k0] || [];
    var testi = c.blocchi.map(function (b) { return nudo(b.h || ''); });
    var tutto = testi.join(' ');
    voci.forEach(function (v) {
      if (v.tipo === 'apertura') { var a0 = window.GRAFICI.apertura(v), art = $('#articolo'); art.insertBefore(a0, art.firstChild); return; }
      var ancora = nudo(v.dopo || v.testo || '');
      var k = -1;
      testi.forEach(function (t, i) { if (k < 0 && t.indexOf(ancora) >= 0) k = i; });
      var mancano = (v.richiede || []).filter(function (r) { return tutto.indexOf(nudo(r)) < 0; });
      if (k < 0 || mancano.length || !window.GRAFICI[v.tipo]) {
        console.warn('strato: voce non agganciata', v.tipo, k < 0 ? 'àncora assente' : mancano);
        return;
      }
      var blocco = $('[data-b="' + k + '"]', scena), nodo = window.GRAFICI[v.tipo](v);
      if (v.prima) blocco.parentNode.insertBefore(nodo, blocco);
      else blocco.parentNode.insertBefore(nodo, blocco.nextSibling);
    });
  }

  /* Note: a margine quando c'è posto, altrimenti si aprono sotto il paragrafo al tocco. */
  var largo = window.matchMedia('(min-width: 1100px)');
  function note(c) {
    var art = $('#articolo');
    $$('sup.nota', art).forEach(function (s) {
      var n = +s.dataset.n, testo = c.note[n - 1] || '';
      s.setAttribute('role', 'button'); s.setAttribute('tabindex', '0');
      var a = document.createElement('aside');
      a.className = 'margine'; a.id = 'nota-' + n;
      a.innerHTML = '<b>' + n + '</b> ' + testo;
      art.appendChild(a);
      function apri() {
        if (largo.matches) { a.classList.add('accesa'); setTimeout(function () { a.classList.remove('accesa'); }, 1600); return; }
        var b = s.closest('[data-b]'), gia = b.nextElementSibling;
        if (gia && gia.classList.contains('nota-aperta') && gia.dataset.n == n) { gia.remove(); return; }
        if (gia && gia.classList.contains('nota-aperta')) gia.remove();
        var d = document.createElement('aside');
        d.className = 'nota-aperta'; d.dataset.n = n; d.innerHTML = '<b>' + n + '</b> ' + testo;
        b.parentNode.insertBefore(d, b.nextSibling);
      }
      s.addEventListener('click', apri);
      s.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); apri(); } });
    });
    disponiNote();
  }
  function disponiNote() {
    var art = $('#articolo'); if (!art || !largo.matches) return;
    var base = art.getBoundingClientRect().top, fondo = 0;
    $$('sup.nota', art).forEach(function (s) {
      var a = $('#nota-' + s.dataset.n, art); if (!a) return;
      var y = Math.max(s.getBoundingClientRect().top - base - 4, fondo);
      a.style.top = y + 'px';
      fondo = y + a.offsetHeight + 14;
    });
  }

  function osservaEntrate() {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('visto'); oss.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -15% 0px' });
    $$('.entra', scena).forEach(function (e) { oss.observe(e); });
  }

  /* ───────── Scorrimento: avanzamento, titolo nella barra, sezione corrente ───────── */
  var inAttesa = false;
  function aggiornaScorrimento() {
    inAttesa = false;
    var alto = document.documentElement.scrollHeight - window.innerHeight;
    var q = alto > 0 ? Math.min(1, window.scrollY / alto) : 0;
    $('#avanzamento').style.transform = 'scaleX(' + (corrente ? q : 0) + ')';
    var testata = $('.testata');
    document.body.classList.toggle('dentro', !!testata && window.scrollY > testata.offsetHeight - 60);
    if (corrente && $('#articolo')) segna(corrente, Math.max(q, 0.01));
    var qui = null;
    $$('#articolo h2').forEach(function (h) { if (h.getBoundingClientRect().top < window.innerHeight * 0.4) qui = h.id; });
    $$('#albero .al-h2 a').forEach(function (a) { a.classList.toggle('qui', a.dataset.s === qui); });
  }
  window.addEventListener('scroll', function () { if (!inAttesa) { inAttesa = true; requestAnimationFrame(aggiornaScorrimento); } }, { passive: true });
  window.addEventListener('resize', function () { disponiNote(); aggiornaScorrimento(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(disponiNote);

  /* ───────── Rotte ───────── */
  function rotta() {
    chiudiSommario();
    var m = location.hash.match(/^#\/(t\.[a-z0-9]+)/);
    if (m) capitolo(m[1]);
    else if (location.hash === '#/bio' && BOOK.bio && BOOK.bio.length) bio();
    else if (/^#s-/.test(location.hash)) { var e = document.getElementById(location.hash.slice(1)); if (e) e.scrollIntoView({ behavior: 'smooth' }); }
    else accoglienza();
  }
  window.addEventListener('hashchange', rotta);
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#s-"]');
    if (a) { e.preventDefault(); var t = document.getElementById(a.getAttribute('href').slice(1)); if (t) t.scrollIntoView({ behavior: 'smooth' }); }
  });

  /* ───────── Sommario a tutto schermo ───────── */
  function apriSommario() { $('#velo-dentro').innerHTML = planHtml(corrente); $('#velo').hidden = false; document.body.classList.add('velato'); }
  function chiudiSommario() { $('#velo').hidden = true; document.body.classList.remove('velato'); }
  $('#apri-sommario').addEventListener('click', apriSommario);
  $('#chiudi-sommario').addEventListener('click', chiudiSommario);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') chiudiSommario(); });

  /* ───────── Scelta dello stile (solo per le prove) ───────── */
  function stile(s) {
    // D = la struttura di B sul fondo scuro di C
    document.documentElement.dataset.stile = s === 'd' ? 'b' : s;
    if (s === 'd') document.documentElement.dataset.fondo = 'nero'; else delete document.documentElement.dataset.fondo;
    try { localStorage.setItem(STILE_K, s); } catch (e) {}
    $$('#prova button').forEach(function (b) { b.classList.toggle('scelto', b.dataset.s === s); });
    setTimeout(disponiNote, 60);
  }
  if ($('#prova')) $('#prova').addEventListener('click', function (e) { if (e.target.dataset.s) stile(e.target.dataset.s); });   // in produzione il selettore non c'è
  var daUrl = new URLSearchParams(location.search).get('stile'), salvato = null;
  try { salvato = localStorage.getItem(STILE_K); } catch (e) {}
  stile(daUrl || salvato || 'd');

  /* ───────── Avvio ───────── */
  fetch('dati/book.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (b) {
    BOOK = b; indicizza(); rotta(); dalVivo();
  }).catch(function (e) {
    scena.innerHTML = '<p class="attesa">Le texte n’a pas pu être chargé. (' + e.message + ')</p>';
  });

  /* Il testo dal vivo: la pagina parte subito dalla fotografia (dati/book.json), poi chiede all'applicazione
   * Apps Script (Libro.gs) il libro riletto dal Doc. Se arriva ed è diverso, sostituisce il testo; il capitolo
   * aperto si ridisegna soltanto se il lettore è ancora in cima alla pagina, per non spostargli il testo sotto
   * gli occhi. Se l'applicazione non risponde, o non risponde un libro, resta la fotografia. */
  function dalVivo() {
    var u = window.LIBRO_URL;
    if (!u) return;
    fetch(u, { redirect: 'follow' }).then(function (r) { return r.json(); }).then(function (b) {
      if (!b || !b.ordine || !b.ordine.length || !b.capitoli || !b.plan) return;
      var stesso = function (x) { return JSON.stringify([x.plan, x.ordine, x.capitoli]); };
      if (stesso(b) === stesso(BOOK)) return;
      BOOK = b; DOVE = {}; indicizza();
      if (window.scrollY < 200) rotta();
    }).catch(function () {});
  }
})();
