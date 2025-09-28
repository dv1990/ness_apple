/**
 * Clean Development Service Worker - No Caching
 */

// Completely disable caching in development
self.addEventListener('install', (event) => {
  console.log('💾 Clean Service Worker installed - No caching in development');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('💾 Clean Service Worker activated - Clearing all caches');
  
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Pass through all requests without any interference
self.addEventListener('fetch', (event) => {
  // Let browser handle all requests normally - no caching in development
  return;
});