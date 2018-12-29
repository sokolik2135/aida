importScripts('cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('aida').then(function(cache) {
            return cache.addAll([
                '/asystent/',
                '/asystent/?online',
                '/asystent/index.php',
                '/asystent/index.php?online',
                '/asystent/download.php',
                '/asystent/thanks.php',
                '/asystent/changelog.php',
                '/asystent/favicon.png',
                '/asystent/sw.js',

                '/asystent/css/download.css',
                '/asystent/css/main.css',
                '/asystent/css/style.css',

                '/asystent/fonts/OpenSans-Light.ttf',

                '/asystent/icons/xxxhdpi.png',

                '/asystent/js/data.js',
                '/asystent/js/jquery.js',
                '/asystent/js/responsivevoice.js',
                '/asystent/js/script.js',

                '/asystent/res/dots.gif',
                '/asystent/res/g.png',
                '/asystent/res/send.png',
                '/asystent/res/szablon1.png',
                '/asystent/res/szablon2.png',
                '/asystent/res/szablon3.png',
                '/asystent/res/top.png'
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