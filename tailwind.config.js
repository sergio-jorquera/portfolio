// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kg: ['LoveYaLikeASister', 'cursive'],
        ks: ['Sketch_Block', 'cursive'],
        kw: ['WallowXenon', 'cursive'],
        ko: ['OCRAEXT', 'cursive'],
        kt: ['tt0371m_', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        
        balloon: {
          '0%':   { transform: 'translate(0, 0)' },
          '25%':  { transform: 'translate(-2px, -4px)' },
          '50%':  { transform: 'translate(2px, -2px)' },
          '75%':  { transform: 'translate(-1px, 2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
         glow: {
           '0%, 100%': { filter: 'drop-shadow(0 0 2px #ff1a1a)' }, // naranja claro
           '50%': { filter: 'drop-shadow(0 0 10px #ff1a1a)' },
        },
       floatToWord: {
          '0%': { transform: 'translate(0, 0)', opacity: 1 },
          '100%': {
        transform: 'translate(var(--tx), var(--ty))',
        opacity: 1,
        },
      },


      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        balloon: 'balloon 5s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        floatToWord: 'floatToWord 2s ease-out forwards',
      },
      
    },
  },
  plugins: [],
};
