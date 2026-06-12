import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const bars = [55, 82, 64, 92, 48, 76, 68];

export function ChartPlaceholder({ title = "Workflow overview" }: { title?: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Placeholder chart for future reporting data.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-56 items-end gap-3 rounded-lg bg-muted/60 p-4">
          {bars.map((height, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-2">
              <div className="w-full rounded-t-md bg-primary/80" style={{ height: `${height}%` }} />
              <span className="text-xs text-muted-foreground">{index + 1}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
