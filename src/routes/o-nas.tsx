import { createFileRoute } from "@tanstack/react-router";
import { Flame, Heart, UtensilsCrossed } from "lucide-react";
import duckImage from "@/assets/kaczka-pekinska.jpg";
import { PageHeading } from "@/components/page-heading";
import { FireGlowBackground } from "@/components/fire-glow-background";

export const Route = createFileRoute("/o-nas")({ head: () => ({ meta: [
  { title: "O nas — Co Chcesz?" }, { name: "description", content: "Poznaj historię Co Chcesz? i naszą pasję do kaczki po pekińsku oraz kurczaka z grilla." },
  { property: "og:title", content: "O nas — Co Chcesz?" }, { property: "og:description", content: "Nasza historia, jakość i specjalność przygotowywana prosto z ognia." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ONasPage });

function ONasPage() { return <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-flame/15 via-background to-brand/10 px-5 pb-24 pt-32 lg:px-8">
  <FireGlowBackground />
  <PageHeading eyebrow="Poznaj nas" title="O nas" text="Gotujemy odważnie, uczciwie i zawsze na świeżo." />
  <div className="mx-auto mt-14 grid max-w-6xl items-center gap-10 lg:grid-cols-2"><img src={duckImage} alt="Nasza kaczka po pekińsku" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-md object-cover" /><div><h2 className="font-display text-3xl font-black uppercase">Nasza historia</h2><p className="mt-5 leading-7 text-muted-foreground">Co Chcesz? powstało z prostego pomysłu: podawać dobrze znane dania w ich najlepszej, pełnej smaku wersji. Łączymy chrupiące, orientalne inspiracje z aromatem prawdziwego grilla.</p><div className="mt-8 border-l-4 border-brand pl-5"><p className="font-display text-xl font-black uppercase">Nasza specjalność: Kaczka po pekińsku i Kurczak z grilla</p></div></div></div>
  <section className="mx-auto mt-20 max-w-6xl"><h2 className="text-center font-display text-3xl font-black uppercase">Dlaczego jesteśmy najlepsi</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[[Flame,"Ogień i smak","Grillujemy na bieżąco i dbamy o idealną chrupkość."],[Heart,"Dobra jakość","Wybieramy świeże składniki i sprawdzone receptury."],[UtensilsCrossed,"Uczciwe porcje","Podajemy konkretne dania, po które chce się wracać."]].map(([Ikona,tytul,opis]) => { const Icon = Ikona as typeof Flame; return <article key={String(tytul)} className="border-t-4 border-flame bg-muted p-6"><Icon className="size-8 text-brand" /><h3 className="mt-4 font-bold uppercase">{String(tytul)}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(opis)}</p></article>; })}</div></section>
  </div>; }