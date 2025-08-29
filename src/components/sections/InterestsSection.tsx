"use client";

import React from 'react';

const InterestsSection: React.FC = () => {
  return (
    <section 
      id="interests" 
      className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Interests & Hobbies
      </h3>
      
      <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sports & Recreation */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold mb-4 flex items-center text-blue-800 dark:text-blue-200">
              <span className="mr-3">🏃</span>
              Sports & Recreation
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Football (Soccer)</strong> - Regular player and enthusiast</li>
              <li><strong>Basketball</strong> - Active participant and fan</li>
              <li><strong>Taekwondo</strong> - Martial arts practice and discipline</li>
              <li><strong>Swimming</strong> - Fitness and recreational activity</li>
            </ul>
          </div>

          {/* Technology & Development */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="text-xl font-bold mb-4 flex items-center text-green-800 dark:text-green-200">
              <span className="mr-3">💻</span>
              Tech & Development
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Technology Conferences</strong> - Industry events and trends</li>
              <li><strong>New Frameworks</strong> - Exploring emerging technologies</li>
              <li><strong>Open-Source</strong> - Community contributions</li>
              <li><strong>Side Projects</strong> - Personal coding experiments</li>
            </ul>
          </div>

          {/* Personal Interests */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="text-xl font-bold mb-4 flex items-center text-purple-800 dark:text-purple-200">
              <span className="mr-3">🎯</span>
              Personal Interests
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Gaming</strong> - Strategic and puzzle games</li>
              <li><strong>Music</strong> - Various genres and live concerts</li>
              <li><strong>Travel</strong> - Cultural exploration and photography</li>
              <li><strong>Reading</strong> - Tech books and business literature</li>
            </ul>
          </div>

          {/* Continuous Learning */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="text-xl font-bold mb-4 flex items-center text-orange-800 dark:text-orange-200">
              <span className="mr-3">📚</span>
              Continuous Learning
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Professional Development</strong> - Industry best practices</li>
              <li><strong>Cultural Exploration</strong> - Through travel and experiences</li>
              <li><strong>Physical Wellness</strong> - Sports and outdoor activities</li>
              <li><strong>Mentoring</strong> - Guiding junior developers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;