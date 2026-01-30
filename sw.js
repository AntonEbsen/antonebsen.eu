const CACHE_NAME = 'amej-v5';
const ASSETS = [
    './',
    './index.html',
    './policy-briefs.html',
    './data-projects.html',
    './privacy.html',
    './404.html',
    './style.css',
    './favicon.png',
    './headshot.png',
    './inter-regular.woff2',
    './lora-regular.woff2',
    './translations.json',
    './manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
