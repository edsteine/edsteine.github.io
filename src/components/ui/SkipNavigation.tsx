"use client";

import React from 'react';

const SkipNavigation: React.FC = () => {
  return (
    <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
      <a
        href="#main-content"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default SkipNavigation;