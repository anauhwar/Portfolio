import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data';
import { Briefcase, ChevronDown, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Briefcase className="text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900/50 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-[1px] bg-slate-900/90 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-800/30 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <div className="text-slate-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-500 font-mono hidden sm:block">{exp.dates}</span>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/50">
                        <span className="text-sm text-slate-500 font-mono block sm:hidden mb-4">{exp.dates}</span>
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300">
                              <CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={16} />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
