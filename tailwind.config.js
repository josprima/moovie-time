// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('./src/constants/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    extend: {
      flexGrow: {
        2: 2,
      },
    },
  },
  plugins: [],
};
