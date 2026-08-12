# BMW Coding Guide

Community-maintained BMW coding guides, built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build) and deployed to Cloudflare Workers.

Production: [bmwcoding.guide](https://bmwcoding.guide)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # static output to ./dist
npm run preview   # serve the built output
```

## Deploy

Pushing to GitHub triggers a Cloudflare build. `main` deploys to production. Other
branches get a preview at `https://<branch>-bmwcoding-guide.andrewhelpern.workers.dev`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Guides must cite their sources.

Not affiliated with, endorsed by, or sponsored by BMW AG.
