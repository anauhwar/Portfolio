/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { FloatingTechIcons } from './components/FloatingTechIcons';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationAndAwards } from './components/EducationAndAwards';
import { Footer, Navigation } from './components/Navigation';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <FloatingTechIcons />
          <Navigation />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <EducationAndAwards />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

