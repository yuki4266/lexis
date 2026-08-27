/*
 * TechLex 构建脚本 / build script
 * ---------------------------------------------------------------
 *   node scripts/build.mjs
 *
 * 输入 / inputs:
 *   data/schema.mjs               大类与小类定义 tracks & categories
 *   data/headwords/<track>.txt    词表（词典打底层）headword lists
 *       格式 / format:  一行一词；"## cat: <id>" 切换小类
 *                       word                      → 全用词典释义 use the dictionary
 *                       word | 中文域内释义        → 覆盖中文，词典只供音标/词性/英文
 *                       word | 中文释义 | English  → 两个都覆盖
 *                       word || English            → 只覆盖英文
 *                       word | 中文 | English | 例句 | 例句中文  → 连例句一起给
 *       "## auto: tag=gre limit=250 exclude=zk,gk,cet4" 从词典按考试标签自动取词
 *       pull words straight from the dictionary by exam tag
 *   data/handwritten/<track>.mjs  手写完整条目（含词源例句）hand-written entries
 *   vendor/ecdict.csv             ECDICT 词典 (MIT)
 *
 * 输出 / outputs:
 *   js/manifest.js                大类/小类/词数，随首页加载
 *   js/data/<track>.js            各大类词条，按需加载
 *   build.log                     缺词、重复、冲突报告
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { GROUPS, TRACKS, CATEGORIES } from '../data/schema.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const p = (...a) => path.join(ROOT, ...a);
const log = [];
const note = (s) => { log.push(s); };

/* ------------------------------ CSV ------------------------------ */
// 解析一行 CSV（支持引号、双引号转义）/ parse one CSV row
function parseRow(line) {
  const out = []; let cur = ''; let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; }
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

/* --------------------------- 文本清洗 --------------------------- */
// ECDICT 的释义里用字面量 \n 分隔义项 / senses are separated by a literal \n
const senses = (s) => (s || '').split(/\\n|\n/).map(x => x.trim()).filter(Boolean);

// 词典释义里的词性前缀 / the part-of-speech prefix inside a sense
const POS_RE = /^(n|v|vt|vi|a|adj|ad|adv|prep|pron|conj|int|interj|num|aux|abbr|pl|s|r)\.\s*/i;
// WordNet 式前缀可能不带句点："n a variable quantity" / prefix may lack the period
const POS_RE2 = /^([nvasr])\s+(?=[a-z])/;
const POS_NORM = { n: 'n.', v: 'v.', vt: 'v.', vi: 'v.', a: 'adj.', adj: 'adj.', ad: 'adv.', adv: 'adv.',
                   s: 'adj.', r: 'adv.', prep: 'prep.', pron: 'pron.', conj: 'conj.',
                   int: 'interj.', interj: 'interj.', num: 'num.', aux: 'aux.', abbr: 'abbr.' };

// 中文释义：去掉词性前缀，优先非 [领域] 标注的义项 / clean the Chinese gloss
function cleanZh(translation) {
  let list = senses(translation)
    .filter(s => !/^\[(网络|俚|习)/.test(s))
    .map(s => s.replace(POS_RE, '').replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  const plain = list.filter(s => !s.startsWith('['));
  if (plain.length) list = plain;                   // 优先普通义项 / prefer unbracketed senses
  return list.slice(0, 2).join('；').replace(/[,，、]\s*$/, '').slice(0, 80);
}

// 英文释义：只留一条，去掉 WordNet 的 n./s./v. 前缀 / one WordNet sense, prefix stripped
function cleanEn(definition) {
  const first = senses(definition).map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean)[0] || '';
  let out = first.replace(POS_RE, '').replace(POS_RE2, '');
  if (out.length > 130) out = out.slice(0, 127).replace(/[\s,;]+\S*$/, '') + '…';
  return out.charAt(0).toUpperCase() + out.slice(1);
}

// 词性：优先取释义里的前缀，其次取 ECDICT 的 pos 分布 / part of speech
const POS_MAP = { n: 'n.', v: 'v.', j: 'adj.', r: 'adv.', a: 'adj.', p: 'prep.', c: 'conj.', i: 'interj.', u: 'pron.', m: 'num.', t: 'part.', x: '' };
function derivePos(translation, definition, posField) {
  for (const src of [translation, definition]) {
    const first = senses(src)[0] || '';
    const m = POS_RE.exec(first) || POS_RE2.exec(first);
    if (m) return POS_NORM[m[1].toLowerCase()] || '';
  }
  const top = (posField || '').split('/').map(x => x.split(':')).sort((a, b) => (+b[1] || 0) - (+a[1] || 0))[0];
  return (top && POS_MAP[top[0]]) || '';
}

// ECDICT 的音标不带斜杠 / the dictionary stores phonetics without slashes
const wrapPh = (s) => { s = (s || '').trim(); return s ? '/' + s.replace(/^\/|\/$/g, '') + '/' : ''; };

// 词频：frq/bnc 为 0 表示未知，排到最后 / 0 means unknown, sort last
const rank = (frq, bnc) => {
  const a = +frq || 0, b = +bnc || 0;
  const v = a && b ? Math.min(a, b) : (a || b || 0);
  return v || 999999;
};

const EXAM_TAGS = ['gre', 'toefl', 'ielts', 'cet6', 'ky', 'cet4', 'gk', 'zk'];
// 难度下限：只收六级以上 / difficulty floor — CET-6 and above only
const ADVANCED = new Set(['gre', 'toefl', 'ielts', 'cet6', 'ky']);
const EASY = new Set(['zk', 'gk', 'cet4']);
const RARE_RANK = 6000;   // 词频排名比这更靠后就算生僻，本身就不简单
const pickTag = (tag) => {
  const has = (tag || '').split(/\s+/).filter(Boolean);
  for (const t of EXAM_TAGS) if (has.includes(t)) return t;
  return '';
};

/* --------------------------- 读取输入 --------------------------- */
const catById = new Map(CATEGORIES.map(c => [c.id, c]));
const catsOf = (tid) => CATEGORIES.filter(c => c.track === tid);

// 1) 手写条目 / hand-written entries
const handwritten = new Map();   // track -> [entry]
for (const t of TRACKS) {
  const f = p('data', 'handwritten', t.id + '.mjs');
  if (!fs.existsSync(f)) continue;
  const mod = await import(pathToFileURL(f).href + '?v=' + Date.now());
  const list = mod.default || [];
  list.forEach(e => {
    if (!catById.has(e.cat)) note(`! 手写条目小类无效 bad cat: ${t.id}/${e.w} -> ${e.cat}`);
    else if (catById.get(e.cat).track !== t.id) note(`! 手写条目跨大类 wrong track: ${e.w} (${e.cat}) in ${t.id}`);
  });
  handwritten.set(t.id, list);
}

// 2) 词表 / headword lists，格式：一行一词；"## cat: <id>" 切换小类；"word | cat" 单行指定
const headwords = new Map();     // track -> [{w, cat}]
const autoRules = new Map();     // track -> [{cat, tag, limit, exclude}]
for (const t of TRACKS) {
  const f = p('data', 'headwords', t.id + '.txt');
  if (!fs.existsSync(f)) { headwords.set(t.id, []); continue; }
  const rows = [];
  const autos = [];
  let cur = catsOf(t.id)[0]?.id;
  for (const raw of fs.readFileSync(f, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) {
      const m = /^##\s*cat:\s*(\S+)/.exec(line);
      if (m) {
        if (!catById.has(m[1])) note(`! 词表小类无效 bad cat header: ${t.id} -> ${m[1]}`);
        else cur = m[1];
        continue;
      }
      const a = /^##\s*auto:\s*(.+)$/.exec(line);
      if (a) {
        const opt = {};
        a[1].split(/\s+/).forEach(kv => { const [x, y] = kv.split('='); if (x) opt[x] = y; });
        autos.push({ cat: cur, tag: opt.tag, limit: +opt.limit || 200,
                     exclude: (opt.exclude || '').split(',').filter(Boolean) });
      }
      continue;
    }
    const [w, zh, en, se, sz] = line.split('|').map(x => x.trim());
    rows.push({ w: w.toLowerCase(), cat: cur, zh: zh || '', en: en || '', se: se || '', sz: sz || '' });
  }
  headwords.set(t.id, rows);
  if (autos.length) autoRules.set(t.id, autos);
}

/* ------- 按考试标签从词典自动取词 / auto-fill from the dictionary by exam tag ------- */
// 只在有 auto 指令时才全量扫一遍词典 / full scan only when some track asks for it
const byTag = new Map();
if (autoRules.size && fs.existsSync(p('vendor', 'ecdict.csv'))) {
  const wanted = new Set();
  autoRules.forEach(rules => rules.forEach(r => wanted.add(r.tag)));
  const text = fs.readFileSync(p('vendor', 'ecdict.csv'), 'utf8');
  let start = text.indexOf('\n') + 1;
  while (start < text.length) {
    let end = text.indexOf('\n', start);
    if (end < 0) end = text.length;
    const line = text.slice(start, end);
    start = end + 1;
    if (line.indexOf('gre') < 0 && line.indexOf('toefl') < 0 && line.indexOf('ielts') < 0 &&
        line.indexOf('cet6') < 0 && line.indexOf('ky') < 0) continue;   // 便宜的预筛 / cheap prefilter
    const f = parseRow(line);
    const w = (f[0] || '').toLowerCase();
    if (!w || !/^[a-z][a-z-]{2,}$/.test(w)) continue;                    // 只要单个英文词 / plain words only
    const tags = (f[7] || '').split(/\s+/).filter(Boolean);
    const rec = { w, phonetic: f[1], definition: f[2], translation: f[3], pos: f[4], tag: f[7], bnc: f[8], frq: f[9], tags };
    tags.forEach(tg => { if (wanted.has(tg)) { if (!byTag.has(tg)) byTag.set(tg, []); byTag.get(tg).push(rec); } });
  }
  byTag.forEach(list => list.sort((a, b) => rank(a.frq, a.bnc) - rank(b.frq, b.bnc)));
}

/* --------------------- 查词典（只查需要的词）--------------------- */
const needed = new Set();
for (const t of TRACKS) {
  const hw = new Set((handwritten.get(t.id) || []).map(e => e.w.toLowerCase()));
  (headwords.get(t.id) || []).forEach(r => { if (!hw.has(r.w)) needed.add(r.w); });
}

const dict = new Map();
const CSV = p('vendor', 'ecdict.csv');
if (needed.size && fs.existsSync(CSV)) {
  const text = fs.readFileSync(CSV, 'utf8');
  let start = text.indexOf('\n') + 1;              // 跳过表头 skip header
  while (start < text.length) {
    let end = text.indexOf('\n', start);
    if (end < 0) end = text.length;
    // 先看第一列，命中才整行解析 / cheap prefix check before full parse
    const comma = text.indexOf(',', start);
    if (comma > start && comma < end) {
      const key = text.slice(start, comma).replace(/^"|"$/g, '').toLowerCase();
      if (needed.has(key) && !dict.has(key)) {
        const f = parseRow(text.slice(start, end));
        dict.set(key, { phonetic: f[1], definition: f[2], translation: f[3], pos: f[4], tag: f[7], bnc: f[8], frq: f[9] });
      }
    }
    start = end + 1;
  }
} else if (needed.size) {
  note('! 找不到 vendor/ecdict.csv，先跑 node scripts/fetch-dict.mjs');
}

/* ----------------------- 合并、去重、排序 ----------------------- */
const seen = new Map();                            // word -> track（全局唯一）
const byTrack = new Map();
const missing = [];
const dupes = [];
const noPhon = [];      // 词典查不到、靠人工释义收录的词 / kept via manual gloss, no IPA
const needGloss = [];   // 释义质量差、建议人工校订 / dictionary gloss looks poor
const tooEasy = [];     // 太简单，被难度闸门挡掉 / dropped by the difficulty floor

// 手写条目是全局资产：一个词在别的大类的词表里出现时，直接复用它的词源与例句，
// 只把小类改成那个大类的。大类之间允许重复 —— 每个大类本来就是一套独立词库。
// Hand-written entries are global assets: if another track lists the same word, reuse the
// full entry (etymology and all) under that track's category. Tracks may overlap by design.
const hwIndex = new Map();                    // word -> 手写条目 / the hand-written entry
for (const t of TRACKS) {
  for (const e of (handwritten.get(t.id) || [])) {
    const k = e.w.toLowerCase();
    if (!hwIndex.has(k)) hwIndex.set(k, e);
    else dupes.push(`${e.w}: ${t.id} 与 ${catById.get(hwIndex.get(k).cat).track} 都有手写条目`);
  }
}

for (const t of TRACKS) {
  const out = [];
  const local = new Set();                    // 大类内去重 / unique within the track

  for (const e of (handwritten.get(t.id) || [])) {
    const k = e.w.toLowerCase();
    if (local.has(k)) continue;
    local.add(k);
    out.push({ ...e, hw: 1, r: 0 });
  }

  for (const row of (headwords.get(t.id) || [])) {
    const k = row.w;
    if (local.has(k)) continue;
    local.add(k);

    const borrowed = hwIndex.get(k);
    if (borrowed) {                           // 借用别处的手写条目，换成本大类的小类
      out.push({ ...borrowed, cat: row.cat, zh: row.zh || borrowed.zh, hw: 1, r: 0 });
      continue;
    }

    const d = dict.get(k) || (row.zh ? { phonetic: '', definition: '', translation: '', pos: '', tag: '', bnc: 0, frq: 0 } : null);
    if (!d) { missing.push(`${t.id}\t${k}`); continue; }
    if (!dict.get(k)) noPhon.push(`${t.id}\t${k}`);      // 词典没有，音标待补 / IPA still to add
    const zh = row.zh || cleanZh(d.translation);          // 手填的域内释义优先 / manual gloss wins
    // 只给了中文域内释义时宁可留白，也不挂一条可能矛盾的通用英文释义
    const en = row.en || (row.zh ? '' : cleanEn(d.definition));
    if (!zh) { missing.push(`${t.id}\t${k}\t(无中文释义 no Chinese gloss)`); continue; }
    // 难度闸门：词典层条目必须够难 —— 有六级以上标签，或本身就够生僻
    // Difficulty gate: a dictionary-tier word must be CET-6+ tagged, or rare enough
    const tags = (d.tag || '').split(/\s+/).filter(Boolean);
    const rk = rank(d.frq, d.bnc);
    if (!row.zh) {
      const advanced = tags.some(x => ADVANCED.has(x));
      const easy = tags.some(x => EASY.has(x));
      if (!advanced && (easy || rk < RARE_RANK)) { tooEasy.push(`${t.id}\t${k}\t${tags.join(',') || '-'}\t${rk}`); continue; }
    }
    const entry = { w: k, ph: wrapPh(d.phonetic), pos: derivePos(d.translation, d.definition, d.pos),
                    cat: row.cat, en, zh, r: rk };
    if (row.se) { entry.se = row.se; entry.sz = row.sz || ''; }   // 词表里也能带例句 / examples from the list
    if (row.zh) entry.g = 1;                              // 已人工校订 / curated gloss
    else if (zh.startsWith('[') || zh.length < 4 || !en)  // 词典义太差，标记待校订
      needGloss.push(`${t.id}\t${k}\t${zh}`);
    const tag = pickTag(d.tag); if (tag) entry.tag = tag;
    out.push(entry);
  }

  // 按考试标签自动补词 / auto-fill by exam tag
  for (const rule of (autoRules.get(t.id) || [])) {
    const src = byTag.get(rule.tag) || [];
    let taken = 0;
    for (const d of src) {
      if (taken >= rule.limit) break;
      if (local.has(d.w)) continue;
      if (rule.exclude.some(x => d.tags.includes(x))) continue;   // 排除太简单的词 / drop the easy ones
      if (!d.tags.some(x => ADVANCED.has(x)) && rank(d.frq, d.bnc) < RARE_RANK) continue;
      const zh = cleanZh(d.translation);
      const en = cleanEn(d.definition);
      if (!zh || zh.startsWith('[') || zh.length < 3) continue;
      local.add(d.w); taken++;
      const entry = { w: d.w, ph: wrapPh(d.phonetic), pos: derivePos(d.translation, d.definition, d.pos),
                      cat: rule.cat, en, zh, r: rank(d.frq, d.bnc), tag: rule.tag };
      const borrowed = hwIndex.get(d.w);
      out.push(borrowed ? { ...borrowed, cat: rule.cat, hw: 1, r: 0, tag: rule.tag } : entry);
    }
    note(`  auto ${t.id}/${rule.cat}: tag=${rule.tag} 取 ${taken} 词`);
  }

  // 手写在前，其余按词频 / hand-written first, then by frequency
  out.sort((a, b) => (b.hw || 0) - (a.hw || 0) || a.r - b.r || a.w.localeCompare(b.w));
  byTrack.set(t.id, out);
}

/* ------------------------------ 输出 ------------------------------ */
fs.mkdirSync(p('js', 'data'), { recursive: true });
const counts = {}, catCounts = {};
let total = 0, hwTotal = 0, glossTotal = 0;

for (const t of TRACKS) {
  const list = byTrack.get(t.id) || [];
  counts[t.id] = list.length;
  total += list.length;
  hwTotal += list.filter(e => e.hw).length;
  glossTotal += list.filter(e => e.g).length;
  list.forEach(e => { catCounts[e.cat] = (catCounts[e.cat] || 0) + 1; });
  const body = list.map(e => JSON.stringify(e)).join(',\n');
  fs.writeFileSync(p('js', 'data', t.id + '.js'),
    `/* 由 scripts/build.mjs 生成，请勿手改 / generated — do not edit by hand */\n` +
    `window.TECHLEX_DATA = window.TECHLEX_DATA || {};\n` +
    `window.TECHLEX_DATA[${JSON.stringify(t.id)}] = [\n${body}\n];\n`);
}

const j = (x) => JSON.stringify(x, null, 2);
fs.writeFileSync(p('js', 'manifest.js'),
  `/* 由 scripts/build.mjs 生成，请勿手改 / generated — do not edit by hand */\n` +
  `window.GROUPS = ${j(GROUPS)};\n` +
  `window.TRACKS = ${j(TRACKS.map(({ id, group, zh, en }) => ({ id, group, zh, en })))};\n` +
  `window.CATEGORIES = ${j(CATEGORIES)};\n` +
  `window.TRACK_COUNTS = ${j(counts)};\n` +
  `window.CAT_COUNTS = ${j(catCounts)};\n` +
  `window.WORD_TOTAL = ${total};\n` +
  `window.WORD_HANDWRITTEN = ${hwTotal};\n` +
  `window.WORD_CURATED = ${glossTotal};\n`);

/* ------------- 生成 about 页的词库总表 / render the track table ------------- */
{
  const fp = p('about.html');
  if (fs.existsSync(fp)) {
    let html = fs.readFileSync(fp, 'utf8');
    const rows = GROUPS.map(g => {
      const list = TRACKS.filter(t => t.group === g.id);
      if (!list.length) return '';
      return '    <li class="about-group"><b>' + g.zh + ' ' + g.en + '</b></li>\n' +
        list.map(t => {
          const n = (byTrack.get(t.id) || []).length;
          const cs = catsOf(t.id).map(c => c.zh).join(' · ');
          const eg = (byTrack.get(t.id) || []).slice(0, 6).map(e => e.w).join(', ');
          return '    <li><b>' + t.zh + ' ' + t.en + ' · ' + n + ' 词</b>' +
                 cs + (eg ? '<br><span class="eg">' + eg + '</span>' : '') + '</li>';
        }).join('\n');
    }).filter(Boolean).join('\n');
    const st = TRACKS.reduce((a, t) => {
      const L = byTrack.get(t.id) || [];
      a.n += L.length; a.hw += L.filter(e => e.hw).length; a.g += L.filter(e => e.g).length;
      L.forEach(e => a.uniq.add(e.w));
      return a;
    }, { n: 0, hw: 0, g: 0, uniq: new Set() });
    html = html.replace(/<!--STATS-->[\s\S]*?<!--\/STATS-->/,
      '<!--STATS-->\n  <div class="statgrid">' +
      `<div><b>${st.uniq.size}</b><span>个难词 hard words</span></div>` +
      `<div><b>${TRACKS.length}</b><span>个领域 fields</span></div>` +
      `<div><b>${st.hw}</b><span>已配词源故事 with a story</span></div>` +
      `<div><b>${st.g + st.hw}</b><span>释义为手写 hand-written glosses</span></div>` +
      '</div>\n  <!--\/STATS-->');
    html = html.replace(/<!--TRACKS-->[\s\S]*?<!--\/TRACKS-->/,
                        '<!--TRACKS-->\n  <ul class="about-cats">\n' + rows + '\n  </ul>\n  <!--\/TRACKS-->');
    const uq = new Set(); TRACKS.forEach(t => (byTrack.get(t.id) || []).forEach(e => uq.add(e.w)));
    html = html.replace(/<!--TOTAL-->[\s\S]*?<!--\/TOTAL-->/, '<!--TOTAL-->' + uq.size + '<!--\/TOTAL-->');
    fs.writeFileSync(fp, html);
    note('  about 页词库表已重建 / track table rebuilt');
  }
}

/* ------------------- 回填页面上的词数 / sync the counts ------------------- */
// 用上次的数字换成这次的，避免把页面里其他数字误伤
// Replace last build's number with this one, so no other figure gets touched
const STAMP = p('.wordcount');
const uniqTotal = new Set();
TRACKS.forEach(t => (byTrack.get(t.id) || []).forEach(e => uniqTotal.add(e.w)));
const shown = uniqTotal.size;
const prev = fs.existsSync(STAMP) ? fs.readFileSync(STAMP, 'utf8').trim() : '';
if (prev && prev !== String(shown)) {
  for (const f of ['index.html', 'about.html', 'README.md']) {
    const fp = p(f);
    if (!fs.existsSync(fp)) continue;
    const before = fs.readFileSync(fp, 'utf8');
    const after = before.split(prev + ' 个词').join(shown + ' 个词')
                        .split(prev + ' 个').join(shown + ' 个')
                        .split(prev + ' 词').join(shown + ' 词')
                        .split(prev + ' words').join(shown + ' words')
                        .split(prev + ' high-frequency').join(shown + ' high-frequency');
    if (after !== before) { fs.writeFileSync(fp, after); note(`  词数回填 ${f}: ${prev} → ${shown}`); }
  }
}
fs.writeFileSync(STAMP, String(shown) + '\n');

/* ------------------------------ 报告 ------------------------------ */
note('');
const uniq = new Set();
TRACKS.forEach(t => (byTrack.get(t.id) || []).forEach(e => uniq.add(e.w)));
note(`总词条 entries: ${total}（去重后 unique ${uniq.size}）`);
note(`  手写词源 ${hwTotal} · 人工校订释义 ${glossTotal} · 词典原样 ${total - hwTotal - glossTotal}`);
for (const t of TRACKS) {
  const list = byTrack.get(t.id) || [];
  const hw = list.filter(e => e.hw).length;
  const gl = list.filter(e => e.g).length;
  note(`  ${t.id.padEnd(6)} ${t.zh.padEnd(11)} ${String(list.length).padStart(5)} 词  手写 ${String(hw).padStart(4)}  校订 ${String(gl).padStart(4)}  ` +
       catsOf(t.id).map(c => `${c.id}:${list.filter(e => e.cat === c.id).length}`).join(' '));
}
note('');
note(`手写条目撞车 hand-written clashes: ${dupes.length}`);
dupes.slice(0, 40).forEach(d => note('  ' + d));
note('');
note(`词典查不到、也没给人工释义（已丢弃）dropped: ${missing.length}`);
missing.slice(0, 120).forEach(m => note('  ' + m));
note('');
note(`词典查不到、靠人工释义收录（缺音标）no IPA: ${noPhon.length}`);
noPhon.slice(0, 120).forEach(m => note('  ' + m));
note('');
note(`太简单被挡掉（六级以下且不生僻）too easy: ${tooEasy.length}`);
tooEasy.slice(0, 120).forEach(m => note('  ' + m));
note('');
note(`词典释义偏弱，建议人工校订 needs a gloss: ${needGloss.length}`);
needGloss.slice(0, 200).forEach(m => note('  ' + m));

fs.writeFileSync(p('build.log'), log.join('\n') + '\n');
console.log(log.join('\n'));
console.log('\n→ js/manifest.js + js/data/*.js 已生成；完整报告见 build.log');
