// Translation service - Single Responsibility: Translation loading and key resolution
import { en } from '../../data/en/translations';
import { ar } from '../../data/ar/translations';
import { fr } from '../../data/fr/translations';
import { languageConfig } from './languageService';

export const translations: Record<string, Record<string, unknown>> = {
  en: en as unknown as Record<string, unknown>,
  ar: ar as unknown as Record<string, unknown>,
  fr: fr as unknown as Record<string, unknown>
};

export class TranslationService {
  static getTranslation(key: string, language = languageConfig.default): string | string[] | Record<string, unknown> {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    // Try to get the translation in the requested language
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to default language if translation missing
        return TranslationService.getFallbackTranslation(keys, key);
      }
    }
    
    return value as string | string[] | Record<string, unknown> || key;
  }

  private static getFallbackTranslation(keys: string[], originalKey: string): string | string[] | Record<string, unknown> {
    let fallbackValue: unknown = translations[languageConfig.default];
    
    for (const fallbackKey of keys) {
      if (fallbackValue && typeof fallbackValue === 'object' && fallbackValue !== null && fallbackKey in fallbackValue) {
        fallbackValue = (fallbackValue as Record<string, unknown>)[fallbackKey];
      } else {
        console.warn(`Translation missing for key: ${originalKey}`);
        return originalKey; // Return key if even fallback translation is missing
      }
    }
    
    return fallbackValue as string | string[] | Record<string, unknown> || originalKey;
  }

  static getAllTranslations(): Record<string, Record<string, unknown>> {
    return { ...translations };
  }

  static hasTranslation(key: string, language: string): boolean {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return false;
      }
    }
    
    return value !== undefined;
  }
}