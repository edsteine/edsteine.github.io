"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import ProjectHeader from '@/domains/projects/components/ProjectHeader';
import ProjectOverview from '@/domains/projects/components/ProjectOverview';
import ExpandableSection from '@/components/features/common/ExpandableSection';
import TechnologyBadge from '@/components/ui/display/TechnologyBadge';
import ProjectActions from '@/domains/projects/components/ProjectActions';

// Focused interfaces following Interface Segregation Principle
interface ProjectBasic {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  client: string;
  status: string;
  image: string;
  shortDescription: string;
  featured: boolean;
}

interface ProjectLinks {
  demo?: string;
  github?: string;
  case_study?: string;
}

interface ProjectTestimonial {
  quote: string;
  author: string;
  title: string;
}

interface ProjectChallenge {
  problem: string;
  solution: string;
}

interface ProjectCaseStudyDetails {
  challenge: string;
  solution: string;
  process: string[];
  results: Record<string, string>;
  technologies: string[];
  features: string[];
  challenges: ProjectChallenge[];
  testimonial?: ProjectTestimonial;
}

export interface Project extends ProjectBasic {
  caseStudy?: ProjectCaseStudyDetails;
  links: ProjectLinks;
}

interface ProjectCaseStudyProps {
  project: Project;
}

// Configuration constants following Open/Closed Principle
const SECTION_CONFIG = {
  challenge: { title: 'The Challenge', key: 'challenge' },
  solution: { title: 'Our Solution', key: 'solution' },
  process: { title: 'Development Process', key: 'process' },
  results: { title: 'Results & Impact', key: 'results' },
  features: { title: 'Key Features', key: 'features' },
} as const;

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Helper function to safely convert translation to string
  const tr = (key: string): string => String(t(key));

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // If no case study, render compact version
  if (!project.caseStudy) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <ProjectHeader 
          title={project.title}
          subtitle={project.subtitle}
          category={project.category}
          timeline={project.timeline}
          image={project.image}
        />
        <div className="p-6">
          <ProjectOverview
            shortDescription={project.shortDescription}
            client={project.client}
            status={project.status}
            timeline={project.timeline}
          />
          <ProjectActions
            demoUrl={project.links.demo}
            githubUrl={project.links.github}
            caseStudyUrl={project.links.case_study}
            viewProjectText={tr('projects.viewProject')}
            viewCodeText={tr('projects.viewCode')}
            caseStudyText={tr('projects.caseStudy')}
            variant="compact"
          />
        </div>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <ProjectHeader 
        title={project.title}
        subtitle={project.subtitle}
        category={project.category}
        timeline={project.timeline}
        image={project.image}
      />

      <div className="p-6">
        <ProjectOverview
          shortDescription={project.shortDescription}
          client={project.client}
          status={project.status}
          timeline={project.timeline}
        />

        {/* Challenge Section */}
        <ExpandableSection
          title={SECTION_CONFIG.challenge.title}
          isExpanded={expandedSection === SECTION_CONFIG.challenge.key}
          onToggle={() => toggleSection(SECTION_CONFIG.challenge.key)}
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </ExpandableSection>

        {/* Solution Section */}
        <ExpandableSection
          title={SECTION_CONFIG.solution.title}
          isExpanded={expandedSection === SECTION_CONFIG.solution.key}
          onToggle={() => toggleSection(SECTION_CONFIG.solution.key)}
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {caseStudy.solution}
          </p>
        </ExpandableSection>

        {/* Process Section */}
        <ExpandableSection
          title={SECTION_CONFIG.process.title}
          isExpanded={expandedSection === SECTION_CONFIG.process.key}
          onToggle={() => toggleSection(SECTION_CONFIG.process.key)}
        >
          <div className="space-y-3">
            {caseStudy.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </ExpandableSection>

        {/* Results Section */}
        <ExpandableSection
          title={SECTION_CONFIG.results.title}
          isExpanded={expandedSection === SECTION_CONFIG.results.key}
          onToggle={() => toggleSection(SECTION_CONFIG.results.key)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(caseStudy.results).map(([metric, value]) => (
              <div key={metric} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-white capitalize mb-1">
                  {metric.replace(/([A-Z])/g, ' $1').trim()}
                </h5>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </ExpandableSection>

        {/* Features Section */}
        <ExpandableSection
          title={SECTION_CONFIG.features.title}
          isExpanded={expandedSection === SECTION_CONFIG.features.key}
          onToggle={() => toggleSection(SECTION_CONFIG.features.key)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {caseStudy.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </ExpandableSection>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            {tr('projects.technologies')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech, index) => (
              <TechnologyBadge 
                key={index} 
                technology={tech} 
                index={index} 
              />
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
            <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            <div className="text-sm">
              <p className="font-semibold text-gray-900 dark:text-white">
                {caseStudy.testimonial.author}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {caseStudy.testimonial.title}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <ProjectActions
          demoUrl={project.links.demo}
          githubUrl={project.links.github}
          caseStudyUrl={project.links.case_study}
          viewProjectText={tr('projects.viewProject')}
          viewCodeText={tr('projects.viewCode')}
          caseStudyText={tr('projects.caseStudy')}
          variant="full"
        />
      </div>
    </div>
  );
};

export default ProjectCaseStudy;