/**
 * Performance optimization utilities for Auro Tech Solutions
 */

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement("link");
  fontLink.rel = "preload";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@400;500;600&display=swap";
  fontLink.as = "style";
  document.head.appendChild(fontLink);

  // Preload critical images
  const criticalImages = ["/assets/logo.jpg", "/assets/banner1.jpg"];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// Lazy load images with intersection observer
export const createImageObserver = () => {
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: "50px 0px",
      threshold: 0.01,
    }
  );

  return imageObserver;
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload route components
export const preloadRoute = (route) => {
  // This can be used to preload route components on hover or other interactions
  const routes = {
    "/about": () => import("../pages/About/About"),
    "/services": () => import("../pages/Services/Services"),
    "/portfolio": () => import("../pages/Portfolio/Portfolio"),
    "/contact": () => import("../pages/Contact/Contact"),
  };

  if (routes[route]) {
    routes[route]();
  }
};

// Memory cleanup utility
export const cleanup = () => {
  // Clear any cached data if needed
  if ("caches" in window) {
    // Optional: clear old cache versions
  }
};

// Performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window !== "undefined" && "PerformanceObserver" in window) {
    try {
      // Monitor navigation timing
      const navigationObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "navigation") {
            console.log("Navigation timing:", {
              domContentLoaded:
                entry.domContentLoadedEventEnd -
                entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart,
              totalTime: entry.loadEventEnd - entry.fetchStart,
            });
          }
        });
      });
      navigationObserver.observe({ entryTypes: ["navigation"] });

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 1000) {
            // Log slow resources
            console.log("Slow resource:", entry.name, entry.duration + "ms");
          }
        });
      });
      resourceObserver.observe({ entryTypes: ["resource"] });
    } catch (e) {
      console.warn("Performance monitoring not fully supported");
    }
  }
};

// Web Vitals tracking
export const trackWebVitals = () => {
  // This can be extended to send metrics to analytics
  if (typeof window !== "undefined" && "web-vitals" in window) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};
