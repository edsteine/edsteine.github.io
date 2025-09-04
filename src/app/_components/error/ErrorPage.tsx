// Reusable Error Page Component - Single Responsibility: Handle different error types
"use client";

import Link from 'next/link';
import { useLanguage } from '@/app/_contexts/LanguageContext';

interface ErrorConfig {
  code: string;
  title: string;
  description: string;
  showRefresh?: boolean;
  showHome?: boolean;
}

const ERROR_CONFIGS: Record<string, ErrorConfig> = {
  '404': {
    code: '404',
    title: 'Page Not Found',
    description: 'Sorry, we could not find the page you are looking for.',
    showHome: true
  },
  '500': {
    code: '500', 
    title: 'Internal Server Error',
    description: 'Something went wrong on our end. Please try again later.',
    showRefresh: true,
    showHome: true
  },
  '503': {
    code: '503',
    title: 'Service Unavailable', 
    description: 'The service is temporarily unavailable. Please try again in a few minutes.',
    showRefresh: true,
    showHome: true
  },
  'generic': {
    code: 'Error',
    title: 'Something went wrong',
    description: 'We encountered an unexpected error.',
    showRefresh: true,
    showHome: true
  }
};

interface ErrorPageProps {
  errorType?: keyof typeof ERROR_CONFIGS;
  customTitle?: string;
  customDescription?: string;
  className?: string;
}

export default function ErrorPage({ 
  errorType = '404', 
  customTitle, 
  customDescription,
  className = "min-h-screen"
}: ErrorPageProps) {
  const { t } = useLanguage();
  const config = ERROR_CONFIGS[errorType] || ERROR_CONFIGS.generic;
  
  const title = customTitle || config.title;
  const description = customDescription || config.description;

  const handleRefresh = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <div className={`${className} flex items-center justify-center bg-white dark:bg-gray-900`}>
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4" aria-label={`Error ${config.code}`}>
            {config.code}
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          {config.showHome && (
            <Link 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-4"
              aria-label="Return to homepage"
            >
              {String(t('common.backToTop')) || 'Go Home'}
            </Link>
          )}
          
          {config.showRefresh && (
            <button 
              onClick={handleRefresh}
              className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              {String(t('common.retry')) || 'Refresh Page'}
            </button>
          )}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" role="presentation" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-100 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}