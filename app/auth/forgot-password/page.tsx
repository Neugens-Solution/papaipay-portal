import { FormPlaceholder } from "@/components/placeholders/form-placeholder";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-12">
      <section className="w-full space-y-6">
        <div>
          <p className="text-sm font-medium text-primary">Authentication placeholder</p>
          <h1 className="mt-2 text-3xl font-bold">Forgot password</h1>
          <p className="mt-3 text-muted-foreground">Placeholder password recovery screen for future Supabase Auth integration.</p>
        </div>
        <FormPlaceholder title="Forgot password form" />
      </section>
    </main>
  );
}
