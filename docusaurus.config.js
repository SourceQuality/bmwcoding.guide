// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BMW Coding Wiki',
  tagline: 'Crowd-sourced BMW coding guides for G series and beyond',
  url: 'https://bmwcoding-guide.andrewhelpern.workers.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SourceQuality',
  projectName: 'bmwcoding.guide',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SourceQuality/bmwcoding.guide/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'BMW Coding Wiki',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            href: 'https://github.com/SourceQuality/bmwcoding.guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              { label: 'Getting Started', to: '/docs/intro' },
              { label: 'G20 3 Series', to: '/docs/g-series/g20' },
              { label: 'G30 5 Series', to: '/docs/g-series/g30' },
            ],
          },
          {
            title: 'Tools',
            items: [
              { label: 'BimmerCode', to: '/docs/tools/bimmercode' },
              { label: 'E-Sys', to: '/docs/tools/esys' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SourceQuality/bmwcoding.guide',
              },
              {
                label: 'Contribute',
                href: 'https://github.com/SourceQuality/bmwcoding.guide/blob/main/CONTRIBUTING.md',
              },
            ],
          },
        ],
        copyright: `Community-maintained. Not affiliated with BMW AG.`,
      },
    }),
};

module.exports = config;
