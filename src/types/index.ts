// ===============================
// CORE DATA TYPES - Following Single Responsibility Principle
// ===============================

// Site identity information
export interface SiteIdentity {
  name: string;
  email: string;
  phone: string;
  url: string;
  resumeUrl: string;
  currentYear: number;
}

// Site configuration - separated concerns
export interface SiteConfig extends SiteIdentity {
  social: SocialLinks;
  images: ImageConfig;
  navigation: NavigationConfig;
}

// Navigation configuration
export interface NavigationConfig {
  navLinks: NavLink[];
  skills: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface ImageConfig {
  og: string;
  profile: string;
}

export interface NavLink {
  name: string;
  href: string;
}

// ===============================
// LANGUAGE TYPES
// ===============================

export interface LanguageConfig {
  default: string;
  supported: string[];
  names: Record<string, string>;
}

export interface MultilingualData {
  jobTitle: Record<string, string>;
  location: Record<string, string>;
  description: Record<string, string>;
}

// ===============================
// PROJECT TYPES - Following Interface Segregation Principle
// ===============================

// Core project information
export interface ProjectCore {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

// Project content details
export interface ProjectContent {
  longDescription: string;
  highlights: string[];
}

// Project links and external resources
export interface ProjectLinks {
  demoUrl?: string;
  githubUrl?: string;
}

// Project technical information
export interface ProjectTechnical {
  technologies: string[];
  metrics?: ProjectMetrics;
}

// Complete project interface - composed of focused interfaces
export interface Project extends ProjectCore, ProjectContent, ProjectLinks, ProjectTechnical {}

// Specific metrics with clear types
export interface ProjectMetrics {
  users?: string;
  uptime?: string;
  performance?: string;
  scale?: string;
  rating?: string;
  security?: string;
  features?: string;
}

// ===============================
// EXPERIENCE TYPES
// ===============================

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  biggestContribution?: string[];
  fullTechStack?: string[];
}

// ===============================
// EDUCATION TYPES
// ===============================

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string[];
  achievements?: string[];
  relevantCoursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
}

export interface ProfessionalDevelopment {
  title: string;
  provider: string;
  date: string;
  duration: string;
  description: string;
}

// ===============================
// SKILLS TYPES
// ===============================

export interface Skill {
  name: string;
  level: number;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  description: string;
}

export interface TechnicalSkillsMap {
  [skillName: string]: {
    level: number;
    category: string;
    yearsUsed?: number;
    projectsUsed?: number;
    experience?: string;
    description?: string;
  };
}

// ===============================
// TESTIMONIAL TYPES
// ===============================

export interface Testimonial {
  id: number;
  name: string;
  title?: string;
  position?: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  projectContext?: string;
  project?: string;
  date?: string;
}

export interface TestimonialStats {
  label: string;
  value: string;
  description: string;
}

// ===============================
// SEO TYPES
// ===============================

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraph: OpenGraphData;
  twitter: TwitterData;
}

export interface OpenGraphData {
  title: string;
  description: string;
  siteName: string;
}

export interface TwitterData {
  title: string;
  description: string;
}

// ===============================
// TRANSLATION TYPES
// ===============================

// Navigation-specific translations
export interface NavigationTranslations {
  home: string;
  about: string;
  experience: string;
  projects: string;
  skills: string;
  education: string;
  testimonials: string;
  contact: string;
}

// Hero section translations
export interface HeroTranslations {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    viewWork: string;
    downloadCV: string;
    getInTouch: string;
  };
  stats: {
    experience: string;
    users: string;
    uptime: string;
    projects: string;
  };
}

// About section translations
export interface AboutTranslations {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

// Projects section translations
export interface ProjectsTranslations {
  title: string;
  subtitle: string;
  featured: string;
  viewDemo: string;
  viewCode: string;
  caseStudy: string;
  technologies: string;
  highlights: string;
  metrics: string;
  allProjects: string;
  featuredProjects: string;
  viewProject: string;
}

// Contact section translations
export interface ContactTranslations {
  title: string;
  subtitle: string;
  description: string;
  form: ContactFormTranslations;
  info: ContactInfoTranslations;
}

export interface ContactFormTranslations {
  nameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  submitButton: string;
  successMessage: string;
  errorMessage: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
}

export interface ContactInfoTranslations {
  email: string;
  phone: string;
  location: string;
  responseTime: string;
  availability: string;
}

// Skills section translations
export interface SkillsTranslations {
  title: string;
  subtitle: string;
  technical: string;
  soft: string;
  languages: string;
  frameworks: string;
  tools: string;
  databases: string;
}

// Experience section translations
export interface ExperienceTranslations {
  title: string;
  subtitle: string;
  current: string;
  previous: string;
  achievements: string;
  technologies: string;
}

// Education section translations
export interface EducationTranslations {
  title: string;
  subtitle: string;
  degree: string;
  certifications: string;
  courses: string;
  achievements: string;
}

// Testimonials section translations
export interface TestimonialsTranslations {
  title: string;
  subtitle: string;
  clientSays: string;
  rating: string;
  project: string;
  date: string;
}

// Common UI translations
export interface CommonTranslations {
  readMore: string;
  readLess: string;
  loading: string;
  error: string;
  retry: string;
  close: string;
  open: string;
  next: string;
  previous: string;
  viewMore: string;
  showLess: string;
  downloadCV: string;
  backToTop: string;
}

// Languages section translations
export interface LanguagesTranslations {
  title: string;
  subtitle: string;
}

// Resume download section translations  
export interface ResumeDownloadTranslations {
  title: string;
  description: string;
  downloadButton: string;
  lastUpdated: string;
}

// Enhanced testimonials with navigation
export interface EnhancedTestimonialsTranslations extends TestimonialsTranslations {
  prevTestimonial: string;
  nextTestimonial: string;
  pauseAutoplay: string;
  resumeAutoplay: string;
  goToTestimonial: string;
}

// Main translation interface - properly segregated
export interface TranslationKeys {
  navigation: NavigationTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  contact: ContactTranslations;
  skills: SkillsTranslations;
  experience: ExperienceTranslations;
  education: EducationTranslations;
  testimonials: EnhancedTestimonialsTranslations;
  languages: LanguagesTranslations;
  resumeDownload: ResumeDownloadTranslations;
  common: CommonTranslations;
}

// ===============================
// APP CONTENT TYPES
// ===============================

// 404 page content
export interface NotFoundContent {
  title: string;
  description: string;
  homeLink: string;
  homeText: string;
}

// Error handling content
export interface ErrorContent {
  title: string;
  description: string;
  retry: string;
  goHome: string;
}

// Loading states content
export interface LoadingContent {
  default: string;
  projects: string;
  experience: string;
  skills: string;
  testimonials: string;
}

// App content - properly segregated without 'any' types
export interface AppContentData {
  notFound: NotFoundContent;
  error: ErrorContent;
  loading: LoadingContent;
  common: CommonTranslations;
  contact: ContactTranslations;
  projects: ProjectsTranslations;
  skills: SkillsTranslations;
  experience: ExperienceTranslations;
  education: EducationTranslations;
  testimonials: TestimonialsTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  navigation: NavigationTranslations;
}