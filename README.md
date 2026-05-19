# Dwellr - Real Estate Rental Platform (Client)

A modern, full-featured real estate rental platform built with Next.js, TypeScript, and TailwindCSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **State Management**: Redux Toolkit + RTK Query
- **Forms**: React Hook Form + Zod validation
- **Maps**: Mapbox GL
- **Animations**: Framer Motion

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file (copy from `.env.example`):
   ```bash
   cp .env.example .env.local
   ```

3. Fill in your environment variables in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Authentication pages
│   ├── (dashboard)/        # Protected dashboard pages
│   │   ├── managers/       # Manager dashboard (properties, applications, settings)
│   │   └── tenants/        # Tenant dashboard (favorites, applications, residences, settings)
│   └── (nondashboard)/     # Public pages
│       ├── landing/        # Landing page sections
│       └── search/         # Property search with map & filters
├── components/             # Reusable UI components
│   └── ui/                 # shadcn/ui base components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, constants, schemas
├── state/                  # Redux store, slices, RTK Query API
└── types/                  # TypeScript type definitions
```
