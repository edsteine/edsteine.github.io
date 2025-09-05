"use client";

import { useLanguage } from "@/components/layout/providers/LanguageProvider";
import { LANGUAGE_FONTS } from "@/lib/config/fontsConfig";
import { useEffect } from "react";

interface DynamicLayoutProps {
  children: React.ReactNode;
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const { currentLanguage } = useLanguage();
  const fontConfig = LANGUAGE_FONTS[currentLanguage as keyof typeof LANGUAGE_FONTS] ?? LANGUAGE_FONTS['en'];
  
  useEffect(() => {
    
    if (fontConfig) {
      document.documentElement.dir = fontConfig.dir;
      document.documentElement.lang = currentLanguage;
      
      
      document.documentElement.style.setProperty('--font-sans', fontConfig.sans.style.fontFamily);
      document.documentElement.style.setProperty('--font-mono', fontConfig.mono.style.fontFamily);
    }
  }, [currentLanguage, fontConfig]);

  if (!fontConfig) {
    
    return <div>{children}</div>;
  }

  return (
    <div 
      className={`${fontConfig.sans.variable} ${fontConfig.mono.variable}`}
      dir={fontConfig.dir}
    >
      {children}
    </div>
  );
}