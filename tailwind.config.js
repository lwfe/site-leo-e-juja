/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      'half': '450px'
    },
    extend: {},
    colors: {
      'dark-emo': '#191B18',
      'rocha': '#404241',
      'pano-de-chao': '#969090',
      'cimento': '#CCC7C1',
      'arroz':'#E2D8D7',
      'coreano': '#E5B8A5',
      'creme-de-morango': '#E36569',
      'amora-trans': '#B92E41',
      'amora-cis': '#972131',
      'amorinha': '#6D161F',
    }
  },
  plugins: [],
}