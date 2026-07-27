# NXChess

A modern chess platform combining **chess coaching**, **premium products**, and **cutting-edge technology**.

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 16.2.x (App Router) |
| React | 19.x |
| TypeScript | 5.x (strict mode) |
| Tailwind CSS | 4.x |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nxchess.git
cd nxchess

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                  # Pages & layouts (Next.js App Router)
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── coaching/         # Coaching page
│   ├── shop/             # Shop page
│   └── contact/          # Contact page
├── components/
│   ├── layout/           # Header, Footer, Navigation
│   ├── ui/               # Button, Card, Input primitives
│   └── features/         # ProductCard, CoachProfile, etc.
├── lib/                  # Utilities & constants
└── types/                # TypeScript type definitions
```

## Documentation

- [Project Overview](./docs/PROJECT.md) — Vision, goals, and tech stack
- [Architecture](./docs/ARCHITECTURE.md) — Folder structure, components, data flow
- [Agent Guidelines](./docs/AGENTS.md) — Coding standards and AI agent protocols
- [Roadmap](./docs/ROADMAP.md) — Feature roadmap for V1, V2, V3
- [Status Dashboard](./docs/STATUS.md) — Live project status, sprint tracker, blockers
- [Changelog](./docs/CHANGELOG.md) — Full history of all agent activities

## Current Version: V1

**Status**: 🟡 In Development

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ⬜ Placeholder |
| Coaching | `/coaching` | ⬜ Placeholder |
| Shop | `/shop` | ⬜ Placeholder |
| Contact | `/contact` | ⬜ Placeholder |

## License

Private — All rights reserved.
