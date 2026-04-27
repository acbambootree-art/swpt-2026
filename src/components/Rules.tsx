import { ClipboardList, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const eventRules = [
  "The organizing committee submits the participant list to the relevant authorities — players not on the registered list cannot participate.",
  "Main Event qualifications are bound to real-name accounts. Players who already hold a Main Event qualification are automatically registered.",
  "Players holding non-Main qualifications must pre-register and submit one of: travel info (flight or rail screenshot), hotel booking confirmation, license plate (if self-driving), local ID photo (for residents), or a game account & card-pack screenshot.",
  "Approved players who fail to attend without a valid reason may be subject to account suspension or membership downgrade.",
  "Only players who completed pre-registration and signed in on-site may register for tournaments via the app or at the desk.",
  "Players advancing with unused Main qualifications (max 3) may exchange them on-site for other event qualifications.",
  "All on-site qualification cards and credentials are delivered directly to the player's APP card pack.",
];

const codeOfConduct = [
  "No smoking inside the venue, including e-cigarettes.",
  "No eating or phone calls at the table — whether or not you currently hold cards.",
  "While holding hole cards: no phones or electronics, and no photographing your cards.",
  "Only sealed bottled drinks are allowed on the table. Any other items must be smaller than 2/3 the size of a standard playing card; mascots may not exceed one card length in height.",
  "Final tables: absolutely no headphones, phones, tablets, e-readers, or laptops — violations result in immediate suspension.",
  "During breaks, all players must leave the playing area.",
  "Act in turn and clearly state your intended action.",
];

export default function Rules() {
  return (
    <section
      id="rules"
      className="relative py-20 md:py-32 px-6 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="eyebrow">Tournament Integrity</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight">
              <span className="metallic-text">Event Rules &amp; Conduct</span>
            </h2>
            <p className="mt-4 text-warm/70 max-w-2xl mx-auto leading-relaxed">
              Please read carefully before arriving. Compliance is a condition
              of entry and helps keep the festival fair for everyone.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal
            delay={120}
            className="glass glass-sheen lift rounded-[var(--radius-card)] p-6 md:p-8"
          >
            <header className="flex items-center gap-3 mb-5">
              <ClipboardList
                className="text-gold"
                size={22}
                aria-hidden="true"
              />
              <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold">
                Event Rules
              </h3>
            </header>
            <ol className="space-y-3 text-sm md:text-base text-warm/80 leading-relaxed list-decimal list-outside pl-5 marker:text-gold">
              {eventRules.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            delay={240}
            className="glass glass-sheen lift rounded-[var(--radius-card)] p-6 md:p-8"
          >
            <header className="flex items-center gap-3 mb-5">
              <ShieldCheck
                className="text-gold"
                size={22}
                aria-hidden="true"
              />
              <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold">
                Player Code of Conduct
              </h3>
            </header>
            <ol className="space-y-3 text-sm md:text-base text-warm/80 leading-relaxed list-decimal list-outside pl-5 marker:text-gold">
              {codeOfConduct.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
