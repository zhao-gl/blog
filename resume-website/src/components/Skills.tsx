import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const Skills: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current)
      
      const option = {
        radar: {
          indicator: [
            { name: 'HTML/CSS', max: 100 },
            { name: 'JavaScript', max: 100 },
            { name: 'React', max: 100 },
            { name: 'Vue', max: 100 },
            { name: 'Node.js', max: 100 },
            { name: 'UI/UX设计', max: 100 }
          ],
          splitNumber: 5,
          axisName: {
            color: '#666',
            fontSize: 14
          },
          axisLine: {
            lineStyle: {
              color: '#ddd'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#ddd'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(255, 255, 255, 0.2)', 'rgba(200, 200, 200, 0.2)']
            }
          }
        },
        series: [{
          type: 'radar',
          data: [{
            value: [95, 90, 85, 75, 70, 80],
            name: '技能水平',
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                { color: 'rgba(102, 126, 234, 0.8)', offset: 0 },
                { color: 'rgba(118, 75, 162, 0.8)', offset: 1 }
              ])
            },
            lineStyle: {
              color: '#667eea'
            },
            symbol: 'circle',
            symbolSize: 6
          }]
        }]
      }
      
      chart.setOption(option)
      
      const handleResize = () => {
        chart.resize()
      }
      
      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('resize', handleResize)
        chart.dispose()
      }
    }
  }, [])

  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Vue', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'UI/UX设计', level: 80 }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
          技能
          <span className="block w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-sm"></span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div ref={chartRef} style={{ width: '100%', height: '400px' }} className="bg-white p-6 rounded-xl shadow-lg"></div>
          </div>
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="font-medium text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills