'use strict'

module.exports = {
  output: './README.md',
  template: './README_TEMPLATE.md',
  sortSnippetsByPrefix: false,
  snippets: [
    '## Wot Design 组件',
    {
      title: '### 基础组件',
      filePath: './snippets/components/basic.json'
    },
    {
      title: '### 导航组件',
      filePath: './snippets/components/interaction.json'
    },
    {
      title: '### 表单组件',
      filePath: './snippets/components/form.json'
    },
    {
      title: '### 交互组件',
      filePath: './snippets/components/interaction.json'
    },
    {
      title: '### 展示组件',
      filePath: './snippets/components/display.json'
    }
  ]
}
