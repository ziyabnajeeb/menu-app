/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [],
};
