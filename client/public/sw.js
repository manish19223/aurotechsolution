// Service Worker for Auro Tech Solutions
// Handles caching of static assets and offline functionality

const CACHE_NAME = "auro-tech-v1.0.0";
const STATIC_CACHE_NAME = "auro-tech-static-v1.0.0";

// Assets to cache immediately
const STATIC_ASSETS = [
  "/",
  "/assets/logo.jpg",
  "/assets/banner1.jpg",
  "/assets/banner2.jpg",
  "/assets/banner3.jpg",
  "/assets/banner4.jpg",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");

  event.waitUntil(
    caches
      .open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== CACHE_NAME) {
              console.log("Service Worker: Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise, fetch from network
      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (!response.ok) {
            return response;
          }

          // Cache successful responses for future use
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // Cache images, CSS, JS, and other static assets
            if (
              event.request.url.includes(".jpg") ||
              event.request.url.includes(".jpeg") ||
              event.request.url.includes(".png") ||
              event.request.url.includes(".webp") ||
              event.request.url.includes(".css") ||
              event.request.url.includes(".js") ||
              event.request.url.includes(".woff2")
            ) {
              cache.put(event.request, responseClone);
            }
          });

          return response;
        })
        .catch(() => {
          // Network failed - return offline fallback for HTML pages
          if (event.request.headers.get("accept").includes("text/html")) {
            return caches.match("/");
          }
        });
    })
  );
});

// Handle background sync for offline form submissions (future enhancement)
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Implement background sync logic here if needed
  console.log("Service Worker: Background sync triggered");
}

// Handle push notifications (future enhancement)
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: "/assets/logo.jpg",
      badge: "/assets/logo.jpg",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(clients.openWindow(event.notification.data.url || "/"));
});
