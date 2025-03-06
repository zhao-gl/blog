import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '技术博客',
  description: 'Vue3 + Vite + Vitepress 技术博客',
  appearance: 'dark',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/post-1' },
      { text: '项目', link: '/projects' }
    ],
    
    sidebar: {
      '/blog/': [
        {
          text: '技术文章',
          items: [
            { text: 'Vue3实战', link: '/blog/post-1' },
            { text: 'Vite优化', link: '/blog/post-2' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' }
    ],
    
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2024-present Your Name'
    }
  },
  
  markdown: {
    lineNumbers: true
  }
})