# TBC Website Rebuild Plan
**Last updated: 2026-04-23**

---

## Workstream 1: Flickity Height Collapse Fix — DONE

Fixed all 9 slider files. Added `aspect-ratio: 5/3`, `min-height: 300px`, explicit `.flickity-viewport` heights, `overflow: hidden` + `object-fit: cover`. Added `is:inline` to all Flickity script tags to prevent Astro deduplication/bundling issues.

### Files Modified
- All 7 `slider-med-*.astro` — height fix + `is:inline` on scripts
- `Slot-HeroFullscreenSlider.astro` — Flickity viewport fix
- `main.css` — Flickity global safeguard

---

## Workstream 2: Fullscreen Immersive Image Layout — DONE

All sliders: `border-radius: 0`, `margin-right: 3px`, removed rounded corners, edge-to-edge images. Text sections keep padding.

### Files Modified
- All 7 slider components
- `container-fullwidth.astro` — removed horizontal padding
- `hero.astro` — removed rounded corners, reduced height to 45vh

---

## Workstream 3: Shop Hero Section — DONE

**Replaced 3D Shader Park blob with product slider hero.**

Split layout: text + glass card on left, Flickity product card slider on right. Stacks vertically on mobile/tablet. Auto-plays through 4 featured products. Animated glow orbs for ambient background. Staggered entrance animations on all elements.

### Files Created
- `src/components/hero-shop.astro` — product slider hero

### Dependencies
- `three` + `shader-park-core` installed but no longer used (can be removed)

---

## Workstream 4: Product Shop System — DONE

Full e-commerce flow: homepage slider → shop grid → product detail → Stripe checkout.

### Files Created
- `src/data/products.js` — shared product catalog (9 products, Stripe price IDs + payment links)
- `src/components/shop-slider.astro` — homepage compact product slider (6 featured)
- `src/components/shop-section.astro` — full grid section (deprecated, replaced by shop page)
- `src/pages/shop/index.astro` — full shop page with T-Shirts + Jumpers grids
- `src/pages/shop/[slug].astro` — 9 individual product detail pages with:
  - Image gallery with thumbnail switcher
  - Size selector (Alpine.js)
  - Stripe.js checkout for products with price IDs
  - Fallback payment link for others
  - "Other Colourways" related products section
- Product images downloaded to `public/shop/` from AS Colour CDN

### Stripe Integration
| Product | Payment Link | Status |
|---------|-------------|--------|
| Classic Oversized Tee — Purple Ink | `dRmfZggwtbCCeXF9Vs1wY04` | ✅ Live |
| Classic Oversized Tee — Orange Ink | `00w3cu0xvfSS8zh0kS1wY03` | ✅ Live |
| Classic Oversized Tee — White Stitch | `4gMfZgfsp9uu5n56Jg1wY02` | ✅ Live |
| Women's Crop Tee — Purple on Black | generic fallback | ⏳ Needs Stripe link |
| Women's Crop Tee — Orange on Black | generic fallback | ⏳ Needs Stripe link |
| Women's Crop Tee — Purple on Orchid | generic fallback | ⏳ Needs Stripe link |
| Box Hood — Purple on Black | generic fallback | ⏳ Needs Stripe link |
| Box Hood — Orange on Black | generic fallback | ⏳ Needs Stripe link |
| Box Hood — White Stitch | generic fallback | ⏳ Needs Stripe link |

---

## Workstream 5: SEO Overhaul — DONE

- All meta tags rebranded from "Aidxn Design" to "The Boogie Collective"
- OpenGraph title, description, image alt text updated
- Twitter handles updated to @theboogiecollective
- Site URL changed to theboogiecollective.com in astro.config.mjs
- Google Analytics tag preserved (G-4XMBLXEHPQ)

### Files Modified
- `src/layouts/Layout.astro`
- `astro.config.mjs`

---

## Workstream 6: Content Pages Rebuild — DONE

### Artists Page (`src/pages/artists.astro`)
- Removed all Aidxn Design web pricing content
- New hero with UV banners background
- Artist roster grid: Mood:Blend, Scrub Rat, Lucid Gecko, Green Euro, Jiver, Sassafras, Nemophilist, D-Lysergic
- SoundCloud links, genre tags, booking CTA

### Events Page (`src/pages/events.astro`)
- Removed all marketing management content
- Happiness Hill section (3-day festival, Jimna QLD) with gallery slider
- Happiness Valley section (single-night events) with gallery slider
- Past events image grid
- Event notification signup CTA

---

## Workstream 7: Navigation & Footer — DONE

### Navbar (`src/components/navbar/navbar.astro`)
- Changed fragment links (#artists, #events) to real page routes (/artists, /events, /immersive-structures, /shop)

### Footer (`src/components/detailed-footer.astro`)
- Removed Velocity7 and Aidxn Design references
- Rebranded to "The Boogie Collective"
- Updated footer links to match actual pages

---

## Still Needed

### Stripe Payment Links (from Aiden)
- [ ] Women's Crop Tee — Purple Ink on Black
- [ ] Women's Crop Tee — Orange Ink on Black
- [ ] Women's Crop Tee — Purple Ink on Orchid
- [ ] Box Hood — Purple Ink on Black
- [ ] Box Hood — Orange Ink on Black
- [ ] Box Hood — Premium White Stitch on Black

### Product Images (from Aiden)
- [ ] Orange ink tee photos (currently using blank AS Colour image)
- [ ] White stitch tee photos
- [ ] All jumper/hood photos with TBC print
- [ ] Women's crop tee photos with TBC print
- [ ] Orchid colourway crop tee photo

### Future Improvements
- [ ] **Supabase integration** — contact form storage, mailing list, product interest tracking
- [ ] **Performance** — image optimisation (convert remaining JPGs to WebP), lazy loading audit
- [ ] **UI polish** — mobile responsiveness audit, consistent spacing, hover states
- [ ] **Pricing display** — add prices to product cards when Aiden confirms pricing
- [ ] **About page** — currently has generic content, needs TBC-specific copy
- [ ] **Pricing page** — currently shows web design pricing, needs removal or repurpose
- [ ] **Success page** — update post-purchase confirmation page
- [ ] **Remove unused deps** — `three` and `shader-park-core` no longer used
- [ ] **Artist profile pages** — individual `/artists/[slug]` pages when content is ready
- [ ] **Music embeds** — Spotify/SoundCloud player integration on artist pages
- [ ] **Structured data** — Schema.org for products, events, music label
- [ ] **Newsletter/mailing list** — Supabase or third-party integration
- [ ] **Inventory tracking** — show out-of-stock sizes

---

## Build Info
- **Framework:** Astro 2.4.5
- **Styling:** Tailwind CSS 3.2.4
- **Interactivity:** Alpine.js, Flickity
- **Checkout:** Stripe Payment Links + Stripe.js
- **Deployment:** Netlify (configured)
- **Pages:** 37 total (home, shop index, 9 product pages, artists, events, about, contact, blog, etc.)
