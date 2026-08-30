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
  var LS_KEY = 'lexis.prefs.v1';

  /* ------------------------- 偏好设置 preferences ------------------------- */
  var prefs = {
    accent: 'en-US',                  // 默认美音 / American by default
    rate: 0.9,                        // 语速 speech rate
    blind: false,                     // 听写模式 dictation mode
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
    var all = trackCats(prefs.track).map(function (c) { return c.id; });
    var sel = (prefs.catsByTrack[prefs.track] || []).filter(function (id) { return all.indexOf(id) >= 0; });
    return sel.length ? sel : all;          // 小类被改名或删掉时自动回到全选
  }

  /* ------------------ 复习队列 the review queue ------------------
     打错的词不进任何列表，而是隔一段自己回来，打对几次就消失。
     A missed word joins no list; it simply comes back later and fades out once mastered.

     { "idempotent": { n: 错过次数, t: 时间, tr: 大类, zh: 词意快照,
                       stage: 已连续答对几轮, reps: 已复习几次, due: 到第几个词时回来 } } */
  var MK_KEY = 'lexis.review.v1';
  var SEEN_KEY = 'lexis.seen.v1';
  var INTERVALS = [3, 12, 30];   // 隔多少个词回来一次；连过三轮即掌握 / three passes and it is done
  var MAX_REPS = 6;              // 最多复习这么多次，免得没完没了 / never nag beyond this

  var mistakes = {};
  try { mistakes = JSON.parse(localStorage.getItem(MK_KEY) || '{}') || {}; } catch (e) { mistakes = {}; }
  var seen = 0;
  try { seen = parseInt(localStorage.getItem(SEEN_KEY), 10) || 0; } catch (e) { seen = 0; }

  function saveMistakes() { try { localStorage.setItem(MK_KEY, JSON.stringify(mistakes)); } catch (e) {} }
  function saveSeen() { try { localStorage.setItem(SEEN_KEY, String(seen)); } catch (e) {} }
  function mistakeCount() { return Object.keys(mistakes).length; }

  // 只在某个大类里找这个词 / find the entry inside one track
  function findEntry(w, tr) {
    var list = window.TECHLEX_DATA[tr];
    if (!list) return null;
    for (var j = 0; j < list.length; j++) if (list[j].w === w) return list[j];
    return null;
  }

  // 到点该回来的那个词 —— 只在当前大类内复习，换了大类就不会串出别处的词
  // The word whose turn it is to come back — reviews stay inside the current track
  function dueWord(skip) {
    var best = null, bestDue = Infinity;
    for (var w in mistakes) {
      var m = mistakes[w];
      if (m.due > seen || w === skip) continue;
      if (m.due < bestDue && findEntry(w, prefs.track)) { best = w; bestDue = m.due; }
    }
    return best;
  }

  /* ------------------------------ DOM ------------------------------ */
  function $(id) { return document.getElementById(id); }
  var elWord   = $('wordLine'), elIpa = $('ipa'), elPos = $('pos'), elBadges = $('badges'),
      elTyper  = $('typer'),    elHint = $('hint'), elCounter = $('counter'),
      elPill   = $('catPill'),  elSpeak = $('speakBtn'), elCats = $('cats'),
      elCard   = document.querySelector('.word-card'),
      elDefEn  = $('defEn'), elDefZh = $('defZh'),
      elEtyEn  = $('etyEn'), elEtyZh = $('etyZh'), elBlockEty = $('blockEty'),
      elExEn   = $('exEn'),  elExZh  = $('exZh'),  elBlockEx  = $('blockEx'),
      elExEn2  = $('exEn2'), elExZh2 = $('exZh2'),
      elDone   = $('sDone'), elStreak = $('sStreak'),
      elAcc    = $('sAcc'),  elWpm = $('sWpm'),
      elDue = $('sDue'),
      elTrackOverlay = $('trackOverlay'), elTrackGroups = $('trackGroups'),
      elTrackBtn = $('trackBtn'), elTbZh = $('tbZh'), elTbN = $('tbN');

  /* ------------------------------ 状态 state ------------------------------ */
  var queue = [], idx = 0, cur = null, solved = false, lastLen = 0;
  var curErr = false;        // 本题是否打错过 / did this word get a wrong keystroke
  var reviewOf = null;        // 本题是不是回来复习的词 / is this a resurfaced word
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

  /* ---------------------------- 发音 pronunciation ---------------------------- */
  // 发音是构建时生成好的：Kokoro-82M（Apache 2.0）在本机离线跑出来的 mp3，存在 audio/ 下，
  // 运行时只播本地文件，不连任何外部服务。文件缺失时才退回浏览器自带的合成音。
  // Pronunciations are rendered at build time by Kokoro-82M (Apache 2.0) running locally and
  // shipped as mp3 under audio/. The page only plays local files; the browser's own speech
  // synthesis is the fallback when a file is missing.
  var AUDIO_DIR = 'audio/';

  // 文件名规则必须和 scripts/gen-audio.py 里的 slug() 一模一样
  // Must match slug() in scripts/gen-audio.py exactly
  function slug(w) {
    return w.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function recordingUrl(entry, accent) {
    var w = typeof entry === 'string' ? entry : (entry && entry.w);
    if (!w) return null;
    return AUDIO_DIR + (accent === 'en-GB' ? 'uk/' : 'us/') + slug(w) + '.mp3';
  }

  /* ------- 浏览器合成音，只在文件缺失时用 / synthesis, fallback only ------- */
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

  function synth(text) {
    if (!('speechSynthesis' in window) || !text) { busy(false); return; }
    try {
      window.speechSynthesis.cancel();
      setTimeout(function () {
        var u = new SpeechSynthesisUtterance(text);
        var v = pickVoice(prefs.accent);
        if (v) u.voice = v;
        u.lang = prefs.accent;
        u.rate = parseFloat(prefs.rate) || 0.9;
        u.onstart = function () { busy(true); };
        u.onend = u.onerror = function () { busy(false); };
        window.speechSynthesis.speak(u);
      }, 40);
    } catch (e) { busy(false); }
  }

  /* ---------------------- 播放 playback ---------------------- */
  var player = null, preloader = null, token = 0;
  function busy(on) {
    if (!elSpeak) return;
    elSpeak.classList.toggle('is-speaking', !!on);
  }

  function setRate(el) {
    var r = parseFloat(prefs.rate) || 0.9;
    try {
      el.playbackRate = r;
      // 变速不变调，各家前缀都设一遍 / keep the pitch when slowed down
      el.preservesPitch = true;
      el.mozPreservesPitch = true;
      el.webkitPreservesPitch = true;
    } catch (e) { /* 旧浏览器忽略 / older browsers */ }
  }

  var spoke = false;
  function speak(entry) {
    if (!entry) return;
    var word = typeof entry === 'string' ? entry : entry.w;
    if (!word) return;
    spoke = true;
    var mine = ++token;
    var url = typeof entry === 'string' ? null : recordingUrl(entry, prefs.accent);

    if ('speechSynthesis' in window) { try { window.speechSynthesis.cancel(); } catch (e) {} }
    if (player) { try { player.pause(); } catch (e) {} }

    if (!url) { synth(word); return; }

    try {
      if (!player) { player = new Audio(); player.preload = 'auto'; }
      player.onplaying = function () { if (mine === token) busy(true); };
      player.onended = function () { if (mine === token) busy(false); };
      // 文件缺失或解码失败就退回合成音 / fall back if the file will not load
      player.onerror = function () { if (mine === token) synth(word); };
      player.src = url;
      setRate(player);
      var play = player.play();
      if (play && play.catch) play.catch(function () { if (mine === token) synth(word); });
    } catch (e) { synth(word); }
  }

  // 提前把下一个词的录音拉进缓存 / warm the cache for the next word
  function preload(entry) {
    var url = entry && recordingUrl(entry, prefs.accent);
    if (!url) return;
    try {
      if (!preloader) { preloader = new Audio(); preloader.preload = 'auto'; preloader.muted = true; }
      preloader.src = url;
    } catch (e) { /* 拉不到就算了 / never mind */ }
  }

  /* ------------------------------ 队列 queue ------------------------------ */
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function buildQueue() {
    var sel = activeCats();
    var pool = trackData(prefs.track).filter(function (w) { return sel.indexOf(w.cat) >= 0; });
    if (!pool.length) pool = trackData(prefs.track).slice();
    // 有词源故事的词排在前面 —— 这是这个站的重点，不该靠用户自己去开关
    // Words that carry a story come first; that is the point of the site, not an option to toggle
    var withStory = [], rest = [];
    pool.forEach(function (w) { (w.hw ? withStory : rest).push(w); });
    queue = shuffle(withStory).concat(shuffle(rest));
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
      roundMsg = '🎉 本轮完成，已重新洗牌 · Round complete, reshuffled';
    }
    idx = i;

    // 打错过的词到点就自己回来，插在正常队列之前 / a missed word simply comes back
    var back = dueWord(cur && cur.w);
    if (back) { reviewOf = back; cur = findEntry(back, prefs.track); }
    else { reviewOf = null; cur = queue[idx]; }

    solved = false; lastLen = 0; curErr = false;
    seen++; saveSeen();
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
    if (reviewOf) {
      var m = mistakes[reviewOf];
      elPill.textContent = '复习 review · 第 ' + ((m.reps || 0) + 1) + ' 次';
      elPill.className = 'pill review';
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
    if (cur.hw) addBadge('词源故事 story', 'story');
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
    elExEn2.textContent = cur.s2 || ''; elExZh2.textContent = cur.z2 || '';
    elExEn2.hidden = elExZh2.hidden = !cur.s2;

    hint(roundMsg || (reviewOf ? '上次错过，这次凭听的打 · missed before — from memory now' : ''), '');
    paint('');
    speak(cur);
    preload(queue[idx + 1]);                       // 下一个词的录音先拉好 / warm the next one
    elTyper.focus();
  }

  function addBadge(text, kind) {
    var b = document.createElement('span');
    b.className = 'badge badge-' + kind;
    b.textContent = text;
    elBadges.appendChild(b);
  }

  function hint(text, cls) {
    elHint.textContent = text || '';
    elHint.className = 'typing-hint' + (cls ? ' ' + cls : '');
    elHint.hidden = !text;
  }

  // 什么时候把拼写藏起来：听写模式，或者这是一道复习题
  // When to hide the spelling: dictation mode, or when the word came back for review
  function masked() { return (prefs.blind || !!reviewOf) && !solved; }

  // 逐字母上色 / paint the word letter by letter
  //   看得见拼写时：对=绿、错=红，边打边给反馈
  //   看不见拼写时：只把你打的字母原样显示出来，写完之前不透露对错
  // With the word on screen: live green/red. Blind: show what you typed, and say nothing until the end.
  function paint(typed) {
    if (!cur) return;
    var target = cur.w, spans = elWord.children, wrong = false, blind = masked();
    for (var i = 0; i < target.length; i++) {
      var s = spans[i], cls = 'ch' + (target[i] === ' ' ? ' space' : '');
      s.textContent = target[i];

      if (blind) {                                   // 盲写中：不做任何判断 / no verdict while blind
        if (i < typed.length) { s.textContent = typed[i]; cls += ' typed'; }
        else { cls += ' masked'; if (i === typed.length) cls += ' cur'; }
        s.className = cls;
        continue;
      }

      if (i < typed.length) {
        if (typed[i].toLowerCase() === target[i].toLowerCase()) cls += ' done';
        else { cls += ' wrong'; wrong = true; }
      } else if (i === typed.length) {
        cls += ' cur';
      }
      s.className = cls;
    }
    return wrong;
  }

  // 写完了吗、写对了吗 / has the attempt finished, and was it right
  function isRight(typed) { return typed.toLowerCase() === cur.w.toLowerCase(); }

  /* ------------------------- 输入处理 typing handler ------------------------- */
  function onInput() {
    if (!elTrackOverlay.hidden) { elTyper.value = ''; lastLen = 0; return; }
    if (!cur || solved) { elTyper.value = elTyper.value.slice(0, cur ? cur.w.length : 0); return; }
    var typed = elTyper.value.slice(0, cur.w.length);   // 不允许超长 / cap at word length
    if (elTyper.value !== typed) elTyper.value = typed;

    if (!stats.start && typed.length) stats.start = Date.now();

    var blind = masked();

    // 只在"新增了一个字符"时计一次按键 / count a keystroke only when a char is added
    if (typed.length > lastLen) {
      var i = typed.length - 1;
      stats.keys++;
      if (typed[i].toLowerCase() === cur.w[i].toLowerCase()) stats.ok++;
      else {
        stats.errs++;
        // 看得见拼写时立刻提示手滑；盲写时什么都不说，等写完一起算
        // With the word on screen, flag the slip at once. Blind, stay silent until the end.
        if (!blind) {
          blip();
          elWord.classList.remove('shake');
          void elWord.offsetWidth;                      // 触发重排以重放动画 / restart animation
          elWord.classList.add('shake');
        }
      }
    }
    lastLen = typed.length;

    paint(typed);
    if (typed.length === cur.w.length) {                // 写满了才结算 / judge only when finished
      if (isRight(typed)) return success();
      if (blind) return missed(typed);                  // 盲写写完还是错的，才算错
    }
    updateStats();
  }

  var stats = { done: 0, streak: 0, keys: 0, errs: 0, ok: 0, start: 0 };

  // 什么时候的错才算数：看不见拼写、而且已经写完 —— 中途打错又改回来的不算
  // What counts: a finished blind attempt. A typo you caught and fixed does not.
  function counts() { return prefs.blind || !!reviewOf; }

  // 打错了：把这个词排进复习队列，隔几个词就回来 / schedule the word to come back
  function noteMistake() {
    if (!cur || curErr || !counts()) return;
    curErr = true;
    var e = mistakes[cur.w] || { n: 0, reps: 0 };
    e.n++; e.t = Date.now();
    e.tr = e.tr || prefs.track;
    e.zh = cur.zh || '';
    e.stage = 0;                                   // 又错了就从头来 / start the ladder again
    e.due = seen + INTERVALS[0];
    mistakes[cur.w] = e;
    saveMistakes(); updateDue();
  }

  function clearMistake(w) {
    if (mistakes[w]) { delete mistakes[w]; saveMistakes(); updateDue(); }
  }

  // 复习题答完之后往上走一级；连过三轮就算掌握，悄悄消失
  // After a review, climb one rung; three clean passes and the word quietly retires
  function advanceReview() {
    var m = mistakes[reviewOf];
    if (!m) return;
    m.reps = (m.reps || 0) + 1;
    if (curErr) {
      m.stage = 0;
      m.due = seen + INTERVALS[0];
    } else {
      m.stage = (m.stage || 0) + 1;
      if (m.stage >= INTERVALS.length) { delete mistakes[reviewOf]; saveMistakes(); updateDue(); return; }
      m.due = seen + INTERVALS[m.stage];
    }
    if (m.reps >= MAX_REPS) delete mistakes[reviewOf];   // 别没完没了 / stop nagging
    saveMistakes(); updateDue();
  }

  function success() {
    solved = true;
    if (reviewOf) advanceReview();                       // 复习题：这一轮算过
    else if (counts()) clearMistake(cur.w);              // 盲写一次写对就算掌握
    stats.done++; stats.streak++;
    elCard.classList.add('is-solved');
    paint(cur.w);                                       // 全绿并揭示答案 / all green, reveal
    ding();
    hint('', 'ok');
    updateStats();
    var next = reviewOf ? idx : idx + 1;             // 复习题不占用正常队列的位置
    setTimeout(function () { load(next); }, 780);
  }

  // 盲写写完了，但和正确拼写不一样 —— 这才算真的错
  // Finished blind and it does not match. This is the only thing that counts as wrong.
  function missed(typed) {
    solved = true;
    stats.streak = 0;
    if (reviewOf) { curErr = true; advanceReview(); }   // 复习题答错：退回第一档
    else noteMistake();                                 // 新错的词：排进复习队列（它自己会置 curErr）
    blip();
    elWord.classList.remove('shake');
    void elWord.offsetWidth;
    elWord.classList.add('shake');
    // 亮出正确拼写：对的字母绿，错的位置红
    for (var i = 0; i < cur.w.length; i++) {
      var sp = elWord.children[i];
      sp.textContent = cur.w[i];
      sp.className = 'ch' + (cur.w[i] === ' ' ? ' space' : '') +
        (typed[i] && typed[i].toLowerCase() === cur.w[i].toLowerCase() ? ' done' : ' wrong');
    }
    hint('你打的是 ' + typed + ' · you typed ' + typed, 'err');
    updateStats();
    var nextIdx = reviewOf ? idx : idx + 1;
    setTimeout(function () { load(nextIdx); }, 1800);
  }

  function skip() {
    if (!cur || solved) return;
    if (counts() && !reviewOf) noteMistake();   // 看不见拼写却放弃了，算不会
    solved = true; curErr = true; stats.streak = 0;
    for (var i = 0; i < elWord.children.length; i++) {   // 取消遮罩，露出正确拼写 / unmask
      elWord.children[i].className = 'ch' + (cur.w[i] === ' ' ? ' space' : '');
      elWord.children[i].textContent = cur.w[i];
    }
    hint('已跳过：' + cur.w + ' · skipped', 'err');
    updateStats();
    var nextIdx = reviewOf ? idx : idx + 1;
    if (reviewOf) advanceReview();
    setTimeout(function () { load(nextIdx); }, 900);
  }

  function updateDue() { elDue.textContent = mistakeCount(); }

  function updateStats() {
    elDone.textContent = stats.done;
    elStreak.textContent = stats.streak;
    elAcc.textContent = stats.keys ? Math.round(stats.ok / stats.keys * 100) + '%' : '100%';
    var mins = stats.start ? (Date.now() - stats.start) / 60000 : 0;
    elWpm.textContent = mins > 0.02 ? Math.round((stats.ok / 5) / mins) : 0;
  }

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
    if (tid === prefs.track && trackData(tid).length) return;
    prefs.track = tid;
    savePrefs(); syncTrackBtn(); renderChips();
    hint('正在载入「' + (trackById(tid) || {}).zh + '」… · loading…', '');
    elCounter.textContent = '… / ' + (TCOUNT[tid] || 0);
    loadTrack(tid, function () { buildQueue(); load(0); updateDue(); });
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
        buildQueue(); load(0); updateDue();
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
    speak(cur);
    elTyper.focus();
  });

  // 语速 rate
  $('rate').value = prefs.rate;
  $('rate').addEventListener('change', function () {
    prefs.rate = parseFloat(this.value); savePrefs(); speak(cur);
  });

  // 听写模式：一个按钮，不是复选框 / dictation is a button, not a checkbox
  var elBlind = $('blindMode');
  function syncBlind() {
    elBlind.classList.toggle('is-on', !!prefs.blind);
    elBlind.setAttribute('aria-pressed', prefs.blind ? 'true' : 'false');
  }
  syncBlind();
  elBlind.addEventListener('click', function () {
    prefs.blind = !prefs.blind; savePrefs(); syncBlind();
    paint(elTyper.value); elTyper.focus();
  });

  // 重听 replay
  elSpeak.addEventListener('click', function () { speak(cur); elTyper.focus(); });

  /* ------------------------------ 键盘 keyboard ------------------------------ */
  elTyper.addEventListener('input', onInput);

  document.addEventListener('keydown', function (e) {
    var onControl = e.target !== elTyper && e.target.closest &&
                    e.target.closest('input, button, select, a');
    if (onControl && e.key !== 'Escape') return;   // 让控件自己处理按键 / let controls keep their keys
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) speak(cur);
      else if (!solved) skip();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (!elTrackOverlay.hidden) return closeTrackSheet();
      elTyper.value = ''; lastLen = 0; paint('');
    }
    if (!elTrackOverlay.hidden) return;                        // 面板打开时不抢焦点
    if (document.activeElement !== elTyper) elTyper.focus();
  });

  // 点击页面任意空白处都回到输入状态 / clicking anywhere returns focus to the input
  document.addEventListener('click', function (e) {
    if (e.target.closest('button, input, label, a')) return;
    if (!elTrackOverlay.hidden) return;
    elTyper.focus();
  });

  // iOS/Safari 需要用户手势后才能发音 / some browsers need a gesture before speaking
  ['pointerdown', 'keydown'].forEach(function (evt) {
    window.addEventListener(evt, function once() {
      audio();
      if (!spoke) speak(cur);
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
  updateDue();
  hint('正在载入词库… · loading…', '');
  loadTrack(prefs.track, function () { buildQueue(); load(0); });
  setInterval(updateStats, 2000);   // 让 WPM 持续刷新 / keep WPM ticking
})();
