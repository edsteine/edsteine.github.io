import React from 'react';
import { siteConfig } from '@/data/siteConfig';

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white mt-10">
      <p>© {siteConfig.currentYear} {siteConfig.author}</p>
    </footer>
  );
};

export default Footer;