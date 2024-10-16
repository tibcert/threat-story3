/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'bebas':  ["Bebas Neue", 'sans-serif'],
        'oswald':  ["Oswald", 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin','video.js','@videojs/themes'),
  ],
}

