self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('citybucks-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/default.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
