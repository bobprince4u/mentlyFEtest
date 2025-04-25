/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",       // if using the /app directory
    "./pages/**/*.{js,ts,jsx,tsx}",     // if using the /pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // any shared components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#EC4899',
        dark: '#111827',
        light: '#F3F4F6',
      },
    },
  },
  plugins: [],
}

