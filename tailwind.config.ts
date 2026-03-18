import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        kwerk: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          grey: '#6b6b6b',
          light: '#f5f3ef',
          cream: '#ede9e1',
          gold: '#c9a96e',
        },
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
