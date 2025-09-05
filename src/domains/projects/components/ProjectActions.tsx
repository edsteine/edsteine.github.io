"use client";

import React from 'react';

interface ProjectActionsProps {
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  viewProjectText: string;
  viewCodeText: string;
  caseStudyText: string;
  variant?: 'compact' | 'full';
}

const ProjectActions: React.FC<ProjectActionsProps> = ({
  demoUrl,
  githubUrl,
  caseStudyUrl,
  viewProjectText,
  viewCodeText,
  caseStudyText,
  variant = 'full'
}) => {
  const buttonClass = variant === 'compact'
    ? "px-4 py-2 rounded-lg text-sm transition-colors"
    : "px-6 py-3 rounded-lg transition-colors font-semibold";

  return (
    <div className={`flex ${variant === 'compact' ? 'gap-3' : 'gap-4'} ${variant === 'compact' ? 'justify-start' : 'justify-center'} flex-wrap`}>
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-blue-600 text-white hover:bg-blue-700`}
        >
          {viewProjectText}
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700`}
        >
          {viewCodeText}
        </a>
      )}
      {caseStudyUrl && (
        <a
          href={caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-green-600 text-white hover:bg-green-700`}
        >
          {caseStudyText}
        </a>
      )}
    </div>
  );
};

export default ProjectActions;