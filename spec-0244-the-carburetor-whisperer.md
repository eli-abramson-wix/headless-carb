# The Carburetor Whisperer

> One man, every carburetor ever made

**HEADLESS DAY brief spec-0244** · Category: **Vehicles & Auto** · Difficulty: **easy**

A one-man workshop in rural Ohio rebuilding carburetors mailed in from around the world. The wall of jets is alphabetized, the turnaround is honest, and the YouTube channel pays the heating bill.

---

## Requirements

Your build is judged against these. All of them.

- [ ] Mail-in service page with how-it-works steps
- [ ] Pricing page by carburetor type
- [ ] Service request form with shipping instructions
- [ ] Workshop gallery — minimum 6 images
- [ ] Mobile-first responsive design

## Art direction

| | |
|---|---|
| Mood | greasy · expert · analog · folksy |
| Primary color | `#2F3E46` |
| Accent color | `#E07A5F` |

Treat the palette as a starting point — interpret the mood, don't paint by numbers.

## Bonus challenge

Add a 'currently on the bench' status section updated from the CMS

---

# Creative brief

A richer brief to build from — structure, content, design, SEO, and performance. Hit the requirements above; let this guide how.

## Audience & voice

**Audience.** Vintage-car, motorcycle, and small-engine owners worldwide — restorers, weekend mechanics, and barn-find rescuers who've already tried the cheap rebuild kit, watched the YouTube channel, and decided to just mail the carburetor to the one guy who actually knows it.

**Voice.** plainspoken · grease-under-the-nails · patient · unhurried · quietly expert

**Avoid.** corporate polish, urgency hype, buzzwords, salesy adjectives, exclamation points, anything that sounds like a chain shop

## Hero

**Headline.** “Mail me the carburetor. I'll mail it back working.”

**Layout.** single-object hero with a working-hands photograph and a stamped headline

**Focal / LCP element.** A warm-lit macro photo of grease-stained hands holding a freshly rebuilt carburetor over the bench

**Treatment.** Slightly condensed industrial display caps, set like a stamped metal tag, with the second line in smaller Source Sans 3 beneath

**On load.** Hero image fades in first, then the stamped headline settles in with a 2px downward drop and the order button fades up last, staggered over ~500ms; with prefers-reduced-motion the final composed state renders immediately with no movement

**Atmosphere.** Deep slate-green workbench surface with a faint pegboard grid and a soft warm key light from the left

**Primary CTA.** Start a service request

**Mobile.** Image crops to a tighter square macro, headline stacks above it, and a sticky bottom bar carries the service-request button

**The one thing they'll remember.** The honest, low-key promise that you can trust the mail with your part and one person will personally make it run again

## Sitemap (7 pages)

| Page | Route | Purpose | CTA |
|---|---|---|---|
| Home | `/` | Explain in plain terms what a one-man carburetor shop does and point you to the mail-in process | Start a service request |
| How Mail-In Works | `/how-it-works` | Walk through the four steps from boxing up the carb to getting it back, set turnaround expectations | Start a service request |
| Pricing by Type | `/pricing` | CMS-driven price list by carburetor type so there are no surprises before you ship | Start a service request |
| The Workshop | `/workshop` | Origin story plus a gallery of the bench, the alphabetized jet wall, and carbs mid-rebuild | See pricing |
| On the Bench | `/on-the-bench` | Live CMS queue showing what's being worked on right now so you know where you'd land in line | Start a service request |
| Send It In | `/service-request` | Service request form that captures the carb details and returns shipping instructions | Send the request |
| Questions | `/faq` | Answer the shipping, turnaround, and what-can-be-saved questions before they email | Start a service request |

## Homepage flow

1. **Hero** — Mail me the carburetor. I'll mail it back working.
2. **What I Do** — One bench, one guy, and a wall of jets sorted A to Z. If it mixes fuel and air, I've probably had one apart.
3. **How it works steps** — Box it up, fill out the form, ship it, get it back rebuilt. No appointment, no drop-off, no waiting room.
4. **On the bench right now** — Here's what's clamped in the vise this week, and roughly where your carb would land in line.
5. **Pricing preview** — Flat prices by type. You'll know the number before the box leaves your porch.
6. **From people who shipped one in** — Folks who trusted the mail, and what showed up in the return box.
7. **The channel** — The teardown videos pay the heating bill. They also show you exactly how your carb gets fixed.
8. **Service request band** — Ready to send it in? Start the request and I'll mail you where to ship.

## Content to create

Seed these into the CMS — counts and sample rows are the minimum bar.

- **8× CarbType** (on Pricing by Type) — fields: typeName, vehicleKind, priceFlat, turnaroundDays, whatsIncluded, commonModels, image
  - e.g. Single-Barrel Downdraft | Classic Car | $145 | 10-14 days | Full teardown, ultrasonic clean, new gaskets and needle-and-seat, jets verified against spec, bench-flow test | Rochester Monojet, Holley 1920, Carter YF
  - e.g. Two-Barrel Progressive | Classic Car | $185 | 12-16 days | Complete rebuild, accelerator pump rebuild, choke pull-off check, throttle shaft bushing inspection, flow-tested both barrels | Weber 32/36 DGV, Holley 2300, Rochester 2GC
- **1× StoryBlock** (on The Workshop) — fields: heading, body
  - e.g. The shop started the way most stubborn things do: I couldn't get a carburetor to run right and nobody nearby would touch it. So I learned. Then a neighbor brought theirs, then a guy two counties over, then a package showed up from Oregon with a note that said the dealer told him it was unfixable. It wasn't. Twenty-some years later I work out of the same garage in rural Ohio, alone, with a wall of jets alphabetized so I can put my hand on the right one without looking. I post the teardowns on YouTube, partly to show people what's actually wrong with their carb and partly because the ad money pays the heating bill through an Ohio winter. I don't take everything. I take what I can do right. And I tell you the truth about what a carburetor can and can't be brought back from before you ship it.
- **3× Review** (on Home) — fields: name, quote, detail
  - e.g. Dale Vornholt | 'Shipped him a seized Holley off a '68 truck. Came back cleaner than the day it left the factory and it fired on the second crank.' | Mailed from Texas, classic truck restoration.
  - e.g. Priya Anand | 'He called before doing extra work, told me one casting was cracked, and sent it back with the bad part flagged instead of just charging me.' | Motorcycle carb, honest-diagnosis story.
  - e.g. Owen Brask | 'Watched his videos for a year before I trusted anybody with my Weber. Worth the wait. The bench-flow numbers came in the box.' | Vintage import, long-time channel viewer.

## Design system

**Aesthetic direction.** Industrial-analog: a workbench aesthetic of stamped labels, drawer fronts, and shop-manual layouts, because the whole pitch is one set of expert hands and a wall of parts, not a slick franchise.

**Spatial composition.** Dense, grid-based pegboard layout with hairline dividers and deliberate label-and-value pairings, like reading a parts diagram; tight gutters and boxed sections over airy negative space.

**Typography.** Display: `Fjalla One` · Body: `Source Sans 3` · Fjalla One (single weight) all-caps for headlines and stamped price/turnaround numerals against Source Sans 3 400/600 body; contrast comes from its slightly condensed, sturdy display caps versus the lighter, plainer body weights
_Source:_ Fjalla One (Google Fonts / @fontsource); Source Sans 3 (Google Fonts / @fontsource) for body
_Why:_ Fjalla One's upright, slightly condensed caps read like a stamped parts-tag or shop-manual heading and pack tightly into the dense pegboard grid; Source Sans 3 keeps the technical descriptions and shipping steps plainly legible without fuss.

**Color system** — paste into your Tailwind v4 `@theme`:

```css
@theme {
  --color-background: #F2EFEA;
  --color-surface: #FBFAF7;
  --color-text: #23292B;
  --color-text-muted: #566064;
  --color-border: #CBD0CC;
  --color-primary: #2F3E46;
  --color-accent: #C2502F;
  --color-dark: #1C2528;
  --color-on-dark: #F2EFEA;
}
```

**Signature device.** A stamped metal parts-tag motif: section headers and price/turnaround values sit on a small embossed tag with a punched corner hole, the same tag style reused sitewide.

**Motion.** CSS-first and minimal: tags settle in with a tiny drop-shadow lift on entry and a subtle hover press; no parallax, no autoplay video; reduced-motion renders everything static.

**Imagery.** Warm, honest macro and mid-shot photography of real shop work: grease, brass jets, cast-aluminum bodies, the bench under tungsten light, slight grain, no studio gloss.

**Avoid in imagery.** cool blue color grading · glossy spinning-car stock photos · showroom lighting · staged smiling-mechanic stock · neon or chrome flourishes

## Conversion & forms

**Primary action.** Start a service request — via @wix/data (CMS service-request inquiry collection) → `/service-request`

**Repeat at.** hero · how-it-works band · mobile sticky bar · footer

**Secondary (ghost).** Watch a teardown

**Form fields.** name, email, vehicleOrEngine, carbMakeAndModel, symptomsDescription, photosNote

**Success message.** “Got it. I'll email you the shipping address and how to pack it within a day or so. Don't ship it until you hear from me.”

**Reassurance.** No payment now. I look at what you've got, confirm I can do it, and send shipping instructions before anything leaves your hands.

## FAQ

Real questions to answer on the site (and feed FAQPage JSON-LD).

**How do I ship a carburetor safely?**

Drain the fuel, let it dry, wrap it in a couple of rags or bubble wrap, and box it snug so it can't rattle. I'll email you the address and any specifics once you send the request. Don't mail it before you hear back from me.

**How long is the turnaround?**

Most rebuilds run ten to sixteen days from the day your box lands on the bench, depending on type and how many are ahead of you. The On the Bench page shows the current line.

**What if it can't be saved?**

I'll tell you straight. If a casting's cracked or a throttle bore is worn past spec, I'll call before doing more work and send it back with the bad part flagged. I won't charge you for a rebuild that won't hold.

**Do you work on every carburetor?**

Just about. Cars, motorcycles, tractors, outboards, small engines. If it's truly oddball, send the request with photos and I'll tell you honestly whether it's one I can do right.

**Do I pay before I ship?**

No. You send the request, I confirm I can do the job and quote the flat price for your type, then you ship. Payment comes after the rebuild, before it goes back in the mail.

**Can't I just use a rebuild kit myself?**

Plenty of people do, and the videos walk you through it. But a kit doesn't true a warped flange, check shaft bushings, or flow-test the result. That's the part I get paid for.

## SEO

**Primary keyword.** mail-in carburetor rebuild

**Secondary.** carburetor restoration service · classic car carburetor rebuild · motorcycle carburetor cleaning · send in carburetor repair

**Schema.org type.** `AutomotiveBusiness`

**JSON-LD per page.** AutomotiveBusiness (Pricing by Type) · OfferCatalog (Pricing by Type) · AutomotiveBusiness (The Workshop) · FAQPage (Questions)

**Business facts.** rural Ohio · Bench hours Mon-Fri, by mail year-round · $$ · est. 2003

**Differentiators.** One-man shop, every carburetor type accepted by mail, flat pricing by type, honest tell-you-if-it-can't-be-saved diagnosis, bench-flow tested

**Socials.** @carburetorwhisperer · youtube.com/@thecarburetorwhisperer

## Performance & accessibility

**LCP element.** Hero macro photo of grease-stained hands holding a rebuilt carburetor

**Top moves.**
- Serve the hero as a responsive AVIF/WebP with explicit width/height and fetchpriority=high
- Self-host Fjalla One and Source Sans 3 as preloaded woff2 subsets with font-display:swap
- Render the On the Bench queue and pricing list server-side from the CMS so no client fetch blocks first paint

**Hydration plan.**
- `MobileServiceStickyBar` → `client:load` (Above-fold per-visitor conversion control that must be tappable immediately)
- `NavRequestButton` → `client:load` (Primary conversion in the header, interactive on first paint)
- `ServiceRequestForm` → `client:idle` (Below-fold form can defer hydration until the main thread is free)
- `GalleryLightbox` → `client:visible` (Workshop gallery interactions only need to hydrate as the gallery scrolls into view)

**Defer as facades.** YouTube teardown videos loaded as poster-image facades that swap to the player on click · Optional shop-location map loaded as a static image facade that goes interactive on tap

**Targets.** LCP < 2.5s · INP < 200ms · CLS < 0.1 · Lighthouse mobile ≥ 90

**Accessibility baseline.** Text contrast 4.5:1 · UI 3:1 · 44px tap targets · visible focus · honor reduced-motion · alt text required · semantic landmarks

---

# How to build this with Wix Headless

This is the same flow HEADLESS DAY itself was built and deployed with.
Any frontend framework works; the steps below use Astro + React.

## 1. Create the project

```bash
npm create @wix/new@latest my-site
cd my-site
```

This scaffolds an Astro project preconfigured with the `@wix/astro`
integration and links it to a new Wix Headless project in your account
(it will open a browser to authenticate). Already have a project?
Run `npm create @wix/new@latest -- headless link` inside it instead.

## 2. Develop

```bash
npm run dev
```

- Pages live in `src/pages/` (Astro routes). Use React islands
  (`client:load`) for interactive pieces.
- Talk to Wix from code with the SDK:

```ts
import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wix = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: import.meta.env.PUBLIC_WIX_CLIENT_ID }),
});
```

- Need content collections (menus, galleries, listings)? Create CMS
  collections in your project dashboard (CMS → Collections) and query
  them with `@wix/data`. Need bookings, stores, or events? Install the
  app on the project and use the matching `@wix/...` SDK module.
- Your OAuth client ID is in the dashboard under
  **Settings → Headless Settings → OAuth apps**; put it in `.env.local`
  as `PUBLIC_WIX_CLIENT_ID`.

## 3. Deploy on Wix

```bash
npx wix build
npx wix release
```

`release` prints your live `*.wix-site-host.com` URL. Redeploys are the
same two commands. That URL is what you submit.

## 4. Submit

Paste your live URL into **My Spec → Submit your build** on the
HEADLESS DAY site before 16:00. Good luck. 🎰
