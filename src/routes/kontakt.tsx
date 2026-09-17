import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/page-heading";
import { telefon, telefonWidoczny, whatsapp } from "@/lib/site-data";

export const Route = createFileRoute("/kontakt")({ head: () => ({ meta: [
  { title: "Kontakt — Co Chcesz?" }, { name: "description", content: "Skontaktuj się z Co Chcesz? Telefon i WhatsApp. Otwarte codziennie od 11:00 do 22:00." },
  { property: "og:title", content: "Kontakt — Co Chcesz?" }, { property: "og:description", content: "Zadzwoń lub napisz na WhatsApp. Jesteśmy otwarci codziennie." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: KontaktPage });

function KontaktPage() { return <div className="min-h-screen px-5 pb-24 pt-32 lg:px-8"><PageHeading eyebrow="Jesteśmy dla Ciebie" title="Kontakt" text="Masz pytanie albo chcesz szybko złożyć zamówienie? Zadzwoń lub napisz." /><div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2"><a href={`tel:${telefon}`} className="group bg-brand p-8 text-brand-foreground shadow-brand"><Phone className="size-10 text-flame" /><p className="mt-8 text-sm font-bold uppercase text-brand-foreground/70">Telefon</p><p className="mt-2 text-2xl font-black group-hover:text-flame">{telefonWidoczny}</p></a><div className="bg-ink p-8 text-brand-foreground"><Clock3 className="size-10 text-flame" /><p className="mt-8 text-sm font-bold uppercase text-brand-foreground/70">Godziny otwarcia</p><p className="mt-2 text-xl font-black">Poniedziałek–Niedziela<br />11:00–22:00</p></div></div><div className="mx-auto mt-6 max-w-4xl"><Button asChild variant="flame" size="lg" className="w-full"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Napisz na WhatsApp</a></Button></div></div>; }