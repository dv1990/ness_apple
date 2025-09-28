import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Apple-level performance optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          // Core libraries
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-slot', '@radix-ui/react-tooltip'],
          'router': ['react-router-dom']
        }
      }
    },
    // Optimize assets aggressively
    assetsInlineLimit: 2048, // Inline smaller assets for faster loading
    reportCompressedSize: false, // Faster builds
    chunkSizeWarningLimit: 800, // Strict chunk size limits
    // Enable modern browser optimizations
    target: 'esnext',
    minify: 'esbuild'
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
