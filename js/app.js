/* ==========================================================
   TechLex — 主逻辑 / main logic
   大类懒加载 lazy tracks · 发音 speech · 逐字母校对 checking · 错题本 mistakes
   ========================================================== */
(function () {
  'use strict';

  var GROUPS = window.GROUPS || [];
  var TRACKS = window.TRACKS || [];
  var CATS   = window.CATEGORIES || [];
  var TCOUNT = window.TRACK_COUNTS || {};
  var LS_KEY = 'techlex.prefs.v4';

  /* ------------------------- 偏好设置 preferences ------------------------- */
  var prefs = {
    accent: 'en-US',                  // 默认美音 / American by default
    rate: 0.9,                        // 语速 speech rate
    blind: false,                     // 听写模式 dictation mode
    hwOnly: false,                    // 只练带词源的词 / only words with a story
    track: TRACKS.length ? TRACKS[0].id : '',
    catsByTrack: {}                   // 每个大类各自记住选了哪些小类 / per-track selection
  };
  try {
    var saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    for (var k in saved) if (saved[k] !== undefined && saved[k] !== null) prefs[k] = saved[k];
  } catch (e) { /* localStorage 不可用时忽略 / ignore */ }
  if (!prefs.catsByTrack || typeof prefs.catsByTrack !== 'object') prefs.catsByTrack = {};
  if (!TRACKS.some(function (t) { return t.id === prefs.track; })) prefs.track = TRACKS[0].id;

  function savePrefs() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(prefs)); } catch (e) {}
  }

  function trackCats(tid) { return CATS.filter(function (c) { return c.track === tid; }); }
  function trackById(tid) { for (var i = 0; i < TRACKS.length; i++) if (TRACKS[i].id === tid) return TRACKS[i]; return null; }
  function activeCats() {
    var sel = prefs.catsByTrack[prefs.track];
    if (!sel || !sel.length) sel = trackCats(prefs.track).map(function (c) { return c.id; });
    return sel;
  }

  /* --------------------- 错题本 mistakes book ---------------------
     { "idempotent": { n: 错误次数, t: 最后一次, tr: 大类, zh: 词意快照 } } */
  var MK_KEY = 'techlex.mistakes.v2';
  var mistakes = {};
  try { mistakes = JSON.parse(localStorage.getItem(MK_KEY) || '{}') || {}; } catch (e) { mistakes = {}; }
  function saveMistakes() { try { localStorage.setItem(MK_KEY, JSON.stringify(mistakes)); } catch (e) {} }
  function mistakeCount() { return Object.keys(mistakes).length; }

  /* ------------------------------ DOM ------------------------------ */
  function $(id) { return document.getElementById(id); }
  var elWord   = $('wordLine'), elIpa = $('ipa'), elPos = $('pos'), elBadges = $('badges'),
      elTyper  = $('typer'),    elHint = $('hint'), elCounter = $('counter'),
      elPill   = $('catPill'),  elSpeak = $('speakBtn'), elCats = $('cats'),
      elCard   = document.querySelector('.word-card'),
      elDefEn  = $('defEn'), elDefZh = $('defZh'),
      elEtyEn  = $('etyEn'), elEtyZh = $('etyZh'), elBlockEty = $('blockEty'),
      elExEn   = $('exEn'),  elExZh  = $('exZh'),  elBlockEx  = $('blockEx'),
      elDone   = $('sDone'), elStreak = $('sStreak'),
      elAcc    = $('sAcc'),  elWpm = $('sWpm'),
      elOverlay = $('overlay'), elMList = $('mlist'), elMEmpty = $('mEmpty'),
      elMCount = $('mCount'), elMBtn = $('mistakeBtn'), elDrill = $('drillBtn'),
      elTrackOverlay = $('trackOverlay'), elTrackGroups = $('trackGroups'),
      elTrackBtn = $('trackBtn'), elTbZh = $('tbZh'), elTbN = $('tbN');

  /* ------------------------------ 状态 state ------------------------------ */
  var queue = [], idx = 0, cur = null, solved = false, lastLen = 0;
  var curErr = false;        // 本题是否打错过 / did this word get a wrong keystroke
  var drill = false;         // 只练错题 / drilling the mistakes book
  var justEmptied = false;   // 错题刚清空 / the book just emptied
  var extraMsg = '';         // 下一题要顺带显示的提示 / one-shot hint

  /* --------------------- 大类数据懒加载 lazy track data --------------------- */
  window.TECHLEX_DATA = window.TECHLEX_DATA || {};
  var pending = {};

  function trackData(tid) { return window.TECHLEX_DATA[tid] || []; }

  function loadTrack(tid, cb) {
    if (window.TECHLEX_DATA[tid]) return cb(window.TECHLEX_DATA[tid]);
    if (pending[tid]) { pending[tid].push(cb); return; }
    pending[tid] = [cb];
    var s = document.createElement('script');
    s.src = 'js/data/' + tid + '.js';
    s.onload = s.onerror = function () {
      var q = pending[tid]; delete pending[tid];
      var data = window.TECHLEX_DATA[tid] || (window.TECHLEX_DATA[tid] = []);
      q.forEach(function (f) { f(data); });
    };
    document.head.appendChild(s);
  }

  // 依次加载多个大类 / load several tracks, then continue
  function loadTracks(ids, cb) {
    var left = ids.length;
    if (!left) return cb();
    ids.forEach(function (id) { loadTrack(id, function () { if (--left === 0) cb(); }); });
  }

  /* --------------------------- 音效 sound effects --------------------------- */
  var ac = null;
  function audio() {
    if (!ac) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ac = new C();
    }
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  // 答对时的"叮" / the success chime
  function ding() {
    var c = audio(); if (!c) return;
    [[880, 0], [1318.51, 0.07]].forEach(function (p) {
      var o = c.createOscillator(), g = c.createGain(), t = c.currentTime + p[1];
      o.type = 'sine'; o.frequency.value = p[0];
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.22, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + 0.45);
    });
  }
  // 打错时的短促提示 / the error blip
  function blip() {
    var c = audio(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain(), t = c.currentTime;
    o.type = 'triangle'; o.frequency.setValueAtTime(200, t);
    o.frequency.exponentialRampToValueAtTime(120, t + 0.09);
    g.gain.setValueAtTime(0.09, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + 0.11);
  }

  /* --------------------------- 发音 text to speech --------------------------- */
  var voices = [];
  var PREFERRED = {
    'en-GB': ['Daniel', 'Serena', 'Kate', 'Google UK English Female', 'Google UK English Male', 'Arthur', 'Martha'],
    'en-US': ['Samantha', 'Alex', 'Google US English', 'Ava', 'Allison', 'Evan']
  };

  function refreshVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = window.speechSynthesis.getVoices() || [];
  }
  refreshVoices();
  if ('speechSynthesis' in window) window.speechSynthesis.onvoiceschanged = refreshVoices;

  function pickVoice(lang) {
    if (!voices.length) refreshVoices();
    var names = PREFERRED[lang] || [];
    for (var i = 0; i < names.length; i++) {
      for (var j = 0; j < voices.length; j++) {
        if (voices[j].name.indexOf(names[i]) === 0) return voices[j];
      }
    }
    var exact = voices.filter(function (v) { return v.lang.replace('_', '-') === lang; });
    if (exact.length) return exact[0];
    var any = voices.filter(function (v) { return v.lang.indexOf('en') === 0; });
    return any[0] || null;
  }

  var spoke = false;
  function speak(text) {
    if (!('speechSynthesis' in window) || !text) return;
    spoke = true;
    try {
      window.speechSynthesis.cancel();
      setTimeout(function () {
        var u = new SpeechSynthesisUtterance(text);
        var v = pickVoice(prefs.accent);
        if (v) u.voice = v;
        u.lang = prefs.accent;
        u.rate = parseFloat(prefs.rate) || 0.9;
        u.onstart = function () { elSpeak.classList.add('is-speaking'); };
        u.onend = u.onerror = function () { elSpeak.classList.remove('is-speaking'); };
        window.speechSynthesis.speak(u);
      }, 40);
    } catch (e) { /* 某些浏览器不支持 / unsupported browser */ }
  }

  /* ------------------------------ 队列 queue ------------------------------ */
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // 错题池：跨大类，只取已加载的数据 / the drill pool, across tracks
  function drillPool() {
    var out = [];
    for (var w in mistakes) {
      var tr = mistakes[w].tr;
      var data = trackData(tr);
      for (var i = 0; i < data.length; i++) if (data[i].w === w) { out.push(data[i]); break; }
    }
    return out;
  }

  function buildQueue() {
    var pool = null;
    if (drill) {
      pool = drillPool();
      if (!pool.length) { drill = false; justEmptied = true; pool = null; }
    }
    if (!pool) {
      var sel = activeCats();
      pool = trackData(prefs.track).filter(function (w) { return sel.indexOf(w.cat) >= 0; });
      if (prefs.hwOnly) {                                   // 只练带词源的词 / story only
        var withStory = pool.filter(function (w) { return w.hw; });
        if (withStory.length >= 5) pool = withStory;
        else extraMsg = '这个大类还没有足够的词源条目，已显示全部 · Not enough stories here yet, showing all';
      }
    }
    if (!pool.length) pool = trackData(prefs.track).slice();
    queue = shuffle(pool.slice());
    idx = 0;
  }

  function catLabel(id) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i];
    return { zh: '', en: '' };
  }

  /* ------------------------------ 渲染 render ------------------------------ */
  var TAG_ZH = { gre: 'GRE', toefl: 'TOEFL', ielts: 'IELTS', cet6: '六级', cet4: '四级', ky: '考研', gk: '高考', zk: '中考' };

  function load(i) {
    var roundMsg = extraMsg; extraMsg = '';
    if (i >= queue.length) {                       // 一轮结束，重新洗牌 / round over, reshuffle
      buildQueue(); i = 0;
      roundMsg = drill
        ? '错题再来一轮 · Another pass over the mistakes'
        : '🎉 本轮完成，已重新洗牌 · Round complete, reshuffled';
    }
    if (justEmptied) {
      justEmptied = false;
      roundMsg = '🎉 错题全部掌握，已回到当前大类 · Mistakes all cleared, back to the track';
    }
    idx = i;
    cur = queue[idx];
    solved = false; lastLen = 0; curErr = false;
    elTyper.value = '';
    elCard.classList.remove('is-solved');

    if (!cur) { hint('这个筛选下没有词，换个小类试试 · Nothing here, try another category', 'err'); return; }

    // 单词逐字母渲染 / render the word letter by letter
    elWord.innerHTML = '';
    for (var c = 0; c < cur.w.length; c++) {
      var s = document.createElement('span');
      s.className = 'ch' + (cur.w[c] === ' ' ? ' space' : '');
      s.textContent = cur.w[c];
      elWord.appendChild(s);
    }

    var cat = catLabel(cur.cat);
    if (drill) {
      elPill.textContent = '错题模式 Drill · 点此返回';
      elPill.className = 'pill drill';
    } else {
      elPill.textContent = cat.zh + ' · ' + cat.en;
      elPill.className = 'pill';
    }
    elCounter.textContent = (idx + 1) + ' / ' + queue.length;

    // 音标：手写条目分英美，词典条目只有一个 / IPA: hand-written entries have both
    if (cur.uk && cur.us) {
      elIpa.textContent = (prefs.accent === 'en-GB' ? 'UK ' : 'US ') + (prefs.accent === 'en-GB' ? cur.uk : cur.us);
    } else {
      elIpa.textContent = cur.ph || '';
    }
    elPos.textContent = cur.pos || '';

    // 徽章：词源 / 考试标签 / badges
    elBadges.innerHTML = '';
    if (cur.hw) addBadge('有词源 story', 'story');
    if (cur.tag) addBadge(TAG_ZH[cur.tag] || cur.tag, 'tag');

    elDefZh.textContent = cur.zh || '';
    elDefEn.textContent = cur.en || '';
    elDefEn.hidden = !cur.en;

    var hasEty = !!(cur.oe || cur.oz);
    elBlockEty.hidden = !hasEty;
    elEtyEn.textContent = cur.oe || ''; elEtyZh.textContent = cur.oz || '';
    var hasEx = !!(cur.se || cur.sz);
    elBlockEx.hidden = !hasEx;
    elExEn.textContent = cur.se || ''; elExZh.textContent = cur.sz || '';

    hint(roundMsg || (prefs.blind
      ? '听写模式：只听发音，直接输入 · Dictation: type what you hear'
      : '开始打字，逐字母实时校对 · Start typing, checked letter by letter'), '');
    paint('');
    speak(cur.w);
    elTyper.focus();
  }

  function addBadge(text, kind) {
    var b = document.createElement('span');
    b.className = 'badge badge-' + kind;
    b.textContent = text;
    elBadges.appendChild(b);
  }

  function hint(text, cls) {
    elHint.textContent = text;
    elHint.className = 'typing-hint' + (cls ? ' ' + cls : '');
  }

  // 逐字母上色：对=绿 / 错=红 / paint every letter: green if right, red if wrong
  function paint(typed) {
    if (!cur) return;
    var target = cur.w, spans = elWord.children, wrong = false;
    for (var i = 0; i < target.length; i++) {
      var s = spans[i], cls = 'ch' + (target[i] === ' ' ? ' space' : '');
      s.textContent = target[i];
      if (i < typed.length) {
        if (typed[i].toLowerCase() === target[i].toLowerCase()) {
          cls += ' done';
        } else {
          cls += ' wrong';
          wrong = true;
          // 听写模式下显示"你打的那个字母"，而不是正确答案
          if (prefs.blind && !solved) s.textContent = typed[i];
        }
      } else if (i === typed.length) {
        cls += ' cur';
        if (prefs.blind && !solved) cls += ' masked';
      } else if (prefs.blind && !solved) {
        cls += ' masked';
      }
      s.className = cls;
    }
    return wrong;
  }

  /* ------------------------- 输入处理 typing handler ------------------------- */
  function onInput() {
    if (!elOverlay.hidden || !elTrackOverlay.hidden) { elTyper.value = ''; lastLen = 0; return; }
    if (!cur || solved) { elTyper.value = elTyper.value.slice(0, cur ? cur.w.length : 0); return; }
    var typed = elTyper.value.slice(0, cur.w.length);   // 不允许超长 / cap at word length
    if (elTyper.value !== typed) elTyper.value = typed;

    if (!stats.start && typed.length) stats.start = Date.now();

    // 只在"新增了一个字符"时计一次按键 / count a keystroke only when a char is added
    if (typed.length > lastLen) {
      var i = typed.length - 1;
      stats.keys++;
      if (typed[i].toLowerCase() === cur.w[i].toLowerCase()) {
        stats.ok++;
      } else {
        stats.errs++; stats.streak = 0;
        noteMistake();
        blip();
        elWord.classList.remove('shake');
        void elWord.offsetWidth;                        // 触发重排以重放动画 / restart animation
        elWord.classList.add('shake');
        hint('拼写不对，退格改一下 · Wrong letter — backspace and fix it', 'err');
      }
    }
    lastLen = typed.length;

    var wrong = paint(typed);
    if (!wrong && typed.length === cur.w.length) return success();
    if (!wrong && elHint.className.indexOf('err') >= 0) hint('继续 · keep going', '');
    updateStats();
  }

  var stats = { done: 0, streak: 0, keys: 0, errs: 0, ok: 0, start: 0 };

  // 记一次错题 / record the current word as missed
  function noteMistake() {
    if (!cur || curErr) return;
    curErr = true;
    var e = mistakes[cur.w] || { n: 0, t: 0 };
    e.n++; e.t = Date.now();
    e.tr = drill ? (mistakes[cur.w] && mistakes[cur.w].tr) || prefs.track : prefs.track;
    e.zh = cur.zh || '';
    mistakes[cur.w] = e;
    saveMistakes(); updateMCount();
  }

  // 一次打对就移出错题本 / a clean run removes the word from the book
  function clearMistake(w) {
    if (mistakes[w]) { delete mistakes[w]; saveMistakes(); updateMCount(); }
  }

  function success() {
    solved = true;
    if (!curErr) clearMistake(cur.w);
    stats.done++; stats.streak++;
    elCard.classList.add('is-solved');
    paint(cur.w);                                       // 全绿并揭示答案 / all green, reveal
    ding();
    hint('✓ 正确！Correct — 下一题 next…', 'ok');
    updateStats();
    setTimeout(function () { load(idx + 1); }, 780);
  }

  function skip() {
    if (!cur || solved) return;
    noteMistake();
    solved = true; stats.streak = 0;
    for (var i = 0; i < elWord.children.length; i++) {   // 取消遮罩，露出正确拼写 / unmask
      elWord.children[i].className = 'ch' + (cur.w[i] === ' ' ? ' space' : '');
      elWord.children[i].textContent = cur.w[i];
    }
    hint('已跳过：' + cur.w + ' · skipped', 'err');
    updateStats();
    setTimeout(function () { load(idx + 1); }, 900);
  }

  function updateStats() {
    elDone.textContent = stats.done;
    elStreak.textContent = stats.streak;
    elAcc.textContent = stats.keys ? Math.round(stats.ok / stats.keys * 100) + '%' : '100%';
    var mins = stats.start ? (Date.now() - stats.start) / 60000 : 0;
    elWpm.textContent = mins > 0.02 ? Math.round((stats.ok / 5) / mins) : 0;
  }

  /* --------------------- 错题面板 mistakes panel --------------------- */
  function updateMCount() {
    var n = mistakeCount();
    elMCount.textContent = n;
    elMBtn.classList.toggle('has-items', n > 0);
    elDrill.disabled = n === 0;
    elDrill.textContent = drill ? '返回当前大类 Back to the track' : '只练错题 Drill these';
  }

  function renderMistakes() {
    var keys = Object.keys(mistakes).sort(function (a, b) {
      return (mistakes[b].n - mistakes[a].n) || (mistakes[b].t - mistakes[a].t);
    });
    elMList.innerHTML = '';
    elMEmpty.hidden = keys.length > 0;

    keys.forEach(function (k) {
      var rec = mistakes[k];
      var li = document.createElement('li');
      li.className = 'mitem';

      var w = document.createElement('span');
      w.className = 'mw'; w.textContent = k;

      var m = document.createElement('span');
      m.className = 'mm'; m.textContent = rec.zh || '';

      var n = document.createElement('span');
      n.className = 'mn'; n.textContent = '错 ' + rec.n;

      var play = document.createElement('button');
      play.className = 'icon-btn'; play.textContent = '🔊';
      play.setAttribute('aria-label', '朗读 ' + k);
      play.addEventListener('click', function () { speak(k); });

      var del = document.createElement('button');
      del.className = 'icon-btn'; del.textContent = '✕';
      del.setAttribute('aria-label', '移出错题本 remove ' + k);
      del.addEventListener('click', function () { clearMistake(k); renderMistakes(); });

      li.appendChild(w); li.appendChild(m); li.appendChild(n);
      li.appendChild(play); li.appendChild(del);
      elMList.appendChild(li);
    });
  }

  function openSheet() { renderMistakes(); updateMCount(); elOverlay.hidden = false; }
  function closeSheet() { elOverlay.hidden = true; elTyper.focus(); }

  elMBtn.addEventListener('click', openSheet);
  $('closeSheet').addEventListener('click', closeSheet);
  elOverlay.addEventListener('click', function (e) { if (e.target === elOverlay) closeSheet(); });

  // 进入 / 退出错题练习：先把涉及的大类都加载进来
  elDrill.addEventListener('click', function () {
    if (!drill && !mistakeCount()) return;
    if (drill) { drill = false; buildQueue(); load(0); updateMCount(); closeSheet(); return; }
    var need = {};
    for (var w in mistakes) if (mistakes[w].tr) need[mistakes[w].tr] = 1;
    var ids = Object.keys(need);
    hint('正在载入错题所在的大类… · loading tracks…', '');
    loadTracks(ids, function () {
      drill = true;
      buildQueue(); load(0); updateMCount(); closeSheet();
    });
  });

  $('clearBtn').addEventListener('click', function () {
    mistakes = {}; saveMistakes();
    if (drill) { drill = false; buildQueue(); load(0); }
    renderMistakes(); updateMCount();
  });

  // 点分类标签可退出错题模式 / clicking the drill pill returns to the track
  elPill.addEventListener('click', function () {
    if (!drill) return;
    drill = false; buildQueue(); load(0); updateMCount();
  });

  /* --------------------- 大类选择面板 track picker --------------------- */
  function syncTrackBtn() {
    var t = trackById(prefs.track) || { zh: '', en: '' };
    elTbZh.textContent = t.zh;
    elTbN.textContent = TCOUNT[prefs.track] || 0;
  }

  function renderTrackPanel() {
    elTrackGroups.innerHTML = '';
    GROUPS.forEach(function (g) {
      var list = TRACKS.filter(function (t) { return t.group === g.id; });
      if (!list.length) return;
      var h = document.createElement('h3');
      h.className = 'group-title';
      h.innerHTML = g.zh + ' <span>' + g.en + '</span>';
      elTrackGroups.appendChild(h);

      var grid = document.createElement('div');
      grid.className = 'track-grid';
      list.forEach(function (t) {
        var b = document.createElement('button');
        b.className = 'track-card' + (t.id === prefs.track ? ' is-on' : '');
        b.dataset.track = t.id;
        b.innerHTML = '<span class="tc-zh">' + t.zh + '</span>' +
                      '<span class="tc-en">' + t.en + '</span>' +
                      '<span class="tc-n">' + (TCOUNT[t.id] || 0) + ' 词</span>';
        b.addEventListener('click', function () { switchTrack(t.id); });
        grid.appendChild(b);
      });
      elTrackGroups.appendChild(grid);
    });
  }

  function openTrackSheet() { renderTrackPanel(); elTrackOverlay.hidden = false; }
  function closeTrackSheet() { elTrackOverlay.hidden = true; elTyper.focus(); }

  elTrackBtn.addEventListener('click', openTrackSheet);
  $('closeTrack').addEventListener('click', closeTrackSheet);
  elTrackOverlay.addEventListener('click', function (e) { if (e.target === elTrackOverlay) closeTrackSheet(); });

  function switchTrack(tid) {
    closeTrackSheet();
    if (tid === prefs.track && !drill && trackData(tid).length) return;
    prefs.track = tid; drill = false;
    savePrefs(); syncTrackBtn(); renderChips();
    hint('正在载入「' + (trackById(tid) || {}).zh + '」… · loading…', '');
    elCounter.textContent = '… / ' + (TCOUNT[tid] || 0);
    loadTrack(tid, function () { buildQueue(); load(0); updateMCount(); });
  }

  /* --------------------- 小类筛选 category chips --------------------- */
  function renderChips() {
    elCats.innerHTML = '';
    var sel = activeCats();
    trackCats(prefs.track).forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'cat-chip' + (sel.indexOf(c.id) >= 0 ? ' is-on' : '');
      b.textContent = c.zh + ' · ' + c.en;
      b.dataset.cat = c.id;
      b.addEventListener('click', function () {
        var curSel = activeCats().slice();
        var at = curSel.indexOf(c.id);
        if (at >= 0) {
          if (curSel.length === 1) return;               // 至少保留一类 / keep at least one
          curSel.splice(at, 1);
        } else {
          curSel.push(c.id);
        }
        prefs.catsByTrack[prefs.track] = curSel;
        b.classList.toggle('is-on');
        savePrefs();
        drill = false;
        buildQueue(); load(0); updateMCount();
      });
      elCats.appendChild(b);
    });
  }

  /* ------------------------------ 控件 controls ------------------------------ */
  // 口音 accent
  document.getElementById('accentSeg').addEventListener('click', function (e) {
    var b = e.target.closest('.seg-btn'); if (!b) return;
    prefs.accent = b.dataset.accent; savePrefs();
    Array.prototype.forEach.call(this.querySelectorAll('.seg-btn'), function (x) {
      var on = x === b;
      x.classList.toggle('is-on', on);
      x.setAttribute('aria-checked', on ? 'true' : 'false');
    });
    if (cur && cur.uk && cur.us) {
      elIpa.textContent = (prefs.accent === 'en-GB' ? 'UK ' : 'US ') + (prefs.accent === 'en-GB' ? cur.uk : cur.us);
    }
    speak(cur && cur.w);
    elTyper.focus();
  });

  // 语速 rate
  $('rate').value = prefs.rate;
  $('rate').addEventListener('change', function () {
    prefs.rate = parseFloat(this.value); savePrefs(); speak(cur && cur.w);
  });

  // 听写模式 dictation
  $('blindMode').checked = !!prefs.blind;
  $('blindMode').addEventListener('change', function () {
    prefs.blind = this.checked; savePrefs();
    paint(elTyper.value); elTyper.focus();
  });

  // 只练带词源的词 / story only
  $('hwOnly').checked = !!prefs.hwOnly;
  $('hwOnly').addEventListener('change', function () {
    prefs.hwOnly = this.checked; savePrefs();
    drill = false; buildQueue(); load(0);
  });

  // 重听 replay
  elSpeak.addEventListener('click', function () { speak(cur && cur.w); elTyper.focus(); });

  /* ------------------------------ 键盘 keyboard ------------------------------ */
  elTyper.addEventListener('input', onInput);

  document.addEventListener('keydown', function (e) {
    var onControl = e.target !== elTyper && e.target.closest &&
                    e.target.closest('input, button, select, a');
    if (onControl && e.key !== 'Escape') return;   // 让控件自己处理按键 / let controls keep their keys
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) speak(cur && cur.w);
      else if (!solved) skip();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (!elTrackOverlay.hidden) return closeTrackSheet();
      if (!elOverlay.hidden) return closeSheet();
      elTyper.value = ''; lastLen = 0; paint(''); hint('已重来 · reset', '');
    }
    if (!elOverlay.hidden || !elTrackOverlay.hidden) return;   // 面板打开时不抢焦点
    if (document.activeElement !== elTyper) elTyper.focus();
  });

  // 点击页面任意空白处都回到输入状态 / clicking anywhere returns focus to the input
  document.addEventListener('click', function (e) {
    if (e.target.closest('button, input, label, a')) return;
    if (!elOverlay.hidden || !elTrackOverlay.hidden) return;
    elTyper.focus();
  });

  // iOS/Safari 需要用户手势后才能发音 / some browsers need a gesture before speaking
  ['pointerdown', 'keydown'].forEach(function (evt) {
    window.addEventListener(evt, function once() {
      audio();
      if (!spoke) speak(cur && cur.w);
      window.removeEventListener(evt, once);
    }, { once: true });
  });

  /* ------------------------------ 启动 start ------------------------------ */
  Array.prototype.forEach.call(document.querySelectorAll('#accentSeg .seg-btn'), function (b) {
    var on = b.dataset.accent === prefs.accent;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-checked', on ? 'true' : 'false');
  });

  syncTrackBtn();
  renderChips();
  updateMCount();
  hint('正在载入词库… · loading…', '');
  loadTrack(prefs.track, function () { buildQueue(); load(0); });
  setInterval(updateStats, 2000);   // 让 WPM 持续刷新 / keep WPM ticking
})();
