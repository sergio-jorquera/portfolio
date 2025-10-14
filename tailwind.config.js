// tailwind.config.js
export default {
   darkMode: 'class', 
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
         balloon1: {
          '0%':   { transform: 'translate(0, 0)' },
          '10%':  { transform: 'translate(-40px, -60px)' },
          '20%':  { transform: 'translate(30px, -30px)' },
          '30%':  { transform: 'translate(-50px, 20px)' },
          '40%':  { transform: 'translate(30px, 60px)' },
          '50%':  { transform: 'translate(-35px, -40px)' },
          '60%':  { transform: 'translate(20px, -55px)' },
          '70%':  { transform: 'translate(-25px, 50px)' },
          '80%':  { transform: 'translate(40px, -30px)' },
          '90%':  { transform: 'translate(-30px, 45px)' },
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
      spinOnce: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      growShake: {
        '0%': { transform: 'scale(1) rotate(0deg)' },
        '10%': { transform: 'scale(1.5) rotate(6deg)' },
        '20%': { transform: 'scale(1.45) rotate(-6deg)' },
        '30%': { transform: 'scale(1.4) rotate(6deg)' },
        '40%': { transform: 'scale(1.35) rotate(-6deg)' },
        '50%': { transform: 'scale(1.3) rotate(6deg)' },
        '60%': { transform: 'scale(1.25) rotate(-4deg)' },
        '70%': { transform: 'scale(1.2) rotate(3deg)' },
        '80%': { transform: 'scale(1.1) rotate(-2deg)' },
        '90%': { transform: 'scale(1.05) rotate(1deg)' },
        '100%': { transform: 'scale(1) rotate(0deg)' },
      },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        balloon: 'balloon 10s ease-in-out infinite',
        balloon1: 'balloon 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        floatToWord: 'floatToWord 2s ease-out forwards',
        spinOnce: 'spinOnce 0.8s linear 1',
        growShake: 'growShake 0.8s ease',
      },
      
    },
  },
  plugins: [],
};
