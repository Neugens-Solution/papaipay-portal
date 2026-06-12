import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardCard({ title, value, description }: { title: string; value: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-2 rounded-full bg-muted">
          <div className="h-2 w-2/3 rounded-full bg-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
