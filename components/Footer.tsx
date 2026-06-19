
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-slate-900">
            Harshad<span className="text-blue-600">.</span>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Harshad Salunke. All rights reserved.
            <span className="mx-2 hidden md:inline">|</span>
            Built with React & Tailwind CSS
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
