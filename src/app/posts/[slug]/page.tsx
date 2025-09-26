import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '../../../lib/markdown-cms';
import Markdown from 'react-markdown';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getBlogPostBySlug((await params).slug);
  
  if (!post) {
    return {
      title: '文章未找到',
    };
  }
  
  return {
    title: post.fields.title,
    description: post.fields.excerpt || post.fields.title,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          返回首页
        </Link>
        
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {post.fields.featuredImage && (
            <div className="h-64 md:h-96 overflow-hidden">
              <Image 
                src={post.fields.featuredImage.fields.file.url} 
                alt={post.fields.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.fields.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                {post.fields.author && (
                  <div className="flex items-center">
                    {post.fields.author.fields.avatar && (
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image 
                          src={post.fields.author.fields.avatar?.fields?.file?.url || '/globe.svg'} 
                          alt={post.fields.author.fields.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <span>作者: {post.fields.author.fields.name}</span>
                  </div>
                )}
                
                <span>
                  发布于 {post.fields.publishDate 
                    ? new Date(post.fields.publishDate).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                    : new Date(post.sys.createdAt).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                  }
                </span>
                
                {post.fields.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.fields.tags.map((tag: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>
            
            <div className="prose max-w-none">
              <Markdown>{post.fields.content}</Markdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}