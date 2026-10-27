/**
 * FormDock PWA Service Worker
 * 
 * - Network-First for config.js (no-store) so merchant edits apply immediately
 * - Network-Only for transactional operations (orders, payments, enquiries)
 * - Network-First for product & catalog APIs with offline fallback
 * - Stale-While-Revalidate for static assets (JS, CSS, images, fonts)
 * - Offline navigation fallback to index.html
 */

const CACHE_VERSION = 'formdock-pwa-v1';
const STATIC_CACHE = `formdock-static-${CACHE_VERSION}`;
const API_CACHE = `formdock-api-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './favicon.svg',
  './manifest.webmanifest',
  './pwa-192x192.png',
  './pwa-512x512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.warn('[PWA-SW] Pre-caching partial failure:', err);
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== API_CACHE) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests; never intercept or cache POST/PUT/DELETE
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  // 1. Pass through external payment gateways and third-party checkout SDKs
  if (url.hostname.includes('razorpay.com')) {
    return;
  }

  // 2. config.js: Strict Network-First (no-store) to ensure live config edits take effect immediately
  if (url.pathname.endsWith('/config.js') || url.pathname.endsWith('config.js')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 3. Navigation requests: Network-First with offline fallback to index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => {
          return caches.match('./index.html') || caches.match('/index.html') || caches.match(request);
        })
    );
    return;
  }

  // 4. FormDock Public Catalog & Store APIs: Network-First with cache fallback
  if (url.pathname.includes('/api/v1/public/products/list/') || url.pathname.includes('/api/v1/public/promotions/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(API_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 5. Static Assets (CSS, JS, Fonts, Images, Icons, SVGs): Stale-While-Revalidate
  const isStaticAsset =
    url.origin === self.location.origin ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/i);

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const copy = networkResponse.clone();
              caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
  }
});
