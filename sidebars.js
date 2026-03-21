/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'G Series',
      collapsed: false,
      items: [
        'g-series/overview',
        'g-series/g20',
        'g-series/g30',
        'g-series/g05',
        'g-series/g80-g82',
        'g-series/g70',
      ],
    },
    {
      type: 'category',
      label: 'Coding Tools',
      items: [
        'tools/bimmercode',
        'tools/esys',
        'tools/xhp-flasher',
      ],
    },
    {
      type: 'category',
      label: 'Common Mods',
      items: [
        'mods/digital-speedometer',
        'mods/ambient-lighting',
        'mods/exhaust-burble',
        'mods/start-stop-memory',
        'mods/driving-modes',
      ],
    },
    'safety',
  ],
};

module.exports = sidebars;
