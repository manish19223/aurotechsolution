import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate chunk for React and related libraries
          "react-vendor": ["react", "react-dom", "react-router-dom"],

          // Separate chunk for UI libraries
          "ui-vendor": ["lucide-react", "react-icons", "swiper"],

          // Separate chunk for animations and SEO
          "utils-vendor": ["aos", "react-helmet-async"],
        },
      },
    },
    // Enable source maps for better debugging
    sourcemap: false,

    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable image optimization
    assetsInlineLimit: 4096, // Inline small assets
  },

  // Enable gzip compression
  server: {
    compress: true,
  },
  // Image optimization
  optimizeDeps: {
    include: ["aos"],
  },
});
