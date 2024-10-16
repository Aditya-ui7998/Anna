/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Holtwood One SC", 'static']
        // customTwo: ['Londrina Sketch','static']
      },
      clipPath: {
        'triangle-left': 'polygon(0 0, 100% 0, 0 100%)',
        'triangle-right': 'polygon(100% 0, 100% 100%, 0 100%)',
      }
    },
  },
  plugins: [
    
  ],
}