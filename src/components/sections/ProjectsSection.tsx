"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import ProjectCard from "@/components/features/ProjectCard";
import projectsData from "@/data/projectsData";

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="projects" 
      className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" 
      aria-label="Featured projects and portfolio"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        <span className="text-purple-600 dark:text-purple-400 font-mono text-lg">const</span> 
        <span className="text-blue-500">projects</span> 
        <span className="text-gray-400">=</span> 
        <span className="text-orange-500">[</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
            technologies={project.technologies} 
            image={project.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;