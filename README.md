# BMW Coding Wiki

A crowd-sourced Docusaurus wiki for BMW coding guides, deployed to Cloudflare Pages.

## Quick Start

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deploy

Push to `main` — the GitHub Actions workflow builds and deploys to Cloudflare Pages automatically.

### Required GitHub Repository Secrets

| Secret | Description |
|---|---|
| `CF_API_TOKEN` | Cloudflare API token with Pages permissions |
| `CF_ACCOUNT_ID` | Your Cloudflare account ID |
| `CF_PROJECT_NAME` | The Cloudflare Pages project name |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
