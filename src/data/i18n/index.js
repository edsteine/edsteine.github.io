import { en } from './en.js';
import { ar } from './ar.js';
import { fr } from './fr.js';

export const translations = {
  en,
  ar,
  fr
};

export const defaultLanguage = 'en';
export const supportedLanguages = ['en', 'ar', 'fr'];

export const languageNames = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français'
};

// Language detection and persistence utilities
export const getStoredLanguage = () => {
  if (typeof window === 'undefined') return defaultLanguage;
  return localStorage.getItem('preferred-language') || defaultLanguage;
};

export const setStoredLanguage = (lang) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-language', lang);
};

export const detectBrowserLanguage = () => {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const browserLang = navigator.language.substring(0, 2);
  return supportedLanguages.includes(browserLang) ? browserLang : defaultLanguage;
};

// Translation utility function
export const getTranslation = (key, language = defaultLanguage) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation missing
      value = translations[defaultLanguage];
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if even English translation is missing
        }
      }
      break;
    }
  }
  
  return value || key;
};