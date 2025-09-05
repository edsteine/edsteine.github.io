"use client";

import React from 'react';

interface CarouselDotsProps {
  totalItems: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  dotLabel?: (index: number) => string;
  className?: string;
}

const DOT_CLASSES = {
  container: "flex justify-center space-x-2 mt-6",
  dot: "w-3 h-3 rounded-full transition-all duration-200 cursor-pointer",
  active: "bg-blue-600 scale-110",
  inactive: "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500",
} as const;

const CarouselDots: React.FC<CarouselDotsProps> = ({
  totalItems,
  currentIndex,
  onDotClick,
  dotLabel = (index) => `Go to item ${index + 1}`,
  className = ""
}) => {
  return (
    <div className={`${DOT_CLASSES.container} ${className}`}>
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`${DOT_CLASSES.dot} ${
            index === currentIndex 
              ? DOT_CLASSES.active 
              : DOT_CLASSES.inactive
          }`}
          aria-label={dotLabel(index)}
          aria-current={index === currentIndex ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};

export default CarouselDots;