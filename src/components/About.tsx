import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { value: "6", label: "Days of Action" },
  { value: "46", label: "Events" },
  { value: "Gold & Silver", label: "Bear Trophies" },
  { value: "1st", label: "Edition" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start">
          <Reveal>
            <span className="eyebrow">About the Series</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight mb-6">
              A new chapter for poker in{" "}
              <span className="metallic-text">South-West China.</span>
            </h2>
            <div className="space-y-5 text-warm/80 text-base md:text-lg leading-relaxed">
              <p>
                The{" "}
                <span className="text-warm">South West Poker Tournament</span>{" "}
                opens its 1st stop in Guang&apos;an, Sichuan from{" "}
                <span className="text-gold">May 8 to 13, 2026</span> — six
                days, 46 events, a full progression from satellites and side
                events to the Main Event, the High Stakes Masters, and the
                Yuechi Cuihu Championship.
              </p>
              <p>
                The festival is hosted at the{" "}
                <span className="text-gold">Grand Rezen</span> in Yuechi —
                a short walk from the high-speed railway station, with
                lake-view rooms, a wave-fronted banquet hall built for live
                poker, and full-service amenities so players can stay,
                practice, and play without leaving the property.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal
              className="glass-strong shimmer-border glass-sheen lift rounded-[var(--radius-card)] p-6 md:p-7 shadow-[var(--shadow-glow-gold)]"
            >
              <span className="text-[0.7rem] uppercase tracking-[0.35em] text-gold/85">
                Guaranteed Prize Pool
              </span>
              <Counter
                target={50000}
                prefix="$"
                suffix=" USD"
                className="mt-2 block font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] leading-none metallic-text"
              />
            </Reveal>

            <ul className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  as="li"
                  delay={120 * i}
                  className="glass glass-sheen lift rounded-[var(--radius-card)] p-5 md:p-6 h-full"
                >
                  <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl gold-text leading-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-warm/70 text-xs md:text-sm uppercase tracking-[0.2em]">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
