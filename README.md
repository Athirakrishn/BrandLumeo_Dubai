# Brandlumeo — Digital Marketing Agency Website

Full-stack **Next.js** website for **Brandlumeo**, UAE's Premier Growth Agency.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, clients, services, portfolio, team, blog, FAQ |
| `/services` | Services — service cards with photos, process, FAQ |
| `/about` | About — story, office photos, leadership team |
| `/portfolio` | Portfolio — case study cards with client details |
| `/blog` | Blog — article grid with thumbnails |
| `/contact` | Contact — form + office photo + info cards |

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/           # Next.js App Router pages & layout
  components/    # React components
  context/       # Client providers (logo intro)
  data/          # siteData.js — all content & images
public/
  images/        # Static assets (logo, team, clients, sections)
```

## Customize Content

Edit `src/data/siteData.js` for all text, links, images, portfolio, and blog posts.

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js host that supports Next.js.
