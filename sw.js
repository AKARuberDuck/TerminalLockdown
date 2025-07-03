const cacheName = "lockdown-cache-v1.0.0";
const assets = [
  "./",
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "renderer/style.css",
  "renderer/app.js",
  "renderer/utils.js",
  "renderer/riddles.js",
  "renderer/generator.js",
  "renderer/riddleAI.js",
  "renderer/quantum.js",
  "renderer/sandbox.js",
  "renderer/codex.js",
  "renderer/metrics.js",
  "renderer/journal.js",
  "renderer/badges.js",
  "renderer/uiEnhancements.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
