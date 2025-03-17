import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: '技术博客',
    description: 'Vue3 + Vite + Vitepress 技术博客',
    appearance: 'dark',

    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/blog-1' },
            { text: '书籍', link: '/read/read-1' },
        ],

        sidebar: {
            '/blog/': [
                {
                    text: '技术文章',
                    items: [
                        { text: 'Vue2', link: '/blog/blog-1' },
                        { text: 'Vue3', link: '/blog/blog-1' },
                        { text: 'Vite优化', link: '/blog/blog-2' }
                    ]
                }
            ],
            '/read/': [
                {
                    text: '阅读书籍',
                    items: [
                        { text: '高性能JavaScript', link: '/read/read-1' },
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
