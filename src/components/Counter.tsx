"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  /** Animation duration in ms. Default 1600. */
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Optional custom formatter. Defaults to `n.toLocaleString("en-US")`. */
  format?: (n: number) => string;
  className?: string;
};

/**
 * Counts up from 0 to `target` once the element scrolls into view. Uses
 * requestAnimationFrame with an easeOutCubic curve. Triggers exactly once
 * per mount; respects `prefers-reduced-motion` by jumping straight to the
 * target value.
 */
export default function Counter({
  target,
  duration = 1600,
  prefix = "",
  suffix = "",
  format,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || triggered.current) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setN(target);
      triggered.current = true;
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !triggered.current) {
            triggered.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setN(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  const formatted = format ? format(n) : n.toLocaleString("en-US");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
