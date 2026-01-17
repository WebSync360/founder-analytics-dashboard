import React from 'react';
import { Metadata } from 'next';
import { KPICards } from "@/components/dashboard/kpi-cards";
import { MainChart } from "@/components/dashboard/main-chart";
import { Breakdown } from "@/components/dashboard/breakdown";
import { ActivityTable } from "@/components/dashboard/activity-table";
import { Button } from "@/components/ui/button";
import { CalendarDays, Download, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: 'Founder Analytics | Overview',
  description: 'Real-time SaaS health metrics and growth velocity.',
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Global Header: Strategic Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Performance Overview
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Monitoring growth velocity and expansion revenue for Q1 2026.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-semibold uppercase tracking-widest border-zinc-200 dark:border-zinc-800">
            <CalendarDays className="h-3.5 w-3.5 opacity-60" />
            Rolling 30 Days
          </Button>
          <Button size="sm" className="h-9 gap-2 text-xs font-semibold uppercase tracking-widest bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900">
            <Download className="h-3.5 w-3.5" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* 2. Primary Metrics: The Pulse */}
      <section>
        <KPICards />
      </section>

      {/* 3. Data Intelligence Layer: The Narrative & Distribution */}
      <div className="grid gap-6 md:grid-cols-7">
        
        {/* Main Growth Plot: Historical Context */}
        <div className="md:col-span-4">
          <MainChart />
        </div>

        {/* Intelligence Column: Insight + Segmentation */}
        <div className="md:col-span-3 flex flex-col gap-6">
          
          {/* Executive Insight Card */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-xl">
            <div className="flex items-center gap-2 pb-4">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Growth Signal
              </span>
            </div>
            <h4 className="text-lg font-medium leading-tight">
              Revenue velocity is outpacing user growth by 12.4%.
            </h4>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-light">
              This divergence indicates successful upmarket migration. ARPU has scaled significantly due to the new Enterprise adoption.
            </p>
            <Button variant="link" className="mt-4 h-auto p-0 text-emerald-400 text-xs font-semibold group hover:no-underline">
              Analyze segmentation
              <Share2 className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 opacity-70" />
            </Button>
          </div>

          {/* Segment Breakdown: Logical Drill-down */}
          <Breakdown />
          
        </div>
      </div>

      {/* 4. Operational Ledger: Live Event Stream */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-2 dark:border-zinc-900">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Recent Account Dynamics
          </h2>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
            </span>
            <span className="text-[10px] font-medium text-zinc-400 italic lowercase tracking-wide">
              Live Stream
            </span>
          </div>
        </div>
        <ActivityTable />
      </section>
      
    </div>
  );
}