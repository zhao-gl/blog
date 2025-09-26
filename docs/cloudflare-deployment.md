# Cloudflare Pages 部署指南

本指南将介绍如何将 Next.js 静态网站部署到 Cloudflare Pages。

## 准备工作

1. 确保已安装 `@cloudflare/next-on-pages` 依赖：
   ```bash
   pnpm add -D @cloudflare/next-on-pages
   ```

2. 确保项目根目录下有 `wrangler.toml` 配置文件。

## 本地预览

在本地预览 Cloudflare Pages 部署效果：

```bash
pnpm run pages:preview
```

## 部署到 Cloudflare Pages

### 方法一：使用命令行部署

1. 首先构建项目：
   ```bash
   pnpm run pages:build
   ```

2. 部署到 Cloudflare Pages：
   ```bash
   pnpm run pages:deploy
   ```

### 方法二：通过 GitHub 集成部署

1. 将代码推送到 GitHub 仓库
2. 在 Cloudflare Dashboard 中连接 GitHub 仓库
3. 配置构建设置：
   - 构建命令：`pnpm run pages:build`
   - 输出目录：`.vercel/output/static`
4. 触发部署

## 环境变量配置

在 `wrangler.toml` 中配置环境变量：

```toml
[env.production.vars]
NEXTAUTH_URL = "https://your-domain.com"
NEXTAUTH_SECRET = "your-secret-key"
# 添加其他环境变量
```

也可以在 Cloudflare Dashboard 的项目设置中配置环境变量。

## 注意事项

1. 确保 `wrangler.toml` 文件中的 `compatibility_date` 设置为当前日期或最近的日期
2. 如果使用了特定的 Node.js API，确保在 `compatibility_flags` 中添加 `nodejs_compat`
3. 部署后可能需要几分钟时间才能在全球范围内生效