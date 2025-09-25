/**
 * Code Quality Standards for NESS Energy
 * Strict measures to maintain high performance and reliability
 */

// Logging utilities for production
export const logger = {
  info: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[INFO] ${message}`, data);
    }
  },
  warn: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[WARN] ${message}`, data);
    }
  },
  error: (message: string, error?: any) => {
    // Always log errors, even in production
    console.error(`[ERROR] ${message}`, error);
  }
};

// Performance monitoring utilities
export const performance = {
  mark: (name: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(name);
    }
  },
  measure: (name: string, startMark: string, endMark: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.measure(name, startMark, endMark);
    }
  }
};

// Image optimization utilities
export const imageUtils = {
  generateSrcSet: (baseSrc: string, sizes: number[] = [400, 800, 1200, 1600]) => {
    return sizes.map(size => `${baseSrc}?w=${size} ${size}w`).join(', ');
  },
  
  getOptimalSize: (containerWidth: number) => {
    const sizes = [400, 800, 1200, 1600];
    return sizes.find(size => size >= containerWidth * 1.2) || sizes[sizes.length - 1];
  }
};

// React key generation for lists
export const generateUniqueKey = (item: any, index: number, prefix = 'item') => {
  // Prefer unique identifiers over array indices
  if (item.id) return `${prefix}-${item.id}`;
  if (item.name) return `${prefix}-${item.name.replace(/\s+/g, '-').toLowerCase()}`;
  if (item.title) return `${prefix}-${item.title.replace(/\s+/g, '-').toLowerCase()}`;
  
  // Fallback to index only when no unique identifier exists
  return `${prefix}-${index}`;
};

// Form validation utilities
export const validation = {
  email: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  phone: (phone: string) => /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, '')),
  required: (value: string) => value.trim().length > 0
};

// Accessibility utilities
export const a11y = {
  generateAltText: (context: string, description?: string) => {
    if (description) return `${context}: ${description}`;
    return context;
  },
  
  generateAriaLabel: (action: string, context: string) => {
    return `${action} ${context}`;
  }
};

export default {
  logger,
  performance,
  imageUtils,
  generateUniqueKey,
  validation,
  a11y
};