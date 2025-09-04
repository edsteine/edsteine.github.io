"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormSuccessProps {
  onReset: () => void;
  className?: string;
}

const ContactFormSuccess: React.FC<ContactFormSuccessProps> = ({ 
  onReset, 
  className = '' 
}) => {
  return (
    <motion.div
      className={`bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      role="alert"
      aria-live="polite"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="text-6xl mb-4"
        role="img"
        aria-label="Success checkmark"
      >
        ✅
      </motion.div>
      <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
        Message Sent Successfully!
      </h3>
      <p className="text-green-700 dark:text-green-300 mb-6">
        Thank you for reaching out! I&apos;ll get back to you within 24 hours.
      </p>
      <motion.button
        onClick={onReset}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
};

export default ContactFormSuccess;