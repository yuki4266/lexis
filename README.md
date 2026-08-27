# Lexis · 只学难词

> 市面上的背单词软件都在教你 *apple* 和 *important*。如果你已经过了那个阶段，剩下的词才是真正难的 —— 而它们大多有故事。
> Most vocabulary apps are still teaching you *apple*. If you are past that, what remains is the hard half of English — and most of it has a story.

**▶ 在线试用 / Try it live: https://yuki4266.github.io/lexis/**

![Lexis](og-image.png)

---

## 三条原则 · Three rules

1. **不收简单词。** 构建时用词频与考试标签自动卡门槛：六级以下、本身又不生僻的词一律进不来。这是写进 `scripts/build.mjs` 的规则，不是一句口号。
   **No easy words.** A difficulty gate in the build drops anything below CET-6 that is not otherwise rare. It is code, not a slogan.
   少数看起来简单的词能留下，是因为它有专业义 —— `late` 在因果推断里是「局部平均处理效应」，`birthday` 在密码学里是「生日攻击」，`umbrella` 在临床试验里是「伞式试验」，`smile` 在期权里是「波动率微笑」。
2. **尽量讲清每个词从哪来。** `daemon` 不是恶魔，是 MIT 取自麦克斯韦妖的守护精灵；`cipher` 来自阿拉伯语的「零」；`negotiate` 字面是「没有闲暇」；`candid` 来自罗马候选人所穿的白袍。
   **Tell people where the word came from.** The etymology is the point, not a footnote.
3. **不编造。** 词源逐条手写、可查证；写不出可靠词源的就留白 —— 页面上没有词源的条目是还没写，而不是编了一个。
   **Never invent.** Etymologies are hand-written and checkable; where none is written, the block simply does not appear.

## 功能 · Features

- **自动发音，美音／英音可切** — 默认美音，音标同步切换，语速可调。
- **逐字母实时校对** — 打对变绿、打错变红并抖一下，全对时「叮」一声自动进入下一题。
- **单词与词意是页面上最大的两样东西** — 单词最大，中文词意紧随其后，来历与例句在下方展开。
- **每个带词源的词配两句例句** — 第一句用生活画面把词义说明白（除目标词外全是简单词），第二句才是真实语境里的用法。
- **打错的词自己回来** — 隔 3 / 12 / 30 个词各回来一次，三次都对就不再出现，最多 6 次。没有列表、没有开关。
- **有故事的词排前面** — 带词源的词自动优先出现，不需要你去开关任何东西。
- **18 个领域大类**，按需加载，首屏只有约 20 KB。

## 词库 · Word bank

**4397 个难词，18 个大类、69 个小类**，其中 512 个已配完整词源故事，3906 条中文释义为手写。

| 分组 | 大类 |
| --- | --- |
| 技术与工程 | 技术英语 · 数据与统计 · 安全与密码学 · 产品与设计 |
| 学术与研究 | 学术与论文 · 思辨与逻辑 · 医学与生命科学 · 哲学与社会科学 |
| 商业与社会 | 职场与商务 · 金融与量化 · 法律与合规 · 新闻时事与国际关系 |
| 通用与生活 | 高阶通用词 · 饮食与日常 |
| 语言训练 | 考试高频 · 词根词缀 · 易混词与搭配 · 学术口语与会议表达 |

## 快捷键 · Shortcuts

| 按键 Key | 作用 Action |
| --- | --- |
| `Ctrl` / `⌘` + `Enter` | 重听发音 Replay |
| `Enter` | 跳过本题并显示答案 Skip and reveal |
| `Esc` | 清空重打当前单词 Reset |

## 运行 · Run

```bash
python3 -m http.server 8777    # → http://localhost:8777
```

## 构建 · Build

词库是**生成**的，改完源文件要重新构建：
The word bank is **generated** — rebuild after editing the sources:

```bash
node scripts/fetch-dict.mjs     # 首次：下载 ECDICT 到 vendor/（不入库）
node scripts/build.mjs          # 生成 js/manifest.js 与 js/data/*.js，报告写入 build.log
```

## 结构 · Structure

```
lexis/
├── index.html            # 练习页 the trainer
├── about.html            # 关于 / 三条原则 / FAQ / 赞赏
├── css/style.css
├── data/                 # 词库源文件 the sources
│   ├── schema.mjs        #   18 个大类与 69 个小类 tracks & categories
│   ├── handwritten/*.mjs #   手写条目（含词源与例句）
│   └── headwords/*.txt   #   词表 + 中文域内释义
├── scripts/
│   ├── fetch-dict.mjs    #   下载 ECDICT
│   └── build.mjs         #   构建、去重、难度闸门、回填页面数字
└── js/
    ├── manifest.js       # 生成物：大类目录，首屏加载
    ├── data/<track>.js   # 生成物：各大类词条，按需加载
    └── app.js            # 发音、校对、音效、错题本、统计
```

## 扩词 · Adding words

想要完整的词源与例句，在 `data/handwritten/<track>.mjs` 里追加一条：

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

只想快速加词、由词典补齐音标与词性，就写进 `data/headwords/<track>.txt`：

```
## cat: data-infer
likelihood | 似然：在给定参数下观测到这批数据的概率
power | 统计功效：效应确实存在时能把它检出来的概率 | The probability of detecting a real effect
```

一行一个词；`|` 后可给中文域内释义（覆盖词典的通用义），再一个 `|` 给英文释义，还能再接一组 `| 例句 | 例句中文`。
多词短语直接用空格写，界面支持带空格的逐字符校对。

## 数据来源 · Data source

音标、词性与词频来自 **[ECDICT](https://github.com/skywind3000/ECDICT)**（MIT 协议）。
词源、例句与全部领域释义为手写。ECDICT 本身不含词源 —— 页面上没有词源的词，就是还没写，而不是编的。

## 浏览器支持 · Browser support

发音依赖 Web Speech API，音效依赖 Web Audio API，桌面版 Chrome / Edge / Safari 均可。
若听不到声音，先点一下页面（部分浏览器要求先有用户手势）。
