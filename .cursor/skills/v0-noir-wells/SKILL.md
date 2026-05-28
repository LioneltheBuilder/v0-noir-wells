---
name: v0-noir-wells
description: Apply Noir Well Health repo conventions for the public healthcare and wellness site.
---

# Noir Well Health - project skill

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Vercel deployment

## Product surface

- Public marketing site under `app/`
- Shared homepage sections under `components/`
- Static business config in `lib/config.ts`
- Remote onboarding CSV helper in `lib/onboarding.ts`
- Local images and brand assets under `public/images/`

## Read before changing things

- `docs/DOCUMENTATION_INDEX.md`
- `docs/ARCHITECTURE_CONSTITUTION.md`
- `docs/contracts/INDEX.md`
- `docs/brand/BRAND_SYSTEM.md`

## Core rules

- Public claims must match implemented reality.
- Preserve accessibility and SEO when adjusting layout, copy, or navigation.
- Treat `lib/config.ts` as the current operational config source of truth unless content architecture changes.
- Treat `lib/onboarding.ts` as an import helper, not a live CMS.
- Keep diffs focused and update docs when behavior changes.

## Avoid

- shipping speculative healthcare or booking claims as if they are live
- mixing unrelated cleanup with content or design work
- adding environment dependencies without documenting them
