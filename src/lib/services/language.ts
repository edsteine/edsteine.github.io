// Language service - Now uses master config (Single Source of Truth)
import { getLanguageConfig, MASTER_CONFIG } from '@/lib/config/masterConfig';

// Re-export interfaces for type safety
export type { LanguageInfo as LanguageConfig } from '@/lib/config/masterConfig';

// All language configuration now comes from master config
export const languageConfig = getLanguageConfig();

export class LanguageStorageService {
  private static readonly STORAGE_KEY = 'preferred-language';

  static getStoredLanguage(): string {
    if (typeof window === 'undefined') return languageConfig.default;
    return localStorage.getItem(this.STORAGE_KEY) || languageConfig.default;
  }

  static setStoredLanguage(language: string): void {
    if (typeof window === 'undefined') return;
    if (languageConfig.supported.includes(language)) {
      localStorage.setItem(this.STORAGE_KEY, language);
    }
  }
}

export class BrowserLanguageDetector {
  static detectLanguage(): string {
    if (typeof window === 'undefined') return languageConfig.default;
    
    const browserLang = navigator.language.substring(0, 2);
    return languageConfig.supported.includes(browserLang) 
      ? browserLang 
      : languageConfig.default;
  }
}

export class LanguageValidator {
  static isValidLanguage(language: string): boolean {
    return languageConfig.supported.includes(language);
  }

  static getSupportedLanguages(): string[] {
    return [...languageConfig.supported];
  }

  static getLanguageName(code: string): string {
    return languageConfig.names[code] || code;
  }

  static getLanguageInfo(code: string) {
    return MASTER_CONFIG.languages[code] || MASTER_CONFIG.languages[languageConfig.default];
  }
}