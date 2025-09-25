import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 内容目录路径
const contentDirectory = path.join(process.cwd(), 'content');

// 获取所有博客文章
export const getBlogPosts = async () => {
  const blogDirectory = path.join(contentDirectory, 'blog');
  
  // 确保目录存在
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  
  // 读取目录中的所有文件
  const filenames = fs.readdirSync(blogDirectory);
  
  // 过滤出 Markdown 文件
  const markdownFiles = filenames.filter(filename => filename.endsWith('.md'));
  
  // 解析每个 Markdown 文件
  const posts = markdownFiles.map(filename => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // 使用 gray-matter 解析 frontmatter 和内容
    const { data, content } = matter(fileContents);
    
    return {
      sys: {
        id: data.slug || filename.replace('.md', ''),
        createdAt: data.publishDate || new Date().toISOString(),
        updatedAt: data.publishDate || new Date().toISOString(),
      },
      fields: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: content,
        featuredImage: data.featuredImage ? {
          fields: {
            file: {
              url: data.featuredImage,
              details: {
                image: {
                  width: 0,
                  height: 0
                }
              }
            }
          }
        } : undefined,
        author: data.author ? {
          fields: {
            name: data.author.name,
            bio: data.author.bio,
            avatar: data.author.avatar ? {
              fields: {
                file: {
                  url: data.author.avatar
                }
              }
            } : undefined
          }
        } : undefined,
        tags: data.tags,
        publishDate: data.publishDate
      }
    };
  });
  
  // 按创建日期排序（最新的在前面）
  return posts.sort((a, b) => 
    new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime()
  );
};

// 根据 slug 获取单个博客文章
export const getBlogPostBySlug = async (slug: string) => {
  const blogDirectory = path.join(contentDirectory, 'blog');
  
  // 确保目录存在
  if (!fs.existsSync(blogDirectory)) {
    return null;
  }
  
  // 读取目录中的所有文件
  const filenames = fs.readdirSync(blogDirectory);
  
  // 查找匹配的文件
  const filename = filenames.find(name => 
    name === `${slug}.md` || 
    (matter.read(path.join(blogDirectory, name)).data.slug === slug)
  );
  
  if (!filename) {
    return null;
  }
  
  const filePath = path.join(blogDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // 使用 gray-matter 解析 frontmatter 和内容
  const { data, content } = matter(fileContents);
  
  return {
    sys: {
      id: data.slug || filename.replace('.md', ''),
      createdAt: data.publishDate || new Date().toISOString(),
      updatedAt: data.publishDate || new Date().toISOString(),
    },
    fields: {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: content,
      featuredImage: data.featuredImage ? {
        fields: {
          file: {
            url: data.featuredImage,
            details: {
              image: {
                width: 0,
                height: 0
              }
            }
          }
        }
      } : undefined,
      author: data.author ? {
        fields: {
          name: data.author.name,
          bio: data.author.bio,
          avatar: data.author.avatar ? {
            fields: {
              file: {
                url: data.author.avatar
              }
            }
          } : undefined
        }
      } : undefined,
      tags: data.tags,
      publishDate: data.publishDate
    }
  };
};

// 获取所有页面
export const getPages = async () => {
  const pagesDirectory = path.join(contentDirectory, 'pages');
  
  // 确保目录存在
  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }
  
  // 读取目录中的所有文件
  const filenames = fs.readdirSync(pagesDirectory);
  
  // 过滤出 Markdown 文件
  const markdownFiles = filenames.filter(filename => filename.endsWith('.md'));
  
  // 解析每个 Markdown 文件
  return markdownFiles.map(filename => {
    const filePath = path.join(pagesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // 使用 gray-matter 解析 frontmatter 和内容
    const { data, content } = matter(fileContents);
    
    return {
      sys: {
        id: data.slug || filename.replace('.md', ''),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      fields: {
        title: data.title,
        slug: data.slug,
        content: content,
        featuredImage: data.featuredImage ? {
          fields: {
            file: {
              url: data.featuredImage,
              details: {
                image: {
                  width: 0,
                  height: 0
                }
              }
            }
          }
        } : undefined,
      }
    };
  });
};

// 根据 slug 获取单个页面
export const getPageBySlug = async (slug: string) => {
  const pagesDirectory = path.join(contentDirectory, 'pages');
  
  // 确保目录存在
  if (!fs.existsSync(pagesDirectory)) {
    return null;
  }
  
  // 读取目录中的所有文件
  const filenames = fs.readdirSync(pagesDirectory);
  
  // 查找匹配的文件
  const filename = filenames.find(name => 
    name === `${slug}.md` || 
    (matter.read(path.join(pagesDirectory, name)).data.slug === slug)
  );
  
  if (!filename) {
    return null;
  }
  
  const filePath = path.join(pagesDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // 使用 gray-matter 解析 frontmatter 和内容
  const { data, content } = matter(fileContents);
  
  return {
    sys: {
      id: data.slug || filename.replace('.md', ''),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    fields: {
      title: data.title,
      slug: data.slug,
      content: content,
      featuredImage: data.featuredImage ? {
        fields: {
          file: {
            url: data.featuredImage,
            details: {
              image: {
                width: 0,
                height: 0
              }
            }
          }
        }
      } : undefined,
    }
  };
};