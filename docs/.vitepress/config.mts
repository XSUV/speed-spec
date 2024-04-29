import { defineConfig } from 'vitepress';

const specTab = {
  text: '编码规范',
  items: [
    { text: '通用编码规范', link: '/coding/common' },
    { text: 'HTML 编码规范', link: '/coding/html' },
    { text: 'CSS 编码规范', link: '/coding/css' },
    { text: 'JavaScript 编码规范', link: '/coding/javascript' },
    { text: 'Typescript 编码规范', link: '/coding/typescript' },
    { text: 'Node 编码规范', link: '/coding/node' },
  ]
};
const npmTab = {
  text: 'npm包',
  items: [
    { text: 'commitlint-config-speed', link: '/npm/commitlint' },
    { text: 'markdownlint-config-speed', link: '/npm/markdownlint' },
    { text: 'stylelint-config-speed', link: '/npm/stylelint' },
    { text: 'eslint-config-speed', link: '/npm/eslint' },
    { text: 'prettier-config-speed', link: '/npm/prettier' },
    { text: 'speed-lint', link: '/npm/cli' },
  ]
}
const engineeringTab = {
  text: '工程规范',
  items: [
    { text: 'Git 规范', link: '/engineering/git' },
    { text: '文档规范', link: '/engineering/doc' },
    { text: 'CHANGELOG 规范', link: '/engineering/changelog' },
  ],
}

export default defineConfig({
  title: 'speed-spec',
  description: '前端编码规范化',
  base: '/speed-spec/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    theme: {
      dark: 'dracula',
      light: 'github-light'
    }
  },
  themeConfig: {
    returnToTopLabel: '返回顶部',
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新时间',
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '主页', link: '/' },
      specTab,
      engineeringTab,
      npmTab,
    ],

    sidebar: [specTab, engineeringTab, npmTab],
    editLink: {
      pattern: 'https://github.com/xsuv/speed-spec/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xsuv'
      }
    ]
  }
});
