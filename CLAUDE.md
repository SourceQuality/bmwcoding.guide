# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

`bmwcoding.guide` is a documentation site that collects BMW coding guides and how-tos, curated from
forum threads and other validated external sources. Readers are BMW owners coding their own cars
with tools such as BimmerCode, BimmerUtility, and E-Sys. Coverage centers on the G series chassis.

The site was rebuilt on Astro and Starlight. The guide corpus was cleared in that rebuild and is
being restored source by source, so `src/content/docs/` holds only a landing page and an about
page. Do not repopulate guides from memory. See the content sourcing rules below.

## Stack

Astro 7 with the Starlight documentation theme. Content is authored in Markdown and MDX under
`src/content/docs/`. Starlight bundles MDX, Pagefind search, expressive-code, and sitemap, so those
do not need installing separately.

## Commands

```bash
npm install       # install dependencies
npm run dev       # astro dev - local dev server, defaults to port 4321
npm run build     # astro build - static output to ./dist
npm run preview   # astro preview - serve the built ./dist output
npm run check     # astro check - typecheck content collections and components
```

`npm run dev` detaches. Use `npx astro dev stop`, `npx astro dev status`, and `npx astro dev logs`
to manage it.

`npm run check` needs `@astrojs/check` and `typescript`, which are installed as dev dependencies.

There are no lint or test scripts. `TODO: not yet in repo`.

Node version is not pinned. There is no `.nvmrc` and no `engines` field. `TODO: verify`.

## Architecture

- **Content** lives in `src/content/docs/`. Each Markdown or MDX file becomes a route from its path.
- **The sidebar is generated from the directory tree.** `astro.config.mjs` sets no `sidebar` option,
  so Starlight autogenerates one. Order within a group comes from `sidebar.order` in frontmatter.
  Add a `sidebar` config block only when the automatic grouping stops being enough.
- **Frontmatter is schema-validated.** `src/content.config.ts` wires `docsLoader()` and
  `docsSchema()` from Starlight. `title` is required; `description` is optional but expected on
  every page. A key outside the schema is silently dropped, not rejected: the build passes and the
  value is unreadable. Extend the schema before relying on a new key.
- **Site config** including title, tagline, social links, `editLink`, and the table of contents
  depth is in `astro.config.mjs`.
- **Theming** is one file, `src/styles/theme.css`, registered through Starlight's `customCss`.
  It is deliberately unlayered: Starlight defines its tokens inside `@layer starlight.base`, and
  unlayered CSS beats layered CSS regardless of specificity. Because of that, any token override
  must set both the dark (`:root`) and light (`:root[data-theme='light']`) blocks, or light mode
  inherits the dark value.
- **The right-hand "On this page" rail** is `src/components/TableOfContents.astro`, registered under
  `components` in the Starlight config. It renders Starlight's own component inside a wrapper and
  draws an SVG rail over it: a track that steps right at each nesting level with bezier elbows, and
  an accent path revealed by `stroke-dasharray` so the highlight slides along the track. Geometry is
  measured from the rendered links at runtime, not hardcoded.
  Scroll tracking stays Starlight's: it sets `aria-current="true"`, and a `MutationObserver` on that
  attribute triggers a redraw. Do not reimplement scroll tracking. The elbow gaps come from the
  `margin-block-start` rules in `theme.css`; changing them changes where the curves land.
  Re-check this override after a Starlight upgrade.
  Two constraints are easy to break. The rail must stay a single subpath, because a dash pattern
  restarts at every `M` command: split it and every piece repaints the pattern, which lights the
  whole rail at once. Starlight also leaves `aria-current` unset until a heading crosses its
  observer band, so the component falls back to the first link at the top of a page.
- **Static assets**: no `public/` directory and no favicon yet. `TODO: not yet in repo`.

## Theming

The palette is the motorsport tri-stripe: `#81C4FF` light blue, `#16588E` dark blue, `#E7222E` red,
defined as `--stripe-*` custom properties in `src/styles/theme.css`.

Colour is the only borrowed element. Do not add the BMW roundel, the M logo, the BMW wordmark, or
any imitation of them. Keep the not-affiliated disclaimer on the landing page and the about page.

`#81C4FF` does not meet contrast requirements on a light background. It is the dark-theme accent
only. `#16588E` is the light-theme accent.

## Deployment

Pushing to GitHub (`SourceQuality/bmwcoding.guide`) triggers a Cloudflare build and deploy. There is
no `.github/workflows/` directory; Cloudflare runs the build itself. `wrangler.toml` names the
Worker `bmwcoding-guide` and serves static assets from `./dist`, which must stay in step with
Astro's output directory.

- Production: `https://bmwcoding.guide` (set as `site` in `astro.config.mjs`, which drives canonical
  URLs and the sitemap)
- Branch previews: `https://<branch>-bmwcoding-guide.andrewhelpern.workers.dev`

`main` is the production branch. `dev` is the working branch.

## Content sourcing rules

This site aggregates work published by other people. Accuracy is a safety issue: a wrong coding
value can leave a module unusable.

- Every guide must cite its source. Include the thread or article URL in frontmatter and link it
  in the page body.
- Never invent or infer a module name, ECU address, FDL or NCS code, parameter name, value,
  cable, adapter, or software version. If a source does not state it, the page does not claim it.
- Never generalize a procedure across chassis, model year, or head unit generation unless a source
  states it applies. Record the exact chassis and build the source used.
- When sources disagree, present both and attribute each. Do not silently pick one.
- Mark anything reported by a single unverified source with a `:::caution` aside.
- Reproduce procedures in your own words. Do not paste source text. Quote at most a short phrase
  where exact wording matters, and attribute it.
- Prefer primary sources: manufacturer or tool documentation, then established forums, then
  individual posts. Avoid unattributed reposts.
- If a request asks you to write a guide for which no source exists in the repo or was provided,
  stop and ask. Do not write it from general knowledge.

`TODO: verify` — no frontmatter field for the source URL has been chosen yet. Extend `docsSchema()`
in `src/content.config.ts` before the first sourced guide lands. Until then an unrecognized `source:`
key is dropped at build time without warning, so the citation would silently vanish.

## Writing style

Follow ASD-STE100 Simplified Technical English 

Write plainly. Do not write prose that sounds LLM-generated.

- Use active voice, present tense, and second person.
- Keep sentences short. Keep paragraphs to two sentences or fewer.
- Do not use marketing language. "Perfect for" and "essential for" become "use for".
- Do not use Latin abbreviations. Write "for example" and "that is".
- Keep pages timeless. Avoid "recently", "now available", month names, and year references outside
  changelogs.
- Section titles use sentence case and the imperative mood. No gerunds, no questions.
- Use descriptive link text. Never "here" or "read more".
- Spell out abbreviations on first use, including BMW-specific ones such as FA, VO, and FDL.
- Use `<PLACEHOLDER>` angle brackets for values the reader substitutes.
- Use `:::note` and `:::caution` asides sparingly, at most one of each per section.

## File conventions

- Content files are kebab-case `.md` under `src/content/docs/`. Use `.mdx` only when the page needs
  components, as `index.mdx` does for its card grid.
- The route comes from the file path, so `src/content/docs/mods/ece-tail-lights.md` serves at
  `/mods/ece-tail-lights/`. There is no `id` or `slug` field to maintain.
- A file named with a leading underscore is ignored by the loader.
- Internal links are absolute site paths with a trailing slash, for example `/mods/anti-dazzle/`.
- Images: `TODO: not yet in repo`. Neither `public/` nor `src/assets/` exists. Put images a page
  imports in `src/assets/` so Astro optimizes them; put files that must keep a fixed URL in
  `public/`.
