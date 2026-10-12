# News watch

Daily cloud watch for `Maxime-p/maxime-blog`: propose News Items about substantial new JavaScript or AI capabilities. Maxime decides what to publish.

## Editorial selection

Select announcements with at least one concrete new capability: what developers can now build or do, and why it matters. Prioritize major feature releases, new frameworks or tools, and new model generations.

Judge substance relative to release cadence. Feature-rich minor releases can qualify; major versions consisting mainly of maintenance or breaking changes do not automatically qualify. Significant, usable beta or RC releases can qualify; state their status.

Exclude security-only releases, bug fixes, routine patches, dependency updates, deprecations, marketing roundups, pricing-only changes and speculative roadmaps. Mixed releases qualify for their new features. Performance improvements qualify when they enable a meaningful new workflow or capability.

Support the selected capability with the official announcement. There is no daily publication quota.

## Source base

Sources derived from committed `src/content/news/` entries and explicitly curated official projects below. Prefer official feeds or release indexes; verify feed URLs rather than guessing them.

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
| Meta / Facebook Muse models | [AI at Meta announcements](https://ai.meta.com/blog/); [Meta AI Research](https://research.meta.ai/); [Meta Newsroom](https://about.fb.com/news/); [Meta Model API model catalogue](https://dev.meta.ai/docs/models) for capability and availability checks |
| OpenCode / OpenCode 2 | [Official site](https://opencode.ai/); [Changelog](https://opencode.ai/changelog); [Official releases](https://github.com/anomalyco/opencode/releases); [V2 documentation](https://opencode.ai/v2/docs); [V1-to-V2 migration guide](https://dev.opencode.ai/v2/docs/migrate-v1/) |

These additions were checked against official pages on 2026-10-12. Meta's announcement identifies Muse as a family from Meta Superintelligence Labs: [Muse Spark announcement](https://ai.meta.com/blog/introducing-muse-spark-msl/). The OpenCode site links to `anomalyco/opencode` and the V2 docs; its changelog and migration guide explicitly name OpenCode 2. Watch the complete Muse family and OpenCode 2 releases, not just these reference pages. Documentation and catalogues corroborate capabilities but do not establish a new announcement's original publication date; verify that date on its official announcement or release record. Do not confuse Meta Muse models with unrelated projects named Muse, or OpenCode with unrelated namesakes.

## Retrieval and deduplication

1. Start from the default branch. Read this file and `AGENTS.md`; consult domain docs or the schema for ambiguities.
2. Scan every listed source for the last seven days. Retrieve title, original date, URL and short description first; record inaccessible sources.
3. Apply editorial selection before fetching complete announcements. Prefer targeted extracts and reuse each resource within the run.
4. Search existing News Items, all PR states (including drafts) and branches by URL, project and release identity; retrieve matching records only. PRs closed without merge are refusals. Different URLs for the same announcement are duplicates. Reuse an existing matching open PR or unfinished branch instead of creating another; do not reopen a refusal. A draft with human TODOs remains a duplicate on later runs; update only when new verified information is available.
5. Verify the title/release identity, original publication date, official destination URL and at least one concrete new capability on the official announcement or release record. These are mandatory: skip a candidate and report the reason if any is unverifiable. Missing or unverifiable secondary metadata, including the image, does not disqualify an otherwise eligible announcement; use the draft PR and human TODO procedure below.

Refresh the catalogue from newly committed News Items since this file's last update, using targeted changes rather than rereading all content. Ignore uncommitted files. If that comparison is unavailable, report the catalogue as the coverage base.

## Metadata and PRs

Follow `AGENTS.md` for English titles, frontmatter, resource types and the normal publisher-image policy. Never invent metadata. Title, original `sourcePubDate`, official `destinationUrl` and the capability supported by that source must remain verified. Keep one valid `resourceType` from the repository vocabulary; this classification is not optional. Omit optional secondary metadata when unavailable and document the omission rather than speculating.

### Image retrieval

When search results omit the image, inspect destination HTML for the header or `og:image`, resolve relative URLs, and apply the repository's official fallback or relevant YouTube-thumbnail rules. When a banner has variants in `src`, `srcset` or `<picture>`, select the highest-resolution available variant of that same banner. Use declared dimensions/descriptors or fetched image dimensions; do not guess larger URLs by editing a filename or query parameter. Check the selected URL with an HTTP request: follow redirects and confirm a successful response containing a decodable image (a HEAD request alone or a search preview is not sufficient). Record what was actually checked. If tools cannot inspect variants or verify the binary response, state that limitation as a human TODO rather than claiming success.

### Incomplete metadata: draft PRs and schema compatibility

Create a draft PR for every otherwise eligible, nonduplicate announcement whose secondary metadata still needs human completion. Do not discard it solely because an image is missing or cannot be verified. This is a narrow exception to the normal `AGENTS.md` publisher-image policy for drafts awaiting human review; that policy still governs publication.

The current `src/content.config.ts` requires `thumbnailUrl: z.url()`. Do not omit the field, use null/an empty string/`TODO`, substitute the destination page, or weaken the schema. Use this order:

1. If a publisher header, Open Graph, official fallback or relevant official video thumbnail URL was actually retrieved but availability cannot be verified, retain that absolute URL in the draft and explicitly mark it **unverified**. Never invent a publisher image or infer an unpublished variant.
2. If no usable publisher image URL was found, use the repository's existing neutral asset `src/assets/blog-placeholder-1.jpg` as a temporary placeholder. Confirm that it exists on the default branch, resolve that branch's exact commit SHA, and use its absolute raw-file URL: `https://raw.githubusercontent.com/Maxime-p/maxime-blog/<verified-commit-sha>/src/assets/blog-placeholder-1.jpg`. The commit SHA must be retrieved, not guessed, and the asset must already exist at that commit. This is explicitly a **repository placeholder**, not an image from the announcement. Attempt the same image-availability check; if unavailable to the tools, record the unverified status. Do not use a relative `src/assets/` path as a URL or add a generated illustration.
3. If neither an observed publisher URL nor a confirmed existing repository asset is available, still open a draft proposal PR. Commit `docs/agents/news-proposals/<slug>.md` with the verified title, original date, official source URL, resource type, capability evidence, intended News Item filename and human TODOs. Do not add invalid frontmatter under `src/content/news/`. A human must supply a real image URL and move the proposal into a schema-valid News Item before publication.

For each missing or unverified secondary field, include a `Human TODOs — required before merge` checklist in the PR body. State the field, missing/unverified/placeholder status, reason or tool limitation, URLs and checks attempted, exact action needed and acceptance criterion. For images, require a human to obtain or verify the appropriate publisher image, choose the highest-resolution available variant of the same banner, replace any repository placeholder in `thumbnailUrl`, and confirm the final URL returns a real image. Keep these TODOs out of public titles and other public metadata; a YAML comment beside a temporary `thumbnailUrl` may point to the PR checklist. Passing schema validation or CI does not prove image availability or resolve editorial TODOs. Leave the PR in draft until Maxime completes the checklist and decides it is ready.

### Branches, PRs and output

Create one branch `codex/news-<slug>` and one PR per announcement, reusing matching work as described above. Follow existing file naming. Normally change only the News Item file; the proposal document above is the sole fallback exception when no schema-compatible thumbnail can be supplied. Describe new capabilities, editorial relevance, official source URL and verification evidence. Use a regular PR when all required checks and metadata are complete; use a draft with explicit human TODOs otherwise. Delegate `pnpm build` to GitHub Actions; report only confirmed results. Never merge automatically.

Return only created or materially updated PR links, their actionable human TODOs, and actionable blockers or coverage gaps. If nothing qualifies and all required checks succeeded, stay quiet. A missing secondary field tracked in a draft PR is a human TODO, not a reason to stop the watch or suppress that PR. Missing mandatory evidence, inaccessible required instructions, unavailable tools needed to establish mandatory facts or deduplication, and failed GitHub writes remain actionable blockers; do not claim success. In simulation mode, return proposed branch, file, frontmatter or proposal document, and PR description without mutations.
