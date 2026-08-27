/*
 * 思辨与逻辑 — 手写条目（含词源与例句）/ hand-written entries with etymology
 * 由 scripts/build.mjs 读取；同名词会覆盖词典生成的条目
 * Read by scripts/build.mjs; these override the dictionary-generated entries
 */
export default [
{
  w: 'premise', uk: '/ˈpremɪs/', us: '/ˈpremɪs/', pos: 'n.', cat: 'rea-logic',
  en: 'A statement assumed to be true, from which a conclusion is drawn.',
  zh: '前提：被假定为真、用以推出结论的陈述。',
  oe: 'From Latin praemissa "(propositions) sent before" (prae- "before" + mittere "to send") - the same mittere behind commit, mission and transmit. Premises as a building comes from the same word: the property described earlier in a deed.',
  oz: '源自拉丁语 praemissa“先行送出的（命题）”（prae- 之前 + mittere 发送）——commit、mission、transmit 同根。表示“房产”的 premises 也来自此词：契约中先前描述的那处产业。',
  se: 'The argument is valid; the premise is what fails.',
  sz: '这个论证是有效的，出问题的是前提。'
},
{
  w: 'corollary', uk: '/kəˈrɒləri/', us: '/ˈkɔːrəleri/', pos: 'n.', cat: 'rea-logic',
  en: 'A result that follows immediately from something already proved.',
  zh: '推论：由已证结论直接推出的结果。',
  oe: 'From Latin corollarium "money paid for a garland, a gratuity" (corolla "a little crown"). A corollary was a bonus thrown in with the theorem you paid for.',
  oz: '源自拉丁语 corollarium“买花环的钱、小费”（corolla 小花冠）。推论就是你买定理时对方额外奉送的赠品。',
  se: 'As a corollary, no lock-free queue can be fair.',
  sz: '作为推论，任何无锁队列都不可能是公平的。'
},
{
  w: 'deduction', uk: '/dɪˈdʌkʃn/', us: '/dɪˈdʌkʃn/', pos: 'n.', cat: 'rea-logic',
  en: 'Reasoning from general rules to a specific case, where truth is preserved.',
  zh: '演绎：从一般规则推向具体情形，真值在推理中得以保持。',
  oe: 'From Latin deducere "to lead down or away" (de- + ducere "to lead"). Sherlock Holmes\' famous "deductions" are mostly induction, strictly speaking.',
  oz: '源自拉丁语 deducere“引下、引开”（de- + ducere 引导）。严格说来，福尔摩斯著名的“演绎”大多其实是归纳。',
  se: 'Deduction cannot give you more than the premises contained.',
  sz: '演绎给不了你超出前提所含的东西。'
},
{
  w: 'induction', uk: '/ɪnˈdʌkʃn/', us: '/ɪnˈdʌkʃn/', pos: 'n.', cat: 'rea-logic',
  en: 'Reasoning from observed cases to a general rule, which may still be wrong.',
  zh: '归纳：从已观察到的个例推出一般规则，而该规则仍可能是错的。',
  oe: 'From Latin inducere "to lead in" (in- + ducere). Hume\'s problem of induction asks what licenses the leap - and nobody has fully answered him.',
  oz: '源自拉丁语 inducere“引入”（in- + ducere）。休谟的归纳问题追问这一跃迁凭什么成立——至今无人给出完整答案。',
  se: 'Mathematical induction is a proof; empirical induction is a bet.',
  sz: '数学归纳法是证明，经验归纳则是打赌。'
},
{
  w: 'syllogism', uk: '/ˈsɪlədʒɪzəm/', us: '/ˈsɪlədʒɪzəm/', pos: 'n.', cat: 'rea-logic',
  en: 'A two-premise argument form: all A are B, this is A, therefore this is B.',
  zh: '三段论：由两个前提构成的论证形式——凡 A 皆 B，此为 A，故此为 B。',
  oe: 'Greek syllogismos "a reckoning together" (syn "together" + logizesthai "to reckon"). Aristotle built his whole logic on it.',
  oz: '希腊语 syllogismos“合起来计算”（syn 一起 + logizesthai 推算）。亚里士多德的整套逻辑学都建立在它之上。',
  se: 'A valid syllogism with a false premise still gives a false conclusion.',
  sz: '前提为假的三段论即便有效，结论依然为假。'
},
{
  w: 'tautology', uk: '/tɔːˈtɒlədʒi/', us: '/tɔːˈtɑːlədʒi/', pos: 'n.', cat: 'rea-logic',
  en: 'A statement true by its own form, and therefore carrying no information.',
  zh: '重言式：因自身形式而必然为真、因而不携带信息的陈述。',
  oe: 'Greek tauto "the same" + logos "word" - saying the same thing twice. In logic it is a virtue; in prose it is a fault.',
  oz: '希腊语 tauto（相同）+ logos（言）——把同一件事说两遍。在逻辑中它是优点，在文章里则是毛病。',
  se: '"The model works when it works" is a tautology, not a finding.',
  sz: '“模型有效的时候就有效”是重言式，不是结论。'
},
{
  w: 'axiom', uk: '/ˈæksiəm/', us: '/ˈæksiəm/', pos: 'n.', cat: 'rea-logic',
  en: 'A statement accepted without proof, as a starting point for a system.',
  zh: '公理：不加证明即被接受、作为体系起点的命题。',
  oe: 'From Greek axioma "that which is thought worthy", from axios "worthy" - literally a claim worth granting without argument.',
  oz: '源自希腊语 axioma“被认为值得的东西”，词根 axios“配得上”——字面就是“不必争辩即值得承认的主张”。',
  se: 'Change one axiom and you get a different, equally consistent geometry.',
  sz: '改动一条公理，你就得到另一套同样自洽的几何学。'
},
{
  w: 'postulate', uk: '/ˈpɒstjuleɪt/', us: '/ˈpɑːstʃəleɪt/', pos: 'v./n.', cat: 'rea-logic',
  en: 'To assume something as a basis for argument; the assumption itself.',
  zh: '假设／公设：把某事设为论证基础；也指该假设本身。',
  oe: 'From Latin postulare "to ask, to demand". A postulate is something the argument demands you grant it before it will proceed.',
  oz: '源自拉丁语 postulare“请求、要求”。公设就是论证在往下走之前，要求你先答应它的东西。',
  se: 'Euclid\'s fifth postulate turned out to be optional.',
  sz: '欧几里得第五公设最终被证明是可选的。'
},
{
  w: 'refute', uk: '/rɪˈfjuːt/', us: '/rɪˈfjuːt/', pos: 'v.', cat: 'rea-logic',
  en: 'To prove a claim false - not merely to deny it.',
  zh: '驳倒：证明某个论断为假，而不只是否认它。',
  oe: 'From Latin refutare "to drive back, to repel" (re- + futare "to beat"). Careful writers keep refute for proof and use deny or reject for mere disagreement.',
  oz: '源自拉丁语 refutare“击退”（re- + futare 击打）。讲究的作者把 refute 留给“已证明为假”，仅表示不同意时用 deny 或 reject。',
  se: 'One counterexample refutes a universal claim.',
  sz: '一个反例就能驳倒一个全称命题。'
},
{
  w: 'falsifiable', uk: '/ˈfɔːlsɪfaɪəbl/', us: '/ˈfɔːlsɪfaɪəbl/', pos: 'adj.', cat: 'rea-logic',
  en: 'Framed so that some possible observation could show it to be false.',
  zh: '可证伪的：其表述方式使得某种可能的观察足以证明它为假。',
  oe: 'From Latin falsus "deceived" + facere "to make". Karl Popper made falsifiability the line between science and everything that only sounds like it.',
  oz: '源自拉丁语 falsus（被欺骗的）+ facere（造成）。卡尔·波普尔把可证伪性立为科学与“听起来像科学”之间的分界线。',
  se: 'If no result could disprove it, the claim is not falsifiable.',
  sz: '如果没有任何结果能推翻它，那这个论断就是不可证伪的。'
},
{
  w: 'contingent', uk: '/kənˈtɪndʒənt/', us: '/kənˈtɪndʒənt/', pos: 'adj.', cat: 'rea-logic',
  en: 'True or happening only under certain conditions; not necessary.',
  zh: '偶然的／取决于条件的：只在特定条件下成立，并非必然。',
  oe: 'From Latin contingere "to touch, to befall" (com- + tangere "to touch") - the same tangere behind contact, tangent and, oddly, taste. What is contingent merely happens to touch.',
  oz: '源自拉丁语 contingere“触及、碰巧发生”（com- + tangere 触碰）——contact、tangent 同根，taste 也出人意料地同源。偶然之事只是“碰巧碰到了”。',
  se: 'The speedup is contingent on the batch fitting in cache.',
  sz: '这个加速比取决于批次能否装进缓存。'
},
{
  w: 'vacuous', uk: '/ˈvækjuəs/', us: '/ˈvækjuəs/', pos: 'adj.', cat: 'rea-logic',
  en: 'Empty of content; in logic, trivially true because the condition never applies.',
  zh: '空洞的：没有实质内容；在逻辑中指因条件从不成立而平凡为真。',
  oe: 'From Latin vacuus "empty" - the same vacuus behind vacuum, vacant and evacuate. "All my unicorns are blue" is vacuously true.',
  oz: '源自拉丁语 vacuus“空的”——vacuum、vacant、evacuate 同根。“我所有的独角兽都是蓝色的”就是空洞地为真。',
  se: 'The test passes vacuously: the loop body never runs.',
  sz: '这个测试是空洞通过的：循环体根本没执行。'
},
{
  w: 'entail', uk: '/ɪnˈteɪl/', us: '/ɪnˈteɪl/', pos: 'v.', cat: 'rea-logic',
  en: 'To have as a necessary consequence.',
  zh: '蕴含：必然导致某个结果。',
  oe: 'From Old French entaillier "to cut into", and in English law "to settle land on a fixed line of heirs" - an inheritance cut so it cannot be redirected. Logic borrowed the inevitability.',
  oz: '源自古法语 entaillier“刻入”，在英国法中指“限定继承”——把继承权刻死，无法改道。逻辑学借用的正是这种不可更改性。',
  se: 'Linearizability entails serializability, but not the reverse.',
  sz: '线性一致性蕴含可串行化，反之则不然。'
},
{
  w: 'warrant', uk: '/ˈwɒrənt/', us: '/ˈwɔːrənt/', pos: 'n./v.', cat: 'rea-logic',
  en: 'The unstated principle that licenses moving from evidence to claim.',
  zh: '论证依据：把证据连到结论上的那条通常未言明的原则。',
  oe: 'From Old North French warant "a protector, an authorization", a Germanic word doubled by French garant - which is why English has both warrant and guarantee. Toulmin made "warrant" a technical term in argument analysis.',
  oz: '源自古北法语 warant“保护者、授权”，这个日耳曼词在法语中还有个变体 garant——所以英语同时有 warrant 和 guarantee。图尔敏把 warrant 定为论证分析的术语。',
  se: 'The data is fine; the warrant connecting it to the claim is missing.',
  sz: '数据没问题，缺的是把数据连向结论的那条依据。'
},
{
  w: 'fallacy', uk: '/ˈfæləsi/', us: '/ˈfæləsi/', pos: 'n.', cat: 'rea-rhet',
  en: 'A pattern of reasoning that seems valid but is not.',
  zh: '谬误：看似有效、实则站不住的推理模式。',
  oe: 'From Latin fallacia "deceit", from fallere "to deceive" - the same fallere behind false, fail, fault and default, which is literally a failing.',
  oz: '源自拉丁语 fallacia“欺骗”，词根 fallere“欺瞒”——false、fail、fault 同根；default 字面就是“失职”。',
  se: 'The sunk-cost fallacy is why the rewrite is still running.',
  sz: '沉没成本谬误，正是那次重写至今还在继续的原因。'
},
{
  w: 'rhetoric', uk: '/ˈretərɪk/', us: '/ˈretərɪk/', pos: 'n.', cat: 'rea-rhet',
  en: 'The art of persuasion; or, dismissively, language that persuades without substance.',
  zh: '修辞（学）：说服的技艺；也可贬指没有实质、只求说服的言辞。',
  oe: 'From Greek rhetorike tekhne "the orator\'s art", from rhetor "a public speaker". For the Greeks it was a discipline taught alongside logic, not an insult.',
  oz: '源自希腊语 rhetorike tekhne“演说家之技艺”，词根 rhetor“公开演说者”。在希腊人那里，它是与逻辑并列的正经学科，而非贬义词。',
  se: 'Strip the rhetoric and check whether a number survives.',
  sz: '把修辞剥掉，看看还剩不剩得下一个数字。'
},
{
  w: 'hyperbole', uk: '/haɪˈpɜːbəli/', us: '/haɪˈpɜːrbəli/', pos: 'n.', cat: 'rea-rhet',
  en: 'Deliberate exaggeration used for effect, not meant literally.',
  zh: '夸张：为效果而刻意放大，并非字面意思。',
  oe: 'Greek hyperbole "a throwing beyond" (hyper + ballein "to throw") - the same ballein behind ballistic, problem and symbol. Note it has four syllables.',
  oz: '希腊语 hyperbole“投掷过头”（hyper + ballein 投掷）——ballistic、problem、symbol 同根。注意它读四个音节。',
  se: 'Benchmark headlines are hyperbole with a decimal point.',
  sz: '基准测试的标题就是带小数点的夸张。'
},
{
  w: 'euphemism', uk: '/ˈjuːfəmɪzəm/', us: '/ˈjuːfəmɪzəm/', pos: 'n.', cat: 'rea-rhet',
  en: 'A mild word substituted for one felt to be too blunt.',
  zh: '委婉语：用温和的说法替换掉过于直白的措辞。',
  oe: 'Greek euphemismos "the use of a good word" (eu "well" + pheme "speech"). The Greeks used euphemism partly to avoid naming things they feared.',
  oz: '希腊语 euphemismos“说吉利话”（eu 好 + pheme 言说）。希腊人使用委婉语，部分是为了避免直呼所惧之物的名字。',
  se: '"Deprioritised" is the standard euphemism for cancelled.',
  sz: '“降低优先级”是“取消”的标准委婉说法。'
},
{
  w: 'polemic', uk: '/pəˈlemɪk/', us: '/pəˈlemɪk/', pos: 'n.', cat: 'rea-rhet',
  en: 'A forcefully one-sided attack on a position.',
  zh: '论战檄文：对某个立场毫不掩饰的单方面猛烈攻击。',
  oe: 'From Greek polemikos "warlike", from polemos "war". A polemic does not pretend to be balanced; the word admits it.',
  oz: '源自希腊语 polemikos“好战的”，词根 polemos“战争”。檄文从不假装公允——这个词本身就承认了这点。',
  se: 'The post is a polemic, which is fine as long as it says so.',
  sz: '这篇帖子是一篇论战檄文——只要它说明了这点，就没什么问题。'
},
{
  w: 'sophistry', uk: '/ˈsɒfɪstri/', us: '/ˈsɑːfɪstri/', pos: 'n.', cat: 'rea-rhet',
  en: 'Clever reasoning that is deliberately misleading.',
  zh: '诡辩：巧妙却有意误导的推理。',
  oe: 'From Greek sophistes "a wise man, a teacher of rhetoric". The Sophists charged fees to teach argument, and Plato\'s hostility turned their name into an accusation.',
  oz: '源自希腊语 sophistes“智者、修辞教师”。智者派收费教人辩论，柏拉图对他们的敌意让这个名字变成了指控。',
  se: 'Redefining the metric mid-argument is sophistry, not analysis.',
  sz: '论证中途重新定义指标，那是诡辩，不是分析。'
},
{
  w: 'dogma', uk: '/ˈdɒɡmə/', us: '/ˈdɔːɡmə/', pos: 'n.', cat: 'rea-rhet',
  en: 'A belief held as beyond question.',
  zh: '教条：被当作不容置疑的信条。',
  oe: 'From Greek dogma "an opinion, a tenet", from dokein "to seem good". What merely seemed good hardened into what may not be doubted.',
  oz: '源自希腊语 dogma“看法、信条”，词根 dokein“看起来不错”。本来只是“看着还行”的东西，硬化成了不容怀疑之物。',
  se: 'Microservices became dogma before they became understood.',
  sz: '微服务在被理解之前，就先成了教条。'
},
{
  w: 'rebuttal', uk: '/rɪˈbʌtl/', us: '/rɪˈbʌtl/', pos: 'n.', cat: 'rea-rhet',
  en: 'A reply that answers an argument point by point.',
  zh: '反驳：对某个论证逐点作出的回应。',
  oe: 'From Old French bouter "to thrust, to push" - the same bouter behind butt and button. A rebuttal thrusts the argument back.',
  oz: '源自古法语 bouter“推、顶”——butt、button 同根。反驳就是把论证顶回去。',
  se: 'The rebuttal phase is where most papers are actually decided.',
  sz: '大多数论文的命运，其实是在 rebuttal 阶段定下的。'
},
{
  w: 'caricature', uk: '/ˈkærɪkətʃʊə/', us: '/ˈkærɪkətʃʊr/', pos: 'n./v.', cat: 'rea-rhet',
  en: 'An exaggerated portrayal that distorts by overstating one feature.',
  zh: '漫画式歪曲：夸大某一特征而造成失真的刻画。',
  oe: 'From Italian caricare "to load, to exaggerate", from Latin carrus "a wagon" - the same carrus behind cargo and charge. A caricature is an overloaded portrait.',
  oz: '源自意大利语 caricare“装载、夸大”，来自拉丁语 carrus“货车”——cargo、charge 同根。漫画式歪曲就是一幅超载的肖像。',
  se: 'Do not caricature the position you are about to argue against.',
  sz: '不要把你即将反驳的立场先歪曲一番。'
},
{
  w: 'innuendo', uk: '/ˌɪnjuˈendəʊ/', us: '/ˌɪnjuˈendoʊ/', pos: 'n.', cat: 'rea-rhet',
  en: 'An indirect hint, usually damaging, that is never quite stated.',
  zh: '暗示影射：一种从不明说、通常带有伤害性的间接暗指。',
  oe: 'Latin innuendo "by nodding at", the gerund of innuere (in- + nuere "to nod"). It entered English through legal documents, where it introduced the implied meaning of a defamatory phrase.',
  oz: '拉丁语 innuendo“以点头示意”，是 innuere（in- + nuere 点头）的动名词。它经由法律文书进入英语，用来引出诽谤语句的言外之意。',
  se: 'The review was all innuendo and no reproducible complaint.',
  sz: '那份评审全是影射，没有一条可复现的具体意见。'
},
{
  w: 'epithet', uk: '/ˈepɪθet/', us: '/ˈepɪθet/', pos: 'n.', cat: 'rea-rhet',
  en: 'A descriptive label attached to a name, whether flattering or not.',
  zh: '称号／绰号：附在名字上的描述性标签，褒贬皆可。',
  oe: 'Greek epitheton "added, attributed" (epi + tithenai "to place") - the same tithenai behind thesis. Homer\'s "swift-footed Achilles" is the classic epithet.',
  oz: '希腊语 epitheton“附加的”（epi + tithenai 放置）——与 thesis 同根。荷马笔下的“捷足的阿喀琉斯”就是经典的 epithet。',
  se: '"Legacy" is an epithet, not a technical description.',
  sz: '“遗留系统”是个称号，不是技术描述。'
},
{
  w: 'dialectic', uk: '/ˌdaɪəˈlektɪk/', us: '/ˌdaɪəˈlektɪk/', pos: 'n.', cat: 'rea-rhet',
  en: 'Reaching truth by setting opposing positions against each other.',
  zh: '辩证法：通过让对立立场相互交锋来逼近真理。',
  oe: 'Greek dialektike "the art of debate" (dia "across" + legein "to speak") - the same legein behind logic and dialogue. Socrates practised it; Hegel systematised it.',
  oz: '希腊语 dialektike“辩论之术”（dia 交叉 + legein 说）——logic、dialogue 同根。苏格拉底实践它，黑格尔将其体系化。',
  se: 'A good design review is dialectic, not a vote.',
  sz: '好的设计评审是辩证的交锋，不是投票。'
},
{
  w: 'specious', uk: '/ˈspiːʃəs/', us: '/ˈspiːʃəs/', pos: 'adj.', cat: 'rea-rhet',
  en: 'Superficially convincing but actually wrong.',
  zh: '似是而非的：表面上很有说服力，实则错误。',
  oe: 'From Latin speciosus "good-looking, showy", from species "appearance". For two centuries the English word simply meant beautiful; the modern sense is what happens when beauty is taken as evidence.',
  oz: '源自拉丁语 speciosus“好看的、炫目的”，词根 species“外观”。此词在英语中曾有两百年只表示“美丽”；如今的贬义，正是把“好看”当成证据的后果。',
  se: 'The benchmark is specious: it measures the cache, not the model.',
  sz: '这个基准似是而非——它测的是缓存，不是模型。'
}
];
