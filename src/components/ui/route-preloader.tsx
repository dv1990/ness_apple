import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addResourceHint } from '@/lib/performance-optimizations';

interface RoutePreloaderProps {
  routes: Array<{
    path: string;
    preloadImages?: string[];
    priority?: boolean;
  }>;
}

export const RoutePreloader: React.FC<RoutePreloaderProps> = ({ routes }) => {
  const location = useLocation();

  useEffect(() => {
    // Preload critical resources for the current route
    const currentRoute = routes.find(route => 
      location.pathname.startsWith(route.path)
    );

    if (currentRoute?.preloadImages) {
      currentRoute.preloadImages.forEach(src => {
        addResourceHint(src, 'preload', 'image');
      });
    }
  }, [location.pathname, routes]);

  // Preload next likely routes based on current location
  useEffect(() => {
    const preloadNextRoutes = () => {
      if (location.pathname === '/') {
        // From home, users likely go to products
        addResourceHint('/residential-enhanced', 'prefetch');
        addResourceHint('/commercial-enhanced', 'prefetch');
      } else if (location.pathname.includes('/residential')) {
        // From residential, users might check installers
        addResourceHint('/installers-enhanced', 'prefetch');
      } else if (location.pathname.includes('/commercial')) {
        // From commercial, users might want technical details
        addResourceHint('/technology-enhanced', 'prefetch');
      }
    };

    // Delay prefetch to not interfere with current page load
    const timer = setTimeout(preloadNextRoutes, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};