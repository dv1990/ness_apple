import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface WebPImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  className?: string;
  alt: string;
  priority?: boolean;
  quality?: number;
}

export const WebPImage: React.FC<WebPImageProps> = ({
  src,
  fallbackSrc,
  className,
  alt,
  priority = false,
  quality = 80,
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Convert image path to WebP format
  const getWebPSrc = useCallback((originalSrc: string): string => {
    if (originalSrc.startsWith('http')) return originalSrc;
    
    // Replace /assets/ with /assets-webp/ and extension with .webp
    const webpSrc = originalSrc
      .replace('/assets/', '/assets-webp/')
      .replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc;
  }, []);

  // Get fallback source (original format)
  const getFallbackSrc = useCallback((originalSrc: string): string => {
    return fallbackSrc || originalSrc;
  }, [fallbackSrc]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    // Fallback to original format if WebP fails
    if (imgRef.current && !hasError) {
      setHasError(true);
      imgRef.current.src = getFallbackSrc(src);
    }
  }, [src, hasError, getFallbackSrc]);

  const webpSrc = getWebPSrc(src);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {/* Optimized image with WebP support */}
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          ref={imgRef}
          src={hasError ? getFallbackSrc(src) : webpSrc}
          alt={alt}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            "w-full h-full object-cover"
          )}
          {...props}
        />
      </picture>
    </div>
  );
};