# Maxime-p.dev

Maxime-p.dev is a personal English-language blog and curated news site for the JavaScript development ecosystem. Read [CONTEXT.md](./CONTEXT.md) before changing content models, routes, or copy so product terms stay consistent.

## Product

The site has four primary destinations:

- **Home** previews the three newest Blog Posts and three newest News Items, then links clearly to Blog, News, and About.
- **Blog** contains articles written by Maxime. Each Blog Post has an internal detail page.
- **News** is a curated list of external resources ordered by Source Publication Date. A News Item has no internal detail page: its title and thumbnail open its Destination URL in a new tab. Every item has one News Resource Type written directly in its frontmatter; resource types are listed dynamically by reference count.
- **About** is a short personal profile. Keep missing biographical details as explicit placeholders or request them; do not invent personal facts.

## News curation

For each News Item, use the source publication's header or Open Graph image as `thumbnailUrl`. Prefer the `og:image` URL exposed by the Destination URL; use the publisher's official fallback image only when no header or `og:image` is available. If the source embeds a relevant YouTube video and its official video thumbnail better represents the resource than the page image, use `https://i.ytimg.com/vi/<video-id>/maxresdefault.jpg` after confirming it is available; otherwise use the source's header, Open Graph image, or official fallback image.

Use one `resourceType` per News Item from: `AI Model`, `Framework`, `Runtime`, `Library`, `Language`, `Tool`, or `Platform`. Do not add tags: they do not provide enough useful, independent filtering value for this publication. Start new entries from this frontmatter shape:

```yaml
title: 'Example resource'
sourcePubDate: '2026-09-12'
thumbnailUrl: 'https://publisher.example/og-image.png'
destinationUrl: 'https://publisher.example/resource'
resourceType: Tool
```

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
