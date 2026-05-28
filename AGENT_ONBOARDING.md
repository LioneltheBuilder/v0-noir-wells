# Agent Onboarding

## What this repo is

`v0-noir-wells` is the Noir Well Health public website. Right now it is a content-driven marketing site built in Next.js App Router with mostly static routes and section components.

## What to read first

1. `README.md`
2. `docs/DOCUMENTATION_INDEX.md`
3. `docs/ARCHITECTURE_CONSTITUTION.md`
4. `docs/contracts/INDEX.md`
5. `.cursor/skills/v0-noir-wells/SKILL.md`

## Current truth

- This is not a full practice-management app.
- Booking currently routes users to Zocdoc from site-controlled pages.
- `lib/config.ts` is the current business/contact config source of truth.
- `lib/onboarding.ts` pulls from a remote CSV helper and should be treated as setup residue until intentionally expanded.
- Public claims must stay conservative because this is healthcare-adjacent marketing.

## Standard workflow

- work from `develop`
- keep batches focused
- run `pnpm run ci` before shipping when possible
- update docs when behavior, routing, or deployment assumptions change
