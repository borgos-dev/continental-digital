# Continental Digital — Landing Page Notes

## What this is
A landing page for **Continental Digital**, an agency that gets local shops and
boutiques in Douala, Cameroon onto Google Maps and Google Search (claim,
verify, and build out Google Business Profiles). This page is the client-facing
site — it also doubles as the "agency website" URL needed for Google's agency
signup flow (`business.google.com/agencysignup`).

- WhatsApp: `+237679769701` *(placeholder — real number still needed, see Open items)*
- Location: Douala, Cameroon

## Stack
- Next.js 16.2.10 (App Router, Turbopack)
- React 19.2.4, TypeScript
- Tailwind CSS v4 (`@theme inline` tokens, canonical fractional spacing scale)
- lucide-react icons
- `next/font/google`: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels)
- Real photography from Pexels via `next/image` + `remotePatterns`

## Repo / deployment
- GitHub: `https://github.com/borgos-dev/continental-digital` (branch `main`)
  - Pushed under the `borgos-dev` GitHub account (the default local `gh` account,
    `gustavojonhson7-commits`, didn't have write access — had to `gh auth switch`).
- Vercel: attempted via the `deploy_to_vercel` MCP tool, blocked by a 403
  ("You don't have permission to create a project.") on the `akiy's projects`
  team, even though existing projects are visible/listed there. Likely a team
  role restriction (only Owner/Admin can create new projects). **User said they
  deployed it manually via the Vercel dashboard instead** — pushes to `main`
  will auto-redeploy only if that Vercel project is linked to this GitHub repo.
- No `.env` file exists or is needed — no API keys, database, or secrets
  anywhere in the app. `next.config.ts` only whitelists `images.pexels.com` as
  a public image host.

## Page structure (`src/app/page.tsx`)
`Header → Hero → PhotoBand → Features → HowItWorks → Contact → Footer`

### Header
Sticky-less top bar: brand mark + "Continental Digital / DOUALA", WhatsApp CTA button.

### Hero
- Eyebrow: "Local Search · Douala"
- Headline (updated this session): **"Your shop is real. Let's put it on the map."**
  (replaced the original "On Google, it doesn't exist yet." — reframed from a
  negative to a line that plays on Google Maps directly)
- WhatsApp CTA + "See how it works" anchor link
- `MapStage` interactive demo below the fold

### MapStage (`src/components/MapStage.tsx`, client component)
Interactive "Invisible → Found on Google" toggle demo. Auto-triggers to
"Found" after 1.3s (skipped if `prefers-reduced-motion`), or manually via the
toggle switch. Went through two redesigns this session:

1. **v1 → v2**: the background was a flat 32-block CSS grid meant to suggest a
   map. Added a faint road-line texture and varied block opacity, and made the
   pin's ping/radar animation loop infinitely instead of stopping after 2 cycles
   (it was going static a few seconds after load, which read as "no animation").
2. **v2 → v3 (current)**: the block-grid never actually read as a map, so it
   was replaced entirely with a **real embedded Google Map** (Bonapriso,
   Douala) via the no-API-key iframe embed
   (`https://maps.google.com/maps?q=...&output=embed`). The Invisible/Found
   toggle now applies a CSS `grayscale`/`brightness` filter directly to the
   iframe instead of to synthetic blocks. Pin drop, listing card ("Boutique
   Faith", 4.8★, VERIFIED badge), and ping animation are unchanged, layered on
   top of the real map.

### PhotoBand (`src/components/PhotoBand.tsx`)
Reworked this session from a single full-bleed photo band into a **two-column
"Before & After" grid**:
- **Left**: the shop's real photo, full-bleed, captioned "Today — Real,
  welcoming, easy to miss online."
- **Right**: a mockup of that same shop's **Google Business Profile listing**
  (same photo, VERIFIED badge, star rating, review count, category, open
  hours, address, phone, "Directions"/"Website" action buttons) — styled to
  read as an authentic Google Maps/Search listing card.
- Uses the same Pexels photo (`33852486`, elegant restaurant dining room) on
  both sides so it reads as *one* shop shown two ways, not two different
  places.

### Features
6-item bento grid ("What's included"): photos, full profile, products &
services, posts & updates, review link, message button. First card uses a
real Pexels photo as its background.

### HowItWorks
4-step numbered process: visit shop → claim & verify → build it out → go live.

### Contact
Final CTA card: WhatsApp button + phone display.

### Footer
Minimal copyright line.

## Design tokens (`src/app/globals.css`)
Dark "ink" theme (`#13231d` base) with cream text, plus accent colors:
`pin` (red-orange, primary CTA/accent), `gold` (ratings/process), `teal`
(verified/features), `paper` (light card backgrounds for contrast sections).
Custom `map-ping` keyframe for the MapStage pulse animation.

## Verification approach
No browser automation tool is available in this environment, so all UI
changes are verified via `npm run build` (compiles + typechecks cleanly) and,
earlier, raw HTTP/HTML checks against the dev server — not actual visual
screenshots. Visual issues (flat map, missing animation, headline copy) were
only caught because the user tested it live and reported back with
screenshots/feedback.

## Open items
1. **Real WhatsApp number** — still need the actual number to replace the
   placeholder `+237679769701` in `src/lib/constants.ts` (used by the header,
   hero, and contact CTAs).
2. **Vercel ↔ GitHub link** — confirm whether the Vercel project the user
   deployed manually is linked to `borgos-dev/continental-digital` for
   auto-redeploy on push, or whether each change needs a manual redeploy from
   the dashboard.
