# 入门指南

## 项目概述

这是一个使用 Next.js 和 Markdown CMS 构建的个人博客网站。该项目展示了如何使用现代化的前端技术构建一个功能完整的博客网站。

## 技术栈

- **Next.js 15** - React 框架，支持服务端渲染和静态生成
- **TypeScript** - JavaScript 的超集，提供类型安全
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Markdown** - 用于内容管理的轻量级标记语言
- **gray-matter** - 解析 Markdown frontmatter
- **react-markdown** - 渲染 Markdown 内容

## 安装步骤

1. 克隆项目仓库：
   ```bash
   git clone <repository-url>
   ```

2. 进入项目目录：
   ```bash
   cd blog
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

## 运行开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 上运行。

## 项目结构

```
blog/
├── content/          # Markdown 内容文件
│   ├── blog/         # 博客文章
│   └── pages/        # 页面内容
├── docs/             # 项目文档
├── public/           # 静态资源
├── src/              # 源代码
│   ├── app/          # 应用页面和路由
│   ├── components/   # React 组件
│   └── lib/          # 工具库和 CMS 集成
└── ...
```

## 内容管理

博客内容使用 Markdown 文件管理，存储在 `content` 目录中：

- `content/blog/` - 博客文章
- `content/pages/` - 页面内容

每个 Markdown 文件包含 YAML frontmatter 和内容主体。