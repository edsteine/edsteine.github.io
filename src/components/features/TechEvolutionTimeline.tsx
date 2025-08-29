"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechSkill {
  name: string;
  category: 'Mobile' | 'Backend' | 'Frontend' | 'Database' | 'DevOps' | 'Tools';
  proficiency: number;
  startYear: number;
  description: string;
  projects?: string[];
  icon: string;
}

interface YearData {
  year: number;
  milestone: string;
  newSkills: TechSkill[];
  achievements: string[];
}

const TechEvolutionTimeline: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const techEvolution: YearData[] = [
    {
      year: 2016,
      milestone: "Started Programming Journey",
      newSkills: [
        {
          name: "Java",
          category: "Backend", 
          proficiency: 60,
          startYear: 2016,
          description: "Foundation in object-oriented programming and Android development",
          projects: ["First Android apps", "University projects"],
          icon: "☕"
        },
        {
          name: "Android SDK",
          category: "Mobile",
          proficiency: 50,
          startYear: 2016,
          description: "Native Android development with Java",
          projects: ["Student management app", "Calculator app"],
          icon: "🤖"
        }
      ],
      achievements: ["First mobile app published", "Learned OOP fundamentals"]
    },
    {
      year: 2018,
      milestone: "Advanced Mobile Development",
      newSkills: [
        {
          name: "Kotlin",
          category: "Mobile",
          proficiency: 85,
          startYear: 2018,
          description: "Modern Android development with Kotlin",
          projects: ["E-commerce app", "Chat application"],
          icon: "🎯"
        },
        {
          name: "SQLite",
          category: "Database",
          proficiency: 70,
          startYear: 2018,
          description: "Mobile database management",
          projects: ["Offline-first apps", "Data sync systems"],
          icon: "🗃️"
        }
      ],
      achievements: ["Mastered Kotlin", "Built first production app"]
    },
    {
      year: 2019,
      milestone: "Full-Stack Expansion",
      newSkills: [
        {
          name: "Spring Boot",
          category: "Backend",
          proficiency: 90,
          startYear: 2019,
          description: "Enterprise Java framework for REST APIs",
          projects: ["Microservices architecture", "API gateways"],
          icon: "🍃"
        },
        {
          name: "PostgreSQL",
          category: "Database",
          proficiency: 85,
          startYear: 2019,
          description: "Advanced relational database management",
          projects: ["Enterprise applications", "Data modeling"],
          icon: "🐘"
        },
        {
          name: "React",
          category: "Frontend",
          proficiency: 80,
          startYear: 2019,
          description: "Modern web application development",
          projects: ["Admin dashboards", "Web portals"],
          icon: "⚛️"
        }
      ],
      achievements: ["First full-stack project", "Led team of 5 developers"]
    },
    {
      year: 2020,
      milestone: "Cross-Platform Mastery",
      newSkills: [
        {
          name: "Flutter",
          category: "Mobile",
          proficiency: 90,
          startYear: 2020,
          description: "Cross-platform mobile development",
          projects: ["Multi-platform apps", "Enterprise solutions"],
          icon: "💙"
        },
        {
          name: "Docker",
          category: "DevOps",
          proficiency: 75,
          startYear: 2020,
          description: "Containerization and deployment",
          projects: ["Microservices deployment", "CI/CD pipelines"],
          icon: "🐳"
        }
      ],
      achievements: ["Apps serving 50K+ users", "Containerized all services"]
    },
    {
      year: 2021,
      milestone: "Cloud & Architecture",
      newSkills: [
        {
          name: "AWS",
          category: "DevOps",
          proficiency: 80,
          startYear: 2021,
          description: "Cloud infrastructure and services",
          projects: ["Scalable architectures", "Serverless solutions"],
          icon: "☁️"
        },
        {
          name: "PostGIS",
          category: "Database",
          proficiency: 85,
          startYear: 2021,
          description: "Geospatial database management",
          projects: ["Location-based services", "GIS applications"],
          icon: "🗺️"
        }
      ],
      achievements: ["Architected 99.9% uptime systems", "Geographic data expert"]
    },
    {
      year: 2022,
      milestone: "Modern Frontend & Leadership",
      newSkills: [
        {
          name: "Next.js",
          category: "Frontend",
          proficiency: 85,
          startYear: 2022,
          description: "Server-side rendering and modern React",
          projects: ["High-performance web apps", "SEO-optimized sites"],
          icon: "▲"
        },
        {
          name: "TypeScript",
          category: "Frontend",
          proficiency: 90,
          startYear: 2022,
          description: "Type-safe JavaScript development",
          projects: ["Large-scale applications", "Team standardization"],
          icon: "📘"
        }
      ],
      achievements: ["Led team of 12+ developers", "Improved performance by 85%"]
    },
    {
      year: 2023,
      milestone: "Enterprise Architecture",
      newSkills: [
        {
          name: "MongoDB",
          category: "Database",
          proficiency: 80,
          startYear: 2023,
          description: "NoSQL database for scalable applications",
          projects: ["Document-based systems", "Real-time analytics"],
          icon: "🍃"
        },
        {
          name: "GitHub Actions",
          category: "DevOps",
          proficiency: 85,
          startYear: 2023,
          description: "CI/CD automation and workflows",
          projects: ["Automated deployments", "Quality gates"],
          icon: "🔄"
        }
      ],
      achievements: ["Applications serve 100K+ daily users", "Zero-downtime deployments"]
    },
    {
      year: 2024,
      milestone: "AI Integration & Innovation",
      newSkills: [
        {
          name: "Python",
          category: "Backend",
          proficiency: 75,
          startYear: 2024,
          description: "Data science and AI integration",
          projects: ["ML-powered features", "Data analysis tools"],
          icon: "🐍"
        },
        {
          name: "SwiftUI",
          category: "Mobile",
          proficiency: 70,
          startYear: 2024,
          description: "Native iOS development",
          projects: ["iOS companion apps", "Cross-platform parity"],
          icon: "📱"
        }
      ],
      achievements: ["Integrated AI features", "Cross-platform expertise"]
    },
    {
      year: 2025,
      milestone: "Technical Leadership & Innovation",
      newSkills: [
        {
          name: "Advanced Architecture",
          category: "Backend",
          proficiency: 95,
          startYear: 2025,
          description: "System design and scalable solutions",
          projects: ["Enterprise platforms", "Microservices orchestration"],
          icon: "🏗️"
        }
      ],
      achievements: ["Currently: Senior Mobile Architect", "Building next-gen platforms"]
    }
  ];

  const categories = ['All', 'Mobile', 'Backend', 'Frontend', 'Database', 'DevOps', 'Tools'];
  
  const getCategoryColor = (category: string) => {
    const colors = {
      Mobile: 'bg-blue-500',
      Backend: 'bg-green-500', 
      Frontend: 'bg-purple-500',
      Database: 'bg-yellow-500',
      DevOps: 'bg-red-500',
      Tools: 'bg-gray-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const selectedYearData = techEvolution.find(data => data.year === selectedYear);
  
  const allSkillsUpToYear = techEvolution
    .filter(data => data.year <= selectedYear)
    .flatMap(data => data.newSkills)
    .filter(skill => selectedCategory === 'All' || skill.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-orange-500 font-mono text-lg">class</span>{' '}
          <span className="text-cyan-500">TechEvolution</span>{' '}
          <span className="text-gray-400">{'{'}</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Interactive journey through my technology stack evolution over 9+ years
        </p>
      </motion.div>

      {/* Year Selection */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Select Year to Explore
        </h4>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {techEvolution.map((data) => (
            <motion.button
              key={data.year}
              onClick={() => setSelectedYear(data.year)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedYear === data.year
                  ? 'bg-blue-500 text-white shadow-lg scale-110'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: selectedYear === data.year ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {data.year}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Filter by Category
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Year Info */}
      <AnimatePresence mode="wait">
        {selectedYearData && (
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-12 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {selectedYear}: {selectedYearData.milestone}
              </h3>
              <div className="space-y-2">
                {selectedYearData.achievements.map((achievement, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-700 dark:text-gray-300 flex items-center justify-center space-x-2"
                  >
                    <span className="text-green-500">✓</span>
                    <span>{achievement}</span>
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {allSkillsUpToYear.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${skill.startYear}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(skill.category)}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Since</div>
                  <div className="font-bold text-blue-600 dark:text-blue-400">{skill.startYear}</div>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Projects */}
              {skill.projects && skill.projects.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Projects:</h5>
                  <div className="space-y-1">
                    {skill.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Years of Experience Badge */}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Experience: {2025 - skill.startYear}+ years
                </span>
                <motion.div
                  className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-xs font-medium"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  Active
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Summary Stats */}
      <motion.div 
        className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Technology Mastery Summary
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categories.slice(1).map((category) => {
            const categorySkills = allSkillsUpToYear.filter(skill => skill.category === category);
            const avgProficiency = categorySkills.length > 0 
              ? Math.round(categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length)
              : 0;
            
            return (
              <div key={category} className="text-center">
                <div className={`w-12 h-12 ${getCategoryColor(category)} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <span className="text-white font-bold text-sm">{categorySkills.length}</span>
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{category}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{avgProficiency}% avg</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default TechEvolutionTimeline;