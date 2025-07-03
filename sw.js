const CACHE_NAME = 'terminal-lockdown-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/renderer/style.css',
  '/renderer/app.js',
  '/renderer/riddles.js',
  '/renderer/utils.js',
  '/renderer/sandbox.js',
  '/renderer/journal.js',
  '/renderer/codex.js',
  '/renderer/metrics.js',
  '/renderer/badges.js',
  '/renderer/uiEnhancements.js'
];

// 🧠 Install: Cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 🔁 Activate: Clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

// 🔄 Fetch: Serve from cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
