"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  minLength?: number;
  maxLength?: number;
  className?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  rows = 4,
  minLength,
  maxLength,
  className = '',
}) => {
  const textareaClasses = `
    w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-vertical
    bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
    ${error 
      ? 'border-red-500 focus:border-red-500' 
      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
    }
  `.trim();

  const characterCount = value.length;
  const isOverLimit = maxLength && characterCount > maxLength;
  const isUnderLimit = minLength && characterCount < minLength;

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-2">
        <label 
          htmlFor={id} 
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {maxLength && (
          <span className={`text-xs ${
            isOverLimit ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {characterCount}/{maxLength}
          </span>
        )}
      </div>
      <motion.textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={textareaClasses}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        whileFocus={{ scale: 1.02 }}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-sm mt-1"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      {minLength && isUnderLimit && !error && (
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
          Minimum {minLength} characters required
        </p>
      )}
    </div>
  );
};

export default FormTextarea;