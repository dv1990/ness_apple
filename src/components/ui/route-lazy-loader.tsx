import React, { Suspense, lazy, Component, ErrorInfo, ReactNode } from 'react';

interface RouteLazyLoaderProps {
  children: React.ReactNode;
  fallback?: React.ComponentType;
  errorFallback?: React.ComponentType<{error: Error; resetErrorBoundary: () => void}>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent: React.ComponentType<{error: Error; resetErrorBoundary: () => void}>;
}

// Simple Error Boundary implementation
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Route Error Boundary caught an error:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const { FallbackComponent } = this.props;
      return (
        <FallbackComponent 
          error={this.state.error!} 
          resetErrorBoundary={this.resetErrorBoundary} 
        />
      );
    }

    return this.props.children;
  }
}

// Apple-level loading states
const AppleLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="space-y-6 text-center max-w-xs">
      {/* Apple-style loading spinner */}
      <div className="relative">
        <div className="w-8 h-8 border-2 border-primary/20 rounded-full mx-auto"></div>
        <div className="absolute inset-0 w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
      
      {/* Loading dots animation */}
      <div className="flex justify-center space-x-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
      
      <p className="text-sm text-muted-foreground font-medium">Loading experience...</p>
    </div>
  </div>
);

// Apple-style error fallback
const AppleErrorFallback = ({ error, resetErrorBoundary }: {error: Error; resetErrorBoundary: () => void}) => (
  <div className="min-h-screen flex items-center justify-center bg-background p-6">
    <div className="text-center space-y-6 max-w-md">
      <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Something went wrong</h2>
        <p className="text-sm text-muted-foreground mb-4">
          We're sorry, but something unexpected happened. Please try again.
        </p>
        <p className="text-xs text-muted-foreground/70 mb-6 font-mono bg-muted p-2 rounded">
          {error.message}
        </p>
      </div>
      
      <button 
        onClick={resetErrorBoundary}
        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

export const RouteLazyLoader: React.FC<RouteLazyLoaderProps> = ({ 
  children, 
  fallback: CustomFallback, 
  errorFallback: CustomErrorFallback 
}) => {
  const LoadingComponent = CustomFallback || AppleLoadingFallback;
  const ErrorComponent = CustomErrorFallback || AppleErrorFallback;

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Suspense fallback={<LoadingComponent />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default RouteLazyLoader;