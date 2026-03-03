import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cloud, Database, Server, Network, Cpu, Shield, Activity, Code } from 'lucide-react';

export const FloatingTechIcons: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[5%] text-blue-500/10">
        <Cloud size={160} />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute top-[40%] right-[5%] text-purple-500/10">
        <Database size={120} />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-[70%] left-[10%] text-emerald-500/10">
        <Server size={140} />
      </motion.div>
      <motion.div style={{ y: y4 }} className="absolute top-[90%] right-[10%] text-orange-500/10">
        <Network size={180} />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute top-[130%] left-[15%] text-cyan-500/10">
        <Cpu size={150} />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute top-[160%] right-[15%] text-indigo-500/10">
        <Shield size={130} />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-[200%] left-[8%] text-rose-500/10">
        <Activity size={160} />
      </motion.div>
      <motion.div style={{ y: y4 }} className="absolute top-[230%] right-[8%] text-yellow-500/10">
        <Code size={140} />
      </motion.div>
    </div>
  );
};
