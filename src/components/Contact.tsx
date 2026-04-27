import Image from "next/image";
import { CalendarDays, MapPin, Building } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  {
    title: "Official Customer Service",
    subtitle: "WeChat",
    body: "Scan to chat with our team for registration, accommodation, and travel.",
  },
  {
    title: "Official Public Account",
    subtitle: "WeChat Channel",
    body: "Scan to follow daily updates, structures, and chip counts.",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-6 overflow-hidden"
    >
      <div className="aurora-bg opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="eyebrow">Register &amp; Contact</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight">
              <span className="shimmer-text">See you at the felt.</span>
            </h2>
            <p className="mt-4 text-warm/70 max-w-xl mx-auto leading-relaxed">
              Scan either QR code below to connect with the SWPT team. Real
              codes replace these placeholders before launch.
            </p>
          </div>
        </Reveal>

        {/*
          To swap in real QR codes:
          1. Drop a `customer-service-qr.png` and `public-account-qr.png` into /public.
          2. Replace the placeholder <div> with <Image src="/customer-service-qr.png" ... />.
        */}
        <ul className="grid gap-6 md:grid-cols-2 mb-12">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              as="li"
              delay={120 * i}
              className="glass glass-sheen lift rounded-[var(--radius-card)] p-6 md:p-8 text-center"
            >
              <div className="mx-auto mb-5 grid aspect-square w-full max-w-[220px] place-items-center rounded-lg border-2 border-dashed border-[color:var(--color-gold)]/55 bg-black/35 backdrop-blur-sm transition-shadow">
                <Image
                  src="/swpt-logo.png"
                  alt=""
                  width={120}
                  height={48}
                  className="w-[55%] h-auto opacity-40"
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-warm">
                {c.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mt-1">
                {c.subtitle}
              </p>
              <p className="mt-3 text-sm text-warm/70 leading-relaxed">
                {c.body}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-3 text-sm">
            <li className="glass lift flex items-center gap-3 rounded-[var(--radius-card)] px-5 py-4">
              <CalendarDays
                size={18}
                className="text-gold"
                aria-hidden="true"
              />
              <span className="text-warm/80">May 8 – 13, 2026</span>
            </li>
            <li className="glass lift flex items-center gap-3 rounded-[var(--radius-card)] px-5 py-4">
              <Building size={18} className="text-gold" aria-hidden="true" />
              <span className="text-warm/80">Grand Rezen, Yuechi</span>
            </li>
            <li className="glass lift flex items-center gap-3 rounded-[var(--radius-card)] px-5 py-4">
              <MapPin size={18} className="text-gold" aria-hidden="true" />
              <span className="text-warm/80">
                Guang&apos;an, Sichuan, China
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
