"use client";

import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import React, { useState } from 'react';

import SpecializationCard from '@/domains/about/components/SpecializationCard';


const ABOUT_CONFIG = {
  animation: {
    expandTransition: 'transition-all duration-500',
    buttonTransition: 'transition duration-300',
    iconTransition: 'transition-transform duration-300'
  },
  layout: {
    maxWidth: 'max-w-6xl',
    cardMaxWidth: 'max-w-4xl',
    gridCols: 'md:grid-cols-3'
  }
} as const;

const SECTION_CLASSES = {
  container: "max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
  title: "text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white",
  content: "text-center max-w-4xl mx-auto text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700",
  description: "mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border-l-4 border-blue-500",
  specializationGrid: "grid md:grid-cols-3 gap-4 mb-6",
  expandableContent: "overflow-hidden transition-all duration-500",
  button: "mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md transform hover:scale-105 transition duration-300"
} as const;

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [showFullAbout, setShowFullAbout] = useState(false);
  
  
  const tr = (key: string): string => String(t(key));
  
  
  const specializationCards = [
    {
      id: 1,
      title: 'Mobile Development',
      description: 'Expert in Android, Flutter & cross-platform solutions',
      icon: '📱',
      technologies: ['Kotlin', 'Flutter', 'Dart', 'Android SDK'],
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Backend Architecture',
      description: 'Scalable systems with Spring Boot & microservices',
      icon: '⚙️',
      technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'REST APIs'],
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Full Stack Development',
      description: 'End-to-end solutions with modern frameworks',
      icon: '🌐',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section 
      id="about" 
      className={SECTION_CLASSES.container}
      aria-label="About Adil Ajdaa - Professional background and expertise"
    >
      <h3 className={SECTION_CLASSES.title}>
        <span className="text-blue-600 dark:text-blue-400 font-mono text-lg">{'<'}</span>
        {tr('about.title')}
        <span className="text-blue-600 dark:text-blue-400 font-mono text-lg">{' />'}</span>
      </h3>

      <div className={SECTION_CLASSES.content}>
        {}
        <div className={SECTION_CLASSES.description}>
          <p className="leading-relaxed text-gray-800 dark:text-gray-200">
            {tr('about.description')}
          </p>
        </div>

        {}
        <div className={SECTION_CLASSES.specializationGrid}>
          {specializationCards.map((card) => (
            <SpecializationCard 
              key={card.id} 
              card={card} 
            />
          ))}
        </div>

        {}
        <div className={`${SECTION_CLASSES.expandableContent} ${showFullAbout ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>


          {}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              Core Technical Excellence
            </h4>
          </div>

          <div className="grid gap-3 text-left mx-auto max-w-4xl mb-6">
            {Array.isArray(t('about.highlights')) ? (t('about.highlights') as unknown as string[]).map((highlight: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-l-4 border-green-500">
                <svg className="w-4 h-4 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
              </div>
            )) : null}
          </div>

          {}
          <div className="mt-6 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-indigo-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L14 10.202a1 1 0 000-1.404l-4.445-2.63z" clipRule="evenodd"/>
              </svg>
              <h4 className="text-lg font-bold text-indigo-800 dark:text-indigo-200">Professional Philosophy</h4>
            </div>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200 text-center">
              <span className="font-mono text-purple-600 dark:text-purple-400">function</span> 
              <span className="font-mono text-blue-600 dark:text-blue-400">buildGreatSoftware</span><span className="text-gray-600">()</span> 
              <span className="text-gray-600">{' {'}</span><br/>
              <span className="ml-4 text-gray-700 dark:text-gray-300">return engineering.expertise + business.acumen + team.growth;</span><br/>
              <span className="text-gray-600">{'}'}</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowFullAbout(!showFullAbout)}
          className={SECTION_CLASSES.button}
        >
          <span className="flex items-center gap-2">
            {showFullAbout ? tr('common.readLess') : tr('common.readMore')}
            <svg 
              className={`w-4 h-4 ${ABOUT_CONFIG.animation.iconTransition} ${showFullAbout ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;