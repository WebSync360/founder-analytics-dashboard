import { Card, CardContent } from "@/components/ui/card";
import { MOCK_DATA } from "@/data/mock-analytics";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function KPICards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {MOCK_DATA.summary.map((metric) => (
        <Card key={metric.id} className="overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {metric.label}
              </p>
              <div className={cn(
                "rounded-full p-1",
                metric.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}>
                {metric.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold tracking-tight">{metric.value}</h3>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "text-xs font-semibold",
                  metric.change > 0 ? "text-emerald-600" : "text-rose-600"
                )}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
                <span className="text-[10px] text-zinc-400 uppercase font-medium">vs last period</span>
              </div>
            </div>
            {metric.secondaryValue && (
              <div className="mt-4 border-t border-zinc-100 pt-3 dark:border-zinc-900">
                <p className="text-[11px] text-zinc-500">{metric.secondaryValue}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}