// Enhanced service worker with better caching strategies
const CACHE_NAME = 'caffeine-cove-v3';
const IMAGE_CACHE_NAME = 'caffeine-cove-images-v3';
const FAVICON_CACHE_NAME = 'caffeine-cove-favicons-v1';
const CRITICAL_IMAGES = [
  '/src/assets/cafe-interior.jpg',
  '/src/assets/logo.png',
  '/src/assets/coffeebg2.png'
];
const FAVICON_FILES = [
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
  '/site.webmanifest'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll([
          '/',
          '/src/main.tsx',
          '/src/index.css'
        ]);
      }),
      caches.open(IMAGE_CACHE_NAME).then(cache => {
        return cache.addAll(CRITICAL_IMAGES);
      }),
      caches.open(FAVICON_CACHE_NAME).then(cache => {
        return cache.addAll(FAVICON_FILES);
      })
    ]).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== IMAGE_CACHE_NAME && 
              cacheName !== FAVICON_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event with stale-while-revalidate strategy for images and favicons
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle favicon requests with cache-first strategy
  if (FAVICON_FILES.some(favicon => url.pathname === favicon)) {
    event.respondWith(
      caches.open(FAVICON_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetch(event.request).then(fetchResponse => {
            if (fetchResponse.ok) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
  }
  
  // Handle image requests
  else if (event.request.destination === 'image' || 
      url.pathname.match(/\.(jpg|jpeg|png|webp|gif|svg)$/)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            // Return cached version immediately
            fetch(event.request).then(fetchResponse => {
              if (fetchResponse.ok) {
                cache.put(event.request, fetchResponse.clone());
              }
            }).catch(() => {});
            return response;
          }
          
          // Fetch and cache new image
          return fetch(event.request).then(fetchResponse => {
            if (fetchResponse.ok) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
  }
  
  // Handle other requests with network-first strategy
  else {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }
});