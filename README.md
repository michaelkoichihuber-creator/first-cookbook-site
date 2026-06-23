# Washoku — Japanese Home Cooking

A Vite + React cookbook site focused on Japanese home cooking (*katei ryori*). Built as a clean, production-quality static site ready to deploy on Vercel.

---

## Running locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Project structure

```
src/
├── components/         # Reusable UI components
│   ├── ArticleCard     # Card for tips/notes content
│   ├── Footer          # Site footer with nav links
│   ├── Navbar          # Sticky top navigation with mobile hamburger
│   ├── RecipeCard      # Summary card shown in grids
│   ├── SectionHeader   # Eyebrow + h1 + subtitle pattern
│   └── TagList         # Pill tag list used in cards and detail views
│
├── layouts/
│   └── PageLayout      # Wraps Navbar + main + Footer around every page
│
├── pages/
│   ├── Home            # Hero, values pillars, featured recipes, seasons, learn promo
│   ├── Recipes         # Category-filtered recipe listing — cards + detailed sections
│   ├── Notes           # Techniques, philosophy, pantry guide
│   ├── About           # Philosophy and story
│   └── NotFound        # 404 catch-all
│
├── data/
│   ├── recipes.js      # All recipe data (title, kanji, ingredients, steps, notes)
│   ├── pantry.js       # Pantry staples with descriptions and tips
│   ├── tips.js         # Beginner techniques and cooking philosophy notes
│   ├── seasons.js      # Seasonal ingredient highlights and dish ideas
│   └── index.js        # Barrel export for all data files
│
└── index.css           # Global reset, CSS custom properties, .container utility
```

---

## v2 Structure choices

### Why a `layouts/` folder?
`PageLayout` owns `<Navbar>`, `<main>`, and `<Footer>` in one place. `App.jsx` just declares routes. This means the chrome is never accidentally left out, and changing the layout once updates every route.

### Why a `SectionHeader` component?
Every page had the same three-element pattern: a small uppercase eyebrow label, an `<h1>`, and a subtitle. Extracting it removes repetition, makes the hierarchy consistent across pages, and lets size variants (default / xl) be controlled from a single place.

### Why a `TagList` component?
Tags appear identically in `RecipeCard` and in recipe detail sections. Pulling them into `TagList` means the pill style is defined once and both locations stay in sync automatically.

### Why an `ArticleCard` component?
The Notes page needed a flexible card for tips and philosophy entries. `ArticleCard` accepts `{ title, category, body }` — simple enough to reuse for any future content type without modification.

### Why separate data files?
Keeping `recipes.js`, `pantry.js`, `tips.js`, and `seasons.js` as plain JS exports makes the content portable. Swapping them for an API call or CMS response later requires changing one import line per page. It also makes components obviously presentational — they receive data and render it; they hold none of it.

### Why a `data/index.js` barrel?
A single barrel export means pages import from `'../data'` rather than specifying individual file paths. If a file is renamed or split later, only the barrel changes.

### Why a category filter on the Recipes page?
With nine recipes spanning eight categories, a flat unfiltered list becomes hard to scan. The filter uses `useState` and a derived list — no external library, no URL state for now. It also filters the full detail sections below, so the page stays coherent when narrowed.

### Why a mobile hamburger menu?
The previous nav stacked vertically on small screens, which worked but looked unfinished. The hamburger toggle uses `useState` in the Navbar component — the menu opens and closes, and each link calls `close()` on click so the menu does not stay open after navigation.

### Why a `seasons.js` data file?
Seasonality is central to Japanese cooking philosophy (*shun*). Having it in a dedicated data file makes it easy to enrich later — swap in current-month highlights, add recipe links, or pull it from a CMS — without touching the component that renders it.

### Why a `NotFound` page?
The `vercel.json` rewrite rule sends all unmatched paths to `index.html`, which means React Router handles 404s. Without a catch-all route, an unmatched path renders nothing. The `NotFound` component gives users a clear signal and a way back.

### Why `.container` as a global utility?
`max-width: 960px; margin: auto; padding: 0 2rem` was repeated verbatim in every page's CSS. Moving it to a single `.container` class in `index.css` eliminates that duplication and provides a consistent page-width cap. Pages opt in per-section, which also allows full-bleed sections (like the dark seasons strip) to break out of the container while still using it for their inner content.

---

## SEO

Basic SEO is implemented without any external dependency.

**Per-page titles and descriptions** — a `useMeta` hook (`src/utils/useMeta.js`) uses `useEffect` to write `document.title` and update the `<meta name="description">` tag on every route change. Each page supplies its own title string and description.

**Open Graph and Twitter Card** — static tags in `index.html` cover the site-level share preview (og:type, og:site\_name, og:title, og:description, twitter:card). They use the homepage copy as a sensible default for any page that gets shared before its own OG tags can be read.

**Semantic HTML** — every page uses proper landmark elements: `<header>` and `<nav>` in Navbar, `<main>` in PageLayout, `<section>` for thematic groupings, `<article>` for self-contained recipe cards in the detail view, and `<footer>` in Footer. Heading hierarchy is h1 (via SectionHeader) → h2 (section titles) → h3 (column labels within a recipe), with no skipped levels.

**ARIA** — decorative kanji characters have `aria-hidden="true"`. The mobile nav toggle has `aria-label` and `aria-expanded`. The category filter group has `role="group"` with `aria-label`.

---

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the repo in Vercel — it auto-detects Vite.
3. Build command: `npm run build` · Output directory: `dist`
4. Deploy. No environment variables required.

The `vercel.json` at the repo root handles client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
