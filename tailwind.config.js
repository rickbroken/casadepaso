/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primaria': ['Lexend'],
      },
      colors: {
        'primario': '#007458',
        'inputs': 'rgba(8, 49, 36, 0.38)',
      },
    },
  },
  plugins: [],
}

