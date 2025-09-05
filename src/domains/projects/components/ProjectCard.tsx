"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string;
}


const TECH_COLORS: Record<string, string> = {
  react: 'bg-blue-500',
  next: 'bg-blue-500', 
  kotlin: 'bg-green-500',
  android: 'bg-green-500',
  flutter: 'bg-blue-400',
  dart: 'bg-blue-400',
  python: 'bg-yellow-500',
  django: 'bg-yellow-500',
  javascript: 'bg-yellow-400',
  node: 'bg-yellow-400',
  typescript: 'bg-blue-600',
  java: 'bg-orange-500',
  spring: 'bg-orange-500',
  sql: 'bg-purple-500',
  database: 'bg-purple-500',
  postgresql: 'bg-purple-500',
  docker: 'bg-indigo-500',
  aws: 'bg-indigo-500'
};

const getTechColor = (tech: string): string => {
  const lowerTech = tech.toLowerCase();
  for (const key in TECH_COLORS) {
    if (lowerTech.includes(key)) {
      return TECH_COLORS[key];
    }
  }
  return 'bg-gray-400';
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link, 
  technologies, 
  image 
}) => {
  return (
    <motion.div
      className="relative p-6 rounded-xl shadow-lg flex flex-col h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      {}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl" />
      
      {}
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-md"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="relative z-10 flex-1 flex flex-col">
        {}
        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
          {title}
        </h4>
        
        {}
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
          {description}
        </p>
        
        {}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={`${tech}-${index}`}
              className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-mono border border-gray-300 dark:border-gray-700 flex items-center shadow-sm"
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${getTechColor(tech)}`}></div>
              {tech}
            </span>
          ))}
        </div>
        
        {}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-mono">
              <span className="text-green-500">$</span> demo --available
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              View Project 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;