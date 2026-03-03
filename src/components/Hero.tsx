import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ChevronDown, Download, Terminal, Cloud, Database, Server, Activity } from 'lucide-react';

const CloudSyncAnimation = () => (
  <div className="relative w-full max-w-md aspect-square flex items-center justify-center hidden lg:flex">
    {/* Glowing background orb */}
    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] animate-pulse" />
    
    {/* Central Cloud */}
    <motion.div 
      animate={{ y: [-15, 15, -15] }} 
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 bg-slate-900/80 backdrop-blur-xl p-8 rounded-full border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
    >
      <Cloud size={80} className="text-blue-400" />
    </motion.div>
    
    {/* Orbit 1 */}
    <motion.div 
      animate={{ rotate: 360 }} 
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute inset-12 border border-dashed border-slate-700/50 rounded-full"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 p-3 rounded-full text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
        <Database size={24} />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 border border-slate-700 p-3 rounded-full text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
        <Server size={24} />
      </div>
    </motion.div>

    {/* Orbit 2 */}
    <motion.div 
      animate={{ rotate: -360 }} 
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-slate-800/50 rounded-full"
    >
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-slate-900 border border-slate-700 p-3 rounded-full text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
        <Activity size={24} />
      </div>
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-slate-900 border border-slate-700 p-3 rounded-full text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        <Terminal size={24} />
      </div>
    </motion.div>
  </div>
);

export const Hero: React.FC = () => {
  const handleScroll = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 z-10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            <Terminal size={14} />
            {/* <span>System Online</span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg"
          >
            {resumeData.basics.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-medium mb-8"
          >
            {resumeData.basics.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            {resumeData.basics.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleScroll}
              className="px-6 py-3 bg-white text-slate-950 font-medium rounded-lg hover:bg-slate-200 transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Experience
              <ChevronDown size={18} />
            </button>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Akash_Nauhwar_Resume.pdf"
              className="px-6 py-3 bg-slate-800/50 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-800 transition-all hover:scale-105 flex items-center gap-2 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <CloudSyncAnimation />
        </motion.div>
      </div>
    </section>
  );
};
