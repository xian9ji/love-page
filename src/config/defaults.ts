import type { Config } from './types';

const LOVE_DATE = '2024-08-02';
const MARRIAGE_DATE = '2024-05-20';

export const DEFAULT_CONFIG: Config = {
  boy: '小狗',
  girl: '宝宝',
  loveDate: LOVE_DATE,
  marriageDate: MARRIAGE_DATE,
  milestones: [
    { date: '2024-03-14', label: '婚礼', icon: '💍', story: '我们的婚礼纪念日。' },
    { date: MARRIAGE_DATE, label: '领证', icon: '💑', story: '我们的领证纪念日。' },
    { date: LOVE_DATE, label: '相恋', icon: '💕', story: '2024年8月2日 23:59:59，我们的相恋时刻。' },
  ],
  motto: '一屋两人，三餐四季',
  quotes: ['一屋两人，三餐四季'],
  music: {
    enabled: false,
    autoPlay: false,
    playMode: 'sequence',
    allowModeSwitch: true,
    startPolicy: 'first',
    volume: 0.7,
    rememberState: true,
    smartShuffleWindow: 3,
    tracks: [],
  },
  secretMessage: '感谢相遇，余生请多指教。♥',
  photos: [
    { url: '/love-page/photos/hong-kong-2024-02-01.jpg', caption: '港风 · 香港 · 2024年2月1日', href: '/love-page/travels/hong-kong-2024/' },
  ],
  googleAnalyticsId: '',
  siteUrl: 'https://xian9ji.github.io/love-page',
  siteName: '我们的时光',
  siteLocale: 'zh-CN',
  siteImage: '/og.png',
  siteLogo: '/og.png',
  seoDescription:
    '小狗与宝宝的时光纪念册 · 一屋两人，三餐四季。记录相恋、领证与婚礼的重要时刻。',
  shareTemplates: ['classic', 'minimal', 'romantic'],
  statsMode: 'hybrid',
  stats: [
    { label: '已记录旅行', value: 1, icon: '✈️' },
    { label: '共同爱好', value: 8, icon: '🎯' },
    { label: '纪念日', value: 2, icon: '💕' },
  ],
  wishes: [
    { text: '一起去冰岛看极光', done: false },
    { text: '每年拍一张合影', done: true },
    { text: '一起学一门新技能', done: false },
  ],
  timers: [
    { label: '相恋时光', icon: '💕', date: '2024-08-02T23:59:59+08:00' },
    { label: '婚姻时光', icon: '💍', date: MARRIAGE_DATE },
  ],
  includeDefaultAnniversaries: false,
  anniversaries: [
    {
      label: '相恋纪念日',
      icon: '💕',
      date: LOVE_DATE,
      easterEggTemplates: {
        soon: '💗 距离我们的{displayLabel}还有{gap}天，期待更多美好时光~',
        today: '💗 今天是我们的{displayLabel}，感谢陪伴，爱你如初！',
        celebrate: '{displayLabel}快乐！愿我们的爱永远甜蜜如初见~',
      },
    },
    {
      label: '结婚纪念日',
      icon: '💍',
      date: MARRIAGE_DATE,
      easterEggTemplates: {
        soon: '💍 {gap}天后就是{displayLabel}，一起憧憬下个纪念日~',
        today: '💍 今天是我们的{displayLabel}，感谢携手同行！',
        celebrate: '{displayLabel}快乐！愿此生执子之手，与子偕老。',
      },
    },
    {
      label: '婚礼纪念日',
      icon: '💍',
      date: '2024-03-14',
      easterEggTemplates: {
        soon: '💍 再过 {gap} 天就是{displayLabel}，期待下一次旅行~',
        today: '💍 今天就是{displayLabel}，纪念我们的婚礼！',
        celebrate: '{displayLabel}快乐，愿我们携手走过每个四季',
      },
    },
  ],
  anniversaryCountdownThreshold: 10,
  anniversarySortOrder: 'asc',
  loadingLabel: '正在为你准备...',
  defaultTheme: 'dark',
  sections: {
    todaySummary: true,
    stats: true,
    timeline: true,
    timers: true,
    anniversary: true,
    wishes: true,
    photoWall: true,
    themeToggle: true,
  },
  privacy: {
    privateMode: true,
    noIndex: true,
  },
  welcomeMessage: '欢迎来到我们的专属页面 ♥',
  enableWelcomeMessage: true,
  passwordConfig: {
    enabled: false,
    password: '',
    bruteForceProtection: {
      enabled: true,
      freeAttempts: 5,
      baseLockSeconds: 3,
      maxLockSeconds: 120,
      failureResetMinutes: 30,
    },
  },
};
