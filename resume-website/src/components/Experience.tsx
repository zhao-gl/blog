import React from 'react'

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      date: '2020年6月 - 至今',
      title: '高级前端工程师',
      company: '科技有限公司',
      description: '负责公司核心产品的前端开发工作，使用React和Vue框架构建高性能的Web应用。带领3人前端团队，参与产品架构设计和技术选型。'
    },
    {
      id: 2,
      date: '2018年3月 - 2020年5月',
      title: '前端工程师',
      company: '互联网公司',
      description: '参与多个项目的前端开发，使用Vue.js和Element UI构建用户界面。优化页面性能，提升用户体验。'
    },
    {
      id: 3,
      date: '2016年7月 - 2018年2月',
      title: '初级前端工程师',
      company: '软件开发公司',
      description: '负责维护公司官网和内部管理系统，使用HTML、CSS和JavaScript实现页面效果。学习并应用前端框架。'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
          工作经历
          <span className="block w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-sm"></span>
        </h2>
        <div className="relative">
          {/* 中间时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
          
          {experiences.map((exp, index) => (
            <div 
              className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              key={exp.id}
            >
              {/* 时间点 */}
              <div className="hidden md:flex md:w-1/2 justify-center">
                <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg z-10"></div>
              </div>
              
              {/* 内容 */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} md:mt-0 mt-4`}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-3">
                    {exp.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-indigo-600 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
              
              {/* 移动端时间点 */}
              <div className="md:hidden flex justify-center w-full mt-4">
                <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience