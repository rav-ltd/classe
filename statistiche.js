/* Statistiche di lettura anonime della v2 (Raffaele, 22/11: «sono ancora attivi i referrals che erano collegati al
 * file excel per vedere chi legge e come si comporta?» · «Sì, riattivale»).
 *
 * Stesso registratore della v1 (ipertesto/Page.html, blocco TRK), stesso formato e stesso indirizzo: i dati vanno
 * all'applicazione Apps Script «Ipertesto RAV», che li riceve con doPost (Statistiche.gs, file di Raffaele, non
 * toccato) e li scrive nel foglio delle statistiche.
 * Per ogni capitolo aperto: ordine, come ci si è arrivati (start, idx = sommario, next = «capitolo seguente»,
 * lnk = link nel testo, back = indietro, home), secondi visibili e attivi, scorrimento massimo. Per la visita:
 * telefono o computer, lingua del browser. Nessun dato personale: un codice casuale salvato nel browser.
 * Spento con «Do Not Track», Global Privacy Control, robot, o rifiuto salvato (localStorage rav-nostat = 1).
 * Uso nella pagina: window.STAT.view(<id della scheda>) a ogni capitolo mostrato; la via la deduce da sé. */
(function () {
  'use strict';
  var NOP = { view: function () {} };
  var EXEC = window.STAT_URL || '';
  var blocked = !EXEC;
  try {
    blocked = blocked || navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true ||
      !!navigator.webdriver || /bot|crawl|spider|slurp|headless|lighthouse|preview/i.test(navigator.userAgent || '');
  } catch (e) { blocked = true; }
  if (blocked) { window.STAT = NOP; return; }

  var FLUSH_MS = 90000, IDLE_MS = 30000, NEW_SESSION_MS = 30 * 60000, MAX_ROWS = 30;
  function rnd(n) {
    var s = '';
    try { var a = new Uint8Array(n); crypto.getRandomValues(a); for (var i = 0; i < n; i++) s += (a[i] % 36).toString(36); }
    catch (e) { for (var j = 0; j < n; j++) s += Math.floor(Math.random() * 36).toString(36); }
    return s;
  }
  var out = false, vid = '';
  try { out = localStorage.getItem('rav-nostat') === '1'; vid = localStorage.getItem('rav-vid') || ''; } catch (e) {}
  if (!/^[a-z0-9]{10,16}$/.test(vid)) { vid = rnd(12); try { localStorage.setItem('rav-vid', vid); } catch (e) {} }

  var sid = rnd(10), ord = 0, seg = null, closed = [], lastKey = '', primo = true, ultimoClic = '';
  var lastTick = Date.now(), lastAct = lastTick, hiddenAt = 0;
  function visible() { return document.visibilityState !== 'hidden'; }

  // come ci si è arrivati: dall'ultimo clic su un link interno, altrimenti «indietro» (o «start» al primo caricamento)
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#/"]');
    if (!a) return;
    ultimoClic = a.closest('.seguito, .coda-link') ? 'next'
      : a.closest('.plan-voce, .plan-largo, .albero, #velo, .al-cap, .copertina, .barra') ? 'idx'
      : a.closest('#articolo') ? 'lnk' : 'idx';
  }, true);

  function depth() {
    if (!seg) return;
    var h = document.documentElement.scrollHeight;
    if (h > 0) seg.sd = Math.max(seg.sd, Math.min(100, Math.round(100 * (scrollY + innerHeight) / h)));
  }

  function view(tab) {
    var via = primo ? 'start' : (ultimoClic || 'back');
    primo = false; ultimoClic = '';
    if (out || (seg && seg.tab === tab)) return;
    depth();
    if (seg) closed.push(seg);
    seg = { ord: ++ord, tab: tab, via: via, t0: Date.now(), vis: 0, act: 0, sd: 0 };
    lastTick = Date.now();
    if (closed.length >= MAX_ROWS) flush();
  }

  function snap(s) { return [s.ord, s.tab, s.via, Math.round(s.t0 / 1000), Math.round(s.vis / 1000), Math.round(s.act / 1000), s.sd]; }

  // lingua del sito nella colonna «lang» (Raffaele, 22/11: «segna la lingua del sito»): sul sito cinese «zh:» davanti
  // alla lingua del browser (zh:zh-CN, zh:en-US), sul francese com'era; 8 caratteri al massimo, come prima
  function lingua() {
    var nav = (navigator.language || '').slice(0, 5);
    return (window.LINGUA === 'zh' ? 'zh:' + nav : nav).slice(0, 8);
  }

  function flush() {
    if (out) return;
    depth();
    var take = closed.splice(0, MAX_ROWS), rows = take.map(snap);
    if (seg) rows.push(snap(seg));
    if (!rows.length) return;
    var body = JSON.stringify({ k: 1, vid: vid, sid: sid, dev: innerWidth <= 768 ? 'm' : 'd',
                                lang: lingua(), s: rows });
    if (body === lastKey && !take.length) return;
    lastKey = body;
    var ok = false;
    try { ok = navigator.sendBeacon && navigator.sendBeacon(EXEC, new Blob([body], { type: 'text/plain;charset=utf-8' })); } catch (e) {}
    if (!ok) {
      try { fetch(EXEC, { method: 'POST', mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: body }); }
      catch (e) { closed.unshift.apply(closed, take); }
    }
  }

  function renew() {
    var tab = seg && seg.tab;
    sid = rnd(10); ord = 0; seg = null; closed = []; lastKey = '';
    if (tab) { ultimoClic = 'back'; view(tab); }
  }

  setInterval(function () {
    var t = Date.now(), dt = Math.min(t - lastTick, 2500);
    lastTick = t;
    if (out || !seg || !visible()) return;
    seg.vis += dt;
    if (t - lastAct < IDLE_MS) seg.act += dt;
    depth();
  }, 1000);
  ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart', 'scroll'].forEach(function (ev) {
    addEventListener(ev, function () { lastAct = Date.now(); }, { passive: true, capture: true });
  });
  document.addEventListener('visibilitychange', function () {
    if (!visible()) { hiddenAt = Date.now(); flush(); return; }
    lastTick = lastAct = Date.now();
    if (hiddenAt && lastTick - hiddenAt > NEW_SESSION_MS) renew();
    hiddenAt = 0;
  });
  addEventListener('pagehide', flush);
  setInterval(function () { if (visible()) flush(); }, FLUSH_MS);

  window.STAT = { view: view, flush: flush };
})();
