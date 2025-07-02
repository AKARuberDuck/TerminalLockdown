// sw.js – Caches your system for offline deployment

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("lockdown-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png",
        "./renderer/style.css",
        "./renderer/app.js",
        "./renderer/utils.js",
        "./renderer/riddles.js",
        "./renderer/profiles.js",
        "./renderer/badges.js",
        "./renderer/quantum.js",
        "./renderer/modifiers.js",
        "./renderer/fontRenderer.js",
        "./renderer/banner.js",
        "./renderer/generator.js",
        "./renderer/riddleAI.js",
        "./renderer/sandbox.js",
        "./renderer/codex.js",
        "./renderer/journal.js",
        "./renderer/metrics.js",
        "./renderer/glitch.js",
        "./renderer/mutator.js",
        "./renderer/uiEnhancements.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
