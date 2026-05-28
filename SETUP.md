# Setup

## Requirements

- Node.js 20+
- pnpm 10+

## Install

```bash
pnpm install
```

## Run locally

```bash
pnpm dev
```

The app currently does not require runtime env vars for basic local rendering. See `.env.example`.

## Verification

```bash
pnpm typecheck
pnpm test
pnpm lint
pnpm build
```

Or run the full batch:

```bash
pnpm run ci
```

## Branch model

- `main`: production-ready branch
- `develop`: integration and preview branch

See `docs/development/BRANCHING.md` and `docs/development/RELEASING.md` for the full workflow.
