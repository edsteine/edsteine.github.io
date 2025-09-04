// InterestCategory component - Following Single Responsibility Principle
"use client";

import React from 'react';
// InterestsService functionality implemented inline

interface InterestCategory {
  id: number;
  title: string;
  icon: string;
  items: string[];
  color: string;
}

interface InterestCategoryProps {
  category: InterestCategory;
  className?: string;
}

const InterestCategoryComponent: React.FC<InterestCategoryProps> = ({ 
  category, 
  className = '' 
}) => {
  // Inline styling and logic
  const containerClasses = `bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 ${category.color}`;
  const titleClasses = "text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center";
  
  return (
    <div 
      className={`${containerClasses} ${className}`}
      role="article"
      aria-label={`Interest category: ${category.title}`}
    >
      <h4 className={titleClasses}>
        <span className="w-5 h-5 mr-3 text-2xl">{category.icon}</span>
        {category.title}
      </h4>
      <ul className="list-disc list-inside space-y-2 text-sm">
        {category.items.map((item, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-400">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterestCategoryComponent;