import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FormPlaceholder({ title = "Workflow form" }: { title?: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Placeholder form only. No database action is wired yet.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <Input placeholder="Reference name" />
          <Input placeholder="Status" />
          <Textarea placeholder="Notes and remarks" />
          <Button type="button">Save placeholder</Button>
        </form>
      </CardContent>
    </Card>
  );
}
