export function PageHeading({
  eyebrow,
  title,
  text,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  onDark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`mb-3 text-sm font-black uppercase ${onDark ? "text-flame" : "text-brand"}`}>{eyebrow}</p>
      <h1
        className={`font-display text-4xl font-black uppercase leading-tight sm:text-6xl ${onDark ? "text-brand-foreground" : "text-foreground"}`}
      >
        {title}
      </h1>
      <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${onDark ? "text-brand-foreground/80" : "text-muted-foreground"}`}>
        {text}
      </p>
    </div>
  );
}