# Branching

## Default model

- `main` is the production release branch and should remain deployable
- `develop` is the integration branch for ongoing work and preview validation
- use focused feature branches for non-trivial work (`feature/*`, `fix/*`, `docs/*`) and merge into `develop` first
- avoid mixing unrelated workstreams

## Naming

Examples:

- `feat/homepage-copy-refresh`
- `fix/mobile-nav-overlap`
- `docs/repo-bootstrap`

## Merge flow

1. branch from `develop`
2. merge into `develop` after verification
3. open `develop` -> `main` PR for production promotion

## Before merge

- docs updated as needed
- verification run
- deployment notes called out if env or Vercel behavior changed
