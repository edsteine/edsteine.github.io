"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  type?: 'dots' | 'spinner' | 'pulse' | 'terminal';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  type = 'spinner',
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const containerClasses = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3'
  };

  if (type === 'dots') {
    return (
      <div className={`flex items-center justify-center ${containerClasses[size]}`}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${sizeClasses[size]} bg-blue-500 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
        {text && <span className="ml-3 text-gray-600 dark:text-gray-400 text-sm">{text}</span>}
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className="flex items-center justify-center">
        <motion.div
          className={`${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-purple-600 rounded-full`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        />
        {text && <span className="ml-3 text-gray-600 dark:text-gray-400 text-sm">{text}</span>}
      </div>
    );
  }

  if (type === 'terminal') {
    return (
      <div className="flex items-center justify-center font-mono text-sm">
        <motion.span
          className="text-green-500"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          $
        </motion.span>
        <span className="ml-2 text-gray-600 dark:text-gray-400">{text}</span>
        <motion.span
          className="ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </div>
    );
  }

  // Default spinner
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-300 dark:border-gray-600 border-t-blue-500 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {text && <span className="ml-3 text-gray-600 dark:text-gray-400 text-sm">{text}</span>}
    </div>
  );
};

// Skeleton loading component for content placeholders
export const SkeletonLoader: React.FC<{ 
  lines?: number; 
  height?: string; 
  className?: string 
}> = ({ lines = 3, height = 'h-4', className = '' }) => {
  // Generate deterministic widths to avoid hydration mismatch
  const widths = React.useMemo(() => {
    return Array.from({ length: lines }, (_, i) => {
      // Use index to create deterministic but varied widths
      const base = 85 + ((i * 7) % 15); // Varies between 85-99%
      return Math.min(100, base);
    });
  }, [lines]);

  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={`${height} bg-gray-200 dark:bg-gray-700 rounded`}
          style={{ width: `${widths[index]}%` }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.1
          }}
        />
      ))}
    </div>
  );
};

// App loading component for full-screen loading
export const AppLoading = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading your portfolio...</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Please wait while we set things up</p>
      </div>
    </div>
  );
};

// Section loading skeleton
export const SectionSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;