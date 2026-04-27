import Image from "next/image";
import Reveal from "./Reveal";

type Tile = {
  src: string;
  alt: string;
  h: string;
  caption: string;
  note: string;
  fit: "cover" | "contain";
};

const tiles: Tile[] = [
  {
    src: "/chips/aces.png",
    alt: "Pocket aces resting on an SWPT chip",
    h: "row-span-2",
    caption: "Pocket Aces",
    note: "The hand every player chases.",
    fit: "contain",
  },
  {
    src: "/chips/chip-felt-glass.png",
    alt: "An SWPT chip on green felt beside a glass of brandy",
    h: "",
    caption: "House Pour",
    note: "A quiet glass between hands.",
    fit: "cover",
  },
  {
    src: "/chips/cascade.png",
    alt: "SWPT chips cascading mid-air",
    h: "",
    caption: "All In",
    note: "Six days, one decision at a time.",
    fit: "contain",
  },
  {
    src: "/chips/chip-felt-edge.png",
    alt: "An SWPT chip standing on its edge in a tournament hall",
    h: "row-span-2 col-span-2",
    caption: "Center Stage",
    note: "The Grand Rezen banquet hall, set for SWPT.",
    fit: "cover",
  },
];

export default function Atmosphere() {
  return (
    <section
      id="atmosphere"
      className="relative py-24 md:py-32 px-6 overflow-hidden bg-[color:var(--color-bg)]"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="eyebrow">Atmosphere</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight">
              <span className="metallic-text">
                Felt, gold, &amp; quiet ambition.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-warm/70 leading-relaxed">
              The 2026 stop is built around a single idea — pair high-stakes
              competition with the kind of room you&apos;d be happy to spend
              six days inside.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px]">
          {tiles.map((t, i) => (
            <Reveal
              key={t.src}
              delay={120 * i}
              className={`glass glass-sheen group relative overflow-hidden rounded-[var(--radius-card)] ${t.h}`}
            >
              {/* Subtle radial behind contained chips so cutouts feel anchored */}
              {t.fit === "contain" && (
                <div
                  aria-hidden="true"
                  className="absolute inset-[10%] rounded-full"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(201,166,98,0.28), rgba(107,23,38,0.18) 50%, transparent 75%)",
                    filter: "blur(18px)",
                  }}
                />
              )}
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className={`relative transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] ${
                  t.fit === "cover" ? "object-cover" : "object-contain p-6"
                }`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  {t.caption}
                </p>
                <p className="mt-1 text-sm md:text-base text-warm/90 font-[family-name:var(--font-display)]">
                  {t.note}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
