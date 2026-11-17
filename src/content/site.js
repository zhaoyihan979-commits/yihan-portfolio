/**
 * 站点内容配置 —— 所有文案、作品、联系方式都在这里维护。
 * 改文案 / 换封面 / 换链接，只需改这个文件，不用动组件代码。
 */

export const site = {
  nameZh: '翌涵',
  nameEn: 'YIHAN',
  heroIntro:
    '我做过 AI 导购产品、跨境电商运营，也喜欢用数据解决具体问题。',

  about:
    '我在香港学习，对海外销售、跨境电商和 AI 应用很感兴趣。' +
    '我喜欢把模糊的需求拆成能被验证的小问题，再用产品和数据一步步做出可用的东西——' +
    '不管是让 AI 先听懂用户再推荐，还是用小范围的测试判断一个单品值不值得继续投入。',

  // 联系方式 —— 集中在此维护。留空字符串或 null 的项会自动隐藏。
  contact: {
    email: '', // 例：'hi@example.com'
    resume: '', // 例：'/resume.pdf'
    github: '', // 例：'https://github.com/yourname'
    linkedin: '', // 例：'https://linkedin.com/in/yourname'
    wechat: '', // 例：'your-wechat-id'
    note: '邮箱、简历文件与社交账号待补充。',
  },

  nav: [
    { id: 'works', label: '作品' },
    { id: 'about', label: '关于' },
    { id: 'contact', label: '联系' },
  ],
}

/**
 * 作品票券。cover 是封面上画的原生矢量小图标（纯 SVG，不依赖外部图片）。
 * result 留空时展示「待补资料」，避免虚构数据。
 */
export const projects = [
  {
    slug: 'tingxuan-ai',
    name: '听选 AI',
    subtitle: '耳机导购网站',
    tag: 'AI 产品 · 导购',
    theme: 'lake', // lake | lilac | yellow
    cover: 'headphone',
    blurb: '让 AI 先听懂预算和使用场景，再推荐合适的耳机。',
    problem:
      '买耳机时，用户面对大量型号和参数不知道怎么选。常见的导购页往往直接甩出商品列表，' +
      '没有先搞清楚预算和实际使用场景，推荐自然不贴需求。',
    approach: [
      '让助手先了解预算和使用场景（通勤、运动、游戏、是否需要降噪等），再据此推荐商品，而不是一上来就罗列。',
      '设计「场景按钮」，让用户一键选择常见使用场景，降低输入门槛。',
      '保留自由输入框，支持多轮追问，例如「预算再加一点有没有更好的」「主要在地铁上戴」。',
    ],
    result: '', // 效果数据待补
    resultPending: true,
  },
  {
    slug: 'shopee-pets',
    name: 'Shopee 马来西亚站',
    subtitle: '宠物用品店',
    tag: '跨境电商 · 运营',
    theme: 'lilac',
    cover: 'cat',
    blurb: '用选品、主图和促销测试，判断一个单品值不值得继续投入。',
    problem:
      '宠物用品店想在马来西亚市场做小型猫爬架，需要判断哪些款式值得做、' +
      '页面怎么展示、促销怎么投，而不是凭感觉铺货。',
    approach: [
      '围绕小型猫爬架做选品，先框定适合当地客群和物流的款式范围。',
      '制作并测试不同主图，比较哪类视觉更能说明产品的尺寸与使用方式。',
      '设计促销方案做小范围测试，用广告花费和单品利润来判断是否值得继续投入，而不是只看销量。',
    ],
    result: '',
    resultPending: true,
  },
  {
    slug: 'campus-tour',
    name: '校园参观路线优化',
    subtitle: '运筹课程项目',
    tag: '数据 · 建模',
    theme: 'yellow',
    cover: 'route',
    blurb: '把建筑可达关系与步行时间转成模型，比较不同参观路线。',
    problem:
      '校园参观需要在固定的起点和终点之间安排路线，希望用有限的步行时间看更多、更顺路的建筑。',
    approach: [
      '把建筑之间的可达关系和步行时间抽象成网络模型，而不是凭经验手排路线。',
      '在固定起终点的约束下，用 Excel Solver 求解并比较不同的参观路线。',
    ],
    result: '',
    resultPending: true,
  },
]
