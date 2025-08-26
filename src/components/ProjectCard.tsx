"use client";

import React from 'react';
import Image from 'next/image'; // Import Image component
import { useTheme } from 'next-themes';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string; // Optional image URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, technologies, image }) => {
  const { theme } = useTheme();
  return (
    <div className="p-6 rounded-lg shadow-lg flex flex-col h-full bg-white dark:bg-gray-800">
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={400} // Placeholder width
            height={200} // Placeholder height
            className="w-full h-48 object-cover rounded-md"
            
          />
        </div>
      )}
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className={` ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-700`}>
            {tech}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline mt-auto">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;