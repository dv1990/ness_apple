/**
 * Performance Optimization Utilities
 * Advanced techniques for React performance enhancement
 */

import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { performanceMonitor } from './performance-monitor';

// Debounce hook for performance-critical operations
export const useDebounce = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  return useCallback((...args: T) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
};

// Throttle hook for scroll and resize events
export const useThrottle = <T extends any[]>(
  callback: (...args: T) => void,
  limit: number
) => {
  const inThrottle = useRef(false);
  
  return useCallback((...args: T) => {
    if (!inThrottle.current) {
      callback(...args);
      inThrottle.current = true;
      setTimeout(() => inThrottle.current = false, limit);
    }
  }, [callback, limit]);
};

// Memoized component wrapper with performance tracking
export const withPerformanceTracking = <P extends object>(
  Component: React.ComponentType<P>,
  displayName: string
) => {
  const WrappedComponent = React.memo((props: P) => {
    const endTracking = performanceMonitor.trackComponentRender(displayName);
    
    useEffect(() => {
      return endTracking;
    });

    return React.createElement(Component, props);
  });
  
  WrappedComponent.displayName = `withPerformanceTracking(${displayName})`;
  return WrappedComponent;
};

// Efficient list virtualization utilities
export const useVirtualization = (
  itemCount: number,
  itemHeight: number,
  containerHeight: number
) => {
  return useMemo(() => {
    const visibleItems = Math.ceil(containerHeight / itemHeight) + 2; // Buffer
    return {
      itemHeight,
      visibleItems,
      totalHeight: itemCount * itemHeight
    };
  }, [itemCount, itemHeight, containerHeight]);
};

// Resource preloading utilities
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]): Promise<void> => {
  const promises = srcs.map(preloadImage);
  await Promise.allSettled(promises);
};

// Critical resource hints
export const addResourceHint = (
  href: string,
  rel: 'preload' | 'prefetch' | 'preconnect' | 'dns-prefetch',
  as?: string,
  crossorigin?: string
) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  if (as) link.setAttribute('as', as);
  if (crossorigin) link.setAttribute('crossorigin', crossorigin);
  
  document.head.appendChild(link);
};

// Bundle size analysis helper
export const trackBundleSize = () => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    const info = {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };
    
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Network Information:', info);
    }
    
    return info;
  }
  return null;
};

// Performance budget monitoring
export const performanceBudget = {
  // Core Web Vitals thresholds
  LCP_THRESHOLD: 2500, // Largest Contentful Paint (ms)
  FID_THRESHOLD: 100,  // First Input Delay (ms)
  CLS_THRESHOLD: 0.1,  // Cumulative Layout Shift
  
  checkBudget: (metrics: {
    lcp?: number;
    fid?: number;
    cls?: number;
  }) => {
    const violations = [];
    
    if (metrics.lcp && metrics.lcp > performanceBudget.LCP_THRESHOLD) {
      violations.push(`LCP: ${metrics.lcp}ms (budget: ${performanceBudget.LCP_THRESHOLD}ms)`);
    }
    
    if (metrics.fid && metrics.fid > performanceBudget.FID_THRESHOLD) {
      violations.push(`FID: ${metrics.fid}ms (budget: ${performanceBudget.FID_THRESHOLD}ms)`);
    }
    
    if (metrics.cls && metrics.cls > performanceBudget.CLS_THRESHOLD) {
      violations.push(`CLS: ${metrics.cls} (budget: ${performanceBudget.CLS_THRESHOLD})`);
    }
    
    if (violations.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('⚠️ Performance Budget Violations:', violations);
    }
    
    return violations;
  }
};

export default {
  useDebounce,
  useThrottle,
  withPerformanceTracking,
  useVirtualization,
  preloadImage,
  preloadImages,
  addResourceHint,
  trackBundleSize,
  performanceBudget
};