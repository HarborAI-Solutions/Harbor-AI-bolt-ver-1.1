/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007BFF', // A vibrant blue
        'secondary': '#00D1FF', // Electric Teal
        'accent': '#6610F2', // Electric Purple
        'background': '#0F172A', // Dark Background
        'text-primary': '#FFFFFF', // White text
        'text-secondary': '#AAAAAA', // Light Gray text
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Using Roboto as requested
      },
      boxShadow: {
        'futuristic': '0 0 20px rgba(0, 209, 255, 0.5)', // Electric shadow
      },
      backgroundImage: {
        'gradient-futuristic': 'linear-gradient(to right, #007BFF, #00D1FF)',
      }
    },
  },
  plugins: [],
}
