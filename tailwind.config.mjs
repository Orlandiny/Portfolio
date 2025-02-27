/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Corregí "darkmode" a "darkMode" (es case-sensitive)
  theme: {
    extend: {
      spacing: {
        '22': '5.5rem', // 22 * 0.25rem = 5.5rem
      },
    },
  },
  plugins: [],
};