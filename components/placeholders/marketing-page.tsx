import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketingPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-bold">Papaipay</Link>
        <nav className="hidden gap-5 text-sm text-muted-foreground md:flex">
          <Link href="/about">About</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/advisory-process">Advisory</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Button variant="outline" size="sm">Portal preview</Button>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/auth/register" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Register interest</Link>
            <Link href="/contact" className="rounded-md border px-5 py-2.5 text-sm font-medium">Contact us</Link>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Foundation ready</CardTitle>
            <CardDescription>Placeholder content for future Papaipay modules.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-muted-foreground">
            <div className="rounded-lg bg-muted p-4">Financial assessment workflow</div>
            <div className="rounded-lg bg-muted p-4">Document and consent tracking</div>
            <div className="rounded-lg bg-muted p-4">Advisor and admin operations</div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
