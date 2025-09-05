
"use client";

import ErrorPage from '@/components/pages/ErrorPage';
import { errorReportingService } from '@/lib/services/errorReporting';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    
    errorReportingService.captureException(error, {
      tags: { 
        component: 'ErrorBoundary',
        digest: error.digest || 'unknown'
      },
      extra: {
        errorDigest: error.digest,
        timestamp: new Date().toISOString()
      },
      level: 'error'
    });
  }, [error]);

  return (
    <ErrorPage 
      errorType="500"
      customDescription="We encountered an unexpected error. Please try refreshing the page."
    />
  );
}