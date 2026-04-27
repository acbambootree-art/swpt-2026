/**
 * Slim, refined ticker. Renders the items twice so the loop is seamless.
 * Animation defined in globals.css.
 */

const items = [
  "$50,000 USD GUARANTEED",
  "MAY 8 – 13, 2026",
  "GUANG'AN · SICHUAN",
  "GRAND REZEN",
  "46 EVENTS",
  "MAIN EVENT · HIGH STAKES · YUECHI CUIHU",
  "GOLD & SILVER BEAR TROPHIES",
];

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-black/40 backdrop-blur-md py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.4)]"
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[color:var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[color:var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="marquee gap-12 pl-12">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 md:gap-12 text-xs md:text-sm font-[family-name:var(--font-display)] tracking-[0.25em] md:tracking-[0.4em] uppercase whitespace-nowrap text-warm/85"
          >
            <span className="text-gold">{t}</span>
            <span
              aria-hidden="true"
              className="inline-block h-1 w-1 rounded-full bg-gold/70"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
