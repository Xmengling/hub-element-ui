module.exports = {
  title: 'Mooc-UI',
  description: 'Just playing around',
  base: "/moocUI/",
  themeConfig: {
    nav: [
      { text: '组件', link: '/' },
      { text: 'Github', link: 'https://github.com/Zack921/moocUI' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
    ],
    sidebar: [
      '/', 
      '/componentDocs/card',
      '/componentDocs/avatar',
    ]
  },
  plugins: ['demo-container'], // 配置插件
}