// Sections Renderer - Single Responsibility: Render sections based on configuration
import React from 'react';
import AnimatedSection from '@/components/features/common/AnimatedSection';
import LazySection from '@/components/features/common/LazySection';
import { PORTFOLIO_SECTIONS, SectionConfig } from '@/lib/config/sectionsConfig';

function renderSection(config: SectionConfig, index: number) {
  const key = config.id || `section-${index}`;
  
  if (config.type === 'immediate') {
    return (
      <AnimatedSection key={key} variant={index === 0 ? 'immediate' : 'default'}>
        <config.component />
      </AnimatedSection>
    );
  }
  
  return (
    <LazySection
      key={key}
      component={config.component}
      id={config.id}
      ariaLabel={config.ariaLabel}
      styleVariant={config.styleVariant}
      customClassName={config.customClassName}
      showCustomTitle={config.showCustomTitle}
      customTitle={config.customTitle}
    />
  );
}

export default function SectionsRenderer() {
  return (
    <>
      {PORTFOLIO_SECTIONS.map((config, index) => renderSection(config, index))}
    </>
  );
}