# 常见问题

## 内容管理

### 如何添加新的博客文章？

1. 在 `content/blog/` 目录中创建新的 Markdown 文件
2. 添加 YAML frontmatter：
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

### 如何修改关于页面？

编辑 `content/pages/about.md` 文件，修改其内容和 frontmatter。

### 图片不显示怎么办？

确保图片路径正确：
- 本地图片应放在 `public/` 目录中
- 在 Markdown 中使用相对路径引用图片
- 检查图片文件名和扩展名是否正确

### 如何自定义网站样式？

1. 修改 `src/app/globals.css` 文件
2. 添加自定义 CSS 类
3. 使用 Tailwind CSS 的配置文件进行主题定制

## 开发问题

### 内容更新后没有显示怎么办？

1. 确保保存了 Markdown 文件
2. 检查开发服务器是否正在运行
3. 刷新浏览器页面
4. 检查控制台是否有错误信息

### 如何添加新的页面？

1. 在 `src/app/` 目录中创建新的页面文件夹
2. 在文件夹中创建 `page.tsx` 文件
3. 实现页面组件
4. 如果需要，添加到导航中

### 如何恢复 Contentful CMS 支持？

1. 安装 Contentful 依赖：
   ```bash
   npm install contentful
   ```
2. 恢复 `src/lib/cms.ts` 文件中的 Contentful 配置
3. 更新页面组件以支持两种 CMS 切换