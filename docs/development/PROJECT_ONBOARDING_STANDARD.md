# Project Onboarding Standard

This document is the standard operating procedure for bringing a new client repo into the Digital Builders project gateway cleanly.

## Goal

Every new project repo should leave onboarding with:

- one clear canonical GitHub repo
- a documented `develop` -> `main` release flow
- working CI on GitHub
- a repo-local `.cursor` operating system
- onboarding, setup, architecture, and deployment docs
- one active Vercel project, not multiple conflicting integrations

## Canonical repo rules

- choose one GitHub repo as the source of truth
- stop using duplicate or corrupted repos once the canonical repo is selected
- avoid parallel v0-generated repos for the same client surface
- document the canonical repo in `README.md` and onboarding docs

## Required repo baseline

Every onboarded repo should contain:

- `.cursor/commands/`
- `.cursor/rules/`
- `.cursor/skills/<repo>/SKILL.md`
- `.github/workflows/ci.yml`
- `README.md`
- `SETUP.md`
- `AGENT_ONBOARDING.md`
- `docs/DOCUMENTATION_INDEX.md`
- `docs/development/BRANCHING.md`
- `docs/development/DEPLOYMENT.md`
- `docs/development/RELEASING.md`
- `docs/WORK_ORDER.md`

## GitHub standard

1. create or confirm `develop`
2. leave `main` as the default production branch
3. push the repo baseline to `develop`
4. ensure CI runs on both `develop` and `main`
5. close stale v0-generated PRs that no longer represent real work
6. delete stale remote `v0/*` branches when they are clearly orphaned
7. use focused feature branches off `develop` for non-trivial changes
8. merge `develop` into `main` for production promotion

## Vercel standard

1. ensure only one active Vercel project is connected to the canonical repo
2. delete or disconnect stale Vercel projects that create duplicate GitHub statuses
3. set `main` as the production branch
4. use `develop` for preview validation
5. confirm a fresh production deploy from `main`
6. confirm a fresh preview deploy from `develop`

## Verification standard

Run:

```bash
pnpm typecheck
pnpm test
pnpm lint
pnpm build
```

Or:

```bash
pnpm run ci
```

## Documentation standard

On onboarding, document:

- what the repo actually is
- what it is not
- current content/data source of truth
- branch flow
- deployment assumptions
- known debt and follow-up items

## Human checklist

These are the manual checks that usually still require a human:

- GitHub default branch confirmation
- Vercel project cleanup/rename
- Vercel production branch confirmation
- domain assignment and DNS
- secrets/env values in hosted platforms

## Done criteria

A repo is considered onboarded when:

- local verification passes
- CI is green
- `develop` and `main` are in use as intended
- the correct Vercel project deploys successfully
- stale PRs/branches/projects are cleaned up
- docs reflect reality
