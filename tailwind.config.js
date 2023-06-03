/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //Background
        'light-blue': {
          50: '#feffff',
          100: '#fdfeff',
          200: '#fafdfe',
          300: '#f7fbfd',
          400: '#f0f9fc',
          500: '#eaf6fa',
          600: '#d3dde1',
          700: '#b0b9bc',
          800: '#8c9496',
          900: '#696f71',
          950: '#3b3e3f',
        },
        // Primary Text
        'dark-navy-blue': {
          50: '#f2f4f6',
          100: '#e6e9ec',
          200: '#bfc8d0',
          300: '#99a7b4',
          400: '#4d647c',
          500: '#002244',
          600: '#001f3d',
          700: '#001a33',
          800: '#001429',
          900: '#000f1f',
          950: '#000911',
        },
        // Secondary Text
        'ocean-blue': {
          50: '#f2f8f9',
          100: '#e6f0f4',
          200: '#bfdae2',
          300: '#99c4d1',
          400: '#4d97af',
          500: '#006b8c',
          600: '#00607e',
          700: '#005069',
          800: '#004054',
          900: '#00303f',
          950: '#001b23',
        },
        //Borders
        'light-gray': {
          50: '#fcfcfc',
          100: '#fafafa',
          200: '#f2f2f2',
          300: '#ebebeb',
          400: '#dbdbdb',
          500: '#cccccc',
          600: '#b8b8b8',
          700: '#999999',
          800: '#7a7a7a',
          900: '#5c5c5c',
          950: '#333333',
        },
        //Hover
        teal: {
          50: '#f2f9f9',
          100: '#e6f2f2',
          200: '#bfdfdf',
          300: '#99cccc',
          400: '#4da6a6',
          500: '#008080',
          600: '#007373',
          700: '#006060',
          800: '#004d4d',
          900: '#003a3a',
          950: '#002020',
        },
        //Background for Selected Text
        'dark-blue': {
          50: '#f2f2f7',
          100: '#e6e6f0',
          200: '#bfbfd9',
          300: '#9999c2',
          400: '#4d4d94',
          500: '#000066',
          600: '#00005c',
          700: '#00004d',
          800: '#00003d',
          900: '#00002e',
          950: '#00001a',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
