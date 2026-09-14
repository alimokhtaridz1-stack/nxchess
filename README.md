# NX Chess

A complete public website for a professional chess teaching center.

**Current phase: working implementation for owner review. Public deployment is pending content approval and a publishing request.**

## What we are making

A welcoming, professionally presented website where visitors can explore programs and curriculum, meet the coaches, learn about the center, read FAQs, and reach the team. No login or account is needed.

Navigation: **Home · Programs · Curriculum · Coaches · About · FAQs · Contact us**. Gallery and Events are intentionally omitted until real content is supplied. All seven pages are built with responsive layouts and shared navigation.

## Run locally

Requires Node.js 22 or newer. There are no package dependencies to install.

```sh
npm run dev
```

Open http://127.0.0.1:4173. After source edits, run `npm run build` and refresh the preview. `npm run preview` serves an existing build. The preview server binds to localhost by default.

```sh
npm run build
npm run check
npm test
```

The build creates static HTML in `dist/` for every route, plus a 404 page. Deploy the contents of `dist/` to a static host with directory-index support when publishing is approved. No runtime server or database is needed for the website. `scripts/serve.mjs` is a local preview utility, not a production server.

## Edit the website

- `src/content.mjs`: verified contact details, content status, program outlines, curriculum, FAQs, and coach data.
- `src/pages.mjs`: page templates and shared header/footer.
- `public/styles.css`: responsive design, typography, and states.
- `public/site.js`: mobile menu and program-specific WhatsApp inquiry context.
- `public/motion.js`: pausable decorative background motion with reduced-motion support.
- `docs/IMPLEMENTATION.md`: architecture, verification, and launch requirements.

The confirmed WhatsApp number is **+971 55 767 8025**. WhatsApp links open a prefilled draft for the visitor to review; the website does not send messages automatically.

## Preview and release

Preview mode is currently enabled in `src/content.mjs`. It adds a review banner, labels unconfirmed program content, and sets noindex metadata plus disallow rules in robots.txt. These are indexing controls, not access control.

Before a public release, confirm the remaining content, add real coach profiles, set `contentApproved: true`, and set `preview: false`. Supply the real deployment origin through `SITE_ORIGIN` when building; it generates canonical links and the sitemap. The release build refuses to proceed without those required facts. Do not make up a domain.

## Assets

The site currently loads DM Sans and Libre Caslon Display through Google Fonts, and one illustrative chess photograph from Pexels. Fallback fonts are supplied. See [asset provenance](docs/ASSETS.md). No photograph is represented as actual NX Chess staff, students, or premises.

## Planning documents

- [Agent instructions](AGENTS.md) — scope, workflow, and rules for future builders.
- [Website plan](docs/PLAN.md) — audience, pages, visitor journeys, and milestones.
- [Design direction](docs/DESIGN.md) — a personal, human-looking visual experience.
- [Content and curriculum](docs/CONTENT.md) — draft copy structure and proposed learning stages.
- [Build checklist](docs/BUILD_CHECKLIST.md) — implementation guidance and acceptance checks.

## Confirm before launch

WhatsApp is confirmed. Coach information, program availability, curriculum, lesson formats, the center story, and final copy still need owner confirmation. Proposed content is labeled in the preview; do not publish it as established fact.

The repository name remains `nxchess`. The public brand is **NX Chess**.
