# 构建指南

## 构建配置

本项目已配置 Next.js 将构建输出到 `build` 目录，而不是默认的 `.next` 目录。

### 配置详情

在 `next.config.ts` 中的配置：

```ts
const nextConfig: NextConfig = {
  // 配置构建输出目录
  distDir: 'build',
};
```

## 构建命令

### 开发模式
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 启动生产服务器
```bash
npm run start
```

## 构建目录结构

构建完成后，将在项目根目录下生成 `build` 目录，包含以下内容：

- `BUILD_ID` - 构建标识符
- `static/` - 静态资源文件
- `server/` - 服务器端渲染文件
- `prerender-manifest.json` - 预渲染页面清单
- `routes-manifest.json` - 路由清单

## 部署说明

1. 运行 `npm run build` 生成构建文件
2. 将 `build` 目录中的静态文件部署到任何静态网站托管服务（如 Vercel、Netlify、GitHub Pages 等）

## 注意事项

- `build` 目录已被添加到 `.gitignore` 中，不会被提交到版本控制系统
- 构建过程中可能会出现 DLL 警告，但这不影响构建结果
- 此配置适用于静态网站部署，无需服务器环境