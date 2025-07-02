const cacheName = "terminal-lockdown-v1.0.0";
const assetsToCache = [
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
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
