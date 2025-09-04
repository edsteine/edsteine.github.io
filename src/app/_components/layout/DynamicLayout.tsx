"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { LANGUAGE_FONTS } from "@/lib/config/fontsConfig";
import { useEffect } from "react";

interface DynamicLayoutProps {
  children: React.ReactNode;
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const { currentLanguage } = useLanguage();
  const fontConfig = LANGUAGE_FONTS[currentLanguage as keyof typeof LANGUAGE_FONTS] || LANGUAGE_FONTS.en;
  
  useEffect(() => {
    // Update document direction and font variables
    document.documentElement.dir = fontConfig.dir;
    document.documentElement.lang = currentLanguage;
    
    // Set CSS variables for fonts
    document.documentElement.style.setProperty('--font-sans', fontConfig.sans.style.fontFamily);
    document.documentElement.style.setProperty('--font-mono', fontConfig.mono.style.fontFamily);
  }, [currentLanguage, fontConfig]);

  return (
    <div 
      className={`${fontConfig.sans.variable} ${fontConfig.mono.variable}`}
      dir={fontConfig.dir}
    >
      {children}
    </div>
  );
}