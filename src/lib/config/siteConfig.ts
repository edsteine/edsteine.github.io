
import { getNavigationLinks, getSiteConfig, MASTER_CONFIG } from '@/lib/config/masterConfig';


export type { ImagePaths as ImageConfig, PersonalInfo as SiteConfig, SocialLinks } from '@/lib/config/masterConfig';

export interface NavigationLink {
  name: string;
  href: string;
}


export const siteConfig = getSiteConfig();
export const navigationLinks: NavigationLink[] = getNavigationLinks();
export const skillsForSchema: string[] = MASTER_CONFIG.skillsForSchema;