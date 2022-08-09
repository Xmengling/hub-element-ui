module.exports = {
  title: 'Hub-Element-UI',
  description: '基于element-ui二次封装的组件库',
  base: "/",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '📢组件库', link: '/quickstart' },
    ],
    sidebar: [ // 配置侧边栏部分
      {
        title: '快速上手',
        collapsable: false,
        children: [
          'quickstart.md',
        ],
      },
      {
        title: 'Data数据展示',
        collapsable: false,
        children: [
          'componentDocs/table.md',
          'componentDocs/pagination.md'
        ],
      },
      {
        title: '基础组件',
        collapsable: false,
        children: [
          'componentDocs/avatar.md',
          'componentDocs/get-code.md',
          'componentDocs/search.md',
          'componentDocs/date-picker.md',
          'componentDocs/date-picker-part.md'
        ],
      },
      {
        title: '业务组件',
        collapsable: false,
        children: [
          'componentDocs/search-box.md',
          'componentDocs/go-back.md'
        ],
      },
    ]
  },
  plugins: ['demo-container'], // 配置插件
}