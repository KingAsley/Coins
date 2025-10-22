self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
  // Optional: handle offline caching here
});