# 开发指南

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

## 添加新内容

### 添加博客文章

1. 在 `content/blog/` 目录中创建新的 Markdown 文件
2. 使用以下格式添加 frontmatter：

```yaml
---
title: 文章标题
slug: article-slug
excerpt: 文章摘要
date: 2025-01-01
featuredImage: /path/to/image.jpg
---
```

3. 在 frontmatter 后添加文章内容

### 添加新页面

1. 在 `content/pages/` 目录中创建新的 Markdown 文件
2. 使用以下格式添加 frontmatter：

```yaml
---
title: 页面标题
slug: page-slug
---
```

3. 在 frontmatter 后添加页面内容

## 组件开发

### 创建新组件

1. 在 `src/components/` 目录中创建新的组件文件
2. 使用 TypeScript 和 React 编写组件
3. 导出组件以便在页面中使用

### 更新现有组件

1. 找到要更新的组件文件
2. 修改组件代码
3. 测试更改

## 样式设计

项目使用 Tailwind CSS 进行样式设计。要自定义样式：

1. 修改 `src/app/globals.css` 文件
2. 添加自定义 CSS 类
3. 使用 Tailwind 的配置文件进行主题定制

## CMS 集成

项目使用自定义的 Markdown CMS 实现内容管理：

- `src/lib/markdown-cms.ts` - Markdown CMS 实现
- `src/lib/types.ts` - TypeScript 类型定义

要扩展 CMS 功能：

1. 修改 `markdown-cms.ts` 文件
2. 添加新的解析逻辑
3. 更新类型定义