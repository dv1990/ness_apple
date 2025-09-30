/**
 * Production Service Worker - Basic Caching Strategy
 */

const CACHE_NAME = 'ness-v1';

self.addEventListener('install', (event) => {
  console.log('💾 Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('💾 Service Worker activated');
  event.waitUntil(self.clients.claim());
});

// Network-first strategy - always try network, fallback to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
