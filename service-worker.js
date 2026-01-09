const CACHE_NAME = 'loterias-v8'; // aumente sempre que adicionar páginas/arquivos
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/megasena.html',  
  '/lotofacil.html',
  '/quina.html',
  '/lotomania.html',
  '/dupla_sena.html',
  '/federal.html',
  '/timemania.html',
  '/css/style.css',
  '/js/main.js',
  '/manifest.json'
];

// Instalação: cache dos arquivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting(); // ativa imediatamente
});

// Ativação: remove caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // assume controle imediatamente
});

// Fetch: tenta servir do cache, se não existe busca da rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
