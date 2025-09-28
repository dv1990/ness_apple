/**
 * Optimized Icon Components - Minimal Bundle Impact
 * Custom SVG icons to replace heavy Lucide imports
 */

interface IconProps {
  className?: string;
}

// Essential icons as lightweight SVG components
export const PlayIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
  </svg>
);

export const CheckIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const ZapIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
  </svg>
);

export const SparklesIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const ShieldIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const BatteryIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M23 13v-2" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="8" width="14" height="8" fill="currentColor"/>
  </svg>
);

export const HomeIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const StarIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
  </svg>
);

export const QuoteIcon = ({ className = "" }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
  </svg>
);