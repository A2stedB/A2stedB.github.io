// @ts-check
import vue from '@astrojs/vue'
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {inlineStylesheets: 'never'},
  vite: {
    plugins: [{
      name: 'watch-public-folder',
      handleHotUpdate({file, server}) {
        if (file.includes('public')) {
          server.ws.send({type: 'full-reload'})
        };
      }
    }]
  },
  integrations: [vue()],
  site: 'https://a2stedb.github.io/'
});
