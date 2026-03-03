import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <FolderGit2 className="text-purple-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Key Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              <div className="absolute inset-[1px] bg-slate-900/80 backdrop-blur-xl rounded-2xl pointer-events-none border border-slate-800 group-hover:border-purple-500/30 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-slate-400 text-sm">{project.role}</div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono bg-slate-950/50 px-2 py-1 rounded border border-slate-800">
                    {project.dates}
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4 flex-grow">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-purple-500 mt-1.5 text-[10px]">■</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
