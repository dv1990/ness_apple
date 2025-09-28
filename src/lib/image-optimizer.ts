/**
 * Apple-level Image Optimization System
 * Handles WebP conversion, lazy loading, and performance monitoring
 */

// Image format detection and optimization
export const getOptimizedImageSrc = (originalSrc: string, quality = 80): string => {
  // If it's an external URL, return as-is
  if (originalSrc.startsWith('http')) {
    return originalSrc;
  }

  // Convert to WebP path
  const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Map original assets to WebP versions
  const assetMap: Record<string, string> = {
    // Core product images
    '/src/assets/ness-pro-product.png': '/src/assets-webp/ness-pro-product.webp',
    '/src/assets/ness-pod-product.png': '/src/assets-webp/ness-pod-product.webp', 
    '/src/assets/ness-cube-product.png': '/src/assets-webp/ness-cube-product.webp',
    
    // Hero images
    '/src/assets/hero-homeowners.jpg': '/src/assets-webp/hero-homeowners.webp',
    
    // Carousel images
    '/src/assets/carousel-ac-comfort.jpg': '/src/assets-webp/carousel-ac-comfort.webp',
    '/src/assets/carousel-ev-charging.jpg': '/src/assets-webp/carousel-ev-charging.webp',
    '/src/assets/carousel-kitchen-appliances.jpg': '/src/assets-webp/carousel-kitchen-appliances.webp',
    
    // Technology images
    '/src/assets/ai-software.jpg': '/src/assets-webp/ai-software.webp',
    '/src/assets/battery-technology.jpg': '/src/assets-webp/battery-technology.webp',
  };

  return assetMap[originalSrc] || webpSrc;
};

// Performance monitoring for images
export const trackImageLoad = (src: string, loadTime: number) => {
  if (typeof window !== 'undefined' && window.performance) {
    console.info(`🖼️ Image loaded: ${src} (${loadTime}ms)`);
    
    // Track Core Web Vitals impact
    if (loadTime > 2000) {
      console.warn(`⚠️ Slow image load: ${src} took ${loadTime}ms`);
    }
  }
};

// Preload critical images
export const preloadCriticalImages = (imageSrcs: string[]) => {
  if (typeof window === 'undefined') return;

  imageSrcs.forEach(src => {
    const optimizedSrc = getOptimizedImageSrc(src);
    
    // Create WebP preload link
    const webpLink = document.createElement('link');
    webpLink.rel = 'preload';
    webpLink.as = 'image';
    webpLink.href = optimizedSrc;
    webpLink.type = 'image/webp';
    
    // Create fallback preload link
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'preload';
    fallbackLink.as = 'image';
    fallbackLink.href = src;
    
    document.head.appendChild(webpLink);
    document.head.appendChild(fallbackLink);
  });
};

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === 'undefined') return null;

  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
};

// Image compression quality based on device capabilities
export const getOptimalQuality = (): number => {
  if (typeof window === 'undefined') return 80;

  // Check connection speed
  const connection = (navigator as any).connection;
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 60; // Lower quality for slow connections
    }
    if (connection.effectiveType === '3g') {
      return 70;
    }
  }

  // Check device pixel ratio
  const dpr = window.devicePixelRatio || 1;
  if (dpr > 2) {
    return 85; // Higher quality for high-DPI displays
  }

  return 80; // Default quality
};