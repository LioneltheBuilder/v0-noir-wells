# Architecture Constitution

## Purpose

This repo exists to ship and maintain the Noir Well Health public website.

## Non-negotiables

- Keep public messaging aligned with real implemented behavior.
- Preserve accessibility basics: semantic structure, keyboard navigation, alt text, focus visibility, and readable contrast.
- Preserve SEO basics: stable metadata, crawlable content, and meaningful headings.
- Keep the site operable as a static-first marketing surface unless a documented product change introduces dynamic infrastructure.

## Current architecture boundary

- App Router pages live under `app/`
- homepage sections live under `components/`
- static business content and contact data live in `lib/config.ts`
- visual assets live in `public/`
- helper import logic lives in `lib/onboarding.ts`

## Change rules

- document new env requirements before merging
- document route or information-architecture changes before merging
- do not add backend-like complexity without a contract doc and setup notes
