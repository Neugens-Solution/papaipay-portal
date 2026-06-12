import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DemoLoginPage({
  role,
  dashboardHref,
}: {
  role: "Member" | "Advisor" | "Admin";
  dashboardHref: string;
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-12">
      <section className="w-full space-y-6">
        <div>
          <p className="text-sm font-medium text-primary">Demo portal entry</p>
          <h1 className="mt-2 text-3xl font-bold">{role} Login</h1>
          <p className="mt-3 text-muted-foreground">
            Authentication is intentionally not implemented yet. Use the demo button below to preview the {role.toLowerCase()} dashboard.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{role} demo access</CardTitle>
            <CardDescription>No credentials are required for this placeholder flow.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Link href={dashboardHref} className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Enter {role} Demo
            </Link>
            <Link href="/auth/login" className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">
              Back to Portal Login
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
