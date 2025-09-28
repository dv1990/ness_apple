/**
 * Critical CSS Injection - Apple-Level Loading Performance
 * Inlines critical CSS for instant first paint
 */

// Critical CSS for above-the-fold content
const CRITICAL_CSS = `
/* Critical path CSS - inlined for instant rendering */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.6);
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.8) 100%);
}

.hero-content {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 10;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  color: hsl(var(--pearl));
  line-height: 0.9;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: hsl(var(--muted-foreground));
  font-weight: 300;
  line-height: 1.6;
  max-width: 48rem;
  margin: 0 auto 3rem;
}

/* Navigation critical styles */
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: between;
}

/* Loading skeleton */
.skeleton {
  background: linear-gradient(90deg, 
    hsl(var(--muted)) 25%, 
    hsl(var(--muted-foreground) / 0.1) 50%, 
    hsl(var(--muted)) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Button critical styles */
.btn-primary {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--primary));
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  background: hsl(var(--primary) / 0.9);
  transform: translateY(-1px);
}

/* Typography critical */
.font-display {
  font-family: system-ui, -apple-system, sans-serif;
}

/* Layout critical */
.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Smooth animations for perceived performance */
* {
  scroll-behavior: smooth;
}

/* Hide content until fonts load */
.font-loading {
  visibility: hidden;
}

.font-loaded {
  visibility: visible;
}
`;

export class CriticalCSSInjector {
  private injected = false;

  public inject() {
    if (this.injected || typeof document === 'undefined') return;

    // Create and inject critical CSS
    const style = document.createElement('style');
    style.textContent = CRITICAL_CSS;
    style.setAttribute('data-critical', 'true');
    
    // Inject at the very beginning of head
    const firstChild = document.head.firstChild;
    if (firstChild) {
      document.head.insertBefore(style, firstChild);
    } else {
      document.head.appendChild(style);
    }

    this.injected = true;
    console.info('💡 Critical CSS injected for instant first paint');
  }

  public preloadFonts() {
    if (typeof document === 'undefined') return;

    // Add font loading class
    document.documentElement.classList.add('font-loading');

    // Preload critical fonts
    const fontPreloads = [
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', crossorigin: 'anonymous' }
    ];

    fontPreloads.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = font.href;
      if (font.crossorigin) link.crossOrigin = font.crossorigin;
      document.head.appendChild(link);

      // Also load the actual stylesheet
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = font.href;
      styleLink.onload = () => {
        document.documentElement.classList.remove('font-loading');
        document.documentElement.classList.add('font-loaded');
      };
      document.head.appendChild(styleLink);
    });
  }

  public optimizeImages() {
    if (typeof document === 'undefined') return;

    // Add loading="lazy" to all images except hero
    const images = document.querySelectorAll('img:not([data-hero])');
    images.forEach((img: Element) => {
      const imgElement = img as HTMLImageElement;
      if (!imgElement.loading) {
        imgElement.loading = 'lazy';
      }
      if (!imgElement.decoding) {
        imgElement.decoding = 'async';
      }
    });

    // Set hero image to eager loading
    const heroImages = document.querySelectorAll('img[data-hero]');
    heroImages.forEach((img: Element) => {
      const imgElement = img as HTMLImageElement;
      imgElement.loading = 'eager';
      imgElement.decoding = 'sync';
      imgElement.fetchPriority = 'high';
    });
  }
}

export const criticalCSSInjector = new CriticalCSSInjector();