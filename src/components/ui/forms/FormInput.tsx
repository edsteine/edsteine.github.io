"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormInputProps {
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  className = '',
}) => {
  const inputClasses = `
    w-full px-4 py-3 rounded-lg border transition-all duration-200
    bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
    ${error 
      ? 'border-red-500 focus:border-red-500' 
      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
    }
  `.trim();

  return (
    <div className={className}>
      <label 
        htmlFor={id} 
        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClasses}
        placeholder={placeholder}
        required={required}
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
    </div>
  );
};

export default FormInput;