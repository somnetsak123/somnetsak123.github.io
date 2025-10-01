import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueDevTools(),
    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: fileURLToPath(new URL('./src/css/quasar-variables.sass', import.meta.url)),
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
