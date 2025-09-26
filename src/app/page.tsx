import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '../lib/markdown-cms';

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">我的个人博客</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            欢迎来到我的个人网站，在这里我会分享技术文章、生活感悟和项目经验。
          </p>
        </header>

        <main>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">最新文章</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.sys.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {post.fields.featuredImage && (
                    <div className="h-48 overflow-hidden">
                      <Image 
                        src={post.fields.featuredImage.fields.file.url} 
                        alt={post.fields.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href={`/posts/${post.fields.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.fields.title}
                      </Link>
                    </h3>
                    {post.fields.excerpt && (
                      <p className="text-gray-600 mb-4">{post.fields.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.fields.publishDate 
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
                      {post.fields.author && (
                        <span className="text-sm text-gray-700">
                          作者: {post.fields.author.fields.name}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              我是一名热爱技术的开发者，专注于前端开发和用户体验设计。
              在这里我会分享我的技术心得和项目经验。
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              了解更多
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
