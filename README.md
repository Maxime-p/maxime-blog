# Maxime-p.dev

Maxime-p.dev is a personal, English-language site about the JavaScript development ecosystem. It combines original writing with a lightweight, curated reading list of external news and resources.

## Site sections

- **Home** previews the latest three blog posts and latest three news items, with clear calls to action for the rest of the site.
- **Blog** publishes original articles written by Maxime; each article has its own page.
- **News** curates external resources. Each entry links directly to its source in a new browser tab.
- **About** provides a short personal introduction.

## Technology

- Astro 7 with the Cloudflare adapter
- Tailwind CSS 4
- Markdown and MDX content collections
- Sitemap, RSS, and image optimization through Astro integrations

## Local development

Requires Node.js 22.12.0 or later and pnpm.

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Start the local development server. |
| `pnpm build` | Create the production build. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm generate-types` | Generate Cloudflare Worker types. |
| `pnpm astro -- --help` | Show Astro CLI help. |

For product terminology and agent-facing implementation rules, see [AGENTS.md](./AGENTS.md) and [CONTEXT.md](./CONTEXT.md).
