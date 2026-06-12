import type { ReactNode } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <DashboardLayout area="advisor">{children}</DashboardLayout>;
}
