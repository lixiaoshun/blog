const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

module.exports = {
  title: '诺米 博客',
  description: '不积跬步无以至千里',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' },], 
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css' },], 
    ['meta', { name: 'keywords', content: '博客，前端，代码，个人博客，学习，兴趣，BINGOBLOG' }]
  ],
  base: '/blog/dist/',
  dest: './dist',
  port: 8886,
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  extraWatchFiles: [
    './nav.js',
    './sidebar.js'
  ],
  themeConfig: {
    logo: '/logo.jpg',
    sidebarDepth: 2,
    smoothScroll: true,
    repo: 'lixiaoshun/blog',
    nav,
    sidebar,
    docsDir: 'docs',
    editLinks: false,
    lastUpdated: '更新时间',
  },
  plugins: [
    ["@vuepress/medium-zoom", true],
    ["@vuepress/back-to-top", true],
    ['vuepress-plugin-side-anchor']
  ],
}