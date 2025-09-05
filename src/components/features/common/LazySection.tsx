
import { SectionSkeleton } from '@/components/ui/feedback/LoadingSpinner';
import React, { ComponentType, Suspense } from 'react';
import AnimatedSection from './AnimatedSection';


export const SECTION_STYLES = {
  default: "max-w-6xl mx-auto p-8 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
  gradient: "max-w-6xl mx-auto p-8 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700",
  hero: "",
  contact: ""
} as const;

interface LazySectionProps {
  component: ComponentType;
  id?: string;
  ariaLabel?: string;
  styleVariant?: keyof typeof SECTION_STYLES;
  customClassName?: string;
  showCustomTitle?: boolean;
  customTitle?: React.ReactNode;
}

export default function LazySection({ 
  component: Component, 
  id, 
  ariaLabel, 
  styleVariant = 'default',
  customClassName,
  showCustomTitle = false,
  customTitle
}: LazySectionProps) {
  const className = customClassName || SECTION_STYLES[styleVariant];
  
  return (
    <AnimatedSection 
      {...(id && { id })}
      className={className}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
    >
      {showCustomTitle && customTitle}
      <Suspense fallback={<SectionSkeleton />}>
        <Component />
      </Suspense>
    </AnimatedSection>
  );
}