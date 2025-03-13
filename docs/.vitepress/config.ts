import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: '技术博客',
    description: 'Vue3 + Vite + Vitepress 技术博客',
    appearance: 'dark',

    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/post-1' },
            { text: '项目', link: '/projects/post-3' }
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
            ],
            '/projects/': [
                {
                    text: '项目',
                    items: [
                        { text: 'Vue3实战', link: '/projects/post-3' },
                    ]
                }
             ]
        },

        socialLinks: [
            // { icon: 'github', link: 'https://github.com/yourusername' }
        ],

        outline: false,

        footer: {
            message: 'MIT Licensed',
            copyright: 'Copyright © 2024-present ZhaoGL'
        }
    },

    markdown: {
        lineNumbers: false
    }
})
