/**
 * Development-friendly Service Worker
 * Minimal functionality to avoid interfering with Vite dev server
 */

// Skip service worker functionality in development
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname.includes('lovableproject.com')) {
  console.log('💾 Service Worker disabled for development');
  
  // Minimal service worker for development
  self.addEventListener('install', () => {
    console.log('💾 Development Service Worker installed');
    self.skipWaiting();
  });

  self.addEventListener('activate', () => {
    console.log('💾 Development Service Worker activated');
    self.clients.claim();
  });

  // Pass through all requests without caching in development
  self.addEventListener('fetch', (event) => {
    // Let the browser handle all requests normally
    return;
  });
} else {
  // Production service worker code
  const CACHE_VERSION = 'v1.0.0';
  const STATIC_CACHE = `static-${CACHE_VERSION}`;
  const IMAGE_CACHE = `images-${CACHE_VERSION}`;
  const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;

  // Critical assets for immediate caching
  const STATIC_ASSETS = [
    '/',
    '/src/main.tsx',
    '/src/index.css',
    '/src/assets-webp/hero-homeowners.webp'
  ];

  // Install event - aggressive preloading
  self.addEventListener('install', (event) => {
    console.log('💾 Service Worker installing...');
    
    event.waitUntil(
      caches.open(STATIC_CACHE)
        .then(cache => cache.addAll(STATIC_ASSETS))
        .then(() => self.skipWaiting())
    );
  });

  // Activate event - cleanup old caches
  self.addEventListener('activate', (event) => {
    console.log('💾 Service Worker activating...');
    
    event.waitUntil(
      caches.keys()
        .then(keys => {
          const deletionPromises = keys
            .filter(key => key !== STATIC_CACHE && key !== IMAGE_CACHE && key !== DYNAMIC_CACHE)
            .map(key => caches.delete(key));
          
          return Promise.all(deletionPromises);
        })
        .then(() => self.clients.claim())
    );
  });

  // Fetch event - intelligent caching strategy
  self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Handle different asset types with specific strategies
    if (isImageRequest(request)) {
      event.respondWith(handleImageRequest(request));
    } else if (isStaticAsset(request)) {
      event.respondWith(handleStaticAsset(request));
    } else if (isPageRequest(request)) {
      event.respondWith(handlePageRequest(request));
    } else {
      event.respondWith(handleDynamicRequest(request));
    }
  });

  // Image caching - cache first with fallback
  async function handleImageRequest(request) {
    try {
      const cache = await caches.open(IMAGE_CACHE);
      const cachedResponse = await cache.match(request);
      
      if (cachedResponse) {
        // Return cached image immediately
        return cachedResponse;
      }

      // Fetch and cache new image
      const response = await fetch(request);
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      console.error('💾 Image fetch failed:', error);
      // Return fallback image or empty response
      return new Response('', { status: 404 });
    }
  }

  // Static assets - cache first
  async function handleStaticAsset(request) {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }

    try {
      const response = await fetch(request);
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      console.error('💾 Static asset fetch failed:', error);
      throw error;
    }
  }

  // Page requests - network first with cache fallback
  async function handlePageRequest(request) {
    try {
      const response = await fetch(request);
      
      // Cache successful page responses
      if (response.ok) {
        const cache = await caches.open(DYNAMIC_CACHE);
        cache.put(request, response.clone());
      }
      
      return response;
    } catch (error) {
      // Fallback to cached version
      const cache = await caches.open(DYNAMIC_CACHE);
      const cachedResponse = await cache.match(request);
      
      if (cachedResponse) {
        return cachedResponse;
      }
      
      throw error;
    }
  }

  // Dynamic requests - network first
  async function handleDynamicRequest(request) {
    try {
      const response = await fetch(request);
      return response;
    } catch (error) {
      console.error('💾 Dynamic request failed:', error);
      throw error;
    }
  }

  // Helper functions
  function isImageRequest(request) {
    return /\.(webp|jpg|jpeg|png|svg|gif)$/i.test(request.url);
  }

  function isStaticAsset(request) {
    return /\.(js|css|woff|woff2|ttf|eot)$/i.test(request.url) || 
           STATIC_ASSETS.includes(new URL(request.url).pathname);
  }

  function isPageRequest(request) {
    const url = new URL(request.url);
    return request.headers.get('accept')?.includes('text/html') ||
           url.pathname === '/' ||
           !url.pathname.includes('.');
  }
}