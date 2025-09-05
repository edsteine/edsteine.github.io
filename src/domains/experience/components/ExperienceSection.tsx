"use client";

import InteractiveTimeline from '@/components/features/timeline/InteractiveTimeline';
import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import TechnologyBadge from '@/components/ui/display/TechnologyBadge';
import { experienceData } from '@/domains/experience/data/experience';
import { motion } from 'framer-motion';
import React from 'react';


const EXPERIENCE_CONFIG = {
  animation: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  summaryAnimation: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.2, duration: 0.5 }
  }
} as const;

const SECTION_CLASSES = {
  container: "py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
  wrapper: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-16",
  title: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6",
  subtitle: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",
  summaryGrid: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
  summaryCard: "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center",
  summaryValue: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2",
  summaryLabel: "text-gray-600 dark:text-gray-400 font-medium",
} as const;

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  
  
  const tr = (key: string): string => String(t(key));

  
  const timelineEvents = experienceData.map((exp, index) => ({
    id: String(index + 1),
    title: exp.role,
    company: exp.company,
    date: exp.period,
    duration: exp.period,
    description: exp.description,
    achievements: exp.biggestContribution || [],
    technologies: exp.fullTechStack || [],
    type: 'work' as const
  }));

  
  const experienceSummary = {
    totalPositions: experienceData.length,
    totalCompanies: new Set(experienceData.map(exp => exp.company)).size,
    yearsOfExperience: Math.max(...experienceData.map(exp => {
      const years = exp.period.match(/(\d{4})/g);
      return years ? parseInt(years[years.length - 1]) - parseInt(years[0]) : 0;
    })),
    totalTechnologies: new Set(experienceData.flatMap(exp => exp.fullTechStack || [])).size
  };

  
  const allTechnologies = Array.from(
    new Set(experienceData.flatMap(exp => exp.fullTechStack || []))
  ).slice(0, 12); 

  return (
    <section id="experience" className={SECTION_CLASSES.container}>
      <div className={SECTION_CLASSES.wrapper}>
        {}
        <motion.header
          className={SECTION_CLASSES.header}
          initial={EXPERIENCE_CONFIG.animation.initial}
          whileInView={EXPERIENCE_CONFIG.animation.animate}
          viewport={{ once: true }}
          transition={EXPERIENCE_CONFIG.animation.transition}
        >
          <h2 className={SECTION_CLASSES.title}>
            Professional Journey
          </h2>
          <p className={SECTION_CLASSES.subtitle}>
            {tr('experience.subtitle')}
          </p>
        </motion.header>

        {}
        <motion.div
          className={SECTION_CLASSES.summaryGrid}
          initial={EXPERIENCE_CONFIG.summaryAnimation.initial}
          whileInView={EXPERIENCE_CONFIG.summaryAnimation.animate}
          viewport={{ once: true }}
          transition={EXPERIENCE_CONFIG.summaryAnimation.transition}
        >
          <div className={SECTION_CLASSES.summaryCard}>
            <div className={SECTION_CLASSES.summaryValue}>
              {experienceSummary.totalPositions}
            </div>
            <div className={SECTION_CLASSES.summaryLabel}>
              Positions
            </div>
          </div>
          <div className={SECTION_CLASSES.summaryCard}>
            <div className={SECTION_CLASSES.summaryValue}>
              {experienceSummary.totalCompanies}
            </div>
            <div className={SECTION_CLASSES.summaryLabel}>
              Companies
            </div>
          </div>
          <div className={SECTION_CLASSES.summaryCard}>
            <div className={SECTION_CLASSES.summaryValue}>
              {experienceSummary.yearsOfExperience}+
            </div>
            <div className={SECTION_CLASSES.summaryLabel}>
              Years
            </div>
          </div>
          <div className={SECTION_CLASSES.summaryCard}>
            <div className={SECTION_CLASSES.summaryValue}>
              {experienceSummary.totalTechnologies}+
            </div>
            <div className={SECTION_CLASSES.summaryLabel}>
              Technologies
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <InteractiveTimeline events={timelineEvents} />
        </motion.div>

        {}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Core Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech, index) => (
              <TechnologyBadge
                key={index}
                technology={tech}
                variant="primary"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;