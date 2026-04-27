"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Trigger once when 15% visible (default true). */
  once?: boolean;
  /** Element type to render — useful so a Reveal child of a <ul> can be an <li>. */
  as?: ElementType;
};

/**
 * Wraps children in an element that fades + slides up the first time it scrolls into view.
 * Falls back to instantly visible when reduced-motion is set
 * (the CSS itself disables the keyframes).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  once = true,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
