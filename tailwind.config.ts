import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        accent: '#22d3ee',
        dark: '#0b1020',
      },
    },
  },
  plugins: [],
} satisfies Config
