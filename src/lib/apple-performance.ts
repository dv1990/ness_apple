/**
 * Apple-Level Performance System
 * Implements Apple's performance standards and monitoring
 */

// Apple performance budgets (stricter than Core Web Vitals)
export const APPLE_PERFORMANCE_BUDGETS = {
  // Loading Performance
  LCP_BUDGET: 1200,    // Largest Contentful Paint - Apple standard
  FCP_BUDGET: 800,     // First Contentful Paint - Instant feel
  TTI_BUDGET: 2000,    // Time to Interactive - Apple smooth
  
  // Bundle Performance
  CRITICAL_JS: 150000,  // 150KB critical JavaScript
  TOTAL_JS: 400000,     // 400KB total JavaScript budget
  CRITICAL_CSS: 50000,  // 50KB critical CSS
  
  // Image Performance
  HERO_IMAGE_BUDGET: 100000,  // 100KB for hero images
  REGULAR_IMAGE_BUDGET: 50000, // 50KB for content images
  
  // Interaction Performance
  INPUT_DELAY: 16,      // 16ms max input delay (60fps)
  SCROLL_PERFORMANCE: 16, // Smooth 60fps scrolling
  
  // Network Performance
  RESOURCE_COUNT: 50,   // Max 50 network requests
  FONT_LOAD_TIME: 500   // 500ms font loading budget
};

class ApplePerformanceMonitor {
  private violations: string[] = [];
  private metrics: Map<string, number> = new Map();
  
  constructor() {
    this.initializeCoreWebVitalsTracking();
    this.setupResourceMonitoring();
  }

  private initializeCoreWebVitalsTracking() {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('lcp', lastEntry.startTime);
      this.checkBudget('lcp', lastEntry.startTime, APPLE_PERFORMANCE_BUDGETS.LCP_BUDGET);
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.set('fcp', entry.startTime);
          this.checkBudget('fcp', entry.startTime, APPLE_PERFORMANCE_BUDGETS.FCP_BUDGET);
        }
      });
    }).observe({ type: 'paint', buffered: true });

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart) {
          const fid = entry.processingStart - entry.startTime;
          this.metrics.set('fid', fid);
          this.checkBudget('fid', fid, APPLE_PERFORMANCE_BUDGETS.INPUT_DELAY);
        }
      });
    }).observe({ type: 'first-input', buffered: true });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.set('cls', clsValue);
    }).observe({ type: 'layout-shift', buffered: true });
  }

  private setupResourceMonitoring() {
    if (typeof window === 'undefined') return;

    // Monitor resource loading
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.transferSize > APPLE_PERFORMANCE_BUDGETS.REGULAR_IMAGE_BUDGET) {
          this.addViolation(`Large resource: ${entry.name} (${Math.round(entry.transferSize / 1024)}KB)`);
        }
      });
    }).observe({ type: 'resource', buffered: true });

    // Font loading monitoring
    if ('fonts' in document) {
      document.fonts.addEventListener('loadingdone', () => {
        const fontLoadTime = performance.now();
        if (fontLoadTime > APPLE_PERFORMANCE_BUDGETS.FONT_LOAD_TIME) {
          this.addViolation(`Font loading exceeded budget: ${Math.round(fontLoadTime)}ms`);
        }
      });
    }
  }

  private checkBudget(metric: string, value: number, budget: number) {
    if (value > budget) {
      this.addViolation(`${metric.toUpperCase()}: ${Math.round(value)}ms (budget: ${budget}ms)`);
    }
  }

  private addViolation(violation: string) {
    this.violations.push(violation);
    if (process.env.NODE_ENV === 'development') {
      console.warn(`🍎 Apple Performance Violation: ${violation}`);
    }
  }

  // Get performance score (0-100, Apple standards)
  getPerformanceScore(): number {
    const lcp = this.metrics.get('lcp') || 0;
    const fcp = this.metrics.get('fcp') || 0;
    const fid = this.metrics.get('fid') || 0;
    const cls = this.metrics.get('cls') || 0;

    // Apple scoring algorithm
    let score = 100;
    
    // LCP scoring (40% weight)
    if (lcp > APPLE_PERFORMANCE_BUDGETS.LCP_BUDGET) {
      score -= Math.min(40, (lcp - APPLE_PERFORMANCE_BUDGETS.LCP_BUDGET) / 100);
    }
    
    // FCP scoring (30% weight)
    if (fcp > APPLE_PERFORMANCE_BUDGETS.FCP_BUDGET) {
      score -= Math.min(30, (fcp - APPLE_PERFORMANCE_BUDGETS.FCP_BUDGET) / 50);
    }
    
    // FID scoring (20% weight)
    if (fid > APPLE_PERFORMANCE_BUDGETS.INPUT_DELAY) {
      score -= Math.min(20, fid);
    }
    
    // CLS scoring (10% weight)
    if (cls > 0.1) {
      score -= Math.min(10, cls * 100);
    }

    return Math.max(0, Math.round(score));
  }

  // Report Apple-level performance summary
  reportPerformance() {
    const score = this.getPerformanceScore();
    const grade = score >= 90 ? '🍎 Apple Grade' : score >= 80 ? '🟢 Good' : score >= 60 ? '🟡 Needs Work' : '🔴 Poor';
    
    console.group(`🍎 Apple Performance Report - Score: ${score}/100 (${grade})`);
    console.info(`📊 LCP: ${Math.round(this.metrics.get('lcp') || 0)}ms`);
    console.info(`⚡ FCP: ${Math.round(this.metrics.get('fcp') || 0)}ms`);
    console.info(`👆 FID: ${Math.round(this.metrics.get('fid') || 0)}ms`);
    console.info(`📐 CLS: ${(this.metrics.get('cls') || 0).toFixed(4)}`);
    
    if (this.violations.length > 0) {
      console.warn('Violations:', this.violations);
    } else {
      console.info('✅ All Apple standards met!');
    }
    console.groupEnd();
  }

  // Get real-time metrics
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
}

// Resource prioritization utilities
export const prioritizeResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const criticalFontLink = document.createElement('link');
  criticalFontLink.rel = 'preload';
  criticalFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  criticalFontLink.as = 'style';
  document.head.appendChild(criticalFontLink);

  // Prefetch likely next resources
  const prefetchResources = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap'
  ];

  prefetchResources.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  });
};

// Bundle size monitoring
export const monitorBundleSize = () => {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    let totalJSSize = 0;
    let totalCSSSize = 0;

    entries.forEach((entry: any) => {
      if (entry.name.includes('.js')) {
        totalJSSize += entry.transferSize || 0;
      } else if (entry.name.includes('.css')) {
        totalCSSSize += entry.transferSize || 0;
      }
    });

    if (totalJSSize > APPLE_PERFORMANCE_BUDGETS.TOTAL_JS) {
      console.warn(`🍎 JS Bundle too large: ${Math.round(totalJSSize / 1024)}KB (budget: ${APPLE_PERFORMANCE_BUDGETS.TOTAL_JS / 1024}KB)`);
    }

    if (totalCSSSize > APPLE_PERFORMANCE_BUDGETS.CRITICAL_CSS) {
      console.warn(`🍎 CSS Bundle too large: ${Math.round(totalCSSSize / 1024)}KB (budget: ${APPLE_PERFORMANCE_BUDGETS.CRITICAL_CSS / 1024}KB)`);
    }
  });

  observer.observe({ type: 'resource', buffered: true });
};

// Global Apple performance monitor
export const applePerformanceMonitor = new ApplePerformanceMonitor();

// Initialize Apple-level performance tracking
export const initializeApplePerformance = () => {
  console.info('🍎 Initializing Apple-level performance monitoring...');
  
  prioritizeResources();
  monitorBundleSize();
  
  // Report metrics after page load
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        applePerformanceMonitor.reportPerformance();
      }, 1000);
    });
  }
};