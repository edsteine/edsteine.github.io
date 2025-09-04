// SpecializationCard component - Following Single Responsibility Principle
"use client";

import React from 'react';
// AboutService functionality implemented inline

interface SpecializationCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  technologies?: string[];
  color: string;
}

interface SpecializationCardProps {
  card: SpecializationCard;
  className?: string;
}

const SpecializationCardComponent: React.FC<SpecializationCardProps> = ({ 
  card, 
  className = '' 
}) => {
  // Inline styling and logic
  const containerClasses = `bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 ${card.color} hover:shadow-lg transition-shadow duration-300`;
  const titleClasses = "text-md font-semibold mb-2 text-gray-900 dark:text-white flex items-center";
  const descriptionClasses = "text-sm text-gray-600 dark:text-gray-400";
  
  return (
    <div 
      className={`${containerClasses} ${className}`}
      role="article"
      aria-label={`Specialization: ${card.title}`}
    >
      <h5 className={titleClasses}>
        <span className="w-5 h-5 mr-2 text-xl">{card.icon}</span>
        {card.title}
      </h5>
      <p className={descriptionClasses}>
        {card.description}
      </p>
    </div>
  );
};

export default SpecializationCardComponent;