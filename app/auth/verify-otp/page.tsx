import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-12">
      <section className="w-full space-y-6">
        <div>
          <p className="text-sm font-medium text-primary">Auth placeholder</p>
          <h1 className="mt-2 text-3xl font-bold">Verify OTP</h1>
          <p className="mt-3 text-muted-foreground">Placeholder OTP verification route. eKYC and authentication integrations are intentionally not implemented yet.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Route reserved</CardTitle>
            <CardDescription>No credentials, OTP delivery, or authentication service is connected.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/auth/login" className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">
              Back to Portal Login
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
