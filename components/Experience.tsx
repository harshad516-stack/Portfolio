
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Work Experience</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 group-last:bg-transparent rounded-full"></div>
              
              {/* Dot */}
              <div className="absolute left-[-8px] top-0 w-5 h-5 bg-white border-4 border-blue-600 rounded-full z-10"></div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mt-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-500 text-sm font-medium border border-slate-100">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
