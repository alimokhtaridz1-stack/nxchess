# NXChess — AI Agent Guidelines

## Purpose

This document defines how AI agents should work on the NXChess project. All agents must follow these standards to ensure consistency, avoid conflicts, and maintain code quality.

---

## Agent Roles

| Agent | Role | Primary Scope |
|-------|------|---------------|
| **Agent 1** | Frontend Designer | `src/components/`, `src/app/*/page.tsx`, `globals.css` |
| **Agent 2** | Backend Developer | `src/lib/`, `src/app/api/`, database config, `.env` |
| **Agent 3** | Content Manager | Page text content, `metadata` exports, SEO, `public/` assets |
| **Agent 4** | QA Tester | `__tests__/`, test scripts, performance audits |
| **Agent 5** | DevOps Agent | `.github/`, deployment config, `next.config.ts`, CI/CD |

### Scope Rules

- **Stay in your lane** — only modify files within your primary scope
- **Cross-scope changes** — if you need to modify another agent's files, document the reason and flag it for review
- **Shared files** — `layout.tsx`, `globals.css`, and `lib/constants.ts` are shared; coordinate changes carefully

---

## Coding Standards

### TypeScript

- **Strict mode is ON** — do not disable it
- **No `any` types** — use `unknown` and narrow with type guards
- **Interface over type** — prefer `interface` for object shapes, `type` for unions/intersections
- **Explicit return types** — on exported functions and utilities

```typescript
// ✅ Good
interface ProductProps {
  name: string;
  price: number;
  imageUrl: string;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

// ❌ Bad
export function formatPrice(price: any) {
  return `$${price.toFixed(2)}`;
}
```

### React Components

- **Functional components only** — no class components
- **Server Components by default** — only add `"use client"` when necessary
- **Props destructuring** — destructure props in the function signature
- **No inline styles** — use Tailwind classes exclusively

```tsx
// ✅ Good — Server Component (default)
interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
    </section>
  );
}

// ✅ Good — Client Component (when needed)
"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

### Next.js 16 Specifics

> ⚠️ **IMPORTANT**: This project uses Next.js 16. Read the docs at `node_modules/next/dist/docs/` before writing any code. Key differences:

- **`params` is a Promise** — always `await params` in dynamic routes
- **`searchParams` is a Promise** — always `await searchParams`
- **`PageProps` and `LayoutProps`** — use these global type helpers instead of manual typing
- **Tailwind v4** — uses `@import "tailwindcss"`, NOT `@tailwind base/components/utilities`
- **Font imports** — use direct function calls: `Geist({ subsets: ["latin"] })`

```tsx
// ✅ Correct for Next.js 16
export default async function ProductPage(props: PageProps<'/shop/[id]'>) {
  const { id } = await props.params;
  return <div>Product {id}</div>;
}
```

---

## Naming Conventions

### Files & Folders

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ProductCard.tsx` |
| Pages | `page.tsx` (Next.js convention) | `app/shop/page.tsx` |
| Layouts | `layout.tsx` (Next.js convention) | `app/layout.tsx` |
| Utilities | camelCase | `formatPrice.ts` |
| Types | camelCase file, PascalCase exports | `types/index.ts` → `Product` |
| Constants | camelCase file, UPPER_SNAKE_CASE values | `constants.ts` → `SITE_NAME` |
| CSS | kebab-case (if standalone) | `globals.css` |

### Variables & Functions

| Type | Convention | Example |
|------|-----------|---------|
| Variables | camelCase | `productList` |
| Functions | camelCase | `getProducts()` |
| Components | PascalCase | `ProductCard` |
| Constants | UPPER_SNAKE_CASE | `MAX_PRODUCTS` |
| Interfaces | PascalCase | `ProductProps` |
| Type aliases | PascalCase | `ProductCategory` |
| Enums | PascalCase | `BookingStatus` |

---

## How to Modify Files

### Before Making Changes

1. **Read this document** and `ARCHITECTURE.md`
2. **Check which agent scope** the file belongs to
3. **Read the file** you intend to modify fully before editing
4. **Check for dependencies** — what imports from this file?

### Making Changes

1. **One concern per commit** — don't mix unrelated changes
2. **Preserve existing comments** and docstrings unrelated to your change
3. **Don't refactor while fixing** — separate refactors from bug fixes
4. **Run lint before committing** — `npm run lint`
5. **Test your changes** — at minimum, `npm run build` must pass

### Commit Message Format

```
[Agent#] scope: short description

Examples:
[A1] components: add Header and Footer layout components
[A2] api: create products route handler
[A3] content: update coaching page copy and metadata
[A4] tests: add homepage accessibility tests
[A5] deploy: configure Vercel environment variables
```

---

## How to Communicate Changes

### When Adding a New Feature

1. Update `docs/ROADMAP.md` if it affects the roadmap
2. Update `docs/ARCHITECTURE.md` if it adds new routes, components, or data flows
3. Add a comment at the top of new files explaining their purpose

### When Modifying Shared Files

Shared files require extra care. Before modifying:

- `src/app/layout.tsx` — affects ALL pages
- `src/app/globals.css` — affects ALL styles
- `src/lib/constants.ts` — affects ALL pages referencing constants
- `package.json` — affects ALL agents' environments

**Protocol**: Add a comment explaining your change and which agent made it.

### When Adding Dependencies

1. Justify why the dependency is needed
2. Prefer well-maintained packages with small bundle sizes
3. Add the dependency info to this section:

#### Approved Dependencies (V1)

| Package | Purpose | Added By |
|---------|---------|----------|
| next | Framework | Init |
| react / react-dom | UI Library | Init |
| tailwindcss | Styling | Init |
| typescript | Type Safety | Init |
| eslint | Linting | Init |

---

## Testing Standards

### V1 Minimum

- `npm run build` must pass with zero errors
- `npm run lint` must pass with zero warnings
- All pages must be accessible at their routes
- Responsive design must work at 320px, 768px, 1024px, 1440px

### V2+ Additions

- Unit tests for utility functions
- Integration tests for API routes
- E2E tests for critical user flows (Playwright)
- Lighthouse score targets: Performance 90+, Accessibility 90+, SEO 90+

---

## Environment Variables

- **Never commit secrets** — use `.env.local` (gitignored)
- **Always update `.env.example`** when adding new variables
- **Prefix client-exposed vars** with `NEXT_PUBLIC_`
- **Document each variable** in `.env.example` with comments

---

*Last updated: 2026-07-27*
