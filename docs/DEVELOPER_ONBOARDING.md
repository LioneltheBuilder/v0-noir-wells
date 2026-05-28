# Developer Onboarding

## First read

1. `README.md`
2. `SETUP.md`
3. `docs/DOCUMENTATION_INDEX.md`
4. `docs/ARCHITECTURE_CONSTITUTION.md`
5. `docs/contracts/INDEX.md`

## Core commands

```bash
pnpm install
pnpm dev
pnpm run ci
```

## Repo map

- `app/`: route entry points
- `components/`: homepage and shared UI sections
- `lib/`: config and helper logic
- `public/`: brand and content media
- `.cursor/`: repo-specific agent workflows
- `docs/`: contracts, onboarding, and deployment notes

## Current operational notes

- the site is currently content-first, not backend-driven
- booking points to Zocdoc through site routes
- membership, events, blog, and partner pages should be treated as marketing content unless code proves otherwise
- if you add infra, env vars, or external services, update docs in the same batch
