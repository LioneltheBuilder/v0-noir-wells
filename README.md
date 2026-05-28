# Noir Well Health

Public website for Noir Well Health, built with Next.js App Router and Tailwind CSS.

## What this repo is

- a marketing and information site for Noir Well Health
- a static-first App Router codebase with shared section components
- a repo now set up with docs, Cursor conventions, CI, and a `main` / `develop` workflow

## What this repo is not

- not a practice-management backend
- not a custom appointment-booking system
- not a CMS-backed healthcare platform

Current booking traffic is routed to Zocdoc from site-controlled pages.

## Quick start

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm run ci
```

Or run checks individually:

```bash
pnpm typecheck
pnpm test
pnpm lint
pnpm build
```

## Repo structure

- `app/`: route entry points
- `components/`: homepage and shared UI sections
- `lib/`: business config and helper logic
- `public/`: site assets
- `.cursor/`: repo-specific agent workflows
- `docs/`: architecture, contracts, setup, and release notes

## Workflow

- `main`: production-ready branch
- `develop`: integration branch

See [SETUP.md](./SETUP.md), [AGENT_ONBOARDING.md](./AGENT_ONBOARDING.md), and [docs/DOCUMENTATION_INDEX.md](./docs/DOCUMENTATION_INDEX.md).
