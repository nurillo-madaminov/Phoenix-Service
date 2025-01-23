import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cblack: '#1d1616',
        'dark-red': '#8e1616',
        'light-red': '#d84040',
      },
    },
  },
  plugins: [daisyui],
}
