
import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Layers, Wrench, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    { name: 'Language', icon: <Code2 className="text-blue-500" /> },
    { name: 'Framework', icon: <Layers className="text-indigo-500" /> },
    { name: 'Tool', icon: <Wrench className="text-teal-500" /> },
    { name: 'Cloud', icon: <Database className="text-purple-500" /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Technical Arsenal</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{cat.name}s</h3>
              </div>

              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat.name).map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
