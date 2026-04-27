"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, ZoomIn } from "lucide-react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export default function Schedule() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="schedule"
      className="relative py-20 md:py-32 px-6 overflow-hidden"
    >
      <div className="aurora-bg opacity-15" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="eyebrow">Six Days · 46 Events</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight">
              <span className="metallic-text">Tournament Schedule</span>
            </h2>
            <p className="mt-4 text-warm/70 max-w-xl mx-auto leading-relaxed">
              Full progression — satellites, side events, the Main Event, the
              High Stakes Masters, and the Yuechi Cuihu Championship. Tap the
              schedule to view it full size.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <figure className="mx-auto w-full">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Expand schedule image"
              className="glass glass-sheen group relative block w-full overflow-hidden rounded-[var(--radius-card)] cursor-zoom-in transition-transform duration-500 hover:scale-[1.005]"
            >
              <Image
                src="/schedule.jpg"
                alt="SWPT Guang'an 2026 full tournament schedule, May 8 to May 13"
                width={1200}
                height={1820}
                className="w-full h-auto"
                priority={false}
              />
              <span className="glass pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs text-gold opacity-90 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={14} />
                Zoom
              </span>
            </button>
            <figcaption className="mt-5 text-center text-sm text-warm/60">
              <a
                href="/schedule.jpg"
                download
                className="inline-flex items-center gap-2 text-gold hover:text-gold-soft underline-offset-4 hover:underline"
              >
                <Download size={14} />
                Download schedule (JPG)
              </a>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        src="/schedule.jpg"
        alt="SWPT Guang'an 2026 full tournament schedule"
      />
    </section>
  );
}
