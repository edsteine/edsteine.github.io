"use client";

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';

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
    return null; // Or a loading spinner, or a skeleton
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
    <div className="container mx-auto p-8">
      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-4">Technical Skills</h4>
        {technicalSkillsData.map((categoryData, index) => (
          <div key={index} className="mb-6">
            <h5 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">{categoryData.category}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryData.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      custom={skill.level}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-2xl font-bold mb-4">Soft Skills</h4>
        {softSkills.map((skillCategory, index) => (
          <div key={index} className="mb-6">
            <h5 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">{skillCategory.category}</h5>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {skillCategory.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;