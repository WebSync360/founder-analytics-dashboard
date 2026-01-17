"use client";

import React from 'react';
import { Sidebar } from "@/components/sidebar";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 font-sans">
      
      {/* 1. DESKTOP SIDEBAR 
          We wrap the sidebar in a fixed-width container that is 
          hidden on mobile and shown on large screens (lg:flex)
      */}
      <aside className="hidden lg:flex h-full w-64 flex-col">
        <Sidebar />
      </aside>

      {/* 2. MAIN VIEWPORT */}
      <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        
        {/* TOP BAR / NAVIGATION */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-4 md:px-8 dark:border-zinc-800 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            
            {/* MOBILE MENU (Only visible below 'lg' breakpoint) */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-500 hover:text-zinc-900">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                {/* We set the width of the drawer to match our sidebar width */}
                <SheetContent side="left" className="p-0 w-64 border-none">
                  <Sidebar />
                </SheetContent>
              </Sheet>
            </div>

            {/* Breadcrumbs: Hidden on very small screens to save space */}
            <nav className="flex items-center gap-2 text-sm font-medium text-zinc-400">
              <span className="hidden sm:inline hover:text-zinc-600 transition-colors cursor-default">Dashboard</span>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">/</span>
              <span className="text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.15em] text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                Overview
              </span>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-inner" />
          </div>
        </header>

        {/* CONTENT CANVAS */}
        {/* Adjusted padding for mobile (p-4) vs desktop (p-8) */}
        <div className="p-4 md:p-8 max-w-350 mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}