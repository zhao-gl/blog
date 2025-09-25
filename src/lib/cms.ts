import { createClient } from 'contentful';

// Contentful 配置
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || '';

// 创建 Contentful 客户端
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  host: process.env.NODE_ENV === 'development' ? 'preview.contentful.com' : 'cdn.contentful.com',
});

// 获取所有博客文章
export const getBlogPosts = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost', // 这应该与你在 Contentful 中创建的内容模型 ID 匹配
      order: ['-sys.createdAt'],
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// 根据 slug 获取单个博客文章
export const getBlogPostBySlug = async (slug: string) => {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    });
    
    if (entries.items.length > 0) {
      return entries.items[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
};

// 获取所有页面
export const getPages = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'page', // 这应该与你在 Contentful 中创建的内容模型 ID 匹配
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
};

// 根据 slug 获取单个页面
export const getPageBySlug = async (slug: string) => {
  try {
    const entries = await client.getEntries({
      content_type: 'page',
      'fields.slug': slug,
    });
    
    if (entries.items.length > 0) {
      return entries.items[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching page by slug:', error);
    return null;
  }
};