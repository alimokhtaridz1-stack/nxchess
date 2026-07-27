# NXChess — Architecture

## Overview

NXChess uses the **Next.js 16 App Router** with TypeScript and Tailwind CSS v4. The project follows a modular architecture designed for multi-agent collaboration and incremental feature growth.

---

## Folder Structure

```
nxchess/
│
├── docs/                           # Project documentation
│   ├── PROJECT.md                  # Vision, goals, roadmap
│   ├── ARCHITECTURE.md             # This file
│   ├── AGENTS.md                   # AI agent guidelines
│   └── ROADMAP.md                  # Detailed version roadmap
│
├── src/                            # All source code
│   ├── app/                        # Next.js App Router (pages & layouts)
│   │   ├── layout.tsx              # Root layout (HTML shell, fonts, global providers)
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles + Tailwind config
│   │   │
│   │   ├── coaching/
│   │   │   └── page.tsx            # Coaching page
│   │   ├── shop/
│   │   │   └── page.tsx            # Shop page
│   │   └── contact/
│   │       └── page.tsx            # Contact page
│   │
│   ├── components/                 # Reusable React components
│   │   ├── layout/                 # Structural: Header, Footer, Navigation
│   │   ├── ui/                     # Primitives: Button, Card, Input, Badge
│   │   └── features/              # Feature-specific: ProductCard, CoachProfile
│   │
│   ├── lib/                        # Utilities and shared logic
│   │   └── constants.ts            # Site-wide constants (links, metadata)
│   │
│   ├── types/                      # TypeScript type definitions
│   │   └── index.ts                # Shared types
│   │
│   └── assets/                     # Static assets managed by build
│
├── public/                         # Public static files (images, favicons)
│
├── .env.example                    # Environment variable template
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS (Tailwind) configuration
├── eslint.config.mjs               # ESLint configuration
└── package.json                    # Dependencies and scripts
```

---

## Component Architecture

### Component Categories

| Category | Path | Purpose | Examples |
|----------|------|---------|----------|
| **Layout** | `src/components/layout/` | Page structure, shared across all pages | `Header`, `Footer`, `Navigation`, `MobileMenu` |
| **UI** | `src/components/ui/` | Generic, reusable primitives | `Button`, `Card`, `Input`, `Badge`, `Modal` |
| **Features** | `src/components/features/` | Business-logic components | `ProductCard`, `CoachProfile`, `ContactForm` |

### Component Rules

1. **One component per file** — file name matches component name in PascalCase
2. **Co-locate styles** — use Tailwind classes inline, no separate CSS modules
3. **Props interface** — define a `Props` interface (or use inline types) for every component
4. **Default export** — each component file has a single default export
5. **Server by default** — components are Server Components unless they need client interactivity
6. **"use client" directive** — add `"use client"` only when the component uses hooks, event handlers, or browser APIs

### Example Component

```tsx
// src/components/ui/Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={/* Tailwind classes based on variant and size */}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

---

## Data Flow

### V1: Static Data

```
Constants (lib/constants.ts)
       │
       ▼
  Page Components (app/*/page.tsx)
       │
       ▼
  Feature Components (components/features/*)
       │
       ▼
  UI Components (components/ui/*)
```

All data is hardcoded in `lib/constants.ts` or directly in page components. No API calls, no database.

### V2: Supabase Integration (Future)

```
Supabase Database
       │
       ▼
  Server Actions / API Routes (app/api/*)
       │
       ▼
  Page Components (Server Components fetch data)
       │
       ▼
  Feature Components
       │
       ▼
  UI Components
```

### V3: Full Stack (Future)

```
Supabase + External APIs (OpenAI, Stripe)
       │
       ▼
  Server Actions / Route Handlers
       │
       ▼
  Auth Middleware (Supabase Auth)
       │
       ▼
  Protected/Public Pages
       │
       ▼
  Components + Client State
```

---

## Styling Conventions

### Tailwind CSS v4

- Uses `@import "tailwindcss"` (v4 syntax, NOT `@tailwind` directives)
- Custom theme values defined in `globals.css` using `@theme inline { }`
- CSS custom properties for design tokens (colors, fonts)
- Dark mode via `prefers-color-scheme` media query

### Color Strategy

Define a consistent color palette in `globals.css`:

```css
@theme inline {
  --color-primary: /* brand color */;
  --color-secondary: /* accent color */;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

---

## Routing

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home page |
| `/coaching` | `src/app/coaching/page.tsx` | Coaching services |
| `/shop` | `src/app/shop/page.tsx` | Product catalog |
| `/contact` | `src/app/contact/page.tsx` | Contact form |

### Future Routes (V2+)

| Route | Description |
|-------|-------------|
| `/shop/[productId]` | Individual product page |
| `/coaching/book` | Booking system |
| `/dashboard` | Admin dashboard |
| `/account` | User account |
| `/courses` | Online courses |

---

## Key Configuration Files

| File | Purpose | Who Modifies |
|------|---------|--------------|
| `next.config.ts` | Next.js settings, redirects, image domains | DevOps Agent |
| `tsconfig.json` | TypeScript compiler options, path aliases | DevOps Agent |
| `postcss.config.mjs` | PostCSS plugins (Tailwind) | Frontend Designer |
| `eslint.config.mjs` | Linting rules | DevOps Agent |
| `.env.example` | Environment variable template | Backend Developer |

---

## Future Expansion Plan

### Database Schema (V2)

```
products        → id, name, description, price, image, category
coaches         → id, name, bio, rating, specialties
bookings        → id, coach_id, student_email, date, time, status
contact_msgs    → id, name, email, message, created_at
```

### API Routes (V2)

```
/api/products       → GET products list
/api/products/[id]  → GET single product
/api/bookings       → POST create booking
/api/contact        → POST submit contact form
```

---

*Last updated: 2026-07-27*
