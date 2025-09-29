import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-28">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            你好，我是<span className="text-indigo-200">张三</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-indigo-100">
            前端开发工程师 & UI/UX 设计师
          </p>
          <p className="text-lg mb-8 max-w-lg text-indigo-50">
            我专注于创造美观、响应迅速且用户友好的网页应用。拥有5年以上的前端开发经验，擅长React、Vue和现代JavaScript技术栈。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg">
              查看我的作品
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              下载简历
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
              <span className="text-xl font-semibold">个人头像</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero