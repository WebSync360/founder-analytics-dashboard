export type TrendDirection = 'up' | 'down' | 'neutral';
export type MetricStatus = 'success' | 'warning' | 'critical' | 'normal';

export interface KPIMetric {
  id: string;
  label: string;
  value: string;
  secondaryValue?: string; // e.g., "Goal: $15k"
  change: number;          // e.g., 12.5 (representing %)
  trend: TrendDirection;
  status: MetricStatus;
}

export interface TimeSeriesData {
  timestamp: string;
  revenue: number;
  users: number;
  churn: number;
}

export interface ActivityLog {
  id: string;
  event: string;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  amount?: string;
  timestamp: string;
  category: 'growth' | 'retention' | 'system';
}

export interface AnalyticsEngine {
  summary: KPIMetric[];
  chartData: TimeSeriesData[];
  recentActivity: ActivityLog[];
}