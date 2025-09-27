import { useEffect, useRef } from 'react';
import { performanceBudget } from '@/lib/performance-optimizations';

interface PerformanceBudgetConfig {
  pageName: string;
  customThresholds?: {
    lcp?: number;
    fid?: number;
    cls?: number;
  };
}

export const usePerformanceBudget = ({ pageName, customThresholds }: PerformanceBudgetConfig) => {
  const metricsRef = useRef<{
    lcp?: number;
    fid?: number;
    cls?: number;
    navigationStart?: number;
  }>({});

  useEffect(() => {
    metricsRef.current.navigationStart = performance.now();

    // LCP Observer
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          metricsRef.current.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // CLS Observer
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          metricsRef.current.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            metricsRef.current.fid = (entry as any).processingStart - entry.startTime;
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        return () => {
          lcpObserver.disconnect();
          clsObserver.disconnect();
          fidObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);

  useEffect(() => {
    const checkBudget = () => {
      const thresholds = {
        ...performanceBudget,
        ...customThresholds
      };

      const violations = performanceBudget.checkBudget({
        lcp: metricsRef.current.lcp,
        fid: metricsRef.current.fid,
        cls: metricsRef.current.cls
      });

      if (violations.length > 0 && process.env.NODE_ENV === 'development') {
        console.group(`⚠️ Performance Budget Violations - ${pageName}`);
        violations.forEach(violation => console.warn(violation));
        console.groupEnd();
      }
    };

    // Check budget after page load
    const timer = setTimeout(checkBudget, 5000);
    return () => clearTimeout(timer);
  }, [pageName, customThresholds]);

  return metricsRef.current;
};