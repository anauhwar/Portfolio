import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap, Award, Trophy } from 'lucide-react';

export const EducationAndAwards: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
              <GraduationCap className="text-orange-400" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 border-l border-slate-800"
              >
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <div className="text-slate-400 mt-1">{edu.institution}</div>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="text-slate-500 font-mono">{edu.dates}</span>
                  <span className="text-orange-400 font-medium bg-orange-500/10 px-2 py-0.5 rounded">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <Award className="text-yellow-400" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Certifications & Awards</h2>
          </motion.div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-slate-300 mb-4 flex items-center gap-2">
                <Award size={18} className="text-slate-500" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <span className="text-yellow-500 mt-1 text-[10px]">◆</span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-slate-300 mb-4 flex items-center gap-2">
                <Trophy size={18} className="text-slate-500" />
                Additional Achievements
              </h3>
              <ul className="space-y-3">
                {resumeData.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-slate-300 text-sm bg-slate-900/40 p-3 rounded-lg border border-slate-800"
                  >
                    <Trophy className="text-yellow-500 shrink-0 mt-0.5" size={14} />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
