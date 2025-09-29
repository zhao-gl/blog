import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的消息！我会尽快回复您。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
          联系我
          <span className="block w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-sm"></span>
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="contact-info">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              如果您有任何问题或想与我合作，请随时通过以下方式联系我：
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">📧</span>
                <span className="text-gray-700">邮箱: <a href="mailto:your.email@example.com" className="text-indigo-600 hover:underline">your.email@example.com</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">📱</span>
                <span className="text-gray-700">电话: <a href="tel:+8613800000000" className="text-indigo-600 hover:underline">+86 138-0000-0000</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">🌐</span>
                <span className="text-gray-700">网站: <a href="http://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">www.yourwebsite.com</a></span>
              </li>
            </ul>
          </div>
          <form className="contact-form bg-gray-50 p-8 rounded-xl shadow-md" onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="您的姓名"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="您的邮箱"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="mb-5">
              <textarea
                id="message"
                name="message"
                placeholder="您的消息"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              发送消息
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;