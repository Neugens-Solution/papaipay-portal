import type { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import type { DashboardArea } from "@/types";

export function DashboardLayout({ area, children }: { area: DashboardArea; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        <Sidebar area={area} />
        <div className="min-w-0 flex-1">
          <Topbar area={area} />
          <main className="mx-auto w-full max-w-7xl p-4 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
