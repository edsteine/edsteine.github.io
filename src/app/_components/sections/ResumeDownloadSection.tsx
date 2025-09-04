"use client";

import React from 'react';
import { useLanguage } from '@/app/_contexts/LanguageContext';

const ResumeDownloadSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Helper to safely convert translation to string
  const tr = (key: string): string => String(t(key));

  return (
    <section 
      id="resume-download" 
      className="max-w-4xl mx-auto text-center py-10 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
        <div className="mb-6">
          <span className="text-6xl mb-4 block">📄</span>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {tr('resumeDownload.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
            {tr('resumeDownload.description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/ADIL_AJDAA_Resume_Improved.pdf" 
            download 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
{tr('resumeDownload.downloadButton')}
          </a>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-[#10b981] rounded-full mr-2 animate-pulse"></span>
{tr('resumeDownload.lastUpdated')}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-3">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">2 Pages</div>
            <div className="text-xs text-gray-500">Comprehensive</div>
          </div>
          <div className="p-3">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">PDF</div>
            <div className="text-xs text-gray-500">Print Ready</div>
          </div>
          <div className="p-3">
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">ATS</div>
            <div className="text-xs text-gray-500">Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownloadSection;