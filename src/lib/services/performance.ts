/**
 * Performance Monitoring Service
 * Tracks Core Web Vitals and custom metrics
 */

import { errorReportingService } from './errorReporting';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  id: string;
}

interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

class PerformanceService {
  private static instance: PerformanceService;
  private metrics: PerformanceMetric[] = [];
  private isEnabled: boolean = false;
  private reportingEndpoint?: string;

  private constructor() {
    this.initialize();
  }

  static getInstance(): PerformanceService {
    if (!PerformanceService.instance) {
      PerformanceService.instance = new PerformanceService();
    }
    return PerformanceService.instance;
  }

  private initialize(): void {
    this.isEnabled = process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING === 'true';
    this.reportingEndpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;

    if (typeof window !== 'undefined' && this.isEnabled) {
      this.setupPerformanceObserver();
      this.trackCustomMetrics();
    }
  }

  /**
   * Setup Performance Observer for Core Web Vitals
   */
  private setupPerformanceObserver(): void {
    try {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              this.recordMetric('LCP', entry.startTime);
            }
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay (FID) and Cumulative Layout Shift (CLS)
      this.setupWebVitalsPolyfill();
    } catch (error) {
      errorReportingService.captureException(error as Error, {
        tags: { component: 'PerformanceService' }
      });
    }
  }

  /**
   * Setup Web Vitals using the web-vitals library approach
   */
  private setupWebVitalsPolyfill(): void {
    // First Contentful Paint
    this.measureFCP();
    
    // Time to First Byte
    this.measureTTFB();
    
    // Layout Shift tracking
    this.measureCLS();
    
    // First Input Delay
    this.measureFID();
  }

  private measureFCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.recordMetric('FCP', entry.startTime);
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP measurement failed:', error);
      }
    }
  }

  private measureTTFB(): void {
    try {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        this.recordMetric('TTFB', ttfb);
      }
    } catch (error) {
      console.warn('TTFB measurement failed:', error);
    }
  }

  private measureCLS(): void {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceEntry[];
          entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
          });
          this.recordMetric('CLS', clsValue);
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS measurement failed:', error);
      }
    }
  }

  private measureFID(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { processingStart?: number; startTime?: number }) => {
            if (entry.processingStart && entry.startTime) {
              this.recordMetric('FID', entry.processingStart - entry.startTime);
            }
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID measurement failed:', error);
      }
    }
  }

  /**
   * Track custom performance metrics
   */
  private trackCustomMetrics(): void {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.recordCustomMetric('page_load_time', loadTime);
    });

    // Track DOM content loaded
    document.addEventListener('DOMContentLoaded', () => {
      const domTime = performance.now();
      this.recordCustomMetric('dom_content_loaded', domTime);
    });

    // Track resource loading
    this.trackResourceMetrics();
  }

  private trackResourceMetrics(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          let totalSize = 0;
          let totalDuration = 0;

          entries.forEach((entry: PerformanceEntry & { transferSize?: number }) => {
            if (entry.transferSize) {
              totalSize += entry.transferSize;
            }
            totalDuration += entry.duration;
          });

          this.recordCustomMetric('total_resource_size', totalSize);
          this.recordCustomMetric('total_resource_load_time', totalDuration);
        });

        observer.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('Resource metrics failed:', error);
      }
    }
  }

  /**
   * Record a Web Vital metric
   */
  recordWebVital(metric: WebVitalsMetric): void {
    this.recordMetric(metric.name, metric.value, metric.rating);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${metric.name}: ${metric.value} (${metric.rating})`);
    }
  }

  /**
   * Record a performance metric
   */
  private recordMetric(name: string, value: number, rating?: 'good' | 'needs-improvement' | 'poor'): void {
    const metric: PerformanceMetric = {
      name,
      value,
      rating: rating || this.calculateRating(name, value),
      timestamp: Date.now(),
      id: this.generateId(),
    };

    this.metrics.push(metric);
    this.reportMetric(metric);

    // Keep only last 50 metrics to prevent memory bloat
    if (this.metrics.length > 50) {
      this.metrics = this.metrics.slice(-50);
    }
  }

  /**
   * Record custom performance metric
   */
  recordCustomMetric(name: string, value: number): void {
    this.recordMetric(name, value);
  }

  /**
   * Calculate rating based on metric thresholds
   */
  private calculateRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, { good: number; poor: number }> = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[name];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Report metric to external service
   */
  private async reportMetric(metric: PerformanceMetric): Promise<void> {
    if (!this.reportingEndpoint) return;

    try {
      await fetch(this.reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...metric,
          url: window.location.href,
          userAgent: navigator.userAgent,
          connection: this.getConnectionInfo(),
        }),
      });
    } catch (error) {
      console.warn('Failed to report performance metric:', error);
    }
  }

  /**
   * Get connection information
   */
  private getConnectionInfo() {
    if ('connection' in navigator) {
      const conn = (navigator as Navigator & { connection?: { effectiveType?: string; downlink?: number; rtt?: number } }).connection;
      return {
        effectiveType: conn?.effectiveType,
        downlink: conn?.downlink,
        rtt: conn?.rtt,
      };
    }
    return null;
  }

  /**
   * Generate unique ID for metric
   */
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    metrics: PerformanceMetric[];
    summary: Record<string, { average: number; count: number; rating: string }>;
  } {
    const summary: Record<string, { total: number; count: number; ratings: string[] }> = {};

    this.metrics.forEach((metric) => {
      if (!summary[metric.name]) {
        summary[metric.name] = { total: 0, count: 0, ratings: [] };
      }
      summary[metric.name].total += metric.value;
      summary[metric.name].count += 1;
      summary[metric.name].ratings.push(metric.rating);
    });

    const processedSummary: Record<string, { average: number; count: number; rating: string }> = {};
    
    Object.keys(summary).forEach((key) => {
      const data = summary[key];
      const average = data.total / data.count;
      const mostCommonRating = this.getMostCommonRating(data.ratings);
      
      processedSummary[key] = {
        average,
        count: data.count,
        rating: mostCommonRating,
      };
    });

    return {
      metrics: this.metrics,
      summary: processedSummary,
    };
  }

  private getMostCommonRating(ratings: string[]): string {
    const counts = ratings.reduce((acc, rating) => {
      acc[rating] = (acc[rating] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  }

  /**
   * Clear metrics
   */
  clearMetrics(): void {
    this.metrics = [];
  }
}

export const performanceService = PerformanceService.getInstance();
export type { PerformanceMetric, WebVitalsMetric };