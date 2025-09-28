/**
 * Advanced Service Worker Manager - Apple-Level Caching Strategy
 * Implements intelligent caching for instant repeat visits
 */

interface CacheConfig {
  version: string;
  staticAssets: string[];
  apiEndpoints: string[];
  imagePatterns: RegExp[];
}

class ServiceWorkerManager {
  private config: CacheConfig = {
    version: 'v1.0.0',
    staticAssets: [
      '/',
      '/src/main.tsx',
      '/src/index.css',
      '/src/assets-webp/hero-homeowners.webp'
    ],
    apiEndpoints: [],
    imagePatterns: [
      /\.webp$/,
      /\.jpg$/,
      /\.png$/,
      /\.svg$/
    ]
  };

  async register() {
    if (!('serviceWorker' in navigator)) {
      console.info('💾 Service Worker not supported');
      return false;
    }

    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.info('💾 Service Worker registered successfully');
      
      // Update available notification
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.info('💾 New version available! Refresh to update.');
            }
          });
        }
      });

      return true;
    } catch (error) {
      console.error('💾 Service Worker registration failed:', error);
      return false;
    }
  }

  async preloadCriticalAssets() {
    if (!('caches' in window)) return;

    try {
      const cache = await caches.open(`static-${this.config.version}`);
      await cache.addAll(this.config.staticAssets);
      console.info('💾 Critical assets preloaded to cache');
    } catch (error) {
      console.error('💾 Failed to preload assets:', error);
    }
  }

  async clearOldCaches() {
    if (!('caches' in window)) return;

    const cacheNames = await caches.keys();
    const currentCaches = [`static-${this.config.version}`, `images-${this.config.version}`];
    
    const deletionPromises = cacheNames
      .filter(name => !currentCaches.includes(name))
      .map(name => caches.delete(name));

    await Promise.all(deletionPromises);
    console.info('💾 Old caches cleared');
  }
}

export const serviceWorkerManager = new ServiceWorkerManager();