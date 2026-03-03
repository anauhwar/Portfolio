import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 px-6 relative z-10 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{resumeData.basics.name}</h2>
          <p className="text-slate-400">{resumeData.basics.title}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <Mail size={18} />
            <span className="text-sm">{resumeData.basics.email}</span>
          </a>
          <div className="flex items-center gap-2 text-slate-400">
            <Phone size={18} />
            <span className="text-sm">{resumeData.basics.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin size={18} />
            <span className="text-sm">{resumeData.basics.location}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <a href={`https://${resumeData.basics.links[0].url}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <Linkedin size={20} />
          </a>
          <a href={`https://${resumeData.basics.links[1].url}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-800/50 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
      </div>
    </footer>
  );
};

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="flex items-center gap-1 p-1.5 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeSection === item.id
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
