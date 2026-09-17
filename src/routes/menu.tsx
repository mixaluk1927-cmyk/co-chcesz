import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/page-heading";
import { dania } from "@/lib/site-data";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [
    { title: "Menu — Co Chcesz?" }, { name: "description", content: "Sprawdź menu: kaczka po pekińsku, kurczak z grilla, sałatka i zupa dnia." },
    { property: "og:title", content: "Menu — Co Chcesz?" }, { property: "og:description", content: "Kaczka, kurczak i świeże dodatki. Zobacz ceny i zamów." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: MenuPage,
});

function MenuPage() {
  return <div className="min-h-screen px-5 pb-24 pt-32 lg:px-8">
    <PageHeading eyebrow="Co dziś jesz?" title="Nasze menu" text="Wyraziste smaki, świeże składniki i porcje, które naprawdę sycą." />
    <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dania.map((danie) => <article key={danie.nazwa} className="group overflow-hidden rounded-md border border-border bg-card shadow-sm">
        <div className="aspect-square overflow-hidden"><img src={danie.obraz} alt={danie.alt} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
        <div className="p-5"><div className="flex items-start justify-between gap-3"><h2 className="font-display text-xl font-black uppercase leading-tight">{danie.nazwa}</h2><strong className="shrink-0 text-xl text-brand">{danie.cena}</strong></div><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{danie.opis}</p><Button asChild variant="brand" className="mt-5 w-full"><Link to="/zamowienie" search={{ danie: danie.nazwa }}>Zamów teraz! <ArrowRight /></Link></Button></div>
      </article>)}
    </div>
  </div>;
}