# News watch

Daily cloud watch for `Maxime-p/maxime-blog`: propose News Items about substantial new JavaScript or AI capabilities. Maxime decides what to publish.

## Editorial selection

Select announcements with at least one concrete new capability: what developers can now build or do, and why it matters. Prioritize major feature releases, new frameworks or tools, and new model generations.

Judge substance relative to release cadence. Feature-rich minor releases can qualify; major versions consisting mainly of maintenance or breaking changes do not automatically qualify. Significant, usable beta or RC releases can qualify; state their status.

Exclude security-only releases, bug fixes, routine patches, dependency updates, deprecations, marketing roundups, pricing-only changes and speculative roadmaps. Mixed releases qualify for their new features. Performance improvements qualify when they enable a meaningful new workflow or capability.

Support the selected capability with the official announcement. There is no daily publication quota.

## Source base

Sources derived from committed `src/content/news/` entries. Prefer official feeds or release indexes; verify feed URLs rather than guessing them.

| Projects | Official source |
| --- | --- |
| Astro | `astro.build/blog` |
| Node.js | `nodejs.org/en/blog/release` |
| Solid | `solidjs.com/blog` |
| TypeScript | `devblogs.microsoft.com/typescript` |
| Bun | `bun.com/blog` |
| React | `react.dev/blog`; `github.com/facebook/react/releases` |
| Next.js | `nextjs.org/blog` |
| Vite+, VoidZero | `voidzero.dev/posts` |
| Effect | `effect.website/blog/releases` |
| OpenAI models | `openai.com/index` |
| Claude models | `anthropic.com/news` official announcements and product pages |
| Gemini models | `blog.google` official Gemini announcements |
| Grok models | `x.ai/news` |

## Retrieval and deduplication

1. Start from the default branch. Read this file and `AGENTS.md`; consult domain docs or the schema for ambiguities.
2. Scan every listed source for the last seven days. Retrieve title, original date, URL and short description first; record inaccessible sources.
3. Apply editorial selection before fetching complete announcements. Prefer targeted extracts and reuse each resource within the run.
4. Search existing News Items and PRs by URL, project and release identity; retrieve matching records only. PRs closed without merge are refusals. Different URLs for the same announcement are duplicates.
5. Verify capabilities and metadata on the official destination page. Skip unverifiable candidates and report the reason.

Refresh the catalogue from newly committed News Items since this file's last update, using targeted changes rather than rereading all content. Ignore uncommitted files. If that comparison is unavailable, report the catalogue as the coverage base.

## Metadata and PRs

Follow `AGENTS.md` for English titles, frontmatter and images. When search results omit the image, extract `og:image` from destination HTML, resolve relative URLs and confirm availability. Apply repository rules for header images and official fallbacks; invent no metadata.

Create one branch `codex/news-<slug>` and one PR per announcement. Follow existing file naming; change only the News Item file. Describe new capabilities, editorial relevance and source URL. Delegate `pnpm build` to GitHub Actions; report only confirmed results. Never merge automatically.

Return PR links and blockers concisely. If nothing qualifies, state that no PR was created and report coverage gaps. In simulation mode, return proposed branch, file, frontmatter and PR description without mutations.
