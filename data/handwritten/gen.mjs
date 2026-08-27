/*
 * 高阶通用词 — 手写条目（含词源与例句）/ hand-written entries with etymology
 * 由 scripts/build.mjs 读取；同名词会覆盖词典生成的条目
 * Read by scripts/build.mjs; these override the dictionary-generated entries
 */
export default [
{
  w: 'ubiquitous', uk: '/juːˈbɪkwɪtəs/', us: '/juːˈbɪkwɪtəs/', pos: 'adj.', cat: 'gen-desc',
  en: 'Present everywhere at once.',
  zh: '无处不在的：同时存在于一切地方。',
  oe: 'From Latin ubique "everywhere", from ubi "where". Theologians used ubiquity of God long before engineers used it of computing.',
  oz: '源自拉丁语 ubique“到处”，词根 ubi“何处”。神学家早就用 ubiquity 形容上帝的无所不在，工程师才把它用于计算。',
  se: 'Retry logic is ubiquitous and almost always subtly wrong.',
  sz: '重试逻辑无处不在，而且几乎总是错得很隐蔽。'
},
{
  w: 'ephemeral', uk: '/ɪˈfemərəl/', us: '/ɪˈfemərəl/', pos: 'adj.', cat: 'gen-desc',
  en: 'Lasting a very short time.',
  zh: '短暂的：存在时间极短。',
  oe: 'From Greek ephemeros "lasting only a day" (epi "on" + hemera "day"). The mayfly\'s order is Ephemeroptera for the same reason.',
  oz: '源自希腊语 ephemeros“只活一天的”（epi 在 + hemera 日）。蜉蝣所属的蜉蝣目 Ephemeroptera 正是因此得名。',
  se: 'Treat containers as ephemeral and state as precious.',
  sz: '把容器当作短暂的，把状态当作宝贵的。'
},
{
  w: 'esoteric', uk: '/ˌesəˈterɪk/', us: '/ˌesəˈterɪk/', pos: 'adj.', cat: 'gen-desc',
  en: 'Understood by only a small group with specialised knowledge.',
  zh: '晦涩难懂的：只有少数具备专门知识的人才懂。',
  oe: 'From Greek esoterikos "belonging to the inner circle" (eso "within"). Aristotle reportedly kept esoteric lectures for his students and exoteric ones for the public.',
  oz: '源自希腊语 esoterikos“属于内圈的”（eso 内部）。据说亚里士多德把 esoteric 讲义留给弟子，把 exoteric 的留给公众。',
  se: 'The bug was esoteric; the fix was one character.',
  sz: '这个 bug 很晦涩，修复却只改了一个字符。'
},
{
  w: 'idiosyncratic', uk: '/ˌɪdiəsɪŋˈkrætɪk/', us: '/ˌɪdiəsɪŋˈkrætɪk/', pos: 'adj.', cat: 'gen-desc',
  en: 'Peculiar to one individual or one system, in a way others would not choose.',
  zh: '独特而古怪的：某个人或某个系统特有、旁人不会那样做的。',
  oe: 'Greek idios "one\'s own" + synkrasis "a mixing together" - originally the particular blend of the four humours that made up your temperament.',
  oz: '希腊语 idios（自己的）+ synkrasis（混合）——本指四种体液在你身上的特定配比，也就是你的气质。',
  se: 'Every legacy system has an idiosyncratic date format.',
  sz: '每个遗留系统都有一套自成一格的日期格式。'
},
{
  w: 'meticulous', uk: '/məˈtɪkjələs/', us: '/məˈtɪkjələs/', pos: 'adj.', cat: 'gen-desc',
  en: 'Showing extreme care over small details.',
  zh: '一丝不苟的：对细节极其用心。',
  oe: 'From Latin meticulosus "fearful, timid", from metus "fear". For centuries the English word meant frightened; the modern praise grew out of the anxious care of the fearful.',
  oz: '源自拉丁语 meticulosus“胆怯的”，词根 metus“恐惧”。此词在英语中数百年间都表示“害怕的”，如今的褒义正是从那种战战兢兢的仔细里长出来的。',
  se: 'His commit messages are meticulous, which is why the bisect worked.',
  sz: '他的提交信息一丝不苟，所以 bisect 才能奏效。'
},
{
  w: 'innocuous', uk: '/ɪˈnɒkjuəs/', us: '/ɪˈnɑːkjuəs/', pos: 'adj.', cat: 'gen-desc',
  en: 'Harmless; not likely to cause offence or damage.',
  zh: '无害的：不会造成伤害或冒犯。',
  oe: 'From Latin innocuus (in- "not" + nocere "to harm") - the same nocere behind noxious, nuisance and innocent, which is literally "not harming".',
  oz: '源自拉丁语 innocuus（in- 不 + nocere 伤害）——noxious、nuisance 同根；innocent 字面就是“不造成伤害的”。',
  se: 'The innocuous-looking config change took down the region.',
  sz: '那个看起来人畜无害的配置改动，搞垮了整个区域。'
},
{
  w: 'austere', uk: '/ɔːˈstɪə/', us: '/ɔːˈstɪr/', pos: 'adj.', cat: 'gen-desc',
  en: 'Severely plain; without ornament or comfort.',
  zh: '简朴严苛的：极其朴素，没有装饰或舒适可言。',
  oe: 'From Greek austeros "harsh, dry, bitter" - originally a description of taste, the way an unripe fruit dries the tongue.',
  oz: '源自希腊语 austeros“粗粝、干涩、苦”——本是味觉描述，指未熟果实让舌头发干的那种感觉。',
  se: 'The API is austere, and that is precisely its virtue.',
  sz: '这套 API 极其朴素，而这恰恰是它的优点。'
},
{
  w: 'opaque', uk: '/əʊˈpeɪk/', us: '/oʊˈpeɪk/', pos: 'adj.', cat: 'gen-desc',
  en: 'Impossible to see through, literally or figuratively.',
  zh: '不透明的：无论字面还是比喻意义上都看不透。',
  oe: 'From Latin opacus "shaded, darkened". In programming an opaque type is one whose internals the caller deliberately cannot see.',
  oz: '源自拉丁语 opacus“遮蔽的、幽暗的”。在编程中，不透明类型指调用方被刻意挡在其内部结构之外的类型。',
  se: 'Keep the handle opaque so you can change what is behind it.',
  sz: '把句柄保持为不透明的，你才能随时更换它背后的东西。'
},
{
  w: 'nuanced', uk: '/ˈnjuːɑːnst/', us: '/ˈnuːɑːnst/', pos: 'adj.', cat: 'gen-desc',
  en: 'Marked by fine distinctions rather than a single clear verdict.',
  zh: '细致入微的：讲究细微差别，而非给出非黑即白的判断。',
  oe: 'From French nuance "a shade of colour", from nue "cloud", Latin nubes - the graded shading of light through cloud.',
  oz: '源自法语 nuance“色彩的深浅”，词根 nue“云”，拉丁语 nubes——光透过云层时那种渐变的层次。',
  se: 'The honest answer is nuanced, which is why nobody quotes it.',
  sz: '诚实的答案往往是细致而有层次的，所以没人引用它。'
},
{
  w: 'ambivalent', uk: '/æmˈbɪvələnt/', us: '/æmˈbɪvələnt/', pos: 'adj.', cat: 'gen-desc',
  en: 'Holding two opposing feelings about the same thing at once.',
  zh: '矛盾心理的：对同一件事同时抱有两种相反的感受。',
  oe: 'Coined in 1910 by the Swiss psychiatrist Eugen Bleuler from Latin ambo "both" + valere "to be strong" - both pulls being equally strong.',
  oz: '1910 年由瑞士精神病学家 Eugen Bleuler 造词，取拉丁语 ambo（两者）+ valere（有力）——两股拉力同样强。',
  se: 'I am ambivalent about the rewrite: right idea, wrong quarter.',
  sz: '对这次重写我心情矛盾：想法对，时机不对。'
},
{
  w: 'arcane', uk: '/ɑːˈkeɪn/', us: '/ɑːrˈkeɪn/', pos: 'adj.', cat: 'gen-desc',
  en: 'Mysterious and known only to initiates.',
  zh: '神秘难解的：只有内行人才知道。',
  oe: 'From Latin arcanus "secret", from arca "a chest, a box" - the same arca as Noah\'s ark. Arcane knowledge is knowledge kept in a locked box.',
  oz: '源自拉丁语 arcanus“秘密的”，词根 arca“箱子”——诺亚方舟 ark 同源。神秘的知识就是锁在箱子里的知识。',
  se: 'Linker flags remain the most arcane part of the toolchain.',
  sz: '链接器参数仍是整条工具链中最玄的部分。'
},
{
  w: 'banal', uk: '/bəˈnɑːl/', us: '/bəˈnæl/', pos: 'adj.', cat: 'gen-desc',
  en: 'So ordinary as to be boring.',
  zh: '平庸乏味的：普通到令人乏味。',
  oe: 'From French banal, from ban, the feudal summons. The village oven and mill were banal - open to all tenants by compulsion - and what everyone must share became what nobody finds interesting.',
  oz: '源自法语 banal，来自封建时代的召集令 ban。村里的公用烤炉与磨坊是 banal 的——所有佃户都必须共用；人人都得共享之物，最终成了无人觉得有趣之物。',
  se: 'Most outages have banal causes and dramatic consequences.',
  sz: '多数故障的原因平淡无奇，后果却轰轰烈烈。'
},
{
  w: 'cursory', uk: '/ˈkɜːsəri/', us: '/ˈkɜːrsəri/', pos: 'adj.', cat: 'gen-desc',
  en: 'Done quickly and without attention to detail.',
  zh: '草率的：做得很快，不顾细节。',
  oe: 'From Latin cursorius "of a runner", from currere "to run" - the same currere as recursion, concurrency and courier. A cursory glance runs past.',
  oz: '源自拉丁语 cursorius“奔跑者的”，词根 currere“跑”——与 recursion、concurrency、courier 同根。草率一瞥就是跑着扫过去。',
  se: 'A cursory review is worse than none: it grants false comfort.',
  sz: '草率的评审比不评审更糟，它带来虚假的安心。'
},
{
  w: 'tenacious', uk: '/təˈneɪʃəs/', us: '/təˈneɪʃəs/', pos: 'adj.', cat: 'gen-desc',
  en: 'Holding on firmly and refusing to let go.',
  zh: '执着的：牢牢抓住不肯放手。',
  oe: 'From Latin tenax "holding fast", from tenere "to hold" - the same tenere behind tenure and tenant.',
  oz: '源自拉丁语 tenax“抓得紧的”，词根 tenere“持有”——与 tenure、tenant 同根。',
  se: 'Debugging rewards the tenacious more than the clever.',
  sz: '调试奖励执着的人，多过奖励聪明的人。'
},
{
  w: 'pervasive', uk: '/pəˈveɪsɪv/', us: '/pərˈveɪsɪv/', pos: 'adj.', cat: 'gen-desc',
  en: 'Spread through every part of something.',
  zh: '普遍渗透的：扩散到某事物的每一个角落。',
  oe: 'From Latin pervadere "to go through" (per- "through" + vadere "to go") - the same vadere behind invade and evade.',
  oz: '源自拉丁语 pervadere“贯穿而行”（per- 穿过 + vadere 走）——invade、evade 同根。',
  se: 'The assumption is pervasive enough that nobody states it.',
  sz: '这个假设普遍到没人再把它说出口。'
},
{
  w: 'acquiesce', uk: '/ˌækwiˈes/', us: '/ˌækwiˈes/', pos: 'v.', cat: 'gen-act',
  en: 'To accept something reluctantly, usually by not objecting.',
  zh: '默许：不情愿地接受，通常表现为不提出异议。',
  oe: 'From Latin acquiescere "to come to rest in" (ad- + quies "quiet, rest") - consent expressed by falling silent.',
  oz: '源自拉丁语 acquiescere“安歇于此”（ad- + quies 安静、休息）——以沉默表达的同意。',
  se: 'The team acquiesced, which is not the same as agreeing.',
  sz: '团队默许了，这和真正同意不是一回事。'
},
{
  w: 'capitulate', uk: '/kəˈpɪtʃuleɪt/', us: '/kəˈpɪtʃuleɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To stop resisting and accept the other side\'s terms.',
  zh: '屈服：停止抵抗，接受对方的条件。',
  oe: 'From Latin capitulare "to draw up under headings", from caput "head". Terms of surrender were written out in chapters - so to capitulate was originally just to negotiate in writing.',
  oz: '源自拉丁语 capitulare“分条列款”，词根 caput“头”。投降条款是按章节写下来的，所以 capitulate 最初只是“以书面形式谈条件”。',
  se: 'They capitulated on the schedule and paid for it in quality.',
  sz: '他们在排期上屈服了，代价由质量来付。'
},
{
  w: 'disparage', uk: '/dɪˈspærɪdʒ/', us: '/dɪˈspærɪdʒ/', pos: 'v.', cat: 'gen-act',
  en: 'To speak of someone or something as being of little worth.',
  zh: '贬低：把某人或某物说得一文不值。',
  oe: 'From Old French desparagier "to marry someone of unequal rank" (des- + parage "equality", from Latin par). To disparage was literally to lower someone\'s standing by mismatching them.',
  oz: '源自古法语 desparagier“与门第不相称之人成婚”（des- + parage 对等，来自拉丁语 par）。贬低字面上就是通过“不般配”来降低某人的身份。',
  se: 'Critique the design without disparaging the person who wrote it.',
  sz: '批评设计，但不要贬低写出它的人。'
},
{
  w: 'equivocate', uk: '/ɪˈkwɪvəkeɪt/', us: '/ɪˈkwɪvəkeɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To use ambiguous language deliberately in order to avoid committing.',
  zh: '含糊其辞：故意使用模棱两可的措辞以回避表态。',
  oe: 'From Latin aequus "equal" + vocare "to call" - to call two different things by one name, so the listener cannot pin you down.',
  oz: '源自拉丁语 aequus（相等）+ vocare（称呼）——用同一个名字称呼两样不同的东西，让听者抓不住你。',
  se: 'The status update equivocated for three paragraphs.',
  sz: '那份进度汇报含糊其辞地写了三段。'
},
{
  w: 'exacerbate', uk: '/ɪɡˈzæsəbeɪt/', us: '/ɪɡˈzæsərbeɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To make a bad situation worse.',
  zh: '加剧：使原本糟糕的局面更糟。',
  oe: 'From Latin exacerbare "to irritate", from ex- + acerbus "harsh, bitter" - the same root as acerbic, acrid and acid.',
  oz: '源自拉丁语 exacerbare“激怒”，由 ex- + acerbus（苦涩、粗粝）构成——acerbic、acrid、acid 同源。',
  se: 'Adding retries exacerbated the overload rather than relieving it.',
  sz: '加重试非但没缓解过载，反而加剧了它。'
},
{
  w: 'galvanize', uk: '/ˈɡælvənaɪz/', us: '/ˈɡælvənaɪz/', pos: 'v.', cat: 'gen-act',
  en: 'To shock a group into sudden action.',
  zh: '激励振奋：让一群人猛然行动起来。',
  oe: 'From Luigi Galvani, whose 1780s experiments made dead frogs\' legs twitch with electric current. To galvanize a team is to run current through it.',
  oz: '源自 Luigi Galvani——他在 1780 年代用电流让死青蛙的腿抽动。让团队振奋起来，就是给它通上电流。',
  se: 'The outage galvanized six months of postponed work.',
  sz: '这次事故让搁置了半年的工作一下子全动了起来。'
},
{
  w: 'obfuscate', uk: '/ˈɒbfʌskeɪt/', us: '/ˈɑːbfʌskeɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To make something deliberately hard to understand.',
  zh: '混淆：故意让某事变得难以理解。',
  oe: 'From Latin obfuscare "to darken" (ob- + fuscus "dark, dusky"). Code obfuscation darkens the source on purpose.',
  oz: '源自拉丁语 obfuscare“使变暗”（ob- + fuscus 暗、褐）。代码混淆就是故意把源码弄暗。',
  se: 'Jargon that obfuscates is usually hiding an absent argument.',
  sz: '用来混淆视听的行话，背后通常藏着一个不存在的论据。'
},
{
  w: 'placate', uk: '/pləˈkeɪt/', us: '/ˈpleɪkeɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To calm someone\'s anger, often with a concession.',
  zh: '安抚：平息某人的怒气，往往靠让步。',
  oe: 'From Latin placare "to soothe, to appease", closely related to placere "to please" - the same root as pleasant and placid.',
  oz: '源自拉丁语 placare“抚慰、平息”，与 placere（使愉悦）密切相关——pleasant、placid 同根。',
  se: 'Shipping a dashboard to placate a stakeholder solves nothing.',
  sz: '为安抚某位干系人而上线一个看板，解决不了任何问题。'
},
{
  w: 'repudiate', uk: '/rɪˈpjuːdieɪt/', us: '/rɪˈpjuːdieɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To reject formally and publicly.',
  zh: '公开否认／断绝：正式而公开地拒绝承认。',
  oe: 'From Latin repudiare "to divorce, to cast off", from repudium "a divorce". The word carries the finality of a marriage formally ended.',
  oz: '源自拉丁语 repudiare“休妻、抛弃”，名词 repudium 意为“离婚”。此词带着婚姻正式终止的那种决绝。',
  se: 'The authors later repudiated the benchmark they had introduced.',
  sz: '作者后来公开否定了他们自己提出的那个基准。'
},
{
  w: 'vacillate', uk: '/ˈvæsəleɪt/', us: '/ˈvæsəleɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To keep swinging between two choices without settling.',
  zh: '摇摆不定：在两个选择之间反复摇摆，始终定不下来。',
  oe: 'From Latin vacillare "to sway, to totter" - a physical wobble that became a mental one.',
  oz: '源自拉丁语 vacillare“摇晃、踉跄”——原本是身体的摇晃，后来成了心思的摇摆。',
  se: 'We vacillated for a month and shipped neither design.',
  sz: '我们摇摆了一个月，两套设计一个都没上线。'
},
{
  w: 'admonish', uk: '/ədˈmɒnɪʃ/', us: '/ədˈmɑːnɪʃ/', pos: 'v.', cat: 'gen-act',
  en: 'To warn or reprove firmly but not harshly.',
  zh: '告诫：严肃但不严厉地警告或责备。',
  oe: 'From Latin admonere "to remind, to warn" (ad- + monere "to warn") - the same monere behind monument, monitor and, through Juno Moneta, money itself.',
  oz: '源自拉丁语 admonere“提醒、警告”（ad- + monere 警示）——monument、monitor 同根；经由朱诺·莫涅塔，money 也源出于此。',
  se: 'The linter admonishes; the reviewer explains.',
  sz: 'linter 只负责告诫，评审者才负责解释。'
},
{
  w: 'extol', uk: '/ɪkˈstəʊl/', us: '/ɪkˈstoʊl/', pos: 'v.', cat: 'gen-act',
  en: 'To praise highly and publicly.',
  zh: '盛赞：公开而热烈地称颂。',
  oe: 'From Latin extollere "to lift up" (ex- "out, up" + tollere "to raise") - the same tollere behind tolerate, which is to bear a weight.',
  oz: '源自拉丁语 extollere“举起”（ex- 向上 + tollere 抬）——tolerate（承受重量）同根。',
  se: 'The paper extols a speedup it never measures end to end.',
  sz: '这篇论文盛赞的加速比，从未做过端到端的实测。'
},
{
  w: 'procrastinate', uk: '/prəˈkræstɪneɪt/', us: '/proʊˈkræstɪneɪt/', pos: 'v.', cat: 'gen-act',
  en: 'To postpone doing what should be done now.',
  zh: '拖延：把当下该做的事往后推。',
  oe: 'From Latin procrastinare "to put off until tomorrow" (pro- "forward" + cras "tomorrow") - the word contains its own excuse.',
  oz: '源自拉丁语 procrastinare“推到明天”（pro- 向前 + cras 明天）——这个词里就藏着它自己的借口。',
  se: 'Nobody procrastinates on the fun part of the refactor.',
  sz: '没人会在重构里好玩的那部分上拖延。'
},
{
  w: 'condone', uk: '/kənˈdəʊn/', us: '/kənˈdoʊn/', pos: 'v.', cat: 'gen-act',
  en: 'To accept behaviour that should be criticised, by letting it pass.',
  zh: '纵容：对本应批评的行为听之任之。',
  oe: 'From Latin condonare "to give up, to forgive" (com- + donare "to give"). To condone is to make a gift of the offence.',
  oz: '源自拉丁语 condonare“放弃追究、宽恕”（com- + donare 给予）。纵容就是把过错当作礼物送了出去。',
  se: 'Silence in review condones the pattern for everyone watching.',
  sz: '评审时的沉默，等于向所有旁观者纵容了这种写法。'
},
{
  w: 'undermine', uk: '/ˌʌndəˈmaɪn/', us: '/ˌʌndərˈmaɪn/', pos: 'v.', cat: 'gen-act',
  en: 'To weaken something gradually and from below.',
  zh: '暗中削弱：从底下一点点掏空某事物。',
  oe: 'Literally a siege technique: to dig a mine under a wall so it collapses without ever being struck. The figurative sense keeps the quietness of the attack.',
  oz: '本是攻城战术：在城墙下挖坑道，让墙不受撞击而自行坍塌。比喻义保留了这种“不动声色”的攻击方式。',
  se: 'Skipping the design doc undermines every review that follows.',
  sz: '跳过设计文档，会暗中削弱之后的每一次评审。'
},
{
  w: 'dichotomy', uk: '/daɪˈkɒtəmi/', us: '/daɪˈkɑːtəmi/', pos: 'n.', cat: 'gen-abs',
  en: 'A division into two parts presented as mutually exclusive.',
  zh: '二分法：把事物划成两个被认为互斥的部分。',
  oe: 'Greek dikhotomia "a cutting in two" (dikha "in two" + temnein "to cut") - the same temnein behind atom (uncuttable) and anatomy (cutting up).',
  oz: '希腊语 dikhotomia“一分为二”（dikha 二 + temnein 切）——atom（不可切分）与 anatomy（解剖）同根。',
  se: 'The build-versus-buy dichotomy is usually a false one.',
  sz: '自建还是采购这种二分法，通常是个伪命题。'
},
{
  w: 'precedent', uk: '/ˈpresɪdənt/', us: '/ˈpresɪdənt/', pos: 'n.', cat: 'gen-abs',
  en: 'An earlier case that is taken as a model for later ones.',
  zh: '先例：被后来者当作参照的先前案例。',
  oe: 'From Latin praecedere "to go before" (prae- + cedere "to go") - the same cedere behind concede and recede. Note the stress differs from president.',
  oz: '源自拉丁语 praecedere“走在前面”（prae- + cedere 走）——concede、recede 同根。注意其重音与 president 不同。',
  se: 'The exception you grant today is the precedent you argue with next quarter.',
  sz: '你今天开的口子，就是下个季度要与之争辩的先例。'
},
{
  w: 'propensity', uk: '/prəˈpensəti/', us: '/prəˈpensəti/', pos: 'n.', cat: 'gen-abs',
  en: 'A natural tendency to behave in a particular way.',
  zh: '倾向：天然地以某种方式行事的性向。',
  oe: 'From Latin propensus "inclined, hanging forward" (pro- + pendere "to hang") - the same pendere as compensation and pendulum. A propensity leans you forward.',
  oz: '源自拉丁语 propensus“前倾的”（pro- + pendere 悬垂）——与 compensation、pendulum 同根。倾向就是让你身体前倾的那股力。',
  se: 'Systems have a propensity to fail in the way they were last patched.',
  sz: '系统总倾向于沿着上次打补丁的方式再坏一次。'
},
{
  w: 'conundrum', uk: '/kəˈnʌndrəm/', us: '/kəˈnʌndrəm/', pos: 'n.', cat: 'gen-abs',
  en: 'A problem with no satisfying answer, especially one that turns on a paradox.',
  zh: '难题：没有令人满意答案的问题，尤指其中含有悖论的。',
  oe: 'Origin genuinely unknown - it surfaces as sixteenth-century Oxford slang, possibly a mock-Latin invention. It is one of the few English words whose etymology is honestly a blank.',
  oz: '词源确实不明——它作为 16 世纪牛津的俚语出现，可能是仿拉丁语的生造词。这是少数几个词源老老实实空着的英语单词之一。',
  se: 'Cache invalidation is less a bug than a conundrum.',
  sz: '缓存失效与其说是 bug，不如说是个难题。'
},
{
  w: 'catalyst', uk: '/ˈkætəlɪst/', us: '/ˈkætəlɪst/', pos: 'n.', cat: 'gen-abs',
  en: 'Something that triggers a change without being consumed by it.',
  zh: '催化剂：引发变化本身却不被消耗的事物。',
  oe: 'From Greek katalysis "a dissolving" (kata "down" + lyein "to loosen") - the same lyein behind analysis. Berzelius coined the chemical sense in 1836.',
  oz: '源自希腊语 katalysis“分解”（kata 向下 + lyein 松开）——analysis 同根。1836 年 Berzelius 确立了其化学含义。',
  se: 'The incident was the catalyst, not the cause.',
  sz: '这次事故是催化剂，不是原因。'
},
{
  w: 'hallmark', uk: '/ˈhɔːlmɑːk/', us: '/ˈhɔːlmɑːrk/', pos: 'n.', cat: 'gen-abs',
  en: 'A distinctive feature that reliably identifies something.',
  zh: '标志性特征：能可靠识别出某事物的鲜明特点。',
  oe: 'Literally the mark struck at Goldsmiths\' Hall in London, which since about 1300 has certified the purity of silver. A hallmark is a guarantee stamped in metal.',
  oz: '字面指伦敦金匠会馆（Goldsmiths\' Hall）打上的印记——自约 1300 年起用以证明白银成色。所谓 hallmark，就是砸进金属里的一纸保证。',
  se: 'Clear failure modes are the hallmark of a mature system.',
  sz: '故障模式清晰，是成熟系统的标志性特征。'
},
{
  w: 'impetus', uk: '/ˈɪmpɪtəs/', us: '/ˈɪmpɪtəs/', pos: 'n.', cat: 'gen-abs',
  en: 'The force or motive that starts something moving.',
  zh: '推动力：让某事开始运转的力量或动机。',
  oe: 'From Latin impetus "an attack, a rush" (in- + petere "to seek, to rush at") - the same petere behind appetite, compete and petition.',
  oz: '源自拉丁语 impetus“冲击、猛冲”（in- + petere 寻求、扑向）——appetite、compete、petition 同根。',
  se: 'The audit gave the migration its impetus.',
  sz: '那次审计给了这次迁移真正的推动力。'
},
{
  w: 'paradox', uk: '/ˈpærədɒks/', us: '/ˈpærədɑːks/', pos: 'n.', cat: 'gen-abs',
  en: 'A statement that contradicts itself yet may still be true.',
  zh: '悖论：自相矛盾却仍可能为真的陈述。',
  oe: 'Greek paradoxos "contrary to expectation" (para "beyond" + doxa "opinion") - the same doxa behind orthodox and dogma.',
  oz: '希腊语 paradoxos“出乎意料的”（para 超出 + doxa 观点）——orthodox、dogma 同根。',
  se: 'Jevons\' paradox: making a resource cheaper can increase total use.',
  sz: '杰文斯悖论：让一种资源变便宜，反而可能增加总消耗。'
},
{
  w: 'quandary', uk: '/ˈkwɒndəri/', us: '/ˈkwɑːndəri/', pos: 'n.', cat: 'gen-abs',
  en: 'A state of uncertainty over which of two difficult options to take.',
  zh: '进退两难：在两个艰难选项之间难以决断的状态。',
  oe: 'Origin uncertain; it appears in the sixteenth century, possibly a jocular formation on Latin quando "when" - the state of asking "when will I know?".',
  oz: '词源不确定；16 世纪出现，可能是拿拉丁语 quando“何时”开的玩笑式构词——一种不断追问“我什么时候才能知道”的状态。',
  se: 'The classic quandary: ship it late, or ship it wrong.',
  sz: '经典的两难：要么迟发，要么发错。'
},
{
  w: 'zeitgeist', uk: '/ˈzaɪtɡaɪst/', us: '/ˈzaɪtɡaɪst/', pos: 'n.', cat: 'gen-abs',
  en: 'The defining mood and set of assumptions of a period.',
  zh: '时代精神：某个时期特有的氛围与共同预设。',
  oe: 'German Zeit "time" + Geist "spirit", carried into English from Hegel and the German Romantics. English kept the capital-free spelling but the German sense intact.',
  oz: '德语 Zeit（时间）+ Geist（精神），经黑格尔与德国浪漫派传入英语。英语去掉了德语的首字母大写，但保留了原义。',
  se: 'Half of what a benchmark measures is the zeitgeist of its year.',
  sz: '一个基准所测的东西，有一半是它那一年的时代风气。'
},
{
  w: 'juxtaposition', uk: '/ˌdʒʌkstəpəˈzɪʃn/', us: '/ˌdʒʌkstəpəˈzɪʃn/', pos: 'n.', cat: 'gen-abs',
  en: 'Placing two things side by side so the contrast becomes visible.',
  zh: '并置：把两样东西摆在一起，让对比显现出来。',
  oe: 'From Latin juxta "beside" + position - the same juxta behind adjust\'s cousin joust, and the legal juxta.',
  oz: '由拉丁语 juxta（在旁边）+ position 构成——juxta 也见于其他法律与古语用法中。',
  se: 'The juxtaposition of the two graphs made the regression obvious.',
  sz: '把两张图并排一放，性能回退就一目了然了。'
},
{
  w: 'watershed', uk: '/ˈwɔːtəʃed/', us: '/ˈwɔːtərʃed/', pos: 'n.', cat: 'gen-abs',
  en: 'A turning point after which things go a different way.',
  zh: '分水岭：此后事情走向另一条路的转折点。',
  oe: 'Literally the ridge that divides two river basins: rain falling one metre either side ends in a different ocean. The figurative sense keeps that knife edge.',
  oz: '字面指分隔两个流域的山脊：落在两侧相距一米的雨水，最终流入不同的大洋。比喻义保留了这种刀锋般的临界感。',
  se: 'That release was a watershed for the project\'s reliability.',
  sz: '那个版本是这个项目可靠性上的分水岭。'
},
{
  w: 'crux', uk: '/krʌks/', us: '/krʌks/', pos: 'n.', cat: 'gen-abs',
  en: 'The decisive point on which everything else turns.',
  zh: '关键：其余一切都由之决定的那个要点。',
  oe: 'Latin crux "a cross". The phrase crux interpretum meant a passage that tortured its interpreters - the difficulty that crucifies, which is also why it is crucial.',
  oz: '拉丁语 crux“十字架”。crux interpretum 指令注释者备受折磨的段落——那种把人钉死的难点；crucial（关键的）也由此而来。',
  se: 'The crux is not the algorithm, it is the data contract.',
  sz: '关键不在算法，而在数据契约。'
},
{
  w: 'nadir', uk: '/ˈneɪdɪə/', us: '/ˈneɪdɪr/', pos: 'n.', cat: 'gen-abs',
  en: 'The lowest point.',
  zh: '最低点：谷底。',
  oe: 'From Arabic nazir as-samt "opposite the zenith". Both nadir and zenith entered European languages from Arabic astronomy, and zenith is a medieval misreading of the same samt.',
  oz: '源自阿拉伯语 nazir as-samt“天顶的对立点”。nadir 与 zenith 都经阿拉伯天文学进入欧洲语言，而 zenith 正是对同一个 samt 的中世纪误读。',
  se: 'The nadir was week three, when the tests stopped passing entirely.',
  sz: '最低谷是第三周，那时测试彻底跑不过了。'
},
{
  w: 'inertia', uk: '/ɪˈnɜːʃə/', us: '/ɪˈnɜːrʃə/', pos: 'n.', cat: 'gen-abs',
  en: 'The tendency of a system to keep doing what it is already doing.',
  zh: '惯性：系统倾向于继续维持现有状态的性质。',
  oe: 'From Latin iners "unskilled, idle" (in- "without" + ars "skill, art"). Kepler gave it the physical meaning; organisations restored the original flavour of idleness.',
  oz: '源自拉丁语 iners“无技艺的、懒散的”（in- 无 + ars 技艺）。开普勒赋予它物理含义，而组织机构又把“懒散”这层原味还了回来。',
  se: 'Architectural inertia is measured in quarters, not sprints.',
  sz: '架构惯性的度量单位是季度，不是迭代。'
}
];
