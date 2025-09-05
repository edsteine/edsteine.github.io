






export interface ProjectCore {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}


export interface ProjectContent {
  longDescription: string;
  highlights: string[];
}


export interface ProjectLinks {
  demoUrl?: string;
  githubUrl?: string;
}


export interface ProjectTechnical {
  technologies: string[];
  metrics?: ProjectMetrics;
}


export interface Project extends ProjectCore, ProjectContent, ProjectLinks, ProjectTechnical {}


export interface ProjectMetrics {
  users?: string;
  uptime?: string;
  performance?: string;
  scale?: string;
  rating?: string;
  security?: string;
  features?: string;
}





export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  biggestContribution?: string[];
  fullTechStack?: string[];
}





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


export interface AboutTranslations {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}


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


export interface ExperienceTranslations {
  title: string;
  subtitle: string;
  current: string;
  previous: string;
  achievements: string;
  technologies: string;
}


export interface EducationTranslations {
  title: string;
  subtitle: string;
  degree: string;
  certifications: string;
  courses: string;
  achievements: string;
}


export interface TestimonialsTranslations {
  title: string;
  subtitle: string;
  clientSays: string;
  rating: string;
  project: string;
  date: string;
}


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


export interface LanguagesTranslations {
  title: string;
  subtitle: string;
}


export interface ResumeDownloadTranslations {
  title: string;
  description: string;
  downloadButton: string;
  lastUpdated: string;
}


export interface EnhancedTestimonialsTranslations extends TestimonialsTranslations {
  prevTestimonial: string;
  nextTestimonial: string;
  pauseAutoplay: string;
  resumeAutoplay: string;
  goToTestimonial: string;
}


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






export interface NotFoundContent {
  title: string;
  description: string;
  homeLink: string;
  homeText: string;
}


export interface ErrorContent {
  title: string;
  description: string;
  retry: string;
  goHome: string;
}


export interface LoadingContent {
  default: string;
  projects: string;
  experience: string;
  skills: string;
  testimonials: string;
}


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