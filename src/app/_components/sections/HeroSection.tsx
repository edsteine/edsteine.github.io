"use client";

import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/app/_contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Helper to safely convert translation to string
  const tr = (key: string): string => String(t(key));

  // Generate deterministic particle positions to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      // Use index to create deterministic but varied positions
      const seed = i * 137.508; // Golden angle for good distribution
      return {
        left: ((seed % 100) + (i * 23) % 100) % 100,
        top: ((seed * 1.618) % 100 + (i * 17) % 100) % 100,
        duration: 3 + ((i * 7) % 20) / 10, // 3.0 - 5.0 seconds
        delay: (i * 11) % 40 / 20 // 0 - 2.0 seconds
      };
    });
  }, []);

  return (
    <section 
      id="hero" 
      className="relative text-center py-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white border-b border-gray-200 dark:border-gray-700 overflow-hidden" 
      role="banner" 
      aria-label="Hero section introducing Adil Ajdaa"
    >
      {/* Terminal-style background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-green-400 font-mono text-xs">
          <div>$ whoami</div>
          <div className="mt-1">adil.ajdaa</div>
          <div className="mt-2">$ ls -la /skills</div>
          <div className="mt-1 text-yellow-400">kotlin flutter react...</div>
        </div>
        <div className="absolute bottom-4 right-4 text-blue-400 font-mono text-xs text-right">
          <div>{`{ "years_experience": "9+" }`}</div>
          <div className="mt-1">{`{ "apps_built": "100k+ users" }`}</div>
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Profile avatar placeholder */}
        <div className="mb-8">
          <div className="mx-auto w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-white/20 shadow-lg flex items-center justify-center">
            <div className="text-white text-4xl font-bold">AA</div>
          </div>
        </div>

        <motion.h2 
          className="text-3xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-mono text-green-400 text-xl md:text-2xl">{'<'}</span>
          {tr('hero.name')}
          <span className="font-mono text-green-400 text-xl md:text-2xl">{' />'}</span>
        </motion.h2>

        <p className="mt-4 text-lg md:text-2xl font-semibold">
          <span className="text-green-400">$</span> {tr('hero.title')}
        </p>

        <p className="mt-2 text-sm md:text-lg opacity-90">
          <span className="text-blue-300">{`//`}</span> {tr('hero.subtitle')}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {tr('hero.cta.getInTouch')}
          </a>
          <a 
            href="/ADIL_AJDAA_Resume_Improved.pdf" 
            download 
            className="bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {tr('hero.cta.downloadCV')}
          </a>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <a 
            href="https://github.com/edsteine" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3-.123 1.005-.322 2.07-.483 3.135-.484 1.065.001 2.13.162 3.135.484 2.295-.2 3.3-.123 3.3-.123.645 1.653.24 2.873.105 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/edsteine" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.596V9.092h3.416v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.462 2.462 0 01-2.462-2.465c0-1.366 1.09-2.462 2.462-2.462 1.37 0 2.462 1.096 2.462 2.462 0 1.37-.092 2.465-2.462 2.465zM3.554 9.092V20.45h3.55V9.092H3.554zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;