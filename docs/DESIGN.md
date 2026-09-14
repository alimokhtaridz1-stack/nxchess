# NX Chess design direction

## Intended feel

Implementation update: the owner requested moving backgrounds after reviewing Signature Chess Club. Use the original NX Chess CSS board drift and photographic pan, with pause/resume, reduced-motion support, and static no-JavaScript behavior. This request authorizes decorative motion while keeping the independent NX Chess design.

Warm, personal, and quietly confident. Interpret "human-looking" as a website with authentic people, natural language, editorial care, and layouts chosen for the content.

The design should make learning chess feel approachable and present a professional teaching center. Every page needs the same level of editorial and visual care.

## Proposed visual foundation

These are starting design choices, not existing brand standards.

- Background: warm ivory (#F7F3EB).
- Main text: deep charcoal (#202622).
- Primary brand color: forest green (#244C3A).
- Accent: muted terracotta (#B96945), used sparingly for illustration and emphasis.
- White or slightly tinted surfaces where needed.
- Use dark text for readable body copy; validate every text/background pair. Accent colors are not automatically safe for small text.

Typography: one expressive serif for headings and one simple sans-serif for reading and controls. Use no more than two families, with dependable fallback fonts. Favor comfortable sentence case over uppercase slogans.

Body text starts around 16–18px, with generous line spacing and readable text widths. Use a consistent spacing scale.

## Layout approach

- Desktop: a restrained content width around 1120px with generous margins.
- Mobile: approximately 20px side padding; layouts stack naturally.
- Hero: text and image side by side on larger screens, stacked on phones.
- Alternate text with photography, a curriculum sequence, and a coach introduction.
- Use borders, spacing, and typography to create structure before adding shadows.
- Reserve cards for content that actually needs grouping.
- Buttons should use straightforward labels and generous touch targets.

## Human details

- Prefer an owner-approved photo of real teaching, hands studying a board, or the coach.
- Use a short, factual personal introduction rather than vague claims of excellence.
- Use a few deliberate chess motifs: a small knight mark, subtle board lines, or a correct teaching position.
- Give images captions only when they add real context.
- If real photography is unavailable, use clearly illustrative chess artwork; do not fake staff or students.
- Avoid promising wins, ratings, or learning results that are not supported.

## Page-specific composition

### Home

One strong image and a short headline. Keep the first screen understandable without scrolling. Show the curriculum as a progression, not a wall of feature tiles.

### Programs

Use clear program summaries with audience, format, learning focus, and links to the curriculum. A comparison table is useful only when there are multiple confirmed offerings. Avoid pricing-card styling and enrollment controls.

### Coaches

Present portraits and readable biographies with verified details. Use a generous individual profile layout for a single coach and a consistent profile rhythm for a larger team.

### FAQs

Group questions under clear topic headings. Prefer visible answers; accessible disclosure controls are acceptable for a long list. Keep answers useful and easy to scan.

### Gallery and Events, when available

Gallery images use consistent crops and factual captions. Events show dates, status, and practical information clearly. Both pages use the same shared styling and footer as the core pages.

### Curriculum

Use numbered sections with clear headings and optional anchor navigation. Show stage content openly by default. Each stage has topics, a practice example, and outcomes. On mobile, preserve the reading order without horizontal scrolling.

### About

Use portrait and prose together, with enough space for a personal story. Profiles must reflect real people. If facts are missing, leave draft notes in the content review rather than publishing invented profiles.

### Contact

Keep the contact methods prominent. Use descriptive link labels and a visible email address or phone number so visitors can copy them. Do not add an empty form to fill space.

## Interaction and accessibility

- Clear hover, focus, active, and disabled states where relevant.
- Keyboard-accessible navigation; mobile menu exposes its open state, closes with Escape, and manages focus sensibly.
- Keep essential content visible without animation.
- Honor reduced-motion preferences.
- Avoid autoplay media, carousels, scroll hijacking, and excessive sticky overlays.
- Use semantic headings, descriptive links, image alt text, and sufficient contrast.
- Aim for touch targets of at least 44 × 44px where practical.

## Visual review

Check narrow mobile, wider mobile, tablet, and desktop layouts. Inspect actual rendered pages, not only source code. Confirm that navigation, headlines, curriculum sections, and contact details remain readable at 200% zoom.

## Professional center navigation

Use the planned labels: Home, Programs, Curriculum, Coaches, About, FAQs, and Contact us.
Place the brand at the left, navigation in a balanced row, and a single emphasized Contact us button at the right. Use a clear active-page indicator and calm, consistent spacing.
Keep all items on one row only while they fit comfortably; switch to mobile navigation rather than shrinking text or wrapping the bar.
About gains a separately operable dropdown toggle only when Gallery or Events is published. Keep /about directly reachable. Menus must work by click, touch, and keyboard, not hover alone.
On mobile, use clear rows, expandable child links when needed, and a prominent Contact us action. Preserve all destinations.

## Full website appearance

Use a shared page-title treatment, consistent image color and cropping, aligned content widths, recognizable links, and a substantial footer grouped by Explore, Learn, and Contact.
Give each inner page a distinct composition suitable for its content. Programs compares learning options; Curriculum explains progression; Coaches introduces people.
Do not stop at a polished homepage: visually review every core page, mobile menu, footer, and any conditional page.
An authentic photograph, well-written explanation, and useful cross-link convey professionalism better than unsupported awards or decorative numerical counters.
