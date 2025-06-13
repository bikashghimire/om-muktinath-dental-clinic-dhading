import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC', // example dental blue
      },
      height: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
export default config
