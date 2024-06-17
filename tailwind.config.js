/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2639ed",
        servicesLeft: '#fef3c7',
        serviceRight: '#eff6ff',
        body: '#F4F4F4'
      },
      screens: {
        sm: '320px',

        lg: '768px',
        xl: '1280px',
        xxl: '1124px',
        xxxl: '1400px'
      },
      fontFamily: {
        primary: 'Proxima Nova Rg'
      }
    },
  },
  plugins: [],
};
