
import React from 'react';
import { Trophy, Award, Star, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const items = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Technical Head',
      org: 'GPT Infinity Forum',
      desc: 'I oversee technical planning, guide team members, and ensure smooth execution of projects'
    },
    {
      icon: <Trophy className="w-8 h-8 text-amber-500" />,
      title: 'Hackathon Finalist',
      org: 'Inter-College Hackathon 2025',
      desc: 'Selected as top 5 finalists among 30+ teams for an innovative health-tech solution.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Social Media Head',
      org: 'E-CELL',
      desc: 'I manage and grow the committee’s online presence across social platforms. I plan content, coordinate promotions for events,engaging communication with students.'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Achievements</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-slate-50 rounded-2xl inline-block mb-6 group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">{item.org}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
