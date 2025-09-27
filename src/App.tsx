import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { performanceMonitor } from "@/lib/performance-monitor";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { RoutePreloader } from "@/components/ui/route-preloader";
import { preloadImages } from "@/lib/performance-optimizations";
import { PerformanceDashboard } from "@/components/PerformanceDashboard";
import React, { Suspense, lazy } from 'react';

// Lazy load non-critical pages for better initial load performance
const IndexEnhanced = lazy(() => import("./pages/IndexEnhanced"));
const InstallersEnhanced = lazy(() => import("./pages/InstallersEnhanced"));
const ResidentialEnhanced = lazy(() => import("./pages/ResidentialEnhanced"));
const CommercialEnhanced = lazy(() => import("./pages/CommercialEnhanced"));
const TechnologyEnhanced = lazy(() => import("./pages/TechnologyEnhanced"));
const ContactEnhanced = lazy(() => import("./pages/ContactEnhanced"));

// Keep critical pages immediately available
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Installers from "./pages/Installers";
import Technology from "./pages/Technology";
import Hiring from "./pages/Hiring";
import FindInstaller from "./pages/FindInstaller";
import About from "./pages/company/About";
import News from "./pages/company/News";
import NewsArticle from "./pages/company/NewsArticle";
import KnowledgeHub from "./pages/KnowledgeHub";
import KnowledgeArticle from "./pages/KnowledgeArticle";
import Contact from "./pages/Contact";
import ContactHomeowner from "./pages/contact/ContactHomeowner";
import ContactDistributor from "./pages/contact/ContactDistributor";
import ContactInstaller from "./pages/contact/ContactInstaller";
import Troubleshooting from "./pages/Troubleshooting";
import TroubleshootingGuide from "./pages/TroubleshootingGuide";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Initialize performance monitoring and preload critical resources
performanceMonitor.markFeature('app-load');

// Preload critical images for faster perceived performance
if (typeof window !== 'undefined') {
  preloadImages([
    '/src/assets/hero-homeowners.jpg',
    '/src/assets/hero-industrial-installation.jpg',
    '/src/assets/ness-pro-product.png'
  ]);
}

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="space-y-4 text-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Route preloader configuration
const routeConfig = [
  {
    path: '/',
    preloadImages: ['/src/assets/hero-homeowners.jpg'],
    priority: true
  },
  {
    path: '/residential',
    preloadImages: ['/src/assets/ness-pro-product.png', '/src/assets/office-interior.jpg']
  },
  {
    path: '/commercial',
    preloadImages: ['/src/assets/ness-units-hero.png', '/src/assets/manufacturing-facility.jpg']
  }
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollProgressBar />
      <PerformanceDashboard />
      <BrowserRouter>
        <RoutePreloader routes={routeConfig} />
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
          {/* Overview (Landing) */}
          <Route path="/" element={<IndexEnhanced />} />
          
          {/* Enhanced Product Routes */}
          <Route path="/residential-enhanced" element={<ResidentialEnhanced />} />
          <Route path="/commercial-enhanced" element={<CommercialEnhanced />} />
          <Route path="/technology-enhanced" element={<TechnologyEnhanced />} />
          <Route path="/installers-enhanced" element={<InstallersEnhanced />} />
          
          {/* Product Routes */}
          <Route path="/homeowners" element={<ResidentialEnhanced />} />
          <Route path="/ci" element={<CommercialEnhanced />} />
          <Route path="/installers" element={<InstallersEnhanced />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/find-installer" element={<FindInstaller />} />
          
          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/news" element={<News />} />
          <Route path="/company/news/:slug" element={<NewsArticle />} />
          
          {/* Knowledge & Support */}
          <Route path="/knowledge" element={<KnowledgeHub />} />
          <Route path="/knowledge/:slug" element={<KnowledgeArticle />} />
          
          {/* Contact Routes */}
          <Route path="/contact" element={<ContactEnhanced />} />
          <Route path="/contact-enhanced" element={<ContactEnhanced />} />
          
          {/* Support Routes */}
          <Route path="/support/troubleshooting" element={<Troubleshooting />} />
          <Route path="/support/troubleshooting/:product/:issue" element={<TroubleshootingGuide />} />
          
          {/* Downloads */}
          <Route path="/downloads" element={<Downloads />} />
          
          {/* Legacy redirects for existing routes */}
          <Route path="/residential" element={<ResidentialEnhanced />} />
          <Route path="/commercial" element={<CommercialEnhanced />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/contact/homeowner" element={<ContactHomeowner />} />
          <Route path="/contact/distributor" element={<ContactDistributor />} />
          <Route path="/contact/installer" element={<ContactInstaller />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
