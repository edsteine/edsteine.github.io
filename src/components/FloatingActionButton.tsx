"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const quickActions = [
    {
      id: 'contact',
      label: 'Contact Me',
      icon: '📧',
      action: () => scrollToSection('contact'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'projects',
      label: 'View Projects',
      icon: '🚀',
      action: () => scrollToSection('projects'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: '💼',
      action: () => scrollToSection('experience'),
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'skills',
      label: 'Tech Skills',
      icon: '⚡',
      action: () => scrollToSection('skills'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'resume',
      label: 'Download Resume',
      icon: '📄',
      action: () => {
        const link = document.createElement('a');
        link.href = '/ADIL_AJDAA_Resume_Improved.pdf';
        link.download = 'Adil_Ajdaa_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsOpen(false);
      },
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {quickActions.map((action, index) => (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                onClick={action.action}
                className={`flex items-center space-x-3 bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[160px] backdrop-blur-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{action.icon}</span>
                <span className="font-semibold text-sm">{action.label}</span>
              </motion.button>
            ))}

            {/* Scroll to Top (when visible) */}
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: quickActions.length * 0.05 }}
                onClick={scrollToTop}
                className="flex items-center space-x-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[160px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">⬆️</span>
                <span className="font-semibold text-sm">Scroll to Top</span>
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xl transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-r from-red-500 to-red-600 rotate-45' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? '✕' : '✨'}
      </motion.button>

      {/* Background Overlay (when open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;