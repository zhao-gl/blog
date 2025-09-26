import Image from 'next/image';
import { getPageBySlug } from '../../lib/markdown-cms';
import Markdown from 'react-markdown';

export default async function About() {
  const page = await getPageBySlug('about');
  
  if (!page) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">页面未找到</h1>
              <p className="text-gray-700">抱歉，关于页面的内容未找到。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{page.fields.title}</h1>
            
            {page.fields.featuredImage && (
              <div className="mb-8">
                <Image 
                  src={page.fields.featuredImage.fields.file.url} 
                  alt={page.fields.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            
            <div className="prose max-w-none">
              <Markdown>{page.fields.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}