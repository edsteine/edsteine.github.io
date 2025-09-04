"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  error?: string;
  required?: boolean;
  className?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  error,
  required = false,
  className = '',
}) => {
  const selectClasses = `
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
      <motion.select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={selectClasses}
        required={required}
        whileFocus={{ scale: 1.02 }}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </motion.select>
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

export default FormSelect;