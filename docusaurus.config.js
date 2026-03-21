// Docusaurus configuration - minimal starter
module.exports = {
  title: 'BMW Coding Wiki',
  tagline: 'Crowd-sourced BMW coding guides',
  url: 'https://bmwcoding.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SourceQuality',
  projectName: 'bmwcoding.guide',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SourceQuality/bmwcoding.guide/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
