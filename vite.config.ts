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
          'router': ['react-router-dom'],
          // Separate heavy components
          'enhanced-pages': [
            'src/pages/ResidentialEnhanced',
            'src/pages/CommercialEnhanced',
            'src/pages/TechnologyEnhanced'
          ]
        }
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  // Aggressive optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
}));
