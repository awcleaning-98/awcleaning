#### 3. `rules.md`
```markdown
# Project Development Rules & Coding Guidelines

1. **No Backend Required**: Do not create or request Node.js backend servers, Express, or database connections.
2. **No Authentication Flow**: Do not add login or signup screens for users or admins.
3. **Strict WebP Image Rule**:
   - ALL Before/After comparison images, review chat screenshots, and services visual graphics MUST be stored in `.webp` format inside `src/assets/`.
   - Images MUST be imported directly via JavaScript/React module imports inside `src/data/` or component files (e.g., `import sofaImg from '../assets/.../sofa.webp'`) so Vite can optimize and bundle them cleanly.
4. **Brand Aesthetic Fidelity**:
   - Primary Accent: Deep Azure Blue (`#043263`).
   - Secondary Accent: Cyan / Water Blue (`#00B2FE`).
   - Badge Accent: Deep Navy & Bright Green (`#25D366` for WhatsApp CTA).
   - Typography: Clean, highly legible sans-serif fonts.
5. **Localization Rules**:
   - Currency: GBP (`£`).
   - Phone Format: UK local/mobile format (`07544888012` / `+44 7544 888012`)[cite: 1, 3].
   - Spelling: British English (`Upholstery`, `Localised`, `Favour`).
6. **Mobile First & Responsiveness**:
   - All components must be fully usable on 320px screen width and above.
   - Sticky WhatsApp icon must not obscure key action elements on small screens.
7. **SEO & Performance Principles**:
   - All `<img>` tags must include explicit `width`, `height`, `loading="lazy"`, and descriptive `alt` tags targeting UK cleaning keywords.

   8. **Static Security Best Practices**:
   - Always append `rel="noopener noreferrer"` to external links.
   - Use `encodeURIComponent()` for pre-filled WhatsApp link templates.
   - Ensure hosting platform enforces strict HTTPS and basic security headers (`X-Frame-Options`, `X-Content-Type-Options`).

   # Project Development Rules & Coding Guidelines

... [Previous Rules] ...

8. **Legal & Compliance Rules (UK GDPR & PECR)**:
   - Include legal links in the footer: `Privacy Policy`, `Terms & Conditions`, `Cookie Policy`, `Refund Policy`.
   - Contact form must include an unchecked mandatory checkbox for Privacy Policy consent before submitting or redirecting to WhatsApp.
   - Implement a lightweight, non-blocking Cookie Consent Banner stored in `localStorage`.

9. **Accessibility & Design Rules (WCAG 2.1 AA)**:
   - All `<img>` elements must have meaningful `alt` text. Do not use generic alt tags like "image" or "photo".
   - Ensure high contrast ratios: White text on `#043263` (Navy) or Dark text (`#0F172A`) on Light background (`#F4F8FC`).
   - Every input field must have an explicitly associated `<label>` or `aria-label`.
   - Focus rings (`focus:ring-2 focus:ring-brand-blue`) must be clearly visible for keyboard navigation.

10. **Authenticity & Advertising Rules**:
    - Display clear, real UK business details in the footer: Phone (`07544888012`), Area Served (UK local regions), and Guarantee details.
    - Claims like "100% Guaranteed" must align with the written Refund Policy ("Re-clean or no charge if unhappy prior to payment").