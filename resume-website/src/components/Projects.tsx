import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "电商平台管理系统",
      description: "基于React和Ant Design构建的电商平台后台管理系统，包含商品管理、订单处理、用户管理等功能模块。",
      technologies: ["React", "Ant Design", "Redux", "Node.js"],
      image: "https://via.placeholder.com/600x400/4f46e5/ffffff?text=E-Commerce+Platform",
      link: "#"
    },
    {
      id: 2,
      title: "在线教育平台",
      description: "响应式在线教育网站，支持视频播放、在线测试、学习进度跟踪等功能。",
      technologies: ["Vue.js", "Element UI", "WebSocket", "MongoDB"],
      image: "https://via.placeholder.com/600x400/7c3aed/ffffff?text=Education+Platform",
      link: "#"
    },
    {
      id: 3,
      title: "移动端任务管理应用",
      description: "使用React Native开发的跨平台移动应用，帮助用户管理日常任务和待办事项。",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Task+Manager",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
          项目作品
          <span className="block w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-sm"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div className="project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" key={project.id}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  查看详情
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;