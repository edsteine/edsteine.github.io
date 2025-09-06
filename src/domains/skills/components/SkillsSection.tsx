"use client";

import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import Terminal from "@/domains/skills/components/Terminal";
import {
    softSkills,
    technicalSkillsCategories,
    technicalSkillsMap
} from '@/domains/skills/data/skills';
import { cubicBezier, motion } from 'framer-motion';
import React from 'react';



interface SkillDisplay {
  name: string;
  level: number;
}

interface SkillCategoryDisplay {
  category: string;
  skills: SkillDisplay[];
}


const SKILLS_CONFIG = {
  animation: {
    skillVariants: {
      hidden: { width: 0, opacity: 0 },
      visible: (level: number) => ({
        width: `${level}%`,
        opacity: 1,
        transition: { duration: 1.5, ease: cubicBezier(0.42, 0, 1, 1) },
      }),
    },
    shineEffect: {
      initial: { x: '-100%' },
      animate: { x: '100%' },
      transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
    }
  },
  display: {
    initialVisibleCategories: 2,
    maxShownCategories: 5
  }
} as const;

const SECTION_CLASSES = {
  container: "max-w-7xl mx-auto p-8 pb-24 pt-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
  title: "text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white leading-tight",
  grid: "grid lg:grid-cols-3 gap-16",
  skillsColumn: "lg:col-span-2",
  terminalColumn: "lg:col-span-1",
  skillCard: "mb-10 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/70 dark:to-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-500",
  skillGrid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  skillItem: {
    header: "flex justify-between mb-3",
    label: "text-sm md:text-base text-gray-700 dark:text-gray-300 font-semibold flex items-center transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105",
    percentage: "text-sm font-bold text-blue-600 dark:text-blue-400 font-mono bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-4 py-2 rounded-xl shadow-lg border border-blue-200 dark:border-blue-800",
    barContainer: "relative w-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full h-5 shadow-inner overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105",
    bar: "h-5 rounded-full shadow-2xl relative transition-all duration-2000 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-pulse"
  }
} as const;

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [showAllSkills, setShowAllSkills] = React.useState(false);
  
  
  const tr = (key: string): string => String(t(key));

  
  const technicalSkillsData: SkillCategoryDisplay[] = technicalSkillsCategories.map((categoryObj) => ({
    category: categoryObj.name,
    skills: categoryObj.skills.map(skillName => ({
      name: skillName,
      level: technicalSkillsMap[skillName as keyof typeof technicalSkillsMap]?.level || 0,
    })),
  }));
  
  
  const visibleSkillsData = showAllSkills 
    ? technicalSkillsData 
    : technicalSkillsData.slice(0, SKILLS_CONFIG.display.initialVisibleCategories);

  return (
    <section 
      id="skills" 
      className={SECTION_CLASSES.container}
      aria-label="Technical skills and competencies"
    >
      <h3 className={SECTION_CLASSES.title}>
        <span className="text-blue-400 font-mono text-lg">const</span>{' '}
        <span className="text-yellow-500">get{tr('skills.title').replace(' ', '')}</span> 
        <span className="text-gray-400">{' = '}</span>
        <span className="text-green-500">() =&gt;</span> 
        <span className="text-gray-400">{' {'}</span>
        <br />
        <span className="text-gray-400 ml-4">{'// 🚀 Showcasing professional expertise'}</span>
        <br />
        <span className="text-purple-500 ml-4">return</span>{' '}
        <span className="text-orange-500">skills</span>
        <span className="text-gray-400">.</span>
        <span className="text-blue-400">map</span>
        <span className="text-gray-400">{'('}</span>
        <span className="text-red-400">skill =&gt; skill</span>
        <span className="text-gray-400">{')'}</span>
        <br />
        <span className="text-gray-400 ml-8">{'.sort((a, b) => b.level - a.level)'}</span>
        <br />
        <span className="text-gray-400">{'}'}</span>
      </h3>

      <div className={SECTION_CLASSES.grid}>
        <div className={SECTION_CLASSES.skillsColumn}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h4 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h4>
                {visibleSkillsData.map((categoryData, categoryIndex) => (
                  <div key={categoryIndex} className={SECTION_CLASSES.skillCard}>
                    <h5 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{categoryData.category}</h5>
                    <div className={SECTION_CLASSES.skillGrid}>
                      {categoryData.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className={SECTION_CLASSES.skillItem.header}>
                            <span className={SECTION_CLASSES.skillItem.label}>
                              <div className={`w-3 h-3 rounded-full mr-3 bg-gradient-to-r from-green-500 to-blue-500`}></div>
                              {skill.name}
                            </span>
                            <span className={SECTION_CLASSES.skillItem.percentage}>{skill.level}%</span>
                          </div>
                          <div className={SECTION_CLASSES.skillItem.barContainer}>
                            <motion.div
                              className={`${SECTION_CLASSES.skillItem.bar} bg-gradient-to-r from-green-500 via-blue-500 to-purple-500`}
                              variants={SKILLS_CONFIG.animation.skillVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.5 }}
                              custom={skill.level}
                              whileHover={{ 
                                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                                transition: { duration: 0.3 }
                              }}
                            >
                              <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={SKILLS_CONFIG.animation.shineEffect.initial}
                                animate={SKILLS_CONFIG.animation.shineEffect.animate}
                                transition={{ 
                                  ...SKILLS_CONFIG.animation.shineEffect.transition,
                                  delay: (skillIndex * 0.3) % 2 
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                {}
                {technicalSkillsData.length > SKILLS_CONFIG.display.initialVisibleCategories && (
                  <div className="text-center mb-8">
                    <button
                      onClick={() => setShowAllSkills(!showAllSkills)}
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                    >
                      <span>{showAllSkills ? tr('common.readLess') : tr('common.readMore')} Skills</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${showAllSkills ? 'rotate-180' : ''}`} 
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

              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                  <span className="text-purple-600 dark:text-purple-400 font-mono text-lg">const</span> 
                  <span className="text-pink-500">softSkills</span> 
                  <span className="text-gray-400">=</span> 
                  <span className="text-orange-500">[</span>
                  <br />
                  <span className="text-orange-500 ml-8">];</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index}>
                      <div className={SECTION_CLASSES.skillItem.header}>
                        <span className={SECTION_CLASSES.skillItem.label}>
                          <div className="w-3 h-3 rounded-full mr-3 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                          {skill.name}
                        </span>
                        <span className={SECTION_CLASSES.skillItem.percentage}>{skill.level}%</span>
                      </div>
                      <div className={`${SECTION_CLASSES.skillItem.barContainer} mb-2`}>
                        <motion.div
                          className={`${SECTION_CLASSES.skillItem.bar} bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600`}
                          variants={SKILLS_CONFIG.animation.skillVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          custom={skill.level}
                          whileHover={{ 
                            boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                            transition: { duration: 0.3 }
                          }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={SKILLS_CONFIG.animation.shineEffect.initial}
                            animate={SKILLS_CONFIG.animation.shineEffect.animate}
                            transition={{ 
                              ...SKILLS_CONFIG.animation.shineEffect.transition,
                              delay: (index * 0.3) % 2 
                            }}
                          />
                        </motion.div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
        <div className={SECTION_CLASSES.terminalColumn}>
          <Terminal 
            title="dev-skills.terminal"
            commands={[
              {
                command: "npm list --skills",
                output: [
                  "├── kotlin@expert",
                  "├── flutter@advanced", 
                  "├── react@proficient",
                  "├── spring-boot@expert",
                  "└── 15+ more packages..."
                ]
              },
              {
                command: "git log --experience",
                output: [
                  "commit 9a3b2c1: +9 years experience",
                  "commit 8x7y6z5: 100k+ users served",
                  "commit 4w3x2y1: 12+ team members led",
                  "commit 0z9y8x7: 99.9% uptime achieved"
                ]
              },
              {
                command: "docker ps --achievements",
                output: [
                  "CONTAINER     STATUS",
                  "mobile-apps   ✓ Running (4.0+ rating)",
                  "enterprise    ✓ Healthy (1M+ transactions)", 
                  "team-lead     ✓ Active (95% delivery rate)"
                ]
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;