# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
- **Framework**: Next.js 15.4.2 with TypeScript and App Router
- **UI Library**: shadcn/ui with Tailwind CSS v4
- **Styling**: Tailwind CSS v4 with PostCSS integration
- **Package Manager**: pnpm (v9.10.0)
- **Authentication**: NextAuth.js v4.24.11 (credentials-based)
- **Form Handling**: React Hook Form + Zod validation

## Available Commands
```bash
# Development
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Component Management
pnpm dlx shadcn@latest add [component]    # Add shadcn/ui component
```

## Key Configuration Files
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with strict mode
- `components.json` - shadcn/ui configuration
- `tailwind.config.js` - Tailwind CSS v4 configuration
- `eslint.config.mjs` - ESLint 9+ flat config
- `postcss.config.mjs` - PostCSS configuration

## Project Structure
```
app/                    # App Router directory
├── api/auth/[...nextauth]/  # NextAuth.js API route (credentials-based)
├── auth/signin/        # Login page (shadcn/ui form)
├── components/         # Custom components
│   ├── AuthButton.tsx     # Sign in/out button
│   └── AuthProvider.tsx   # Session provider wrapper
├── components/ui/      # shadcn/ui components
├── lib/               # Utility functions
├── globals.css        # Global styles with CSS variables
└── layout.tsx         # Root layout with SessionProvider
```

## Authentication System
- **Provider**: CredentialsProvider (email/password)
- **Demo Account**: demo@example.com / password
- **Login Page**: `/auth/signin` with shadcn/ui form
- **Session**: JWT-based with TypeScript types
- **Form**: React Hook Form + Zod validation

## Tech Stack
- **UI**: shadcn/ui components (Button, Form, Card, Input)
- **Forms**: React Hook Form with Zod schema validation
- **Icons**: Lucide React
- **Validation**: Zod schema validation
- **Styling**: Tailwind CSS v4 with CSS variables
- **Type Safety**: Full TypeScript support

## Development Notes
- Uses Geist fonts via next/font
- CSS variables for theme switching (light/dark)
- TypeScript strict mode enabled
- Turbopack enabled for faster dev builds
- Component utilities: `class-variance-authority`, `clsx`, `tailwind-merge`