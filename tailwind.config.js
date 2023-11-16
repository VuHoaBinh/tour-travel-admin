/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          main: 'var(--color-primary-main)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        secondary: {
          main: 'var(--color-secondary-main)',
          dark: 'var(--color-secondary-dark)',
          light: 'var(--color-secondary-light)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
