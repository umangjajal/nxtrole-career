/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode
  darkMode: 'class',

  // Tell Tailwind which files to scan for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],

  theme: {
    extend: {
      // Custom color palette for NxtRole.AI
      colors: {
        'nxt-blue': {
          50: '#f5fbff',
          100: '#e6f4ff',
          500: '#1e90ff',
          600: '#197ae6',
          700: '#0b63d6',
          800: '#084aa8'
        },
      },

      // Add smooth transition for dark/light mode and hover animations
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'spacing': 'margin, padding',
      },

      // Optional: nice gradient backgrounds
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #1e90ff 0%, #0b63d6 100%)',
      },

      // Optional: custom box shadows for feature cards
      boxShadow: {
        'glow': '0 0 20px rgba(30, 144, 255, 0.4)',
      },
    },
  },
  
  plugins: [],
}
