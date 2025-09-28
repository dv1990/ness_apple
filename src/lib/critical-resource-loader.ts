/**
 * Critical Resource Loader - Apple Performance Standards
 * Intelligently preloads critical resources for instant user experience
 */

// Critical resources for immediate loading
const CRITICAL_RESOURCES = {
  // Hero image - must load instantly
  heroImage: '/src/assets-webp/hero-homeowners.webp',
  
  // Critical fonts
  fonts: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  ],
  
  // Essential JavaScript chunks
  criticalChunks: [
    // Will be auto-detected by Vite
  ]
};

// Preload critical resources with intelligent prioritization
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  // Preload hero image with highest priority
  const heroLink = document.createElement('link');
  heroLink.rel = 'preload';
  heroLink.as = 'image';
  heroLink.href = CRITICAL_RESOURCES.heroImage;
  heroLink.type = 'image/webp';
  heroLink.setAttribute('fetchpriority', 'high');
  document.head.appendChild(heroLink);

  // Preload fonts
  CRITICAL_RESOURCES.fonts.forEach(fontUrl => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'style';
    fontLink.href = fontUrl;
    fontLink.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(fontLink);
    
    // Also add the actual stylesheet
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = fontUrl;
    document.head.appendChild(styleLink);
  });

  // DNS prefetch for external domains
  const prefetchDomains = [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com'
  ];

  prefetchDomains.forEach(domain => {
    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'dns-prefetch';
    prefetchLink.href = domain;
    document.head.appendChild(prefetchLink);
  });
};

// Intelligent image loading based on viewport and device capabilities
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;

  // Check device capabilities
  const connection = (navigator as any).connection;
  const isSlowConnection = connection && (
    connection.effectiveType === 'slow-2g' || 
    connection.effectiveType === '2g' ||
    connection.saveData
  );

  // Adjust image quality based on connection
  const imageQuality = isSlowConnection ? 'low' : 'high';
  
  if (process.env.NODE_ENV === 'development') {
    console.info(`📊 Image loading optimized for: ${imageQuality} quality`);
    if (connection) {
      console.info(`📡 Connection: ${connection.effectiveType}, Save Data: ${connection.saveData}`);
    }
  }

  return { imageQuality, isSlowConnection };
};

// Initialize critical loading
export const initializeCriticalLoading = () => {
  if (typeof window === 'undefined') return;

  console.info('🚀 Initializing critical resource loading...');
  
  preloadCriticalResources();
  optimizeImageLoading();

  // Track loading performance
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name.includes('hero-homeowners')) {
          console.info(`🖼️ Hero image loaded: ${Math.round((entry as PerformanceResourceTiming).responseEnd - (entry as PerformanceResourceTiming).fetchStart)}ms`);
        }
      });
    });

    observer.observe({ type: 'resource', buffered: true });
  }
};