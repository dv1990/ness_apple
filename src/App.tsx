import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexEnhanced from "./pages/IndexEnhanced";
import InstallersEnhanced from "./pages/InstallersEnhanced";
import ResidentialEnhanced from "./pages/ResidentialEnhanced";
import CommercialEnhanced from "./pages/CommercialEnhanced";
import TechnologyEnhanced from "./pages/TechnologyEnhanced";
import ContactEnhanced from "./pages/ContactEnhanced";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
