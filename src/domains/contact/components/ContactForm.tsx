"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '@/components/ui/forms/FormInput';
import FormSelect from '@/components/ui/forms/FormSelect';
import FormTextarea from '@/components/ui/forms/FormTextarea';
import ContactFormSuccess from '@/domains/contact/components/ContactFormSuccess';
import { useContactForm } from '../useContactForm';

interface ContactFormProps {
  className?: string;
}

// Project type options
const PROJECT_TYPE_OPTIONS = [
  { value: 'consultation', label: 'Consultation' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'web', label: 'Web Development' },
  { value: 'fullstack', label: 'Full Stack Development' },
  { value: 'architecture', label: 'Technical Architecture' },
  { value: 'other', label: 'Other' },
];

/**
 * Contact form component with proper separation of concerns
 * Uses custom hook for logic and reusable UI components
 */
const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const {
    formData,
    errors,
    isSubmitting,
    submitted,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  // Show success message if form was submitted successfully
  if (submitted) {
    return <ContactFormSuccess onReset={resetForm} className={className} />;
  }

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Let&apos;s Build Something Amazing Together
        </h3>
        <p className="text-blue-100">
          Ready to discuss your next project? I&apos;d love to hear from you.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8 space-y-6" noValidate>
        {/* Global form error */}
        {errors.submit && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-700 dark:text-red-300 text-sm" role="alert">
              {errors.submit}
            </p>
          </div>
        )}

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="name"
            name="name"
            type="text"
            label="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="John Doe"
            required
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="john@example.com"
            required
          />
        </div>

        {/* Subject & Project Type Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="subject"
            name="subject"
            type="text"
            label="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            error={errors.subject}
            placeholder="Let's discuss your project"
            required
          />
          <FormSelect
            id="projectType"
            name="projectType"
            label="Project Type"
            value={formData.projectType}
            onChange={handleInputChange}
            options={PROJECT_TYPE_OPTIONS}
            error={errors.projectType}
            required
          />
        </div>

        {/* Message */}
        <FormTextarea
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleInputChange}
          error={errors.message}
          placeholder="Tell me about your project, timeline, and any specific requirements..."
          required
          rows={6}
          minLength={10}
          maxLength={2000}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          aria-describedby={isSubmitting ? "submitting-status" : undefined}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg 
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span id="submitting-status">Sending Message...</span>
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>

        {/* Form Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            I typically respond within 24 hours. 
            <br />
            Your information is kept private and secure.
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;