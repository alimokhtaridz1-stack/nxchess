# Instructions for agents working on NX Chess

## Read first

Read README.md, docs/PLAN.md, docs/DESIGN.md, docs/CONTENT.md, and docs/BUILD_CHECKLIST.md before doing work. These documents together describe the intended website.

## Current authorization

This repository contains planning documents only. Do not scaffold an application, install dependencies, create UI code, or deploy a website until the owner explicitly requests implementation. Updating the planning Markdown is allowed when requested.

Once implementation is requested, work in small, reviewable stages. The latest explicit owner instructions take precedence; keep these documents aligned with approved changes.

## Product boundaries

- Build a complete public website for NX Chess as a professional chess teaching center.
- Core pages: Home, Programs, Curriculum, Coaches, About, FAQs, and Contact. Follow the exact navigation and routes in docs/PLAN.md.
- Plan Gallery and Events as conditional additions under About, using real approved content only.
- Help visitors understand the teaching approach, explore the curriculum, and contact the team.
- No login, registration, user accounts, member area, student dashboard, or admin portal.
- No online chess game, course player, shop, checkout, subscriptions, or payment flow.
- Do not add a booking system or collect student records without a new request.
- Contact through verified direct channels. A form is not part of the default scope.
- Maintain a full professional center website across every page, while keeping it a public presentation website. Programs and events describe real offerings and direct inquiries to contact; they do not create a learning platform.

## Content integrity

The curriculum outline and audience in docs/CONTENT.md are proposals, not verified claims about NX Chess.
Do not invent coach qualifications, ratings, testimonials, prices, schedules, addresses, outcomes, student counts, or affiliations.
Do not copy factual content from the previous project or Git history unless the owner explicitly confirms it.
Mark missing facts as TODO in drafts. Never ship placeholders as real contact details.
Use approved photos with permission. Never present generated people or stock models as actual NX Chess staff or students.

## Design expectations

Follow docs/DESIGN.md. Favor warm, readable, personal layouts with purposeful variation.
Preserve a coherent center identity across all pages: shared navigation, active page states, page introductions, typography, photography treatment, contact invitations, and a complete footer. Do not deliver polished Home with unfinished or generic inner pages.
Do not default to repeated identical cards, oversized gradient slogans, fake statistics, or decorative motion that gets in the way.
Use a correct chessboard position if a board appears. Do not improvise illegal positions or confusing board orientation.
All interactive controls must work with keyboard and touch.

## Build workflow after authorization

1. Review current repository state and preserve unrelated owner changes.
2. Confirm essential missing content, while proceeding with independent layout work using clearly marked draft content.
3. Establish the shared visual foundation and the Home page first.
4. Use feedback on that page to refine the remaining pages.
5. Complete Programs, Curriculum, Coaches, About, FAQs, and Contact; implement expanded navigation and verified contact links.
6. Run the checks in docs/BUILD_CHECKLIST.md and inspect the site visually on mobile and desktop.
7. Report what changed, checks performed, and remaining launch blockers.
8. Publish only when the owner requests or has already authorized publishing.

Do not create extra tasks or spawn agents unless explicitly requested by the owner or subsequently authorized instructions.
Keep credentials out of the repository. If a future requirement introduces a backend or personal-data collection, document the new need before implementation.
