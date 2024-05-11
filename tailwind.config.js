/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/items/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': "#D46868",
        'card-background': '#080808',
        'main-gray': "#484E53",
        'secondary-gray': '#A9A9A9'
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
