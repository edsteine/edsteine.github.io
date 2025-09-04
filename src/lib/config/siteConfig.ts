// Site configuration - Now derives from master config (Single Source of Truth)
import { getSiteConfig, getNavigationLinks, MASTER_CONFIG } from '@/config/masterConfig';

// Re-export interfaces for type safety
export type { PersonalInfo as SiteConfig, SocialLinks, ImagePaths as ImageConfig } from '@/config/masterConfig';

export interface NavigationLink {
  name: string;
  href: string;
}

// All configuration now comes from master config
export const siteConfig = getSiteConfig();
export const navigationLinks: NavigationLink[] = getNavigationLinks();
export const skillsForSchema: string[] = MASTER_CONFIG.skillsForSchema;