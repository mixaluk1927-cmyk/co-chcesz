import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock3, Flame, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntrySplash } from "@/components/entry-splash";
import { FireGlowBackground } from "@/components/fire-glow-background";
import heroImage from "@/assets/co-chcesz-hero.jpg";
import heroVideo from "@/assets/co-chcesz-hero.mp4.asset.json";
import { telefon, telefonWidoczny } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Co Chcesz? — Kaczka po pekińsku i kurczak" },
      { name: "description", content: "Najlepsza kaczka po pekińsku i kurczak z grilla w mieście. Zamów z dostawą lub odbiorem." },
      { property: "og:title", content: "Co Chcesz? — Kaczka po pekińsku i kurczak" },
      { property: "og:description", content: "Najlepsza kaczka i kurczak w mieście!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StronaGlowna,
});

function StronaGlowna() {
  return (
    <div className="bg-background">
      <EntrySplash />
      <section className="relative flex min-h-[92svh] items-center overflow-hidden text-brand-foreground">
        <video autoPlay muted loop playsInline poster={heroImage} className="absolute inset-0 h-full w-full object-cover" aria-label="Kaczka po pekińsku i kurczak z grilla">
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 lg:px-8">
          <div className="reveal max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-flame pl-3 text-sm font-black uppercase tracking-normal text-flame"><Flame className="size-4" /> Prosto z ognia</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.95] sm:text-8xl lg:text-9xl">Co<br /><span className="text-flame">Chcesz?</span></h1>
            <p className="mt-6 max-w-xl text-xl font-bold sm:text-2xl">Najlepsza kaczka i kurczak w mieście!</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="flame" size="lg"><Link to="/menu"><ShoppingBag /> Zobacz menu</Link></Button>
              <Button asChild variant="outlineOnDark" size="lg"><a href={`tel:${telefon}`}><Phone /> Zadzwoń teraz</a></Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-brand/95">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 sm:flex-row sm:items-center lg:px-8">
            <div className="flex items-center gap-3"><Clock3 className="size-6 text-flame" /><div><p className="text-xs font-bold uppercase text-brand-foreground/70">Godziny otwarcia</p><p className="font-black">Codziennie 11:00–22:00</p></div></div>
            <a href={`tel:${telefon}`} className="flex items-center gap-3 font-black hover:text-flame"><Phone className="size-5" /> {telefonWidoczny}</a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-flame/20 via-background to-brand/15 px-5 py-20 lg:px-8">
        <FireGlowBackground />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-brand/25 via-flame/5 to-transparent" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div><p className="text-sm font-black uppercase text-brand">Smak bez kompromisów</p><h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">Dwa ognie.<br />Jeden wielki apetyt.</h2></div>
          <div><p className="text-lg leading-8 text-muted-foreground">Chrupiąca kaczka po pekińsku, soczysty kurczak prosto z grilla i świeże dodatki. Przygotowujemy wszystko na bieżąco, żeby każde zamówienie smakowało dokładnie tak, jak trzeba.</p><Button asChild variant="brand" size="lg" className="mt-6"><Link to="/zamowienie" search={{ danie: "" }}>Zamów teraz</Link></Button></div>
        </div>
      </section>
    </div>
  );
}