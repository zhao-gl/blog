import React from 'react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            我的简历
          </h1>
        </div>
        <nav className="nav hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-indigo-500'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveSection(section)
                  }}
                >
                  {section === 'about' && '关于我'}
                  {section === 'skills' && '技能'}
                  {section === 'experience' && '经验'}
                  {section === 'projects' && '项目'}
                  {section === 'contact' && '联系我'}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header