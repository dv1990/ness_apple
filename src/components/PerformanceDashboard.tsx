import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { performanceMonitor } from '@/lib/performance-monitor';
import { performanceBudget } from '@/lib/performance-optimizations';
import { 
  Activity,
  Zap,
  Clock,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  Gauge,
  Image
} from "lucide-react";

interface PerformanceMetric {
  name: string;
  value: number;
  threshold: number;
  unit: string;
  status: 'good' | 'needs-improvement' | 'poor';
  icon: React.ComponentType<any>;
}

export const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') return;

    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint');

      const currentMetrics: PerformanceMetric[] = [
        {
          name: 'Page Load Time',
          value: navigation?.loadEventEnd - navigation?.fetchStart || 0,
          threshold: 3000,
          unit: 'ms',
          status: (navigation?.loadEventEnd - navigation?.fetchStart || 0) < 3000 ? 'good' : 'needs-improvement',
          icon: Clock
        },
        {
          name: 'First Contentful Paint',
          value: fcp?.startTime || 0,
          threshold: 1800,
          unit: 'ms',
          status: (fcp?.startTime || 0) < 1800 ? 'good' : 'needs-improvement',
          icon: Zap
        },
        {
          name: 'DOM Content Loaded',
          value: navigation?.domContentLoadedEventEnd - navigation?.fetchStart || 0,
          threshold: 2000,
          unit: 'ms',
          status: (navigation?.domContentLoadedEventEnd - navigation?.fetchStart || 0) < 2000 ? 'good' : 'needs-improvement',
          icon: Activity
        },
        {
          name: 'Resource Load Time',
          value: navigation?.loadEventStart - navigation?.domContentLoadedEventEnd || 0,
          threshold: 1000,
          unit: 'ms',
          status: (navigation?.loadEventStart - navigation?.domContentLoadedEventEnd || 0) < 1000 ? 'good' : 'needs-improvement',
          icon: Gauge
        }
      ];

      setMetrics(currentMetrics);
    };

    // Collect metrics after page load
    const timer = setTimeout(collectMetrics, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          size="sm"
          variant="outline"
          className="bg-background/95 backdrop-blur-sm"
        >
          <Gauge className="w-4 h-4 mr-2" />
          Performance
        </Button>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="bg-background/95 backdrop-blur-lg border shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Gauge className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-sm">Performance Monitor</h3>
            </div>
            <Button
              onClick={() => setIsVisible(false)}
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>

          <div className="space-y-3">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{metric.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono">
                    {metric.value.toFixed(0)}{metric.unit}
                  </span>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getStatusColor(metric.status)}`}
                  >
                    {getStatusIcon(metric.status)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Optimization Status</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};