import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { RouteLazyLoader } from "@/components/ui/route-lazy-loader";
import React, { Suspense, lazy } from 'react';

// Apple-level code splitting - Critical path only
import IndexEnhanced from "./pages/IndexEnhanced";

// Aggressive lazy loading for optimal performance
const ResidentialEnhanced = lazy(() => import("./pages/ResidentialEnhanced"));
const InstallersEnhanced = lazy(() => import("./pages/InstallersEnhanced"));
const CommercialEnhanced = lazy(() => import("./pages/CommercialEnhanced"));
const TechnologyEnhanced = lazy(() => import("./pages/TechnologyEnhanced"));
const ContactEnhanced = lazy(() => import("./pages/ContactEnhanced"));
const TrueWarranty = lazy(() => import("./pages/TrueWarranty"));

// Legacy components - lazy loaded
const Residential = lazy(() => import("./pages/Residential"));
const Commercial = lazy(() => import("./pages/Commercial"));
const Installers = lazy(() => import("./pages/Installers"));
const Technology = lazy(() => import("./pages/Technology"));
const Hiring = lazy(() => import("./pages/Hiring"));
const FindInstaller = lazy(() => import("./pages/FindInstaller"));
const About = lazy(() => import("./pages/company/About"));
const News = lazy(() => import("./pages/company/News"));
const NewsArticle = lazy(() => import("./pages/company/NewsArticle"));
const KnowledgeHub = lazy(() => import("./pages/KnowledgeHub"));
const KnowledgeArticle = lazy(() => import("./pages/KnowledgeArticle"));
const Contact = lazy(() => import("./pages/Contact"));
const ContactHomeowner = lazy(() => import("./pages/contact/ContactHomeowner"));
const ContactDistributor = lazy(() => import("./pages/contact/ContactDistributor"));
const ContactInstaller = lazy(() => import("./pages/contact/ContactInstaller"));
const Troubleshooting = lazy(() => import("./pages/Troubleshooting"));
const TroubleshootingGuide = lazy(() => import("./pages/TroubleshootingGuide"));
const Downloads = lazy(() => import("./pages/Downloads"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Critical images preloaded per page to avoid conflicts

// Loading fallback component with skeleton
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="space-y-4 text-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Simplified route config - images loaded on demand
const routeConfig = [];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollProgressBar />
        <BrowserRouter>
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
          <Route path="/warranty" element={<TrueWarranty />} />
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
};

export default App;
