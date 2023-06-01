/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          'light-blue': '#EAF6FA', //Background
          'dark-navy-blue': '#002244', // Primary Text
          'ocean-blue': ' #006B8C', // Secondary Text
          'light-gray': '#CCCCCC', //Borders
          teal: '#008080', //Hover
          'dark-blue': '#000066', //Background for Selected Text
        },
      },
    },
  },
  plugins: [],
};
