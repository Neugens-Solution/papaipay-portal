import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/member/member-ui";
import { faqs } from "@/lib/member-mock-data";
export default function Page() { return <div><PageHeader title="FAQ"><p>Frequently asked questions for the member prototype experience.</p></PageHeader><div className="space-y-4">{faqs.map((faq) => <Card key={faq.question}><CardHeader><CardTitle>{faq.question}</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">{faq.answer}</p></CardContent></Card>)}</div></div>; }
