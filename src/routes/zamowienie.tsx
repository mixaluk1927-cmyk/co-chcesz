import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MessageCircle, Package, Truck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeading } from "@/components/page-heading";
import splashImage from "@/assets/co-chcesz-wejscie.jpg";

export const Route = createFileRoute("/zamowienie")({
  validateSearch: (search: Record<string, unknown>) => ({ danie: typeof search["danie"] === "string" ? search["danie"] : "" }),
  head: () => ({ meta: [
    { title: "Zamówienie — Co Chcesz?" }, { name: "description", content: "Zamów kaczkę lub kurczaka z dostawą albo odbiorem osobistym przez WhatsApp." },
    { property: "og:title", content: "Zamówienie — Co Chcesz?" }, { property: "og:description", content: "Złóż szybkie zamówienie z dostawą lub odbiorem." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ZamowieniePage,
});

function ZamowieniePage() {
  const { danie } = Route.useSearch();
  const [sposob, setSposob] = useState<"Dostawa" | "Odbiór osobisty">("Dostawa");
  const wyslij = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dane = new FormData(event.currentTarget);
    const tekst = [`Dzień dobry, chcę złożyć zamówienie.`, `Sposób: ${sposob}`, `Imię i nazwisko: ${dane.get("imie")}`, `Telefon: ${dane.get("telefon")}`, sposob === "Dostawa" ? `Adres: ${dane.get("adres")}` : "Odbiór osobisty", `Zamówienie i uwagi: ${dane.get("uwagi")}`].join("\n");
    window.location.href = `https://wa.me/48792697582?text=${encodeURIComponent(tekst)}`;
  };
  return <div className="min-h-screen pb-24">
    <section className="relative overflow-hidden px-5 pb-16 pt-32 lg:px-8">
      <img src={splashImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />
      <div className="relative">
        <PageHeading onDark eyebrow="Szybko i wygodnie" title="Zamówienie" text="Wypełnij formularz, a gotowe zamówienie otworzy się w WhatsApp." />
      </div>
    </section>
    <div className="mx-auto mt-12 grid max-w-5xl gap-8 px-5 lg:grid-cols-[1fr_1.5fr] lg:px-8">
      <aside className="bg-ink p-7 text-brand-foreground"><Clock3 className="size-9 text-flame" /><h2 className="mt-5 font-display text-2xl font-black uppercase">Czas dostawy: 30 minut</h2><p className="mt-3 text-sm leading-6 text-brand-foreground/70">Dania pakujemy tuż po przygotowaniu, aby dotarły gorące i świeże.</p></aside>
      <form onSubmit={wyslij} className="space-y-5 rounded-md border border-border bg-card p-6 shadow-sm sm:p-8">
        <fieldset><legend className="mb-3 text-sm font-bold">Sposób odbioru</legend><div className="grid grid-cols-2 gap-3">
          <Button type="button" variant={sposob === "Dostawa" ? "brand" : "outline"} onClick={() => setSposob("Dostawa")}><Truck /> Dostawa</Button>
          <Button type="button" variant={sposob === "Odbiór osobisty" ? "brand" : "outline"} onClick={() => setSposob("Odbiór osobisty")}><Package /> Odbiór osobisty</Button>
        </div></fieldset>
        <div><Label htmlFor="imie">Imię i nazwisko</Label><Input id="imie" name="imie" required className="mt-2 h-12" autoComplete="name" /></div>
        <div><Label htmlFor="telefon">Numer telefonu</Label><Input id="telefon" name="telefon" required type="tel" className="mt-2 h-12" autoComplete="tel" /></div>
        {sposob === "Dostawa" && <div><Label htmlFor="adres">Adres dostawy</Label><Input id="adres" name="adres" required className="mt-2 h-12" autoComplete="street-address" /></div>}
        <div><Label htmlFor="uwagi">Uwagi do zamówienia</Label><Textarea id="uwagi" name="uwagi" required defaultValue={danie ? `${danie} — ` : ""} className="mt-2 min-h-28" /></div>
        <Button type="submit" variant="brand" size="lg" className="w-full"><MessageCircle /> Zamów przez WhatsApp</Button>
      </form>
    </div>
  </div>;
}