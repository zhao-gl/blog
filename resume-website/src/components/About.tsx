import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
          关于我
          <span className="block w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-sm"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-600">头像</span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">张三</h3>
            <p className="text-xl text-indigo-600 mb-6">前端开发工程师</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              我是一名热爱技术的前端开发工程师，拥有5年以上的Web开发经验。
              专注于创建用户友好的界面和高性能的Web应用程序。
              我热衷于学习新技术，并致力于不断提升自己的技能。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex">
                <strong className="text-gray-700 mr-2">年龄:</strong>
                <span className="text-gray-600">28岁</span>
              </div>
              <div className="flex">
                <strong className="text-gray-700 mr-2">邮箱:</strong>
                <span className="text-gray-600">zhangsan@example.com</span>
              </div>
              <div className="flex">
                <strong className="text-gray-700 mr-2">电话:</strong>
                <span className="text-gray-600">138-0000-0000</span>
              </div>
              <div className="flex">
                <strong className="text-gray-700 mr-2">地址:</strong>
                <span className="text-gray-600">北京市朝阳区</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg">
              下载简历
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About