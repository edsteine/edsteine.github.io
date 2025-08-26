"use client";

import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      <a href="#about" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400" onClick={() => setIsMenuOpen(false)}>About</a>
      <a href="#experience" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400" onClick={() => setIsMenuOpen(false)}>Experience</a>
      <a href="#projects" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400" onClick={() => setIsMenuOpen(false)}>Projects</a>
      <a href="#skills" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400" onClick={() => setIsMenuOpen(false)}>Skills</a>
      <a href="#contact" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <a href="#" className="text-xl font-bold">
          Adil Ajdaa
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navLinks}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" aria-label="Toggle mobile menu">
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 shadow-lg">
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