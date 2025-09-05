"use client";

import React from 'react';

interface ProjectOverviewProps {
  shortDescription: string;
  client: string;
  status: string;
  timeline: string;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  shortDescription,
  client,
  status,
  timeline
}) => {
  return (
    <div className="mb-6">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {shortDescription}
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Client</span>
          <p className="font-semibold text-gray-900 dark:text-white">{client}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Status</span>
          <p className="font-semibold text-green-600">{status}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Timeline</span>
          <p className="font-semibold text-gray-900 dark:text-white">{timeline}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;