import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Angular Services Deep Dive",
  description: "Dự án ví dụ về Services và DI trong Angular",
  base: '/Interview_Angular/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kiến thức', link: '/#📚-những-kiến-thức-đã-học-được-từ-dự-án-này' }
    ],
    sidebar: [
      {
        text: 'Nội dung',
        items: [
          { text: 'Trang chủ', link: '/' },
          { text: 'Câu hỏi & Giải đáp', link: '/questions/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/baobao0303/Interview_Angular' }
    ]
  }
})
