import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: '技术博客',
    description: 'Vue3 + Vite + Vitepress 技术博客',
    appearance: 'dark',

    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blogs/blog-1' },
            { text: '书籍', link: '/books/book-1' },
        ],

        sidebar: {
            '/blogs/': [
                {
                    text: '技术文章',
                    items: [
                        { text: '深入解析Vue2响应式原理', link: '/blogs/blog-1' },
                        { text: '解构Vue3响应式系统', link: '/blogs/blog-2' },
                        { text: '性能优化：提升用户体验的关键', link: '/blogs/blog-5' },
                        { text: 'Vite优化', link: '/blogs/blog-5' }
                    ]
                }
            ],
            '/books/': [
                {
                    text: '阅读书籍',
                    items: [
                        { text: 'JavaScript权威指南（第7版）', link: '/books/book-1' },
                        { text: 'JavaScript高级程序设计', link: '/books/book-2' },
                        { text: 'Vue.js设计与实现', link: '/books/book-3' },
                        { text: '高性能JavaScript', link: '/books/book-4' },
                    ]
                }
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Zhao-GL' }
        ],

        footer: {
            message: 'MIT Licensed',
            copyright: 'Copyright © 2024-present ZhaoGL'
        }
    },

    markdown: {
        lineNumbers: false
    }
})
