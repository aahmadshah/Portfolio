import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
          screens: {
            sm: '350px',   // Small screens
            md: '760px',   // Medium screens
            lg: '1024px',  // Large screens
            xl: '1280px', // Extra-large screens
            '2xl': '1536px', // 2x-large screens
          },
          colors: {
            brown: "#53423e",
            lightBrown: "#645550",
            darkBrown: "#2c2523",
            black: "#1e1917",
            white: "#f1e1d9",
            cyan: "#15d1e9",
            lightCyan: "#88e5f0",
            darkCyan: "#009fb3",
            orange: "#fb9718",
            lightOrange: "#fac27b",
            darkOrange: "#d28422",
            grey: "#626965",
            lightGrey: "#978580",
            darkGrey: "#3f4441",
          },
          extend: {
            fontFamily: {
              josefin: ['Josefin Sans', 'sans-serif'],
              roboto: ['Roboto', 'sans-serif'],
            },
            boxShadow: {
              cyanMediumShadow: '10px 10px 200px 150px rgba(94, 206, 202, 0.6)',
              orangeMediumShadow: '10px 10px 200px 150px rgba(240, 169, 79, 0.5)',
            },
          },
        },
      },
    }),
  ],
})