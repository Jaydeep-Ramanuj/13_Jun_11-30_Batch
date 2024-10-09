/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      height: {
        100: '100px',
      },
      width: {
        100: '100px',
      },
      colors: {
        jinal: '#24414e',
      },
      boxShadow: {
        '5xl':
          'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
      },
    },
  },
  plugins: [],
};
