// Data exports
import { siteConfig, navigationLinks, skillsForSchema } from '../lib/config/siteConfig';
import { 
  LanguageStorageService, 
  BrowserLanguageDetector, 
  LanguageValidator,
  languageConfig
} from '../lib/services/languageService';
import { TranslationService, translations } from '../lib/services/translationService';
import { ContentService } from '../lib/services/contentService';
import { SEOService, multilingualData, seoData } from '../lib/services/seoService';

import { experienceData } from './en/experience';
import { projectsData } from './en/projects';
import { technicalSkillsMap, technicalSkillsCategories, softSkills } from './en/skills';
import { educationData, certifications, professionalDevelopment } from './en/education';

import { testimonialsData as enTestimonials, testimonialStats as enStats } from './en/testimonials';
import { testimonialsData as arTestimonials, testimonialStats as arStats } from './ar/testimonials';
import { testimonialsData as frTestimonials, testimonialStats as frStats } from './fr/testimonials';

import { appContentData as enAppContent } from './en/appContent';
import { appContentData as arAppContent } from './ar/appContent';
import { appContentData as frAppContent } from './fr/appContent';

export { siteConfig, navigationLinks, skillsForSchema };
export { 
  LanguageStorageService, 
  BrowserLanguageDetector, 
  LanguageValidator,
  languageConfig,
  TranslationService, 
  translations,
  ContentService,
  SEOService, 
  multilingualData, 
  seoData 
};

export { experienceData, projectsData, technicalSkillsMap, technicalSkillsCategories, softSkills };
export { educationData, certifications, professionalDevelopment };

export const testimonialsData = {
  en: enTestimonials,
  ar: arTestimonials,
  fr: frTestimonials
};

export const testimonialStats = {
  en: enStats,
  ar: arStats,
  fr: frStats
};

export const appContent = {
  en: enAppContent,
  ar: arAppContent,
  fr: frAppContent
};

export const getStoredLanguage = () => LanguageStorageService.getStoredLanguage();
export const setStoredLanguage = (language: string) => LanguageStorageService.setStoredLanguage(language);
export const detectBrowserLanguage = () => BrowserLanguageDetector.detectLanguage();
export const getTranslation = (key: string, language?: string) => TranslationService.getTranslation(key, language);
export const getContent = (contentType: string, language?: string) => ContentService.getContent(contentType, language);
export const generateMetadata = (language?: string) => SEOService.generateMetadata(language);
export const generatePersonSchema = (language?: string) => SEOService.generatePersonSchema(language);