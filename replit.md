# MADHUBAN Restaurant Website

## Overview

MADHUBAN is an immersive, high-end restaurant website featuring a bioluminescent jungle and underwater aquarium dining concept. The application delivers a sensory-rich, interactive 3D experience using React, Three.js, and modern web technologies. The site showcases the restaurant's unique atmosphere through advanced visual effects including real-time 3D rendering, particle systems, and responsive animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework**: React 18+ with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Client-side routing implemented with Wouter (lightweight React router alternative).

**UI Component System**: 
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library (New York style variant)
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (deep blue-green gradient palette)

**3D Graphics Engine**:
- Three.js for WebGL rendering
- @react-three/fiber for declarative Three.js in React
- @react-three/drei for pre-built 3D helpers and abstractions
- Custom particle systems, water shaders, and environmental effects

**Animation Libraries**:
- Framer Motion for UI animations and transitions
- GSAP planned for advanced cinematic effects (mentioned in prompts)

**State Management**:
- React Hook Form for form handling with Zod validation
- TanStack Query (React Query) for server state management
- Local component state with React hooks

**Type Safety**: Full TypeScript implementation across client, server, and shared code.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript compilation via tsx in development and esbuild for production builds.

**API Design**: RESTful API endpoints under `/api` prefix:
- POST `/api/reservations` - Create new reservation with Zod validation
- GET `/api/reservations` - Retrieve all reservations (admin functionality)

**Request Processing**:
- JSON body parsing with raw body preservation for webhook verification
- URL-encoded form data support
- Request/response logging middleware with timing information

**Static File Serving**: Production builds serve static assets from `dist/public` with fallback to `index.html` for client-side routing.

**Development Mode**: Vite development server integration with HMR over WebSocket (`/vite-hmr` path).

**Build Process**: 
- Client bundled via Vite to `dist/public`
- Server bundled via esbuild to single `dist/index.cjs` file
- Selective dependency bundling (allowlist) to reduce syscalls and improve cold starts

### Data Storage

**Database**: PostgreSQL accessed via Drizzle ORM.

**ORM Configuration**:
- Schema-first approach with TypeScript definitions in `shared/schema.ts`
- Migration files output to `./migrations` directory
- Database connection via connection string from `DATABASE_URL` environment variable

**Database Schema**:
- **reservations** table:
  - `id` (UUID primary key, auto-generated)
  - `name` (text, required)
  - `date` (text, required)
  - `guests` (integer, required)
  - `message` (text, optional)
  - `createdAt` (timestamp, auto-set)

**Data Access Layer**: Repository pattern implementation via `DatabaseStorage` class in `server/storage.ts` providing abstraction over database operations.

**Validation**: Zod schemas generated from Drizzle table definitions for runtime type safety and input validation.

### Design System

**Typography**:
- Display/Logo: Cinzel (serif, decorative)
- Headings: Playfair Display (serif, elegant)
- UI Elements: Inter (sans-serif, clean)
- Body Text: Sora (sans-serif, readable)

**Color Palette**: Custom underwater/jungle theme with CSS variables:
- Background: Deep teal gradients (hsl 160-175, low lightness)
- Primary: Teal/aqua accent colors
- Muted/foreground colors for hierarchy
- Glassmorphic effects with transparency and blur

**Component Patterns**:
- Glassmorphic navigation with backdrop blur
- Gradient text effects
- Hover elevation states
- Smooth transitions (300-500ms)
- Particle animation overlays

### Content Strategy

**Pages**:
- **Home**: Hero section with 3D aquarium centerpiece, features showcase, testimonials
- **About**: Restaurant story and vision with dreamlike forest imagery
- **Menu**: Multi-category food menu with tabbed navigation (soups, salads, starters, etc.)
- **Contact**: Reservation form with location/contact information

**Menu Data**: Structured JSON in `client/src/lib/menuData.ts` with categories, items, prices, and descriptions.

**Assets**: Design specifications and menu content stored in `attached_assets/` directory.

## External Dependencies

**UI Component Libraries**:
- @radix-ui/* (20+ component primitives for accessibility)
- lucide-react (icon system)
- cmdk (command menu)
- class-variance-authority (variant-based styling)

**3D Rendering**:
- three (core 3D library)
- @react-three/fiber (React renderer)
- @react-three/drei (3D helpers)

**Form Handling**:
- react-hook-form (form state)
- @hookform/resolvers (validation integration)
- zod (schema validation)

**Data Fetching**:
- @tanstack/react-query (async state management)

**Animation**:
- framer-motion (UI animations)

**Database & Backend**:
- drizzle-orm (PostgreSQL ORM)
- drizzle-kit (migrations)
- pg (PostgreSQL client)
- express (web framework)

**Development Tools**:
- @replit/vite-plugin-* (Replit-specific dev tooling)
- tsx (TypeScript execution)
- esbuild (production bundler)
- vite (development server and client bundler)

**Session Management**: 
- connect-pg-simple (PostgreSQL session store, installed but not yet configured)

**Validation**:
- zod (runtime type validation)
- zod-validation-error (friendly error messages)
- drizzle-zod (ORM-to-Zod schema generation)