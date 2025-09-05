
import { SECTION_STYLES } from '@/components/features/common/LazySection';
import SectionSkeleton from '@/components/ui/feedback/SectionSkeleton';
import dynamic from 'next/dynamic';
import React from 'react';


import AboutSection from "@/domains/about/components/AboutSection";
import HeroSection from "@/domains/hero/components/HeroSection";
import SkillsSection from "@/domains/skills/components/SkillsSection";


const ExperienceSection = dynamic(() => import("@/domains/experience/components/ExperienceSection"), {
  loading: () => <SectionSkeleton title="Experience" variant="timeline" height="lg" />,
  ssr: false
});

const EducationSection = dynamic(() => import("@/domains/education/components/EducationSection"), {
  loading: () => <SectionSkeleton title="Education" variant="cards" height="md" />,
  ssr: false
});

const ProjectsSection = dynamic(() => import("@/domains/projects/components/ProjectsSection"), {
  loading: () => <SectionSkeleton title="Projects" variant="cards" height="lg" />,
  ssr: false
});

const ContactSection = dynamic(() => import("@/domains/contact/components/ContactSection"), {
  loading: () => <SectionSkeleton title="Contact" variant="form" height="md" />,
  ssr: false
});

const LanguagesSection = dynamic(() => import("@/domains/languages/components/LanguagesSection"), {
  loading: () => <SectionSkeleton title="Languages" variant="stats" height="sm" />,
  ssr: false
});

const InterestsSection = dynamic(() => import("@/domains/interests/components/InterestsSection"), {
  loading: () => <SectionSkeleton title="Interests" variant="cards" height="sm" />,
  ssr: false
});

const ResumeDownloadSection = dynamic(() => import("@/domains/resume/components/ResumeDownloadSection"), {
  loading: () => <SectionSkeleton title="Resume" variant="stats" height="sm" />,
  ssr: false
});

const ProjectStats = dynamic(() => import("@/domains/projects/components/ProjectStats"), {
  loading: () => <SectionSkeleton title="Project Statistics" variant="stats" height="sm" />,
  ssr: false
});

const TestimonialsSection = dynamic(() => import("@/domains/testimonials/components/TestimonialsSection"), {
  loading: () => <SectionSkeleton title="Testimonials" variant="cards" height="md" />,
  ssr: false
});

const TechEvolutionTimeline = dynamic(() => import("@/components/features/timeline/TechEvolutionTimeline"), {
  loading: () => <SectionSkeleton title="Technology Evolution" variant="timeline" height="lg" />,
  ssr: false
});


const EducationTitle = () => (
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">class</span>{' '}
    <span className="text-green-500">Education</span>{' '}
    <span className="text-gray-400">{'{'}</span>
    <br />
    <span className="text-gray-400 ml-8">{'}'}</span>
  </h3>
);


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