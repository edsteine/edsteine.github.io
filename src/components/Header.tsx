"use client";

import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Adil Ajdaa
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400">About</a>
          <a href="#experience" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400">Experience</a>
          <a href="#projects" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400">Projects</a>
          <a href="#skills" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400">Skills</a>
          <a href="#contact" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-400">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;