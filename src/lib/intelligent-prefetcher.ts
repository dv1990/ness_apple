/**
 * Intelligent Prefetching System - Apple-Level Predictive Loading
 * Learns user behavior to preload content before it's needed
 */

interface UserBehavior {
  visitedPaths: string[];
  timeSpent: Record<string, number>;
  clickPatterns: string[];
  deviceType: 'mobile' | 'tablet' | 'desktop';
  connectionType: string;
}

class IntelligentPrefetcher {
  private behavior: UserBehavior;
  private prefetchQueue: Set<string> = new Set();
  private prefetchedResources: Set<string> = new Set();

  constructor() {
    this.behavior = this.loadBehavior();
    this.detectDeviceAndConnection();
    this.startBehaviorTracking();
  }

  private loadBehavior(): UserBehavior {
    const stored = localStorage.getItem('ness_user_behavior');
    return stored ? JSON.parse(stored) : {
      visitedPaths: [],
      timeSpent: {},
      clickPatterns: [],
      deviceType: 'desktop',
      connectionType: '4g'
    };
  }

  private saveBehavior() {
    localStorage.setItem('ness_user_behavior', JSON.stringify(this.behavior));
  }

  private detectDeviceAndConnection() {
    // Device type detection
    const width = window.innerWidth;
    if (width < 768) {
      this.behavior.deviceType = 'mobile';
    } else if (width < 1024) {
      this.behavior.deviceType = 'tablet';
    } else {
      this.behavior.deviceType = 'desktop';
    }

    // Connection type
    const connection = (navigator as any).connection;
    if (connection) {
      this.behavior.connectionType = connection.effectiveType || '4g';
    }
  }

  private startBehaviorTracking() {
    // Track page visits
    const currentPath = window.location.pathname;
    if (!this.behavior.visitedPaths.includes(currentPath)) {
      this.behavior.visitedPaths.push(currentPath);
    }

    // Track time spent on page
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Date.now() - startTime;
      this.behavior.timeSpent[currentPath] = 
        (this.behavior.timeSpent[currentPath] || 0) + timeSpent;
      this.saveBehavior();
    });

    // Track click patterns
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href) {
        const path = new URL(link.href).pathname;
        this.behavior.clickPatterns.push(`${currentPath}->${path}`);
        
        // Trigger intelligent prefetching
        this.predictAndPrefetch(path);
      }
    });
  }

  private predictAndPrefetch(clickedPath: string) {
    // Predict next likely pages based on behavior
    const likelyNextPages = this.predictNextPages(clickedPath);
    
    likelyNextPages.forEach(path => {
      if (this.shouldPrefetch(path)) {
        this.prefetchPage(path);
      }
    });
  }

  private predictNextPages(currentPath: string): string[] {
    const predictions: string[] = [];
    
    // Analyze click patterns
    const relevantPatterns = this.behavior.clickPatterns
      .filter(pattern => pattern.startsWith(currentPath + '->'))
      .map(pattern => pattern.split('->')[1]);

    // Get most common next pages
    const frequency: Record<string, number> = {};
    relevantPatterns.forEach(path => {
      frequency[path] = (frequency[path] || 0) + 1;
    });

    // Sort by frequency and take top 3
    const sorted = Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([path]) => path);

    predictions.push(...sorted);

    // Add logical next steps based on current page
    const logicalNext = this.getLogicalNextPages(currentPath);
    predictions.push(...logicalNext);

    return [...new Set(predictions)]; // Remove duplicates
  }

  private getLogicalNextPages(currentPath: string): string[] {
    const logicalMappings: Record<string, string[]> = {
      '/': ['/residential-enhanced', '/commercial-enhanced'],
      '/residential-enhanced': ['/installers-enhanced', '/technology-enhanced'],
      '/commercial-enhanced': ['/technology-enhanced', '/contact-enhanced'],
      '/technology-enhanced': ['/contact-enhanced', '/installers-enhanced'],
      '/installers-enhanced': ['/contact-enhanced']
    };

    return logicalMappings[currentPath] || [];
  }

  private shouldPrefetch(path: string): boolean {
    // Don't prefetch if already done
    if (this.prefetchedResources.has(path)) return false;

    // Check connection quality
    if (this.behavior.connectionType === 'slow-2g' || this.behavior.connectionType === '2g') {
      return false; // Don't prefetch on slow connections
    }

    // Check device type (be more conservative on mobile)
    if (this.behavior.deviceType === 'mobile' && this.prefetchedResources.size > 2) {
      return false;
    }

    return true;
  }

  private async prefetchPage(path: string) {
    if (this.prefetchedResources.has(path)) return;

    try {
      // Create prefetch link
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);

      this.prefetchedResources.add(path);
      
      console.info(`🔮 Prefetched: ${path}`);

      // Also prefetch likely images for this page
      this.prefetchPageAssets(path);
    } catch (error) {
      console.error(`🔮 Prefetch failed for ${path}:`, error);
    }
  }

  private prefetchPageAssets(path: string) {
    // Map pages to their likely images
    const pageAssets: Record<string, string[]> = {
      '/residential-enhanced': [
        '/src/assets-webp/ness-pro-product.webp',
        '/src/assets-webp/ness-pod-product.webp'
      ],
      '/commercial-enhanced': [
        '/src/assets-webp/commercial-complex.webp',
        '/src/assets-webp/industrial-complex-hero.webp'
      ],
      '/technology-enhanced': [
        '/src/assets-webp/battery-technology.webp',
        '/src/assets-webp/system-architecture.webp'
      ]
    };

    const assets = pageAssets[path] || [];
    assets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = asset;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
  }

  // Public method to manually trigger prefetching
  public prefetchRoute(path: string) {
    if (this.shouldPrefetch(path)) {
      this.prefetchPage(path);
    }
  }

  // Get analytics about user behavior
  public getBehaviorAnalytics() {
    return {
      totalPages: this.behavior.visitedPaths.length,
      avgTimePerPage: Object.values(this.behavior.timeSpent).reduce((a, b) => a + b, 0) / 
                      Object.keys(this.behavior.timeSpent).length || 0,
      mostVisitedPath: this.behavior.visitedPaths.reduce((a, b, i, arr) => 
        arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b
      ),
      deviceType: this.behavior.deviceType,
      connectionType: this.behavior.connectionType,
      prefetchedCount: this.prefetchedResources.size
    };
  }
}

export const intelligentPrefetcher = new IntelligentPrefetcher();