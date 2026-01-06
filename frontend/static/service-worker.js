const CACHE_NAME = "loterias-pwa-v3"; // novo cache para forçar atualização

const FILES_TO_CACHE = [
  "/",
  "/lotofacil",
  "/megasena",
  "/quina",
  "/lotomania",
  "/dupla_sena",
  "/timemania",
  "/federal",
  "/static/css/style.css",
  "/static/js/app.js",
  "/static/js/main.js",
  "/static/manifest.json",
  "/static/icons/icon-192.png",
  "/static/icons/icon-152.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
