"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  client: string;
  status: string;
  image: string;
  shortDescription: string;
  caseStudy?: {
    challenge: string;
    solution: string;
    process: string[];
    results: Record<string, string>;
    technologies: string[];
    features: string[];
    challenges: Array<{
      problem: string;
      solution: string;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      title: string;
    };
  };
  links: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  featured: boolean;
}

interface ProjectCaseStudyProps {
  project: Project;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!project.caseStudy) {
    // Fallback to basic project card
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
              {project.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {project.timeline}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.shortDescription}
          </p>
          
          <div className="flex gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                {t('projects.viewProject')}
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                {t('projects.viewCode')}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Project Header */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-sm">
              {project.timeline}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-1">
            {project.title}
          </h3>
          <p className="text-blue-200">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="p-6">
        {/* Project Overview */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.shortDescription}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Client</span>
              <p className="font-semibold text-gray-900 dark:text-white">{project.client}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Status</span>
              <p className="font-semibold text-green-600">{project.status}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Timeline</span>
              <p className="font-semibold text-gray-900 dark:text-white">{project.timeline}</p>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('challenge')}
            className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="font-semibold text-gray-900 dark:text-white">
              The Challenge
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                expandedSection === 'challenge' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <AnimatePresence>
            {expandedSection === 'challenge' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  {project.caseStudy.challenge}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Solution Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('solution')}
            className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="font-semibold text-gray-900 dark:text-white">
              The Solution
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                expandedSection === 'solution' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <AnimatePresence>
            {expandedSection === 'solution' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  {project.caseStudy.solution}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('results')}
            className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="font-semibold text-gray-900 dark:text-white">
              Results & Impact
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                expandedSection === 'results' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <AnimatePresence>
            {expandedSection === 'results' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(project.caseStudy.results).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            {t('projects.technologies')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.caseStudy.testimonial && (
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <blockquote className="text-gray-700 dark:text-gray-300 mb-3 italic">
              &ldquo;{project.caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            <div className="text-sm">
              <span className="font-semibold text-gray-900 dark:text-white">
                {project.caseStudy.testimonial.author}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                , {project.caseStudy.testimonial.title}
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('projects.viewProject')}
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              {t('projects.viewCode')}
            </a>
          )}
          {project.links.case_study && (
            <a
              href={project.links.case_study}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              {t('projects.caseStudy')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;