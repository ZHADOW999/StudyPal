/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        studyYellow:{
          100:'#FFD233',
          200:'#F7D339',
          300:'#D19700'
        },
        studyBlack:{
          100:'#DDDDDD',
          200:'#A7AAAD',
          300:'#121212'
        },
      },

      fontFamily:{
        "Raleway-Medium":['Raleway-Medium','sans-serif'],
        "Raleway-Regular":['Raleway-Regular','sans-serif'],
        "Raleway-Bold":['Raleway-Bold','sans-serif'],
      }
    },
  },
  plugins: [],
}