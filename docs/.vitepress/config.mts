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
        text: 'Foundation',
        items: [
          {
            text: 'Angular Fundamentals',
            collapsed: false,
            items: [
              { text: 'Giới thiệu', link: '/foundation/' },
              { text: 'Components & Templates', link: '/foundation/components' },
              { text: 'Directives & Pipes', link: '/foundation/directives' },
              { text: 'Dependency Injection', link: '/foundation/dependency-injection' }
            ]
          },
        ]
      },
      {
        text: 'Real World',
        items: [
          {
            text: 'Ứng dụng thực tế',
            collapsed: false,
            items: [
              { text: 'Tổng quan', link: '/real-world/' },
              { text: 'Routing & Navigation', link: '/real-world/routing' },
              { text: 'Forms (Template/Reactive)', link: '/real-world/forms' },
              { text: 'HTTP Client & RxJS', link: '/real-world/http-rxjs' }
            ]
          }
        ]
      },
      {
        text: 'Interview Ready',
        items: [
          {
            text: 'Kiến thức nâng cao',
            collapsed: false,
            items: [
              { text: 'Tổng quan', link: '/interview-ready/' },
              { text: 'Change Detection', link: '/interview-ready/change-detection' },
              { text: 'Signals', link: '/interview-ready/signals' },
              { text: 'Standalone Architecture', link: '/interview-ready/standalone' }
            ]
          },
          { text: 'Câu hỏi & Giải đáp', link: '/questions/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/baobao0303/Interview_Angular' }
    ]
  }
})
