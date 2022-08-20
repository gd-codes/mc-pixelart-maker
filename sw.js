/* 
Service Worker to enable the webpage to be used even offline, once installed
https://gd-codes.github.io/mc-pixelart-maker/
Cached site should require only ~ 3 MB space
*/

const CURRENT_CACHE_VERSION = 'mapart-cache-4.3.1';

const CACHE_URLS_LOCAL = [
    /* Important : `/` doesn't automatically fetch `/index.html` locally, explicitly cache it 
                   This file *must* be placed at the top-level of the repository, no subfolder
                   Paths are also relative to its location. */
    './',
    'index.html',
    'manual.html',
    'about.html',
    'site.webmanifest',
    'LICENSE.txt',
    'css/style.css',
    'css/style-dark.css',
    'resources/data.js',
    'resources/Minecraft-Regular.otf',
    'resources/sample_pack.mcpack',
    'images/headercover.png',
    'images/favicon.ico',
    'images/logo_128px.png',
    'images/d1.png',
    'images/d2.png',
    'images/d3.png',
    'images/d4.png',
    'images/d5.png',
    'images/layout_big.png',
    'images/android-chrome-192x192.png',
    'images/android-chrome-512x512.png',
    'images/apple-touch-icon.png',
    'images/safari-pinned-tab.svg',
    'images/mstile-150x150.png',
    'images/favicon-32x32.png',
    'images/favicon-16x16.png',
    'images/browserconfig.xml',
    'scripts/main.js',
    'scripts/imageProcessor.js',
    'scripts/functionWriter.js',
    'scripts/dynamicHtml.js',
    'scripts/theme_pwa.js'
];
const CACHE_URLS_EXTERNAL = [
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CURRENT_CACHE_VERSION)
        .then(function(cache) {
            cache.addAll(CACHE_URLS_EXTERNAL);
            return cache.addAll(CACHE_URLS_LOCAL);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(
                    cacheName => (cacheName !== CURRENT_CACHE_VERSION)
                ).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
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
