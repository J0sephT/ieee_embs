// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#002855',    // Fondo principal (Azul IEEE)
        secondary: '#732982',  // EMBS púrpura
        accent: '#00A3E0',     // Azul claro
        background: '#003C71', // Fondo de secciones
        white: '#FFFFFF',      // Blanco para textos
      },
    },
  },
  plugins: [],
};
