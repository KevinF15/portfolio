/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // blue
        'primary-blue': '#0198b1',
        'dark-blue': '#015f73',
        'light-blue': '#57c7d3',

        // red
        'primary-red': '#d6192b',
        'dark-red': '#8f0d1a',
        'light-red': '#f26a76',

        // gray
        'primary-gray': '#172e36',
        'dark-gray': '#0d1a20',
        'light-gray': '#4a6976',
      },
    },
  },
  plugins: [require('tailwind-children')],
};
