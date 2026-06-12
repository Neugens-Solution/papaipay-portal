import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const publicNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/advisory-process", label: "Advisory Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/auth/register", label: "Register" },
  { href: "/auth/login", label: "Portal Login" },
];

export function PublicHeader() {
  return (
    <header className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="text-xl font-bold">Papaipay</Link>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {publicNavLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function MarketingPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PublicHeader />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/auth/register" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Register</Link>
            <Link href="/auth/login" className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">Portal Login</Link>
            <Link href="/contact" className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">Contact</Link>
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
