import Image from "next/image";
import HeroParticles from "./HeroParticles";
import ParallaxLayer from "./ParallaxLayer";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
        src="/hero-bg.mp4"
        poster="/swpt-logo.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Soft aurora drifting underneath — slightly punchier on mobile */}
      <div
        className="aurora-bg -z-10 opacity-75 md:opacity-60"
        aria-hidden="true"
      />
      {/* Single dark vignette for legibility */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,7,10,0.55) 0%, rgba(7,7,10,0.5) 40%, rgba(7,7,10,0.95) 100%)",
        }}
      />
      <HeroParticles />

      {/* Mobile-only floating chip accents — peek in from the corners */}
      <Image
        src="/chips/cascade.png"
        alt=""
        aria-hidden="true"
        width={400}
        height={500}
        priority
        className="md:hidden pointer-events-none absolute -right-10 top-16 w-[180px] h-auto opacity-80 drop-shadow-[0_18px_40px_rgba(0,0,0,0.7)] z-0"
        style={{ animation: "wobble 9s ease-in-out infinite" }}
      />
      <Image
        src="/chips/panda-coin.png"
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        className="md:hidden pointer-events-none absolute -left-8 bottom-32 w-[110px] h-auto opacity-70 drop-shadow-[0_18px_40px_rgba(0,0,0,0.7)] z-0"
        style={{ animation: "drift 6s ease-in-out infinite" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-20 md:gap-14 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Left: copy stack */}
        <div className="relative z-10 flex flex-col items-start gap-6 md:gap-7 text-left">
          <div className="reveal is-visible">
            <span className="eyebrow">The 1st Tournament</span>
          </div>

          <div className="reveal is-visible" style={{ animationDelay: "120ms" }}>
            <Image
              src="/swpt-logo.png"
              alt="SWPT — South West Poker Tournament"
              width={520}
              height={208}
              priority
              className="w-[220px] md:w-[300px] lg:w-[340px] h-auto drop-shadow-[0_8px_30px_rgba(201,166,98,0.5)]"
            />
          </div>

          <div className="reveal is-visible" style={{ animationDelay: "260ms" }}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-wide max-w-xl">
              <span className="shimmer-text md:hidden">
                South West Poker Tournament
              </span>
              <span className="hidden md:inline metallic-text">
                South West Poker Tournament
              </span>
            </h1>
          </div>

          <div className="reveal is-visible" style={{ animationDelay: "400ms" }}>
            <div className="glass-strong shimmer-border inline-flex flex-col items-start gap-1 rounded-2xl px-6 py-4 shadow-[var(--shadow-glow-gold)]">
              <span className="text-[0.7rem] uppercase tracking-[0.35em] text-gold/85">
                Guaranteed Prize Pool
              </span>
              <Counter
                target={50000}
                prefix="$"
                suffix=" USD"
                className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] leading-none metallic-text"
              />
            </div>
          </div>

          <div
            className="reveal is-visible flex flex-wrap items-center gap-3"
            style={{ animationDelay: "540ms" }}
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-cream font-medium tracking-wider text-sm md:text-base">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold dot-pulse"
                aria-hidden="true"
              />
              May 8 – 13, 2026
            </div>
            <span className="text-warm/55 text-sm tracking-[0.25em] uppercase">
              Grand Rezen · Guang&apos;an
            </span>
          </div>

          <div
            className="reveal is-visible mt-1 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "680ms" }}
          >
            <a
              href="#contact"
              className="glow-cta inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-black hover:bg-gold-soft transition-colors"
            >
              Register Now
            </a>
            <a
              href="#schedule"
              className="glass glass-sheen inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium text-cream hover:text-gold transition-colors"
            >
              View Schedule
            </a>
          </div>
        </div>

        {/* Right: featured chip centerpiece */}
        <ParallaxLayer
          speed={0.18}
          max={120}
          className="reveal-fade is-visible relative z-10 mx-auto w-full max-w-[340px] md:max-w-[420px] lg:max-w-[560px] aspect-square"
          style={{ animationDelay: "300ms" }}
        >
          {/* Pulsing halo */}
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,217,135,0.55), rgba(201,166,98,0.35) 45%, rgba(107,23,38,0.25) 70%, transparent 85%)",
              filter: "blur(36px)",
              animation: "halo-pulse 4.5s ease-in-out infinite",
            }}
          />
          {/* Outer ring of soft glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, transparent 55%, rgba(201,166,98,0.18) 70%, transparent 80%)",
              filter: "blur(24px)",
            }}
          />
          {/* Featured panda-coin composition */}
          <Image
            src="/chips/panda-coin.png"
            alt="SWPT panda-mascot chip with dice and roulette wheel"
            width={1200}
            height={1200}
            priority
            sizes="(min-width: 1024px) 40vw, 80vw"
            className="relative h-full w-full object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.85)]"
            style={{ animation: "drift 7s ease-in-out infinite" }}
          />
        </ParallaxLayer>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[0.7rem] text-gold/60 tracking-[0.35em] uppercase"
      >
        Scroll
        <span
          className="block h-8 w-px bg-gradient-to-b from-[color:var(--color-gold)] to-transparent"
          style={{ animation: "drift 2.6s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
