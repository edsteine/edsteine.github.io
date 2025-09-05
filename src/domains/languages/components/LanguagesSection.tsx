"use client";

import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import React from 'react';

const LanguagesSection: React.FC = () => {
  const { t } = useLanguage();
  
  
  const tr = (key: string): string => String(t(key));

  return (
    <section 
      id="languages" 
      className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        {tr('languages.title')}
      </h3>
      
      <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400">
        <h4 className="text-2xl font-bold mb-4">{tr('languages.subtitle')}</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          {}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h5 className="text-xl font-semibold mb-2 flex items-center">
              <span className="mr-3">🇸🇦</span>
              العربية
            </h5>
            <p className="mb-2 font-bold text-green-700 dark:text-green-300">Native Speaker</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Mother tongue fluency</li>
              <li>Complete mastery of reading, writing, speaking</li>
              <li>Cultural and linguistic expertise</li>
            </ul>
          </div>

          {}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h5 className="text-xl font-semibold mb-2 flex items-center">
              <span className="mr-3">🇬🇧</span>
              English
            </h5>
            <p className="mb-2 font-bold text-blue-700 dark:text-blue-300">Full Professional</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Advanced business communication</li>
              <li>Technical documentation skills</li>
              <li>International presentation capability</li>
            </ul>
          </div>

          {}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h5 className="text-xl font-semibold mb-2 flex items-center">
              <span className="mr-3">🇫🇷</span>
              Français
            </h5>
            <p className="mb-2 font-bold text-purple-700 dark:text-purple-300">Advanced Professional</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Professional working proficiency</li>
              <li>Business communication competency</li>
              <li>Academic presentation abilities</li>
            </ul>
          </div>
        </div>

        {}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">
            🌐 Cross-Cultural Communication
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Trilingual Professional</strong> with native Arabic, fluent English, and advanced French</li>
            <li><strong>International Business</strong> communication across MENA, European, and global markets</li>
            <li><strong>Technical Documentation</strong> proficiency in all three languages</li>
            <li><strong>Cultural Bridge</strong> between Arabic, English, and French-speaking business environments</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;