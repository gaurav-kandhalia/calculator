/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'custom':[ 'League Spartan', 'sans-serif;']
      },
      boxShadow: {
       KeyShadow1: '0px 4px 6px rgba(180, 165, 151, 0.5)',
       ResetShadow1:'0px 4px 6px rgba(64, 78, 114, 0.5)',
       KeyShadow3:'0px 0px 10px 5px rgba(188, 21, 244, 0.75)',
       KeyShadow2: "0px 0px 8px 5px rgba(166, 157, 145, 0.75)"
      },
    },
  },
  plugins: [],
}

