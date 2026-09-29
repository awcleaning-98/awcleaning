# Task Breakdown & Implementation Checklist

## Phase 1: Setup & Asset Pipeline
- [x] Initialize React + Vite project (`npm create vite@latest aw-carpet-cleaning -- --template react`).
- [x] Install Tailwind CSS, PostCSS, Autoprefixer.
- [x] Configure `tailwind.config.js` with AW Brand color palette (`#043263`, `#0072CE`, `#00B2FE`, `#25D366`).
- [x] Create `src/assets/before-after/` and `src/assets/screenshots/` folders.
- [x] Convert sample gallery/review images into optimized `.webp` files and place them in `src/assets/`.
- [x] Install dependencies: `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`.

## Phase 2: Component & Code Integration
- [x] Create `src/data/galleryData.js` with direct module imports of all `.webp` assets.
- [x] Create `Preloader.jsx` using animated AW Logo (`aw-logo.webp`).
- [x] Create `Navbar.jsx` (Links: Home, Our Services, Reviews, Contact Us + WhatsApp CTA button)[cite: 3].
- [x] Create `HeroSection.jsx` featuring main tagline, UK contact details (`07544888012`), and quick stats[cite: 1, 3].
- [x] Create `TrustBadges.jsx` featuring banner guarantees (Licensed & Insured, Pay Only If You're Happy, etc.)[cite: 1].
- [x] Create `ServicesSection.jsx` displaying grid cards for:
  - Carpets & Rugs
  - Sofas & Couches
  - Chairs & Armchairs
  - Mattresses
  - Stairs
  - Upholstery & Car Seats
- [x] Create `BeforeAfterGallery.jsx` consuming imported WebP image objects.
- [x] Create `ReviewScreenshots.jsx` rendering customer message WebP screenshots.
- [x] Create `CustomerReviews.jsx` showing Google star-rated written reviews[cite: 3].
- [x] Create `ContactSection.jsx` with direct messaging form and instant WhatsApp redirection.
- [x] Create `FloatingWhatsApp.jsx` pinned at bottom right corner[cite: 1, 3].
- [x] Create `Footer.jsx` with UK service area notes and quick links.

## Phase 3: SEO & Performance Optimization
- [x] Embed Local Business Schema (`JSON-LD`) in `index.html`.
- [x] Add OpenGraph and Twitter Meta Tags for UK area targeting.
- [x] Verify image lazy loading (`loading="lazy"`) and 100% WebP format compliance.
- [x] Test mobile responsiveness across iOS/Android screen viewports.