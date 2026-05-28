# Coding Standards

- Prefer small, focused diffs.
- Keep App Router pages thin and push section rendering into `components/`.
- Use TypeScript types where they reduce ambiguity.
- Keep business constants centralized instead of duplicating strings across pages.
- Avoid adding client components unless interactivity actually requires them.
- Do not weaken build or lint guarantees to get a batch through CI.
- Update docs when architecture, routing, or deployment assumptions change.
