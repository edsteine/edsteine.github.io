"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [isAboutCollapsed, setIsAboutCollapsed] = useState(true);

  return (
    <section 
      id="about" 
      className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" 
      aria-label="About Adil Ajdaa - Professional background and expertise"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        <span className="text-blue-600 dark:text-blue-400 font-mono text-lg">{'<'}</span>
        {t('about.title')}
        <span className="text-blue-600 dark:text-blue-400 font-mono text-lg">{' />'}</span>
      </h3>

      <div className="text-center max-w-4xl mx-auto text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className={`overflow-hidden transition-all duration-500 ${isAboutCollapsed ? 'max-h-0' : 'max-h-screen'}`}>
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border-l-4 border-blue-500">
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              {t('about.description')}
            </p>
          </div>

          <div className="mb-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-gray-700 dark:text-gray-300">Specialization Loading...</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-4 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">📱 Mobile Development</h5>
              <p className="text-sm text-green-700 dark:text-green-300">Native & Cross-platform solutions</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🗺️ Geospatial Tech</h5>
              <p className="text-sm text-blue-700 dark:text-blue-300">Advanced spatial data systems</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-4 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🏗️ Enterprise Architecture</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">Scalable system design</p>
            </div>
          </div>

          {/* Core Technical Excellence */}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-yellow-500 mr-2">⚡</span>
              Core Technical Excellence
            </h4>
          </div>

          <div className="grid gap-3 text-left mx-auto max-w-4xl mb-6">
            {t('about.highlights').map((highlight: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-l-4 border-green-500">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Professional Philosophy */}
          <div className="mt-6 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🎯</span>
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
          onClick={() => setIsAboutCollapsed(!isAboutCollapsed)}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md transform hover:scale-105 transition duration-300"
        >
          {isAboutCollapsed ? t('common.readMore') : t('common.readLess')}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;