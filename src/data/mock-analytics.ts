import { AnalyticsEngine } from "@/types/analytics";

export const MOCK_DATA: AnalyticsEngine = {
  summary: [
    {
      id: "mrr",
      label: "Monthly Recurring Revenue",
      value: "$14,280",
      secondaryValue: "Target: $15,000",
      change: 14.2,
      trend: "up",
      status: "success",
    },
    {
      id: "active-users",
      label: "Active Subscriptions",
      value: "1,104",
      change: -2.1,
      trend: "down",
      status: "warning",
    },
    {
      id: "avg-lvt",
      label: "Avg. Customer LTV",
      value: "$842",
      change: 5.4,
      trend: "up",
      status: "normal",
    },
    {
      id: "churn",
      label: "Net Revenue Churn",
      value: "1.8%",
      change: -0.4,
      trend: "down", // Churn going down is good
      status: "success",
    },
  ],

  chartData: [
    { timestamp: "2024-05-01", revenue: 10200, users: 950, churn: 2.1 },
    { timestamp: "2024-05-08", revenue: 11500, users: 980, churn: 2.0 },
    { timestamp: "2024-05-15", revenue: 10800, users: 1010, churn: 1.9 }, // Mid-month dip
    { timestamp: "2024-05-22", revenue: 13200, users: 1080, churn: 1.8 }, // Spike
    { timestamp: "2024-05-29", revenue: 14280, users: 1104, churn: 1.8 },
  ],

  recentActivity: [
    {
      id: "evt_1",
      event: "Enterprise Plan Upgrade",
      user: { name: "Sarah Chen", email: "sarah@vertex.io" },
      amount: "+$2,400/yr",
      timestamp: "14 mins ago",
      category: "growth",
    },
    {
      id: "evt_2",
      event: "Churn Alert: High Usage Drop",
      user: { name: "Jason Miller", email: "j.miller@gmail.com" },
      timestamp: "2 hours ago",
      category: "retention",
    },
    {
      id: "evt_3",
      event: "New Pro Subscription",
      user: { name: "Elena Rodriguez", email: "elena@design.co" },
      amount: "+$49/mo",
      timestamp: "5 hours ago",
      category: "growth",
    },
  ],
};