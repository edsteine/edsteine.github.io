"use client";

import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  description?: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  value, 
  label, 
  description, 
  color
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-${color}-500 hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`text-3xl bg-${color}-100 dark:bg-${color}-900/30 p-3 rounded-full`}>
            {icon}
          </div>
          <div>
            <div className={`text-3xl font-bold text-${color}-600 dark:text-${color}-400`}>
              {value}
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">{label}</p>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};


const UserIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
  </svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
  </svg>
);

const ProjectStats: React.FC = () => {
  
  const MAIN_STATS = [
    {
      icon: <UserIcon />,
      value: '100K+',
      label: 'Daily Users Served',
      description: 'Applications serving over 100,000 daily active users across multiple sectors.',
      color: 'blue'
    },
    {
      icon: <ChartIcon />,
      value: '99.9%',
      label: 'System Uptime',
      description: 'Exceptional uptime across mission-critical applications through robust architecture.',
      color: 'green'
    },
    {
      icon: <RocketIcon />,
      value: '95%',
      label: 'On-Time Delivery',
      description: 'Consistent project delivery rate while leading cross-functional teams.',
      color: 'purple'
    }
  ];

  const QUICK_METRICS = [
    { name: 'Mobile Apps Built', value: 15 },
    { name: 'Enterprise Systems', value: 8 },
    { name: 'Years Experience', value: 9 },
    { name: 'Technologies Mastered', value: 25 }
  ];

  const TECH_DISTRIBUTION = [
    { tech: 'Mobile Development', percentage: 35, color: 'bg-green-500' },
    { tech: 'Backend Systems', percentage: 30, color: 'bg-blue-500' },
    { tech: 'Frontend Development', percentage: 20, color: 'bg-purple-500' },
    { tech: 'DevOps & Architecture', percentage: 15, color: 'bg-orange-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12">
      {}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-600">Project</span>{' '}
          <span className="text-gray-900 dark:text-white">Metrics</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Quantified impact from 9+ years of enterprise development
        </p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {MAIN_STATS.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Quick Stats Overview
        </h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {QUICK_METRICS.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {metric.value}+
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {metric.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <ChartIcon />
          <span className="ml-2">Technology Focus Distribution</span>
        </h4>
        
        <div className="space-y-4">
          {TECH_DISTRIBUTION.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.tech}
                </span>
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;