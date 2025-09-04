"use client";

import React from 'react';
// InterestsService functionality implemented inline
import InterestCategory from '@/app/_components/ui/InterestCategory';

// Configuration constants following Open/Closed Principle
const SECTION_CLASSES = {
  container: "max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
  title: "text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white",
  content: "max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400",
  grid: "grid md:grid-cols-2 gap-8"
} as const;

const InterestsSection: React.FC = () => {
  // Get interests data
  const interestsCategories = [
    {
      id: 1,
      title: 'Technology & Innovation',
      icon: '🚀',
      items: [
        'Emerging Technologies',
        'Open Source Contribution',
        'Tech Community Involvement',
        'Innovation Projects'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Learning & Growth',
      icon: '📚',
      items: [
        'Continuous Learning',
        'Technical Writing',
        'Mentoring Others',
        'Industry Research'
      ],
      color: 'bg-green-500'
    }
  ];
  return (
    <section 
      id="interests" 
      className={SECTION_CLASSES.container}
      aria-label="Personal interests and hobbies"
    >
      <h3 className={SECTION_CLASSES.title}>
        Interests & Hobbies
      </h3>
      
      <div className={SECTION_CLASSES.content}>
        <div className={SECTION_CLASSES.grid}>
          {interestsCategories.map((category) => (
            <InterestCategory 
              key={category.id} 
              category={category} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;