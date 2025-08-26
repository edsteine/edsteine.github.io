import React from 'react';
import Image from 'next/image'; // Import Image component

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string; // Optional image URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, technologies, image }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={400} // Placeholder width
            height={200} // Placeholder height
            className="w-full h-48 object-cover rounded-md"
            unoptimized={true} // Disable optimization for static export
          />
        </div>
      )}
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
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