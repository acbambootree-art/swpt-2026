# SWPT — South West Poker Tournament Website

Marketing site for the **SWPT — South West Poker Tournament**, Guang'an Stop (May 8–13, 2026 at the **Grand Rezen** in Yuechi, Guang'an, Sichuan).

Built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript**.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm start
```

## Project structure

```
public/
  swpt-logo.png          # SWPT wordmark + panda mascot
  schedule.jpg           # Full English schedule, 6 days, 46 events
  hero-bg.mp4            # Hero background video
  tournament-rules.rtf   # Source rules text (kept for reference; not served)
  chips/                 # Branded SWPT chip product photography
    stack.png            # Hero chip + dice composition
    chip-felt-glass.png  # Chip on green felt with brandy
    chip-felt-edge.png   # Chip standing on its edge in the hall
    chip-hero.png        # Floating chips composition
    chips-falling.png    # Cascading chips on black
    aces-chip.png        # Pocket aces resting on a chip
  hotel/                 # Grand Rezen photography
    sunset.webp, lake.webp, night.webp
    lobby.jpeg, suite.jpeg
src/
  app/
    layout.tsx           # Fonts (Cinzel + Inter), metadata, OG tags
    page.tsx             # Composes all sections
    globals.css          # Tailwind v4 @theme tokens + animation system
  components/
    Nav.tsx              # Sticky translucent header, active-section indicator, mobile menu
    Hero.tsx             # Two-column hero — copy + branded chip stack centerpiece
    HeroParticles.tsx    # Drifting gold particles
    Marquee.tsx          # Slim ticker strip
    About.tsx            # Series intro + stats grid
    Atmosphere.tsx       # Cinematic brand-imagery photo collage
    Schedule.tsx         # Schedule image + click-to-zoom lightbox + download
    Lightbox.tsx         # Reusable modal overlay (Esc to close, focus trap)
    Venue.tsx            # Grand Rezen photo collage + amenities strip
    Rules.tsx            # Event rules + player code of conduct
    Contact.tsx          # QR placeholders + event facts
    Reveal.tsx           # IntersectionObserver scroll-reveal wrapper (polymorphic `as`)
    Footer.tsx           # Copyright + nav links + hairline divider
```

## Deploying

- **Vercel**: `npx vercel` from this folder, follow prompts. Zero config.
- **Netlify**: connect the repo, build command `npm run build`, publish directory `.next` (Netlify's Next.js plugin handles the rest).

## Replace before launch

- [ ] Real **registration URL** for the *Register Now* button (currently anchors to `#contact`).
- [ ] Real **WeChat QR images** in `public/` — drop in `customer-service-qr.png` and `public-account-qr.png`, then swap the placeholder boxes in `src/components/Contact.tsx`.
- [ ] Confirm official English **name spellings** ("Grand Rezen", "Yuechi", "Longhu Park", "Yuechi Cuihu Championship").
- [ ] Optional: dedicated **favicon set** (32×32 + 180×180) and a 1200×630 **OG share card**.
- [ ] Optional: **social links** (WeChat Channels, Douyin, X, Instagram) added to the footer.
- [ ] Optional: **analytics snippet** (Plausible / GA) added to `src/app/layout.tsx`.

## Asset attribution

All imagery in `public/` is user-supplied — `swpt-logo.png`, `schedule.jpg`, `hero-bg.mp4`, the SWPT brand photography in `chips/`, and the Grand Rezen hotel photography in `hotel/`. No images from the source WeChat article are reused.
