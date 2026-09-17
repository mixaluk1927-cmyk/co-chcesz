import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { telefon, telefonWidoczny } from "@/lib/site-data";

const linki = [
  { to: "/" as const, label: "Strona główna" },
  { to: "/menu" as const, label: "Menu" },
  { to: "/zamowienie" as const, label: "Zamówienie" },
  { to: "/o-nas" as const, label: "O nas" },
  { to: "/kontakt" as const, label: "Kontakt" },
];

export function SiteHeader() {
  const [otwarte, setOtwarte] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-foreground/15 bg-ink/90 text-brand-foreground backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="font-display text-2xl font-black uppercase text-brand-foreground">
          Co <span className="text-flame">Chcesz?</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Główna nawigacja">
          {linki.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-flame" }}
              className="text-sm font-bold uppercase transition-colors hover:text-flame"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${telefon}`} className="flex items-center gap-2 text-sm font-bold">
            <Phone aria-hidden="true" className="size-4 text-flame" /> {telefonWidoczny}
          </a>
          <Button asChild variant="flame">
            <Link to="/zamowienie" search={{ danie: "" }}>Zamów teraz</Link>
          </Button>
        </div>
        <Button
          variant="ghostOnDark"
          size="icon"
          className="lg:hidden"
          aria-label={otwarte ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={otwarte}
          onClick={() => setOtwarte((stan) => !stan)}
        >
          {otwarte ? <X /> : <Menu />}
        </Button>
      </div>
      {otwarte && (
        <nav className="border-t border-brand-foreground/15 bg-ink px-5 py-5 lg:hidden" aria-label="Menu mobilne">
          <div className="flex flex-col gap-1">
            {linki.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOtwarte(false)}
                className="border-b border-brand-foreground/10 py-3 text-base font-bold uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="flame" className="mt-4">
              <Link to="/zamowienie" search={{ danie: "" }} onClick={() => setOtwarte(false)}>Zamów teraz</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}