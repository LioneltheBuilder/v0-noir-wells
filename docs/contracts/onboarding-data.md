# Onboarding Data Contract

## Current behavior

`lib/onboarding.ts` fetches a remote CSV and parses the latest row for onboarding-style brand inputs.

## Constraints

- this is not a guaranteed durable CMS
- failures fall back to safe default values
- any feature that depends on this helper should tolerate missing or stale data

## Rule

If onboarding data becomes product-critical, replace this helper with a documented, versioned content source.
