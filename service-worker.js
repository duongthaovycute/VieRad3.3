const CACHE = 'vierad-web-2.2.0';
const SHELL = [
  './','index.html','config.js','assets/css/styles.css','assets/js/app.js',
  'assets/images/logo-mark.png','assets/images/vierad_brand.png',
  'assets/images/icon-192.png','assets/images/icon-512.png','manifest.webmanifest'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname.includes('/prod/latest') || url.pathname.includes('/.netlify/functions/vierad-api') || url.pathname.endsWith('.apk')) return;
  event.respondWith(fetch(event.request).then(response => { const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy)); return response; }).catch(()=>caches.match(event.request)));
});
