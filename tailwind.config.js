/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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

