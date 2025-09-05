/**
 * Section Skeleton Component
 * Loading placeholder for lazy-loaded sections
 */

import React from 'react';

interface SectionSkeletonProps {
  title?: string;
  description?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'cards' | 'timeline' | 'form' | 'stats';
}

const HEIGHT_CLASSES = {
  sm: 'h-64',
  md: 'h-96',
  lg: 'h-[32rem]',
  xl: 'h-[40rem]'
} as const;

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({ 
  title = "Loading section...",
  description = "Please wait while we load the content",
  height = 'md',
  variant = 'cards'
}) => {
  const renderVariant = () => {
    switch (variant) {
      case 'timeline':
        return <TimelineSkeleton />;
      case 'form':
        return <FormSkeleton />;
      case 'stats':
        return <StatsSkeleton />;
      default:
        return <CardsSkeleton />;
    }
  };

  return (
    <section 
      className={`max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 ${HEIGHT_CLASSES[height]}`}
      aria-label={`Loading ${title}`}
      role="status"
      aria-live="polite"
    >
      {/* Section Header Skeleton */}
      <div className="text-center mb-12 animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md mx-auto mb-4 w-64"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md mx-auto w-96 max-w-full"></div>
      </div>

      {/* Content Skeleton */}
      <div className="animate-pulse">
        {renderVariant()}
      </div>

      {/* Screen Reader Text */}
      <span className="sr-only">{description}</span>
    </section>
  );
};

// Timeline variant skeleton
const TimelineSkeleton: React.FC = () => (
  <div className="space-y-8">
    {[1, 2, 3].map((item) => (
      <div key={item} className="flex gap-4">
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full mt-2"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-2 w-48"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md mb-2 w-32"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 mt-1"></div>
        </div>
      </div>
    ))}
  </div>
);

// Cards variant skeleton
const CardsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div key={item} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-4/6"></div>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
        </div>
      </div>
    ))}
  </div>
);

// Form variant skeleton
const FormSkeleton: React.FC = () => (
  <div className="max-w-2xl mx-auto space-y-6">
    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
    <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md w-32 ml-auto"></div>
  </div>
);

// Stats variant skeleton
const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((item) => (
      <div key={item} className="text-center">
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md mb-2 w-24 mx-auto"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-2 w-32 mx-auto"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-48 mx-auto"></div>
      </div>
    ))}
  </div>
);

export default SectionSkeleton;
export { TimelineSkeleton, CardsSkeleton, FormSkeleton, StatsSkeleton };