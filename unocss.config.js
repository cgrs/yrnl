import { defineConfig, presetIcons } from 'unocss'

import { presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import { colors } from '@unocss/preset-mini/colors'

function color(name) {
  return {
    DEFAULT: colors[name][500],
    ...colors[name],
  }
}

export default defineConfig({
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
    presetIcons(),
  ],
  theme: {
    colors: {
      primary: color('yellow'),
    },
  },
})
