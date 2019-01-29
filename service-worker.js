importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('aida').then(function(cache) {
            return cache.addAll([
            '/?online',
            '/index.php?online',
            '/favicon.png',
            '/manifest.json',
            '/service-worker.js',
            '/sw.js',
            '/css/style.css',
            '/js/data.js',
            '/js/functions.js',
            '/js/info.js',
            '/js/jquery.min.js',
            '/js/responsivevoice.js',
            '/js/script.js',
            '/res/dots.gif',
            '/res/g.png',
            '/res/mic_none.png',
            '/res/mic.png',
            '/res/send.png',
            '/res/szablon1.png',
            '/res/szablon2.png',
            '/res/szablon3.png',
            '/res/top.png',
            '/res/trivago.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});