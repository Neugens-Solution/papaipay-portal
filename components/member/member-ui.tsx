import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, fundingPercent } from "@/lib/member-mock-data";

export function PageHeader({ title, eyebrow, children }: { title: string; eyebrow?: string; children?: React.ReactNode }) {
  return <div className="mb-8 rounded-3xl border bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 text-white shadow-sm"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">{eyebrow ?? "Member portal prototype"}</p><h1 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">{title}</h1><div className="mt-4 max-w-3xl text-sm leading-6 text-slate-200">{children}</div></div>;
}

export function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return <Card className="border-slate-200/80"><CardHeader><CardDescription>{label}</CardDescription><CardTitle className="text-2xl">{value}</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">{note}</p></CardContent></Card>;
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${Math.min(value, 100)}%` }} /></div>;
}

export function OpportunityCard({ opportunity }: { opportunity: any }) {
  const percent = fundingPercent(opportunity.fundedAmount, opportunity.targetAmount);
  return <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"><div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${opportunity.thumbnailUrl})` }} /><CardHeader><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{opportunity.status}</span><span className="text-xs text-muted-foreground">{opportunity.riskLevelLabel}</span></div><CardTitle>{opportunity.title}</CardTitle><CardDescription>{opportunity.location} • {opportunity.propertyType} • {opportunity.tenure}</CardDescription></CardHeader><CardContent className="space-y-4"><p className="text-sm text-muted-foreground">{opportunity.summary}</p><div className="space-y-2"><div className="flex justify-between text-sm"><span>{percent}% funded</span><span>{formatCurrency(opportunity.fundedAmount)} / {formatCurrency(opportunity.targetAmount)}</span></div><ProgressBar value={percent} /></div><div className="grid grid-cols-2 gap-3 text-sm"><div><p className="text-muted-foreground">Unit price</p><p className="font-semibold">{formatCurrency(opportunity.unitPrice)}</p></div><div><p className="text-muted-foreground">Available units</p><p className="font-semibold">{opportunity.availableUnits}</p></div><div><p className="text-muted-foreground">Bumi status</p><p className="font-semibold">{opportunity.bumiStatus}</p></div><div><p className="text-muted-foreground">Campaign ends</p><p className="font-semibold">{opportunity.campaignEndDate}</p></div></div><Link className="inline-flex w-full items-center justify-center rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" href={`/member/opportunities/${opportunity.slug}`}>View opportunity</Link></CardContent></Card>;
}

export function SimpleTable({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return <div className="overflow-hidden rounded-2xl border bg-card"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-muted-foreground"><tr>{headers.map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr></thead><tbody className="divide-y">{rows.map((row, i) => <tr key={i} className="align-top">{row.map((cell, j) => <td key={j} className="px-4 py-4">{cell}</td>)}</tr>)}</tbody></table></div>;
}

export function Badge({ children }: { children: React.ReactNode }) { return <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{children}</span>; }
