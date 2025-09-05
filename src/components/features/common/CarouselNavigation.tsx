"use client";

import React from 'react';

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}

const NAVIGATION_CLASSES = {
  button: "absolute top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
  icon: "w-6 h-6 text-gray-600 dark:text-gray-300",
  left: "left-4",
  right: "right-4",
} as const;

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrevious,
  onNext,
  previousLabel = "Previous",
  nextLabel = "Next",
  className = ""
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className={`${NAVIGATION_CLASSES.button} ${NAVIGATION_CLASSES.left} ${className}`}
        aria-label={previousLabel}
      >
        <svg 
          className={NAVIGATION_CLASSES.icon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        className={`${NAVIGATION_CLASSES.button} ${NAVIGATION_CLASSES.right} ${className}`}
        aria-label={nextLabel}
      >
        <svg 
          className={NAVIGATION_CLASSES.icon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};

export default CarouselNavigation;