"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  /** Multiplier on `window.scrollY`. 0.15 = layer moves 15% of scroll
   *  distance, creating a slow-recede parallax. Negative values move the
   *  layer "up" faster than scroll. */
  speed?: number;
  /** Cap absolute translation (px) so layer doesn't fly off after long
   *  scrolls. Default 600. */
  max?: number;
  /** When true, only animate while the wrapping element is within the
   *  viewport — avoids paying for transform updates once you've scrolled
   *  far past. Default true. */
  whenInView?: boolean;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
};

/**
 * Wraps children in a div that translates vertically by a fraction of the
 * window scroll position, producing a parallax effect. Uses
 * requestAnimationFrame and IntersectionObserver to keep it cheap.
 */
export default function ParallaxLayer({
  speed = 0.15,
  max = 600,
  whenInView = true,
  className,
  style,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  const [visible, setVisible] = useState(!whenInView);

  useEffect(() => {
    if (!whenInView) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setVisible(e.isIntersecting);
      },
      { rootMargin: "100px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [whenInView]);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const update = () => setY(window.scrollY);
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  const offset = Math.max(-max, Math.min(max, y * speed));

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
