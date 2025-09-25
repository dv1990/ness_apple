/**
 * Performance Monitoring System
 * Tracks and optimizes website performance
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
  cumulativeLayoutShift: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    interactionTime: 0,
    cumulativeLayoutShift: 0
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    // Cumulative Layout Shift Observer
    if ('LayoutShiftList' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            this.metrics.cumulativeLayoutShift += (entry as any).value;
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }

    // First Input Delay Observer
    if ('PerformanceEventTiming' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.interactionTime = (entry as any).processingStart - entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }

    // Core Web Vitals tracking
    this.trackCoreWebVitals();
  }

  private trackCoreWebVitals() {
    // Track when page becomes interactive
    document.addEventListener('DOMContentLoaded', () => {
      this.metrics.renderTime = performance.now();
    });

    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now();
      this.reportMetrics();
    });
  }

  private reportMetrics() {
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Metrics');
      console.log('Load Time:', `${this.metrics.loadTime.toFixed(2)}ms`);
      console.log('Render Time:', `${this.metrics.renderTime.toFixed(2)}ms`);
      console.log('Interaction Time:', `${this.metrics.interactionTime.toFixed(2)}ms`);
      console.log('Cumulative Layout Shift:', this.metrics.cumulativeLayoutShift.toFixed(4));
      console.groupEnd();
    }
  }

  // Public method to track custom performance marks
  public markFeature(name: string) {
    performance.mark(`feature-${name}-start`);
    
    return {
      end: () => {
        performance.mark(`feature-${name}-end`);
        performance.measure(`feature-${name}`, `feature-${name}-start`, `feature-${name}-end`);
      }
    };
  }

  // Image loading performance tracker
  public trackImageLoad(src: string, startTime: number) {
    const loadTime = performance.now() - startTime;
    if (loadTime > 1000) { // Warn about slow images
      console.warn(`🐌 Slow image load (${loadTime.toFixed(2)}ms):`, src);
    }
  }

  // Component render performance tracker
  public trackComponentRender(componentName: string) {
    const startTime = performance.now();
    
    return () => {
      const renderTime = performance.now() - startTime;
      if (renderTime > 16) { // Warn about slow renders (>1 frame at 60fps)
        console.warn(`🐌 Slow component render (${renderTime.toFixed(2)}ms):`, componentName);
      }
    };
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// React hook for performance tracking
export const usePerformanceTracking = (componentName: string) => {
  if (process.env.NODE_ENV === 'development') {
    const endTracking = performanceMonitor.trackComponentRender(componentName);
    return { endTracking };
  }
  return { endTracking: () => {} };
};