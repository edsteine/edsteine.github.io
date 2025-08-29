"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import ContactForm from "@/components/features/ContactForm";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="contact" 
      className="max-w-7xl mx-auto py-20 pb-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" 
      aria-label="Contact information and form"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="text-red-500 font-mono text-lg">$</span> 
          <span className="text-blue-500">contact</span> 
          <span className="text-green-500">--me</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
        {/* Quick Contact Info */}
        <div className="lg:col-span-1 space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Contact</h4>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-mono text-sm text-green-600 dark:text-green-400">email</p>
                <a href="mailto:a.ajdaa@outlook.com" className="text-gray-900 dark:text-white hover:text-blue-600">
                  a.ajdaa@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-mono text-sm text-purple-600 dark:text-purple-400">location</p>
                <p className="text-gray-900 dark:text-white">{t('contact.info.location')}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-mono text-sm text-orange-600 dark:text-orange-400">phone</p>
                <a href="tel:+212694903073" className="text-gray-900 dark:text-white hover:text-blue-600">
                  +212 6 94 90 30 73
                </a>
              </div>
            </div>
          </div>
          
          {/* Response Time */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                {t('contact.info.response')}
              </span>
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-300">
              {t('contact.info.availability')}
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;