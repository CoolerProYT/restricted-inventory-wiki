import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'RestrictedInventory',
  description: 'Slot-level inventory rules for Minecraft.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/svg+xml' }]
  ],
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'RestrictedInventory',
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'Reference', link: '/reference/configuration', activeMatch: '/reference/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Config screen', link: '/guide/config-screen' },
          { text: 'How restrictions work', link: '/guide/how-it-works' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Configuration', link: '/reference/configuration' },
          { text: 'Variant filters', link: '/reference/component-filters' },
          { text: 'Commands & permissions', link: '/reference/commands' },
          { text: 'Compatibility', link: '/reference/compatibility' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    editLink: undefined,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'RestrictedInventory by CoolerProMC'
    }
  }
})
