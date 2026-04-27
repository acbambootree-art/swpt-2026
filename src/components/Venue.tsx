import Image from "next/image";
import {
  Bed,
  Building2,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Train,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { icon: Bed, label: "306 Suites" },
  { icon: Building2, label: "Banquet Floor" },
  { icon: UtensilsCrossed, label: "All-Day Dining" },
  { icon: Waves, label: "Rooftop Pool" },
  { icon: Dumbbell, label: "Fitness Centre" },
  { icon: Train, label: "Yuechi HSR Walk-Up" },
];

const photos = [
  {
    src: "/hotel/sunset.webp",
    alt: "Grand Rezen tower and event hall at sunset",
    label: "The Tower",
    note: "Twenty-plus floors of suites overlooking Yuechi.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/hotel/lake.webp",
    alt: "Grand Rezen reflected in a lake during the day",
    label: "Lakeside",
    note: "Mirrored daylight on the south façade.",
    span: "",
  },
  {
    src: "/hotel/night.webp",
    alt: "Grand Rezen illuminated against a deep blue night sky",
    label: "After Hours",
    note: "Where the late sessions live.",
    span: "",
  },
  {
    src: "/hotel/lobby.jpeg",
    alt: "Grand Rezen lobby with circular crystal chandelier and traditional Chinese drum",
    label: "Arrival",
    note: "Eastern detail, modern scale.",
    span: "md:col-span-2",
  },
  {
    src: "/hotel/suite.jpeg",
    alt: "Grand Rezen suite with city view and modern interior",
    label: "Suites",
    note: "Floor-to-ceiling glass, panoramic city.",
    span: "",
  },
];

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative py-20 md:py-32 px-6 overflow-hidden bg-[color:var(--color-surface)]/40"
    >
      <div className="aurora-bg opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-end mb-12 md:mb-16">
            <div>
              <span className="eyebrow">The Venue</span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight">
                <span className="metallic-text">Grand Rezen</span>
                <span className="text-warm/80 font-normal">
                  {" "}
                  · Yuechi, Guang&apos;an
                </span>
              </h2>
            </div>
            <p className="text-warm/75 leading-relaxed text-base md:text-lg">
              Grand Rezen sits a short walk from Yuechi High-Speed Railway
              station — a modern tower beside Longhu Park, with a wave-fronted
              event hall that becomes the SWPT tournament floor. Stay,
              practice, play, and unwind without leaving the property.
            </p>
          </div>
        </Reveal>

        {/* Photo collage */}
        <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px]">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={100 * i}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_40px_rgba(0,0,0,0.45)] ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                  {p.label}
                </p>
                <p className="mt-1 text-base md:text-lg text-cream font-[family-name:var(--font-display)]">
                  {p.note}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* Amenity strip */}
        <Reveal delay={200} className="mt-10 md:mt-14">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass lift flex items-center gap-3 rounded-[var(--radius-card)] px-4 py-3"
              >
                <Icon
                  size={20}
                  className="text-gold shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-warm/85">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
