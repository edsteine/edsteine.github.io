// Global Error Page - Next.js convention for handling runtime errors
"use client";

import { useEffect } from 'react';
import ErrorPage from '@/app/_components/error/ErrorPage';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // Log the error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <ErrorPage 
      errorType="500"
      customDescription="We encountered an unexpected error. Please try refreshing the page."
    />
  );
}