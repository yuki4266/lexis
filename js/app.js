/* ==========================================================
   TechLex — 主逻辑 / main logic
   发音 speech · 逐字母校对 letter-by-letter check · 统计 stats
   ========================================================== */
(function () {
  'use strict';

  var WORDS = window.WORDS || [];
  var CATS  = window.CATEGORIES || [];
  var LS_KEY = 'techlex.prefs.v2';

  /* ------------------------- 偏好设置 preferences ------------------------- */
  var prefs = {
    accent: 'en-US',                  // 默认美音 / American by default
    rate: 0.9,                        // 语速 speech rate
    blind: false,                     // 听写模式 dictation mode
    cats: CATS.map(function (c) { return c.id; })
  };
  try {
    var saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    for (var k in saved) if (saved[k] !== undefined && saved[k] !== null) prefs[k] = saved[k];
  } catch (e) { /* localStorage 不可用时忽略 / ignore */ }
  if (!prefs.cats || !prefs.cats.length) prefs.cats = CATS.map(function (c) { return c.id; });

  function savePrefs() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(prefs)); } catch (e) {}
  }

  /* --------------------- 错题本 mistakes book ---------------------
     结构 / shape: { "idempotent": { n: 错误次数 times missed, t: 最后一次 last seen } } */
  var MK_KEY = 'techlex.mistakes.v1';
  var mistakes = {};
  try { mistakes = JSON.parse(localStorage.getItem(MK_KEY) || '{}') || {}; } catch (e) { mistakes = {}; }

  function saveMistakes() {
    try { localStorage.setItem(MK_KEY, JSON.stringify(mistakes)); } catch (e) {}
  }
  function mistakeCount() { return Object.keys(mistakes).length; }

  /* ------------------------------ DOM ------------------------------ */
  function $(id) { return document.getElementById(id); }
  var elWord   = $('wordLine'), elIpa = $('ipa'), elPos = $('pos'),
      elTyper  = $('typer'),    elHint = $('hint'), elCounter = $('counter'),
      elPill   = $('catPill'),  elSpeak = $('speakBtn'), elCats = $('cats'),
      elCard   = document.querySelector('.word-card'),
      elDefEn  = $('defEn'), elDefZh = $('defZh'),
      elEtyEn  = $('etyEn'), elEtyZh = $('etyZh'),
      elExEn   = $('exEn'),  elExZh  = $('exZh'),
      elDone   = $('sDone'), elStreak = $('sStreak'),
      elAcc    = $('sAcc'),  elWpm = $('sWpm'),
      elOverlay = $('overlay'), elMList = $('mlist'), elMEmpty = $('mEmpty'),
      elMCount = $('mCount'), elMBtn = $('mistakeBtn'), elDrill = $('drillBtn');

  /* ------------------------------ 状态 state ------------------------------ */
  var queue = [], idx = 0, cur = null, solved = false, lastLen = 0;
  var curErr = false;        // 本题是否打错过 / did this word get a wrong keystroke
  var drill = false;         // 是否处于"只练错题"模式 / drilling the mistakes book
  var justEmptied = false;   // 错题刚清空 / the book just emptied
  var stats = { done: 0, streak: 0, keys: 0, errs: 0, ok: 0, start: 0 };

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
  // 各口音下优先挑选的音色 / preferred voice names per accent
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

  function buildQueue(keepWord) {
    var pool = null;
    if (drill) {                                   // 错题模式只取错题 / drill only the missed words
      pool = WORDS.filter(function (w) { return !!mistakes[w.w]; });
      if (!pool.length) { drill = false; justEmptied = true; pool = null; }
    }
    if (!pool) pool = WORDS.filter(function (w) { return prefs.cats.indexOf(w.cat) >= 0; });
    if (!pool.length) pool = WORDS.slice();
    queue = shuffle(pool.slice());
    idx = 0;
    if (keepWord) {
      var at = queue.indexOf(keepWord);
      if (at > 0) { queue.splice(at, 1); queue.unshift(keepWord); }
    }
  }

  function catLabel(id) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i];
    return { zh: '', en: '' };
  }

  /* ------------------------------ 渲染 render ------------------------------ */
  function load(i) {
    var roundMsg = '';
    if (i >= queue.length) {                       // 一轮结束，重新洗牌 / round over, reshuffle
      buildQueue(); i = 0;
      roundMsg = drill
        ? '错题再来一轮 · Another pass over the mistakes'
        : '🎉 本轮完成，已重新洗牌 · Round complete, reshuffled';
    }
    if (justEmptied) {
      justEmptied = false;
      roundMsg = '🎉 错题全部掌握，已回到全部词库 · Mistakes all cleared, back to the full list';
    }
    idx = i;
    cur = queue[idx];
    solved = false; lastLen = 0; curErr = false;
    elTyper.value = '';
    elCard.classList.remove('is-solved');

    // 单词逐字母渲染 / render the word letter by letter
    elWord.innerHTML = '';
    for (var c = 0; c < cur.w.length; c++) {
      var s = document.createElement('span');
      s.className = 'ch';
      s.textContent = cur.w[c];
      elWord.appendChild(s);
    }

    var cat = catLabel(cur.cat);
    if (drill) {
      elPill.textContent = '错题模式 Drill · 点此返回全部';
      elPill.className = 'pill drill';
    } else {
      elPill.textContent = cat.zh + ' · ' + cat.en;
      elPill.className = 'pill';
    }
    elCounter.textContent = (idx + 1) + ' / ' + queue.length;
    elIpa.textContent = (prefs.accent === 'en-GB' ? 'UK ' : 'US ') + (prefs.accent === 'en-GB' ? cur.uk : cur.us);
    elPos.textContent = cur.pos;

    elDefEn.textContent = cur.en; elDefZh.textContent = cur.zh;
    elEtyEn.textContent = cur.oe; elEtyZh.textContent = cur.oz;
    elExEn.textContent  = cur.se; elExZh.textContent  = cur.sz;

    hint(roundMsg || (prefs.blind
      ? '听写模式：只听发音，直接输入 · Dictation: type what you hear'
      : '开始打字，逐字母实时校对 · Start typing, checked letter by letter'), '');
    paint('');
    speak(cur.w);
    elTyper.focus();
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
      var s = spans[i], cls = 'ch';
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
    if (!elOverlay.hidden) { elTyper.value = ''; lastLen = 0; return; }
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

  // 记一次错题 / record the current word as missed
  function noteMistake() {
    if (!cur || curErr) return;
    curErr = true;
    var e = mistakes[cur.w] || { n: 0, t: 0 };
    e.n++; e.t = Date.now();
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
    paint(cur.w.slice(0, 0));                           // 取消遮罩，露出正确拼写 / unmask
    for (var i = 0; i < elWord.children.length; i++) {
      elWord.children[i].className = 'ch';
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
    elDrill.textContent = drill ? '返回全部词 Back to all' : '只练错题 Drill these';
  }

  function wordByKey(k) {
    for (var i = 0; i < WORDS.length; i++) if (WORDS[i].w === k) return WORDS[i];
    return null;
  }

  function renderMistakes() {
    var keys = Object.keys(mistakes).sort(function (a, b) {
      return (mistakes[b].n - mistakes[a].n) || (mistakes[b].t - mistakes[a].t);
    });
    elMList.innerHTML = '';
    elMEmpty.hidden = keys.length > 0;

    keys.forEach(function (k) {
      var wd = wordByKey(k);
      if (!wd) { delete mistakes[k]; return; }         // 词库里删掉的词 / word no longer in the bank
      var li = document.createElement('li');
      li.className = 'mitem';

      var w = document.createElement('span');
      w.className = 'mw'; w.textContent = wd.w;

      var m = document.createElement('span');
      m.className = 'mm'; m.textContent = wd.zh;

      var n = document.createElement('span');
      n.className = 'mn'; n.textContent = '错 ' + mistakes[k].n;

      var play = document.createElement('button');
      play.className = 'icon-btn'; play.textContent = '🔊';
      play.setAttribute('aria-label', '朗读 ' + wd.w);
      play.addEventListener('click', function () { speak(wd.w); });

      var del = document.createElement('button');
      del.className = 'icon-btn'; del.textContent = '✕';
      del.setAttribute('aria-label', '移出错题本 remove ' + wd.w);
      del.addEventListener('click', function () {
        clearMistake(k); renderMistakes();
      });

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

  // 进入 / 退出错题练习 / enter or leave the drill
  elDrill.addEventListener('click', function () {
    if (!drill && !mistakeCount()) return;
    drill = !drill;
    buildQueue(); load(0);
    updateMCount(); closeSheet();
  });

  $('clearBtn').addEventListener('click', function () {
    mistakes = {}; saveMistakes();
    if (drill) { drill = false; buildQueue(); load(0); }
    renderMistakes(); updateMCount();
  });

  // 点分类标签可退出错题模式 / clicking the drill pill returns to the full list
  elPill.addEventListener('click', function () {
    if (!drill) return;
    drill = false; buildQueue(); load(0); updateMCount();
  });

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
    if (cur) elIpa.textContent = (prefs.accent === 'en-GB' ? 'UK ' : 'US ') + (prefs.accent === 'en-GB' ? cur.uk : cur.us);
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

  // 重听 replay
  elSpeak.addEventListener('click', function () { speak(cur && cur.w); elTyper.focus(); });

  // 分类筛选 category chips
  CATS.forEach(function (c) {
    var b = document.createElement('button');
    b.className = 'cat-chip' + (prefs.cats.indexOf(c.id) >= 0 ? ' is-on' : '');
    b.textContent = c.zh + ' · ' + c.en;
    b.dataset.cat = c.id;
    b.addEventListener('click', function () {
      var at = prefs.cats.indexOf(c.id);
      if (at >= 0) {
        if (prefs.cats.length === 1) return;            // 至少保留一类 / keep at least one
        prefs.cats.splice(at, 1);
      } else {
        prefs.cats.push(c.id);
      }
      b.classList.toggle('is-on');
      savePrefs();
      buildQueue();
      load(0);
    });
    elCats.appendChild(b);
  });

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
      if (!elOverlay.hidden) return closeSheet();
      elTyper.value = ''; lastLen = 0; paint(''); hint('已重来 · reset', '');
    }
    if (!elOverlay.hidden) return;                 // 面板打开时不抢焦点 / don't steal focus while open
    if (document.activeElement !== elTyper) elTyper.focus();
  });

  // 点击页面任意空白处都回到输入状态 / clicking anywhere returns focus to the input
  document.addEventListener('click', function (e) {
    if (e.target.closest('button, input, label, a')) return;
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
  // 口音按钮与偏好保持一致 / sync the accent buttons with the stored preference
  Array.prototype.forEach.call(document.querySelectorAll('#accentSeg .seg-btn'), function (b) {
    var on = b.dataset.accent === prefs.accent;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-checked', on ? 'true' : 'false');
  });

  updateMCount();
  buildQueue();
  load(0);
  setInterval(updateStats, 2000);   // 让 WPM 持续刷新 / keep WPM ticking
})();
