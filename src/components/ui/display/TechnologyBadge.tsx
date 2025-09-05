"use client";

import React from 'react';

interface TechnologyBadgeProps {
  technology: string;
  index?: number;
  variant?: 'primary' | 'secondary';
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ 
  technology, 
  index, 
  variant = 'primary' 
}) => {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-medium transition-colors";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";

  return (
    <span 
      key={index}
      className={`${baseClasses} ${variantClasses}`}
    >
      {technology}
    </span>
  );
};

export default TechnologyBadge;