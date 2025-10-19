import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        color_dark_1: '#252525',
        color_dark_2: '#3a3a3a',
        color_dark_3: '#4f4f4f',
        color_dark_4: '#636363',
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        heading: ['Arvo', 'serif'],
      },
      fontSize: {
        'display-1': '4.1rem',
        'display-2': '3.6rem',
        'display-3': '3.4rem',
        'display-4': '2.6rem',
        h2: '2.1rem',
        h3: '1.69rem',
        h4: '1.4rem',
        lead: '1.68rem',
        'lead-sm': '1.25rem',
      },
    },
  },
  plugins: [],
}
export default config
