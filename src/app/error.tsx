// Global Error Page - Next.js convention for handling runtime errors
"use client";

import { useEffect } from 'react';
import ErrorPage from '@/components/pages/ErrorPage';
import { errorReportingService } from '@/lib/services/errorReporting';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // Report error to monitoring service
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