"use client";

import { useEffect, useState } from "react";

/**
 * Fixed gold progress bar at the very top of the viewport that fills as the
 * user scrolls. 2px tall, gold gradient with a soft glow. Sits above the
 * sticky nav (z-50 vs the nav's z-40).
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? Math.min(1, current / total) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[2px] pointer-events-none"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-[color:var(--color-gold-soft)] via-[color:var(--color-gold-bright)] to-[color:var(--color-gold)] shadow-[0_0_8px_rgba(255,217,135,0.65)]"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: "0 50%",
          transition: "transform 80ms linear",
        }}
      />
    </div>
  );
}
