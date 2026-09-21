const EMBERS = [
  { left: "6%", size: 4, duration: "8s", delay: "0s" },
  { left: "16%", size: 3, duration: "9.5s", delay: "1.5s" },
  { left: "29%", size: 4, duration: "7.5s", delay: "3s" },
  { left: "44%", size: 3, duration: "10s", delay: "0.6s" },
  { left: "58%", size: 4, duration: "8.5s", delay: "2.2s" },
  { left: "71%", size: 3, duration: "9s", delay: "4s" },
  { left: "83%", size: 4, duration: "8s", delay: "1s" },
  { left: "93%", size: 3, duration: "11s", delay: "2.8s" },
];

/**
 * Wspólne, ciepłe "ogniste" tło (dryfujące poświaty + unoszące się iskry) używane
 * na stronie głównej i w formularzu zamówienia. Umieszczaj wewnątrz elementu
 * z klasami `relative overflow-hidden`.
 */
export function FireGlowBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="drift-blob-a absolute -left-32 -top-20 size-[26rem] rounded-full bg-flame/25 blur-3xl" />
      <div className="drift-blob-b absolute -right-24 bottom-0 size-[24rem] rounded-full bg-brand/20 blur-3xl" />
      {EMBERS.map((ember, i) => (
        <span
          key={i}
          className="ember-particle bg-flame"
          style={{ left: ember.left, width: ember.size, height: ember.size, animationDuration: ember.duration, animationDelay: ember.delay }}
        />
      ))}
    </div>
  );
}
