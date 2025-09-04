"use client";

import React from 'react';

interface AutoPlayToggleProps {
  isAutoPlaying: boolean;
  onToggle: (enabled: boolean) => void;
  pauseLabel?: string;
  resumeLabel?: string;
  className?: string;
}

const TOGGLE_CLASSES = {
  button: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center space-x-2",
  icon: "w-4 h-4",
} as const;

const AutoPlayToggle: React.FC<AutoPlayToggleProps> = ({
  isAutoPlaying,
  onToggle,
  pauseLabel = "Pause Autoplay",
  resumeLabel = "Resume Autoplay", 
  className = ""
}) => {
  const handleToggle = () => {
    onToggle(!isAutoPlaying);
  };

  return (
    <button
      onClick={handleToggle}
      className={`${TOGGLE_CLASSES.button} ${className}`}
      aria-label={isAutoPlaying ? pauseLabel : resumeLabel}
    >
      {isAutoPlaying ? (
        <>
          <svg className={TOGGLE_CLASSES.icon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
          <span>{pauseLabel}</span>
        </>
      ) : (
        <>
          <svg className={TOGGLE_CLASSES.icon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>{resumeLabel}</span>
        </>
      )}
    </button>
  );
};

export default AutoPlayToggle;