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
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={`${height} bg-gray-200 dark:bg-gray-700 rounded`}
          style={{ width: `${85 + Math.random() * 15}%` }}
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

export default LoadingSpinner;