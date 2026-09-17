/* Service worker: кэшируем всё приложение при установке, отдаём из кэша, обновляем в фоне. */
const VERSION = 'st-v3';
const ASSETS = [
  './', './index.html', './manifest.webmanifest', './css/style.css',
  './js/conjugation.js', './js/store.js', './js/engine.js', './js/cards.js', './js/app.js',
  './js/data/words/w01.js', './js/data/words/w02.js', './js/data/words/w03.js', './js/data/words/w04.js', './js/data/words/w05.js',
  './js/data/words/w06.js', './js/data/words/w07.js', './js/data/words/w08.js', './js/data/words/w09.js', './js/data/words/w10.js',
  './js/data/curriculum.js', './js/data/extras.js',
  './js/data/m01.js', './js/data/m02.js', './js/data/m03.js', './js/data/m04.js', './js/data/m05.js',
  './js/data/m06.js', './js/data/m07.js', './js/data/m08.js', './js/data/m09.js', './js/data/m10.js',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cached) => {
      const network = fetch(e.request).then((res) => {
        if (res && res.ok && new URL(e.request.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
