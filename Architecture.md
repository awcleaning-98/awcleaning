# System Architecture Document

## 1. Tech Stack Overview
- **Framework**: React 18+ with Vite (for ultra-fast development and build pipeline).
- **Styling**: Tailwind CSS v3 (Utility-first framework configured with custom AW brand colors).
- **Icons**: Lucide-React / React-Icons.
- **Animations**: Framer Motion (Scroll reveals and logo preloader transition).
- **Asset Pipeline**: Native ES module static imports (`import img from './asset.webp'`) for automatic WebP asset bundling, cache-busting, and compression.
- **Deployment Platform**: Netlify / Vercel / GitHub Pages (100% Free Static Web Hosting).

## 2. System Architecture & Folder Layout
aw-carpet-cleaning/
├── PRD.md
├── Architecture.md
├── rules.md
├── design.md
├── tasks.md
├── memory.md
├── public/
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── TrustBadges.jsx
│   ├── ServicesSection.jsx
│   ├── BeforeAfterGallery.jsx
│   ├── ReviewScreenshots.jsx
│   ├── CustomerReviews.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── FloatingWhatsApp.jsx
│   ├── Preloader.jsx
│   ├── CookieBanner.jsx           <-- Cookie + Privacy Consent
│   └── LegalModals/
│       ├── PrivacyPolicyModal.jsx  <-- UK GDPR & Data Collection
│       ├── TermsModal.jsx          <-- Terms & Conditions
│       ├── CookiePolicyModal.jsx   <-- Cookie Policy
│       └── RefundPolicyModal.jsx  <-- Refund & Guarantee Terms
│   ├── data/
│   │   ├── servicesData.js
│   │   ├── reviewsData.js
│   │   └── galleryData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json

## 3. Data Flow & WebP Code Integration Example
In `src/data/galleryData.js`, assets are imported directly via JS code to enable Vite asset bundling:

```javascript
import carpetBefore from '../assets/before-after/carpet-before.webp';
import carpetAfter from '../assets/before-after/carpet-after.webp';
import review1 from '../assets/screenshots/review-chat-1.webp';

export const beforeAfterGallery = [
  {
    id: 1,
    title: "Living Room Carpet Stain Removal",
    beforeImg: carpetBefore,
    afterImg: carpetAfter,
    tag: "Carpet Cleaning"
  }
];

export const reviewScreenshots = [
  {
    id: 1,
    image: review1,
    alt: "WhatsApp customer feedback review"
  }
];