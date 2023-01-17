import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    unocss({
      mode: 'svelte-scoped',
    }),
    svelte({
      experimental: {
        useVitePreprocess: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': __dirname + '/src',
      $: __dirname + '/src/lib',
    },
  },
})
