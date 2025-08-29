"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  defaultLanguage, 
  supportedLanguages,
  getStoredLanguage, 
  setStoredLanguage,
  detectBrowserLanguage,
  getTranslation 
} from '@/data/i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize language from storage or browser detection
    const storedLang = getStoredLanguage();
    const browserLang = detectBrowserLanguage();
    const initialLang = storedLang !== defaultLanguage ? storedLang : browserLang;
    
    setCurrentLanguage(initialLang);
    setIsLoading(false);
  }, []);

  const changeLanguage = (newLanguage) => {
    if (supportedLanguages.includes(newLanguage)) {
      setCurrentLanguage(newLanguage);
      setStoredLanguage(newLanguage);
      
      // Update document direction for RTL languages
      document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLanguage;
    }
  };

  const t = (key) => getTranslation(key, currentLanguage);

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isRTL: currentLanguage === 'ar',
    supportedLanguages,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};