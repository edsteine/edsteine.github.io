"use client";

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionDelay: number;
  memoryUsage?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Performance metrics collection
    const collectMetrics = () => {
      if (typeof window === 'undefined') return;

      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Simple interaction delay measurement
        let interactionStart = 0;
        let interactionDelay = 0;
        
        const measureInteraction = () => {
          interactionStart = performance.now();
        };
        
        const calculateDelay = () => {
          if (interactionStart) {
            interactionDelay = performance.now() - interactionStart;
          }
        };

        // Add event listeners for interaction measurement
        document.addEventListener('click', measureInteraction);
        setTimeout(calculateDelay, 16); // Check after one frame

        // Memory usage (if available)
        const memoryUsage = (performance as unknown as { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize;

        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          interactionDelay: Math.round(interactionDelay),
          memoryUsage: memoryUsage ? Math.round(memoryUsage / 1024 / 1024) : undefined
        });

        // Cleanup
        return () => {
          document.removeEventListener('click', measureInteraction);
        };
      } catch (error) {
        console.log('Performance metrics collection failed:', error);
      }
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
      return () => window.removeEventListener('load', collectMetrics);
    }
  }, []);

  // Analytics tracking (simple page view)
  useEffect(() => {
    const trackPageView = () => {
      // Simple analytics without external dependencies
      const viewData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        colorDepth: screen.colorDepth,
        language: navigator.language,
        platform: navigator.platform
      };

      // Store locally for demo purposes
      const views = JSON.parse(localStorage.getItem('portfolio_views') || '[]');
      views.push(viewData);
      // Keep only last 50 views
      if (views.length > 50) views.splice(0, views.length - 50);
      localStorage.setItem('portfolio_views', JSON.stringify(views));
    };

    trackPageView();
  }, []);

  // Show metrics in development or when manually triggered
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (!metrics || (!isDevelopment && !showMetrics)) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <button
        onClick={() => setShowMetrics(!showMetrics)}
        className="bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-50 hover:opacity-100 transition-opacity"
        title="Performance Metrics"
      >
        📊
      </button>
      
      {showMetrics && (
        <div className="mt-2 bg-black/80 text-white text-xs rounded-lg p-3 space-y-1 min-w-[200px] backdrop-blur">
          <div className="font-semibold text-green-400 mb-2">Performance Metrics</div>
          <div className="grid grid-cols-2 gap-2">
            <div>Load Time:</div>
            <div className="font-mono">{metrics.loadTime}ms</div>
            
            <div>First Paint:</div>
            <div className="font-mono">{metrics.renderTime}ms</div>
            
            <div>Interaction:</div>
            <div className="font-mono">{metrics.interactionDelay}ms</div>
            
            {metrics.memoryUsage && (
              <>
                <div>Memory:</div>
                <div className="font-mono">{metrics.memoryUsage}MB</div>
              </>
            )}
          </div>
          
          <div className="border-t border-gray-600 pt-2 mt-2">
            <div className="text-gray-300">
              Views: {JSON.parse(localStorage.getItem('portfolio_views') || '[]').length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;