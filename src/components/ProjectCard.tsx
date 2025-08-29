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
      className="p-6 rounded-lg shadow-lg flex flex-col h-full bg-white dark:bg-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of item is in view
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      onClick={() => window.open(link, "_blank")}
      tabIndex={0} // Make the div focusable
    >
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
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className={` ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-700 flex items-center`}>
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.325-1.119-1.353-1.9-2.51-1.9-1.157 0-2.185.781-2.51 1.9l-.217.76c-.194.676-.608 1.23-1.15 1.588l-.72.47a2.5 2.5 0 00-1.18 2.634l.38.95a2.5 2.5 0 00-.167 2.104l-.609 1.446c-.325.768.098 1.636.866 1.96l.72.308c.542.232.956.786 1.15 1.462l.217.76c.325 1.119 1.353 1.9 2.51 1.9 1.157 0 2.185-.781 2.51-1.9l.217-.76c.194-.676.608-1.23 1.15-1.588l.72-.47a2.5 2.5 0 001.18-2.634l-.38-.95a2.5 2.5 0 00.167-2.104l.609-1.446c.325-.768-.098-1.636-.866-1.96l-.72-.308c-.542-.232-.956-.786-1.15-1.462l-.217-.76zM10 12.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" clipRule="evenodd"></path></svg>
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-auto">
        Live demo available on request due to hosting costs.
      </p>
    </motion.div>
  );
};

export default ProjectCard;