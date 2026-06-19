
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm mb-4">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
          Available for Opportunities
        </div>

        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tight">
          Harshad Krus<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">hna Salunke</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          B.E IT Student <span className="text-slate-300 px-2">|</span> Aspiring Software Developer
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-12">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all border border-transparent hover:border-blue-100"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce text-slate-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
