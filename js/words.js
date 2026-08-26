/*
 * TechLex 词库 / Word bank
 * ------------------------------------------------------------------
 * 两级分类 / Two levels:
 *   TRACK  大类 —— 技术英语、学术与论文、职场与商务、高阶通用词、思辨与逻辑
 *   CATEGORY 小类 —— 每个大类下的若干子分类
 *
 * 字段说明 / Field reference:
 *   w      单词 word
 *   uk/us  英式 / 美式音标 British / American IPA
 *   pos    词性 part of speech
 *   cat    所属小类 category id
 *   en/zh  释义 definition (English / 中文)
 *   oe/oz  词源与典故 etymology & story (English / 中文)
 *   se/sz  例句 example sentence (English / 中文)
 */

window.TRACKS = [
  { id: 'tech', zh: '技术英语',     en: 'Tech English' },
  { id: 'acad', zh: '学术与论文',   en: 'Academic & Research' },
  { id: 'work', zh: '职场与商务',   en: 'Workplace & Business' },
  { id: 'gen',  zh: '高阶通用词',   en: 'Advanced General' },
  { id: 'rea',  zh: '思辨与逻辑',   en: 'Reasoning & Argument' }
];

window.CATEGORIES = [
  /* 技术英语 tech */
  { id: 'ai',          track: 'tech', zh: '人工智能与机器学习', en: 'AI & Machine Learning' },
  { id: 'algo',        track: 'tech', zh: '算法与数据结构',     en: 'Algorithms & Data Structures' },
  { id: 'sde',         track: 'tech', zh: '软件工程',           en: 'Software Engineering' },
  { id: 'sys',         track: 'tech', zh: '系统与分布式',       en: 'Systems & Distributed' },
  { id: 'net',         track: 'tech', zh: '网络工程',           en: 'Network Engineering' },
  /* 学术与论文 acad */
  { id: 'acad-verb',   track: 'acad', zh: '学术动词',           en: 'Academic Verbs' },
  { id: 'acad-eval',   track: 'acad', zh: '论证与评价',         en: 'Argument & Evaluation' },
  { id: 'acad-meth',   track: 'acad', zh: '方法与结构',         en: 'Method & Structure' },
  /* 职场与商务 work */
  { id: 'work-comm',   track: 'work', zh: '沟通与协作',         en: 'Communication' },
  { id: 'work-biz',    track: 'work', zh: '商业与产品',         en: 'Business & Product' },
  { id: 'work-career', track: 'work', zh: '求职与职涯',         en: 'Career' },
  /* 高阶通用词 gen */
  { id: 'gen-desc',    track: 'gen',  zh: '性质与描述',         en: 'Qualities' },
  { id: 'gen-act',     track: 'gen',  zh: '行为与态度',         en: 'Actions & Attitudes' },
  { id: 'gen-abs',     track: 'gen',  zh: '抽象概念',           en: 'Abstract Concepts' },
  /* 思辨与逻辑 rea */
  { id: 'rea-logic',   track: 'rea',  zh: '逻辑与论证',         en: 'Logic & Proof' },
  { id: 'rea-rhet',    track: 'rea',  zh: '修辞与谬误',         en: 'Rhetoric & Fallacies' }
];

window.WORDS = [

/* ============================ AI / ML ============================ */
{
  w: 'algorithm', uk: '/ˈælɡərɪðəm/', us: '/ˈælɡərɪðəm/', pos: 'n.', cat: 'ai',
  en: 'A finite, unambiguous sequence of steps that transforms an input into a desired output.',
  zh: '算法：一组有限且无歧义的步骤，把输入变换成期望的输出。',
  oe: 'From Algoritmi, the Latinised name of the 9th-century Persian mathematician al-Khwarizmi, whose treatise introduced Hindu-Arabic numerals to Europe. Later spelling was reshaped by Greek arithmos ("number").',
  oz: '源自 9 世纪波斯数学家花拉子米（al-Khwārizmī）名字的拉丁化写法 Algoritmi，他的著作把印度-阿拉伯数字带入欧洲；后来拼写又受希腊语 arithmos（数）影响而变形。',
  se: 'A good algorithm beats a fast machine on a large input.',
  sz: '在大规模输入上，一个好算法胜过一台快机器。'
},
{
  w: 'heuristic', uk: '/hjuˈrɪstɪk/', us: '/hjuˈrɪstɪk/', pos: 'n./adj.', cat: 'ai',
  en: 'A practical rule of thumb that finds a good-enough solution quickly, without guaranteeing optimality.',
  zh: '启发式（方法）：能快速找到足够好的解、但不保证最优的经验法则。',
  oe: 'From Greek heuriskein "to find, discover" — the same verb behind Archimedes\' cry "Eureka!" ("I have found it").',
  oz: '源自希腊语 heuriskein“发现、找到”，与阿基米德那句“Eureka（我找到了）”同根。',
  se: 'A* uses an admissible heuristic to prune the search space.',
  sz: 'A* 算法用一个可采纳的启发函数来剪枝搜索空间。'
},
{
  w: 'gradient', uk: '/ˈɡreɪdiənt/', us: '/ˈɡreɪdiənt/', pos: 'n.', cat: 'ai',
  en: 'The vector of partial derivatives pointing in the direction of steepest increase of a function.',
  zh: '梯度：由偏导数构成的向量，指向函数上升最快的方向。',
  oe: 'From Latin gradi "to step, walk" (as in gradus "a step"). A railway engineer\'s word for the slope of a track, borrowed by calculus.',
  oz: '源自拉丁语 gradi“行走、迈步”（gradus 为“台阶”）。原是铁路工程师描述坡度的词，后被微积分借用。',
  se: 'The gradient vanished, so the deep layers stopped learning.',
  sz: '梯度消失了，于是深层网络停止了学习。'
},
{
  w: 'stochastic', uk: '/stəˈkæstɪk/', us: '/stəˈkæstɪk/', pos: 'adj.', cat: 'ai',
  en: 'Randomly determined; described by a probability distribution rather than a fixed rule.',
  zh: '随机的：由概率分布而非确定规则决定的。',
  oe: 'From Greek stokhastikos "able to guess", from stokhos "a target to aim at" — the archer who aims at a mark but cannot be sure where the arrow lands.',
  oz: '源自希腊语 stokhastikos“善于猜测的”，词根 stokhos 意为“靶子”——射手瞄准靶心，却无法确定箭落何处。',
  se: 'Stochastic gradient descent samples a mini-batch at each step.',
  sz: '随机梯度下降在每一步采样一个小批量数据。'
},
{
  w: 'epoch', uk: '/ˈiːpɒk/', us: '/ˈepək/', pos: 'n.', cat: 'ai',
  en: 'One complete pass of the training algorithm over the entire training set.',
  zh: '轮次：训练算法完整遍历一次全部训练集。',
  oe: 'From Greek epokhe "a fixed point in time, a pause", literally "a holding back" (epi + ekhein "to hold"). Astronomers used it for the reference instant of a star chart.',
  oz: '源自希腊语 epokhe“时间上的定点、停顿”，字面为“止住”（epi + ekhein 持有）。天文学家用它指星图的参考时刻。',
  se: 'Validation loss started rising after the twelfth epoch.',
  sz: '从第十二轮开始，验证损失就开始上升了。'
},
{
  w: 'tensor', uk: '/ˈtensə/', us: '/ˈtensər/', pos: 'n.', cat: 'ai',
  en: 'A multi-dimensional array of numbers that transforms in a well-defined way under a change of basis.',
  zh: '张量：多维数值数组，在基变换下按确定规律变换。',
  oe: 'From Latin tendere "to stretch". Coined in the 1840s for the quantity measuring stretch in an elastic body; Voigt gave it its modern mathematical sense.',
  oz: '源自拉丁语 tendere“拉伸”。1840 年代用来表示弹性体中的拉伸量，后由 Voigt 赋予现代数学含义。',
  se: 'Reshape the tensor to (batch, sequence, hidden) before the attention layer.',
  sz: '在进入注意力层前，把张量重塑为 (batch, sequence, hidden)。'
},
{
  w: 'convolution', uk: '/ˌkɒnvəˈluːʃn/', us: '/ˌkɑːnvəˈluːʃn/', pos: 'n.', cat: 'ai',
  en: 'An operation that slides a kernel over an input, computing a weighted sum at every position.',
  zh: '卷积：让卷积核在输入上滑动，在每个位置计算加权和的运算。',
  oe: 'From Latin convolvere "to roll together" (con- "together" + volvere "to roll", also behind volume and revolve) — the two functions are literally rolled over each other.',
  oz: '源自拉丁语 convolvere“卷在一起”（con- 一起 + volvere 滚动，volume、revolve 同源）——两个函数确实是相互“卷”过去的。',
  se: 'A 3x3 convolution with stride 2 halves the spatial resolution.',
  sz: '步长为 2 的 3x3 卷积会把空间分辨率减半。'
},
{
  w: 'perceptron', uk: '/pəˈseptrɒn/', us: '/pərˈseptrɑːn/', pos: 'n.', cat: 'ai',
  en: 'The simplest neural unit: a weighted sum of inputs passed through a threshold function.',
  zh: '感知机：最简单的神经单元，对输入加权求和后经过阈值函数。',
  oe: 'Coined by Frank Rosenblatt in 1958 from perception + -tron, the Greek suffix for an instrument or particle (electron, cyclotron).',
  oz: '由 Frank Rosenblatt 于 1958 年造词，取自 perception（感知）+ 希腊语后缀 -tron（仪器/粒子，如 electron、cyclotron）。',
  se: 'A single perceptron cannot learn the XOR function.',
  sz: '单个感知机无法学会异或函数。'
},
{
  w: 'regularization', uk: '/ˌreɡjələraɪˈzeɪʃn/', us: '/ˌreɡjələrəˈzeɪʃn/', pos: 'n.', cat: 'ai',
  en: 'Any technique that constrains a model in order to reduce variance and improve generalisation.',
  zh: '正则化：为降低方差、提升泛化能力而对模型施加约束的各种技术。',
  oe: 'From Latin regula "a straight stick, a ruler, a rule" — the carpenter\'s tool that also gives us rule and regular. Regularizing is literally keeping the model in line.',
  oz: '源自拉丁语 regula“直尺、规则”——木匠的工具，也是 rule、regular 的词源。正则化字面上就是“让模型守规矩”。',
  se: 'Weight decay is the most common form of regularization.',
  sz: '权重衰减是最常见的正则化手段。'
},
{
  w: 'overfitting', uk: '/ˌəʊvəˈfɪtɪŋ/', us: '/ˌoʊvərˈfɪtɪŋ/', pos: 'n.', cat: 'ai',
  en: 'Learning the noise of the training set so closely that performance on unseen data degrades.',
  zh: '过拟合：把训练集的噪声也学了进去，导致在未见数据上表现变差。',
  oe: 'A transparent compound of over- "excessively" and fit, borrowed from statistics, where a curve can be fitted too tightly to the observed points.',
  oz: '由 over-（过度）与 fit（拟合）构成，借自统计学：曲线可以被拟合得过于贴合观测点。',
  se: 'The training loss kept falling while validation loss rose - classic overfitting.',
  sz: '训练损失一直下降而验证损失上升，这是典型的过拟合。'
},
{
  w: 'inference', uk: '/ˈɪnfərəns/', us: '/ˈɪnfərəns/', pos: 'n.', cat: 'ai',
  en: 'Running a trained model forward on new inputs to produce predictions.',
  zh: '推理：用训练好的模型对新输入做前向计算，得到预测结果。',
  oe: 'From Latin inferre "to carry in, bring forward" (in- + ferre "to bear"). In logic it is the act of carrying a conclusion in from premises.',
  oz: '源自拉丁语 inferre“带入、引出”（in- + ferre 承载）。在逻辑学中指从前提中“引出”结论。',
  se: 'Quantisation cut inference latency by half on CPU.',
  sz: '量化让 CPU 上的推理延迟降低了一半。'
},
{
  w: 'bias', uk: '/ˈbaɪəs/', us: '/ˈbaɪəs/', pos: 'n.', cat: 'ai',
  en: 'The systematic error of a model, or the learnable offset term added to a weighted sum.',
  zh: '偏差／偏置：模型的系统性误差；也指加在加权和上的可学习偏移项。',
  oe: 'From Old French biais "a slant, an oblique line". In the game of bowls the ball is weighted so it curves — it has a bias.',
  oz: '源自古法语 biais“斜线、偏斜”。在草地滚球运动中，球体被加重使其走弧线，这种偏心就叫 bias。',
  se: 'High bias means the model is too simple to capture the signal.',
  sz: '高偏差意味着模型过于简单，无法捕捉数据中的规律。'
},
{
  w: 'variance', uk: '/ˈveəriəns/', us: '/ˈveriəns/', pos: 'n.', cat: 'ai',
  en: 'How much a model\'s predictions would change if it were retrained on a different sample.',
  zh: '方差：若换一批样本重新训练，模型预测会随之变动的程度。',
  oe: 'From Latin variare "to change, make different". R. A. Fisher fixed its statistical meaning in 1918.',
  oz: '源自拉丁语 variare“改变、使不同”。1918 年由统计学家 R. A. Fisher 确定其统计学含义。',
  se: 'Bagging reduces variance without increasing bias much.',
  sz: 'Bagging 能在几乎不增加偏差的前提下降低方差。'
},
{
  w: 'entropy', uk: '/ˈentrəpi/', us: '/ˈentrəpi/', pos: 'n.', cat: 'ai',
  en: 'The average amount of information, or uncertainty, carried by a random variable.',
  zh: '熵：随机变量所携带的平均信息量，也即不确定性的度量。',
  oe: 'Coined by Clausius in 1865 from Greek en- "in" + trope "a turning, transformation", deliberately shaped to rhyme with energy. Shannon reused it for information in 1948 on von Neumann\'s advice.',
  oz: '1865 年由 Clausius 造词，取希腊语 en-（在内）+ trope（转变），并刻意让它与 energy 押韵。1948 年 Shannon 采纳冯·诺依曼的建议，把它借用到信息论。',
  se: 'Cross-entropy loss punishes confident wrong answers hardest.',
  sz: '交叉熵损失对“自信却错误”的预测惩罚最重。'
},
{
  w: 'embedding', uk: '/ɪmˈbedɪŋ/', us: '/ɪmˈbedɪŋ/', pos: 'n.', cat: 'ai',
  en: 'A dense vector representation that places semantically similar items close together.',
  zh: '嵌入（向量）：稠密向量表示，让语义相近的对象在空间中彼此靠近。',
  oe: 'From embed, literally "to lay in a bed". Mathematics borrowed it for placing one space inside another; NLP borrowed it again for placing words inside R^n.',
  oz: '源自 embed“安放在床里”。数学中借指把一个空间放进另一个空间；NLP 再借用，指把词放进 R^n 空间。',
  se: 'Cosine similarity over embeddings powers the retrieval step.',
  sz: '检索环节依靠对嵌入向量计算余弦相似度来实现。'
},
{
  w: 'latent', uk: '/ˈleɪtnt/', us: '/ˈleɪtnt/', pos: 'adj.', cat: 'ai',
  en: 'Hidden, not directly observed; inferred only through its effect on observable variables.',
  zh: '潜在的：隐藏而不可直接观测，只能通过对可观测变量的影响来推断。',
  oe: 'From Latin latere "to lie hidden" — the same root that gives us latency, the delay hiding between request and response.',
  oz: '源自拉丁语 latere“隐藏”——与 latency（延迟，藏在请求与响应之间的时间）同根。',
  se: 'The autoencoder compresses each image into a 64-dimensional latent space.',
  sz: '自编码器把每张图片压缩到 64 维的潜空间中。'
},
{
  w: 'corpus', uk: '/ˈkɔːpəs/', us: '/ˈkɔːrpəs/', pos: 'n.', cat: 'ai',
  en: 'A large, structured collection of text used to train or evaluate a language model.',
  zh: '语料库：用于训练或评估语言模型的大规模、结构化文本集合。',
  oe: 'Latin for "body". A corpus is the whole body of writing on a subject; the plural is corpora.',
  oz: '拉丁语意为“身体”。语料库即某一主题下的全部“文本之体”；复数形式为 corpora。',
  se: 'They deduplicated the corpus before pre-training.',
  sz: '他们在预训练之前对语料库做了去重。'
},
{
  w: 'token', uk: '/ˈtəʊkən/', us: '/ˈtoʊkən/', pos: 'n.', cat: 'ai',
  en: 'The atomic unit a model reads and writes - a word, sub-word fragment, or byte sequence.',
  zh: '词元：模型读写的最小单位，可能是一个词、子词片段或字节序列。',
  oe: 'From Old English tacen "a sign, a symbol" — the same word as German Zeichen. A token was originally a physical object standing for something else.',
  oz: '源自古英语 tacen“符号、标记”，与德语 Zeichen 同源。最初指代表其他事物的实物信物。',
  se: 'Pricing is per million input tokens.',
  sz: '计费方式是按每百万输入 token 计算的。'
},
{
  w: 'attention', uk: '/əˈtenʃn/', us: '/əˈtenʃn/', pos: 'n.', cat: 'ai',
  en: 'A mechanism that lets each position weigh every other position by learned relevance.',
  zh: '注意力：让序列中每个位置按学到的相关性对其他位置加权的机制。',
  oe: 'From Latin attendere "to stretch toward" (ad- + tendere "to stretch") — the mind literally leaning toward something. Same tendere as tensor and tension.',
  oz: '源自拉丁语 attendere“朝……伸展”（ad- + tendere 拉伸）——心神向某物倾斜。与 tensor、tension 中的 tendere 同根。',
  se: 'Multi-head attention lets the model attend to several relations at once.',
  sz: '多头注意力让模型同时关注多种不同的关系。'
},
{
  w: 'transformer', uk: '/trænsˈfɔːmə/', us: '/trænsˈfɔːrmər/', pos: 'n.', cat: 'ai',
  en: 'A sequence architecture built entirely on self-attention rather than recurrence.',
  zh: 'Transformer：完全基于自注意力、不使用循环结构的序列模型架构。',
  oe: 'From Latin transformare "to change shape across". The 2017 paper "Attention Is All You Need" gave the electrical engineer\'s word a second career.',
  oz: '源自拉丁语 transformare“改变形态”。2017 年论文《Attention Is All You Need》让这个原属电气工程的词开启了第二段生涯。',
  se: 'The transformer replaced LSTMs in almost every NLP benchmark.',
  sz: '在几乎所有 NLP 基准上，Transformer 都取代了 LSTM。'
},
{
  w: 'quantization', uk: '/ˌkwɒntaɪˈzeɪʃn/', us: '/ˌkwɑːntəˈzeɪʃn/', pos: 'n.', cat: 'ai',
  en: 'Reducing numerical precision (e.g. FP16 to INT4) to shrink a model and speed up inference.',
  zh: '量化：降低数值精度（如从 FP16 降到 INT4），以压缩模型体积、加速推理。',
  oe: 'From Latin quantus "how much", via quantum. To quantize is to chop a continuous range into countable steps.',
  oz: '源自拉丁语 quantus“多少”，经由 quantum（量子）而来。量化即把连续区间切成可数的台阶。',
  se: 'Four-bit quantization let the model fit on a single consumer GPU.',
  sz: '四比特量化让这个模型能装进一块消费级显卡。'
},
{
  w: 'hallucination', uk: '/həˌluːsɪˈneɪʃn/', us: '/həˌluːsɪˈneɪʃn/', pos: 'n.', cat: 'ai',
  en: 'A fluent but factually ungrounded output produced by a generative model.',
  zh: '幻觉：生成模型输出的流畅但缺乏事实依据的内容。',
  oe: 'From Latin alucinari "to wander in the mind, talk idly". The medical sense arrived in the 17th century; the machine-learning sense in the 2010s.',
  oz: '源自拉丁语 alucinari“心神游荡、胡言乱语”。17 世纪进入医学词汇，2010 年代被机器学习借用。',
  se: 'Grounding the answer in retrieved documents reduces hallucination.',
  sz: '把答案锚定在检索到的文档上，可以减少幻觉。'
},
{
  w: 'ensemble', uk: '/ɒnˈsɒmbl/', us: '/ɑːnˈsɑːmbl/', pos: 'n.', cat: 'ai',
  en: 'A combination of several models whose aggregated prediction beats any single member.',
  zh: '集成：把多个模型组合起来，聚合后的预测优于其中任何单一模型。',
  oe: 'French for "together", from Latin insimul "at the same time". Borrowed first for musical groups, then for statistics.',
  oz: '法语意为“一起”，源自拉丁语 insimul“同时”。先被借用于音乐合奏团体，后进入统计学。',
  se: 'An ensemble of five seeds added two points of accuracy.',
  sz: '用五个随机种子做集成，准确率提升了两个百分点。'
},
{
  w: 'annealing', uk: '/əˈniːlɪŋ/', us: '/əˈniːlɪŋ/', pos: 'n.', cat: 'ai',
  en: 'Gradually lowering a control parameter (temperature, learning rate) so a search settles into a good optimum.',
  zh: '退火：逐步降低某个控制参数（温度、学习率），让搜索过程稳定收敛到较优解。',
  oe: 'From Old English onaelan "to set on fire". Metallurgists anneal metal by heating then cooling it slowly; Kirkpatrick borrowed the process in 1983 for simulated annealing.',
  oz: '源自古英语 onaelan“点燃”。冶金中通过加热后缓慢冷却来退火；1983 年 Kirkpatrick 借用该过程提出模拟退火。',
  se: 'We anneal the learning rate with a cosine schedule.',
  sz: '我们用余弦调度对学习率进行退火。'
},
{
  w: 'distillation', uk: '/ˌdɪstɪˈleɪʃn/', us: '/ˌdɪstɪˈleɪʃn/', pos: 'n.', cat: 'ai',
  en: 'Training a small student model to reproduce the behaviour of a large teacher model.',
  zh: '蒸馏：训练一个小的学生模型来复现大教师模型的行为。',
  oe: 'From Latin destillare "to drip down" (de- + stilla "a drop") — the alchemist\'s method of collecting the essence drop by drop.',
  oz: '源自拉丁语 destillare“向下滴落”（de- + stilla 一滴）——炼金术士一滴一滴收集精华的方法。',
  se: 'Knowledge distillation kept 95% of the accuracy at a tenth of the size.',
  sz: '知识蒸馏在体积缩小到十分之一的情况下保留了 95% 的准确率。'
},
{
  w: 'saliency', uk: '/ˈseɪliənsi/', us: '/ˈseɪliənsi/', pos: 'n.', cat: 'ai',
  en: 'A measure of how strongly each input feature influences a model\'s output.',
  zh: '显著性：衡量每个输入特征对模型输出影响强弱的指标。',
  oe: 'From Latin salire "to leap" — a salient point is one that leaps out at you. The same root gives us sally and somersault.',
  oz: '源自拉丁语 salire“跳跃”——salient 即“跃入眼帘的”。sally、somersault 也同根。',
  se: 'The saliency map showed the classifier was keying on the watermark.',
  sz: '显著性图显示，分类器其实是在看水印做判断。'
},
{
  w: 'anomaly', uk: '/əˈnɒməli/', us: '/əˈnɑːməli/', pos: 'n.', cat: 'ai',
  en: 'A data point that deviates markedly from the established pattern.',
  zh: '异常：明显偏离既有模式的数据点。',
  oe: 'From Greek anomalos "uneven, irregular" (an- "not" + homalos "even"), from homos "same".',
  oz: '源自希腊语 anomalos“不平整、不规则”（an- 不 + homalos 平整），词根 homos 意为“相同”。',
  se: 'The autoencoder flags any sample with high reconstruction error as an anomaly.',
  sz: '自编码器会把重建误差高的样本标记为异常。'
},
{
  w: 'manifold', uk: '/ˈmænɪfəʊld/', us: '/ˈmænɪfoʊld/', pos: 'n.', cat: 'ai',
  en: 'A low-dimensional surface, curved inside a high-dimensional space, on which real data tends to lie.',
  zh: '流形：嵌在高维空间中的低维弯曲曲面，真实数据往往分布于其上。',
  oe: 'From Old English manigfeald "many folds". Riemann\'s German Mannigfaltigkeit was translated literally, keeping the image of a folded sheet.',
  oz: '源自古英语 manigfeald“许多褶皱”。黎曼的德语 Mannigfaltigkeit 被直译过来，保留了“折叠曲面”的意象。',
  se: 'The manifold hypothesis explains why interpolation in latent space looks natural.',
  sz: '流形假设解释了为什么在潜空间做插值看起来很自然。'
},
{
  w: 'hyperparameter', uk: '/ˌhaɪpəpəˈræmɪtə/', us: '/ˌhaɪpərpəˈræmɪtər/', pos: 'n.', cat: 'ai',
  en: 'A configuration value chosen before training rather than learned from data.',
  zh: '超参数：训练前人为设定、而非从数据中学习得到的配置值。',
  oe: 'Greek hyper "over, above" + parameter (para "beside" + metron "measure") — a measure that sits above the measures the model learns.',
  oz: '希腊语 hyper（在……之上）+ parameter（para 旁边 + metron 度量）——凌驾于模型所学参数之上的量。',
  se: 'We swept the hyperparameters with Bayesian optimisation.',
  sz: '我们用贝叶斯优化对超参数做了搜索。'
},
{
  w: 'robustness', uk: '/rəʊˈbʌstnəs/', us: '/roʊˈbʌstnəs/', pos: 'n.', cat: 'ai',
  en: 'A model\'s ability to keep performing when inputs are noisy, shifted, or adversarial.',
  zh: '鲁棒性：在输入含噪声、分布偏移或存在对抗攻击时，模型仍能保持性能的能力。',
  oe: 'From Latin robur "oak, hard timber, strength". A robust system has the toughness of oak.',
  oz: '源自拉丁语 robur“橡木、硬木、力量”。鲁棒的系统像橡木一样坚韧。',
  se: 'Adversarial training improved robustness at a small cost in clean accuracy.',
  sz: '对抗训练提升了鲁棒性，代价是干净数据上的准确率略有下降。'
},

/* ================== Algorithms & Data Structures ================== */
{
  w: 'recursion', uk: '/rɪˈkɜːʃn/', us: '/rɪˈkɜːrʒn/', pos: 'n.', cat: 'algo',
  en: 'Defining a procedure in terms of itself, with a base case that stops the descent.',
  zh: '递归：用自身来定义某个过程，并以基准情形终止下降。',
  oe: 'From Latin recurrere "to run back" (re- + currere "to run", also behind current and courier). The call runs back into itself.',
  oz: '源自拉丁语 recurrere“跑回去”（re- + currere 跑，current、courier 同源）——调用又跑回了自身。',
  se: 'Every recursion can be rewritten with an explicit stack.',
  sz: '任何递归都可以用一个显式栈改写成迭代。'
},
{
  w: 'iteration', uk: '/ˌɪtəˈreɪʃn/', us: '/ˌɪtəˈreɪʃn/', pos: 'n.', cat: 'algo',
  en: 'Repeating a block of steps, usually until a condition is met.',
  zh: '迭代：重复执行一段步骤，通常直到满足某个条件。',
  oe: 'From Latin iterare "to repeat", from iterum "again". Nothing to do with iter "journey", despite the resemblance.',
  oz: '源自拉丁语 iterare“重复”，词根 iterum“再一次”。尽管形似，它与 iter（旅程）并无关系。',
  se: 'The loop converged in nine iterations.',
  sz: '这个循环在九次迭代后收敛。'
},
{
  w: 'traversal', uk: '/trəˈvɜːsl/', us: '/trəˈvɜːrsl/', pos: 'n.', cat: 'algo',
  en: 'Visiting every node of a structure exactly once in a defined order.',
  zh: '遍历：按既定顺序恰好访问结构中每个节点一次。',
  oe: 'From Old French traverser "to cross", from Latin trans "across" + vertere "to turn".',
  oz: '源自古法语 traverser“穿过”，来自拉丁语 trans（横越）+ vertere（转）。',
  se: 'In-order traversal of a BST yields a sorted sequence.',
  sz: '对二叉搜索树做中序遍历会得到有序序列。'
},
{
  w: 'heap', uk: '/hiːp/', us: '/hiːp/', pos: 'n.', cat: 'algo',
  en: 'A tree in which every parent dominates its children, giving O(1) access to the extreme element.',
  zh: '堆：每个父节点都支配其子节点的树结构，可在 O(1) 时间取到极值元素。',
  oe: 'From Old English heap "a pile, a crowd". Note that the memory heap and the data-structure heap are unrelated uses of the same everyday word.',
  oz: '源自古英语 heap“一堆、一群”。注意：内存中的“堆”与数据结构的“堆”只是借用了同一个日常词，并无关系。',
  se: 'Push all n items, then pop k times - that is heap-select.',
  sz: '把 n 个元素全部入堆，再弹出 k 次，这就是堆选择。'
},
{
  w: 'queue', uk: '/kjuː/', us: '/kjuː/', pos: 'n.', cat: 'algo',
  en: 'A first-in-first-out container: items leave in the order they arrived.',
  zh: '队列：先进先出的容器，元素按到达顺序离开。',
  oe: 'From French queue "tail", from Latin cauda. In heraldry it meant an animal\'s tail; the British sense of a line of waiting people dates from about 1837.',
  oz: '源自法语 queue“尾巴”，拉丁语为 cauda。纹章学中指动物尾巴；英式英语中“排队的人龙”之义约始于 1837 年。',
  se: 'BFS explores the graph with a queue; DFS with a stack.',
  sz: 'BFS 用队列遍历图，DFS 用栈。'
},
{
  w: 'stack', uk: '/stæk/', us: '/stæk/', pos: 'n.', cat: 'algo',
  en: 'A last-in-first-out container: the most recent item is the first one out.',
  zh: '栈：后进先出的容器，最近放入的元素最先取出。',
  oe: 'From Old Norse stakkr "a haystack". The image is a pile you can only add to or take from at the top.',
  oz: '源自古诺斯语 stakkr“干草垛”。意象就是一个只能从顶部存取的堆。',
  se: 'A stack overflow means the recursion never reached its base case.',
  sz: '栈溢出通常意味着递归始终没有到达基准情形。'
},
{
  w: 'hash', uk: '/hæʃ/', us: '/hæʃ/', pos: 'n./v.', cat: 'algo',
  en: 'A function that maps arbitrary data to a fixed-size value used as an index or fingerprint.',
  zh: '哈希：把任意数据映射为定长值的函数，用作索引或指纹。',
  oe: 'From French hacher "to chop up" (the root of hatchet). Hash browns and hash tables share the same idea: the input is chopped and mixed.',
  oz: '源自法语 hacher“切碎”（hatchet 斧头同源）。土豆饼 hash browns 和哈希表用的是同一个意象：把输入剁碎再混合。',
  se: 'A good hash spreads keys uniformly across the buckets.',
  sz: '好的哈希函数会把键均匀地散布到各个桶中。'
},
{
  w: 'collision', uk: '/kəˈlɪʒn/', us: '/kəˈlɪʒn/', pos: 'n.', cat: 'algo',
  en: 'The event of two distinct keys hashing to the same slot.',
  zh: '冲突：两个不同的键被哈希到同一个槽位。',
  oe: 'From Latin collidere "to strike together" (com- + laedere "to hurt"). The networking sense - two frames on one wire - is the same picture.',
  oz: '源自拉丁语 collidere“互相撞击”（com- + laedere 伤害）。网络中“两帧在同一线缆上相撞”用的是同一意象。',
  se: 'Open addressing resolves collisions by probing the next free slot.',
  sz: '开放寻址法通过探测下一个空槽来解决冲突。'
},
{
  w: 'pivot', uk: '/ˈpɪvət/', us: '/ˈpɪvət/', pos: 'n.', cat: 'algo',
  en: 'The element around which quicksort partitions the array.',
  zh: '基准元素：快速排序据以划分数组的那个元素。',
  oe: 'From Old French pivot "hinge pin, the tooth of a gear". Everything turns around it.',
  oz: '源自古法语 pivot“铰链销、齿轮齿”。一切都围绕它转动。',
  se: 'Choosing a random pivot avoids quicksort\'s worst case on sorted input.',
  sz: '随机选取基准元素可以避免快排在已排序输入上的最坏情况。'
},
{
  w: 'memoization', uk: '/ˌmeməʊaɪˈzeɪʃn/', us: '/ˌmemoʊəˈzeɪʃn/', pos: 'n.', cat: 'algo',
  en: 'Caching the results of pure function calls so repeated arguments are computed only once.',
  zh: '记忆化：缓存纯函数的调用结果，相同参数只计算一次。',
  oe: 'Coined by Donald Michie in 1968 from Latin memorandum "to be remembered". The missing r is deliberate - it is not "memorization".',
  oz: '1968 年由 Donald Michie 造词，取自拉丁语 memorandum“应被记住的事”。少掉的那个 r 是故意的——它不是 memorization。',
  se: 'Memoization turns the exponential Fibonacci into a linear one.',
  sz: '记忆化把指数级的斐波那契递归变成了线性复杂度。'
},
{
  w: 'amortized', uk: '/əˈmɔːtaɪzd/', us: '/ˈæmərtaɪzd/', pos: 'adj.', cat: 'algo',
  en: 'Averaged over a sequence of operations, so occasional expensive steps are spread out.',
  zh: '摊还的：把偶尔出现的昂贵操作分摊到整个操作序列上取平均。',
  oe: 'From Old French amortir "to deaden, to extinguish a debt", ultimately Latin ad + mors "death". An amortized cost is a debt paid off gradually.',
  oz: '源自古法语 amortir“使消亡、清偿债务”，最终来自拉丁语 ad + mors（死亡）。摊还成本就是逐步还清的债。',
  se: 'A dynamic array has amortized O(1) push_back.',
  sz: '动态数组的 push_back 具有摊还 O(1) 的复杂度。'
},
{
  w: 'asymptotic', uk: '/ˌæsɪmpˈtɒtɪk/', us: '/ˌæsɪmpˈtɑːtɪk/', pos: 'adj.', cat: 'algo',
  en: 'Describing behaviour in the limit as the input size grows without bound.',
  zh: '渐近的：描述输入规模无限增大时的极限行为。',
  oe: 'From Greek asymptotos "not falling together" (a- "not" + syn "together" + ptotos "falling") - a curve that approaches a line forever without meeting it.',
  oz: '源自希腊语 asymptotos“不相交”（a- 不 + syn 一起 + ptotos 落下）——曲线永远逼近一条直线却不相交。',
  se: 'Constant factors matter in practice even when asymptotic cost is identical.',
  sz: '即便渐近复杂度相同，常数因子在工程实践中依然重要。'
},
{
  w: 'complexity', uk: '/kəmˈpleksəti/', us: '/kəmˈpleksəti/', pos: 'n.', cat: 'algo',
  en: 'The growth rate of an algorithm\'s time or space cost as a function of input size.',
  zh: '复杂度：算法的时间或空间开销随输入规模增长的速率。',
  oe: 'From Latin complexus "entwined, braided together" (com- + plectere "to weave", also behind plait and perplex).',
  oz: '源自拉丁语 complexus“交织、编在一起”（com- + plectere 编织，plait、perplex 同源）。',
  se: 'Its time complexity is O(n log n) but its space complexity is O(n).',
  sz: '它的时间复杂度是 O(n log n)，但空间复杂度是 O(n)。'
},
{
  w: 'greedy', uk: '/ˈɡriːdi/', us: '/ˈɡriːdi/', pos: 'adj.', cat: 'algo',
  en: 'Taking the locally best choice at every step and never reconsidering it.',
  zh: '贪心的：每一步都取局部最优选择，且不再回头修改。',
  oe: 'From Old English graedig "hungry, voracious". The algorithmic sense keeps the flavour: grab the best-looking bite now.',
  oz: '源自古英语 graedig“饥饿、贪吃”。算法含义保留了这一意味：先抢眼前最诱人的那一口。',
  se: 'A greedy choice is optimal here because the matroid property holds.',
  sz: '因为满足拟阵性质，这里的贪心选择就是最优的。'
},
{
  w: 'backtracking', uk: '/ˈbæktrækɪŋ/', us: '/ˈbæktrækɪŋ/', pos: 'n.', cat: 'algo',
  en: 'Exploring candidates depth-first and undoing a choice as soon as it cannot lead to a solution.',
  zh: '回溯：深度优先地尝试候选解，一旦发现无法通向解就撤销该选择。',
  oe: 'A hunting term - to track back along one\'s own trail. D. H. Lehmer gave it its algorithmic name in the 1950s.',
  oz: '原为狩猎术语，指沿自己的足迹往回走。1950 年代由 D. H. Lehmer 定为算法名称。',
  se: 'N-queens is the textbook backtracking problem.',
  sz: 'N 皇后是回溯法的教科书例题。'
},
{
  w: 'permutation', uk: '/ˌpɜːmjuˈteɪʃn/', us: '/ˌpɜːrmjuˈteɪʃn/', pos: 'n.', cat: 'algo',
  en: 'An arrangement of all members of a set into a particular order.',
  zh: '排列：把集合中全部元素按某一特定顺序排好的一种方式。',
  oe: 'From Latin permutare "to change thoroughly" (per- "through" + mutare "to change", also behind mutation).',
  oz: '源自拉丁语 permutare“彻底改变”（per- 贯穿 + mutare 改变，mutation 同源）。',
  se: 'Heap\'s algorithm generates every permutation with a single swap per step.',
  sz: 'Heap 算法每一步只做一次交换就能生成全部排列。'
},
{
  w: 'invariant', uk: '/ɪnˈveəriənt/', us: '/ɪnˈveriənt/', pos: 'n.', cat: 'algo',
  en: 'A condition that holds true before and after every iteration of a loop.',
  zh: '不变量：在循环每次迭代前后都保持为真的条件。',
  oe: 'Latin in- "not" + variare "to change" - literally that which does not change.',
  oz: '拉丁语 in-（不）+ variare（改变）——字面意思就是“不变的东西”。',
  se: 'State the loop invariant and the correctness proof writes itself.',
  sz: '把循环不变量写清楚，正确性证明几乎就自动完成了。'
},
{
  w: 'topology', uk: '/təˈpɒlədʒi/', us: '/təˈpɑːlədʒi/', pos: 'n.', cat: 'algo',
  en: 'The arrangement of nodes and connections in a graph or a network.',
  zh: '拓扑：图或网络中节点与连接的排布方式。',
  oe: 'From Greek topos "place" + logia "study of". Listing coined the German Topologie in 1847 for the study of properties preserved under deformation.',
  oz: '源自希腊语 topos（位置）+ logia（学问）。1847 年 Listing 造德语词 Topologie，研究形变下不变的性质。',
  se: 'A topological sort exists only if the graph is acyclic.',
  sz: '只有当图无环时，拓扑排序才存在。'
},
{
  w: 'trie', uk: '/traɪ/', us: '/triː/', pos: 'n.', cat: 'algo',
  en: 'A prefix tree where each edge carries a character and each path spells a key.',
  zh: '字典树：每条边带一个字符、每条路径拼出一个键的前缀树。',
  oe: 'Extracted from the middle of retrieval by Edward Fredkin in 1960. He intended it to be said "tree", but most engineers say "try" to avoid confusion.',
  oz: '1960 年 Edward Fredkin 从 retrieval 一词中间截取而成。他本意读作 tree，但多数工程师读 try 以免混淆。',
  se: 'The autocomplete box walks a trie on every keystroke.',
  sz: '自动补全框在每次按键时都会沿字典树往下走。'
},
{
  w: 'threshold', uk: '/ˈθreʃhəʊld/', us: '/ˈθreʃhoʊld/', pos: 'n.', cat: 'algo',
  en: 'The cut-off value at which a decision or state change is triggered.',
  zh: '阈值：触发某个判定或状态转换的临界值。',
  oe: 'From Old English therscold, the doorsill you tread on when entering (related to thresh "to tread grain"). Crossing it changes where you are.',
  oz: '源自古英语 therscold，即进门时踩过的门槛（与 thresh 打谷、践踏相关）。跨过它，你就换了地方。',
  se: 'Lowering the threshold raises recall and hurts precision.',
  sz: '降低阈值会提高召回率，但损害精确率。'
},
{
  w: 'sentinel', uk: '/ˈsentɪnl/', us: '/ˈsentɪnl/', pos: 'n.', cat: 'algo',
  en: 'A dummy value or node placed at a boundary so the main loop needs no special case.',
  zh: '哨兵：放在边界处的哑元值或节点，使主循环无需处理特殊情况。',
  oe: 'From Italian sentinella "one who keeps watch", from sentire "to perceive". A guard posted at the edge of the camp.',
  oz: '源自意大利语 sentinella“守望者”，词根 sentire“感知”。就是驻守营地边缘的哨兵。',
  se: 'A sentinel node removes every null check from the linked-list code.',
  sz: '加一个哨兵节点，链表代码里的空指针判断就全省掉了。'
},
{
  w: 'deterministic', uk: '/dɪˌtɜːmɪˈnɪstɪk/', us: '/dɪˌtɜːrmɪˈnɪstɪk/', pos: 'adj.', cat: 'algo',
  en: 'Producing exactly the same output for the same input, every time.',
  zh: '确定性的：对相同输入永远产生完全相同的输出。',
  oe: 'From Latin determinare "to set limits to" (de- + terminus "boundary"). A determined system has its outcome bounded in advance.',
  oz: '源自拉丁语 determinare“划定界限”（de- + terminus 边界）。确定性系统的结果事先就被界定了。',
  se: 'Fix the seed to make the whole pipeline deterministic.',
  sz: '固定随机种子，让整条流水线变成确定性的。'
},
{
  w: 'monotonic', uk: '/ˌmɒnəˈtɒnɪk/', us: '/ˌmɑːnəˈtɑːnɪk/', pos: 'adj.', cat: 'algo',
  en: 'Moving in one direction only - never decreasing, or never increasing.',
  zh: '单调的：只朝一个方向变化，要么不减，要么不增。',
  oe: 'From Greek monos "single" + tonos "tone, pitch" - originally a voice that never changes pitch.',
  oz: '源自希腊语 monos（单一）+ tonos（音调）——原指音高从不变化的嗓音。',
  se: 'A monotonic stack solves the next-greater-element problem in linear time.',
  sz: '单调栈能在线性时间内解决“下一个更大元素”问题。'
},

/* ===================== Software Engineering ===================== */
{
  w: 'refactor', uk: '/ˌriːˈfæktə/', us: '/ˌriːˈfæktər/', pos: 'v.', cat: 'sde',
  en: 'To restructure existing code without changing its external behaviour.',
  zh: '重构：在不改变外部行为的前提下调整既有代码的内部结构。',
  oe: 'From re- "again" + factor (Latin factor "a maker"), borrowed from algebra, where factoring rewrites an expression without changing its value. Opdyke\'s 1992 thesis and Fowler\'s 1999 book fixed the software sense.',
  oz: '由 re-（再）+ factor（拉丁语“制造者”）构成，借自代数中的“因式分解”——改写表达式而不改变其值。1992 年 Opdyke 的论文与 1999 年 Fowler 的书确立了软件领域的含义。',
  se: 'Refactor first, then add the feature.',
  sz: '先重构，再加功能。'
},
{
  w: 'idempotent', uk: '/ˌaɪdemˈpəʊtnt/', us: '/ˌaɪdəmˈpoʊtnt/', pos: 'adj.', cat: 'sde',
  en: 'Producing the same result whether applied once or many times.',
  zh: '幂等的：执行一次与执行多次的结果完全相同。',
  oe: 'Coined by Benjamin Peirce in 1870 from Latin idem "the same" + potens "having power" - an element whose own power is itself.',
  oz: '1870 年由 Benjamin Peirce 造词，取拉丁语 idem（相同）+ potens（有力量的）——自乘仍等于自身的元素。',
  se: 'Make the retry endpoint idempotent so duplicates are harmless.',
  sz: '把重试接口做成幂等的，重复请求就无害了。'
},
{
  w: 'deprecate', uk: '/ˈdeprəkeɪt/', us: '/ˈdeprəkeɪt/', pos: 'v.', cat: 'sde',
  en: 'To mark an API as discouraged and scheduled for removal, while still keeping it working.',
  zh: '弃用：把某个 API 标记为不推荐使用并计划移除，但暂时仍保持可用。',
  oe: 'From Latin deprecari "to pray against, to avert by prayer" (de- + precari "to pray"). The word once meant warding off evil; now it wards off usage.',
  oz: '源自拉丁语 deprecari“祈祷以避开”（de- + precari 祈祷）。此词原意是祈祷驱灾，如今则是劝阻使用。',
  se: 'The flag is deprecated in v3 and will be removed in v4.',
  sz: '这个参数在 v3 中已弃用，将在 v4 中移除。'
},
{
  w: 'debug', uk: '/ˌdiːˈbʌɡ/', us: '/ˌdiːˈbʌɡ/', pos: 'v.', cat: 'sde',
  en: 'To locate and remove the cause of incorrect behaviour in a program.',
  zh: '调试：定位并消除程序中导致错误行为的原因。',
  oe: 'Engineers called faults "bugs" as early as Edison in 1878. In 1947 Grace Hopper\'s team taped an actual moth found in the Harvard Mark II into the logbook, noting they were "debugging" the machine.',
  oz: '早在 1878 年爱迪生就把故障称为 bug。1947 年 Grace Hopper 团队把 Harvard Mark II 里抓到的真飞蛾贴进日志本，并写下他们正在 debugging 这台机器。',
  se: 'Half of debugging is reproducing the failure reliably.',
  sz: '调试有一半的工作是稳定地复现故障。'
},
{
  w: 'compile', uk: '/kəmˈpaɪl/', us: '/kəmˈpaɪl/', pos: 'v.', cat: 'sde',
  en: 'To translate source code into a lower-level or machine-executable form.',
  zh: '编译：把源代码翻译成更低层或可被机器执行的形式。',
  oe: 'From Latin compilare "to pile up, to plunder" (com- + pilare). A compiler originally just heaped material together - Grace Hopper chose the name for the A-0 system in 1952.',
  oz: '源自拉丁语 compilare“堆积、掠取”（com- + pilare）。编译器最初只是把材料堆到一起——1952 年 Grace Hopper 为 A-0 系统选了这个名字。',
  se: 'It compiles, but that proves very little.',
  sz: '它能编译通过，但这说明不了什么。'
},
{
  w: 'repository', uk: '/rɪˈpɒzətri/', us: '/rɪˈpɑːzətɔːri/', pos: 'n.', cat: 'sde',
  en: 'The store holding a project\'s files together with their complete revision history.',
  zh: '仓库：存放项目文件及其完整修订历史的地方。',
  oe: 'From Latin repositorium "a place where things are put back" (re- + ponere "to place"). Same root as position and deposit.',
  oz: '源自拉丁语 repositorium“把东西放回去的地方”（re- + ponere 放置）。与 position、deposit 同根。',
  se: 'Clone the repository and check out the release branch.',
  sz: '克隆仓库，然后切到发布分支。'
},
{
  w: 'commit', uk: '/kəˈmɪt/', us: '/kəˈmɪt/', pos: 'v./n.', cat: 'sde',
  en: 'To record a set of changes permanently in version history, or the record itself.',
  zh: '提交：把一组改动永久记入版本历史；也指这条记录本身。',
  oe: 'From Latin committere "to bring together, to entrust" (com- + mittere "to send"). A commit entrusts your work to the shared history - and databases borrowed the same word for the same reason.',
  oz: '源自拉丁语 committere“汇集、托付”（com- + mittere 发送）。提交即把你的工作托付给共享历史——数据库出于同样理由借用了这个词。',
  se: 'Write the commit message for the reader, not for yourself.',
  sz: '写提交信息是写给读者看的，不是给自己看的。'
},
{
  w: 'merge', uk: '/mɜːdʒ/', us: '/mɜːrdʒ/', pos: 'v.', cat: 'sde',
  en: 'To combine divergent lines of development into a single history.',
  zh: '合并：把分叉的开发线整合回同一条历史。',
  oe: 'From Latin mergere "to dip, to plunge, to immerse" - also the root of immerse and submerge. Two branches are plunged into one.',
  oz: '源自拉丁语 mergere“浸入、沉入”，immerse、submerge 同源。两条分支被“浸”成了一条。',
  se: 'Rebase before you merge to keep the history linear.',
  sz: '合并前先 rebase，可以保持历史线性。'
},
{
  w: 'regression', uk: '/rɪˈɡreʃn/', us: '/rɪˈɡreʃn/', pos: 'n.', cat: 'sde',
  en: 'A defect that reappears, or a feature that breaks after a previously working change.',
  zh: '回归（缺陷）：曾修复的问题再度出现，或原本正常的功能被改坏。',
  oe: 'From Latin regredi "to go back, to step backwards" (re- + gradi "to walk", the same gradi as gradient). The software sense is literal: the product stepped backwards.',
  oz: '源自拉丁语 regredi“往回走”（re- + gradi 行走，与 gradient 同根）。软件中的含义很直白：产品退步了。',
  se: 'Add a regression test that fails before the fix and passes after.',
  sz: '加一个回归测试：修复前失败，修复后通过。'
},
{
  w: 'deploy', uk: '/dɪˈplɔɪ/', us: '/dɪˈplɔɪ/', pos: 'v.', cat: 'sde',
  en: 'To release a build into an environment where it serves real traffic.',
  zh: '部署：把构建产物发布到承接真实流量的环境中。',
  oe: 'From French deployer, Latin displicare "to unfold, to scatter" (dis- + plicare "to fold"). A general deploys troops by unfolding them across a field.',
  oz: '源自法语 deployer，拉丁语 displicare“展开、铺散”（dis- + plicare 折叠）。将军部署部队，就是把队形在战场上展开。',
  se: 'Deploy on a Tuesday morning, never on a Friday evening.',
  sz: '部署选周二上午，绝不要选周五傍晚。'
},
{
  w: 'artifact', uk: '/ˈɑːtɪfækt/', us: '/ˈɑːrtɪfækt/', pos: 'n.', cat: 'sde',
  en: 'Any file produced by a build: a binary, an image, a package, a report.',
  zh: '构建产物：构建过程生成的任何文件，如二进制、镜像、软件包、报告。',
  oe: 'From Latin arte factum "made by skill". Archaeologists dig up artefacts; build systems emit them. British English keeps the spelling artefact.',
  oz: '源自拉丁语 arte factum“凭技艺制成之物”。考古学家挖出 artefact，构建系统则产出它。英式英语保留 artefact 拼法。',
  se: 'Publish the artifact once and promote the same bytes to production.',
  sz: '产物只构建一次，然后把同一份字节推到生产环境。'
},
{
  w: 'immutable', uk: '/ɪˈmjuːtəbl/', us: '/ɪˈmjuːtəbl/', pos: 'adj.', cat: 'sde',
  en: 'Unable to be changed after creation; any update produces a new value.',
  zh: '不可变的：创建后无法修改，任何更新都会产生新值。',
  oe: 'Latin immutabilis (in- "not" + mutare "to change"). The same mutare behind mutation and permutation.',
  oz: '拉丁语 immutabilis（in- 不 + mutare 改变）。与 mutation、permutation 中的 mutare 同根。',
  se: 'Immutable data structures make concurrent reads trivially safe.',
  sz: '不可变数据结构让并发读取天然安全。'
},
{
  w: 'polymorphism', uk: '/ˌpɒliˈmɔːfɪzəm/', us: '/ˌpɑːliˈmɔːrfɪzəm/', pos: 'n.', cat: 'sde',
  en: 'The ability of one interface to be satisfied by many different concrete types.',
  zh: '多态：同一个接口可以由多种不同的具体类型来满足。',
  oe: 'Greek poly "many" + morphe "form" - literally many-shapedness. Biology used it for species with several forms long before Strachey applied it to types in 1967.',
  oz: '希腊语 poly（多）+ morphe（形态）——字面即“多形性”。生物学早就用它描述多形态物种，1967 年 Strachey 才把它用于类型系统。',
  se: 'Parametric polymorphism is what generics give you.',
  sz: '泛型提供的正是参数化多态。'
},
{
  w: 'encapsulation', uk: '/ɪnˌkæpsjuˈleɪʃn/', us: '/ɪnˌkæpsjuˈleɪʃn/', pos: 'n.', cat: 'sde',
  en: 'Hiding internal state behind an interface so callers depend only on the contract.',
  zh: '封装：把内部状态藏在接口之后，调用方只依赖约定的契约。',
  oe: 'From Latin capsula "a little box" (diminutive of capsa "case", also behind capsule and case). Networking uses the identical word for wrapping one packet inside another.',
  oz: '源自拉丁语 capsula“小盒子”（capsa 箱子的指小形式，capsule、case 同源）。网络中把一个包裹进另一个包，用的也是这个词。',
  se: 'Encapsulation is what lets you change the storage layer safely.',
  sz: '正是封装让你可以安全地替换存储层。'
},
{
  w: 'abstraction', uk: '/æbˈstrækʃn/', us: '/æbˈstrækʃn/', pos: 'n.', cat: 'sde',
  en: 'A simplified model that exposes what matters and suppresses what does not.',
  zh: '抽象：只暴露关键部分、隐去无关细节的简化模型。',
  oe: 'From Latin abstrahere "to draw away" (abs- "away" + trahere "to pull", also behind tractor and traction). You pull the essence away from the detail.',
  oz: '源自拉丁语 abstrahere“抽离”（abs- 离开 + trahere 拉，tractor、traction 同源）。即把本质从细节中抽出来。',
  se: 'Every abstraction leaks; the question is how much and when.',
  sz: '所有抽象都会泄漏，问题只在于漏多少、何时漏。'
},
{
  w: 'serialization', uk: '/ˌsɪəriəlaɪˈzeɪʃn/', us: '/ˌsɪriələˈzeɪʃn/', pos: 'n.', cat: 'sde',
  en: 'Converting an in-memory object into a byte stream that can be stored or transmitted.',
  zh: '序列化：把内存中的对象转换成可存储或传输的字节流。',
  oe: 'From Latin series "a row, a chain of things linked together", from serere "to join". A serialized object is laid out in a single line.',
  oz: '源自拉丁语 series“一列、串联之物”，词根 serere“连接”。序列化就是把对象铺成一条线。',
  se: 'Never deserialize untrusted input into arbitrary classes.',
  sz: '绝不要把不可信输入反序列化成任意类。'
},
{
  w: 'mock', uk: '/mɒk/', us: '/mɑːk/', pos: 'n./v.', cat: 'sde',
  en: 'A stand-in object that records how it was called, used to isolate a unit under test.',
  zh: 'Mock 对象：记录自身被调用情况的替身对象，用来隔离被测单元。',
  oe: 'From Old French mocquer "to deride, to imitate mockingly". A mock object imitates the real one - the mockingbird does the same thing with songs.',
  oz: '源自古法语 mocquer“嘲弄、模仿”。mock 对象模仿真实对象——mockingbird（嘲鸫）对鸟鸣做的是同样的事。',
  se: 'Mock the payment gateway; never call it from a unit test.',
  sz: '把支付网关 mock 掉，单元测试里绝不要真的调用它。'
},
{
  w: 'stub', uk: '/stʌb/', us: '/stʌb/', pos: 'n.', cat: 'sde',
  en: 'A minimal placeholder implementation that returns canned values.',
  zh: '桩：只返回固定值的最小占位实现。',
  oe: 'From Old English stubb "a tree stump" - what is left standing after the trunk is cut away. A stub is a function with its body cut off.',
  oz: '源自古英语 stubb“树桩”——树干被砍走后留下的部分。桩函数就是被砍掉函数体的函数。',
  se: 'Start with a stub so the interface can be reviewed early.',
  sz: '先写个桩，好让接口能尽早被评审。'
},
{
  w: 'legacy', uk: '/ˈleɡəsi/', us: '/ˈleɡəsi/', pos: 'adj./n.', cat: 'sde',
  en: 'Inherited code that is still in production but predates current practice.',
  zh: '遗留（系统）：仍在生产环境运行、但早于当前工程规范的继承代码。',
  oe: 'From Latin legatus "one sent with a commission, a bequest", from legare "to bequeath". Legacy code is what the previous team willed to you.',
  oz: '源自拉丁语 legatus“受托者、遗赠”，词根 legare“遗赠”。遗留代码就是上一任团队留给你的遗产。',
  se: 'Legacy code is simply code without tests.',
  sz: '所谓遗留代码，就是没有测试的代码。'
},
{
  w: 'bootstrap', uk: '/ˈbuːtstræp/', us: '/ˈbuːtstræp/', pos: 'v./n.', cat: 'sde',
  en: 'To start a system using a small piece of itself, with no external help.',
  zh: '自举：借助自身的一小部分启动整个系统，无需外部帮助。',
  oe: 'From the impossible feat of "pulling yourself up by your own bootstraps", a 19th-century American tall tale. Booting a computer is the shortened form.',
  oz: '源自“拽着自己的靴带把自己提起来”这一荒诞说法，出自 19 世纪美国夸张故事。计算机的 boot（启动）就是它的缩略形式。',
  se: 'The compiler is written in the language it compiles - a classic bootstrap.',
  sz: '这个编译器是用它自己编译的语言写的，典型的自举。'
},
{
  w: 'canary', uk: '/kəˈneəri/', us: '/kəˈneri/', pos: 'n.', cat: 'sde',
  en: 'A small slice of traffic sent to a new release to detect problems before full rollout.',
  zh: '金丝雀发布：先把小比例流量导向新版本，在全量之前发现问题。',
  oe: 'From the canary in a coal mine: miners carried the bird because it collapsed from gas before humans did. The bird itself is named after the Canary Islands, which are named after dogs (Latin canis).',
  oz: '源自“煤矿中的金丝雀”：矿工带着这种鸟，因为它比人先被瓦斯毒倒。而鸟名来自加那利群岛，岛名又来自“狗”（拉丁语 canis）。',
  se: 'The canary caught the memory leak at 1% of traffic.',
  sz: '金丝雀发布在 1% 流量上就抓到了内存泄漏。'
},
{
  w: 'observability', uk: '/əbˌzɜːvəˈbɪləti/', us: '/əbˌzɜːrvəˈbɪləti/', pos: 'n.', cat: 'sde',
  en: 'How well internal state can be inferred from external outputs such as logs, metrics and traces.',
  zh: '可观测性：仅凭日志、指标、链路等外部输出推断系统内部状态的能力。',
  oe: 'From Latin observare "to watch over, to guard". Rudolf Kalman gave it a precise meaning in 1960 control theory; SRE culture borrowed it around 2016.',
  oz: '源自拉丁语 observare“观察、守护”。1960 年 Kalman 在控制论中赋予其严格定义，2016 年前后被 SRE 文化借用。',
  se: 'You cannot debug what you cannot observe.',
  sz: '看不见的东西，你没法调试。'
},
{
  w: 'telemetry', uk: '/təˈlemətri/', us: '/təˈlemətri/', pos: 'n.', cat: 'sde',
  en: 'Measurements automatically collected at a source and transmitted elsewhere for analysis.',
  zh: '遥测：在源端自动采集并传输到别处分析的度量数据。',
  oe: 'Greek tele "far off" + metron "measure". First used for weather instruments that telegraphed their readings from mountain tops in the 1880s.',
  oz: '希腊语 tele（远）+ metron（测量）。1880 年代最早用于把山顶读数电报回传的气象仪器。',
  se: 'Sample the telemetry; do not ship every span.',
  sz: '对遥测数据做采样，不要把每条 span 都上报。'
},

/* =================== Systems & Distributed =================== */
{
  w: 'concurrency', uk: '/kənˈkʌrənsi/', us: '/kənˈkɜːrənsi/', pos: 'n.', cat: 'sys',
  en: 'Structuring a program so that several tasks make progress in overlapping time periods.',
  zh: '并发：把程序组织成多个任务在重叠时间段内各自推进的形式。',
  oe: 'From Latin concurrere "to run together" (com- + currere "to run", the same currere as recursion and current). Note that concurrency is about structure; parallelism is about simultaneous execution.',
  oz: '源自拉丁语 concurrere“一起跑”（com- + currere 跑，与 recursion、current 同根）。注意：并发讲的是结构，并行讲的才是同时执行。',
  se: 'Concurrency is not parallelism.',
  sz: '并发不等于并行。'
},
{
  w: 'mutex', uk: '/ˈmjuːteks/', us: '/ˈmjuːteks/', pos: 'n.', cat: 'sys',
  en: 'A lock that guarantees only one thread enters a critical section at a time.',
  zh: '互斥锁：保证同一时刻只有一个线程进入临界区的锁。',
  oe: 'A blend of mutual exclusion, from Latin mutuus "reciprocal" and excludere "to shut out".',
  oz: '由 mutual exclusion（互相排斥）缩合而成，来自拉丁语 mutuus（相互的）与 excludere（排除在外）。',
  se: 'Hold the mutex for as short a span as you can.',
  sz: '持有互斥锁的时间要尽可能短。'
},
{
  w: 'semaphore', uk: '/ˈseməfɔː/', us: '/ˈseməfɔːr/', pos: 'n.', cat: 'sys',
  en: 'A counter-based primitive that limits how many threads may hold a resource at once.',
  zh: '信号量：基于计数的同步原语，限制同时持有资源的线程数量。',
  oe: 'Greek sema "sign" + phoros "bearing" - the mechanical arm signals on early railways. Dijkstra chose the name in 1962, and its P and V operations come from Dutch passeren and vrijgeven.',
  oz: '希腊语 sema（信号）+ phoros（携带）——早期铁路上的机械信号臂。1962 年 Dijkstra 取此名，其 P、V 操作来自荷兰语 passeren（通过）与 vrijgeven（释放）。',
  se: 'A semaphore initialised to one behaves like a mutex.',
  sz: '初值为 1 的信号量，行为上等同于互斥锁。'
},
{
  w: 'deadlock', uk: '/ˈdedlɒk/', us: '/ˈdedlɑːk/', pos: 'n.', cat: 'sys',
  en: 'A state where each of several threads waits for a resource another one holds, so none proceeds.',
  zh: '死锁：多个线程各自等待对方持有的资源，结果谁也无法继续。',
  oe: 'From dead "unmoving, absolute" + lock. The word meant a total standstill in negotiations long before it described threads.',
  oz: '由 dead（僵住的、彻底的）+ lock 构成。远在描述线程之前，它就指谈判陷入完全僵局。',
  se: 'Always acquire locks in a globally consistent order to avoid deadlock.',
  sz: '始终按全局一致的顺序获取锁，就能避免死锁。'
},
{
  w: 'cache', uk: '/kæʃ/', us: '/kæʃ/', pos: 'n./v.', cat: 'sys',
  en: 'A small fast store that keeps recently or frequently used data close to its consumer.',
  zh: '缓存：把近期或高频使用的数据放在离使用者更近的小而快的存储中。',
  oe: 'From French cacher "to hide". Fur trappers called a hidden supply depot a cache; the word entered computing in 1965 for hidden fast memory. It is pronounced exactly like cash.',
  oz: '源自法语 cacher“隐藏”。皮毛猎人把藏起来的补给点叫 cache；1965 年该词进入计算机领域，指隐藏的高速存储。发音与 cash 完全相同。',
  se: 'There are only two hard problems: cache invalidation and naming things.',
  sz: '计算机科学只有两个难题：缓存失效和命名。'
},
{
  w: 'latency', uk: '/ˈleɪtnsi/', us: '/ˈleɪtnsi/', pos: 'n.', cat: 'sys',
  en: 'The time between issuing a request and receiving the first part of the response.',
  zh: '延迟：从发出请求到收到响应第一部分之间的时间。',
  oe: 'From Latin latere "to lie hidden" - the same root as latent. Latency is the delay hiding inside a system, invisible until you measure it.',
  oz: '源自拉丁语 latere“隐藏”，与 latent 同根。延迟就是藏在系统内部、不测就看不见的那段时间。',
  se: 'Report p99 latency, not the mean.',
  sz: '要报告 p99 延迟，而不是平均值。'
},
{
  w: 'throughput', uk: '/ˈθruːpʊt/', us: '/ˈθruːpʊt/', pos: 'n.', cat: 'sys',
  en: 'The amount of work a system completes per unit of time.',
  zh: '吞吐量：系统在单位时间内完成的工作量。',
  oe: 'A 20th-century industrial compound of through + put - how much you can put through the pipe. Latency and throughput can be improved independently.',
  oz: '20 世纪工业界造的复合词：through（通过）+ put（放入）——能从管道里推过多少东西。延迟与吞吐量可以各自独立地优化。',
  se: 'Batching raised throughput but doubled tail latency.',
  sz: '批处理提高了吞吐量，却让尾延迟翻了一倍。'
},
{
  w: 'idempotency', uk: '/ˌaɪdemˈpəʊtənsi/', us: '/ˌaɪdəmˈpoʊtənsi/', pos: 'n.', cat: 'sys',
  en: 'The property that repeating an operation has no additional effect beyond the first application.',
  zh: '幂等性：重复执行某操作，除首次外不再产生额外效果的性质。',
  oe: 'The noun of idempotent; see idem "the same" + potens "power". Distributed systems rely on it because networks retry without asking.',
  oz: 'idempotent 的名词形式，来自 idem（相同）+ potens（力量）。分布式系统依赖它，因为网络重试从不征求同意。',
  se: 'Attach an idempotency key to every write request.',
  sz: '给每个写请求都带上幂等键。'
},
{
  w: 'consensus', uk: '/kənˈsensəs/', us: '/kənˈsensəs/', pos: 'n.', cat: 'sys',
  en: 'A protocol by which distributed nodes agree on a single value despite failures.',
  zh: '共识：分布式节点在存在故障的情况下就同一个值达成一致的协议。',
  oe: 'Latin consensus "agreement, a feeling together" (com- + sentire "to feel", also behind sense and sentiment).',
  oz: '拉丁语 consensus“一致、共同的感受”（com- + sentire 感觉，sense、sentiment 同源）。',
  se: 'Raft made consensus teachable in a way Paxos never did.',
  sz: 'Raft 让共识算法变得可教，这是 Paxos 从未做到的。'
},
{
  w: 'quorum', uk: '/ˈkwɔːrəm/', us: '/ˈkwɔːrəm/', pos: 'n.', cat: 'sys',
  en: 'The minimum number of nodes that must acknowledge an operation for it to count as committed.',
  zh: '法定人数：一次操作必须获得多少节点确认才算提交成功。',
  oe: 'Latin for "of whom", the first word of a commission naming the justices whose presence was required. It became the word for the required minimum attendance.',
  oz: '拉丁语意为“其中的”，是任命状开头的第一个词，用以指明必须到场的法官。后来专指所需的最低出席人数。',
  se: 'With R plus W greater than N you get quorum consistency.',
  sz: '当 R + W > N 时，就得到了法定人数一致性。'
},
{
  w: 'eventual', uk: '/ɪˈventʃuəl/', us: '/ɪˈventʃuəl/', pos: 'adj.', cat: 'sys',
  en: 'Occurring in the end: in eventual consistency, replicas converge once updates stop.',
  zh: '最终的：在“最终一致性”中，指更新停止后各副本终将收敛一致。',
  oe: 'From Latin eventus "outcome", from evenire "to come out". Beware the false friend: it means "in the end", not "possibly" - unlike French eventuel.',
  oz: '源自拉丁语 eventus“结果”，词根 evenire“发生”。注意假朋友：它意为“最终”，而非“可能”——与法语 eventuel 不同。',
  se: 'Eventual consistency is fine for a like counter, not for a bank ledger.',
  sz: '最终一致性用于点赞计数没问题，用于银行账本就不行。'
},
{
  w: 'partition', uk: '/pɑːˈtɪʃn/', us: '/pɑːrˈtɪʃn/', pos: 'n./v.', cat: 'sys',
  en: 'A split of data across shards, or a network break that isolates groups of nodes.',
  zh: '分区：把数据切分到多个分片；也指网络中断导致节点群相互隔离。',
  oe: 'From Latin partitio "a sharing, a division", from pars "a part". The CAP theorem uses the network sense.',
  oz: '源自拉丁语 partitio“划分、分享”，词根 pars“部分”。CAP 定理中用的是“网络分区”这一义项。',
  se: 'During a partition you must choose availability or consistency.',
  sz: '发生网络分区时，你必须在可用性与一致性之间做选择。'
},
{
  w: 'orchestration', uk: '/ˌɔːkɪˈstreɪʃn/', us: '/ˌɔːrkɪˈstreɪʃn/', pos: 'n.', cat: 'sys',
  en: 'Automated coordination of many services or containers into one working whole.',
  zh: '编排：自动协调众多服务或容器，使之成为一个可运转的整体。',
  oe: 'From Greek orkhestra, the dancing floor in front of a theatre stage. Arranging instruments for an orchestra became arranging services for a cluster.',
  oz: '源自希腊语 orkhestra，即剧场舞台前的歌舞场地。为管弦乐团编配乐器，演变为给集群编排服务。',
  se: 'Kubernetes handles orchestration; your job is the failure modes.',
  sz: 'Kubernetes 负责编排，而你要负责的是各种故障模式。'
},
{
  w: 'throttle', uk: '/ˈθrɒtl/', us: '/ˈθrɑːtl/', pos: 'v.', cat: 'sys',
  en: 'To deliberately limit the rate at which requests are accepted or processed.',
  zh: '限流：有意限制请求被接受或处理的速率。',
  oe: 'Related to throat - originally to choke someone. An engine\'s throttle chokes the fuel flow; a rate limiter chokes the request flow.',
  oz: '与 throat（喉咙）相关，原意是“扼住咽喉”。发动机的节流阀掐住油流，限流器则掐住请求流。',
  se: 'Throttle per API key, not per IP address.',
  sz: '按 API key 限流，而不是按 IP 地址。'
},
{
  w: 'resilience', uk: '/rɪˈzɪliəns/', us: '/rɪˈzɪliəns/', pos: 'n.', cat: 'sys',
  en: 'The capacity of a system to absorb failures and return to normal service.',
  zh: '弹性／韧性：系统吸收故障并恢复正常服务的能力。',
  oe: 'From Latin resilire "to leap back, to rebound" (re- + salire "to jump", the same salire as saliency).',
  oz: '源自拉丁语 resilire“弹回、反弹”（re- + salire 跳跃，与 saliency 同根）。',
  se: 'Resilience is designed in, not bolted on after the incident.',
  sz: '韧性是设计出来的，不是事故之后补上去的。'
},
{
  w: 'daemon', uk: '/ˈdiːmən/', us: '/ˈdiːmən/', pos: 'n.', cat: 'sys',
  en: 'A background process that runs without a controlling terminal, waiting to serve requests.',
  zh: '守护进程：在后台运行、没有控制终端、等待处理请求的进程。',
  oe: 'From Greek daimon, an attendant spirit - not a demon. MIT\'s Project MAC picked the name in 1963, inspired by Maxwell\'s demon, the imaginary being that sorts molecules tirelessly.',
  oz: '源自希腊语 daimon“伴随的精灵”，并非恶魔。1963 年 MIT 的 Project MAC 取此名，灵感来自“麦克斯韦妖”——那个不知疲倦地分拣分子的假想生物。',
  se: 'The daemon reopens its log file on SIGHUP.',
  sz: '守护进程在收到 SIGHUP 时会重新打开日志文件。'
},
{
  w: 'virtualization', uk: '/ˌvɜːtʃuəlaɪˈzeɪʃn/', us: '/ˌvɜːrtʃuələˈzeɪʃn/', pos: 'n.', cat: 'sys',
  en: 'Presenting simulated hardware or resources so several isolated systems share one machine.',
  zh: '虚拟化：提供模拟的硬件或资源，让多个相互隔离的系统共享一台物理机。',
  oe: 'From Latin virtus "strength, capacity". Virtual came to mean "existing in effect though not in fact" - present in power, absent in substance.',
  oz: '源自拉丁语 virtus“力量、效能”。virtual 遂指“实际上存在但形式上不存在”——有其效，无其体。',
  se: 'Containers are process isolation, not full virtualization.',
  sz: '容器是进程级隔离，并非完整的虚拟化。'
},
{
  w: 'preemption', uk: '/priˈempʃn/', us: '/priˈempʃn/', pos: 'n.', cat: 'sys',
  en: 'The scheduler suspending a running task so another may use the CPU.',
  zh: '抢占：调度器中断正在运行的任务，让另一个任务使用 CPU。',
  oe: 'From Latin prae "before" + emere "to buy, to take". Pre-emption was originally the right to buy something before anyone else could.',
  oz: '源自拉丁语 prae（在……之前）+ emere（买、取）。preemption 原指优先购买权。',
  se: 'Without preemption a tight loop can starve every other thread.',
  sz: '没有抢占机制时，一个死循环就能把其他线程全部饿死。'
},

/* ===================== Network Engineering ===================== */
{
  w: 'protocol', uk: '/ˈprəʊtəkɒl/', us: '/ˈproʊtəkɔːl/', pos: 'n.', cat: 'net',
  en: 'An agreed set of rules governing the format and ordering of messages between parties.',
  zh: '协议：双方之间关于消息格式与顺序的一套约定规则。',
  oe: 'From Greek protokollon "the first sheet glued to a papyrus roll" (protos "first" + kolla "glue"), which carried the summary of the contents. It came to mean the formal record, then diplomatic etiquette, then network rules.',
  oz: '源自希腊语 protokollon“粘在纸卷最前面的那张纸”（protos 第一 + kolla 胶），上面写着内容摘要。后引申为正式记录、外交礼仪，最终成为网络规则。',
  se: 'The protocol tolerates reordering but not duplication.',
  sz: '这个协议容忍乱序，但不容忍重复。'
},
{
  w: 'packet', uk: '/ˈpækɪt/', us: '/ˈpækɪt/', pos: 'n.', cat: 'net',
  en: 'A self-contained unit of data carrying its own header and routing information.',
  zh: '数据包：自带首部与路由信息、可独立传输的数据单元。',
  oe: 'A diminutive of pack - a little bundle. Donald Davies chose the word in 1965 for packet switching, preferring it to the technical alternatives because ordinary people understood it.',
  oz: 'pack 的指小形式，即“小包裹”。1965 年 Donald Davies 为“分组交换”选用此词，因为相比技术性替代词，普通人也能听懂。',
  se: 'Each packet may take a different path through the network.',
  sz: '每个数据包在网络中走的路径可能都不一样。'
},
{
  w: 'router', uk: '/ˈruːtə/', us: '/ˈraʊtər/', pos: 'n.', cat: 'net',
  en: 'A device that forwards packets between networks by consulting a routing table.',
  zh: '路由器：查询路由表并在网络之间转发数据包的设备。',
  oe: 'From route, Old French rute, from Latin rupta via "a broken way" - a path forced through a forest. British and American speakers famously disagree on the vowel.',
  oz: '源自 route，古法语 rute，拉丁语 rupta via“开辟出来的路”——在森林中硬闯出的通道。英美两地对其元音读法著名地不一致。',
  se: 'The router dropped the packet because its TTL reached zero.',
  sz: '因为 TTL 减到了零，路由器把这个包丢弃了。'
},
{
  w: 'bandwidth', uk: '/ˈbændwɪdθ/', us: '/ˈbændwɪdθ/', pos: 'n.', cat: 'net',
  en: 'The maximum rate at which data can be transferred across a link.',
  zh: '带宽：一条链路上数据传输速率的上限。',
  oe: 'From radio engineering: the width of a band of frequencies. Note the difference from throughput, which is what you actually achieve.',
  oz: '源自无线电工程：一段频带的宽度。注意它与 throughput 的区别——后者是实际达成的速率。',
  se: 'Bandwidth is cheap; latency is bound by physics.',
  sz: '带宽很便宜，延迟却受物理定律限制。'
},
{
  w: 'handshake', uk: '/ˈhændʃeɪk/', us: '/ˈhændʃeɪk/', pos: 'n.', cat: 'net',
  en: 'The opening exchange in which two endpoints agree on parameters before sending data.',
  zh: '握手：两端在传输数据前协商参数的开场交互。',
  oe: 'Literally the human greeting, which historically proved that neither hand held a weapon. TCP\'s three-way handshake keeps the metaphor exactly.',
  oz: '字面即人类的握手礼——历史上用以证明双手都没有握着武器。TCP 的三次握手完整保留了这一比喻。',
  se: 'The TLS handshake adds one round trip before any payload moves.',
  sz: 'TLS 握手会在传输任何数据之前多出一个往返。'
},
{
  w: 'socket', uk: '/ˈsɒkɪt/', us: '/ˈsɑːkɪt/', pos: 'n.', cat: 'net',
  en: 'The endpoint abstraction that binds an IP address and a port to a stream of bytes.',
  zh: '套接字：把 IP 地址与端口绑定到字节流上的端点抽象。',
  oe: 'From Old French soquet "a small plough blade", later "a hollow that something is plugged into". Berkeley chose it in 1983 because a program plugs into the network like a lamp into a wall socket.',
  oz: '源自古法语 soquet“小犁头”，后指“可插入东西的凹槽”。1983 年 Berkeley 选用此词，因为程序接入网络就像台灯插进墙上的插座。',
  se: 'Set SO_REUSEADDR before you bind the socket.',
  sz: '在绑定套接字之前先设置 SO_REUSEADDR。'
},
{
  w: 'port', uk: '/pɔːt/', us: '/pɔːrt/', pos: 'n.', cat: 'net',
  en: 'A 16-bit number identifying which service on a host a packet is destined for.',
  zh: '端口：16 位数字，标识数据包要送达主机上的哪个服务。',
  oe: 'From Latin porta "a gate" and portus "a harbour". Both senses fit: a numbered gate through which traffic enters a machine.',
  oz: '源自拉丁语 porta（门）与 portus（港口）。两种意象都贴切：流量进入机器所经过的编号之门。',
  se: 'Anything below port 1024 needs elevated privileges to bind.',
  sz: '绑定 1024 以下的端口需要提升权限。'
},
{
  w: 'subnet', uk: '/ˈsʌbnet/', us: '/ˈsʌbnet/', pos: 'n.', cat: 'net',
  en: 'A logical subdivision of an IP network, marked out by a mask over the address bits.',
  zh: '子网：IP 网络的逻辑划分，由地址位上的掩码界定。',
  oe: 'Latin sub "under" + net. RFC 950 formalised subnetting in 1985; CIDR replaced the rigid class system in 1993.',
  oz: '拉丁语 sub（在……之下）+ net。1985 年 RFC 950 正式确立子网划分，1993 年 CIDR 取代了僵化的分类地址体系。',
  se: 'A /24 subnet leaves 254 usable host addresses.',
  sz: '一个 /24 子网可提供 254 个可用主机地址。'
},
{
  w: 'gateway', uk: '/ˈɡeɪtweɪ/', us: '/ˈɡeɪtweɪ/', pos: 'n.', cat: 'net',
  en: 'The node a host sends traffic to when the destination lies outside its own network.',
  zh: '网关：当目的地不在本网络内时，主机把流量交给的那个节点。',
  oe: 'A literal gate plus way - the opening in a wall through which you leave the enclosure.',
  oz: '字面就是 gate（门）+ way（路）——墙上供你离开院落的那个开口。',
  se: 'The default gateway was misconfigured, so nothing could leave the LAN.',
  sz: '默认网关配错了，因此没有任何流量能离开局域网。'
},
{
  w: 'firewall', uk: '/ˈfaɪəwɔːl/', us: '/ˈfaɪərwɔːl/', pos: 'n.', cat: 'net',
  en: 'A filter that permits or blocks traffic according to a set of security rules.',
  zh: '防火墙：按安全规则放行或阻断流量的过滤器。',
  oe: 'From building construction: a fire-resistant wall that stops a blaze from spreading between sections. The computing sense dates from the late 1980s.',
  oz: '源自建筑术语：阻止火势在建筑分区之间蔓延的耐火墙。计算机含义始于 1980 年代末。',
  se: 'The firewall drops the packet silently instead of rejecting it.',
  sz: '防火墙选择静默丢弃这个包，而不是回复拒绝。'
},
{
  w: 'proxy', uk: '/ˈprɒksi/', us: '/ˈprɑːksi/', pos: 'n.', cat: 'net',
  en: 'An intermediary that makes requests on behalf of a client, or answers on behalf of a server.',
  zh: '代理：代表客户端发出请求，或代表服务端作出响应的中间方。',
  oe: 'A 15th-century contraction of procuracy, from Latin procurare "to take care of on someone\'s behalf". Voting by proxy is the original sense.',
  oz: '15 世纪由 procuracy 缩合而来，源自拉丁语 procurare“代人打理”。“委托投票”是它的本义。',
  se: 'A reverse proxy terminates TLS and fans out to the backends.',
  sz: '反向代理负责终结 TLS，再把请求分发到各后端。'
},
{
  w: 'tunnel', uk: '/ˈtʌnl/', us: '/ˈtʌnl/', pos: 'n./v.', cat: 'net',
  en: 'Carrying one protocol inside the payload of another so it can cross an unfriendly network.',
  zh: '隧道：把一种协议封装进另一种协议的载荷中，以穿越不兼容的网络。',
  oe: 'From Old French tonnelle "a barrel-shaped vault", diminutive of tonne "cask". Originally a net shaped like a barrel for catching birds.',
  oz: '源自古法语 tonnelle“桶形拱顶”，是 tonne（大桶）的指小形式。最初指一种捕鸟用的桶状网。',
  se: 'They tunnel IPv6 over IPv4 until the carrier upgrades.',
  sz: '在运营商升级之前，他们把 IPv6 通过隧道封装在 IPv4 上传输。'
},
{
  w: 'broadcast', uk: '/ˈbrɔːdkɑːst/', us: '/ˈbrɔːdkæst/', pos: 'v./n.', cat: 'net',
  en: 'Sending a single message to every host on a network segment at once.',
  zh: '广播：把一条消息同时发送给网段内的所有主机。',
  oe: 'An 18th-century farming word: to scatter seed broadly by hand rather than in drills. Radio borrowed it around 1920, and networking borrowed it from radio.',
  oz: '18 世纪的农业词汇：用手把种子“广撒”出去，而非条播。1920 年前后被广播电台借用，网络又从电台借来。',
  se: 'ARP uses a broadcast to find the MAC address behind an IP.',
  sz: 'ARP 通过广播来查找某个 IP 背后的 MAC 地址。'
},
{
  w: 'congestion', uk: '/kənˈdʒestʃən/', us: '/kənˈdʒestʃən/', pos: 'n.', cat: 'net',
  en: 'Overload of a link or queue, causing delay, jitter and packet loss.',
  zh: '拥塞：链路或队列过载，导致延迟、抖动与丢包。',
  oe: 'From Latin congerere "to heap together" (com- + gerere "to carry"). Medicine used it for blood piling up in a vessel long before traffic engineers did.',
  oz: '源自拉丁语 congerere“堆积在一起”（com- + gerere 搬运）。远在交通工程之前，医学就用它描述血液在血管中淤积。',
  se: 'BBR infers congestion from delay rather than from loss.',
  sz: 'BBR 通过延迟而不是丢包来推断拥塞。'
},
{
  w: 'jitter', uk: '/ˈdʒɪtə/', us: '/ˈdʒɪtər/', pos: 'n.', cat: 'net',
  en: 'Variation in packet delay, which damages real-time audio and video more than raw latency does.',
  zh: '抖动：数据包延迟的波动，对实时音视频的伤害往往大于延迟本身。',
  oe: 'From American English jitters "nervous trembling" (1920s). A jittery stream shakes rather than merely arriving late.',
  oz: '源自美式英语 jitters“紧张发抖”（1920 年代）。抖动的流不只是慢，而是在“发抖”。',
  se: 'Add a jitter buffer of 40 ms to smooth playback.',
  sz: '加一个 40 毫秒的抖动缓冲区来平滑播放。'
},
{
  w: 'encryption', uk: '/ɪnˈkrɪpʃn/', us: '/ɪnˈkrɪpʃn/', pos: 'n.', cat: 'net',
  en: 'Transforming data with a key so that only holders of the matching key can read it.',
  zh: '加密：用密钥变换数据，使得只有持有对应密钥的人才能读取。',
  oe: 'From Greek kryptos "hidden, secret" (also behind crypt and cryptic), from kryptein "to hide".',
  oz: '源自希腊语 kryptos“隐藏的、秘密的”（crypt、cryptic 同源），动词 kryptein“隐藏”。',
  se: 'Encryption in transit is not a substitute for encryption at rest.',
  sz: '传输加密不能替代存储加密。'
},
{
  w: 'cipher', uk: '/ˈsaɪfə/', us: '/ˈsaɪfər/', pos: 'n.', cat: 'net',
  en: 'An algorithm for performing encryption or decryption, together with its mode of operation.',
  zh: '密码算法：执行加密或解密的算法及其工作模式。',
  oe: 'From Arabic sifr "empty, zero", via Latin cifra. Because Hindu-Arabic numerals looked like secret code to medieval Europeans, the word for zero came to mean secret writing - and separately gave us the word zero.',
  oz: '源自阿拉伯语 sifr“空、零”，经拉丁语 cifra 传入。中世纪欧洲人觉得印度-阿拉伯数字像密码，于是“零”一词转指秘密书写；另一条支线则演变成 zero。',
  se: 'Disable every cipher suite that still allows CBC.',
  sz: '把所有仍允许 CBC 的密码套件都禁用掉。'
},
{
  w: 'authentication', uk: '/ɔːˌθentɪˈkeɪʃn/', us: '/ɔːˌθentɪˈkeɪʃn/', pos: 'n.', cat: 'net',
  en: 'Establishing who a party is, as distinct from what they are allowed to do.',
  zh: '认证：确认对方是谁——这与“对方被允许做什么”是两回事。',
  oe: 'From Greek authentikos "genuine, original", from authentes "one who acts on his own authority". Do not confuse it with authorization.',
  oz: '源自希腊语 authentikos“真实的、原本的”，词根 authentes“凭自身权威行事的人”。不要与 authorization（授权）混淆。',
  se: 'Authentication proves identity; authorization grants access.',
  sz: '认证证明身份，授权赋予权限。'
},
{
  w: 'certificate', uk: '/səˈtɪfɪkət/', us: '/sərˈtɪfɪkət/', pos: 'n.', cat: 'net',
  en: 'A signed document binding a public key to an identity, vouched for by a trusted authority.',
  zh: '证书：由可信机构签名、把公钥与身份绑定在一起的文件。',
  oe: 'From Latin certus "sure, settled" + facere "to make" - literally something made certain.',
  oz: '源自拉丁语 certus（确定的）+ facere（使成为）——字面就是“使之确凿之物”。',
  se: 'The outage was a certificate that nobody remembered to renew.',
  sz: '这次故障的原因是一张没人记得续期的证书。'
},
{
  w: 'resolver', uk: '/rɪˈzɒlvə/', us: '/rɪˈzɑːlvər/', pos: 'n.', cat: 'net',
  en: 'The client-side component that turns a domain name into an IP address via DNS.',
  zh: '解析器：客户端组件，通过 DNS 把域名转换成 IP 地址。',
  oe: 'From Latin resolvere "to loosen, to untie" (re- + solvere "to loose", also behind solve and dissolve). The resolver unties a name into an address.',
  oz: '源自拉丁语 resolvere“松开、解开”（re- + solvere 解，solve、dissolve 同源）。解析器把一个名字“解开”成地址。',
  se: 'The stub resolver caches answers until the TTL expires.',
  sz: '存根解析器会缓存应答，直到 TTL 过期。'
},
{
  w: 'ping', uk: '/pɪŋ/', us: '/pɪŋ/', pos: 'n./v.', cat: 'net',
  en: 'To test reachability and round-trip time by sending an ICMP echo request.',
  zh: 'Ping：发送 ICMP 回显请求，用以测试可达性与往返时间。',
  oe: 'Mike Muuss wrote the tool in 1983 and named it after the sonar pulse a submarine emits, listening for the echo. The backronym "Packet InterNet Groper" was invented afterwards.',
  oz: 'Mike Muuss 于 1983 年写出该工具，以潜艇发出并等待回声的声呐脉冲命名。“Packet InterNet Groper”这一逆构缩写是后来才编出来的。',
  se: 'It pings fine, so the problem is above layer three.',
  sz: 'ping 是通的，所以问题出在三层以上。'
},
{
  w: 'bottleneck', uk: '/ˈbɒtlnek/', us: '/ˈbɑːtlnek/', pos: 'n.', cat: 'net',
  en: 'The single stage that limits the performance of the whole pipeline.',
  zh: '瓶颈：限制整条流水线性能的那一个环节。',
  oe: 'The narrow neck of a bottle, through which everything must pass one at a time. Used for traffic jams from the 1900s and for systems ever since.',
  oz: '瓶子的细颈，所有东西都得挨个通过。1900 年代起用于形容交通堵塞，此后一直用于系统分析。',
  se: 'Profile first - the bottleneck is rarely where you guessed.',
  sz: '先做性能剖析——瓶颈很少出现在你猜的地方。'
},
{
  w: 'multiplexing', uk: '/ˈmʌltɪpleksɪŋ/', us: '/ˈmʌltɪpleksɪŋ/', pos: 'n.', cat: 'net',
  en: 'Carrying several independent streams over one shared connection.',
  zh: '多路复用：在一条共享连接上承载多个相互独立的流。',
  oe: 'Latin multi "many" + plex "fold, braid" (as in duplex, complex) - many strands woven into one channel.',
  oz: '拉丁语 multi（多）+ plex（折、编织，duplex、complex 同源）——多股线编进同一条通道。',
  se: 'HTTP/2 multiplexing removed the head-of-line blocking of HTTP/1.1.',
  sz: 'HTTP/2 的多路复用消除了 HTTP/1.1 的队头阻塞。'
},
{
  w: 'checksum', uk: '/ˈtʃeksʌm/', us: '/ˈtʃeksʌm/', pos: 'n.', cat: 'net',
  en: 'A small value computed from data so that accidental corruption can be detected.',
  zh: '校验和：由数据计算出的小型数值，用于检测偶发的数据损坏。',
  oe: 'A plain compound of check and sum, from the earliest days of teleprinter and punched-card error control.',
  oz: '由 check（核对）与 sum（求和）直接构成，出自电传打字机与穿孔卡片时代最早的差错控制手段。',
  se: 'A checksum catches noise, not a determined attacker.',
  sz: '校验和能发现噪声，但挡不住有意的攻击者。'
}
,

/* ================= 技术英语 · 进阶补充 tech, advanced ================= */
{
  w: 'ablation', uk: '/əˈbleɪʃn/', us: '/əˈbleɪʃn/', pos: 'n.', cat: 'ai',
  en: 'Removing one component of a system to measure how much it actually contributed.',
  zh: '消融（实验）：拿掉系统的某个组件，以衡量它究竟贡献了多少。',
  oe: 'From Latin ablatus "carried away" (ab- "away" + ferre "to carry"). Surgeons and glaciologists ablate tissue and ice; machine learning ablates modules.',
  oz: '源自拉丁语 ablatus“被拿走的”（ab- 离开 + ferre 携带）。外科医生切除组织、冰川学家研究冰的消融，机器学习则“消融”模块。',
  se: 'The ablation study showed the gain came entirely from the data, not the architecture.',
  sz: '消融实验表明，提升完全来自数据而非架构。'
},
{
  w: 'calibration', uk: '/ˌkælɪˈbreɪʃn/', us: '/ˌkælɪˈbreɪʃn/', pos: 'n.', cat: 'ai',
  en: 'The degree to which a model\'s stated confidence matches its actual accuracy.',
  zh: '校准：模型给出的置信度与其真实准确率相符的程度。',
  oe: 'From calibre, via French from Arabic qalib "a mould, a shoemaker\'s last" - the bore of a gun barrel was measured against a mould.',
  oz: '源自 calibre（口径），经法语来自阿拉伯语 qalib“模具、鞋楦”——枪管口径最初就是拿模具去比对的。',
  se: 'A well-calibrated model that says 70% should be right about 70% of the time.',
  sz: '一个校准良好的模型说 70%，就应该有大约 70% 的时候是对的。'
},
{
  w: 'contrastive', uk: '/kənˈtrɑːstɪv/', us: '/kənˈtræstɪv/', pos: 'adj.', cat: 'ai',
  en: 'Learning by pulling matching pairs together in the embedding space and pushing mismatched pairs apart.',
  zh: '对比式的：通过拉近正样本对、推远负样本对来学习表示。',
  oe: 'From Latin contra "against" + stare "to stand" - two things made to stand against each other so the difference shows.',
  oz: '源自拉丁语 contra（相对）+ stare（站立）——让两样东西对立而站，差异便显现出来。',
  se: 'CLIP is trained with a contrastive objective over image-text pairs.',
  sz: 'CLIP 是在图文配对上用对比学习目标训练的。'
},
{
  w: 'emergent', uk: '/iˈmɜːdʒənt/', us: '/iˈmɜːrdʒənt/', pos: 'adj.', cat: 'ai',
  en: 'Describing a capability that appears at scale without having been explicitly trained for.',
  zh: '涌现的：在规模达到一定程度后自发出现、并未被显式训练的能力。',
  oe: 'From Latin emergere "to rise out of, come to light" (e- "out" + mergere "to dip") - the same mergere behind merge and submerge. The ability surfaces the way a swimmer breaks the water.',
  oz: '源自拉丁语 emergere“浮出、显露”（e- 出 + mergere 浸入）——与 merge、submerge 同根。能力像泳者破水而出一样浮现。',
  se: 'Chain-of-thought reasoning is often described as an emergent ability.',
  sz: '思维链推理常被描述为一种涌现能力。'
},
{
  w: 'perplexity', uk: '/pəˈpleksəti/', us: '/pərˈpleksəti/', pos: 'n.', cat: 'ai',
  en: 'The exponential of cross-entropy: roughly, how many equally likely options the model is choosing among.',
  zh: '困惑度：交叉熵的指数，直观上表示模型在多少个等可能选项之间犹豫。',
  oe: 'From Latin perplexus "entangled, involved" (per- "thoroughly" + plectere "to weave") - the same plectere as complexity. A perplexed model is thoroughly tangled.',
  oz: '源自拉丁语 perplexus“纠缠的”（per- 彻底 + plectere 编织）——与 complexity 同根。困惑度高的模型就是被彻底缠住了。',
  se: 'Perplexity of 8 means the model is about as unsure as picking among eight words.',
  sz: '困惑度为 8，大致相当于模型在八个词之间拿不定主意。'
},
{
  w: 'sparsity', uk: '/ˈspɑːsəti/', us: '/ˈspɑːrsəti/', pos: 'n.', cat: 'ai',
  en: 'The property of having most entries be zero, which can be exploited for speed and memory.',
  zh: '稀疏性：绝大多数元素为零的性质，可用来换取速度与显存。',
  oe: 'From Latin sparsus "scattered", past participle of spargere "to scatter, sprinkle" - also behind disperse and aspersion.',
  oz: '源自拉丁语 sparsus“散布的”，动词 spargere“撒、散播”，disperse、aspersion 同源。',
  se: 'Mixture-of-experts buys capacity through sparsity rather than through raw compute.',
  sz: '混合专家模型是靠稀疏性而不是靠堆算力来换取容量的。'
},
{
  w: 'surrogate', uk: '/ˈsʌrəɡət/', us: '/ˈsɜːrəɡət/', pos: 'n./adj.', cat: 'ai',
  en: 'A cheap stand-in objective or model optimised in place of the true one.',
  zh: '代理（目标/模型）：用来替代真实目标进行优化的廉价替身。',
  oe: 'From Latin surrogare "to elect in place of another" (sub- "in place of" + rogare "to ask"). A surrogate was originally a deputy bishop.',
  oz: '源自拉丁语 surrogare“选举他人以代之”（sub- 代替 + rogare 请求）。surrogate 最初指代理主教。',
  se: 'Accuracy is only a surrogate for what the product actually needs.',
  sz: '准确率只是产品真正需求的一个替代指标。'
},
{
  w: 'interpretability', uk: '/ɪnˌtɜːprɪtəˈbɪləti/', us: '/ɪnˌtɜːrprɪtəˈbɪləti/', pos: 'n.', cat: 'ai',
  en: 'How far a human can follow the reasons behind a model\'s output.',
  zh: '可解释性：人类能在多大程度上看懂模型输出背后的依据。',
  oe: 'From Latin interpres "a negotiator, a broker, a translator" - the middleman who stands between two parties and makes each intelligible to the other.',
  oz: '源自拉丁语 interpres“中间人、经纪人、译者”——站在双方之间、让彼此听懂对方的人。',
  se: 'Interpretability is a research programme, not a checkbox on a slide.',
  sz: '可解释性是一个研究方向，不是幻灯片上的一个勾选项。'
},
{
  w: 'bijection', uk: '/baɪˈdʒekʃn/', us: '/baɪˈdʒekʃn/', pos: 'n.', cat: 'algo',
  en: 'A mapping that pairs every element of one set with exactly one element of another, both ways.',
  zh: '双射：两个集合之间一一对应、且双向都无遗漏的映射。',
  oe: 'Coined by the Bourbaki group in the 1950s from Latin bi- "two" + jacere "to throw" - a throwing across in both directions.',
  oz: '1950 年代由布尔巴基学派造词，取拉丁语 bi-（二）+ jacere（投掷）——双向的投射。',
  se: 'If you can build a bijection, the two sets have the same size.',
  sz: '只要能构造出一个双射，这两个集合的大小就相同。'
},
{
  w: 'convex', uk: '/ˈkɒnveks/', us: '/kɑːnˈveks/', pos: 'adj.', cat: 'algo',
  en: 'Describing a set or function where any chord between two points stays on or above the graph.',
  zh: '凸的：集合或函数满足任意两点连线都不低于函数图像的性质。',
  oe: 'From Latin convexus "vaulted, arched", perhaps from convehere "to carry together". Convex optimisation matters because a local minimum is then the global one.',
  oz: '源自拉丁语 convexus“拱形的、穹隆的”。凸优化之所以重要，是因为此时局部最小值即全局最小值。',
  se: 'The loss is non-convex, so there is no guarantee of a global optimum.',
  sz: '这个损失函数是非凸的，因此无法保证找到全局最优。'
},
{
  w: 'isomorphic', uk: '/ˌaɪsəˈmɔːfɪk/', us: '/ˌaɪsəˈmɔːrfɪk/', pos: 'adj.', cat: 'algo',
  en: 'Having the same structure, so that one can be relabelled into the other.',
  zh: '同构的：结构完全相同，只需重新命名就能变成对方。',
  oe: 'Greek isos "equal" + morphe "form" - the same morphe as polymorphism and metamorphosis.',
  oz: '希腊语 isos（相等）+ morphe（形态）——与 polymorphism、metamorphosis 中的 morphe 同根。',
  se: 'Graph isomorphism sits in an unusual complexity class of its own.',
  sz: '图同构问题处在一个相当特殊的复杂度类里。'
},
{
  w: 'lexicographic', uk: '/ˌleksɪkəˈɡræfɪk/', us: '/ˌleksɪkəˈɡræfɪk/', pos: 'adj.', cat: 'algo',
  en: 'Ordered the way a dictionary orders words: compare the first element, break ties with the next.',
  zh: '字典序的：像字典排词那样，先比第一个元素，相同再比下一个。',
  oe: 'Greek lexikon "of words" + graphein "to write" - literally the order of a word-book.',
  oz: '希腊语 lexikon（词的）+ graphein（书写）——字面就是“词书的顺序”。',
  se: 'Sort the tuples lexicographically and the tie-breaking falls out for free.',
  sz: '把元组按字典序排，并列时的先后顺序就自动确定了。'
},
{
  w: 'pathological', uk: '/ˌpæθəˈlɒdʒɪkl/', us: '/ˌpæθəˈlɑːdʒɪkl/', pos: 'adj.', cat: 'algo',
  en: 'Describing a specially constructed input that defeats an otherwise good algorithm.',
  zh: '病态的：专门构造出来、能击垮某个本来不错的算法的输入。',
  oe: 'Greek pathos "suffering, disease" + logos "study". Mathematicians borrowed the medical word for objects that behave badly on purpose.',
  oz: '希腊语 pathos（痛苦、疾病）+ logos（学说）。数学家借用这个医学词，指那些故意“不听话”的对象。',
  se: 'Hash flooding is a pathological input attack, not bad luck.',
  sz: '哈希洪水是刻意构造的病态输入攻击，不是运气不好。'
},
{
  w: 'tractable', uk: '/ˈtræktəbl/', us: '/ˈtræktəbl/', pos: 'adj.', cat: 'algo',
  en: 'Solvable with resources that grow only polynomially; manageable in practice.',
  zh: '可解的／易处理的：所需资源仅以多项式增长，实践中可控。',
  oe: 'From Latin tractare "to handle, manage", a frequentative of trahere "to draw" - the same trahere behind abstraction and traction. A tractable problem is one you can get a grip on.',
  oz: '源自拉丁语 tractare“操持、处理”，是 trahere（拉）的反复态——与 abstraction、traction 同根。可解的问题就是你抓得住的问题。',
  se: 'Relaxing the integrality constraint makes the program tractable.',
  sz: '放松整数约束之后，这个规划问题就变得可解了。'
},
{
  w: 'transitive', uk: '/ˈtrænsətɪv/', us: '/ˈtrænsətɪv/', pos: 'adj.', cat: 'algo',
  en: 'Having the property that if a relates to b and b to c, then a relates to c.',
  zh: '传递的：若 a 关联 b 且 b 关联 c，则 a 必关联 c。',
  oe: 'From Latin transire "to go across" (trans + ire "to go") - the relation carries across the middle term.',
  oz: '源自拉丁语 transire“跨过去”（trans + ire 走）——关系跨过中间项传了过去。',
  se: 'Package dependencies are transitive, which is why lockfiles exist.',
  sz: '包依赖是可传递的，这正是 lockfile 存在的理由。'
},
{
  w: 'pruning', uk: '/ˈpruːnɪŋ/', us: '/ˈpruːnɪŋ/', pos: 'n.', cat: 'algo',
  en: 'Cutting off branches of a search tree that cannot contain a better answer.',
  zh: '剪枝：砍掉搜索树上不可能包含更优解的分支。',
  oe: 'From Old French proignier "to trim a tree". Gardeners cut back branches so the rest grows better; alpha-beta pruning does the same to a game tree.',
  oz: '源自古法语 proignier“修剪树木”。园丁剪掉枝条让其余长得更好，alpha-beta 剪枝对博弈树做的是同一件事。',
  se: 'Alpha-beta pruning cuts the effective branching factor roughly to its square root.',
  sz: 'Alpha-beta 剪枝大致能把有效分支因子降到原来的平方根。'
},
{
  w: 'cohesion', uk: '/kəʊˈhiːʒn/', us: '/koʊˈhiːʒn/', pos: 'n.', cat: 'sde',
  en: 'How tightly the responsibilities inside a single module belong together.',
  zh: '内聚：单个模块内部各项职责彼此相关的紧密程度。',
  oe: 'From Latin cohaerere "to stick together" (co- + haerere "to cling") - also behind adhere and, oddly, hesitate, which is to be stuck.',
  oz: '源自拉丁语 cohaerere“粘在一起”（co- + haerere 附着）——adhere 同源；有趣的是 hesitate（犹豫，即卡住了）也同源。',
  se: 'Aim for high cohesion and low coupling; the rest is detail.',
  sz: '追求高内聚、低耦合，其余都是细节。'
},
{
  w: 'coupling', uk: '/ˈkʌplɪŋ/', us: '/ˈkʌplɪŋ/', pos: 'n.', cat: 'sde',
  en: 'How much one module must know about another in order to work.',
  zh: '耦合：一个模块为了正常工作而必须了解另一个模块的程度。',
  oe: 'From Latin copula "a bond, a tie" (co- + apere "to fasten") - the same copula that grammarians use for a linking verb.',
  oz: '源自拉丁语 copula“纽带、连结”（co- + apere 系紧）——语法学家所说的系动词 copula 就是这个词。',
  se: 'Temporal coupling is the kind that bites you at three in the morning.',
  sz: '时序耦合是那种凌晨三点会咬你一口的耦合。'
},
{
  w: 'granularity', uk: '/ˌɡrænjuˈlærəti/', us: '/ˌɡrænjəˈlærəti/', pos: 'n.', cat: 'sde',
  en: 'The size of the units a system works in - coarse or fine.',
  zh: '粒度：系统所处理单元的大小，粗或细。',
  oe: 'From Latin granum "a grain, a seed" - also behind grain, granite and pomegranate. Fine-grained locking works on smaller seeds.',
  oz: '源自拉丁语 granum“谷粒、种子”——grain、granite、pomegranate（石榴，意为“多籽的苹果”）同源。细粒度锁就是作用在更小的“粒”上。',
  se: 'Choose the granularity of the lock before you choose the lock.',
  sz: '先决定锁的粒度，再决定用哪种锁。'
},
{
  w: 'idiomatic', uk: '/ˌɪdiəˈmætɪk/', us: '/ˌɪdiəˈmætɪk/', pos: 'adj.', cat: 'sde',
  en: 'Written the way experienced users of that language naturally write it.',
  zh: '地道的：按照该语言熟练使用者的自然写法来写。',
  oe: 'From Greek idioma "a peculiarity, one\'s own way", from idios "own, private" - the same idios behind idiot, which in Athens simply meant a private citizen who held no office.',
  oz: '源自希腊语 idioma“独特之处、自家的方式”，词根 idios“自己的、私人的”——idiot 同源，在雅典它原本只是指不担任公职的私人公民。',
  se: 'It compiles, but no Go programmer would call it idiomatic.',
  sz: '它能编译，但没有 Go 程序员会认为这写法地道。'
},
{
  w: 'instrumentation', uk: '/ˌɪnstrəmenˈteɪʃn/', us: '/ˌɪnstrəmenˈteɪʃn/', pos: 'n.', cat: 'sde',
  en: 'The code added to a system purely so that its behaviour can be measured.',
  zh: '埋点／插桩：纯粹为了能观测系统行为而加进去的代码。',
  oe: 'From Latin instruere "to build into, to equip" (in- + struere "to pile up") - the same struere behind structure and construct.',
  oz: '源自拉丁语 instruere“装配、配备”（in- + struere 堆砌）——structure、construct 同根。',
  se: 'Bad instrumentation costs more than no instrumentation.',
  sz: '糟糕的埋点比不埋点代价更大。'
},
{
  w: 'provenance', uk: '/ˈprɒvənəns/', us: '/ˈprɑːvənəns/', pos: 'n.', cat: 'sde',
  en: 'The recorded history of where an artifact came from and what produced it.',
  zh: '来源溯源：记录某个产物从哪来、由什么生成的完整历史。',
  oe: 'From Latin provenire "to come forth" (pro- + venire "to come"). Art dealers use the word for a painting\'s chain of ownership; supply-chain security borrowed it for builds.',
  oz: '源自拉丁语 provenire“出现、产生”（pro- + venire 来）。艺术品交易用它指画作的流传谱系，供应链安全把它借来用于构建产物。',
  se: 'Sign the build so its provenance can be verified later.',
  sz: '对构建产物签名，日后才能验证它的来源。'
},
{
  w: 'reentrant', uk: '/riːˈentrənt/', us: '/riːˈentrənt/', pos: 'adj.', cat: 'sde',
  en: 'Safe to be interrupted and called again before the first call has finished.',
  zh: '可重入的：在第一次调用尚未结束时被打断并再次调用，仍然安全。',
  oe: 'From re- "again" + Latin intrare "to enter" (intra "within"). The function can be entered a second time without corrupting the first visit.',
  oz: '由 re-（再）+ 拉丁语 intrare“进入”（intra 在内）构成。函数可以被第二次进入，而不破坏第一次的执行。',
  se: 'Signal handlers must call only reentrant functions.',
  sz: '信号处理函数里只能调用可重入的函数。'
},
{
  w: 'backpressure', uk: '/ˈbækpreʃə/', us: '/ˈbækpreʃər/', pos: 'n.', cat: 'sys',
  en: 'A signal sent upstream telling a producer to slow down because the consumer is behind.',
  zh: '背压：向上游发出的信号，告诉生产者放慢速度，因为消费者跟不上了。',
  oe: 'From hydraulics and engine exhaust, where pressure builds back against the flow. A queue that cannot drain pushes back the same way.',
  oz: '源自流体力学与发动机排气：压力沿着流动方向反向堆积。排不出去的队列也是这样把压力顶回去的。',
  se: 'Without backpressure the queue grows until the process is killed.',
  sz: '没有背压机制，队列就会一直涨到进程被杀掉为止。'
},
{
  w: 'contention', uk: '/kənˈtenʃn/', us: '/kənˈtenʃn/', pos: 'n.', cat: 'sys',
  en: 'Competition between threads or nodes for the same limited resource.',
  zh: '争用：多个线程或节点争抢同一份有限资源。',
  oe: 'From Latin contendere "to strive together, to stretch against" (com- + tendere "to stretch") - the same tendere as tensor and attention.',
  oz: '源自拉丁语 contendere“共同角力、相向拉扯”（com- + tendere 拉伸）——与 tensor、attention 同根。',
  se: 'Profiling showed the bottleneck was lock contention, not the algorithm.',
  sz: '性能剖析显示瓶颈是锁争用，而不是算法本身。'
},
{
  w: 'linearizability', uk: '/ˌlɪniəraɪzəˈbɪləti/', us: '/ˌlɪniərəzəˈbɪləti/', pos: 'n.', cat: 'sys',
  en: 'The guarantee that concurrent operations appear to take effect instantaneously, in a single consistent order.',
  zh: '线性一致性：并发操作看起来像是在某个瞬间、按同一个一致顺序依次生效。',
  oe: 'From Latin linea "a linen thread, a line" - flax thread was the original straight edge. Herlihy and Wing named the property in 1987.',
  oz: '源自拉丁语 linea“亚麻线、线”——亚麻线就是最早的直边工具。1987 年 Herlihy 与 Wing 为该性质命名。',
  se: 'Linearizability is a stronger promise than eventual consistency.',
  sz: '线性一致性是比最终一致性更强的承诺。'
},
{
  w: 'replication', uk: '/ˌreplɪˈkeɪʃn/', us: '/ˌreplɪˈkeɪʃn/', pos: 'n.', cat: 'sys',
  en: 'Keeping copies of the same data on several nodes for durability and read capacity.',
  zh: '复制：在多个节点上保存同一份数据，以获得持久性与读取能力。',
  oe: 'From Latin replicare "to fold back, to repeat" (re- + plicare "to fold") - the same plicare as deploy and complicated.',
  oz: '源自拉丁语 replicare“折回、重复”（re- + plicare 折叠）——与 deploy、complicated 同根。',
  se: 'Replication buys durability; it does not buy consistency.',
  sz: '复制带来的是持久性，而不是一致性。'
},
{
  w: 'saturation', uk: '/ˌsætʃəˈreɪʃn/', us: '/ˌsætʃəˈreɪʃn/', pos: 'n.', cat: 'sys',
  en: 'The point at which a resource is fully used and extra load only adds queueing.',
  zh: '饱和：资源已被完全占满，再加负载只会增加排队。',
  oe: 'From Latin satur "full, sated" - also behind satisfy, satiate and, by a different route, satire (a "full dish" of mixed fruits).',
  oz: '源自拉丁语 satur“饱的、满足的”——satisfy、satiate 同源；satire（讽刺，原指“什锦拼盘”）也从另一条线同源。',
  se: 'Watch saturation, not utilisation - a disk at 100% may still be fine.',
  sz: '要看饱和度而不是利用率——磁盘 100% 未必就有问题。'
},
{
  w: 'skew', uk: '/skjuː/', us: '/skjuː/', pos: 'n.', cat: 'sys',
  en: 'Uneven distribution: of load across shards, or of clocks across machines.',
  zh: '倾斜／偏差：负载在分片间分布不均，或机器之间时钟不同步。',
  oe: 'From Old North French eschiuer "to shun, avoid" - to move aside rather than straight ahead. Clock skew and data skew are both a leaning away from even.',
  oz: '源自古北法语 eschiuer“躲避、避开”——不直行而偏向一侧。时钟偏差与数据倾斜都是“偏离均匀”。',
  se: 'One hot key created enough skew to make the whole cluster look slow.',
  sz: '一个热点键造成的倾斜，就足以让整个集群看起来很慢。'
},
{
  w: 'straggler', uk: '/ˈstræɡlə/', us: '/ˈstræɡlər/', pos: 'n.', cat: 'sys',
  en: 'The one slow task that holds up a whole parallel job.',
  zh: '掉队任务：拖住整个并行作业的那个慢任务。',
  oe: 'From Middle English straglen "to wander from the group" - the soldier who falls behind the marching column.',
  oz: '源自中古英语 straglen“掉队游荡”——行军队列里落在后面的那个士兵。',
  se: 'Speculative execution exists mainly to hide stragglers.',
  sz: '推测执行的存在，主要就是为了掩盖掉队任务。'
},
{
  w: 'attenuation', uk: '/əˌtenjuˈeɪʃn/', us: '/əˌtenjuˈeɪʃn/', pos: 'n.', cat: 'net',
  en: 'The loss of signal strength as it travels along a medium.',
  zh: '衰减：信号沿传输介质前进时强度的损失。',
  oe: 'From Latin attenuare "to make thin" (ad- + tenuis "thin") - the same tenuis behind tenuous and thin itself.',
  oz: '源自拉丁语 attenuare“使变薄”（ad- + tenuis 细薄）——tenuous 与英语 thin 都同源。',
  se: 'Attenuation is why copper runs are capped at 100 metres.',
  sz: '正因为衰减，双绞线的布线长度被限制在 100 米以内。'
},
{
  w: 'egress', uk: '/ˈiːɡres/', us: '/ˈiːɡres/', pos: 'n.', cat: 'net',
  en: 'Traffic leaving a network or a cloud region - and the bill that comes with it.',
  zh: '出向流量：离开某个网络或云区域的流量，以及随之而来的账单。',
  oe: 'From Latin egredi "to go out" (e- "out" + gradi "to step") - the same gradi as gradient and regression. Its twin is ingress.',
  oz: '源自拉丁语 egredi“走出去”（e- 出 + gradi 迈步）——与 gradient、regression 同根。它的对偶词是 ingress。',
  se: 'The architecture was fine; the egress fees were not.',
  sz: '架构没问题，出网流量费才是问题。'
},
{
  w: 'fragmentation', uk: '/ˌfræɡmenˈteɪʃn/', us: '/ˌfræɡmenˈteɪʃn/', pos: 'n.', cat: 'net',
  en: 'Splitting a packet too large for a link into smaller pieces that must be reassembled.',
  zh: '分片：把超过链路上限的数据包切成小块，到达后再重组。',
  oe: 'From Latin frangere "to break" - the root of fracture, fragile, fraction and refract.',
  oz: '源自拉丁语 frangere“打碎”——fracture、fragile、fraction、refract 都由此而来。',
  se: 'Path MTU discovery exists to avoid fragmentation in the first place.',
  sz: '路径 MTU 发现机制的存在，就是为了从一开始避免分片。'
},
{
  w: 'peering', uk: '/ˈpɪərɪŋ/', us: '/ˈpɪrɪŋ/', pos: 'n.', cat: 'net',
  en: 'Two networks exchanging traffic directly, usually without either paying the other.',
  zh: '对等互联：两个网络直接交换流量，通常互不结算。',
  oe: 'From peer, via Old French per from Latin par "equal" - also behind par, parity and compare. Peering is an arrangement between equals; buying transit is not.',
  oz: '源自 peer，经古法语 per 来自拉丁语 par“对等”——par、parity、compare 同源。对等互联是平级之间的安排，购买中转则不是。',
  se: 'They moved from paid transit to settlement-free peering at the exchange.',
  sz: '他们在交换中心从付费中转转为了免结算对等互联。'
},
{
  w: 'propagation', uk: '/ˌprɒpəˈɡeɪʃn/', us: '/ˌprɑːpəˈɡeɪʃn/', pos: 'n.', cat: 'net',
  en: 'The spread of a change or a signal outward through a network, and the delay that spread takes.',
  zh: '传播：变更或信号在网络中向外扩散的过程，以及扩散所需的时间。',
  oe: 'From Latin propagare "to set slips, to breed from cuttings" (pro- + pangere "to fasten"). A gardener\'s word: the change is a cutting rooted in one place and spreading.',
  oz: '源自拉丁语 propagare“扦插繁殖”（pro- + pangere 固定）。这是个园艺词：变更就像一根插条，先在一处生根，再蔓延开去。',
  se: 'DNS propagation is really just TTLs expiring at different times.',
  sz: '所谓 DNS 传播，其实只是各处 TTL 在不同时刻到期而已。'
},
{
  w: 'spoofing', uk: '/ˈspuːfɪŋ/', us: '/ˈspuːfɪŋ/', pos: 'n.', cat: 'net',
  en: 'Forging the source of a packet, address or identity to impersonate someone else.',
  zh: '欺骗／伪造：伪造数据包来源、地址或身份，以冒充他人。',
  oe: 'From "Spoof", a hoaxing card game invented around 1884 by the British comedian Arthur Roberts. The word meant a hoax long before it meant a forged IP header.',
  oz: '源自 Spoof——1884 年前后英国喜剧演员 Arthur Roberts 发明的一种骗人纸牌游戏。它表示“骗局”远早于表示“伪造 IP 首部”。',
  se: 'Source-address spoofing is what makes reflection attacks possible.',
  sz: '正是源地址伪造，才使反射攻击成为可能。'
}
,

/* ==================== 学术与论文 · 学术动词 ==================== */
{
  w: 'corroborate', uk: '/kəˈrɒbəreɪt/', us: '/kəˈrɑːbəreɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To support a claim with independent evidence.',
  zh: '佐证：用独立的证据来支持某个论断。',
  oe: 'From Latin corroborare "to strengthen" (com- + robur "oak, hard timber") - the same robur behind robust. To corroborate is to give a claim the strength of oak.',
  oz: '源自拉丁语 corroborare“加强”（com- + robur 橡木、硬木）——与 robust 同根。佐证就是给论断加上橡木般的强度。',
  se: 'Two independent datasets corroborate the finding.',
  sz: '两份独立数据集佐证了这一发现。'
},
{
  w: 'delineate', uk: '/dɪˈlɪnieɪt/', us: '/dɪˈlɪnieɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To describe the boundaries of something precisely.',
  zh: '界定：精确地描述某事物的边界。',
  oe: 'From Latin delineare "to sketch out" (de- + linea "line") - literally to draw the outline before filling it in.',
  oz: '源自拉丁语 delineare“勾勒轮廓”（de- + linea 线条）——字面意思是先画外框再填内容。',
  se: 'Section 2 delineates the scope of the study.',
  sz: '第二节界定了本研究的范围。'
},
{
  w: 'elucidate', uk: '/iˈluːsɪdeɪt/', us: '/iˈluːsɪdeɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To make something clear by explaining it.',
  zh: '阐明：通过解释把某事说清楚。',
  oe: 'From Latin elucidare (e- "out" + lucidus "bright"), from lux "light" - to bring a thing out into the light.',
  oz: '源自拉丁语 elucidare（e- 出 + lucidus 明亮），词根 lux“光”——把事物带到光亮之中。',
  se: 'The ablation experiments elucidate why the model works.',
  sz: '消融实验阐明了模型有效的原因。'
},
{
  w: 'posit', uk: '/ˈpɒzɪt/', us: '/ˈpɑːzɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To put forward as a basis for argument, without yet proving it.',
  zh: '假定／提出：先摆出某个前提作为论证基础，暂不加以证明。',
  oe: 'From Latin ponere, past participle positus, "to place, to put" - the same root as position, deposit and compose.',
  oz: '源自拉丁语 ponere（过去分词 positus）“放置”——position、deposit、compose 同根。',
  se: 'We posit that the gain comes from data diversity.',
  sz: '我们假定这一提升来自数据的多样性。'
},
{
  w: 'substantiate', uk: '/səbˈstænʃieɪt/', us: '/səbˈstænʃieɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To back a claim up with enough evidence to make it stand.',
  zh: '证实：拿出足够证据让某个论断站得住。',
  oe: 'From Latin substantia "substance", literally "that which stands under" (sub- + stare "to stand"). To substantiate is to put something solid underneath.',
  oz: '源自拉丁语 substantia“实体”，字面为“立于其下之物”（sub- + stare 站立）。证实就是在底下垫上实在的东西。',
  se: 'The claim is interesting but not yet substantiated.',
  sz: '这个论断很有意思，但尚未得到证实。'
},
{
  w: 'extrapolate', uk: '/ɪkˈstræpəleɪt/', us: '/ɪkˈstræpəleɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To extend a trend beyond the range of the observed data.',
  zh: '外推：把某个趋势延伸到已观测数据范围之外。',
  oe: 'Coined in the 1870s from Latin extra "outside" plus the ending of interpolate - reading beyond the table instead of between its rows.',
  oz: '1870 年代造词，取拉丁语 extra（之外）加上 interpolate 的词尾——在表格之外读数，而不是在行与行之间读数。',
  se: 'Do not extrapolate a scaling law three orders of magnitude past your data.',
  sz: '不要把缩放定律外推到数据之外三个数量级。'
},
{
  w: 'mitigate', uk: '/ˈmɪtɪɡeɪt/', us: '/ˈmɪtɪɡeɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To make something bad less severe, without removing it entirely.',
  zh: '缓解：减轻某种不利影响，但并未彻底消除。',
  oe: 'From Latin mitigare "to soften, to make mild" (mitis "mild" + agere "to drive"). Note it is not militate, which means to weigh against.',
  oz: '源自拉丁语 mitigare“使温和”（mitis 温和 + agere 驱使）。注意它不是 militate（起反作用）。',
  se: 'Dropout mitigates but does not eliminate overfitting.',
  sz: 'Dropout 能缓解过拟合，但无法消除它。'
},
{
  w: 'preclude', uk: '/prɪˈkluːd/', us: '/prɪˈkluːd/', pos: 'v.', cat: 'acad-verb',
  en: 'To make something impossible in advance.',
  zh: '排除／使不可能：事先就堵死某种可能。',
  oe: 'From Latin praecludere "to close off beforehand" (prae- "before" + claudere "to shut") - the same claudere behind close, conclude and exclude.',
  oz: '源自拉丁语 praecludere“事先关闭”（prae- 之前 + claudere 关）——close、conclude、exclude 同根。',
  se: 'A small sample does not preclude a strong effect.',
  sz: '样本量小并不排除存在强效应的可能。'
},
{
  w: 'underpin', uk: '/ˌʌndəˈpɪn/', us: '/ˌʌndərˈpɪn/', pos: 'v.', cat: 'acad-verb',
  en: 'To provide the foundation that something else rests on.',
  zh: '支撑：为其他结论提供赖以成立的基础。',
  oe: 'A builder\'s term: to insert supports beneath an existing wall so it does not settle. The metaphor kept the picture exactly.',
  oz: '建筑术语：在既有墙体下方加设支撑，防止沉降。这个比喻完整保留了原本的画面。',
  se: 'Three assumptions underpin the whole argument.',
  sz: '整个论证由三条假设支撑。'
},
{
  w: 'contravene', uk: '/ˌkɒntrəˈviːn/', us: '/ˌkɑːntrəˈviːn/', pos: 'v.', cat: 'acad-verb',
  en: 'To conflict with a rule, a law or an established finding.',
  zh: '违背：与某条规则、法律或既有结论相抵触。',
  oe: 'From Latin contravenire "to come against" (contra + venire "to come") - the same venire as convene, intervene and provenance.',
  oz: '源自拉丁语 contravenire“迎面而来”（contra 相对 + venire 来）——convene、intervene、provenance 同根。',
  se: 'The result appears to contravene the standard model.',
  sz: '这一结果似乎与标准模型相违背。'
},
{
  w: 'reconcile', uk: '/ˈrekənsaɪl/', us: '/ˈrekənsaɪl/', pos: 'v.', cat: 'acad-verb',
  en: 'To show how two apparently conflicting findings can both be true.',
  zh: '调和：说明两项看似矛盾的发现如何能同时成立。',
  oe: 'From Latin reconciliare "to bring together again" (re- + conciliare "to unite", from concilium "a council") - people summoned back into the same room.',
  oz: '源自拉丁语 reconciliare“重新聚拢”（re- + conciliare 联合，词根 concilium 会议）——把人重新召回同一个房间。',
  se: 'The paper reconciles the two conflicting benchmarks.',
  sz: '这篇论文调和了两个相互冲突的基准结果。'
},
{
  w: 'disaggregate', uk: '/dɪsˈæɡrɪɡeɪt/', us: '/dɪsˈæɡrɪɡeɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To break a total down into its component groups.',
  zh: '拆分：把一个总量分解成各个组成部分。',
  oe: 'From Latin grex, gregis "a flock" - to aggregate is to herd together, so to disaggregate is to let the flock scatter again. Also behind gregarious and egregious.',
  oz: '源自拉丁语 grex/gregis“羊群”——aggregate 是把羊赶到一起，disaggregate 就是让羊群重新散开。gregarious、egregious 同源。',
  se: 'Disaggregate the results by language before claiming parity.',
  sz: '在声称效果持平之前，先按语种把结果拆开看。'
},
{
  w: 'obviate', uk: '/ˈɒbvieɪt/', us: '/ˈɑːbvieɪt/', pos: 'v.', cat: 'acad-verb',
  en: 'To remove the need for something by anticipating it.',
  zh: '免除：通过预先处理，让某件事变得不再必要。',
  oe: 'From Latin obviare "to meet in the way" (ob- "against" + via "road") - to go out and meet a difficulty on the road, so it never arrives. Obvious shares the same road.',
  oz: '源自拉丁语 obviare“在路上迎面挡住”（ob- 相对 + via 道路）——迎上去把麻烦挡在路上，它便到不了。obvious 走的也是这条 via。',
  se: 'Caching obviates the need for a second round trip.',
  sz: '有了缓存，就免去了第二次往返请求。'
},
{
  w: 'supersede', uk: '/ˌsuːpəˈsiːd/', us: '/ˌsuːpərˈsiːd/', pos: 'v.', cat: 'acad-verb',
  en: 'To take the place of something older, which is thereby retired.',
  zh: '取代：替换掉更早的版本，后者随之退场。',
  oe: 'From Latin supersedere "to sit above, to refrain from" (super + sedere "to sit"). Note the spelling: -sede, not -cede, because it is sedere "to sit", not cedere "to go".',
  oz: '源自拉丁语 supersedere“高居其上、不再进行”（super 之上 + sedere 坐）。注意拼写是 -sede 而非 -cede，因为词根是 sedere（坐）而不是 cedere（走）。',
  se: 'RFC 8446 supersedes the TLS 1.2 specification.',
  sz: 'RFC 8446 取代了 TLS 1.2 的规范。'
},
{
  w: 'scrutinize', uk: '/ˈskruːtɪnaɪz/', us: '/ˈskruːtənaɪz/', pos: 'v.', cat: 'acad-verb',
  en: 'To examine something closely and critically.',
  zh: '细察：对某事物做仔细而挑剔的检查。',
  oe: 'From Latin scrutari "to search, to examine", originally "to sort through rags", from scruta "trash, old rags" - the rag-picker\'s thoroughness.',
  oz: '源自拉丁语 scrutari“搜查、细看”，本义是“翻拣破布”，词根 scruta“破烂、旧布”——拾荒者式的细致。',
  se: 'Reviewers scrutinized the evaluation protocol, not the model.',
  sz: '审稿人细察的是评测方案，而不是模型本身。'
},

/* ==================== 学术与论文 · 论证与评价 ==================== */
{
  w: 'empirical', uk: '/ɪmˈpɪrɪkl/', us: '/ɪmˈpɪrɪkl/', pos: 'adj.', cat: 'acad-eval',
  en: 'Based on observation or experiment rather than on theory alone.',
  zh: '实证的：基于观察或实验，而不仅仅基于理论。',
  oe: 'From Greek empeirikos "experienced", from en- "in" + peira "a trial, an attempt" - the same peira behind experiment, expert and peril. The Empirics were an ancient school of physicians who trusted observation over doctrine.',
  oz: '源自希腊语 empeirikos“有经验的”，来自 en-（在内）+ peira（尝试、试验）——experiment、expert、peril 同根。古代“经验派”医生正是信观察而不信教条。',
  se: 'The claim is theoretically appealing but empirically weak.',
  sz: '这个说法在理论上很动人，实证上却很弱。'
},
{
  w: 'orthogonal', uk: '/ɔːˈθɒɡənl/', us: '/ɔːrˈθɑːɡənl/', pos: 'adj.', cat: 'acad-eval',
  en: 'Independent; varying one has no effect on the other.',
  zh: '正交的／互不相干的：改变其中一个不会影响另一个。',
  oe: 'Greek orthos "straight, right" + gonia "angle" - at right angles. Engineers stretched the geometric sense into "unrelated", which is now the commoner use in a design discussion.',
  oz: '希腊语 orthos（直、正）+ gonia（角）——成直角。工程师把这个几何义引申为“互不相干”，如今在设计讨论中反而更常用。',
  se: 'Those two concerns are orthogonal; solve them separately.',
  sz: '这两个问题是正交的，分开解决就好。'
},
{
  w: 'parsimonious', uk: '/ˌpɑːsɪˈməʊniəs/', us: '/ˌpɑːrsɪˈmoʊniəs/', pos: 'adj.', cat: 'acad-eval',
  en: 'Explaining as much as possible with as few assumptions as possible.',
  zh: '简约的：用尽可能少的假设解释尽可能多的现象。',
  oe: 'From Latin parsimonia "thrift", from parcere "to spare". In science the word carries no stinginess - the law of parsimony is Occam\'s razor.',
  oz: '源自拉丁语 parsimonia“节俭”，词根 parcere“节省”。在科学语境中它并无吝啬之意——简约律即奥卡姆剃刀。',
  se: 'Prefer the more parsimonious explanation when both fit.',
  sz: '两种解释都说得通时，取更简约的那个。'
},
{
  w: 'seminal', uk: '/ˈsemɪnl/', us: '/ˈsemɪnl/', pos: 'adj.', cat: 'acad-eval',
  en: 'Describing early work from which a whole line of later research grew.',
  zh: '开创性的：指后来一整条研究脉络由之生发的早期工作。',
  oe: 'From Latin semen "seed" - a seminal paper is one that seeds a field. Same root as seminar, disseminate and semester\'s cousin seminary.',
  oz: '源自拉丁语 semen“种子”——开创性论文即为一个领域播下种子。seminar、disseminate、seminary 同源。',
  se: 'The 2017 attention paper is by now genuinely seminal.',
  sz: '2017 年那篇注意力论文如今确实称得上开创性。'
},
{
  w: 'spurious', uk: '/ˈspjʊəriəs/', us: '/ˈspjʊriəs/', pos: 'adj.', cat: 'acad-eval',
  en: 'Looking real but produced by an artefact of the data rather than by the effect studied.',
  zh: '虚假的：看起来真实，实则由数据的假象而非所研究的效应产生。',
  oe: 'From Latin spurius "illegitimate, of uncertain father". A spurious correlation is one with no legitimate parent.',
  oz: '源自拉丁语 spurius“私生的、父不详的”。虚假相关就是没有正当来源的相关。',
  se: 'The classifier learned a spurious correlation with image background.',
  sz: '这个分类器学到的是与图像背景之间的虚假相关。'
},
{
  w: 'tenuous', uk: '/ˈtenjuəs/', us: '/ˈtenjuəs/', pos: 'adj.', cat: 'acad-eval',
  en: 'Weak, thin, resting on very little support.',
  zh: '站不住脚的：薄弱、缺乏支撑。',
  oe: 'From Latin tenuis "thin, slender" - the same root as attenuation and, through Germanic, English thin itself.',
  oz: '源自拉丁语 tenuis“细薄”——与 attenuation 同根，经日耳曼语支也与英语 thin 同源。',
  se: 'The link between the two datasets is tenuous at best.',
  sz: '这两份数据集之间的关联充其量也很牵强。'
},
{
  w: 'cogent', uk: '/ˈkəʊdʒənt/', us: '/ˈkoʊdʒənt/', pos: 'adj.', cat: 'acad-eval',
  en: 'Clear and forceful enough to compel agreement.',
  zh: '有说服力的：清晰有力，令人不得不同意。',
  oe: 'From Latin cogere "to drive together, to compel" (co- + agere "to drive") - the same cogere behind cogitate. A cogent argument herds you to its conclusion.',
  oz: '源自拉丁语 cogere“驱赶到一起、迫使”（co- + agere 驱动）——cogitate 同根。有说服力的论证会把你“赶”向它的结论。',
  se: 'She gave the most cogent objection in the whole review.',
  sz: '整场评审中最有说服力的反对意见来自她。'
},
{
  w: 'germane', uk: '/dʒɜːˈmeɪn/', us: '/dʒɜːrˈmeɪn/', pos: 'adj.', cat: 'acad-eval',
  en: 'Genuinely relevant to the matter at hand.',
  zh: '切题的：与当下讨论的问题确实相关。',
  oe: 'A variant of german "closely related by blood" (Latin germanus "of the same parents"). Hamlet\'s line "the phrase would be more german to the matter" fixed the figurative sense in English.',
  oz: '是 german“有血缘近亲的”的变体（拉丁语 germanus“同父母的”）。《哈姆雷特》中那句“the phrase would be more german to the matter”定下了这一比喻义。',
  se: 'That objection is interesting but not germane to the claim.',
  sz: '这个反驳很有意思，但与本文的论断并不切题。'
},
{
  w: 'canonical', uk: '/kəˈnɒnɪkl/', us: '/kəˈnɑːnɪkl/', pos: 'adj.', cat: 'acad-eval',
  en: 'The standard, authoritative form that others are compared against.',
  zh: '标准的／权威的：作为比较基准的那个规范形式。',
  oe: 'From Greek kanon "a measuring rod, a rule", originally kanna "a reed" - the straight reed used as a ruler. The biblical canon is the list measured as authoritative.',
  oz: '源自希腊语 kanon“量尺、准则”，本义 kanna“芦苇”——用作直尺的那根笔直苇秆。《圣经》正典即被衡量为权威的书目。',
  se: 'Always compare against the canonical implementation, not your rewrite.',
  sz: '永远和权威实现做对比，而不是和你自己重写的版本比。'
},
{
  w: 'nascent', uk: '/ˈnæsnt/', us: '/ˈnæsnt/', pos: 'adj.', cat: 'acad-eval',
  en: 'Just coming into existence and not yet fully formed.',
  zh: '新兴的：刚刚出现、尚未成形。',
  oe: 'From Latin nasci "to be born" - the same root as nature, native, innate and renaissance.',
  oz: '源自拉丁语 nasci“出生”——nature、native、innate、renaissance 同根。',
  se: 'The field was nascent when the first benchmark appeared.',
  sz: '第一个基准出现时，这个领域尚属新兴。'
},
{
  w: 'ostensible', uk: '/ɒˈstensəbl/', us: '/ɑːˈstensəbl/', pos: 'adj.', cat: 'acad-eval',
  en: 'Stated as the reason, though possibly not the real one.',
  zh: '表面上的：被声称为理由，但未必是真正的理由。',
  oe: 'From Latin ostendere "to show, to display" (obs- "towards" + tendere "to stretch") - the same tendere as attention. What is stretched out for show may not be what is inside.',
  oz: '源自拉丁语 ostendere“展示”（obs- 朝向 + tendere 伸展）——与 attention 同根。摆出来给人看的，未必就是里头的东西。',
  se: 'The ostensible reason was latency; the real one was cost.',
  sz: '表面上的理由是延迟，真正的理由是成本。'
},
{
  w: 'extant', uk: '/ekˈstænt/', us: '/ˈekstənt/', pos: 'adj.', cat: 'acad-eval',
  en: 'Still in existence; surviving.',
  zh: '现存的：至今仍然存在的。',
  oe: 'From Latin exstare "to stand out, to exist" (ex- + stare "to stand"). Its opposite is extinct, not "unextant".',
  oz: '源自拉丁语 exstare“突出、存在”（ex- + stare 站立）。它的反义词是 extinct（灭绝的），而不是什么 unextant。',
  se: 'None of the extant benchmarks measure that property.',
  sz: '现存的基准没有一个测量这一性质。'
},
{
  w: 'plausible', uk: '/ˈplɔːzəbl/', us: '/ˈplɔːzəbl/', pos: 'adj.', cat: 'acad-eval',
  en: 'Believable on the face of it, whether or not it is true.',
  zh: '看似合理的：表面上说得通，未必为真。',
  oe: 'From Latin plausibilis "deserving applause", from plaudere "to clap" - also behind applaud and explode, which once meant to drive an actor off stage by clapping. A plausible claim is one the audience would clap for.',
  oz: '源自拉丁语 plausibilis“值得鼓掌的”，词根 plaudere“拍手”——applaud 同源；explode 也同源，本义是“用掌声把演员轰下台”。看似合理的说法，就是观众愿意为之鼓掌的说法。',
  se: 'Fluent output makes a wrong answer sound plausible.',
  sz: '流畅的输出会让错误答案听起来很合理。'
},
{
  w: 'rigorous', uk: '/ˈrɪɡərəs/', us: '/ˈrɪɡərəs/', pos: 'adj.', cat: 'acad-eval',
  en: 'Carried out with strict, unforgiving care for correctness.',
  zh: '严谨的：以严格、不容含糊的方式确保正确性。',
  oe: 'From Latin rigor "stiffness, numbness" - the same rigor as in rigor mortis. A rigorous proof does not bend.',
  oz: '源自拉丁语 rigor“僵硬、麻木”——rigor mortis（尸僵）中的正是此词。严谨的证明是不弯折的。',
  se: 'The evaluation is thorough but not rigorous.',
  sz: '这套评测很全面，但称不上严谨。'
},
{
  w: 'anecdotal', uk: '/ˌænɪkˈdəʊtl/', us: '/ˌænɪkˈdoʊtl/', pos: 'adj.', cat: 'acad-eval',
  en: 'Based on individual reports rather than systematic evidence.',
  zh: '轶事性的：基于零散个例而非系统证据。',
  oe: 'From Greek anekdota "things unpublished" (an- "not" + ekdotos "given out"). The word comes from the title Procopius gave his unpublished gossip about the court of Justinian.',
  oz: '源自希腊语 anekdota“未发表之事”（an- 未 + ekdotos 发布）。此词来自普罗柯比给自己那部关于查士丁尼宫廷的秘闻手稿所取的书名。',
  se: 'Three happy users is anecdotal, not an evaluation.',
  sz: '三个满意用户属于轶事，不构成评测。'
},

/* ==================== 学术与论文 · 方法与结构 ==================== */
{
  w: 'caveat', uk: '/ˈkæviæt/', us: '/ˈkæviæt/', pos: 'n.', cat: 'acad-meth',
  en: 'A stated limitation that qualifies a conclusion.',
  zh: '注意事项／限制说明：对结论加以限定的说明。',
  oe: 'Latin for "let him beware", the subjunctive of cavere "to take heed" - as in caveat emptor, "let the buyer beware". A whole warning compressed into one verb.',
  oz: '拉丁语意为“让他当心”，是 cavere（当心）的虚拟式——如 caveat emptor“买者自慎”。一整句警告被压缩成一个动词。',
  se: 'The result holds, with one important caveat about the test split.',
  sz: '这个结果成立，但关于测试集划分有一条重要的限制说明。'
},
{
  w: 'rationale', uk: '/ˌræʃəˈnɑːl/', us: '/ˌræʃəˈnæl/', pos: 'n.', cat: 'acad-meth',
  en: 'The stated reasoning behind a choice or a design.',
  zh: '理据：某个选择或设计背后所陈述的理由。',
  oe: 'From Latin rationalis, from ratio "a reckoning, a calculation, a reason" - originally an accountant\'s word, from reri "to reckon".',
  oz: '源自拉丁语 rationalis，词根 ratio“计算、账目、理由”——本是会计用词，动词 reri“计算”。',
  se: 'Write the rationale down; in six months nobody will remember it.',
  sz: '把设计理据写下来，半年后没人记得住。'
},
{
  w: 'methodology', uk: '/ˌmeθəˈdɒlədʒi/', us: '/ˌmeθəˈdɑːlədʒi/', pos: 'n.', cat: 'acad-meth',
  en: 'The system of methods used in a study, and the reasoning for choosing them.',
  zh: '方法论：研究所采用的方法体系，以及选择这些方法的依据。',
  oe: 'Greek methodos "a pursuit of knowledge" (meta "after" + hodos "a way") + logia "study of" - literally the study of ways of following after knowledge.',
  oz: '希腊语 methodos“求知之途”（meta 随后 + hodos 道路）+ logia（学问）——字面即“研究求知之路的学问”。',
  se: 'The methodology section should let someone else rerun you.',
  sz: '方法论一节应当让别人能把你的实验重跑一遍。'
},
{
  w: 'criterion', uk: '/kraɪˈtɪəriən/', us: '/kraɪˈtɪriən/', pos: 'n.', cat: 'acad-meth',
  en: 'A standard by which something is judged. Plural: criteria.',
  zh: '标准：判断事物的依据。复数为 criteria。',
  oe: 'From Greek kriterion "a means of judging", from krinein "to separate, to decide" - the same krinein behind crisis, critic and discriminate.',
  oz: '源自希腊语 kriterion“判断的工具”，词根 krinein“分辨、裁定”——crisis、critic、discriminate 同根。',
  se: 'State the stopping criterion before you look at the curve.',
  sz: '在看曲线之前先把停止标准定下来。'
},
{
  w: 'confound', uk: '/kənˈfaʊnd/', us: '/kənˈfaʊnd/', pos: 'v./n.', cat: 'acad-meth',
  en: 'A hidden variable that moves with both cause and effect, muddying the conclusion.',
  zh: '混杂因素：与因和果同时相关的隐藏变量，会搅浑结论。',
  oe: 'From Latin confundere "to pour together, to mix up" (com- + fundere "to pour") - the same fundere behind fuse and refund. A confounder literally pours two causes into one.',
  oz: '源自拉丁语 confundere“倒在一起、混淆”（com- + fundere 倾倒）——fuse、refund 同根。混杂因素字面上就是把两个原因倒进了同一个杯子。',
  se: 'Model size and data size are confounded in that comparison.',
  sz: '在那组对比中，模型规模与数据规模是相互混杂的。'
},
{
  w: 'taxonomy', uk: '/tækˈsɒnəmi/', us: '/tækˈsɑːnəmi/', pos: 'n.', cat: 'acad-meth',
  en: 'A structured scheme of classification.',
  zh: '分类体系：有结构的分类方案。',
  oe: 'Greek taxis "arrangement, order" + nomia "distribution, law" - the same taxis behind tactics and syntax.',
  oz: '希腊语 taxis（排列、秩序）+ nomia（分配、法则）——tactics、syntax 中的 taxis 同根。',
  se: 'A taxonomy of failures is worth more than a list of them.',
  sz: '一套故障分类体系，比一张故障清单有价值得多。'
},
{
  w: 'paradigm', uk: '/ˈpærədaɪm/', us: '/ˈpærədaɪm/', pos: 'n.', cat: 'acad-meth',
  en: 'The set of assumptions and practices a research community currently works inside.',
  zh: '范式：某个研究共同体当下共同接受的假设与实践框架。',
  oe: 'From Greek paradeigma "a pattern, an example" (para "beside" + deiknynai "to show"). Thomas Kuhn gave it its modern weight in 1962 with the phrase "paradigm shift".',
  oz: '源自希腊语 paradeigma“范例、样板”（para 旁边 + deiknynai 展示）。1962 年托马斯·库恩以“范式转移”一语赋予它现代分量。',
  se: 'Pretraining then fine-tuning became the dominant paradigm.',
  sz: '先预训练再微调成为了主导范式。'
},
{
  w: 'citation', uk: '/saɪˈteɪʃn/', us: '/saɪˈteɪʃn/', pos: 'n.', cat: 'acad-meth',
  en: 'A formal reference to the source of a claim.',
  zh: '引用：对某个论断出处的正式标注。',
  oe: 'From Latin citare "to summon, to call forth", a frequentative of ciere "to set in motion" - the same root as excite and incite. A citation summons a witness.',
  oz: '源自拉丁语 citare“传唤、召来”，是 ciere（使运动）的反复态——excite、incite 同根。引用就是传唤一位证人。',
  se: 'A citation is not an argument; read the paper you cite.',
  sz: '引用不等于论证——请读一读你引用的那篇论文。'
},
{
  w: 'reproducibility', uk: '/ˌriːprəˌdjuːsəˈbɪləti/', us: '/ˌriːprəˌduːsəˈbɪləti/', pos: 'n.', cat: 'acad-meth',
  en: 'Whether an independent team can obtain the same result from the same description.',
  zh: '可复现性：独立团队能否依据同样的描述得到同样的结果。',
  oe: 'From Latin producere "to lead forth" (pro- + ducere "to lead") - the same ducere as conduct, deduce and educate.',
  oz: '源自拉丁语 producere“引出”（pro- + ducere 引导）——conduct、deduce、educate 同根。',
  se: 'Release the seeds and the config, or reproducibility is a slogan.',
  sz: '把随机种子和配置一并发布，否则可复现性只是个口号。'
},
{
  w: 'longitudinal', uk: '/ˌlɒŋɡɪˈtjuːdɪnl/', us: '/ˌlɑːndʒəˈtuːdɪnl/', pos: 'adj.', cat: 'acad-meth',
  en: 'Following the same subjects repeatedly over a long period.',
  zh: '纵向的：对同一批对象长期反复追踪观察。',
  oe: 'From Latin longitudo "length" (longus "long"). A longitudinal study runs along time; a cross-sectional one cuts across it.',
  oz: '源自拉丁语 longitudo“长度”（longus 长）。纵向研究沿时间延伸，横断研究则横切时间。',
  se: 'Only a longitudinal study can separate ageing from cohort effects.',
  sz: '只有纵向研究才能把年龄效应与世代效应分开。'
},
{
  w: 'cohort', uk: '/ˈkəʊhɔːt/', us: '/ˈkoʊhɔːrt/', pos: 'n.', cat: 'acad-meth',
  en: 'A group sharing a defining characteristic, followed together through an analysis.',
  zh: '队列／群组：具有共同特征、被一同追踪分析的一批对象。',
  oe: 'From Latin cohors "an enclosure, a farmyard, then a company of soldiers" - one tenth of a Roman legion. The same cohors gives us court and courtyard.',
  oz: '源自拉丁语 cohors“围栏、庭院，进而指一队士兵”——罗马军团的十分之一。court、courtyard 同源。',
  se: 'Retention is only meaningful when read cohort by cohort.',
  sz: '留存率只有按群组分开来看才有意义。'
},
{
  w: 'baseline', uk: '/ˈbeɪslaɪn/', us: '/ˈbeɪslaɪn/', pos: 'n.', cat: 'acad-meth',
  en: 'The reference result that any new method must beat to be interesting.',
  zh: '基线：新方法必须超越、否则便无意义的参照结果。',
  oe: 'From surveying, where a baseline is the first accurately measured line from which every other distance is triangulated.',
  oz: '源自测量学：基线是第一条精确丈量的线，其余所有距离都由它三角推算而来。',
  se: 'A strong baseline is the cheapest way to kill a weak idea.',
  sz: '一个强基线是杀死弱想法最省钱的办法。'
},
{
  w: 'synthesis', uk: '/ˈsɪnθəsɪs/', us: '/ˈsɪnθəsɪs/', pos: 'n.', cat: 'acad-meth',
  en: 'Combining separate findings into one coherent account.',
  zh: '综合：把分散的发现整合成一个自洽的整体解释。',
  oe: 'Greek syntithenai "to put together" (syn + tithenai "to place") - the same tithenai behind thesis and hypothesis.',
  oz: '希腊语 syntithenai“放到一起”（syn + tithenai 放置）——thesis、hypothesis 同根。',
  se: 'The last section is a synthesis, not a summary.',
  sz: '最后一节是综合，而不是简单的总结。'
},
{
  w: 'significance', uk: '/sɪɡˈnɪfɪkəns/', us: '/sɪɡˈnɪfɪkəns/', pos: 'n.', cat: 'acad-meth',
  en: 'In statistics, how unlikely the observed result would be if nothing were going on.',
  zh: '显著性：在统计上，若实际并无效应，观测到该结果的可能性有多低。',
  oe: 'From Latin significare "to make a sign" (signum "sign" + facere "to make"). Beware: statistical significance and practical importance are different things.',
  oz: '源自拉丁语 significare“做出标记”（signum 符号 + facere 制造）。注意：统计显著与实际重要并不是一回事。',
  se: 'Significance is not effect size, and neither is importance.',
  sz: '显著性不等于效应量，也不等于重要性。'
},
{
  w: 'verbatim', uk: '/vɜːˈbeɪtɪm/', us: '/vɜːrˈbeɪtɪm/', pos: 'adv./adj.', cat: 'acad-meth',
  en: 'Word for word, exactly as originally written or said.',
  zh: '逐字地：与原文或原话一字不差。',
  oe: 'Latin verbatim "word for word", from verbum "word" - the same verbum behind verb, verbal and proverb.',
  oz: '拉丁语 verbatim“逐字”，词根 verbum“词”——verb、verbal、proverb 同源。',
  se: 'Quote the error verbatim; paraphrasing loses the clue.',
  sz: '把报错原文照抄下来，转述会丢掉线索。'
}
,

/* ==================== 职场与商务 · 沟通与协作 ==================== */
{
  w: 'align', uk: '/əˈlaɪn/', us: '/əˈlaɪn/', pos: 'v.', cat: 'work-comm',
  en: 'To bring people or plans into agreement on direction.',
  zh: '对齐／达成一致：让人或计划在方向上取得共识。',
  oe: 'From French aligner, from Latin ad "to" + linea "line" - literally to bring into line. The corporate sense keeps the military picture of a straightened rank.',
  oz: '源自法语 aligner，来自拉丁语 ad（向）+ linea（线）——字面就是“排成一条线”。职场用法保留了队列列齐的军事意象。',
  se: 'Let us align on the metric before we argue about the model.',
  sz: '在争论模型之前，先把评价指标对齐。'
},
{
  w: 'escalate', uk: '/ˈeskəleɪt/', us: '/ˈeskəleɪt/', pos: 'v.', cat: 'work-comm',
  en: 'To raise an issue to a level with more authority, or to let a conflict intensify.',
  zh: '升级上报：把问题提交给更有权限的层级；也指让冲突加剧。',
  oe: 'A 1920s back-formation from escalator, itself from escalade "the scaling of walls with ladders" (Latin scala "ladder") - the same scala as scalability.',
  oz: '1920 年代由 escalator（自动扶梯）逆构而成，而 escalator 来自 escalade“搭梯攻城”（拉丁语 scala 梯子）——与 scalability 同根。',
  se: 'Escalate early; a silent blocker is the expensive kind.',
  sz: '要尽早上报——闷着不说的阻塞才是代价最高的。'
},
{
  w: 'delegate', uk: '/ˈdelɪɡeɪt/', us: '/ˈdelɪɡeɪt/', pos: 'v.', cat: 'work-comm',
  en: 'To hand a task, together with the authority to decide, to someone else.',
  zh: '委派：把任务连同决策权一并交给他人。',
  oe: 'From Latin delegare "to send as a representative" (de- + legare "to depute, to bequeath") - the same legare behind legacy and legate.',
  oz: '源自拉丁语 delegare“派为代表”（de- + legare 委任、遗赠）——与 legacy、legate 同根。',
  se: 'Delegating the task without the authority is just assigning blame.',
  sz: '只委派任务而不给决策权，那不过是在分派责任。'
},
{
  w: 'articulate', uk: '/ɑːˈtɪkjuleɪt/', us: '/ɑːrˈtɪkjuleɪt/', pos: 'v./adj.', cat: 'work-comm',
  en: 'To express an idea clearly and in well-separated parts.',
  zh: '清晰表达：把想法分成清楚的部分讲明白。',
  oe: 'From Latin articulare "to divide into joints", from articulus "a small joint" (a diminutive of artus "limb"). To articulate is to give speech joints so it can bend clearly.',
  oz: '源自拉丁语 articulare“分节”，词根 articulus“小关节”（artus 肢体的指小形式）。清晰表达就是给话语装上关节，让它能分明地弯折。',
  se: 'If you cannot articulate the tradeoff, you have not found it yet.',
  sz: '如果你说不清这个权衡，说明你还没真正想明白。'
},
{
  w: 'defer', uk: '/dɪˈfɜː/', us: '/dɪˈfɜːr/', pos: 'v.', cat: 'work-comm',
  en: 'To postpone; or, with "to", to yield to another person\'s judgement.',
  zh: '推迟；后接 to 时表示“听从、尊重他人的判断”。',
  oe: 'Two Latin verbs collapsed into one English word: differre "to postpone, to carry apart" gives the delay sense, and deferre "to carry down, to submit" gives the yielding sense.',
  oz: '两个拉丁动词合并成了同一个英语词：differre“推迟、分开搬运”给出“延后”义，deferre“向下呈交、服从”给出“听从”义。',
  se: 'I defer to the on-call engineer on rollback decisions.',
  sz: '回滚的决定我听值班工程师的。'
},
{
  w: 'advocate', uk: '/ˈædvəkeɪt/', us: '/ˈædvəkeɪt/', pos: 'v.', cat: 'work-comm',
  en: 'To argue publicly in favour of a position or a person.',
  zh: '倡导／为……发声：公开为某个主张或某个人辩护。',
  oe: 'From Latin advocatus "one called in to help", from ad- + vocare "to call" - originally the friend you called to stand beside you in court.',
  oz: '源自拉丁语 advocatus“被召来相助之人”（ad- + vocare 呼唤）——最初指你在法庭上叫来站在身旁的那位朋友。',
  se: 'Someone has to advocate for the users who never file tickets.',
  sz: '总得有人为那些从不提工单的用户说话。'
},
{
  w: 'mediate', uk: '/ˈmiːdieɪt/', us: '/ˈmiːdieɪt/', pos: 'v.', cat: 'work-comm',
  en: 'To act between two sides in order to reach agreement.',
  zh: '调解：介于双方之间促成一致。',
  oe: 'From Latin medius "middle" - the same medius behind medium, median, mediocre and Mediterranean, the sea in the middle of the land.',
  oz: '源自拉丁语 medius“中间”——medium、median、mediocre 同源；Mediterranean 意即“陆地中间的海”。',
  se: 'A good design review mediates between speed and safety.',
  sz: '一场好的设计评审，是在速度与安全之间做调解。'
},
{
  w: 'concede', uk: '/kənˈsiːd/', us: '/kənˈsiːd/', pos: 'v.', cat: 'work-comm',
  en: 'To admit a point is right, often reluctantly.',
  zh: '让步／承认：承认对方有理，通常是不情愿地。',
  oe: 'From Latin concedere "to yield, to withdraw" (com- + cedere "to go, to give way") - the same cedere behind recede, precede and, ultimately, ancestor.',
  oz: '源自拉丁语 concedere“让出、退让”（com- + cedere 走、让路）——recede、precede 同根，ancestor 也源出于此。',
  se: 'Concede the small points early so the real one lands.',
  sz: '小的分歧早点让步，真正要紧的那点才推得动。'
},
{
  w: 'solicit', uk: '/səˈlɪsɪt/', us: '/səˈlɪsɪt/', pos: 'v.', cat: 'work-comm',
  en: 'To ask for something formally - feedback, bids, applications.',
  zh: '征求：正式地请求某物，如反馈、报价、申请。',
  oe: 'From Latin sollicitare "to disturb, to agitate", from sollus "whole" + citare "to set in motion" - to set someone entirely in motion.',
  oz: '源自拉丁语 sollicitare“打扰、搅动”，由 sollus（整个）+ citare（使运动）构成——把某人整个儿地搅动起来。',
  se: 'Solicit written feedback; the meeting favours the loudest voice.',
  sz: '要征求书面反馈——会议上占便宜的总是嗓门最大的人。'
},
{
  w: 'reiterate', uk: '/riˈɪtəreɪt/', us: '/riˈɪtəreɪt/', pos: 'v.', cat: 'work-comm',
  en: 'To say something again for emphasis.',
  zh: '重申：为强调而再次说明。',
  oe: 'From re- "again" + Latin iterare "to repeat" (iterum "again") - the same iterare as iteration, so the word literally means "re-repeat".',
  oz: '由 re-（再）+ 拉丁语 iterare（重复，词根 iterum 又一次）构成——与 iteration 同根，所以它字面上是“再重复一次”。',
  se: 'Let me reiterate the constraint, because it decides the design.',
  sz: '我重申一下这个约束，因为它决定了整个设计。'
},
{
  w: 'candid', uk: '/ˈkændɪd/', us: '/ˈkændɪd/', pos: 'adj.', cat: 'work-comm',
  en: 'Honest and direct, even when the message is unwelcome.',
  zh: '坦率的：诚实直接，即便所说的话并不中听。',
  oe: 'From Latin candidus "white, pure, unblemished". A Roman seeking office wore a whitened toga, which is why he was a candidatus - and why candour is whiteness of speech.',
  oz: '源自拉丁语 candidus“洁白、纯净”。罗马求职者身着漂白托加，故称 candidatus（候选人）——坦率即言语的洁白。',
  se: 'Candid feedback early is kinder than polite feedback late.',
  sz: '早期的坦率反馈，比事后的客气反馈更厚道。'
},
{
  w: 'ambiguous', uk: '/æmˈbɪɡjuəs/', us: '/æmˈbɪɡjuəs/', pos: 'adj.', cat: 'work-comm',
  en: 'Open to more than one reading.',
  zh: '有歧义的：可以有不止一种理解。',
  oe: 'From Latin ambiguus "wavering, going both ways" (ambi- "both" + agere "to drive"). Note the difference from ambivalent, which is about feelings, not meanings.',
  oz: '源自拉丁语 ambiguus“摇摆、两头跑”（ambi- 两者 + agere 驱动）。注意与 ambivalent 区别：后者说的是情感，不是含义。',
  se: 'An ambiguous spec is a bug filed against the future.',
  sz: '有歧义的规格说明，等于给未来预先提了个 bug。'
},
{
  w: 'rapport', uk: '/ræˈpɔː/', us: '/ræˈpɔːr/', pos: 'n.', cat: 'work-comm',
  en: 'An easy working relationship in which people understand each other quickly.',
  zh: '默契／融洽关系：彼此很快就能理解对方的良好协作关系。',
  oe: 'French, from rapporter "to bring back, to refer" - what two people bring back to each other. The final t is silent, as in French.',
  oz: '法语词，源自 rapporter“带回、联系”——两人彼此带回给对方的东西。词尾的 t 不发音，保留法语读法。',
  se: 'Rapport with the on-call team is worth more than any dashboard.',
  sz: '和值班团队的默契，比任何监控面板都值钱。'
},
{
  w: 'concur', uk: '/kənˈkɜː/', us: '/kənˈkɜːr/', pos: 'v.', cat: 'work-comm',
  en: 'To agree, especially with a stated judgement.',
  zh: '同意：尤指认同某项已表述的判断。',
  oe: 'From Latin concurrere "to run together" - the very same verb behind concurrency. Two opinions running together arrive at the same place.',
  oz: '源自拉丁语 concurrere“一起跑”——与 concurrency 是同一个动词。两种意见一起跑，就跑到了同一处。',
  se: 'I concur with the recommendation but not with the reasoning.',
  sz: '我同意这个建议，但不同意其中的推理。'
},

/* ==================== 职场与商务 · 商业与产品 ==================== */
{
  w: 'incumbent', uk: '/ɪnˈkʌmbənt/', us: '/ɪnˈkʌmbənt/', pos: 'n./adj.', cat: 'work-biz',
  en: 'The established player currently holding the position; or, of a duty, obligatory.',
  zh: '在位者／现有主导方；作形容词时表示“义不容辞的”。',
  oe: 'From Latin incumbere "to lie upon, to lean on" (in- + cubare "to lie down") - the holder of an office leans on it. The same cubare gives incubate.',
  oz: '源自拉丁语 incumbere“伏在其上、倚靠”（in- + cubare 躺下）——任职者倚在这个位置上。incubate 同根。',
  se: 'The incumbent has distribution; the startup has speed.',
  sz: '在位者手握渠道，创业公司手握速度。'
},
{
  w: 'attrition', uk: '/əˈtrɪʃn/', us: '/əˈtrɪʃn/', pos: 'n.', cat: 'work-biz',
  en: 'Gradual loss of staff or customers through ordinary departures.',
  zh: '流失：员工或客户通过日常离开而逐步减少。',
  oe: 'From Latin atterere "to rub against, to wear away" (ad- + terere "to rub") - the same terere behind detriment and trite, which literally means worn out.',
  oz: '源自拉丁语 atterere“摩擦、磨损”（ad- + terere 摩擦）——detriment 同根；trite（陈腐的）字面正是“被磨旧的”。',
  se: 'Hiring cannot outrun attrition for long.',
  sz: '招聘的速度，长期跑不赢流失的速度。'
},
{
  w: 'churn', uk: '/tʃɜːn/', us: '/tʃɜːrn/', pos: 'n./v.', cat: 'work-biz',
  en: 'The rate at which customers stop using a product.',
  zh: '流失率：客户停止使用产品的速率。',
  oe: 'From Old English cyrin, a butter churn - a vessel whose whole purpose is constant agitation. The business sense keeps the churning motion: in and out.',
  oz: '源自古英语 cyrin“搅乳桶”——一种存在意义就是不断搅动的容器。商业含义保留了这种翻搅感：进进出出。',
  se: 'Five percent monthly churn quietly halves the base in a year.',
  sz: '每月 5% 的流失率，一年内会悄悄把用户基数腰斩。'
},
{
  w: 'leverage', uk: '/ˈliːvərɪdʒ/', us: '/ˈlevərɪdʒ/', pos: 'n./v.', cat: 'work-biz',
  en: 'Using a small input to move a large output; in finance, using borrowed money to amplify returns.',
  zh: '杠杆（作用）：用较小投入撬动较大产出；金融中指用借贷放大收益。',
  oe: 'From lever, via French from Latin levare "to raise" (levis "light") - the same levis behind levity, alleviate and elevator. Archimedes: give me a lever long enough.',
  oz: '源自 lever（杠杆），经法语来自拉丁语 levare“举起”（levis 轻）——levity、alleviate、elevator 同源。阿基米德说：给我一根足够长的杠杆。',
  se: 'Automation gives you leverage; headcount only gives you throughput.',
  sz: '自动化带来的是杠杆，加人带来的只是吞吐。'
},
{
  w: 'margin', uk: '/ˈmɑːdʒɪn/', us: '/ˈmɑːrdʒɪn/', pos: 'n.', cat: 'work-biz',
  en: 'What is left of revenue after the costs of producing it.',
  zh: '利润率／毛利：收入扣除相应成本后剩下的部分。',
  oe: 'From Latin margo "edge, border" - the same root as march (a border territory) and Marquis (the lord of one). Profit sits on the edge between price and cost.',
  oz: '源自拉丁语 margo“边缘、边界”——march（边区）与 Marquis（边区领主，即侯爵）同源。利润正处在售价与成本之间的那道边上。',
  se: 'Inference cost is what decides whether the margin survives.',
  sz: '推理成本决定了利润率能否保得住。'
},
{
  w: 'procurement', uk: '/prəˈkjʊəmənt/', us: '/prəˈkjʊrmənt/', pos: 'n.', cat: 'work-biz',
  en: 'The formal process an organisation uses to buy things.',
  zh: '采购：组织购买物资或服务的正式流程。',
  oe: 'From Latin procurare "to take care of on another\'s behalf" (pro- + curare "to care") - the very same verb that, contracted, gave us proxy.',
  oz: '源自拉丁语 procurare“代人打理”（pro- + curare 照管）——proxy 正是由这个词缩合而来。',
  se: 'The technical evaluation took a week; procurement took a quarter.',
  sz: '技术评估花了一周，采购流程花了一个季度。'
},
{
  w: 'stakeholder', uk: '/ˈsteɪkhəʊldə/', us: '/ˈsteɪkhoʊldər/', pos: 'n.', cat: 'work-biz',
  en: 'Anyone whose interests are affected by a decision.',
  zh: '利益相关方：其利益会被某项决策影响的任何一方。',
  oe: 'Originally the neutral third party who physically held the stakes in an eighteenth-century wager until the bet was settled - someone with no stake of their own. The meaning has since inverted.',
  oz: '本指 18 世纪赌局中代为保管赌注、直到胜负揭晓的中立第三方——一个自己毫无利害的人。词义后来完全反转了。',
  se: 'List the stakeholders before you list the requirements.',
  sz: '在列需求之前，先把利益相关方列出来。'
},
{
  w: 'arbitrage', uk: '/ˈɑːbɪtrɑːʒ/', us: '/ˈɑːrbɪtrɑːʒ/', pos: 'n.', cat: 'work-biz',
  en: 'Profiting from the same thing being priced differently in two places.',
  zh: '套利：利用同一标的在两地定价不同来获利。',
  oe: 'French, from arbitrer "to judge", Latin arbiter "one who goes to see, a witness". The arbitrageur is the one who judges two prices at once.',
  oz: '法语词，源自 arbitrer“裁判”，拉丁语 arbiter“前往查看之人、见证者”。套利者就是同时裁断两个价格的人。',
  se: 'Most latency arbitrage disappears the moment it is published.',
  sz: '大多数延迟套利，在被公开的那一刻就消失了。'
},
{
  w: 'monetize', uk: '/ˈmʌnɪtaɪz/', us: '/ˈmɑːnɪtaɪz/', pos: 'v.', cat: 'work-biz',
  en: 'To turn something that has users into something that has revenue.',
  zh: '变现：把有用户的东西转化为有收入的东西。',
  oe: 'From Latin moneta "mint, coinage" - the name comes from the temple of Juno Moneta, "Juno the Warner", where Rome struck its coins. Money and monitor share that root of warning.',
  oz: '源自拉丁语 moneta“铸币厂、货币”——此名来自罗马铸币所在的朱诺·莫涅塔（“警示者朱诺”）神庙。money 与 monitor 同出于这个“警告”词根。',
  se: 'Monetize the workflow, not the click.',
  sz: '要对工作流变现，而不是对点击变现。'
},
{
  w: 'incentive', uk: '/ɪnˈsentɪv/', us: '/ɪnˈsentɪv/', pos: 'n.', cat: 'work-biz',
  en: 'Something that makes a particular behaviour worth choosing.',
  zh: '激励：让某种行为变得值得选择的东西。',
  oe: 'From Latin incentivum "setting the tune", from incinere "to sing or play into" (in- + canere "to sing"). An incentive was originally the note that started the song.',
  oz: '源自拉丁语 incentivum“起调”，动词 incinere“奏入、唱起”（in- + canere 唱）。激励最初指的是起唱的那个音。',
  se: 'Every metric becomes an incentive the moment it is reported upward.',
  sz: '任何指标一旦要向上汇报，就立刻变成了一种激励。'
},
{
  w: 'liability', uk: '/ˌlaɪəˈbɪləti/', us: '/ˌlaɪəˈbɪləti/', pos: 'n.', cat: 'work-biz',
  en: 'A legal or financial obligation; more loosely, something that is a burden.',
  zh: '责任／负债：法律或财务上的义务；引申指累赘。',
  oe: 'From liable, from Old French lier "to bind", Latin ligare - the same ligare behind ligament, oblige and religion, which may mean "that which binds".',
  oz: '源自 liable，来自古法语 lier“捆绑”，拉丁语 ligare——ligament、oblige 同根；religion 或许也意为“把人绑住之物”。',
  se: 'Code you cannot delete is an asset on paper and a liability in practice.',
  sz: '删不掉的代码，账面上是资产，实践中是负债。'
},
{
  w: 'mandate', uk: '/ˈmændeɪt/', us: '/ˈmændeɪt/', pos: 'n./v.', cat: 'work-biz',
  en: 'An authoritative instruction, or the authority to carry one out.',
  zh: '授权／强制要求：权威下达的指令，或执行该指令的授权。',
  oe: 'From Latin mandatum "a commission", from manus "hand" + dare "to give" - literally to give something into someone\'s hand.',
  oz: '源自拉丁语 mandatum“委任”，由 manus（手）+ dare（给）构成——字面就是把事情交到某人手里。',
  se: 'A migration without a mandate is a hobby.',
  sz: '没有授权的迁移，只能算个人爱好。'
},
{
  w: 'runway', uk: '/ˈrʌnweɪ/', us: '/ˈrʌnweɪ/', pos: 'n.', cat: 'work-biz',
  en: 'How long a company can keep operating before the money runs out.',
  zh: '现金流跑道：公司在资金耗尽前还能维持运转多久。',
  oe: 'Straight from aviation: the strip of ground you have to accelerate along before you either take off or run out of it. The metaphor is exact and unforgiving.',
  oz: '直接取自航空：起飞前用来加速的那条跑道——要么起飞，要么用尽。这个比喻精确而不留情面。',
  se: 'Eighteen months of runway buys exactly one wrong bet.',
  sz: '十八个月的跑道，刚好够犯一次方向性的错误。'
},
{
  w: 'valuation', uk: '/ˌvæljuˈeɪʃn/', us: '/ˌvæljuˈeɪʃn/', pos: 'n.', cat: 'work-biz',
  en: 'The price the market puts on a company at a moment in time.',
  zh: '估值：市场在某一时刻给一家公司标出的价格。',
  oe: 'From Latin valere "to be strong, to be worth" - the same valere behind value, valid, prevail and the farewell vale, "be well".',
  oz: '源自拉丁语 valere“强健、值得”——value、valid、prevail 同根；告别语 vale（保重）也出于此。',
  se: 'Valuation is a story the market tells until it stops believing it.',
  sz: '估值是市场讲给自己听的故事，直到它不再相信为止。'
},

/* ==================== 职场与商务 · 求职与职涯 ==================== */
{
  w: 'tenure', uk: '/ˈtenjə/', us: '/ˈtenjər/', pos: 'n.', cat: 'work-career',
  en: 'The length of time a person has held a position; in universities, permanent appointment.',
  zh: '任期／终身教职：任职的时长；在大学中指终身职位。',
  oe: 'From Latin tenere "to hold" - the same tenere behind tenant, tenacious, contain and maintain, which is to hold in the hand.',
  oz: '源自拉丁语 tenere“持有”——tenant、tenacious、contain 同根；maintain 字面就是“握在手中”。',
  se: 'Median tenure of two years means the docs are the real handover.',
  sz: '平均任期两年，意味着文档才是真正的交接。'
},
{
  w: 'credential', uk: '/krəˈdenʃl/', us: '/krəˈdenʃl/', pos: 'n.', cat: 'work-career',
  en: 'A qualification or document that establishes what someone is entitled to.',
  zh: '资历／凭证：确立某人资格或权限的证明。',
  oe: 'From Latin credentia "belief, trust", from credere "to believe" - the same credere behind credit, creed and incredible. A credential asks you to believe.',
  oz: '源自拉丁语 credentia“信任”，词根 credere“相信”——credit、creed、incredible 同源。凭证要求的正是“你信我”。',
  se: 'Credentials open the first door; nothing after that.',
  sz: '资历只能打开第一扇门，之后就不管用了。'
},
{
  w: 'endorse', uk: '/ɪnˈdɔːs/', us: '/ɪnˈdɔːrs/', pos: 'v.', cat: 'work-career',
  en: 'To publicly declare support for a person, product or claim.',
  zh: '背书：公开表示支持某人、某产品或某主张。',
  oe: 'From Latin in- "on" + dorsum "the back" - literally to write on the back of a document, the way a cheque is signed on its reverse.',
  oz: '源自拉丁语 in-（在上）+ dorsum（背面）——字面就是在文件背面签字，正如支票要在背面背书。',
  se: 'Do not endorse a tool you have only seen in a demo.',
  sz: '不要为一个只在演示里见过的工具背书。'
},
{
  w: 'negotiate', uk: '/nɪˈɡəʊʃieɪt/', us: '/nɪˈɡoʊʃieɪt/', pos: 'v.', cat: 'work-career',
  en: 'To reach an agreement through discussion of terms.',
  zh: '谈判：通过条件的商讨达成协议。',
  oe: 'From Latin negotiari "to do business", from neg- "not" + otium "leisure" - business is literally the absence of leisure. Romans defined work as not-rest.',
  oz: '源自拉丁语 negotiari“做生意”，由 neg-（不）+ otium（闲暇）构成——生意字面上就是“没有闲暇”。罗马人把工作定义为“非休息”。',
  se: 'Negotiate the scope, not just the deadline.',
  sz: '要谈的是范围，而不只是截止日期。'
},
{
  w: 'compensation', uk: '/ˌkɒmpenˈseɪʃn/', us: '/ˌkɑːmpenˈseɪʃn/', pos: 'n.', cat: 'work-career',
  en: 'The whole package of pay, equity and benefits for work done.',
  zh: '薪酬：工作所得的工资、股权与福利的总和。',
  oe: 'From Latin compensare "to weigh one thing against another" (com- + pendere "to weigh, to hang") - the same pendere behind pension, pendulum and ponder.',
  oz: '源自拉丁语 compensare“把两样东西放在秤上比较”（com- + pendere 称量、悬挂）——pension、pendulum、ponder 同根。',
  se: 'Ask for the whole compensation band, not just the base.',
  sz: '要问整个薪酬区间，而不只是基本工资。'
},
{
  w: 'seniority', uk: '/ˌsiːniˈɒrəti/', us: '/ˌsiːniˈɔːrəti/', pos: 'n.', cat: 'work-career',
  en: 'Rank earned by length of service or scope of responsibility.',
  zh: '资历／职级：由服务年限或职责范围决定的级别。',
  oe: 'From Latin senior "older", comparative of senex "old man" - the same senex behind senate (a council of elders) and senile.',
  oz: '源自拉丁语 senior“较年长的”，是 senex（老人）的比较级——senate（元老院，长者会议）与 senile 同根。',
  se: 'Seniority should mean scope of judgement, not years served.',
  sz: '职级衡量的应是判断的范围，而不是任职的年头。'
},
{
  w: 'onboarding', uk: '/ˈɒnbɔːdɪŋ/', us: '/ˈɑːnbɔːrdɪŋ/', pos: 'n.', cat: 'work-career',
  en: 'The process of bringing a new person up to productive speed.',
  zh: '入职引导：让新人尽快进入生产状态的过程。',
  oe: 'From the nautical "on board" - a new hand is brought aboard the ship and taught the ropes, an idiom that is itself literally about rigging.',
  oz: '源自航海用语 on board（上船）——新水手被带上船并被教会 the ropes（绳索），而这个习语本身说的就是缆绳。',
  se: 'If onboarding takes a month, the build system is the reason.',
  sz: '如果入职要花一个月，原因多半在构建系统。'
},
{
  w: 'referral', uk: '/rɪˈfɜːrəl/', us: '/rɪˈfɜːrəl/', pos: 'n.', cat: 'work-career',
  en: 'A recommendation that passes a candidate directly to a hiring team.',
  zh: '内推：把候选人直接推荐给招聘团队。',
  oe: 'From Latin referre "to carry back" (re- + ferre "to carry") - the same ferre as inference, transfer and, through Greek, metaphor.',
  oz: '源自拉丁语 referre“带回”（re- + ferre 携带）——inference、transfer 同根，希腊语的 metaphor 也是“搬运”之意。',
  se: 'A referral skips the queue, not the bar.',
  sz: '内推跳过的是排队，不是门槛。'
},
{
  w: 'sabbatical', uk: '/səˈbætɪkl/', us: '/səˈbætɪkl/', pos: 'n.', cat: 'work-career',
  en: 'An extended leave from work, usually to study or rest.',
  zh: '公休假／学术休假：较长的离岗休假，通常用于进修或休息。',
  oe: 'From Hebrew shabbath "rest". Leviticus commands that fields lie fallow every seventh year - the sabbatical year - and universities borrowed both the number and the idea.',
  oz: '源自希伯来语 shabbath“安息”。《利未记》规定土地每七年休耕一次，即安息年；大学把这个年数和理念一并借了过来。',
  se: 'He came back from sabbatical with the rewrite already designed.',
  sz: '他休完假回来，重写方案已经设计好了。'
},
{
  w: 'vested', uk: '/ˈvestɪd/', us: '/ˈvestɪd/', pos: 'adj.', cat: 'work-career',
  en: 'Fully owned and no longer forfeitable, as of equity that has matured.',
  zh: '已归属的：已完全拥有、不会再被收回，如已到期的股权。',
  oe: 'From Latin vestire "to clothe" (vestis "garment"). A right that has vested is one you are clothed in - which is also the picture behind a vested interest.',
  oz: '源自拉丁语 vestire“穿衣”（vestis 衣物）。已归属的权利，就是你已“穿在身上”的权利——vested interest（既得利益）用的也是这个意象。',
  se: 'Nothing is vested until the cliff has passed.',
  sz: '在 cliff 期满之前，没有任何股权是已归属的。'
},
{
  w: 'probation', uk: '/prəˈbeɪʃn/', us: '/proʊˈbeɪʃn/', pos: 'n.', cat: 'work-career',
  en: 'An initial period in which a new hire is being tested.',
  zh: '试用期：新员工接受考察的最初阶段。',
  oe: 'From Latin probare "to test, to prove", from probus "good, honest" - the same probare behind probe, prove and approve.',
  oz: '源自拉丁语 probare“检验、证明”，词根 probus“良好、正直”——probe、prove、approve 同根。',
  se: 'Probation runs both ways, whatever the contract says.',
  sz: '不管合同怎么写，试用期都是双向的。'
},
{
  w: 'severance', uk: '/ˈsevərəns/', us: '/ˈsevərəns/', pos: 'n.', cat: 'work-career',
  en: 'The payment and terms attached to ending employment.',
  zh: '离职补偿：终止雇佣关系时的补偿金与相关条款。',
  oe: 'From Latin separare "to separate" (se- "apart" + parare "to prepare") - the same separare that, worn down through French, also gave English sever.',
  oz: '源自拉丁语 separare“分开”（se- 分离 + parare 准备）——经法语磨损后也演化出了英语的 sever。',
  se: 'Read the severance clause when you sign, not when you leave.',
  sz: '离职补偿条款要在签字时读，而不是在离开时读。'
},
{
  w: 'accolade', uk: '/ˈækəleɪd/', us: '/ˈækəleɪd/', pos: 'n.', cat: 'work-career',
  en: 'A public award or expression of praise.',
  zh: '嘉奖：公开的奖赏或赞誉。',
  oe: 'From French accolade "an embrace", from Latin ad- + collum "neck". Knighthood was originally conferred with an embrace around the neck, before the sword on the shoulder replaced it.',
  oz: '源自法语 accolade“拥抱”，来自拉丁语 ad- + collum（脖颈）。授予骑士称号最初是搂颈拥抱，后来才被剑拍肩膀取代。',
  se: 'The accolade went to the launch; the work was done a year earlier.',
  sz: '嘉奖给了这次发布，而真正的工作是一年前完成的。'
},
{
  w: 'meritocracy', uk: '/ˌmerɪˈtɒkrəsi/', us: '/ˌmerɪˈtɑːkrəsi/', pos: 'n.', cat: 'work-career',
  en: 'A system in which advancement is supposed to follow demonstrated ability.',
  zh: '精英体制：晋升理应依据已证明的能力来决定的制度。',
  oe: 'Latin meritum "that which is earned" + Greek kratos "power". Michael Young coined it in 1958 for a satirical dystopia - he was dismayed to watch it become a compliment.',
  oz: '拉丁语 meritum（所应得）+ 希腊语 kratos（权力）。1958 年 Michael Young 造此词是为了讽刺一个反乌托邦，他后来眼看它变成褒义词而深感沮丧。',
  se: 'Every organisation believes it is a meritocracy; that belief is the risk.',
  sz: '每个组织都相信自己是精英体制，这种信念本身就是风险。'
}
,

/* ==================== 高阶通用词 · 性质与描述 ==================== */
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

/* ==================== 高阶通用词 · 行为与态度 ==================== */
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

/* ==================== 高阶通用词 · 抽象概念 ==================== */
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
,

/* ==================== 思辨与逻辑 · 逻辑与论证 ==================== */
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

/* ==================== 思辨与逻辑 · 修辞与谬误 ==================== */
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
