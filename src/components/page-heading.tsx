export function PageHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase text-brand">{eyebrow}</p>
      <h1 className="font-display text-4xl font-black uppercase leading-tight text-foreground sm:text-6xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>
    </div>
  );
}