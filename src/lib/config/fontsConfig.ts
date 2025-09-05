// Fonts Configuration - Uses master config for language info
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import { MASTER_CONFIG } from '@/lib/config/masterConfig';

// English/Default fonts
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  display: "swap",
});

// Arabic fonts
export const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
});

// Font mapping per language - Now uses master config for direction  
export const LANGUAGE_FONTS = Object.fromEntries(
  Object.entries(MASTER_CONFIG.languages).map(([code, info]) => [
    code,
    {
      sans: info.code === 'ar' ? notoSansArabic : geistSans,
      mono: geistMono, // Keep mono for code in all languages
      dir: info.direction
    }
  ])
);