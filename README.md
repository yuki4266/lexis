# TechLex · 技术英语词汇听打训练

> 面向中文母语学习者的技术英语单词训练器：听发音、打单词、逐字母实时校对，并给出词源与典故。
> A tech-English vocabulary trainer for Chinese speakers: hear it, type it, get checked letter by letter, and learn where the word came from.

**▶ 在线试用 / Try it live: https://yuki4266.github.io/techlex/**

**零依赖 · 纯静态 · 打开 `index.html` 就能用**
**Zero dependencies, pure static — just open `index.html`.**

![TechLex](og-image.png)

---

## 功能 · Features

- **自动发音，美音／英音可切** — 默认美音，顶栏一键切换 US / UK，音标同步切换，可调语速。
  **Auto pronunciation, US by default** — switch accent in the top bar; the IPA and the voice follow, and speed is adjustable.
- **逐字母实时校对** — 打对的字母变绿，打错的字母变红并带下划线，光标始终指向当前位置。
  **Letter-by-letter checking in real time** — correct letters turn green, wrong ones turn red and underlined, and a caret marks where you are.
- **打对就"叮"一声，自动进入下一题** — 全部字母正确时播放提示音并翻页；打错有短促提示音。
  **A chime on success, then the next word** — a bell rings when the spelling completes, a short blip warns on a mistake.
- **单词和词意是页面上最大的两样东西** — 单词最大，中文词意紧随其后，英文释义再次之，词源和例句在下方展开。
  **The word and its meaning dominate the page** — the word first, the Chinese meaning right under it, then the English definition.
- **错题回顾** — 打错或跳过的词自动进错题本，可以「只练错题」；某个词一次打对就自动移出，记录存在浏览器本地。
  **Mistakes review** — missed or skipped words are filed automatically; drill just those, and a clean run removes a word again. Stored locally in your browser.
- **词源与典故** — 每个词都给出词源故事和例句，全部中英对照，逐行对应。
  **Etymology and stories** — every entry carries the story behind the word and an example, all line-by-line bilingual.
- **听写模式** — 隐藏单词，只听发音盲打；打错时显示的是"你打的那个字母"。
  **Dictation mode** — hide the word and type only from the audio; a wrong keystroke shows the letter you actually typed.
- **分类筛选与统计** — 按 5 个领域筛题，实时显示完成数、连击、准确率、WPM。
  **Category filter and stats** — filter by five fields; done count, streak, accuracy and WPM update live.

## 词库 · Word bank

118 个高频技术英语词，覆盖五个领域：
118 high-frequency technical words across five fields:

| 分类 Category | 数量 Count | 例词 Examples |
| --- | --- | --- |
| 人工智能与机器学习 AI & Machine Learning | 30 | stochastic, entropy, manifold, distillation |
| 算法与数据结构 Algorithms & Data Structures | 23 | memoization, amortized, asymptotic, trie |
| 软件工程 Software Engineering | 23 | idempotent, deprecate, refactor, canary |
| 系统与分布式 Systems & Distributed | 18 | mutex, semaphore, quorum, preemption |
| 网络工程 Network Engineering | 24 | protocol, socket, cipher, multiplexing |

## 快捷键 · Shortcuts

| 按键 Key | 作用 Action |
| --- | --- |
| `Ctrl` / `⌘` + `Enter` | 重听发音 Replay the pronunciation |
| `Enter` | 跳过本题并显示答案 Skip and reveal |
| `Esc` | 清空重打当前单词 Reset the current word |

## 运行 · Run

```bash
# 方式一：直接打开 / open the file directly
open index.html

# 方式二：本地起服务（推荐，发音在部分浏览器需要 http）
# or serve it locally (recommended; some browsers need http for speech)
python3 -m http.server 8777
# → http://localhost:8777
```

## 结构 · Structure

```
techlex/
├── index.html          # 练习页 + SEO 元信息 the trainer, plus SEO metadata
├── about.html          # 关于 / 用法 / FAQ / 赞赏 about, how-to, FAQ, tip jar
├── css/style.css       # 亮色主题样式 light theme styles
├── js/
│   ├── words.js        # 词库：单词/音标/释义/词源/例句 the word bank
│   └── app.js          # 逻辑：发音、校对、音效、错题本、统计 speech, checking, sound, mistakes, stats
├── assets/
│   └── wechat-reward.png   # 微信赞赏码（替换成你自己的）WeChat tip QR (swap in your own)
├── og-image.png        # 分享封面 social share card
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## 扩词 · Adding words

在 `js/words.js` 的数组里追加一条即可，字段含义见文件顶部注释：
Append one object to the array in `js/words.js`; the fields are documented at the top of that file:

```js
{
  w: 'idempotent', uk: '/ˌaɪdemˈpəʊtnt/', us: '/ˌaɪdəmˈpoʊtnt/', pos: 'adj.', cat: 'sde',
  en: 'Producing the same result whether applied once or many times.',
  zh: '幂等的：执行一次与执行多次的结果完全相同。',
  oe: 'Coined by Benjamin Peirce in 1870 from Latin idem "the same" + potens "having power".',
  oz: '1870 年由 Benjamin Peirce 造词，取拉丁语 idem（相同）+ potens（有力量的）。',
  se: 'Make the retry endpoint idempotent so duplicates are harmless.',
  sz: '把重试接口做成幂等的，重复请求就无害了。'
}
```

`cat` 可选值 / valid values：`ai` `algo` `sde` `sys` `net`

## 浏览器支持 · Browser support

发音依赖 Web Speech API，音效依赖 Web Audio API，桌面版 Chrome / Edge / Safari 均可。
Speech uses the Web Speech API and sound uses the Web Audio API — desktop Chrome, Edge and Safari all work.
若听不到声音，先点一下页面（部分浏览器要求先有用户手势）。
If you hear nothing, click the page once — some browsers require a user gesture first.
