# Architecture Source Of Truth

## Repo reality

Noir Well Health is currently a Next.js App Router marketing site with:

- a composed homepage in `app/page.tsx`
- supporting route pages under `app/*`
- reusable section components under `components/`
- static brand/contact config in `lib/config.ts`
- a remote onboarding CSV parser in `lib/onboarding.ts`
- local media in `public/images/`

## Truth hierarchy

1. shipped code in `app/`, `components/`, and `lib/`
2. config values in `lib/config.ts`
3. documented constraints in `docs/contracts/*.md`
4. onboarding notes and README guidance

## What is not a source of truth

- old v0 deployment text in the original README
- speculative future service offerings
- unpublished design ideas
- assumptions about staging or production config that are not written down
