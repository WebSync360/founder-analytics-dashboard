import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MOCK_DATA } from "@/data/mock-analytics";
import { cn } from "@/lib/utils";

export function ActivityTable() {
  return (
    <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-zinc-100 dark:border-zinc-800">
            <TableHead className="w-62.5 text-[11px] uppercase tracking-wider font-bold">User / Account</TableHead>
            <TableHead className="text-[11px] uppercase tracking-wider font-bold">Event</TableHead>
            <TableHead className="text-[11px] uppercase tracking-wider font-bold text-right">Impact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MOCK_DATA.recentActivity.map((log) => (
            <TableRow key={log.id} className="border-zinc-50 dark:border-zinc-900">
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{log.user.name}</span>
                  <span className="text-xs text-zinc-500">{log.user.email}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="capitalize text-[10px] py-0 px-1.5 font-normal">
                    {log.category}
                  </Badge>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{log.event}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <span className={cn(
                  "text-sm font-mono font-medium",
                  log.amount?.includes('+') ? "text-emerald-600" : "text-zinc-900 dark:text-zinc-100"
                )}>
                  {log.amount || "—"}
                </span>
                <p className="text-[10px] text-zinc-400 uppercase">{log.timestamp}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}