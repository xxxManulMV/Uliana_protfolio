/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'background': {
          1: '#CBFD79',
          2: '#F9C868',
          3: '#EEEDEB',
          4: '#FB974F',
          5: '#F9EECA',
          6: '#DCC3A7',
        }
      },
    },
    plugins: [],
  }
}
