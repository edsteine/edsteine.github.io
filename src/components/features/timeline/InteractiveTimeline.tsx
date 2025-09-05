"use client";

import React, { useState } from 'react';

export interface TimelineEvent {
  id: string;
  title: string;
  company: string;
  date: string;
  duration: string;
  description: string | string[];
  achievements: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

export interface InteractiveTimelineProps {
  events: TimelineEvent[];
}

type EventType = TimelineEvent['type'];

interface TimelineConfig {
  previewAchievements: number;
  previewTechnologies: number;
  animationDuration: string;
}

interface TypeStyleConfig {
  [key: string]: {
    color: string;
    bgColor: string;
    textColor: string;
  };
}

const TIMELINE_CONFIG: TimelineConfig = {
  previewAchievements: 2,
  previewTechnologies: 3,
  animationDuration: 'duration-300',
} as const;

const TYPE_STYLES: TypeStyleConfig = {
  work: {
    color: 'bg-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-800 dark:text-blue-200',
  },
  education: {
    color: 'bg-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-800 dark:text-green-200',
  },
  project: {
    color: 'bg-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-800 dark:text-purple-200',
  },
} as const;

const TIMELINE_CLASSES = {
  container: 'relative max-w-6xl mx-auto',
  line: 'absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500',
  eventsContainer: 'space-y-8',
  eventContainer: 'relative flex items-center',
  node: 'absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 z-10',
  cardContainer: 'ml-16 md:ml-0 md:w-5/12 md:mx-8 cursor-pointer w-full max-w-lg',
  card: 'bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 transition-colors duration-300',
  cardSelected: 'border-blue-500',
  cardHover: 'border-transparent hover:border-blue-300 dark:hover:border-blue-600',
  header: 'flex items-center space-x-3 mb-3',
  iconContainer: 'text-blue-600 dark:text-blue-400',
  titleContainer: 'flex-1 min-w-0',
  title: 'text-lg font-bold text-gray-900 dark:text-white leading-tight',
  company: 'text-blue-600 dark:text-blue-400 font-semibold text-sm truncate',
  dateContainer: 'text-right text-xs text-gray-500 dark:text-gray-400 flex-shrink-0',
  date: 'font-medium',
  duration: 'font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1',
  description: 'text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed',
  achievementsContainer: 'mb-4',
  achievementsTitle: 'text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 flex items-center',
  achievementsList: 'space-y-1',
  achievement: 'text-xs text-gray-600 dark:text-gray-400 flex items-start',
  achievementBullet: 'text-green-500 mr-2 text-xs',
  achievementText: 'leading-relaxed',
  moreAchievements: 'text-xs text-blue-600 dark:text-blue-400 flex items-start',
  techContainer: 'flex flex-wrap gap-1 mb-4',
  techBadge: 'px-2 py-1 rounded-full text-xs font-medium',
  moreTech: 'px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs',
  expandContainer: 'flex items-center justify-between',
  expandText: 'text-xs text-gray-500 dark:text-gray-400',
  expandIcon: 'w-5 h-5 text-blue-500 transition-transform duration-300',
  legend: 'mt-12 flex justify-center',
  legendContainer: 'flex space-x-6 text-sm',
  legendItem: 'flex items-center space-x-2',
  legendDot: 'w-3 h-3 rounded-full',
  legendText: 'text-gray-600 dark:text-gray-400',
} as const;

const LEGEND_DATA = [
  { type: 'work' as EventType, label: 'Work Experience' },
  { type: 'education' as EventType, label: 'Education' },
  { type: 'project' as EventType, label: 'Major Projects' },
] as const;

// Simple icon components instead of emoji
const WorkIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zM8 5a1 1 0 011-1h2a1 1 0 011 1v1H8V5zM4 8v6h12V8H4z" clipRule="evenodd"/>
  </svg>
);

const EducationIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
  </svg>
);

const ProjectIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
  </svg>
);

const getTypeStyles = (type: EventType) => {
  return TYPE_STYLES[type] || {
    color: 'bg-gray-500',
    bgColor: 'bg-gray-100 dark:bg-gray-700',
    textColor: 'text-gray-800 dark:text-gray-200',
  };
};

const getTypeIcon = (type: EventType) => {
  const icons = {
    work: WorkIcon,
    education: EducationIcon,
    project: ProjectIcon,
  } as const;
  
  const IconComponent = icons[type] || WorkIcon;
  return <IconComponent />;
};

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const toggleEvent = (eventId: string) => {
    setSelectedEvent(selectedEvent === eventId ? null : eventId);
  };

  return (
    <div className={TIMELINE_CLASSES.container} role="region" aria-label="Interactive timeline">
      {/* Timeline line */}
      <div className={TIMELINE_CLASSES.line} aria-hidden="true" />

      {/* Timeline events */}
      <div className={TIMELINE_CLASSES.eventsContainer}>
        {events.map((event) => {
          const isSelected = selectedEvent === event.id;
          const typeStyles = getTypeStyles(event.type);

          return (
            <article
              key={event.id}
              className={TIMELINE_CLASSES.eventContainer}
            >
              {/* Timeline node */}
              <div 
                className={`${TIMELINE_CLASSES.node} ${typeStyles.color}`}
                role="img"
                aria-label={`${event.type} event marker`}
              />

              {/* Content card */}
              <div
                className={TIMELINE_CLASSES.cardContainer}
                onClick={() => toggleEvent(event.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleEvent(event.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                aria-label={`${isSelected ? 'Collapse' : 'Expand'} details for ${event.title}`}
              >
                <div className={`${TIMELINE_CLASSES.card} ${
                  isSelected ? TIMELINE_CLASSES.cardSelected : TIMELINE_CLASSES.cardHover
                }`}>
                  {/* Header */}
                  <header className={TIMELINE_CLASSES.header}>
                    <div className={TIMELINE_CLASSES.iconContainer} aria-hidden="true">
                      {getTypeIcon(event.type)}
                    </div>
                    <div className={TIMELINE_CLASSES.titleContainer}>
                      <h3 className={TIMELINE_CLASSES.title}>
                        {event.title}
                      </h3>
                      <p className={TIMELINE_CLASSES.company}>
                        {event.company}
                      </p>
                    </div>
                    <div className={TIMELINE_CLASSES.dateContainer}>
                      <time className={TIMELINE_CLASSES.date} dateTime={event.date}>
                        {event.date}
                      </time>
                      <div className={TIMELINE_CLASSES.duration} aria-label={`Duration: ${event.duration}`}>
                        {event.duration}
                      </div>
                    </div>
                  </header>

                  {/* Description */}
                  <div className={TIMELINE_CLASSES.description}>
                    {Array.isArray(event.description) 
                      ? event.description.map((desc, idx) => (
                          <p key={idx} className="mb-2 last:mb-0">
                            {desc}
                          </p>
                        ))
                      : <p>{event.description}</p>
                    }
                  </div>

                  {/* Key Achievements */}
                  {event.achievements.length > 0 && (
                    <section className={TIMELINE_CLASSES.achievementsContainer}>
                      <h4 className={TIMELINE_CLASSES.achievementsTitle}>
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" aria-hidden="true" />
                        Key Highlights
                      </h4>
                      <ul className={TIMELINE_CLASSES.achievementsList}>
                        {event.achievements.slice(0, isSelected ? event.achievements.length : TIMELINE_CONFIG.previewAchievements).map((achievement, achIndex) => (
                          <li key={`achievement-${achIndex}`} className={TIMELINE_CLASSES.achievement}>
                            <span className={TIMELINE_CLASSES.achievementBullet} aria-hidden="true">•</span>
                            <span className={TIMELINE_CLASSES.achievementText}>{achievement}</span>
                          </li>
                        ))}
                        {!isSelected && event.achievements.length > TIMELINE_CONFIG.previewAchievements && (
                          <li className={TIMELINE_CLASSES.moreAchievements}>
                            <span className="text-blue-500 mr-2 text-xs" aria-hidden="true">+</span>
                            <span>{event.achievements.length - TIMELINE_CONFIG.previewAchievements} more achievements...</span>
                          </li>
                        )}
                      </ul>
                    </section>
                  )}

                  {/* Technologies */}
                  {event.technologies.length > 0 && (
                    <section className={TIMELINE_CLASSES.techContainer} aria-label="Technologies used">
                      {event.technologies.slice(0, isSelected ? event.technologies.length : TIMELINE_CONFIG.previewTechnologies).map((tech, techIndex) => (
                        <span
                          key={`tech-${techIndex}`}
                          className={`${TIMELINE_CLASSES.techBadge} ${typeStyles.bgColor} ${typeStyles.textColor}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {!isSelected && event.technologies.length > TIMELINE_CONFIG.previewTechnologies && (
                        <span className={TIMELINE_CLASSES.moreTech}>
                          +{event.technologies.length - TIMELINE_CONFIG.previewTechnologies} more
                        </span>
                      )}
                    </section>
                  )}

                  {/* Expand/Collapse indicator */}
                  <footer className={TIMELINE_CLASSES.expandContainer}>
                    <span className={TIMELINE_CLASSES.expandText}>
                      {isSelected ? 'Click to collapse' : 'Click to expand'}
                    </span>
                    <svg 
                      className={`${TIMELINE_CLASSES.expandIcon} ${isSelected ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </footer>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Legend */}
      <footer className={TIMELINE_CLASSES.legend} role="contentinfo">
        <div className={TIMELINE_CLASSES.legendContainer}>
          {LEGEND_DATA.map((item) => {
            const styles = getTypeStyles(item.type);
            return (
              <div key={item.type} className={TIMELINE_CLASSES.legendItem}>
                <div className={`${TIMELINE_CLASSES.legendDot} ${styles.color}`} aria-hidden="true" />
                <span className={TIMELINE_CLASSES.legendText}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default InteractiveTimeline;