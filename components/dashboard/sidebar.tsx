import Link from "next/link";

import { dashboardNavigation } from "@/components/dashboard/navigation";
import type { DashboardArea } from "@/types";

export function Sidebar({ area }: { area: DashboardArea }) {
  const items = dashboardNavigation[area];
  const label = area.charAt(0).toUpperCase() + area.slice(1);

  return (
    <aside className="hidden min-h-screen w-72 border-r bg-sidebar px-4 py-6 text-sidebar-foreground lg:block">
      <Link href="/" className="mb-8 block rounded-lg px-3 py-2 text-xl font-bold tracking-tight">
        Papaipay
      </Link>
      <div className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label} Portal
      </div>
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
