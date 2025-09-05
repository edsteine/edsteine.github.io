"use client";

import { useLanguage } from '@/components/layout/providers/LanguageProvider';
import { navigationLinks, siteConfig } from '@/lib/config/siteConfig';
import { useState } from 'react';
import LanguageSwitcher from '../ui/controls/LanguageSwitcher';
import { ThemeToggle } from '../ui/controls/ThemeToggle';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      {navigationLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        >
          {String(t(`navigation.${link.name.toLowerCase()}`))}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
          {siteConfig.name}
        </a>

        {}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navLinks}
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>

        {}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-400" aria-label="Toggle mobile menu">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {}
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            <nav className="flex flex-col items-center py-4 space-y-4 text-base">
              {navLinks}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;