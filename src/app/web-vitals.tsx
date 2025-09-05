'use client';

import { performanceService } from '@/lib/services/performance';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    
    performanceService.recordWebVital({
      name: metric.name as 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB',
      value: metric.value,
      rating: metric.rating as 'good' | 'needs-improvement' | 'poor',
      delta: metric.delta,
      id: metric.id,
    });

    
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Web Vital:', metric);
    }

    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as Window & typeof globalThis & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}