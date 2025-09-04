// Sections Configuration - Single Responsibility: Define page sections
import dynamic from 'next/dynamic';
import React from 'react';
import { SECTION_STYLES } from '@/app/_components/ui/LazySection';

// Core sections (immediate load)
import HeroSection from "@/app/_components/sections/HeroSection";
import AboutSection from "@/app/_components/sections/AboutSection";
import SkillsSection from "@/app/_components/sections/SkillsSection";

// Lazy-loaded sections
const ExperienceSection = dynamic(() => import("@/app/_components/sections/ExperienceSection"));
const EducationSection = dynamic(() => import("@/app/_components/sections/EducationSection"));
const ProjectsSection = dynamic(() => import("@/app/_components/sections/ProjectsSection"));
const ContactSection = dynamic(() => import("@/app/_components/sections/ContactSection"));
const LanguagesSection = dynamic(() => import("@/app/_components/sections/LanguagesSection"));
const InterestsSection = dynamic(() => import("@/app/_components/sections/InterestsSection"));
const ResumeDownloadSection = dynamic(() => import("@/app/_components/sections/ResumeDownloadSection"));
const ProjectStats = dynamic(() => import("@/app/_components/features/ProjectStats"));
const TestimonialsSection = dynamic(() => import("@/app/_components/features/TestimonialsSection"));
const TechEvolutionTimeline = dynamic(() => import("@/app/_components/features/TechEvolutionTimeline"));

// Education custom title component
const EducationTitle = () => (
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">class</span>{' '}
    <span className="text-green-500">Education</span>{' '}
    <span className="text-gray-400">{'{'}</span>
    <br />
    <span className="text-gray-400 ml-8">{'}'}</span>
  </h3>
);

// Section configuration interface
export interface SectionConfig {
  id?: string;
  component: React.ComponentType;
  type: 'immediate' | 'lazy';
  styleVariant?: keyof typeof SECTION_STYLES;
  ariaLabel?: string;
  showCustomTitle?: boolean;
  customTitle?: React.ReactNode;
  customClassName?: string;
}

// Main sections configuration - Easy to modify!
export const PORTFOLIO_SECTIONS: SectionConfig[] = [
  {
    component: HeroSection,
    type: 'immediate'
  },
  {
    component: AboutSection,
    type: 'immediate'
  },
  {
    component: SkillsSection,
    type: 'immediate'
  },
  {
    id: 'experience',
    component: ExperienceSection,
    type: 'lazy',
    styleVariant: 'default',
    ariaLabel: 'Professional work experience and achievements'
  },
  {
    component: TechEvolutionTimeline,
    type: 'lazy',
    styleVariant: 'gradient'
  },
  {
    component: TestimonialsSection,
    type: 'lazy',
    styleVariant: 'default'
  },
  {
    component: ProjectStats,
    type: 'lazy',
    styleVariant: 'default'
  },
  {
    component: ProjectsSection,
    type: 'lazy'
  },
  {
    id: 'education',
    component: EducationSection,
    type: 'lazy',
    styleVariant: 'default',
    ariaLabel: 'Educational background and certifications',
    showCustomTitle: true,
    customTitle: <EducationTitle />
  },
  {
    component: LanguagesSection,
    type: 'lazy'
  },
  {
    component: ResumeDownloadSection,
    type: 'lazy'
  },
  {
    component: ContactSection,
    type: 'lazy'
  },
  {
    component: InterestsSection,
    type: 'lazy'
  }
];