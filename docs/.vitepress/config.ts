export default {
  title: "网站名称",
  // 格式是: /仓库名称
  base: "/vitepressDemo",
  markdown: {
    lineNumbers: true
  },
  // 主题配置
  themeConfig: {
    // 文档所在的文件夹
    docsDir: 'docs',
    // 头部nav
    nav: [
      { text: '哔哩哔哩', link: "https://space.bilibili.com/36036472" },
      // ...省略多个
    ],
    sidebar: {
      // 斜杠代表的是docs文件夹
      '/': [
        {
          text: "基础语法", children: [
            { text: "标题", link: "/document/文件路径不要后缀" }
          ]
        }
      ]
    }
  }
}