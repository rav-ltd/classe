/* Componenti grafici della v2. Ogni funzione riceve la voce dello strato e restituisce un elemento DOM.
 * Niente librerie: SVG e CSS, colori presi dalle variabili dello stile. */
(function () {
  'use strict';
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  var SVG = 'http://www.w3.org/2000/svg';
  function T(s) { var d = window.INTERFACCIA; return (d && d[s]) || s; }   // scritte dell'interfaccia (versione cinese)
  var riduci = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 100 punti, un pannello fisso e dei passi che scorrono (scrollytelling). */
  function scrollyPunti(v) {
    var s = el('section', 'largo scrolly');
    var fisso = el('div', 'scrolly-fisso');
    var quadro = el('div', 'scrolly-quadro');
    quadro.appendChild(el('p', 'fig-titolo', v.titolo));
    var svg = document.createElementNS(SVG, 'svg');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.setAttribute('class', 'punti');
    svg.setAttribute('role', 'img');
    var punti = [];
    for (var i = 0; i < 100; i++) {
      var c = document.createElementNS(SVG, 'circle');
      c.setAttribute('cx', 10 + (i % 10) * 20);
      c.setAttribute('cy', 10 + Math.floor(i / 10) * 20);
      c.setAttribute('r', 7);
      c.style.transitionDelay = (riduci ? 0 : i * 6) + 'ms';
      svg.appendChild(c);
      punti.push(c);
    }
    quadro.appendChild(svg);
    var cifra = el('div', 'scrolly-cifra', '<b></b><span>' + T('sur 100') + '</span><em>' + v.legenda + '</em><small></small>');
    quadro.appendChild(cifra);
    fisso.appendChild(quadro);
    s.appendChild(fisso);
    var passi = el('div', 'scrolly-passi');
    v.passi.forEach(function (p, k) {
      var d = el('div', 'passo', '<div class="passo-carta"><span class="passo-dove">' + p.dove + '</span><p>' + p.testo + '</p></div>');
      d.dataset.k = k;
      passi.appendChild(d);
    });
    passi.appendChild(el('p', 'fig-fonte', v.fonte));
    s.appendChild(passi);

    function mostra(k) {
      var p = v.passi[k];
      punti.forEach(function (c, i) { c.classList.toggle('pieno', i < p.n); });
      cifra.querySelector('b').textContent = p.cifra;
      cifra.querySelector('b').classList.toggle('lunga', String(p.cifra).length > 4 || /[^\d.,≈ %+~-]/.test(p.cifra));   // «deux tiers», 二分之一: più piccola
      cifra.querySelector('small').textContent = p.dove;
      [].forEach.call(passi.querySelectorAll('.passo'), function (d) { d.classList.toggle('attivo', +d.dataset.k === k); });
    }
    svg.setAttribute('aria-label', v.passi.map(function (p) { return p.dove + ' : ' + p.cifra + ' ' + T('sur 100'); }).join(' ; '));
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (x) { if (x.isIntersecting) mostra(+x.target.dataset.k); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    [].forEach.call(passi.querySelectorAll('.passo'), function (d) { oss.observe(d); });
    mostra(0);
    return s;
  }

  /* Due o più barre orizzontali che si riempiono quando entrano nello schermo. */
  function barre(v) {
    var f = el('figure', 'fig barre entra');
    f.appendChild(el('figcaption', 'fig-titolo', v.titolo));
    v.righe.forEach(function (r) {
      var riga = el('div', 'barra-riga',
        '<span class="barra-et">' + r.etichetta + '</span>' +
        '<span class="barra-pista"><i style="--v:' + r.v + '%"></i></span>' +
        '<b class="barra-val">' + String(r.v).replace('.', ',') + ' %</b>');
      f.appendChild(riga);
    });
    f.appendChild(el('p', 'fig-fonte', v.fonte));
    return f;
  }

  /* Interattivo: più persone hanno il titolo, meno il titolo distingue. */
  function segno(v) {
    var N = 60;
    var f = el('figure', 'fig fig-segno entra');   // non «segno»: è la classe del pallino letto/non letto (bug del 21/11)
    f.appendChild(el('figcaption', 'fig-titolo', v.titolo));
    var folla = el('div', 'folla');
    var teste = [];
    // ordine fisso ma sparso, perché i titolati non riempiano la folla da sinistra a destra
    var ordine = [];
    for (var i = 0; i < N; i++) ordine.push((i * 37) % N);
    for (i = 0; i < N; i++) { var t = el('i'); folla.appendChild(t); teste.push(t); }
    f.appendChild(folla);
    var comandi = el('label', 'segno-cursore',
      '<span>' + v.cursore + ' : <b class="segno-quota"></b></span><input type="range" min="2" max="100" value="5" step="1">');
    f.appendChild(comandi);
    var misure = el('div', 'segno-misure',
      '<div><span>' + v.usage + '<em>' + v.usageNota + '</em></span><span class="pista"><i class="m-usage"></i></span></div>' +
      '<div><span>' + v.signe + '<em>' + v.signeNota + '</em></span><span class="pista"><i class="m-signe"></i></span></div>');
    f.appendChild(misure);
    f.appendChild(el('p', 'fig-fonte', v.nota));
    var input = comandi.querySelector('input');
    function aggiorna() {
      var q = +input.value, quanti = Math.round(q / 100 * N);
      ordine.forEach(function (pos, rango) { teste[pos].classList.toggle('titolato', rango < quanti); });
      comandi.querySelector('.segno-quota').textContent = q + ' %';
      misure.querySelector('.m-usage').style.width = '100%';
      misure.querySelector('.m-signe').style.width = (100 - q) + '%';
      f.style.setProperty('--distinzione', (1 - q / 100).toFixed(2));
      input.style.setProperty('--q', q + '%');
    }
    input.addEventListener('input', aggiorna);
    aggiorna();
    return f;
  }

  function esergo(v) {
    var t = v.testo.charAt(0).toUpperCase() + v.testo.slice(1);
    if (!/[.?!…]$/.test(t)) t += '.';
    return el('aside', 'esergo entra' + (v.grande ? ' grande' : ''), '<p>' + t + '</p>');
  }

  /* Illustrazione d'apertura del capitolo (img/<nome>.png, generata da illustra.py). */
  function apertura(v) {
    var f = el('figure', 'apertura entra');
    var i = document.createElement('img');
    i.src = (window.RADICE || '') + 'img/' + v.img + '.png'; i.alt = v.alt || ''; i.loading = 'lazy'; i.width = 1200; i.height = 800;
    f.appendChild(i);
    return f;
  }

  /* Linea del tempo: date e fatti presi dal capitolo. */
  function cronologia(v) {
    var f = el('figure', 'fig cronologia entra');
    f.appendChild(el('figcaption', 'fig-titolo', v.titolo));
    var ol = el('ol', 'crono');
    v.tappe.forEach(function (t) { ol.appendChild(el('li', '', '<b>' + t.anno + '</b><span>' + t.testo + '</span>')); });
    f.appendChild(ol);
    f.appendChild(el('p', 'fig-fonte', v.fonte || T('Dates citées dans le chapitre.')));
    return f;
  }

  /* Una cifra del capitolo in grande, con la sua didascalia. */
  function cifra(v) {
    var f = el('figure', 'fig cifra entra' + (String(v.valore).length > 9 ? ' lunga' : ''));   // le cifre lunghe vanno a capo
    f.appendChild(el('b', 'cifra-valore', v.valore));
    f.appendChild(el('figcaption', 'cifra-et', v.etichetta));
    return f;
  }

  /* ───── Interattivi, uno per capitolo (Raffaele, 21/11: «prova a metterne una per capitolo»; proposte in interattivi/) ───── */

  /* Cursore a tappe: il lettore trascina (o clicca una tappa) e vede il meccanismo svolgersi. */
  function passi(v) {
    var f = el('figure', 'fig int-passi entra');
    f.appendChild(el('figcaption', 'fig-titolo', v.titolo));
    var tappe = el('ol', 'int-tappe');
    v.passi.forEach(function (p, i) {
      var b = el('li', '', '<button type="button">' + p.etichetta + '</button>');
      b.firstChild.addEventListener('click', function () { vai(i); });
      tappe.appendChild(b);
    });
    f.appendChild(tappe);
    var input = el('input'); input.type = 'range'; input.min = 0; input.max = v.passi.length - 1; input.step = 1; input.value = 0;
    input.className = 'int-cursore'; input.setAttribute('aria-label', v.titolo);
    f.appendChild(input);
    var scheda = el('div', 'int-scheda', '<b class="int-valore"></b><p class="int-testo"></p>');
    f.appendChild(scheda);
    f.appendChild(el('p', 'fig-fonte', v.fonte || ''));
    function vai(i) {
      input.value = i;
      [].forEach.call(tappe.children, function (li, k) { li.classList.toggle('qui', k === i); li.classList.toggle('passata', k < i); });
      scheda.querySelector('.int-valore').innerHTML = v.passi[i].valore + (v.unita ? ' <small>' + v.unita + '</small>' : '');
      scheda.querySelector('.int-testo').innerHTML = v.passi[i].testo;
      scheda.classList.remove('cambia'); void scheda.offsetWidth; scheda.classList.add('cambia');
      input.style.setProperty('--q', (v.passi.length > 1 ? i / (v.passi.length - 1) * 100 : 0) + '%');
    }
    input.addEventListener('input', function () { vai(+input.value); });
    vai(0);
    return f;
  }

  /* Indovina: il lettore sceglie una risposta, poi si svela la cifra del capitolo. */
  function indovina(v) {
    var f = el('figure', 'fig int-indovina entra');
    f.appendChild(el('figcaption', 'fig-titolo', v.titolo));
    f.appendChild(el('p', 'int-domanda', v.domanda));
    var scelte = el('div', 'int-opzioni');
    var spiega = el('p', 'int-spiegazione', v.spiegazione); spiega.hidden = true;
    v.opzioni.forEach(function (o, i) {
      var b = el('button', '', o); b.type = 'button';
      b.addEventListener('click', function () {
        [].forEach.call(scelte.children, function (x, k) {
          x.disabled = true; x.classList.toggle('giusta', k === v.giusta); x.classList.toggle('sbagliata', k === i && i !== v.giusta);
        });
        f.classList.add('svelato'); spiega.hidden = false;
      });
      scelte.appendChild(b);
    });
    f.appendChild(scelte); f.appendChild(spiega);
    f.appendChild(el('p', 'fig-fonte', v.fonte || ''));
    return f;
  }

  /* Confronta: due o tre situazioni; il lettore passa dall'una all'altra e le barre si spostano. */
  function confronta(v) {
    var f = el('figure', 'fig int-confronta entra');
    f.appendChild(el('figcaption', 'fig-titolo', v.titolo));
    var bottoni = el('div', 'int-stati');
    var righe = el('div', 'int-righe');
    var max = 0;
    v.stati.forEach(function (s) { s.righe.forEach(function (r) { max = Math.max(max, Math.abs(r.v)); }); });
    v.stati[0].righe.forEach(function (r) {
      righe.appendChild(el('div', 'barra-riga', '<span class="barra-et">' + r.etichetta + '</span>' +
        '<span class="barra-pista"><i></i></span><b class="barra-val"></b>'));
    });
    function mostra(k) {
      [].forEach.call(bottoni.children, function (b, i) { b.classList.toggle('qui', i === k); b.setAttribute('aria-pressed', i === k); });
      v.stati[k].righe.forEach(function (r, i) {
        var riga = righe.children[i]; if (!riga) return;
        riga.querySelector('i').style.width = (max ? Math.abs(r.v) / max * 100 : 0) + '%';
        riga.querySelector('.barra-val').textContent = String(r.v).replace('.', ',') + (v.unita ? ' ' + v.unita : '');
      });
    }
    v.stati.forEach(function (s, k) {
      var b = el('button', '', s.nome); b.type = 'button';
      b.addEventListener('click', function () { mostra(k); });
      bottoni.appendChild(b);
    });
    f.appendChild(bottoni); f.appendChild(righe);
    f.appendChild(el('p', 'fig-fonte', v.fonte || ''));
    mostra(0);
    return f;
  }

  window.GRAFICI = { passi: passi, indovina: indovina, confronta: confronta, punti: function (v) { return scrollyPunti(v); }, cifra: cifra, apertura: apertura, cronologia: cronologia, 'scrolly-punti': scrollyPunti, barre: barre, segno: segno, esergo: esergo };
})();
