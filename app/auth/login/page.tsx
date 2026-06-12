import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const demoPortals = [
  { label: "Member Login", href: "/auth/member-login" },
  { label: "Advisor Login", href: "/auth/advisor-login" },
  { label: "Admin Login", href: "/auth/admin-login" },
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-12">
      <section className="w-full space-y-6">
        <div>
          <p className="text-sm font-medium text-primary">Portal login placeholder</p>
          <h1 className="mt-2 text-3xl font-bold">Portal Login</h1>
          <p className="mt-3 text-muted-foreground">
            Authentication is intentionally not implemented yet. Choose a demo portal entry to preview the available dashboards.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Select a demo login</CardTitle>
            <CardDescription>No credentials are required for these placeholder routes.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {demoPortals.map((portal) => (
              <Link key={portal.href} href={portal.href} className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">
                {portal.label}
              </Link>
            ))}
            <Link href="/auth/register" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Register as Member
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
