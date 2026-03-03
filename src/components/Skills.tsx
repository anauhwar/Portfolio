import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-slate-950/50 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
            <Code2 className="text-emerald-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Core Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-sm rounded-lg border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
