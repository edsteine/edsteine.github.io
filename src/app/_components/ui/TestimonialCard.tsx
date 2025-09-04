"use client";

import React from 'react';
import { motion } from 'framer-motion';
import StarRating from './StarRating';
import { type Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mx-4">
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="text-6xl text-blue-500/20" aria-hidden="true">
          &ldquo;
        </div>
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-8 font-medium">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Rating */}
      <div className="flex justify-center mb-6">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-center space-x-4">
        {testimonial.image && (
          <motion.img
            src={testimonial.image}
            alt={`${testimonial.name}${testimonial.position ? `, ${testimonial.position}` : ''}`}
            className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          {testimonial.position && (
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              {testimonial.position}
            </p>
          )}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {testimonial.company}
          </p>
          {testimonial.project && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              {testimonial.project}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;