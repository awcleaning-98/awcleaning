# Product Requirement Document (PRD) - AW Professional Carpet Cleaning

## 1. Overview
AW Professional Carpet Cleaning is a static, high-converting, mobile-responsive web application designed for a UK-based professional cleaning business. The platform showcases services, client reviews, visual before-and-after transformations, and customer social proof (chat screenshots) to drive direct booking conversions via WhatsApp and phone contact.

## 2. Core Target Audience & Market
- **Geographic Location**: United Kingdom (UK localized text, currency £, contact number `07544888012`[cite: 1, 3]).
- **Target Audience**: UK homeowners, landlords, tenants moving out, and small commercial property managers requiring professional carpet and upholstery cleaning.

## 3. Key Requirements & Features
### 3.1 Navigation & Structure
- **Navigation Items**:
  - `Home`
  - `Our Services`
  - `Reviews`
  - `Contact Us`
- **Call-to-Actions (CTAs)**:
  - Header WhatsApp Direct Button (`https://wa.me/447544888012`).
  - Sticky Floating WhatsApp CTA Button on mobile/desktop.
  - "Book Now" Quick-action banners[cite: 1].

### 3.2 Services Covered
1. Carpet Cleaning[cite: 1]
2. Rug Cleaning
3. Sofa Cleaning[cite: 1]
4. Couch Cleaning[cite: 1]
5. Chair & Armchair Cleaning
6. Upholstery Cleaning[cite: 1]
7. Mattress Cleaning
8. Stair Cleaning
9. Car Seat Cleaning[cite: 1]

### 3.3 Visual & Social Proof Showcase (WebP Optimized)
- **Before / After Comparison Cards**: High-performance `.webp` formatted images loaded directly via code imports for optimal LCP score and instant visual proof.
- **Client Screenshot Wall**: Gallery of authentic WhatsApp and customer feedback message screenshots embedded as static `.webp` assets.
- **Trust Badges**:
  - "Licensed & Insured"[cite: 1]
  - "No Upfront Payments"[cite: 1]
  - "Pay Only If You're Happy"[cite: 1]
  - "Local & Reliable Service"[cite: 1]
  - "Safe & Effective Cleaning"[cite: 1]

### 3.4 UX/UI Enhancements
- **Logo Brand Preloader**: Smooth initial page loading screen featuring animated AW Professional Carpet Cleaning logo[cite: 1, 2].
- **Scroll Animations**: Smooth scroll-triggered reveal animations powered by Framer Motion.
- **No Authentication / No Backend**: Zero login/admin overhead for static hosting deployment (Vercel/Netlify/GitHub Pages).

### 3.5 UK-Focused SEO Optimization
- **Meta Tags**: Geo-targeted meta title, meta description, and keywords (`Carpet Cleaning UK`, `Upholstery Cleaner`, `Sofa Cleaning Near Me`).
- **Structured Data (Schema.org)**: JSON-LD `LocalBusiness` / `CleaningService` schema embedded for rich search snippets on Google UK.
- **Semantic HTML & Image Performance**: Pre-compressed WebP format across all visual galleries with descriptive `alt` tags targeting UK local cleaning search queries.

## 4. Security & Compliance Requirements

### 4.1 Transport & Communication
- **HTTPS Enforcement**: Enforce TLS/SSL encryption across all routes with automatic HTTP-to-HTTPS redirect.
- **Secure External Links**: All outbound links targeting WhatsApp (`wa.me`) or external services must include `rel="noopener noreferrer" target="_blank"` attributes.

### 4.2 Content & Header Security
- **Clickjacking Protection**: Set `X-Frame-Options: DENY` to prevent unauthorized embedding in third-party frames.
- **Content MIME Sniffing**: Set `X-Content-Type-Options: nosniff`.
- **Form Data Encoding**: Pre-fill WhatsApp message parameters using standard URL component encoding (`encodeURIComponent`).
# Product Requirement Document (PRD) - AW Professional Carpet Cleaning

... [Previous Sections] ...

## 5. Compliance, Legal & Accessibility Requirements

### 5.1 UK Legal & Privacy Pages
- **Privacy Policy**: Details what user data is collected (e.g., contact form inputs like name, phone, post code), the legal basis for processing (UK GDPR), data retention, and rights (access, erasure).
- **Terms & Conditions**: Defines service agreements, payment terms (cash/card on completion), cancellation rules, and limitation of liability.
- **Cookie Policy**: Explains essential cookies vs analytics cookies in plain English.
- **Refund Policy**: Outlines the 100% Satisfaction Guarantee ("Pay Only If You're Happy"), re-clean policy within 48 hours, and conditions where refunds apply under the UK Consumer Rights Act 2015.

### 5.2 Cookie & Form Consent Mechanisms
- **Cookie + Form Consent Banner**: Explicit opt-in banner for non-essential cookies with a "Save Preferences" toggle.
- **Contact Form Privacy Checkbox**: Explicit tick box on contact forms: *"I agree to the Privacy Policy and consent to AW Cleaning contacting me regarding my enquiry."*

### 5.3 Data Collection & Third-Party Embeds
- **Data Minimization**: Collect only essential contact details (Name, UK Postcode/Area, Phone Number, Selected Service).
- **Third-Party Embed Security & Privacy**: Secure integration of WhatsApp (`wa.me`) and Google Maps/Reviews embeds using lazy loading, proper cookie consent wrappers, and `rel="noopener noreferrer"`.

### 5.4 WCAG 2.1 AA Accessibility Standards
- **Alt Text**: Descriptive `alt` attributes on all `.webp` service photos and before/after images (e.g., `alt="Deep cleaned blue fabric sofa in Manchester home"`).
- **Colour Contrast**: Ensure minimum contrast ratio of 4.5:1 between text and background across AW Navy (`#043263`) and white sections.
- **Keyboard Navigation**: Fully accessible forms with clear `:focus-visible` outline rings, accessible ARIA labels, and explicit `<label>` tags.

### 5.5 Advertising Compliance & Content Authenticity
- **UK Consumer Protection & CAP Code Compliance**:
  - No fake reviews or fabricated testimonials.
  - Verification badge for genuine WhatsApp client chat screenshots.
  - Accurate business details: Registered business name, UK contact phone (`07544888012`), service locations, and insurance proof details.
- **Copyright Integrity**: All images, logo graphics, and local area photos must be strictly client-owned or open-license `.webp` assets.