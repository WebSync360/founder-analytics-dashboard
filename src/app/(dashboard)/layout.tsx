import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      {/* Fixed Navigation */}
      <Sidebar />

      {/* Main Content Plane */}
      <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Subtle Top-Bar for context */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-8 dark:border-zinc-800 bg-white/50 backdrop-blur-md dark:bg-zinc-950/50 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
            <span>Dashboard</span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[10px] font-bold">Overview</span>
          </div>
          
          <div className="flex items-center gap-4">
             {/* User Profile Mockup */}
             <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700" />
          </div>
        </header>

        {/* The Canvas */}
        <div className="p-8 `max-w-350` mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}