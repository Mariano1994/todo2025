# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern React 19 + TypeScript todo application built with Vite, featuring local storage persistence and a clean component architecture. The app uses TailwindCSS for styling and Phosphor Icons for iconography.

## Development Commands

### Core Development
- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production (TypeScript compilation + Vite build)
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint on all files

### Package Management
- `pnpm install` - Install dependencies
- `pnpm add <package>` - Add new dependency
- `pnpm add -D <package>` - Add development dependency

## Architecture Overview

### Project Structure
```
src/
├── components/          # Reusable UI components (Button, Input, Container, etc.)
├── core-components/     # Feature-specific components (TaskItem, Header, Footer)
├── hooks/              # Custom React hooks for business logic
├── models/             # TypeScript interfaces and enums
├── pages/              # Route components and layouts
├── routes/             # React Router configuration
└── helpers/            # Utility functions
```

### Key Architectural Patterns

**Component Organization:**
- `components/` - Generic, reusable UI components using class-variance-authority for variant management
- `core-components/` - Business logic components specific to todo functionality
- Clean separation between presentation and business logic

**State Management:**
- Local storage as primary persistence layer using `use-local-storage` library
- Custom hooks (`useTask`, `useTasks`) encapsulate all business logic
- Task states managed through TypeScript enums (`TaskState.Creating`, `TaskState.Created`)

**Data Flow:**
- Tasks are stored in localStorage with the key `"tasks"`
- `useTasks()` - Read-only operations and computed values (counts, filtering)
- `useTask()` - Write operations (create, update, delete, status changes)
- Optimistic UI updates with loading states and artificial delays for UX

**Routing:**
- React Router v7 with nested routes
- `MainLayout` component provides consistent header/footer structure
- Routes: `/` (Home), `/reports` (Reports page)

### Component Patterns

**Variant-based Components:**
Uses `class-variance-authority` (CVA) for consistent component variants:
```typescript
export const containerVariants = cva("mx-auto", {
  variants: {
    size: { md: "max-w-[31.5rem] px-2" }
  }
});
```

**Custom Hook Pattern:**
Business logic is extracted into custom hooks:
- State management with loading indicators
- Async operations with artificial delays for UX
- Computed derived values (task counts, filtering)

**Task State Management:**
- Tasks have `TaskState.Creating` for inline editing mode
- `TaskState.Created` for finalized tasks
- Boolean `concluded` flag for completion status

### Key Dependencies

**Core Framework:**
- React 19 with React Router v7
- TypeScript with strict configuration
- Vite for build tooling and HMR

**UI & Styling:**
- TailwindCSS v4 with Vite plugin integration
- Phosphor Icons for consistent iconography
- Custom font: Cairo (Google Fonts)

**Utilities:**
- `use-local-storage` for persistent state
- `class-variance-authority` for component variants
- `crypto.randomUUID()` for unique task IDs

## Development Guidelines

### File Creation
- UI components go in `components/` with CVA variants
- Business components go in `core-components/`
- Extract complex logic into custom hooks in `hooks/`
- Define TypeScript types in `models/`

### State Management
- Use `useTask()` for task mutations
- Use `useTasks()` for reading task data
- All localStorage operations should go through these hooks
- Maintain loading states for async operations

### Styling
- Use TailwindCSS classes exclusively
- Leverage CVA for component variants
- Follow mobile-first responsive design patterns
- Consistent spacing with Tailwind spacing scale

### TypeScript
- Strict TypeScript configuration enabled
- Define interfaces in `models/` directory
- Use enums for controlled vocabularies (like TaskState)
- Leverage type inference where possible