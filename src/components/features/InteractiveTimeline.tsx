"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  id: string;
  title: string;
  company: string;
  date: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
  icon?: string;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-blue-500';
      case 'education': return 'bg-green-500';
      case 'project': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work': return '💼';
      case 'education': return '🎓';
      case 'project': return '🚀';
      default: return '📅';
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

      {/* Timeline events */}
      <div className="space-y-8">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          const isSelected = selectedEvent === event.id;
          const isHovered = hoveredEvent === event.id;

          return (
            <motion.div
              key={event.id}
              className={`relative flex items-center ${
                isLeft ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline node */}
              <motion.div
                className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 z-10 ${getTypeColor(event.type)}`}
                whileHover={{ scale: 1.3 }}
                animate={{
                  boxShadow: isSelected || isHovered 
                    ? '0 0 20px rgba(59, 130, 246, 0.6)' 
                    : '0 0 0px rgba(59, 130, 246, 0)'
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content card */}
              <motion.div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  isLeft ? 'md:mr-8' : 'md:ml-8'
                } cursor-pointer`}
                onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                whileHover={{ scale: 1.02 }}
                animate={{
                  borderColor: isSelected || isHovered ? '#3b82f6' : 'transparent'
                }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                  layout
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getTypeIcon(event.type)}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {event.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                      <div>{event.date}</div>
                      <div className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                        {event.duration}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.technologies.slice(0, isSelected ? event.technologies.length : 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {!isSelected && event.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{event.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Expand/Collapse indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {isSelected ? 'Click to collapse' : 'Click to expand'}
                    </span>
                    <motion.div
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {event.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start space-x-3 text-sm text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                            >
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Date badge for desktop */}
              <div className={`hidden md:block absolute top-6 ${
                isLeft ? 'left-8' : 'right-8'
              } transform ${isLeft ? '-translate-x-full' : 'translate-x-full'}`}>
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-mono"
                  whileHover={{ scale: 1.05 }}
                >
                  {event.date}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-12 flex justify-center">
        <div className="flex space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Work Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Education</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Major Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;