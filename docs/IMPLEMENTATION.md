# NX Chess implementation

## Built

Seven complete static page layouts: Home, Programs, Curriculum, Coaches, About, FAQs, and Contact. Shared navigation includes active-page states and an accessible mobile menu. The footer groups Explore, Learn, and Contact links.

The visual system uses forest green, warm ivory, serif headings, readable sans-serif text, and an illustrative chess photograph. Inner pages have purpose-specific layouts. The curriculum contains five visible stages; program inquiries carry their selected topic through to a WhatsApp message draft.

Confirmed contact: +971 55 767 8025 (UAE WhatsApp).

No login, account, dashboard, form submission, payment, or database has been added. Gallery and Events remain conditional on real approved content.

## Architecture

- src/content.mjs holds the verified contact and proposed program/curriculum/FAQ data.
- src/pages.mjs renders all pages and shared components as HTML at build time.
- public/styles.css defines responsive styles; container queries also adapt to enlarged root text.
- public/site.js handles the mobile menu and safely renders inquiry context with textContent.
- public/motion.js controls decorative animation and stores an optional local motion preference.
- scripts/build.mjs generates dist/, canonical metadata when an origin is supplied, sitemap.xml, robots.txt, and 404.html.
- scripts/serve.mjs serves the build locally; deploy static output through a production host instead.
- tests/site.test.mjs checks public routes, fragment links, headings, contact targets, escaping, preview status, and output files.

Requires Node.js 22 or newer. No package installation or runtime framework is required. Run npm run build, npm run check, and npm test. Run npm run dev to build and serve locally; rebuild and refresh after edits.

## Reference-informed additions

The owner supplied https://signaturechessclub.com/ as a content and motion reference. Its use of learning stages, practical questions, and a looping hero was reviewed. NX Chess keeps its own palette, typography, layouts, stage structure, and original wording.

Added original sections about habits practiced in chess and how to start a conversation. School groups, private coaching, and tournament preparation are inquiry topics only, not advertised as verified services. Added FAQs about first inquiries and discussing learning progress.

The motion uses CSS grid drift, faint chess glyphs, and a slow photographic pan. No video, branding, text, staff information, testimonials, rankings, achievements, or business claims were copied from the reference. No promise about IQ, academic results, or rating gains is made.

## Motion behavior

Every core page has a labeled pause/resume control near its introduction. The pause preference is retained locally across pages. Reduced-motion preferences disable animation and update the control. Background animation pauses when the tab is hidden. Without JavaScript, the backgrounds remain static and all reading/navigation content remains available.

## Verification performed

- Static build and JavaScript syntax checks passed.
- Six automated source/output tests passed.
- All seven pages inspected at 1440px, 768px, and 360px widths: no horizontal overflow; each has one primary heading.
- Desktop and phone screenshots inspected for page composition; external chess image loaded successfully.
- Enlarged-text checks at 200% passed on all seven pages after responsive navigation/layout fixes.
- Mobile menu open/close, Escape focus restoration, and mobile navigation passed.
- FAQ disclosure works by keyboard.
- Program selection is retained on Contact and in the WhatsApp draft.
- Injection-like inquiry text renders as text rather than markup.
- Unknown paths return the 404 page with HTTP 404.
- Curriculum remains available without JavaScript.
- Motion running, pause, persistence across navigation, and reduced-motion behavior verified in the browser.

These are targeted implementation checks, not a formal accessibility certification. No external WhatsApp message was sent. No public production deployment was performed.

## Remaining launch content

Real coach names and biographies, actual program availability, final curriculum approval, teaching formats, schedules/fees if shown, and the center story remain to be supplied or confirmed. The Coaches page has a designed, honest pending-introduction state. The contact channel works now.

Preview mode is on, with visible draft notices, noindex metadata, and disallow rules. Public release requires confirmed content, real coach data, a chosen deployment origin, and authorization to publish. Asset sources and external-loading considerations are in ASSETS.md.
