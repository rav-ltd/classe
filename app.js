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

  /* Lingua (Raffaele, 21/11: «fai un clone in cinese di tutto il sito … dalla home si può scegliere di attivare la
   * versione cinese»). La pagina zh/index.html dichiara window.LINGUA = 'zh', window.RADICE = '../' (immagini e codice
   * stanno nella cartella del sito francese) e window.INTERFACCIA, il dizionario delle scritte (zh/interfaccia.js).
   * T() traduce una scritta dell'interfaccia; senza dizionario la lascia in francese. */
  var ZH = window.LINGUA === 'zh', RADICE = window.RADICE || '';
  function T(s) { var d = window.INTERFACCIA; return (d && d[s]) || s; }
  var ALTRA = ZH ? '<a class="lingua-link" href="../" lang="fr">Français</a>'
                 : '<a class="lingua-link" href="zh/" lang="zh-Hans">中文</a>';

  /* Testo nudo, per ritrovare le àncore dello strato qualunque sia la tipografia del Doc. */
  function nudo(h) {
    return h.replace(/<sup class="nota"[^>]*>.*?<\/sup>/g, '').replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/[’‘]/g, "'").replace(/[   ]/g, ' ').replace(/\s+/g, ' ').toLowerCase();
  }

  /* ───────── Plan ───────── */
  // La frase introduttiva (testo di Raffaele, 21/11): sta nel testo a destra della home (in cinese tradotta da T()).
  // Non fa più da riassunto dell'Introduzione (Raffaele, 21/11: «togli la frase dal riassunto dell'intro»).
  var INTRO_CHAPO = 'Les représentations de soi ne sont pas des caprices que l’on pourrait ajuster. Profondément enracinées, elles sont le produit de causes sociales et culturelles. Aujourd’hui, la jeunesse se révolte. Pouvait-elle réagir autrement? La crise n’est pas seulement économique, elle est existentielle.';
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
    if (v && v.nome) return v.nome;
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
        '<span class="pm">' + c.minuti + ' ' + T('min') + ' ' + SEGNO + '</span></a>';
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
        h += '<details class="plan-sezione"' + (s.capitoli.indexOf(corrente) >= 0 ? ' open' : '') + '><summary><h4>' + s.titolo + '</h4><span class="sez-min">' + minutiDi(s) + ' ' + T('min') + '</span></summary>';
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
    h += '<p class="al-legenda"><span><i class="segno"></i> ' + T('à lire') + '</span><span><i class="segno aperto"></i> ' + T('commencé') + '</span><span><i class="segno letto"></i> ' + T('lu') + '</span></p>';
    return '<nav class="albero" id="albero" aria-label="' + T('Sommaire') + '">' + h + '</nav>';
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
  var LIBRI = [   // senza Incanto e La regola del gioco (Raffaele, 21/11: «togli pure incanto e la regola del gioco»); dal CV («CV Ventura synthese 11/2026 fr»), dal più recente; packshot in img/libri/
    ['istituzione', 'L’istituzione immaginaria del capitalismo', 'DeriveApprodi', 2026],
    ['conquista', 'La conquista dell’infelicità', 'Einaudi', 2025],
    ['radical-choc', 'Radical choc', 'Einaudi', 2020],
    ['guerra', 'La guerra di tutti', 'minimum fax', 2019],
    ['teoria', 'Teoria della classe disagiata', 'minimum fax', 2017]
  ];
  function bio() {
    corrente = null;
    document.title = 'Raffaele Alberto Ventura — ' + BOOK.titolo;
    scena.innerHTML = '<article class="capitolo bio"><header class="testata griglia"><div class="testata-dentro">' +
      '<p class="sopra">' + T('L’auteur') + '</p><h1>' + T('Raffaele Alberto Ventura') + '</h1></div></header>' +
      '<div class="corpo griglia">' +
      // il ritratto nella colonna sinistra (Raffaele, 21/11: «mettila a sinistra»; ritaglia_ritratto.py)
      '<aside class="bio-colonna"><img class="bio-ritratto" src="' + RADICE + 'img/ritratto.png" alt="" onerror="this.remove()"></aside>' +
      BOOK.bio.map(function (h) { return '<p>' + h + '</p>'; }).join('') +
      // i libri sotto il testo (Raffaele, 21/11: «i libri sotto il testo»)
      '<div class="bio-libri">' + LIBRI.map(function (l) {
        return '<figure><img src="' + RADICE + 'img/libri/' + l[0] + '.png" alt="' + l[1].replace(/"/g, '&quot;') + '" loading="lazy" width="444" height="650">' +
          '<figcaption><em>' + l[1] + '</em><span>' + l[2] + ', ' + l[3] + '</span></figcaption></figure>';
      }).join('') + '</div>' +
      '<p><a class="bottone" href="#/">' + T('Retour au sommaire') + '</a></p></div></article>';
    $('#barra-capitolo').textContent = '';
    window.scrollTo(0, 0);
    aggiornaScorrimento();
  }

  /* Il testo sul lato destro, in cinese: la stessa frase introduttiva, tradotta, su quattro righe sghembe. */
  function bandellaZh(stili) {
    var f = T(INTRO_CHAPO).match(/[^。？！]+[。？！]/g) || [T(INTRO_CHAPO)];
    var righe = [f[0], f[1], (f[2] || '') + (f[3] || ''), f.slice(4).join('')].filter(Boolean);
    righe[0] = '“' + righe[0]; righe[righe.length - 1] += '”';
    return '<p class="bandella">' + righe.map(function (r, i) {
      return '<span class="riga" style="' + (stili[i] || '') + '">' + r + '</span>';
    }).join('') + '</p>';
  }
  function accoglienza() {
    corrente = null;
    document.title = BOOK.titolo;
    var primo = BOOK.ordine[0];
    scena.innerHTML =
      '<section class="copertina griglia"><div class="copertina-dentro">' +
        '<p class="sopra">' + T('Raffaele Alberto Ventura') + (BOOK.bio && BOOK.bio.length ? ' <a class="bio-link" href="#/bio">' + T('Bio') + '</a>' : '') + '</p>' +
        // citazione storta, evidenziata in giallo, davanti all'illustrazione: testo dato da Raffaele il 21/11 (frasi della scheda d'accoglienza)
        (ZH ? '<h1 aria-label="' + T('La classe malaisée') + '">' + lettere(T('La classe malaisée').slice(0, 2), 0) + '<em>' + lettere(T('La classe malaisée').slice(2), 2) + '</em></h1>'
            : '<h1 aria-label="La classe malaisée">' + lettere('La classe', 0) + ' <em>' + lettere('malaisée', 9) + '</em></h1>') +
        '<p class="sottotitolo" aria-label="' + T('Socio-philosophie du déclassement') + '">' + lettere(T('Socio-philosophie du déclassement'), 0) + '</p>' +
        // il testo sul lato destro, accanto a titolo e sottotitolo (rimesso da Raffaele, 21/11: «rimetti il testo sul lato a destra in home»)
        (ZH ? bandellaZh(["--x:0px;--r:-0.6deg", "--x:46px;--r:0.5deg", "--x:14px;--r:-0.9deg", "--x:88px;--r:0.7deg"]) :
        '<p class="bandella"><span class="riga" style="--x:0px;--r:-0.6deg">«\u00a0Les représentations de soi ne sont pas des caprices que l’on pourrait ajuster.</span><span class="riga" style="--x:46px;--r:0.5deg">Profondément enracinées, elles sont le produit de causes sociales et culturelles.</span><span class="riga" style="--x:14px;--r:-0.9deg">Aujourd’hui, la jeunesse se révolte. Pouvait-elle réagir autrement\u00a0?</span><span class="riga" style="--x:88px;--r:0.7deg">La crise n’est pas seulement économique, elle est existentielle.\u00a0»</span></p>') +
        '<div class="copertina-griglia">' + grigliaHtml(null) + '</div>' +
        '<a class="bottone" href="#/' + primo + '">' + T('Commencer la lecture') + '</a>' + ALTRA +
        (ZH ? '<p class="nota-ia">' + T('nota-ia') + '</p>' : '') +   // avviso della traduzione automatica (Raffaele, 22/11)   // la lingua accanto al pulsante (Raffaele, 21/11)
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
    var sopra = d.parte ? T('Partie') + ' ' + d.parte.num + ' · ' + d.sezione.titolo : (nomeDi(id) || BOOK.titolo);

    var h = '<header class="testata griglia"><div class="testata-dentro">' +
      (c.num ? '<span class="testata-num" aria-hidden="true">' + due(c.num) + '</span>' : '') +
      '<p class="sopra">' + sopra + '</p>' +
      '<h1>' + c.titolo + '</h1>' +
      (c.chapo ? '<p class="chapo">' + c.chapo + '</p>' : '') +
      '<p class="meta">' + c.minuti + ' ' + T('min de lecture') + (NOTE && c.note.length ? ' · ' + c.note.length + ' notes' : '') + '</p>' +
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
      h += '<a class="seguito" href="#/' + succ + '"><span class="sopra">' + T('À suivre') + (ds.sezione ? ' · ' + ds.sezione.titolo : (nomeDi(succ) ? ' · ' + nomeDi(succ) : '')) + '</span>' +
        (s.num ? '<span class="seguito-num">' + due(s.num) + '</span>' : '') +
        '<span class="seguito-titolo">' + s.titolo + '</span>' + (s.chapo ? '<span class="seguito-chapo">' + s.chapo + '</span>' : '') + '</a>';
    }
    h += '<p class="coda-link">' + (prec ? '<a href="#/' + prec + '">← ' + cap(prec).titolo + '</a>' : '') +
      '<a href="#/">' + T('Tout le sommaire') + '</a></p></div></footer>';

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
    var voci = window.STRATO_ZH ? (window.STRATO_ZH[c.id] || []) : ((window.STRATO || {})[k0] || (window.STRATO_AUTO || {})[k0] || []);
    // l'interattivo del capitolo (interattivi.js; in cinese è già nello STRATO_ZH)
    if (!window.STRATO_ZH) voci = voci.concat((window.INTERATTIVI || {})[k0] || []);
    var testi = c.blocchi.map(function (b) { return nudo(b.h || ''); });
    var tutto = testi.join(' '), occupati = {};
    voci.forEach(function (v) {
      if (v.tipo === 'apertura') { var a0 = window.GRAFICI.apertura(v), art = $('#articolo'); art.insertBefore(a0, art.firstChild); occupati[-1] = true; return; }
      var ancora = nudo(v.dopo || v.testo || '');
      var k = typeof v.b === 'number' ? v.b : -1;
      if (k < 0) testi.forEach(function (t, i) { if (k < 0 && t.indexOf(ancora) >= 0) k = i; });
      var mancano = (v.richiede || []).filter(function (r) { return tutto.indexOf(nudo(r)) < 0; });
      if (k < 0 || mancano.length || !window.GRAFICI[v.tipo]) {
        console.warn('strato: voce non agganciata', v.tipo, k < 0 ? 'àncora assente' : mancano);
        return;
      }
      var p = posto(v.prima ? k - 1 : k), nodo = window.GRAFICI[v.tipo](v);
      occupati[p] = true;
      if (p < 0) { var art1 = $('#articolo'), pr = $('[data-b="0"]', art1); art1.insertBefore(nodo, pr); return; }
      var blocco = $('[data-b="' + p + '"]', scena);
      if (blocco.tagName === 'LI') blocco = blocco.parentNode;       // mai dentro un elenco: dopo l'elenco intero
      blocco.parentNode.insertBefore(nodo, blocco.nextSibling);
    });

    /* Dove mettere una voce perché non interrompa il flusso (Raffaele, 21/11: «des infographies qui interrompent un
     * flux»): dopo il blocco k, oppure più avanti, al primo blocco che chiude davvero un discorso (al massimo dodici blocchi più avanti; se non c'è, al primo posto libero). Si va avanti se il
     * blocco finisce con «:» o senza punto finale, se è dentro un elenco che continua, se il blocco seguente è una
     * citazione o un elenco annunciati, o se lì c'è già un'altra voce (mai due voci attaccate). Al massimo sei passi. */
    function buono(p) {
      if (p < 0 || p >= c.blocchi.length || occupati[p] || occupati[p - 1] || occupati[p + 1]) return false;
      var b = c.blocchi[p], dopo = c.blocchi[p + 1] || {}, t = testi[p].trim();
      if (b.t === 'h2' || (b.t === 'li' && dopo.t === 'li')) return false;
      if (b.t === 'p' && !/[.!?»”…)\]。？！」）]$/.test(t)) return false;
      return !((dopo.t === 'quote' || dopo.t === 'li') && /[:：]$/.test(t));
    }
    function posto(k) {
      for (var p = k, passi = 0; passi < 12 && p < c.blocchi.length - 1; p++, passi++) {
        if (p < 0) { if (!occupati[-1]) return -1; continue; }
        var b = c.blocchi[p], dopo = c.blocchi[p + 1] || {}, t = testi[p].trim();
        var chiuso = b.t === 'h2' ? false : /[.!?»”…)\]。？！」）]$/.test(t);
        if (b.t === 'li' && dopo.t === 'li') continue;
        if (b.t === 'h2' || (dopo.t === 'h2' && occupati[p + 1])) continue;
        if (!chiuso && b.t !== 'quote' && b.t !== 'li') continue;
        if ((dopo.t === 'quote' || dopo.t === 'li') && /[:：]$/.test(t)) continue;
        if (occupati[p] || occupati[p - 1]) continue;
        return p;
      }
      // Nessun posto buono più avanti (succede in fondo ai capitoli, dove le voci si affollano): il posto buono
      // più vicino, prima o dopo; in mancanza, il primo libero.
      for (var d = 1; d < c.blocchi.length; d++) {
        var q = [k + d, k - d];
        for (var j = 0; j < 2; j++) if (buono(q[j])) return q[j];
      }
      for (p = k; p < c.blocchi.length; p++) if (!occupati[p] && !occupati[p - 1] && c.blocchi[p].t !== 'h2') return p;
      return k;
    }
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
  fetch(window.LIBRO_JSON || 'dati/book.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (b) {
    BOOK = b; indicizza(); rotta(); dalVivo();
  }).catch(function (e) {
    scena.innerHTML = '<p class="attesa">' + T('Le texte n’a pas pu être chargé.') + ' (' + e.message + ')</p>';
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
