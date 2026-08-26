/*
 * TechLex 词库 / Word bank
 * ------------------------------------------------------------------
 * 字段说明 / Field reference:
 *   w      单词 word
 *   uk/us  英式 / 美式音标 British / American IPA
 *   pos    词性 part of speech
 *   cat    分类 category: ai | algo | sde | sys | net
 *   en/zh  释义 definition (English / 中文)
 *   oe/oz  词源与典故 etymology & story (English / 中文)
 *   se/sz  例句 example sentence (English / 中文)
 */

window.CATEGORIES = [
  { id: 'ai',   en: 'AI & Machine Learning', zh: '人工智能与机器学习' },
  { id: 'algo', en: 'Algorithms & Data Structures', zh: '算法与数据结构' },
  { id: 'sde',  en: 'Software Engineering', zh: '软件工程' },
  { id: 'sys',  en: 'Systems & Distributed', zh: '系统与分布式' },
  { id: 'net',  en: 'Network Engineering', zh: '网络工程' }
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

];
