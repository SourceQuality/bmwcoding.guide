// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // Production. Branch/dev builds are served from
  // https://<branch>-bmwcoding-guide.andrewhelpern.workers.dev
  site: 'https://bmwcoding.guide',
  integrations: [
    starlight({
      title: 'BMW Coding Guide',
      tagline: 'Community coding guides for G series BMWs',
      description:
        'Community-maintained BMW coding guides, curated from forum threads and tool documentation. Not affiliated with BMW AG.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/SourceQuality/bmwcoding.guide',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/SourceQuality/bmwcoding.guide/edit/main/',
      },
      // Right-hand "On this page" rail. Starlight tracks the scroll position and
      // sets aria-current on the active link; src/styles/theme.css styles it.
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      customCss: ['./src/styles/theme.css'],
      components: {
        // Wraps Starlight's own component and draws the stepped rail over it.
        TableOfContents: './src/components/TableOfContents.astro',
      },
      credits: false,
    }),
  ],
});
