"use client";

import React, { useState } from 'react';


const TechEvolutionTimeline: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  
  const techEvolutionData = [
    {
      year: 2025,
      milestone: "Next.js & Modern Frontend",
      newSkills: [
        {
          name: "Next.js",
          category: "Frontend",
          description: "Full-stack React framework with SSR/SSG",
          proficiency: 85
        },
        {
          name: "TypeScript",
          category: "Frontend",
          description: "Type-safe JavaScript development",
          proficiency: 80
        },
        {
          name: "Tailwind CSS",
          category: "Frontend",
          description: "Utility-first CSS framework",
          proficiency: 90
        }
      ],
      achievements: [
        "Built modern portfolio with Next.js 13+ and App Router",
        "Implemented full TypeScript integration",
        "Optimized for performance and SEO"
      ]
    },
    {
      year: 2023,
      milestone: "Flutter & Cross-platform Excellence",
      newSkills: [
        {
          name: "Flutter",
          category: "Mobile",
          description: "Cross-platform mobile development",
          proficiency: 90
        },
        {
          name: "Dart",
          category: "Mobile",
          description: "Flutter programming language",
          proficiency: 85
        }
      ],
      achievements: [
        "Delivered mobile banking app with 50K+ users",
        "Achieved 4.8/5 app store rating",
        "Implemented bank-grade security features"
      ]
    },
    {
      year: 2020,
      milestone: "Enterprise Backend & Leadership",
      newSkills: [
        {
          name: "Spring Boot",
          category: "Backend",
          description: "Java microservices framework",
          proficiency: 90
        },
        {
          name: "Kotlin",
          category: "Mobile",
          description: "Modern Android development",
          proficiency: 95
        },
        {
          name: "PostgreSQL",
          category: "Database",
          description: "Advanced relational database",
          proficiency: 90
        },
        {
          name: "PostGIS",
          category: "Database",
          description: "Geospatial database extension",
          proficiency: 85
        }
      ],
      achievements: [
        "Led team of 12+ developers",
        "Built geospatial platform serving 100K+ daily users",
        "Achieved 99.9% system uptime"
      ]
    }
  ];

  
  const categories = ['All', ...Array.from(new Set(
    techEvolutionData.flatMap(year => year.newSkills.map(skill => skill.category))
  ))];

  
  const filteredData = techEvolutionData.map(yearData => ({
    ...yearData,
    newSkills: selectedCategory === 'All' 
      ? yearData.newSkills 
      : yearData.newSkills.filter(skill => skill.category === selectedCategory)
  })).filter(yearData => yearData.newSkills.length > 0);

  const selectedYearData = techEvolutionData.find(data => data.year === selectedYear);

  return (
    <div className="max-w-6xl mx-auto py-12">
      {}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Technology Evolution Timeline
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My journey through different technologies over the years
        </p>
      </div>

      {}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {}
      <div className="relative">
        {}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

        {}
        <div className="space-y-8">
          {filteredData.map((yearData) => (
            <div key={yearData.year} className="relative flex items-start">
              {}
              <div 
                className={`relative z-10 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors ${
                  selectedYear === yearData.year 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => setSelectedYear(yearData.year)}
              >
                {yearData.year}
              </div>

              {}
              <div className="ml-6 flex-1">
                <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 ${
                  selectedYear === yearData.year ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'
                }`}>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {yearData.milestone}
                  </h4>
                  
                  {}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {yearData.newSkills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h5>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            skill.category === 'Mobile' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                            skill.category === 'Backend' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                            skill.category === 'Frontend' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200' :
                            skill.category === 'Database' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200' :
                            skill.category === 'DevOps' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200'
                          }`}>
                            {skill.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {skill.description}
                        </p>
                        
                        {}
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                            <span>Proficiency</span>
                            <span>{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {yearData.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {}
      {selectedYearData && (
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {selectedYearData.year} - {selectedYearData.milestone}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedYearData.newSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h5>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {skill.proficiency}%
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {skill.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechEvolutionTimeline;