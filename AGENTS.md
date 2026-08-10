# Maxime-p.dev

Maxime-p.dev is a personal English-language blog and curated news site for the JavaScript development ecosystem. Read [CONTEXT.md](./CONTEXT.md) before changing content models, routes, or copy so product terms stay consistent.

## Product

The site has four primary destinations:

- **Home** previews the three newest Blog Posts and three newest News Items, then links clearly to Blog, News, and About.
- **Blog** contains original articles written by Maxime. Each Blog Post has an internal detail page.
- **News** is a manually curated list of external resources. A News Item has no internal detail page: its title and thumbnail open its Destination URL in a new tab.
- **About** is a short personal profile. Keep missing biographical details as explicit placeholders or request them; do not invent personal facts.

## Interface

Build accessible Astro components with Tailwind utilities and simple, shadcn-inspired primitives: clear hierarchy, consistent tokens, useful focus states, and responsive layouts. Keep the site lightweight; do not add React merely to use shadcn/ui.

## SEO

Use English page copy and metadata. Give every public page a unique title and description, preserve canonical URLs rooted at `https://maxime-p.dev`, and maintain relevant Open Graph metadata, sitemap, and RSS output. Add `BlogPosting` structured data only to original Blog Post pages; external News Items do not need speculative structured data.

## Verification

Run `pnpm build` after a production-facing change. Keep new content, routes, metadata, and UI behavior aligned with the product rules above.

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues for this repository. See `docs/agents/issue-tracker.md`.

### Triage labels

The default five-role vocabulary is used. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository rooted at `CONTEXT.md`; ADRs live in `docs/adr/` when needed. See `docs/agents/domain.md`.
