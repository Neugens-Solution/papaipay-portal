import Link from "next/link";
import { Menu } from "lucide-react";

import { dashboardNavigation } from "@/components/dashboard/navigation";
import { Button } from "@/components/ui/button";
import type { DashboardArea } from "@/types";

export function Topbar({ area }: { area: DashboardArea }) {
  const items = dashboardNavigation[area];

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 lg:px-8">
        <div>
          <p className="text-sm text-muted-foreground">Papaipay</p>
          <h1 className="text-lg font-semibold capitalize">{area} workspace</h1>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm">Placeholder action</Button>
          <Button size="sm">New item</Button>
        </div>
        <details className="relative md:hidden">
          <summary className="list-none rounded-md border p-2">
            <Menu className="size-5" />
          </summary>
          <nav className="absolute right-0 mt-2 w-56 rounded-lg border bg-card p-2 shadow-lg">
            {items.map((item) => (
              <Link key={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-accent" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
