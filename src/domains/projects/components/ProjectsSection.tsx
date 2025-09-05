"use client";

import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import ProjectCard from "@/domains/projects/components/ProjectCard";
import { projectsData } from '@/domains/projects/data/projects';
import type { Project } from '@/lib/types/content';
import React, { useState } from 'react';


const PROJECTS_CONFIG = {
  display: {
    defaultLimit: 3,
    showMoreThreshold: 3
  },
  animation: {
    buttonHover: "hover:shadow-lg hover:shadow-purple-500/25",
    iconTransform: "transition-transform duration-300"
  }
} as const;

const SECTION_CLASSES = {
  container: "max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
  title: "text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  buttonContainer: "text-center mt-12",
  button: "group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300",
  closingBracket: "text-center mt-4"
} as const;

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  
  
  const tr = (key: string): string => String(t(key));
  
  
  const visibleProjects = showAll 
    ? projectsData 
    : projectsData.slice(0, PROJECTS_CONFIG.display.defaultLimit);

  return (
    <section 
      id="projects" 
      className={SECTION_CLASSES.container}
      aria-label="Featured projects and portfolio"
    >
      <h3 className={SECTION_CLASSES.title}>
        <span className="text-purple-600 dark:text-purple-400 font-mono text-lg">const</span> 
        <span className="text-blue-500">{tr('projects.title')}</span> 
        <span className="text-gray-400">=</span> 
        <span className="text-orange-500">[</span>
      </h3>
      
      <div className={SECTION_CLASSES.grid}>
        {visibleProjects.map((project: Project, index) => (
          <ProjectCard 
            key={project.id || index} 
            title={project.title} 
            description={project.description} 
            link={project.demoUrl || project.githubUrl || '#'} 
            technologies={project.technologies} 
            image={project.image} 
          />
        ))}
      </div>

      {}
      {projectsData.length > PROJECTS_CONFIG.display.showMoreThreshold && (
        <div className={SECTION_CLASSES.buttonContainer}>
          <button
            onClick={() => setShowAll(!showAll)}
            className={`${SECTION_CLASSES.button} ${PROJECTS_CONFIG.animation.buttonHover}`}
          >
            <span>{showAll ? tr('common.readLess') : tr('common.readMore')}</span>
            <svg 
              className={`w-4 h-4 ${PROJECTS_CONFIG.animation.iconTransform} ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      <div className={SECTION_CLASSES.closingBracket}>
        <span className="text-orange-500 text-lg">];</span>
      </div>
    </section>
  );
};

export default ProjectsSection;