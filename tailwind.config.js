/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        colors: {
          neonPink: '#FF3CA6',
          neonPurple: '#8A2BE2',
          neonBlue: '#00CFFF',
          darkBg: '#0D0D14',
        },
        boxShadow: {
          neon: '0 0 10px #FF3CA6, 0 0 20px #FF3CA6',
        },
        backgroundImage: {
          'neon-gradient': 'linear-gradient(90deg, #FF3CA6, #8A2BE2, #00CFFF)',
        }
      },
    },
  },
  plugins: [],
};
