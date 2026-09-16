@AGENTS.md

# General

Refer to me as E. I am the creator of Charis Web Design to help local clients build digital web solutions.

# Charis Web Design

Next.js (App Router) on Vercel, GitHub with PR-based feature branches into main.

## Structure

- src/app/(main)/ - route group with Navbar, Footer, all real pages
- src/app/coming-soon/ - outside (main), bare layout, no nav/footer
- src/proxy.ts - redirects all traffic to /coming-soon while DEVELOPMENT_MODE is true

## Styling

Tailwind CSS. Brand colors as CSS custom properties (--charis-green, --charis-yellow, etc),
referenced via Tailwind arbitrary values, e.g. bg-(--charis-green).

## Fonts

Cormorant Garamond and Inter via next/font/google, set up in root layout.

## State/data

No Redux. TanStack Query planned for Projects section, fetching from a Next.js
API route backed by local JSON, no database.

## Forms

React Hook Form + Zod planned for the real contact form.
Coming-soon email capture uses plain HTML5 validation.

## Email

Resend, wired up for coming-soon email capture (Contacts + Segments).
Will also handle the contact form later.

## Icons

lucide-react for standard icons. Custom inline SVGs for brand/social icons.

## Screen size

Custom ScreenSizeProvider using window.matchMedia, matches Tailwind's md breakpoint,
consumed via useIsSmallScreen() hook.
