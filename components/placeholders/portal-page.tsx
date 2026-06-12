import { ChartPlaceholder } from "@/components/placeholders/chart-placeholder";
import { DashboardCard } from "@/components/placeholders/dashboard-card";
import { FormPlaceholder } from "@/components/placeholders/form-placeholder";
import { TablePlaceholder } from "@/components/placeholders/table-placeholder";

export function PortalPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-primary">Application foundation</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <DashboardCard title="Open cases" value="24" description="Placeholder cases" />
        <DashboardCard title="Pending reviews" value="12" description="Placeholder reviews" />
        <DashboardCard title="Completed" value="8" description="Placeholder progress" />
      </section>
      <section className="grid gap-4 xl:grid-cols-2">
        <ChartPlaceholder />
        <FormPlaceholder />
      </section>
      <TablePlaceholder />
    </div>
  );
}
