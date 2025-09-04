// Content service - Single Responsibility: Dynamic content loading
export class ContentService {
  static async getContent<T = unknown>(contentType: string, language = 'en'): Promise<T | null> {
    try {
      const contentModule = await import(`../../data/${language}/${contentType}.ts`);
      return contentModule[`${contentType}Data`] || contentModule.default || null;
    } catch (error) {
      console.warn(`Content not found for ${contentType} in ${language}, trying fallback`);
      
      // Fallback to English if language not found
      try {
        const fallback = await import(`../../data/en/${contentType}.ts`);
        return fallback[`${contentType}Data`] || fallback.default || null;
      } catch (fallbackError) {
        console.error(`No content found for ${contentType} in any language`, {
          originalError: error,
          fallbackError
        });
        return null;
      }
    }
  }

  static async loadMultilingualContent<T = unknown>(
    contentType: string, 
    languages: string[] = ['en', 'ar', 'fr']
  ): Promise<Record<string, T | null>> {
    const content: Record<string, T | null> = {};
    
    await Promise.all(
      languages.map(async (lang) => {
        content[lang] = await this.getContent<T>(contentType, lang);
      })
    );
    
    return content;
  }

  static async preloadCriticalContent(): Promise<void> {
    // Preload the most important content for better performance
    const criticalContent = ['translations', 'appContent'];
    const languages = ['en', 'ar', 'fr'];
    
    await Promise.all(
      criticalContent.flatMap(content =>
        languages.map(lang => 
          this.getContent(content, lang).catch(err => 
            console.warn(`Failed to preload ${content} for ${lang}:`, err)
          )
        )
      )
    );
  }
}