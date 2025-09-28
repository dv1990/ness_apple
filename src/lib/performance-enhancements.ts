/**
 * Apple-Level Performance Enhancements for WebP Optimization
 * Implements comprehensive loading performance strategies
 */

// Performance metrics tracking
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  imageLoadTime: number;
  totalImages: number;
}

class ApplePerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    imageLoadTime: 0,
    totalImages: 0
  };

  private observers: Map<string, PerformanceObserver> = new Map();

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.info(`🎯 LCP: ${Math.round(lastEntry.startTime)}ms`);
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    this.observers.set('lcp', lcpObserver);

    // First Input Delay observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Cast to PerformanceEventTiming for FID measurements
        const fidEntry = entry as any;
        if (fidEntry.processingStart) {
          console.info(`⚡ FID: ${Math.round(fidEntry.processingStart - fidEntry.startTime)}ms`);
        }
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
    this.observers.set('fid', fidObserver);

    // Cumulative Layout Shift observer
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.info(`📐 CLS: ${clsValue.toFixed(4)}`);
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    this.observers.set('cls', clsObserver);
  }

  // Track image loading performance
  trackImageLoad(src: string, startTime: number) {
    const loadTime = performance.now() - startTime;
    this.metrics.imageLoadTime += loadTime;
    this.metrics.totalImages += 1;

    console.info(`🖼️ Image loaded: ${this.getImageName(src)} (${Math.round(loadTime)}ms)`);

    // Alert on slow images
    if (loadTime > 1000) {
      console.warn(`🐌 Slow image: ${src} took ${Math.round(loadTime)}ms`);
    }
  }

  private getImageName(src: string): string {
    return src.split('/').pop()?.split('.')[0] || 'unknown';
  }

  // Report comprehensive metrics
  reportMetrics() {
    const avgImageLoad = this.metrics.totalImages > 0 
      ? this.metrics.imageLoadTime / this.metrics.totalImages 
      : 0;

    console.group('🍎 Apple-Level Performance Metrics');
    console.info(`📊 Images loaded: ${this.metrics.totalImages}`);
    console.info(`🖼️ Avg image load: ${Math.round(avgImageLoad)}ms`);
    console.info(`⏱️ Total image time: ${Math.round(this.metrics.imageLoadTime)}ms`);
    console.groupEnd();

    // Performance recommendations
    if (avgImageLoad > 500) {
      console.warn('💡 Consider more aggressive WebP compression or image optimization');
    }
    if (this.metrics.totalImages > 20) {
      console.warn('💡 Consider implementing virtual scrolling for image-heavy sections');
    }
  }

  // Cleanup observers
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Image preloading with WebP support
export const preloadWebPImages = (imagePaths: string[]) => {
  if (typeof window === 'undefined') return;

  imagePaths.forEach(path => {
    // Check WebP support
    const supportsWebP = document.createElement('canvas')
      .toDataURL('image/webp', 0.1)
      .indexOf('webp') > -1;

    const webpPath = supportsWebP ? path.replace(/\.(jpg|jpeg|png)$/i, '.webp') : path;

    // Create preload link
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = webpPath;
    if (supportsWebP) {
      link.type = 'image/webp';
    }

    document.head.appendChild(link);
  });
};

// Resource hints for better loading
export const addResourceHints = () => {
  if (typeof window === 'undefined') return;

  // DNS prefetch for external resources
  const dnsHints = [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com'
  ];

  dnsHints.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Bundle size monitoring
export const monitorBundleSize = () => {
  if (typeof window === 'undefined') return;

  // Monitor script loading
  const scripts = document.getElementsByTagName('script');
  let totalSize = 0;

  Array.from(scripts).forEach(script => {
    if (script.src) {
      fetch(script.src)
        .then(response => response.blob())
        .then(blob => {
          totalSize += blob.size;
          if (blob.size > 100 * 1024) { // 100KB threshold
            console.warn(`📦 Large script: ${script.src} (${Math.round(blob.size / 1024)}KB)`);
          }
        })
        .catch(() => {}); // Ignore CORS errors
    }
  });
};

// Global performance monitor instance
export const applePerformanceMonitor = new ApplePerformanceMonitor();

// Initialize performance enhancements
export const initializePerformanceEnhancements = () => {
  console.info('🍎 Initializing Apple-level performance enhancements...');
  
  addResourceHints();
  monitorBundleSize();
  
  // Report metrics after page load
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        applePerformanceMonitor.reportMetrics();
      }, 1000);
    });
  }
};