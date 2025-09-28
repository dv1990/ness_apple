/**
 * Ultra-Optimized WebP Image Component
 * Apple-level image loading performance with intelligent fallbacks
 */

import { useState, useEffect, useRef } from 'react';
import { webPPerformanceTracker } from '@/lib/performance-enhancements';

interface OptimizedWebPImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

export const OptimizedWebPImage: React.FC<OptimizedWebPImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);
  const loadStartTime = useRef(performance.now());

  // Generate WebP and fallback URLs
  useEffect(() => {
    const supportsWebP = document.createElement('canvas')
      .toDataURL('image/webp', 0.1)
      .indexOf('webp') > -1;

    // Try WebP first, fallback to original format
    const webpSrc = supportsWebP ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : src;
    setImageSrc(webpSrc);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    webPPerformanceTracker.trackImageLoad(imageSrc, loadStartTime.current);
  };

  const handleError = () => {
    if (imageSrc.includes('.webp')) {
      // Fallback to original format if WebP fails
      setImageSrc(src);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!priority && imgRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            loadStartTime.current = performance.now();
            observer.unobserve(imgRef.current!);
          }
        },
        { rootMargin: '50px' }
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [priority]);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
      
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover`}
      />
    </div>
  );
};