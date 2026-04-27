"use client";

/**
 * Soft gold particles drifting up across the hero. Pure CSS animations
 * defined in globals.css. Pre-seeded with stable pseudo-random params
 * so SSR and client render the same markup.
 */

type Particle = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

function mulberry32(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const COUNT = 11;
const rand = mulberry32(11);
const particles: Particle[] = Array.from({ length: COUNT }, () => {
  const r1 = rand();
  const r2 = rand();
  const r3 = rand();
  const r4 = rand();
  const r5 = rand();
  return {
    x: r1 * 100,
    size: 2 + r2 * 5,
    duration: 22 + r3 * 16,
    delay: -r4 * 30,
    drift: (r5 - 0.5) * 140,
  };
});

export default function HeroParticles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              "--x": `${p.x}%`,
              "--size": `${p.size}px`,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
