
import React from 'react';
import { BookOpen, Code, Globe, Cpu } from 'lucide-react';
import hks from '../public/images/hks.jpeg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <img 
   
              src="../public/images/hks.jpeg" 
              alt="HarshadSalunke"  
              className="relative rounded-3xl object-cover w-full h-[500px] shadow-2xl"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
             I am an Information Technology engineering student with a strong interest in web and software development. I have hands-on experience in building responsive applications using HTML, CSS, JavaScript, React, and Node.js. I focus on writing clean, maintainable code and creating user-friendly interfaces. I enjoy solving real-world problems through technology and continuously improving my technical skills. I am seeking opportunities to learn, contribute, and grow as a professional software developer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <BookOpen className="text-blue-600" />, title: 'Education', desc: 'B.E IT (Mumbai University)' },
                { icon: <Code className="text-indigo-600" />, title: 'Interests', desc: 'Web Dev & Python' },
                { icon: <Globe className="text-teal-600" />, title: 'Goal', desc: 'Software Devlopment Engineer' },
                { icon: <Cpu className="text-purple-600" />, title: 'Focus', desc: 'Full-Stack Development' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200">
              <h3 className="font-bold text-xl mb-2">Professional Summary</h3>
              <p className="text-blue-50 leading-relaxed">
                Detail-oriented developer with hands-on internship experience at Ignitech, specializing in automation and API integration. Committed to building scalable web applications and continuous learning in modern tech stacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
