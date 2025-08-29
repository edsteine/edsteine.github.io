import React from 'react';
import { experienceData } from '@/data/experienceData';
import InteractiveTimeline from './features/InteractiveTimeline';

const Experience = () => {
  // Transform experienceData to timeline format
  const timelineEvents = experienceData.map((job, index) => ({
    id: `job-${index}`,
    title: job.role,
    company: job.company,
    date: job.period,
    duration: job.period.includes('Present') 
      ? `${job.period.split(' - ')[0]} - Present` 
      : job.period,
    description: job.description ? job.description[0] : '', // First description as summary
    achievements: [
      ...(job.achievements || []),
      ...(job.leadershipMentoring || []),
      ...(job.biggestContribution || []),
      ...(job.keySkillsImpact?.quantifiableAchievements || [])
    ].slice(0, 6), // Limit achievements for better UX
    technologies: job.fullTechStack || [],
    type: 'work' as const
  }));

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-orange-500 font-mono text-lg">class</span>{' '}
          <span className="text-blue-500">WorkExperience</span>{' '}
          <span className="text-gray-400">{'{'}</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Interactive journey through my professional career. Click on any position to explore detailed achievements and technologies.
        </p>
      </div>
      
      <InteractiveTimeline events={timelineEvents} />
    </div>
  );
};

export default Experience;