/*
 * TechLex 词库结构定义 / Single source of truth for tracks & categories
 * -------------------------------------------------------------------
 * 改这里 → 跑 `node scripts/build.mjs` → 自动生成 js/manifest.js
 */

// 大类分组，只用于顶部大类选择面板 / groups, only for the track picker panel
export const GROUPS = [
  { id: 'g-tech', zh: '技术与工程', en: 'Tech & Engineering' },
  { id: 'g-acad', zh: '学术与研究', en: 'Academic & Research' },
  { id: 'g-biz',  zh: '商业与社会', en: 'Business & Society' },
  { id: 'g-gen',  zh: '通用与生活', en: 'General & Everyday' },
  { id: 'g-lang', zh: '语言训练',   en: 'Language Drills' }
];

/* 大类 / tracks.  prio 越小，重复词优先归给它 / lower prio wins a duplicate word */
export const TRACKS = [
  { id: 'tech',  group: 'g-tech', prio: 1,  zh: '技术英语',           en: 'Tech English' },
  { id: 'data',  group: 'g-tech', prio: 2,  zh: '数据与统计',         en: 'Data & Statistics' },
  { id: 'sec',   group: 'g-tech', prio: 3,  zh: '安全与密码学',       en: 'Security & Cryptography' },
  { id: 'prod',  group: 'g-tech', prio: 9,  zh: '产品与设计',         en: 'Product & Design' },

  { id: 'acad',  group: 'g-acad', prio: 6,  zh: '学术与论文',         en: 'Academic & Research' },
  { id: 'rea',   group: 'g-acad', prio: 7,  zh: '思辨与逻辑',         en: 'Reasoning & Argument' },
  { id: 'med',   group: 'g-acad', prio: 5,  zh: '医学与生命科学',     en: 'Medicine & Life Sciences' },
  { id: 'phil',  group: 'g-acad', prio: 12, zh: '哲学与社会科学',     en: 'Philosophy & Social Science' },

  { id: 'work',  group: 'g-biz',  prio: 10, zh: '职场与商务',         en: 'Workplace & Business' },
  { id: 'fin',   group: 'g-biz',  prio: 4,  zh: '金融与量化',         en: 'Finance & Quant' },
  { id: 'law',   group: 'g-biz',  prio: 8,  zh: '法律与合规',         en: 'Law & Compliance' },
  { id: 'news',  group: 'g-biz',  prio: 13, zh: '新闻时事与国际关系', en: 'News & Geopolitics' },

  { id: 'gen',   group: 'g-gen',  prio: 15, zh: '高阶通用词',         en: 'Advanced General' },
  { id: 'food',  group: 'g-gen',  prio: 11, zh: '饮食',             en: 'Food & Cooking' },
  { id: 'life',  group: 'g-gen',  prio: 19, zh: '日常生活',         en: 'Everyday Life' },

  { id: 'exam',  group: 'g-lang', prio: 18, zh: '考试高频',           en: 'GRE / TOEFL / IELTS' },
  { id: 'root',  group: 'g-lang', prio: 16, zh: '词根词缀',           en: 'Roots & Affixes' },
  { id: 'conf',  group: 'g-lang', prio: 14, zh: '易混词与搭配',       en: 'Confusables & Collocations' },
  { id: 'speak', group: 'g-lang', prio: 17, zh: '学术口语与会议表达', en: 'Academic Speaking' }
];

/* 小类 / categories */
export const CATEGORIES = [
  // 技术英语
  { id: 'ai',   track: 'tech', zh: '人工智能与机器学习', en: 'AI & Machine Learning' },
  { id: 'algo', track: 'tech', zh: '算法与数据结构',     en: 'Algorithms & Data Structures' },
  { id: 'sde',  track: 'tech', zh: '软件工程',           en: 'Software Engineering' },
  { id: 'sys',  track: 'tech', zh: '系统与分布式',       en: 'Systems & Distributed' },
  { id: 'net',  track: 'tech', zh: '网络工程',           en: 'Network Engineering' },
  // 数据与统计
  { id: 'data-prob',   track: 'data', zh: '概率与分布',   en: 'Probability & Distributions' },
  { id: 'data-infer',  track: 'data', zh: '推断与检验',   en: 'Inference & Testing' },
  { id: 'data-causal', track: 'data', zh: '因果与实验',   en: 'Causality & Experiments' },
  { id: 'data-eng',    track: 'data', zh: '数据工程',     en: 'Data Engineering' },
  // 安全与密码学
  { id: 'sec-crypto', track: 'sec', zh: '密码原语',     en: 'Cryptographic Primitives' },
  { id: 'sec-attack', track: 'sec', zh: '攻击手法',     en: 'Attacks' },
  { id: 'sec-def',    track: 'sec', zh: '防御与运营',   en: 'Defence & Operations' },
  { id: 'sec-iam',    track: 'sec', zh: '身份与访问',   en: 'Identity & Access' },
  // 产品与设计
  { id: 'prod-ux',       track: 'prod', zh: '交互与可用性', en: 'Interaction & Usability' },
  { id: 'prod-growth',   track: 'prod', zh: '增长与指标',   en: 'Growth & Metrics' },
  { id: 'prod-design',   track: 'prod', zh: '设计语言',     en: 'Design Language' },
  { id: 'prod-research', track: 'prod', zh: '用户研究',     en: 'User Research' },
  // 学术与论文
  { id: 'acad-verb', track: 'acad', zh: '学术动词',   en: 'Academic Verbs' },
  { id: 'acad-eval', track: 'acad', zh: '论证与评价', en: 'Argument & Evaluation' },
  { id: 'acad-meth', track: 'acad', zh: '方法与结构', en: 'Method & Structure' },
  // 思辨与逻辑
  { id: 'rea-logic', track: 'rea', zh: '逻辑与论证', en: 'Logic & Proof' },
  { id: 'rea-rhet',  track: 'rea', zh: '修辞与谬误', en: 'Rhetoric & Fallacies' },
  // 医学与生命科学
  { id: 'med-anat', track: 'med', zh: '解剖与生理', en: 'Anatomy & Physiology' },
  { id: 'med-dis',  track: 'med', zh: '疾病与症状', en: 'Disease & Symptoms' },
  { id: 'med-drug', track: 'med', zh: '药物与治疗', en: 'Drugs & Treatment' },
  { id: 'med-clin', track: 'med', zh: '临床研究',   en: 'Clinical Research' },
  // 哲学与社会科学
  { id: 'phil-epis', track: 'phil', zh: '认识论与形而上', en: 'Epistemology & Metaphysics' },
  { id: 'phil-eth',  track: 'phil', zh: '伦理与政治',     en: 'Ethics & Politics' },
  { id: 'phil-soc',  track: 'phil', zh: '社会学',         en: 'Sociology' },
  { id: 'phil-econ', track: 'phil', zh: '经济学思想',     en: 'Economic Thought' },
  // 职场与商务
  { id: 'work-comm',   track: 'work', zh: '沟通与协作', en: 'Communication' },
  { id: 'work-biz',    track: 'work', zh: '商业与产品', en: 'Business & Product' },
  { id: 'work-career', track: 'work', zh: '求职与职涯', en: 'Career' },
  // 金融与量化
  { id: 'fin-market', track: 'fin', zh: '市场与工具',   en: 'Markets & Instruments' },
  { id: 'fin-risk',   track: 'fin', zh: '风险与收益',   en: 'Risk & Return' },
  { id: 'fin-report', track: 'fin', zh: '财报与估值',   en: 'Reporting & Valuation' },
  { id: 'fin-trade',  track: 'fin', zh: '交易与结算',   en: 'Trading & Settlement' },
  // 法律与合规
  { id: 'law-contract', track: 'law', zh: '合同条款',   en: 'Contracts' },
  { id: 'law-tort',     track: 'law', zh: '侵权与救济', en: 'Torts & Remedies' },
  { id: 'law-ip',       track: 'law', zh: '知识产权',   en: 'Intellectual Property' },
  { id: 'law-data',     track: 'law', zh: '数据合规',   en: 'Data & Privacy' },
  // 新闻时事与国际关系
  { id: 'news-diplo', track: 'news', zh: '外交与冲突', en: 'Diplomacy & Conflict' },
  { id: 'news-polit', track: 'news', zh: '政体与选举', en: 'Politics & Elections' },
  { id: 'news-trade', track: 'news', zh: '贸易与制裁', en: 'Trade & Sanctions' },
  { id: 'news-media', track: 'news', zh: '媒体用语',   en: 'Media Language' },
  // 高阶通用词
  { id: 'gen-desc', track: 'gen', zh: '性质与描述', en: 'Qualities' },
  { id: 'gen-act',  track: 'gen', zh: '行为与态度', en: 'Actions & Attitudes' },
  { id: 'gen-abs',  track: 'gen', zh: '抽象概念',   en: 'Abstract Concepts' },
  // 饮食 food
  { id: 'food-tech',    track: 'food', zh: '烹饪技法',   en: 'Techniques' },
  { id: 'food-taste',   track: 'food', zh: '风味与口感', en: 'Flavour & Texture' },
  { id: 'food-meat',    track: 'food', zh: '肉类与海鲜', en: 'Meat & Seafood' },
  { id: 'food-produce', track: 'food', zh: '蔬果与谷物', en: 'Produce & Grains' },
  { id: 'food-spice',   track: 'food', zh: '香料与调味', en: 'Spices & Seasoning' },
  { id: 'food-bake',    track: 'food', zh: '烘焙与甜点', en: 'Baking & Sweets' },
  { id: 'food-drink',   track: 'food', zh: '咖啡茶与酒', en: 'Coffee, Tea & Drink' },
  { id: 'food-dairy',   track: 'food', zh: '奶酪与乳制品', en: 'Cheese & Dairy' },
  { id: 'food-carb',    track: 'food', zh: '面食与米食', en: 'Noodles, Rice & Bread' },
  { id: 'food-world',   track: 'food', zh: '世界菜系',   en: 'Cuisines of the World' },
  { id: 'food-kit',     track: 'food', zh: '厨房器具',   en: 'Kitchen Equipment' },
  { id: 'food-sci',     track: 'food', zh: '食品科学与安全', en: 'Food Science & Safety' },
  { id: 'food-dining',  track: 'food', zh: '菜系与餐桌', en: 'Cuisine & Dining' },
  // 日常生活 life
  { id: 'life-home', track: 'life', zh: '居家与事务', en: 'Home & Admin' },
  { id: 'life-out',  track: 'life', zh: '出行与就医', en: 'Travel & Health' },
  // 考试高频
  { id: 'exam-gre',   track: 'exam', zh: 'GRE 高频',   en: 'GRE' },
  { id: 'exam-toefl', track: 'exam', zh: 'TOEFL 高频', en: 'TOEFL' },
  { id: 'exam-ielts', track: 'exam', zh: 'IELTS 高频', en: 'IELTS' },
  { id: 'exam-awl',   track: 'exam', zh: '学术词表 AWL', en: 'Academic Word List' },
  // 词根词缀
  { id: 'root-lat-v', track: 'root', zh: '拉丁动词根', en: 'Latin Verb Roots' },
  { id: 'root-lat-n', track: 'root', zh: '拉丁名词根', en: 'Latin Noun Roots' },
  { id: 'root-gk',    track: 'root', zh: '希腊词根',   en: 'Greek Roots' },
  { id: 'root-pre',   track: 'root', zh: '前缀',       en: 'Prefixes' },
  { id: 'root-suf',   track: 'root', zh: '后缀',       en: 'Suffixes' },
  // 易混词与搭配
  { id: 'conf-form',  track: 'conf', zh: '形近易混',   en: 'Look-alikes' },
  { id: 'conf-sense', track: 'conf', zh: '义近易混',   en: 'Near-synonyms' },
  { id: 'conf-collo', track: 'conf', zh: '动名搭配',   en: 'Verb–Noun Collocations' },
  { id: 'conf-prep',  track: 'conf', zh: '介词搭配',   en: 'Preposition Patterns' },
  // 学术口语与会议表达
  { id: 'speak-hedge',   track: 'speak', zh: '委婉与让步', en: 'Hedging & Concession' },
  { id: 'speak-ask',     track: 'speak', zh: '提问与追问', en: 'Questions & Probing' },
  { id: 'speak-lead',    track: 'speak', zh: '主持与推进', en: 'Chairing & Driving' },
  { id: 'speak-present', track: 'speak', zh: '汇报与答辩', en: 'Presenting & Defending' }
];
