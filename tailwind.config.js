/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Other theme customizations
    },
  },
  plugins: [],
  // Add custom styles using the @layer directive
  customUnderline: {
    '@layer components': {
      '.custom-underline': {
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '-4px', // Adjust this value to set the distance from the text
          width: '100%',
          height: '2px', // Adjust the height of the underline
          backgroundColor: 'red', // Set the color of the underline
        },
      },
    },
  },
}
