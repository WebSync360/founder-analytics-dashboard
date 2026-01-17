"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const PLAN_DATA = [
  { name: "Enterprise", value: 45, color: "#18181b" }, // Zinc-900
  { name: "Pro", value: 30, color: "#3f3f46" },        // Zinc-700
  { name: "Starter", value: 25, color: "#a1a1aa" },    // Zinc-400
];

export function Breakdown() {
  return (
    <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Plan Distribution</CardTitle>
        <CardDescription>Revenue split by subscription tier.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-55 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={PLAN_DATA} 
              layout="vertical" 
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fontWeight: 500, fill: '#71717a' }}
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar 
                dataKey="value" 
                radius={[0, 4, 4, 0]} 
                barSize={24}
              >
                {PLAN_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend / Insight Footer */}
        <div className="mt-4 space-y-2">
          {PLAN_DATA.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-zinc-500">{item.name}</span>
              </div>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}