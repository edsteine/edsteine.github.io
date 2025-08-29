"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { testimonialsData, testimonialStats } from '@/data/testimonialsData';

// Interface is imported from data file - keeping for reference only

const TestimonialsSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = testimonialsData[currentLanguage as keyof typeof testimonialsData] || testimonialsData.en;
  const stats = testimonialStats[currentLanguage as keyof typeof testimonialStats] || testimonialStats.en;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto py-16">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-500 font-mono text-lg">const</span>{' '}
          <span className="text-green-500">testimonials</span>{' '}
          <span className="text-gray-400">=</span>{' '}
          <span className="text-purple-500">[</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
        </p>
      </motion.div>

      {/* Main Testimonial Card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mx-4"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="text-6xl text-blue-500/20">
                &ldquo;
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-8 font-medium">
              &ldquo;{currentTestimonial.content}&rdquo;
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {renderStars(currentTestimonial.rating)}
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <motion.img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  {currentTestimonial.title}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {currentTestimonial.company}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {currentTestimonial.relationship}
                </p>
              </div>
            </div>

            {/* LinkedIn Link */}
            {currentTestimonial.linkedinUrl && (
              <div className="flex justify-center mt-4">
                <a
                  href={currentTestimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>{t('testimonials.viewOnLinkedIn')}</span>
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label={t('testimonials.prevTestimonial')}
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label={t('testimonials.nextTestimonial')}
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`${t('testimonials.goToTestimonial')} ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
              <span>{t('testimonials.pauseAutoplay')}</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="m7 4 10 6L7 16V4z"/>
              </svg>
              <span>{t('testimonials.resumeAutoplay')}</span>
            </>
          )}
        </button>
      </div>

      {/* Summary Stats */}
      <motion.div 
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;