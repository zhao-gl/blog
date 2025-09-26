import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '../../lib/markdown-cms';

export default async function PostsPage() {
  const posts = await getBlogPosts();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">所有文章</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.fields.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/posts/${post.fields.slug}`} className="block">
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
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.fields.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.fields.excerpt}
                  </p>
                  
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
                          })}
                    </span>
                    
                    {post.fields.author && (
                      <span className="text-sm text-gray-500">
                        {post.fields.author.fields.name}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}