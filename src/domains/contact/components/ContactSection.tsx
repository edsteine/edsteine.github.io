"use client";

import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import ContactForm from "@/domains/contact/components/ContactForm";
import React from 'react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  
  const tr = (key: string): string => String(t(key));

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
          {tr('contact.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
        {}
        <div className="lg:col-span-1 space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Contact</h4>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <div>
                <p className="font-mono text-sm text-green-600 dark:text-green-400">email</p>
                <a href="mailto:a.ajdaa@outlook.com" className="text-gray-900 dark:text-white hover:text-blue-600">
                  a.ajdaa@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="font-mono text-sm text-purple-600 dark:text-purple-400">location</p>
                <p className="text-gray-900 dark:text-white">{tr('contact.info.location')}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 5a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 9a1 1 0 100 2h2a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="font-mono text-sm text-orange-600 dark:text-orange-400">phone</p>
                <a href="tel:+212694903073" className="text-gray-900 dark:text-white hover:text-blue-600">
                  +212 6 94 90 30 73
                </a>
              </div>
            </div>
          </div>
          
          {}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                {tr('contact.info.responseTime')}
              </span>
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-300">
              {tr('contact.info.availability')}
            </p>
          </div>
        </div>
        
        {}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;