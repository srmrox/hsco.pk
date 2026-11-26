# hsco.pk

The Hina Shahrukh & Co. website, rebuilt from the WordPress site as a static site with [Astro](https://astro.build).
Every page has the same address as before (for example `/services/tax-advisory/`).

## Run it

Needs Node.js 18.20 or newer.

```
npm install
npm run dev       # live preview at http://localhost:4321
npm run build     # builds the finished site into the dist folder
npm run preview   # serves the built dist folder
```

To publish, upload the contents of `dist` to the web host (any static host works: the current LiteSpeed hosting, Cloudflare Pages, Netlify).

## Where things are

| To change | Edit |
| --- | --- |
| Colours, fonts, sizes, spacing | `src/styles/tokens.css` |
| Menu, phone, email, address, footer links | `src/data/site.ts` |
| The 8 services (text on `/services/` and each service page) | `src/data/services.ts` |
| Sectors and client logos on `/industries/` | `src/data/industries.ts` (logos in `public/images/clients`) |
| Countries and offices on the home page map | `src/data/map.ts` |
| Page text | `src/pages/<page>.astro` |
| Images | `public/images` |

## Building blocks

All pages are made from these components. Use them for new pages so everything stays consistent.

**Layout** (`src/components/layout`, `src/layouts`)
- `BaseLayout`: page wrapper (head tags, header, footer)
- `SiteHeader`, `SiteFooter`, `QuickEmailForm`

**UI** (`src/components/ui`)
- `Button` (primary, outline, white, ghost) and `ButtonGroup`
- `Section`: full-width band (white, surface, textured, black) with a set width
- `SectionHeading`: kicker + heading + lead
- `Kicker`, `Eyebrow`, `Tag`
- `Card`: the standard card with the red top edge (sizes md and sm, optional link and number)
- `Grid`: 2, 3 or 4 columns that collapse on small screens
- `BulletList` (dots or squares), `Callout`, `Prose` (body or legal), `Stats`
- `ProfileCard`, `TimelineItem`, `ArticleCard`, `InfoBox`

**Sections** (`src/components/sections`)
- `PageHero`: navy page banner
- `CtaBand`: navy closing band with buttons
- `FeatureSplit`: text beside a picture
- `CoverTile`, `WorldMap`: home page
- `ServiceSideNav`: side menu on service pages
- `IndustryExplorer`: sector cards and client logo filter

## Form

The footer "Quick Email" form needs a form service. Put its URL in `formEndpoint` in `src/data/site.ts`.
Until then the form opens the visitor's email app, addressed to mail@hsco.pk.
