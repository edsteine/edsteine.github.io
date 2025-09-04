"use client";

import React from 'react';

interface StarIconProps {
  filled: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled }) => (
  <svg 
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} 
    fill="currentColor" 
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const STAR_SIZES = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5', 
  lg: 'w-6 h-6',
} as const;

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = 'md',
  className = '' 
}) => {
  const sizeClass = STAR_SIZES[size];
  
  return (
    <div 
      className={`flex items-center ${className}`} 
      role="img" 
      aria-label={`${rating} out of ${maxRating} stars`}
    >
      {Array.from({ length: maxRating }, (_, index) => (
        <div key={index} className={sizeClass}>
          <StarIcon filled={index < rating} />
        </div>
      ))}
    </div>
  );
};

export default StarRating;