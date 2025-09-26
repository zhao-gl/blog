# API 参考

## Markdown CMS API

项目使用自定义的 Markdown CMS 实现内容管理。

### 数据类型

#### BlogPost
```typescript
interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishDate?: string;
    featuredImage?: Asset;
    author?: Author;
  };
}
```

#### Page
```typescript
interface Page {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    content: string;
  };
}
```

#### Asset
```typescript
interface Asset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
}
```

### 函数参考

#### getBlogPosts()
获取所有博客文章列表

```typescript
function getBlogPosts(): Promise<BlogPost[]>
```

#### getBlogPostBySlug(slug: string)
根据 slug 获取单篇博客文章

```typescript
function getBlogPostBySlug(slug: string): Promise<BlogPost | null>
```

#### getPages()
获取所有页面列表

```typescript
function getPages(): Promise<Page[]>
```

#### getPageBySlug(slug: string)
根据 slug 获取单个页面

```typescript
function getPageBySlug(slug: string): Promise<Page | null>
```