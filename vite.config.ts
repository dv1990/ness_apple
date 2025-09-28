import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      port: 8080,
      clientPort: 8080
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Apple-level aggressive performance optimizations
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Apple-level micro-chunking strategy
          if (id.includes('node_modules')) {
            // Core React ecosystem - Critical path
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            // Router - Loaded after core
            if (id.includes('react-router')) {
              return 'router';
            }
            // UI framework - Progressive loading
            if (id.includes('@radix-ui')) {
              return 'ui-radix';
            }
            // Query/state management
            if (id.includes('@tanstack') || id.includes('zustand')) {
              return 'state-management';
            }
            // Icons and visual components
            if (id.includes('lucide') || id.includes('recharts')) {
              return 'visual-components';
            }
            // Everything else in vendors
            return 'vendor';
          }
          
          // Application code chunking
          if (id.includes('/pages/')) {
            // Extract page name for individual chunks
            const pageName = id.split('/pages/')[1]?.split('.')[0];
            return `page-${pageName}`;
          }
          
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
          
          if (id.includes('/components/')) {
            return 'shared-components';
          }
          
          if (id.includes('/lib/')) {
            return 'utilities';
          }
        }
      }
    },
    // Ultra-aggressive optimization
    assetsInlineLimit: 1024, // Only inline very small assets
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500, // Apple-level strict limits
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true // Split CSS per chunk
  },
  // Aggressive optimization with image handling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@radix-ui/react-*'] // Let Radix components lazy load
  },
  // Enable modern features
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : []
  }
}));
