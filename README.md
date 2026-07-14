# Sachin Mehra — Portfolio

Production-ready personal portfolio for a .NET / Angular software engineer.
Built with **Next.js (App Router) · React · TypeScript · Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Single-page portfolio (hero, about, work, experience, skills, approach, education, contact) |
| `/projects/enterprise-task-management` | Case study |
| `/projects/expense-tracker` | Case study |
| `/resume` | Web résumé with **Download PDF** (browser print) |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Configuration

Edit [`content/profile.ts`](content/profile.ts) → `profile.config`:

- `resumePdfPath` — path to a real PDF if you add one to `public/` (the résumé
  route currently uses print-to-PDF, no binary required).
- `contactEndpoint` — set a POST endpoint for the contact form; empty falls back
  to a `mailto:` link.
- `showPhone` — off by default (phone stays off public pages).
- `openToWork` — off by default.

Set the deployed origin for absolute URLs / OG / sitemap:

```bash
# .env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Content

All copy lives in typed files under [`content/`](content/) — `profile`,
`experience`, `projects`, `skills`, `education`, `navigation`. Pages are
data-driven; there is no duplicated copy.

## Design system

See [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). Tokens: `styles/tokens.css`
(CSS variables) ↔ `lib/tokens.ts` (typed) ↔ `styles/globals.css` (Tailwind
`@theme`).

## Deploy

Deploy to Vercel or any Node host. Set `NEXT_PUBLIC_SITE_URL` in the environment.

---

*Built with Next.js and TypeScript — implementation stack only; not presented as
professional experience.*
