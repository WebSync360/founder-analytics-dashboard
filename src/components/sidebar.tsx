"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Zap,
  ChevronRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Overview', href: '/analytics', icon: LayoutDashboard },
  { name: 'Growth', href: '/analytics/growth', icon: BarChart3 },
  { name: 'Customers', href: '/analytics/customers', icon: Users },
  { name: 'Automations', href: '/analytics/automations', icon: Zap },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-zinc-200 bg-white px-4 py-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center gap-2 px-2 pb-8">
        <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center dark:bg-zinc-100">
          <div className="h-4 w-4 bg-white rounded-sm dark:bg-zinc-900" />
        </div>
        <span className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100">FounderOS</span>
      </div>

      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-all",
                isActive 
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100" 
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("h-4 w-4", isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400")} />
                {item.name}
              </div>
              {isActive && <ChevronRight className="h-3 w-3 opacity-50" />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
          <Settings className="h-4 w-4" />
          Settings
        </button>
      </div>
    </div>
  );
}