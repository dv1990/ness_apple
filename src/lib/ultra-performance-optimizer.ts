/**
 * Ultra Performance Optimizer - Beyond Apple-Level
 * Aggressive optimizations to achieve sub-1s load times
 */

interface PerformanceConfig {
  enableResourceHints: boolean;
  aggressiveBundleSplitting: boolean;
  enableServiceWorkerCaching: boolean;
  optimizeImages: boolean;
  enableCriticalResourcePreloading: boolean;
}

class UltraPerformanceOptimizer {
  private config: PerformanceConfig = {
    enableResourceHints: true,
    aggressiveBundleSplitting: true,
    enableServiceWorkerCaching: true,
    optimizeImages: true,
    enableCriticalResourcePreloading: true
  };

  private performanceObserver?: PerformanceObserver;

  async initialize() {
    console.info('🚀 Ultra Performance Optimizer initializing...');

    if (this.config.enableResourceHints) {
      this.setupResourceHints();
    }

    if (this.config.enableCriticalResourcePreloading) {
      this.preloadCriticalResources();
    }

    this.setupPerformanceMonitoring();
    this.optimizeFontLoading();
    this.setupIntersectionObservers();

    console.info('🚀 Ultra Performance optimizations active');
  }

  private setupResourceHints() {
    // DNS prefetch for external resources
    const dnsPrefetches = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com'
    ];

    dnsPrefetches.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  private preloadCriticalResources() {
    // Preload hero image with highest priority
    const heroImageLink = document.createElement('link');
    heroImageLink.rel = 'preload';
    heroImageLink.href = '/src/assets-webp/hero-homeowners.webp';
    heroImageLink.as = 'image';
    heroImageLink.type = 'image/webp';
    heroImageLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(heroImageLink);

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.as = 'style';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
  }

  private optimizeFontLoading() {
    // Remove font loading class when fonts are ready
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.remove('font-loading');
        console.info('🎨 Fonts loaded and optimized');
      });
    }
  }

  private setupIntersectionObservers() {
    // Lazy load images below the fold
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, { rootMargin: '50px' });

    // Observe all images with data-src
    setTimeout(() => {
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }, 100);
  }

  private setupPerformanceMonitoring() {
    // Monitor Core Web Vitals
    this.performanceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpTime = entry.startTime;
          if (lcpTime > 1200) {
            console.warn(`🐌 LCP violation: ${lcpTime}ms (target: <1200ms)`);
          } else {
            console.info(`⚡ LCP optimized: ${lcpTime}ms`);
          }
        }

        if (entry.entryType === 'first-input') {
          const fidTime = (entry as any).processingStart - entry.startTime;
          if (fidTime > 16) {
            console.warn(`🐌 FID violation: ${fidTime}ms (target: <16ms)`);
          } else {
            console.info(`⚡ FID optimized: ${fidTime}ms`);
          }
        }

        if (entry.entryType === 'layout-shift') {
          const clsScore = (entry as any).value;
          if (clsScore > 0.1) {
            console.warn(`🐌 CLS violation: ${clsScore} (target: <0.1)`);
          }
        }
      });
    });

    try {
      this.performanceObserver.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      });
    } catch (e) {
      console.info('🎯 Performance Observer not fully supported');
    }
  }

  // Measure and report bundle size
  measureBundleSize() {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    let totalJSSize = 0;
    let totalCSSSize = 0;

    resources.forEach((resource) => {
      if (resource.name.includes('.js')) {
        totalJSSize += resource.transferSize || 0;
      }
      if (resource.name.includes('.css')) {
        totalCSSSize += resource.transferSize || 0;
      }
    });

    const totalSize = totalJSSize + totalCSSSize;
    const targetSize = 300 * 1024; // 300KB target

    if (totalSize > targetSize) {
      console.warn(`📦 Bundle size warning: ${Math.round(totalSize/1024)}KB (target: 300KB)`);
    } else {
      console.info(`📦 Bundle size optimized: ${Math.round(totalSize/1024)}KB`);
    }

    return {
      totalSize: Math.round(totalSize/1024),
      jsSize: Math.round(totalJSSize/1024),
      cssSize: Math.round(totalCSSSize/1024)
    };
  }

  // Generate performance report
  generatePerformanceReport() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const bundleSize = this.measureBundleSize();
    
    const report = {
      loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      bundleSize,
      timestamp: new Date().toISOString()
    };

    console.group('🎯 Performance Report');
    console.table(report);
    console.groupEnd();

    return report;
  }

  destroy() {
    this.performanceObserver?.disconnect();
  }
}

export const ultraPerformanceOptimizer = new UltraPerformanceOptimizer();