import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import "aos/dist/aos.css";

import "./index.css";

// Performance optimization: Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical fonts if any
  // const fontLink = document.createElement('link');
  // fontLink.rel = 'preload';
  // fontLink.href = '/fonts/your-font.woff2';
  // fontLink.as = 'font';
  // fontLink.type = 'font/woff2';
  // fontLink.crossOrigin = 'anonymous';
  // document.head.appendChild(fontLink);

  // Preload critical images
  const criticalImages = ["/assets/logo.jpg", "/assets/banner1.jpg"];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// Initialize performance optimizations
if (typeof window !== "undefined") {
  // Preload critical resources
  preloadCriticalResources();
  // Register service worker for caching
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }

  // Add performance observer for monitoring
  if ("PerformanceObserver" in window) {
    try {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log("FID:", entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // Monitor Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log("CLS:", clsValue);
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (e) {
      console.warn("Performance monitoring not fully supported");
    }
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);
