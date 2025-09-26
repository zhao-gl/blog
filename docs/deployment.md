# 部署指南

## 部署选项

### Vercel (推荐)

1. 将项目推送到 GitHub/GitLab/Bitbucket
2. 登录 Vercel 并导入项目
3. Vercel 将自动检测 Next.js 项目并配置部署设置
4. 点击部署按钮

### 手动部署

#### 构建项目

```bash
npm run build
```

#### 启动生产服务器

```bash
npm start
```

## 环境变量

项目可能需要以下环境变量：

```env
# 如果需要恢复 Contentful CMS 支持
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## 静态资源

静态资源存储在 `public/` 目录中，部署时会自动包含。

## 性能优化

### 图片优化

Next.js 提供了内置的图片优化功能：

```jsx
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="描述文字"
  width={500}
  height={300}
/>
```

### 代码分割

Next.js 自动进行代码分割，每个页面只加载必要的代码。

### 预渲染

项目使用静态生成 (SSG) 预渲染页面，提供最佳的加载性能。