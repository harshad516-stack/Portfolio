
import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-500 max-w-xl mx-auto pt-2">
            A curated selection of my technical work, showcasing problem-solving and full-stack implementation.
          </p>
        </div>

        <div className="masonry-grid">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="masonry-item group relative bg-slate-50 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/20 backdrop-blur-md rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a 
                      href={project.github} 
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      // href="#" 
                      // className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {/* <ExternalLink className="w-5 h-5" /> */}
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Info Overlay (Visible when not hovering on mobile if needed) */}
              <div className="p-6 md:hidden">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                      {t}
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

export default Projects;
