import React from 'react';

import { educationData, certifications, professionalDevelopment } from '@/data/educationData';

const Education = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-12">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-bold">{edu.degree}</h4>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{edu.institution}</p>
            <p className="text-md text-gray-600 dark:text-gray-400">{edu.location} | {edu.period}</p>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-3">Grade: {edu.grade}</p>
            {edu.achievements && (
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
            {edu.coursework && (
              <div>
                <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Coursework:</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {edu.coursework.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-4">Certifications</h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-2xl font-bold mb-4">Professional Development & Continuous Learning</h4>
        {professionalDevelopment.map((pd, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{pd.year}</h5>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {pd.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;