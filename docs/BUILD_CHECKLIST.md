# NX Chess future build checklist

## Planning-only status

This is a future implementation checklist. Do not execute it until the owner asks to build.

## Technical approach to decide at build time

Use a small, statically rendered public site. Four pages and direct contact links do not require authentication, a database, a payment service, or an application backend.

Choose the framework and hosting based on the owner's preference and the actual deployment constraints. Do not assume the previous project's stack must be reused. Verify current official documentation and compatible package versions when selecting tools.

Keep curriculum and verified contact details in a single maintainable content source. Share the header, footer, buttons, and typography across pages. Avoid a CMS unless ongoing editing needs justify one and the owner requests it.

## Implementation sequence

- [ ] Read all planning documents and inspect the current repository.
- [ ] Confirm that the owner has requested implementation.
- [ ] Record approved facts and unresolved content questions.
- [ ] Choose the smallest suitable stack and document local run/build commands.
- [ ] Establish colors, typography, spacing, and reusable navigation.
- [ ] Build and visually review Home.
- [ ] Build Curriculum with readable stage sections and working anchor links.
- [ ] Build About using confirmed people and story.
- [ ] Build Contact using verified direct channels.
- [ ] Add descriptive page titles, metadata, social preview, favicon, sitemap, and suitable robots settings.
- [ ] Complete the checks below and record results.
- [ ] Resolve launch blockers and publish only when authorized.

## Functional acceptance

- [ ] Home, Curriculum, About, and Contact routes load directly and through navigation.
- [ ] No login, signup, dashboard, locked curriculum, checkout, or account routes.
- [ ] Curriculum content is readable without interaction or authentication.
- [ ] All navigation and call-to-action links have real destinations.
- [ ] Email links use the correct public email; phone and WhatsApp links use confirmed numbers.
- [ ] Prefilled messages contain no sensitive information.
- [ ] Mobile navigation works by touch and keyboard.
- [ ] Unknown routes show a useful not-found page.
- [ ] No fake successful submission states; no contact form exists in the default scope.

## Content acceptance

- [ ] Audience, lesson formats, team information, and curriculum are owner-confirmed.
- [ ] No TODOs, invented claims, fake testimonials, or placeholder contact details appear on the published site.
- [ ] Images are approved and licensed for their intended use.
- [ ] Generated or stock imagery is not misrepresented as real NX Chess people.
- [ ] Any chess position used is legal and correctly oriented.
- [ ] Brand spelling is consistent: NX Chess.

## Visual and accessibility acceptance

- [ ] Inspect all pages at approximately 360px, 768px, and 1280px widths, plus 200% zoom.
- [ ] No horizontal overflow, clipped text, overlapping controls, or unreadable image crops.
- [ ] Heading order, landmarks, skip navigation, and link labels support assistive technology.
- [ ] Keyboard focus stays visible; menus have sensible focus behavior.
- [ ] Text and interactive states meet applicable WCAG AA contrast thresholds.
- [ ] Touch targets are comfortably usable.
- [ ] Informative images have meaningful alt text; decorative images are marked appropriately.
- [ ] Reduced-motion preference is respected.
- [ ] Layouts reflect DESIGN.md rather than repeated generic card grids.

## Technical acceptance

- [ ] Production build and applicable lint/type checks pass.
- [ ] No browser console errors or broken internal links.
- [ ] Images have appropriate dimensions, compression, and responsive sizing.
- [ ] Fonts load efficiently with readable fallback behavior.
- [ ] Avoid unnecessary client scripts and third-party embeds.
- [ ] Run representative performance and accessibility checks; report measured results rather than invented scores.
- [ ] Confirm that no credentials or private data are committed.
- [ ] Document how to update curriculum, contact details, and images.

## Handoff

Summarize implemented pages, design choices, verification performed, and unresolved items. Include a preview link when available. Do not describe untested behavior as verified.
