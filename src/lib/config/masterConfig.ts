


export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  url: string;
  resumeUrl: string;
  currentYear: number;
}

export interface LanguageInfo {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
  isDefault?: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface ImagePaths {
  og: string;
  profile: string;
}





export const MASTER_CONFIG = {
  
  personal: {
    name: "Adil Ajdaa",
    email: "contact@adilajdaa.com", 
    phone: "+212 6 12 34 56 78",
    url: "https://adilajdaa.com",
    resumeUrl: "https://adilajdaa.com/resume.pdf",
    currentYear: new Date().getFullYear()
  } as PersonalInfo,

  
  social: {
    github: "https://github.com/adilajdaa",
    linkedin: "https://linkedin.com/in/adilajdaa"
  } as SocialLinks,

  
  images: {
    og: "/images/og-image.jpg",
    profile: "/images/profile.jpg"
  } as ImagePaths,

  
  languages: {
    en: { code: 'en', name: 'English', direction: 'ltr', isDefault: true },
    ar: { code: 'ar', name: 'العربية', direction: 'rtl' },
    fr: { code: 'fr', name: 'Français', direction: 'ltr' }
  } as Record<string, LanguageInfo>,

  
  navigation: ['home', 'about', 'experience', 'projects', 'skills', 'education', 'testimonials', 'contact'],

  
  skillsForSchema: [
    "Mobile Development", "Android", "Kotlin", "Flutter", 
    "React", "Spring Boot", "Full Stack Development",
    "Geospatial Technologies", "Team Leadership"
  ]
};






export const getLanguageConfig = () => ({
  default: Object.values(MASTER_CONFIG.languages).find(lang => lang.isDefault)?.code || 'en',
  supported: Object.keys(MASTER_CONFIG.languages),
  names: Object.fromEntries(
    Object.entries(MASTER_CONFIG.languages).map(([code, info]) => [code, info.name])
  )
});


export const getSiteConfig = () => ({
  ...MASTER_CONFIG.personal,
  social: MASTER_CONFIG.social,
  images: MASTER_CONFIG.images
});


export const getNavigationLinks = () => 
  MASTER_CONFIG.navigation.map(item => ({
    name: item,
    href: item === 'home' ? '/' : `#${item}`
  }));