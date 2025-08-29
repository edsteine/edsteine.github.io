"use client";

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import LoadingSpinner, { SkeletonLoader } from './LoadingSpinner';

interface Skill {
  name: string;
  level: number; // Proficiency level from 0 to 100
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

import { technicalSkillsMap, technicalSkillsCategories, softSkills } from '@/data/skillsData';

const getTechnicalSkillsData = (): SkillCategory[] => {
  const skillsData: SkillCategory[] = Object.entries(technicalSkillsCategories).map(([category, skillNames]) => ({
    category: category,
    skills: skillNames.map(name => ({
      name: name,
      level: technicalSkillsMap[category as keyof typeof technicalSkillsMap] || 0, // Assign level based on category
    })),
  }));

  return skillsData;
};

const Skills: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SkeletonLoader lines={1} height="h-8" className="mb-8" />
          {[1, 2, 3].map((section) => (
            <div key={section} className="mb-6">
              <SkeletonLoader lines={1} height="h-6" className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((skill) => (
                  <div key={skill}>
                    <SkeletonLoader lines={1} height="h-4" className="mb-2" />
                    <SkeletonLoader lines={1} height="h-3" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <LoadingSpinner type="terminal" text="Loading skills..." />
        </div>
      </div>
    );
  }

  const technicalSkillsData = getTechnicalSkillsData(); // Get the data with levels

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: { duration: 1.5, ease: cubicBezier(0.42, 0, 1, 1) },
    }),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h4 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h4>
        {technicalSkillsData.map((categoryData, index) => (
          <div key={index} className="mb-6">
            <h5 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{categoryData.category}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryData.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${getTechIconColor(skill.name)}`}></div>
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">{skill.level}%</span>
                  </div>
                  <div className="relative w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 shadow-inner overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full shadow-sm relative ${getSkillGradient(skill.level)}`}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      custom={skill.level}
                      whileHover={{ 
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Animated shine effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatDelay: 3,
                          delay: Math.random() * 2 
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Soft Skills</h4>
        {softSkills.map((skillCategory, index) => (
          <div key={index} className="mb-6">
            <h5 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{skillCategory.category}</h5>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-1">
              {skillCategory.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="leading-relaxed">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get tech icon color
const getTechIconColor = (skillName: string): string => {
  const skill = skillName.toLowerCase();
  if (skill.includes('kotlin') || skill.includes('android')) return 'bg-green-500 animate-pulse';
  if (skill.includes('flutter') || skill.includes('dart')) return 'bg-blue-400 animate-pulse';
  if (skill.includes('react') || skill.includes('next')) return 'bg-cyan-500 animate-pulse';
  if (skill.includes('python') || skill.includes('django')) return 'bg-yellow-500 animate-pulse';
  if (skill.includes('javascript')) return 'bg-yellow-400 animate-pulse';
  if (skill.includes('typescript')) return 'bg-blue-600 animate-pulse';
  if (skill.includes('java') || skill.includes('spring')) return 'bg-orange-500 animate-pulse';
  if (skill.includes('sql') || skill.includes('database') || skill.includes('postgresql')) return 'bg-purple-500 animate-pulse';
  if (skill.includes('docker') || skill.includes('aws') || skill.includes('cloud')) return 'bg-indigo-500 animate-pulse';
  if (skill.includes('git') || skill.includes('github')) return 'bg-gray-800 animate-pulse';
  return 'bg-gray-400 animate-pulse';
};

// Helper function to get skill bar gradient based on proficiency level
const getSkillGradient = (level: number): string => {
  if (level >= 90) return 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500';
  if (level >= 80) return 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600';
  if (level >= 70) return 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600';
  if (level >= 60) return 'bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600';
  return 'bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600';
};

export default Skills;