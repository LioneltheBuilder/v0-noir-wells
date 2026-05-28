# Deployment

## Target model

- `develop`: preview / integration validation
- `main`: production

## Current notes

- the repo originated from a v0 export tied to Vercel
- branch-based deployment behavior should be checked in Vercel project settings
- if preview builds should map to `develop`, configure that explicitly instead of assuming it

## Deployment checklist

- verify `pnpm run ci`
- verify public copy matches shipped behavior
- confirm metadata and route changes
- confirm any env changes are documented
