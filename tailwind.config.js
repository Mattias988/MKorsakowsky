/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        grayCustom: '#ABABAB',
      },
      boxShadow: {
        'custom': '2px 15px 50px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        slideInRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
