import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-gold)]/20 bg-black px-6 py-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="hairline mb-8" aria-hidden="true" />
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/swpt-logo.png"
              alt="SWPT"
              width={120}
              height={48}
              className="h-8 w-auto opacity-90"
            />
            <span className="text-xs text-warm/60 tracking-wide">
              © {year} SWPT — South West Poker Tournament
            </span>
          </div>
          <ul className="flex gap-5 text-xs uppercase tracking-[0.3em]">
            <li>
              <a href="#hero" className="text-warm/60 hover:text-gold transition-colors">
                Top
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="text-warm/60 hover:text-gold transition-colors"
              >
                Schedule
              </a>
            </li>
            <li>
              <a href="#venue" className="text-warm/60 hover:text-gold transition-colors">
                Venue
              </a>
            </li>
            <li>
              <a href="#rules" className="text-warm/60 hover:text-gold transition-colors">
                Rules
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-warm/60 hover:text-gold transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
