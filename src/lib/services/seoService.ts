// SEO service - Single Responsibility: SEO metadata generation
import { siteConfig } from '../config/siteConfig';
import { MASTER_CONFIG } from '@/config/masterConfig';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    siteName: string;
  };
  twitter: {
    title: string;
    description: string;
  };
}

export interface MultilingualData {
  jobTitle: Record<string, string>;
  location: Record<string, string>;
  description: Record<string, string>;
}

export const multilingualData: MultilingualData = {
  jobTitle: {
    en: "Senior Mobile Developer & Technical Architect",
    ar: "مطور تطبيقات محمولة أول ومهندس معماري تقني",
    fr: "Développeur Mobile Senior & Architecte Technique"
  },
  location: {
    en: "Tangier, Morocco / Madrid, Spain",
    ar: "طنجة، المغرب / مدريد، إسبانيا", 
    fr: "Tanger, Maroc / Madrid, Espagne"
  },
  description: {
    en: "Senior Mobile Developer & Technical Architect with 9+ years experience building enterprise applications serving 100,000+ daily users. Expert in Kotlin, Flutter, React, Spring Boot, and geospatial technologies.",
    ar: "مطور تطبيقات محمولة أول ومهندس معماري تقني بخبرة 9+ سنوات في بناء تطبيقات المؤسسات التي تخدم 100,000+ مستخدم يومياً. خبير في Kotlin و Flutter و React و Spring Boot والتقنيات الجغرافية المكانية.",
    fr: "Développeur Mobile Senior & Architecte Technique avec 9+ ans d'expérience construisant des applications d'entreprise servant 100,000+ utilisateurs quotidiens. Expert en Kotlin, Flutter, React, Spring Boot et technologies géospatiales."
  }
};

export const seoData: Record<string, SEOData> = {
  en: {
    title: `${MASTER_CONFIG.personal.name} - Senior Mobile Architect | 9+ Years | 100k+ Users Served`,
    description: "Senior Mobile Developer & Technical Architect with 9+ years experience building enterprise apps for 100,000+ users. Expert in Kotlin, Flutter, React, Spring Boot. Led teams of 12+ developers with 99.9% uptime achievement.",
    keywords: [
      MASTER_CONFIG.personal.name, "Senior Mobile Developer", "Technical Architect", 
      "Kotlin Expert", "Flutter Developer", "Android Developer", 
      "React Developer", "Spring Boot", "Full Stack", "Enterprise Apps", 
      "Geospatial", "PostGIS", "Team Lead", "Morocco", "Spain", 
      "Remote Developer", "100k users", "99.9% uptime", "Mobile Architecture", 
      "Cross-platform", "Next.js", "TypeScript", "Python", "Django", 
      "PostgreSQL", "AWS", "Docker", "Microservices"
    ],
    openGraph: {
      title: `${MASTER_CONFIG.personal.name} - Senior Mobile Architect | 9+ Years | 100k+ Users`,
      description: "Senior Mobile Developer & Technical Architect with 9+ years experience. Expert in Kotlin, Flutter, React, Spring Boot. Led teams of 12+ developers serving 100,000+ daily users with 99.9% uptime.",
      siteName: `${MASTER_CONFIG.personal.name}'s Portfolio`
    },
    twitter: {
      title: `${MASTER_CONFIG.personal.name} - Senior Mobile Architect | 9+ Years | 100k+ Users`,
      description: "Senior Mobile Developer & Technical Architect with 9+ years experience. Expert in Kotlin, Flutter, React, Spring Boot. Led teams of 12+ developers with 99.9% uptime."
    }
  },
  fr: {
    title: `${MASTER_CONFIG.personal.name} - Architecte Mobile Senior | 9+ Ans | 100k+ Utilisateurs`,
    description: "Développeur Mobile Senior & Architecte Technique avec 9+ ans d'expérience construisant des applications d'entreprise pour 100,000+ utilisateurs. Expert en Kotlin, Flutter, React, Spring Boot.",
    keywords: [
      MASTER_CONFIG.personal.name, "Développeur Mobile Senior", "Architecte Technique",
      "Expert Kotlin", "Développeur Flutter", "Développeur Android",
      "Développeur React", "Spring Boot", "Maroc", "Espagne",
      "Développeur à Distance", "Applications Entreprise"
    ],
    openGraph: {
      title: `${MASTER_CONFIG.personal.name} - Architecte Mobile Senior | 9+ Ans | 100k+ Utilisateurs`,
      description: "Développeur Mobile Senior & Architecte Technique avec 9+ ans d'expérience. Expert en Kotlin, Flutter, React, Spring Boot.",
      siteName: `Portfolio de ${MASTER_CONFIG.personal.name}`
    },
    twitter: {
      title: `${MASTER_CONFIG.personal.name} - Architecte Mobile Senior | 9+ Ans | 100k+ Utilisateurs`, 
      description: "Développeur Mobile Senior & Architecte Technique avec 9+ ans d'expérience construisant des applications d'entreprise."
    }
  },
  ar: {
    title: `${MASTER_CONFIG.personal.name} - مهندس تطبيقات محمولة أول | 9+ سنوات | 100 ألف+ مستخدم`,
    description: "مطور تطبيقات محمولة أول ومهندس معماري تقني بخبرة 9+ سنوات في بناء تطبيقات المؤسسات لـ 100,000+ مستخدم. خبير في Kotlin و Flutter و React و Spring Boot.",
    keywords: [
      MASTER_CONFIG.personal.name, "مطور تطبيقات محمولة", "مهندس معماري تقني",
      "خبير Kotlin", "مطور Flutter", "مطور Android", 
      "المغرب", "إسبانيا", "العمل عن بعد", "تطبيقات المؤسسات"
    ],
    openGraph: {
      title: "عادل أجداع - مهندس تطبيقات محمولة أول | 9+ سنوات",
      description: "مطور تطبيقات محمولة أول ومهندس معماري تقني بخبرة 9+ سنوات. خبير في Kotlin و Flutter و React و Spring Boot.",
      siteName: `معرض أعمال ${MASTER_CONFIG.personal.name}`
    },
    twitter: {
      title: "عادل أجداع - مهندس تطبيقات محمولة أول | 9+ سنوات",
      description: "مطور تطبيقات محمولة أول ومهندس معماري تقني بخبرة 9+ سنوات في بناء تطبيقات المؤسسات."
    }
  }
};

export class SEOService {
  static generateMetadata(language = 'en') {
    const seo = seoData[language] || seoData.en;
    
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      authors: [{ name: siteConfig.name }],
      creator: siteConfig.name,
      publisher: siteConfig.name,
      openGraph: {
        title: seo.openGraph.title,
        description: seo.openGraph.description,
        url: siteConfig.url,
        siteName: seo.openGraph.siteName,
        images: [
          {
            url: siteConfig.images.og,
            width: 1200,
            height: 630,
            alt: seo.openGraph.siteName,
          },
        ],
        locale: this.getLocale(language),
        type: "website" as const,
      },
      twitter: {
        card: "summary_large_image" as const,
        title: seo.twitter.title,
        description: seo.twitter.description,
        images: [siteConfig.images.og],
      },
      alternates: {
        canonical: siteConfig.url,
      },
    };
  }

  static generatePersonSchema(language = 'en') {
    const jobTitle = multilingualData.jobTitle[language] || multilingualData.jobTitle.en;
    const description = multilingualData.description[language] || multilingualData.description.en;
    const location = multilingualData.location[language] || multilingualData.location.en;

    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "email": siteConfig.email,
      "telephone": siteConfig.phone,
      "sameAs": [
        siteConfig.social.github,
        siteConfig.social.linkedin
      ],
      "jobTitle": jobTitle,
      "description": description,
      "knowsAbout": ["Mobile Development", "Android", "Kotlin", "Flutter", "React", "Spring Boot"],
      "hasOccupation": {
        "@type": "Occupation",
        "name": jobTitle,
        "occupationLocation": {
          "@type": "City", 
          "name": location
        }
      }
    };
  }

  private static getLocale(language: string): string {
    const localeMap: Record<string, string> = {
      'ar': 'ar_MA',
      'fr': 'fr_FR',
      'en': 'en_US'
    };
    
    return localeMap[language] || localeMap.en;
  }
}