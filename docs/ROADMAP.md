# NXChess — Roadmap

## Version Summary

| Version | Focus | Database | Auth | Status |
|---------|-------|----------|------|--------|
| **V1** | Marketing Website | ❌ No | ❌ No | 🟡 In Progress |
| **V2** | Dynamic Platform | ✅ Supabase | ✅ Supabase Auth | 🔜 Planned |
| **V3** | Chess Ecosystem | ✅ Extended | ✅ Full | 🔜 Planned |

---

## Version 1 — Marketing Website

**Goal**: Launch a professional, fast, SEO-optimized marketing website.

### Pages

| Page | Route | Priority | Status |
|------|-------|----------|--------|
| Home | `/` | P0 | ⬜ Not Started |
| Coaching | `/coaching` | P0 | ⬜ Not Started |
| Shop | `/shop` | P0 | ⬜ Not Started |
| Contact | `/contact` | P0 | ⬜ Not Started |

### Features

| Feature | Agent | Priority | Status |
|---------|-------|----------|--------|
| Responsive layout (Header/Footer/Nav) | A1 | P0 | ⬜ |
| Home page hero section | A1 | P0 | ⬜ |
| Home page feature highlights | A1 | P1 | ⬜ |
| Coaching services section | A1 | P0 | ⬜ |
| Coach profiles display | A1 | P1 | ⬜ |
| Product catalog (static) | A1 | P0 | ⬜ |
| Product cards grid | A1 | P1 | ⬜ |
| Contact form (UI only) | A1 | P0 | ⬜ |
| SEO metadata for all pages | A3 | P0 | ⬜ |
| Page copy and content | A3 | P0 | ⬜ |
| Mobile responsive design | A1 | P0 | ⬜ |
| Dark mode support | A1 | P2 | ⬜ |
| Vercel deployment | A5 | P0 | ⬜ |
| Lighthouse audit | A4 | P1 | ⬜ |

### V1 Development Order

```
1. Shared Layout (Header, Footer, Navigation)
   └── Agent 1: Frontend Designer

2. Design System (Colors, Typography, Component Primitives)
   └── Agent 1: Frontend Designer

3. Home Page
   ├── Agent 1: Build UI
   └── Agent 3: Write copy

4. Coaching Page
   ├── Agent 1: Build UI
   └── Agent 3: Write copy

5. Shop Page
   ├── Agent 1: Build UI
   └── Agent 3: Write copy

6. Contact Page
   ├── Agent 1: Build UI
   └── Agent 3: Write copy

7. Polish & QA
   ├── Agent 4: Test all pages, Lighthouse audit
   └── Agent 1: Fix issues

8. Deployment
   └── Agent 5: Vercel setup, domain config
```

---

## Version 2 — Dynamic Platform

**Goal**: Add a database, admin tools, and a booking system.

**Prerequisite**: V1 complete and deployed.

### Features

| Feature | Agent | Priority |
|---------|-------|----------|
| Supabase project setup | A2 | P0 |
| Product database (CRUD) | A2 | P0 |
| Admin dashboard | A1 + A2 | P0 |
| Product management UI | A1 | P0 |
| Dynamic product pages | A1 + A2 | P1 |
| Coaching booking system | A1 + A2 | P0 |
| Calendar integration | A1 | P1 |
| Email notifications | A2 | P1 |
| Contact form backend | A2 | P0 |
| Stripe payment integration | A2 | P1 |
| Admin authentication | A2 | P0 |
| Image upload (product photos) | A2 | P1 |
| API route tests | A4 | P0 |
| E2E tests (Playwright) | A4 | P1 |

### V2 Database Schema

```sql
-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Coaches
CREATE TABLE coaches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  bio TEXT,
  rating DECIMAL(2,1),
  specialties TEXT[],
  image_url TEXT,
  hourly_rate DECIMAL(10,2)
);

-- Bookings
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coach_id UUID REFERENCES coaches(id),
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Contact Messages
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## Version 3 — Chess Ecosystem

**Goal**: Transform into a full chess platform with accounts, AI, and courses.

**Prerequisite**: V2 complete with stable database and auth.

### Features

| Feature | Agent | Priority |
|---------|-------|----------|
| Student account registration | A2 | P0 |
| Student profile pages | A1 + A2 | P0 |
| Progress tracking system | A2 | P1 |
| AI chess assistant (game analysis) | A2 | P0 |
| AI training recommendations | A2 | P1 |
| Online video courses | A1 + A2 | P0 |
| Course progress tracking | A2 | P1 |
| Community forums | A1 + A2 | P2 |
| Student leaderboards | A1 + A2 | P2 |
| Subscription billing | A2 | P1 |
| Push notifications | A2 | P2 |
| Mobile-optimized PWA | A1 + A5 | P2 |

---

## Priority Legend

| Priority | Meaning |
|----------|---------|
| **P0** | Must have — blocks release |
| **P1** | Should have — important but not blocking |
| **P2** | Nice to have — can be deferred |

---

*Last updated: 2026-07-27*
