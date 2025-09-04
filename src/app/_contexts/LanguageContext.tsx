"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  languageConfig,
  getStoredLanguage, 
  setStoredLanguage,
  detectBrowserLanguage,
  getTranslation
} from '@/data';

type TranslationFunction = (key: string) => string | string[] | Record<string, unknown>;

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  t: TranslationFunction;
  isRTL: boolean;
  supportedLanguages: string[];
  isLoading: boolean;
  languageConfig: { code: string; name: string; direction: 'ltr' | 'rtl' };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  initialLanguage 
}) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return initialLanguage || languageConfig.default;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedLang = getStoredLanguage();
    const browserLang = detectBrowserLanguage();
    const defaultLang = languageConfig.default;
    
    const finalLanguage = initialLanguage || 
                         (storedLang !== defaultLang ? storedLang : browserLang);
    
    if (languageConfig.supported.includes(finalLanguage)) {
      setCurrentLanguage(finalLanguage);
      updateDocument(finalLanguage);
    }
    
    setIsLoading(false);
  }, [initialLanguage]);

  const changeLanguage = (newLanguage: string) => {
    if (languageConfig.supported.includes(newLanguage)) {
      setCurrentLanguage(newLanguage);
      setStoredLanguage(newLanguage);
      updateDocument(newLanguage);
    }
  };

  const updateDocument = (language: string) => {
    if (typeof document !== 'undefined') {
      const isRTL = language === 'ar';
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  };

  const t: TranslationFunction = (key: string) => getTranslation(key, currentLanguage);
  
  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    t,
    isRTL: currentLanguage === 'ar',
    supportedLanguages: languageConfig.supported,
    isLoading,
    languageConfig: {
      code: currentLanguage,
      name: currentLanguage === 'ar' ? 'العربية' : 
            currentLanguage === 'fr' ? 'Français' : 'English',
      direction: currentLanguage === 'ar' ? 'rtl' : 'ltr'
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};