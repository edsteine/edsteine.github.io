"use client";

import React from 'react';
import Image from 'next/image'; // Import Image component
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { motion } from 'framer-motion'; // Import motion


interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string; // Optional image URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, technologies, image }) => {
  
  const { resolvedTheme } = useTheme(); // Use resolvedTheme
  const [mounted, setMounted] = useState(false); // Add mounted state
  

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Removed ease property
  };

  // If not mounted, return a div with minimal styling to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="p-6 rounded-lg shadow-lg flex flex-col h-full bg-white dark:bg-gray-800">
        {/* Render a basic structure to avoid layout shift */}
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-700">
              {tech}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline mt-auto">
          View Project
        </a>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          Live demo available on request due to hosting costs.
        </p>
      </div>
    );
  }

  const imageSrc = image ? image : undefined;

  return (
    <motion.div
      className="relative p-6 rounded-xl shadow-lg flex flex-col h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-gray-200 dark:border-gray-700 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 2,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
      onClick={() => window.open(link, "_blank")}
      tabIndex={0}
    >
      {/* Hover glow effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl" />
      {imageSrc && (
        <div className="mb-4">
          <Image
            src={imageSrc}
            alt={title}
            width={400} // Placeholder width
            height={200} // Placeholder height
            className="w-full h-48 object-cover rounded-md"

          />
        </div>
      )}
      <div className="relative z-10">
        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
          {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className={`relative ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} px-3 py-1 rounded-full text-xs font-mono border border-gray-300 dark:border-gray-700 flex items-center shadow-sm`}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: resolvedTheme === 'dark' ? '#1f2937' : '#f3f4f6',
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${getTechColor(tech)}`}></div>
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-mono">
              <span className="text-green-500">$</span> demo --available
            </p>
            <motion.div 
              className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold"
              whileHover={{ x: 5 }}
            >
              View Project 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to assign colors to different technologies
const getTechColor = (tech: string): string => {
  const lowerTech = tech.toLowerCase();
  if (lowerTech.includes('react') || lowerTech.includes('next')) return 'bg-blue-500';
  if (lowerTech.includes('kotlin') || lowerTech.includes('android')) return 'bg-green-500';
  if (lowerTech.includes('flutter') || lowerTech.includes('dart')) return 'bg-blue-400';
  if (lowerTech.includes('python') || lowerTech.includes('django')) return 'bg-yellow-500';
  if (lowerTech.includes('javascript') || lowerTech.includes('node')) return 'bg-yellow-400';
  if (lowerTech.includes('typescript')) return 'bg-blue-600';
  if (lowerTech.includes('java') || lowerTech.includes('spring')) return 'bg-orange-500';
  if (lowerTech.includes('sql') || lowerTech.includes('database')) return 'bg-purple-500';
  if (lowerTech.includes('docker') || lowerTech.includes('aws')) return 'bg-indigo-500';
  return 'bg-gray-400';
};

export default ProjectCard;