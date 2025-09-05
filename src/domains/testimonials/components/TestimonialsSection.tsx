"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import { testimonialsData, testimonialStats } from '@/domains/testimonials/data/testimonials';
import TestimonialCard from '@/domains/testimonials/components/TestimonialCard';
import CarouselNavigation from '@/components/features/common/CarouselNavigation';
import CarouselDots from '@/components/ui/display/CarouselDots';
import AutoPlayToggle from '@/components/ui/controls/AutoPlayToggle';

// Configuration constants following Open/Closed Principle
const TESTIMONIALS_CONFIG = {
  autoPlayInterval: 5000, // 5 seconds
  animationDuration: 0.5,
  headerAnimation: {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  },
  cardAnimation: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.5 }
  }
} as const;

const TestimonialsSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  
  // Helper to safely convert translation to string for React
  const tr = (key: string): string => String(t(key));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Default OFF for accessibility

  const testimonials = testimonialsData[currentLanguage as keyof typeof testimonialsData] || testimonialsData.en;
  const stats = testimonialStats[currentLanguage as keyof typeof testimonialStats] || testimonialStats.en;

  // Auto-play functionality following Single Responsibility
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, TESTIMONIALS_CONFIG.autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Navigation handlers following DRY principle
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false); // Pause autoplay on manual navigation
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleAutoPlayToggle = (enabled: boolean) => {
    setIsAutoPlaying(enabled);
  };

  if (!testimonials.length) {
    return (
      <div className="max-w-6xl mx-auto py-16 text-center">
        <p className="text-gray-500 dark:text-gray-400">No testimonials available</p>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-6xl mx-auto py-16">
      {/* Header */}
      <motion.header 
        className="text-center mb-12"
        initial={TESTIMONIALS_CONFIG.headerAnimation.initial}
        whileInView={TESTIMONIALS_CONFIG.headerAnimation.whileInView}
        viewport={TESTIMONIALS_CONFIG.headerAnimation.viewport}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-500 font-mono text-lg">const</span>{' '}
          <span className="text-green-500">testimonials</span>{' '}
          <span className="text-gray-400">=</span>{' '}
          <span className="text-purple-500">[</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {tr('testimonials.subtitle')}
        </p>
      </motion.header>

      {/* Main Testimonial Carousel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={TESTIMONIALS_CONFIG.cardAnimation.initial}
            animate={TESTIMONIALS_CONFIG.cardAnimation.animate}
            exit={TESTIMONIALS_CONFIG.cardAnimation.exit}
            transition={TESTIMONIALS_CONFIG.cardAnimation.transition}
          >
            <TestimonialCard 
              testimonial={currentTestimonial}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Only show if more than 1 testimonial */}
        {testimonials.length > 1 && (
          <CarouselNavigation
            onPrevious={handlePrevious}
            onNext={handleNext}
            previousLabel={tr('testimonials.prevTestimonial')}
            nextLabel={tr('testimonials.nextTestimonial')}
          />
        )}
      </div>

      {/* Carousel Controls - Only show if more than 1 testimonial */}
      {testimonials.length > 1 && (
        <div className="flex flex-col items-center space-y-4">
          <CarouselDots
            totalItems={testimonials.length}
            currentIndex={currentIndex}
            onDotClick={handleDotClick}
            dotLabel={(index) => tr('testimonials.goToTestimonial') + ` ${index + 1}`}
          />
          
          <AutoPlayToggle
            isAutoPlaying={isAutoPlaying}
            onToggle={handleAutoPlayToggle}
            pauseLabel={tr('testimonials.pauseAutoplay')}
            resumeLabel={tr('testimonials.resumeAutoplay')}
          />
        </div>
      )}

      {/* Statistics Section */}
      {stats && (
        <motion.section
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.section>
      )}
    </div>
  );
};

export default TestimonialsSection;