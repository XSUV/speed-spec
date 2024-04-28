import { defineConfig } from 'vitepress';

const specTab = {
  text: '编码规范',
  items: [
    { text: 'HTML 编码规范', link: '/coding/html' },
    { text: 'CSS 编码规范', link: '/coding/css' },
    { text: 'JavaScript 编码规范', link: '/coding/javascript' },
    { text: 'Typescript 编码规范', link: '/coding/typescript' },
    { text: 'Node 编码规范', link: '/coding/node' },
    { text: '测试文档', link: '/coding/test' }
  ]
};

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
    search: {
      provider: 'local'
    },
    nav: [
      { text: '主页', link: '/' },
      specTab
    ],

    sidebar: [specTab],
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
