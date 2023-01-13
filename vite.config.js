import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import { presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import { colors } from '@unocss/preset-mini/colors'
import { svelte } from '@sveltejs/vite-plugin-svelte'

function color(name) {
  return {
    DEFAULT: colors[name][500],
    ...colors[name],
  }
}

export default defineConfig({
  plugins: [
    unocss({
      mode: 'svelte-scoped',
      transformers: [transformerDirectives()],
      presets: [
        presetUno({ dark: 'media' }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: [
              {
                name: 'Manrope',
                weights: ['400..700'],
              },
            ],
            serif: [
              {
                name: 'Frank Ruhl Libre',
                weights: [700],
              },
            ],
          },
        }),
      ],
      theme: {
        colors: {
          primary: color('yellow'),
        },
      },
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
