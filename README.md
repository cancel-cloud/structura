# Structura — Architecture Website Template

<p align="center">
  <strong>A modern, production-ready architecture and real-estate website template built with Next.js 16, shadcn/ui, Tailwind CSS v4, and Motion.</strong>
</p>

## About

**Structura** is a refined, fully-featured website template for architecture studios, residential developers, and real-estate brands. It ships with a cinematic hero, portfolio and property listing pages, dynamic project detail pages, a blog, testimonials, FAQ, contact page, and a built-in documentation page — all styled with the shadcn design system and animated with subtle Motion scroll reveals.

Everything is content-driven: swap the data in `lib/` and the whole site updates. No design-system changes required.

## Features

- **Next.js 16 App Router** — server components, static generation, and route-level metadata
- **shadcn/ui design system** — Button, Card, Badge, Input, Accordion, Sheet, and more
- **Tailwind CSS v4** with design tokens (`bg-background`, `text-foreground`, `border-border`, …)
- **Motion animations** — load-in hero wordmark, staggered scroll reveals, count-up stats, hover effects
- **Dark / light mode** via `next-themes`
- **Content-driven pages** — properties and blog posts generated from typed data modules
- **Dynamic routes** — `/property-listings/[slug]` and `/blog/[slug]` pre-rendered as static pages
- **SEO-ready** — Open Graph, Twitter cards, sitemap-friendly metadata, and descriptive alt text
- **Responsive layout** — mobile sheet navigation, fluid typography, adaptive grids

## Tech Stack

| Layer     | Technology                                   |
| --------- | -------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language  | TypeScript                                   |
| Styling   | Tailwind CSS v4 + shadcn/ui                  |
| Animation | [Motion](https://motion.dev) (`motion/react`) |
| Theming   | `next-themes`                                |
| Icons     | `lucide-react`                               |
| Package   | bun (npm/pnpm/yarn compatible)               |

## Pages

| Route                        | Description                                                     |
| ---------------------------- | --------------------------------------------------------------- |
| `/`                          | Homepage — hero, stats, impact, selected work, approach, FAQ, reviews, CTA, footer |
| `/about-us`                  | Studio story, values, journey, and mission                       |
| `/property-listings`         | Property grid with shadcn-styled project cards                   |
| `/property-listings/[slug]`  | Dynamic project detail page (pre-rendered)                       |
| `/blog`                      | Blog list with featured article + grid                           |
| `/blog/[slug]`               | Dynamic article detail page (pre-rendered)                       |
| `/contact`                   | Contact page with inquiry form and details                       |
| `/docs`                      | Built-in template documentation                                  |

## Getting Started

### Prerequisites

- Node.js 20+ (or [bun](https://bun.sh))
- Git

### Install

```bash
bun install        # or: npm install / pnpm install / yarn install
```

### Run the dev server

```bash
bun run dev        # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build & checks

```bash
bun run build       # production build (type-checks + static generation)
bun run lint        # ESLint
bun run typecheck   # TypeScript --noEmit
bun run format      # Prettier
```

## Project Structure

```
app/                  # App Router pages & route segments
  page.tsx            # Homepage
  about-us/           # About page
  property-listings/  # List + [slug] detail pages
  blog/               # List + [slug] detail pages
  contact/            # Contact page
  docs/               # Template documentation page
  layout.tsx          # Root layout & metadata
  globals.css         # Tailwind + design tokens (keep clean)
components/
  ui/                 # shadcn primitives (button, card, accordion, sheet, …)
  structura-logo.tsx  # Brand logo (mask + wordmark)
  site-navbar.tsx     # Navigation bar
  hero-section.tsx    # Cinematic hero with animated wordmark
  cta-footer-section.tsx # Dark CTA + footer
  review-section.tsx  # Testimonials carousel
  faq-section.tsx     # Animated FAQ
  approach-section.tsx
  scroll-reveal.tsx   # Motion reveal helpers (RevealGroup / RevealItem)
lib/
  properties.ts       # Property data + types
  blog-posts.ts       # Blog data + types
  site-navigation.ts  # Nav links
  utils.ts            # cn() helper
public/
  logo.svg            # Brand mark used by the logo component
```

## Customizing Content

| What           | Where to edit                                  |
| -------------- | ---------------------------------------------- |
| Properties     | `lib/properties.ts` — titles, prices, specs, galleries |
| Blog posts     | `lib/blog-posts.ts` — slugs, images, excerpts   |
| Navigation     | `lib/site-navigation.ts` + `components/site-navbar.tsx` |
| Brand / logo   | `components/structura-logo.tsx` + `public/logo.svg` |
| Contact details| `app/contact/page.tsx` + `components/cta-footer-section.tsx` |
| Site metadata  | `app/layout.tsx` (`siteName`, `siteUrl`, keywords) |

> Image domains are whitelisted in `next.config.ts` — add your own host there if you use external images.

## Deployment

Deploy anywhere Next.js runs — [Vercel](https://vercel.com), Netlify, Cloudflare Pages, or a Node server.

```bash
bun run build
bun run start
```

For Vercel: import the repo, or run `npx vercel`. The build is fully static-ready for the listed routes.

## License

This template is free to use for personal and commercial projects. Modify it, ship it, and make it your own.
