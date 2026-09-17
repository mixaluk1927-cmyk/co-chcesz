import { Link } from "@tanstack/react-router";
import { Clock3, Phone } from "lucide-react";
import { telefon, telefonWidoczny } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-3xl font-black uppercase">Co <span className="text-flame">Chcesz?</span></p>
          <p className="mt-3 max-w-xs text-sm text-brand-foreground/65">Kaczka po pekińsku i kurczak z grilla — gorące, świeże i gotowe na Twój apetyt.</p>
        </div>
        <div>
          <p className="mb-3 font-bold uppercase text-flame">Godziny otwarcia</p>
          <p className="flex items-center gap-2 text-sm"><Clock3 className="size-4" /> Poniedziałek–Niedziela</p>
          <p className="ml-6 mt-1 text-sm font-bold">11:00–22:00</p>
        </div>
        <div>
          <p className="mb-3 font-bold uppercase text-flame">Kontakt</p>
          <a href={`tel:${telefon}`} className="flex items-center gap-2 text-sm font-bold hover:text-flame"><Phone className="size-4" /> {telefonWidoczny}</a>
          <Link to="/polityka-prywatnosci" className="mt-4 block text-sm text-brand-foreground/65 hover:text-brand-foreground">Polityka prywatności</Link>
        </div>
      </div>
      <div className="border-t border-brand-foreground/10 px-5 py-5 text-center text-xs text-brand-foreground/55">© 2026 Co Chcesz? Wszelkie prawa zastrzeżone.</div>
    </footer>
  );
}