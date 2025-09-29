import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} 张三的个人简历. 保留所有权利。</p>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">关于我</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors duration-300">技能</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors duration-300">经验</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">项目</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">联系</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer