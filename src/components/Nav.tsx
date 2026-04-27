"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venue", label: "Venue" },
  { href: "#rules", label: "Rules" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "atmosphere",
      "schedule",
      "venue",
      "rules",
      "contact",
    ];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0.25, 0.55], rootMargin: "-30% 0px -50% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 backdrop-blur-xl backdrop-saturate-150 border-b transition-colors shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)] ${
        scrolled
          ? "bg-black/65 border-white/15"
          : "bg-black/30 border-white/10"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8"
      >
        <Link
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label="SWPT home"
        >
          <Image
            src="/swpt-logo.png"
            alt=""
            width={120}
            height={48}
            priority
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(201,166,98,0.35)]"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const isActive = `#${active}` === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link text-sm tracking-wide transition-colors ${
                    isActive ? "text-gold" : "text-warm/75 hover:text-gold"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[color:var(--color-gold)] bg-gold px-4 py-2 text-sm font-semibold text-black hover:bg-gold-soft transition-colors"
            >
              Register
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden text-warm"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-black/85 backdrop-blur-xl"
        >
          <ul className="flex flex-col py-3">
            {links.map((l) => {
              const isActive = `#${active}` === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-6 py-3 ${
                      isActive ? "text-gold" : "text-warm/85"
                    } hover:text-gold`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="px-6 py-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-2 font-semibold text-black"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
