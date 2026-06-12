import Link from "next/link";

import { PublicHeader } from "@/components/placeholders/marketing-page";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  "Register as Member",
  "Complete Financial Assessment",
  "Advisor Reviews Your Case",
  "Track Asset & Progress",
];

const portalPreviews = [
  {
    title: "Member Portal",
    description: "Preview member assessment, documents, assets, and progress tracking.",
    loginHref: "/auth/member-login",
  },
  {
    title: "Advisor Portal",
    description: "Preview advisor case review, notes, recommendations, and follow-up workflows.",
    loginHref: "/auth/advisor-login",
  },
  {
    title: "Admin Portal",
    description: "Preview administrative oversight for members, advisors, cases, and reporting.",
    loginHref: "/auth/admin-login",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PublicHeader />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Public Website</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Financial Assessment & Asset Management Platform</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Papaipay foundation for public education, member registration, and demo portal previews for members, advisors, and administrators.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/auth/member-login" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Member Login</Link>
            <Link href="/auth/advisor-login" className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">Advisor Login</Link>
            <Link href="/auth/admin-login" className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">Admin Login</Link>
            <Link href="/auth/register" className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium">Register as Member</Link>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Demo flow ready</CardTitle>
            <CardDescription>Explore the portal areas without real authentication, database logic, payment, or eKYC integrations.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-muted-foreground">
            <div className="rounded-lg bg-muted p-4">Member financial assessment workflow</div>
            <div className="rounded-lg bg-muted p-4">Advisor case review experience</div>
            <div className="rounded-lg bg-muted p-4">Admin operations preview</div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How Papaipay Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">A simple guided journey</h2>
          <p className="mt-3 text-muted-foreground">This demo highlights the intended member-to-advisor workflow without activating production services.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step}>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{index + 1}</div>
                <CardTitle className="text-lg">{step}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Portal Preview</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Choose a demo portal</h2>
          <p className="mt-3 text-muted-foreground">Each login page explains that authentication is not implemented and provides a direct demo entry.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {portalPreviews.map((portal) => (
            <Card key={portal.title}>
              <CardHeader>
                <CardTitle>{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={portal.loginHref} className="inline-flex rounded-md border bg-background px-4 py-2 text-sm font-medium">
                  Open demo login
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
