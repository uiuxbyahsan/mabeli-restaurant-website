# Cafe Restoran Mabelli — Website

A premium, moody, single-page restaurant site for **Cafe Restoran Mabelli**
(Aria · Ilidža, Sarajevo, Bosnia & Herzegovina).

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Requires Node 18.17+ (developed on Node 22).

## Stack & structure

```
app/
  layout.tsx        # metadata, Satoshi <link>, smooth-scroll provider
  page.tsx          # section composition
  globals.css       # Tailwind layers, Imbue @font-face, theme tokens, helpers
components/
  Navbar.tsx        # sticky, transparent→solid, mobile drawer
  Hero.tsx          # HD video bg + scroll parallax + display headline
  About.tsx         # welcome strip + gold M divider
  SignatureDishes.tsx
  menu/             # MenuSection · MenuTabs · MenuList · MenuItem
  Gallery.tsx       # center-focus coverflow carousel + lightbox
  InstagramFeed.tsx # full-bleed social tile row
  Reservation.tsx   # form (success animation) + contact card
  Footer.tsx
  SmoothScroll.tsx  # Lenis
  ui/               # Button · LogoMark · SectionDivider · ScrollCue
lib/
  menuData.ts       # FULL menu — edit here to update the live menu
  siteData.ts       # contact info, signature dishes, gallery
  motion.ts         # shared Framer Motion variants
  scroll.ts         # scroll-lock helper
public/
  img/              # real Mabelli photography + logo + category stock
  video/hero-hd.mp4 # hero background loop (1366×720)
  fonts/Imbue.woff2 # self-hosted display serif
```

## Editing content

- **Menu** → `lib/menuData.ts` (categories → groups → items; price in KM).
- **Contact / hours / signature dishes / gallery** → `lib/siteData.ts`.

## Brand

- Palette: graphite `#1A1A1A / #232323 / #2B2B2B`, gold/champagne `#C9A86A / #D4B98C`,
  off-white `#F5F3EF` — defined in `tailwind.config.ts`.
- Type: **Imbue** — tall, high-contrast variable display serif — used uppercase with
  wide tracking for the hero and all section titles (`.display-title`). Self-hosted
  via `@font-face` from `public/fonts/Imbue.woff2` (subset to latin + latin-ext for
  Bosnian diacritics). **Satoshi** (all body/UI: nav, buttons, menu names + prices,
  form labels) is loaded from the Fontshare CDN via a `<link>` in the root layout.

## Real vs. placeholder data

**Real / confirmed**
- Full menu and KM prices (as supplied by the client).
- Phone `+387 61 640 022`, email `mabellirestoran@gmail.com`,
  Instagram `@caferestoranmabelli`, address Blažujski drum 2c, Ilidža (Aria), Sarajevo.
- Photography: real Mabelli dishes/interior power the Signature, About and menu-hover
  imagery (`public/img/dish-*`, `venue-*`). The **Gallery** uses licensed Unsplash stock
  (`public/img/gal-*.jpg`) for a consistent dark, moody look.

**Placeholder — confirm with client**
- **Opening hours** in `lib/siteData.ts` (`SITE.hours`) are illustrative.
- The **reservation form is front-end only** — it shows a success animation but
  does not send anywhere. Wire it to an email service / booking API, or keep the
  phone CTA, before launch.

## Notes

- Smooth scrolling uses Lenis; all entrance/parallax motion respects
  `prefers-reduced-motion`.
- Images use `next/image`; the hero uses a muted autoplay `<video>` with a poster.
