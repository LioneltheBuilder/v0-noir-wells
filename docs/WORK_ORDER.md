# Work Order

## Current priority stack

1. stabilize repo operations and CI/CD
2. lock in the repeatable onboarding standard for future client repos
3. keep public content honest and aligned with live routes
4. tighten media, accessibility, and performance as follow-on work

## Known debt

- the repo started as a v0 export and needed operating docs and branch discipline
- `lib/onboarding.ts` still references a remote CSV helper and should be reviewed before anyone treats it as production content infrastructure
- `next.config.mjs` originally disabled build-time quality gates; this repo should move toward strict verification
- dependency installation currently warns about `next@14.2.25` paired with `react@19`; verification passes, but the version matrix should be normalized in a later batch

## Update rule

If a batch changes direction, routing, deployment assumptions, or core content ownership, update this file.
