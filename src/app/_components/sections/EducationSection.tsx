"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/app/_contexts/LanguageContext';
import { educationData, certifications, professionalDevelopment } from '@/data';

// Simple icon components instead of emoji
const LocationIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
  </svg>
);

const AchievementIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
);

const EducationSection = () => {
  const { t } = useLanguage();
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllProfessionalDev, setShowAllProfessionalDev] = useState(false);
  
  // Helper to safely convert translation to string
  const tr = (key: string): string => String(t(key));

  const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, 3);
  const visibleProfessionalDev = showAllProfessionalDev ? professionalDevelopment : professionalDevelopment.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Education */}
      <div className="mb-12">
        <div className="grid gap-6">
          {educationData.map((edu) => (
            <div key={edu.institution} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <LocationIcon />
                    <span className="ml-1 mr-2">{edu.location}</span>
                    <span className="mx-2">•</span>
                    <CalendarIcon />
                    <span className="ml-1">{edu.period}</span>
                  </p>
                </div>
              </div>
              
              {edu.achievements && (
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Key Achievements
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={`${edu.institution}-achievement-${idx}`} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                        <AchievementIcon />
                        <span className="ml-2">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {edu.relevantCoursework && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Key Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCoursework.map((course, idx) => (
                      <span key={`${edu.institution}-course-${idx}`} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-4">Certifications</h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          {visibleCertifications.map((cert, index) => (
            <li key={cert.credentialId || `cert-${index}`} className="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
              {cert.name} - {cert.issuer} ({cert.date})
            </li>
          ))}
        </ul>

        {certifications.length > 3 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
            >
              <span>{showAllCertifications ? tr('common.readLess') : tr('common.readMore')} Certifications</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${showAllCertifications ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Professional Development */}
      <div>
        <h4 className="text-2xl font-bold mb-4">Professional Development & Continuous Learning</h4>
        <div className="mb-6">
          {visibleProfessionalDev.map((pd) => (
            <div key={`${pd.title}-${pd.date}`} className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-indigo-500">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{pd.title}</h5>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{pd.provider} - {pd.date}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Duration: {pd.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{pd.description}</p>
            </div>
          ))}
        </div>

        {professionalDevelopment.length > 2 && (
          <div className="text-center">
            <button
              onClick={() => setShowAllProfessionalDev(!showAllProfessionalDev)}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <span>{showAllProfessionalDev ? tr('common.readLess') : tr('common.readMore')} Development</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${showAllProfessionalDev ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationSection;