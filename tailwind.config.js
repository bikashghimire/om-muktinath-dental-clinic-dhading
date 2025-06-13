/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC', // example dental blue
        'primary-dark': '#0052A3', // darker shade for hover states
      },
    },
  },
  plugins: [],
}

