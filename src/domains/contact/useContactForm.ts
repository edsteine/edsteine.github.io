"use client";

import { useState, useCallback } from 'react';
import { 
  validateForm, 
  sanitizeFormData, 
  CONTACT_FORM_RULES,
  type FormErrors 
} from './formValidation';
import { type ContactFormData } from '@/lib/types/components';

export interface UseContactFormReturn {
  formData: ContactFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  submitted: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  projectType: 'consultation',
};

/**
 * Custom hook for managing contact form state and logic
 */
export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitize form data - convert to string format for validation
    const formDataForValidation = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      projectType: formData.projectType
    };
    const sanitizedData = sanitizeFormData(formDataForValidation) as unknown as ContactFormData;
    
    // Validate form - cast to FormData type for validation function
    const validationErrors = validateForm(sanitizedData as unknown as Record<string, string>, CONTACT_FORM_RULES);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // TODO: Replace with actual API call
      await simulateApiCall(sanitizedData);
      
      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ 
        submit: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const resetForm = useCallback(() => {
    setSubmitted(false);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submitted,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}

/**
 * Simulates API call for form submission
 * TODO: Replace with actual API integration
 */
async function simulateApiCall(data: ContactFormData): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random failure for testing
      if (Math.random() < 0.1) {
        reject(new Error('Network error'));
      } else {
        console.log('Form submitted:', data);
        resolve();
      }
    }, 2000);
  });
}