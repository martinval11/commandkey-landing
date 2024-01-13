import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CommandKey',
      favicon: '/favicon.png',
      social: {
        github: 'https://github.com/martinval11/commandkey',
      },
      customCss: [
        './src/styles/index.css',
      ],
      sidebar: [
        {
          label: 'Introduction',
          items: [
            {
              label: 'Getting Started',
              link: '/docs',
            },
            {
              label: 'Customization',
              link: '/docs/customization',
            },
            {
              label: 'Animations',
              link: '/docs/animations',
            },
          ],
        },
        {
          label: 'Components',
          items: [
            {
              label: 'Command',
              link: '/docs/command',
            },
            {
              label: 'CommandInput',
              link: '/docs/commandinput',
            },
            {
              label: 'CommandList',
              link: '/docs/commandlist',
            },
            {
              label: 'CommandOption',
              link: '/docs/commandoption',
            },
          ]
        }
      ],
    }),
    react(),
  ],
});
