






export interface SiteIdentity {
  name: string;
  email: string;
  phone: string;
  url: string;
  resumeUrl: string;
  currentYear: number;
}


export interface SiteConfig extends SiteIdentity {
  social: SocialLinks;
  images: ImageConfig;
  navigation: NavigationConfig;
}


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






export interface FormData {
  [key: string]: string | number | boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}


export interface UIState {
  isOpen: boolean;
  isLoading: boolean;
  hasError: boolean;
}

export interface CarouselState {
  currentIndex: number;
  isAutoPlaying: boolean;
  totalItems: number;
}

export interface ThemeState {
  theme: 'light' | 'dark';
  systemPreference: 'light' | 'dark';
}

export interface LanguageState {
  currentLanguage: string;
  availableLanguages: string[];
}






export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}


export interface SectionProps extends BaseComponentProps {
  id?: string;
  ariaLabel?: string;
}


export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}


export interface DialogProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}


export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}


export interface InputProps extends BaseComponentProps {
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
}


export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  onClick?: () => void;
}





export interface LayoutConfig {
  showHeader: boolean;
  showFooter: boolean;
  showSidebar: boolean;
  containerWidth: 'full' | 'xl' | '2xl' | '4xl' | '6xl';
}

export interface HeaderProps {
  isSticky?: boolean;
  showLogo?: boolean;
  showNavigation?: boolean;
  showThemeToggle?: boolean;
  showLanguageSelector?: boolean;
}

export interface FooterProps {
  showSocial?: boolean;
  showCopyright?: boolean;
  showBackToTop?: boolean;
}





export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export interface ErrorPageProps {
  errorType: '404' | '500' | 'generic';
  customTitle?: string;
  customDescription?: string;
  showHomeButton?: boolean;
  showRetryButton?: boolean;
}





export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

export interface MediaQueryHook {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
}