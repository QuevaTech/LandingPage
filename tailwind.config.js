/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // QuevaTech Design System — sıcak Quercus paleti
        'queva-gold':      '#d4b038',  // Birincil — meşe ağacı rengi (Gold/Yellow)
        'queva-ember':     '#d87e37',  // Amber/turuncu aksan
        'queva-signal':    '#ff1e3c',  // Alert/vurgu kırmızı
        'queva-midnight':  '#1b1f3b',  // Koyu lacivert — dark yüzey
        'queva-parchment': '#eee6d8',  // Sıcak krem — light yüzey
        // Legacy aliases (mevcut Tailwind class'ları için)
        'queva-indigo': '#1b1f3b',
        'queva-purple': '#d4b038',  // Changed to gold
        'queva-sky':    '#d4b038',
        'queva-dark':   '#1b1f3b',
        'queva-light':  '#eee6d8',
      },
      transitionDuration: {
        '500': '500ms',
      },
      transformOrigin: {
        '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      scale: {
        '104': '1.04',
      },
      animation: {
        'gradient-flow': 'gradient-flow 15s ease infinite',
        'gradient-pulse': 'gradient-pulse 10s ease-in-out infinite',
        'hero-title-flow': 'hero-title-flow 12s ease infinite',
        'section-title-flow': 'section-title-flow 15s ease infinite',
        'qt-glow': 'qt-glow 4s ease-in-out infinite',
        'qt-grad': 'qt-grad 8s ease infinite',
        'qt-gflow': 'qt-gflow 15s ease infinite',
        'shimmer': 'shimmer 3s infinite',
        'float-around': 'float-around 20s infinite linear',
        'pulse-badge': 'pulse-badge 2s ease-in-out infinite',
        'icon-float': 'icon-float 3s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'ripple': 'ripple 0.6s ease-out',
        'fade-in': 'fade-in 2s ease-in',
        'parallax-scroll': 'parallax-scroll 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'icon-glow': 'icon-glow 2s ease-in-out infinite',
        'pattern-slide': 'pattern-slide 20s linear infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-pulse': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        'hero-title-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'section-title-flow': {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
        'qt-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(100,200,255,0.4), 0 0 20px rgba(150,100,255,0.3)' },
          '50%': { textShadow: '0 0 20px rgba(100,200,255,0.6), 0 0 40px rgba(150,100,255,0.4), 0 0 60px rgba(79,70,229,0.3)' },
        },
        'qt-grad': {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
        'qt-gflow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '50%, 100%': { transform: 'translateX(100%)' },
        },
        'float-around': {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(100px) translateY(-100px) rotate(90deg)' },
          '50%': { transform: 'translateX(0) translateY(-200px) rotate(180deg)' },
          '75%': { transform: 'translateX(-100px) translateY(-100px) rotate(270deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' },
        },
        'pulse-badge': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        'icon-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1.05)' },
          '25%': { transform: 'rotate(-5deg) scale(1.05)' },
          '50%': { transform: 'rotate(5deg) scale(1.05)' },
          '75%': { transform: 'rotate(-3deg) scale(1.05)' },
        },
        'ripple': {
          '0%': { width: '0', height: '0', opacity: '1' },
          '100%': { width: '300px', height: '300px', opacity: '0' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '0.85' },
        },
        'parallax-scroll': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(-20px) scale(1.02)' },
          '100%': { transform: 'translateY(-40px) scale(1.04)' },
        },
        'icon-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))' },
        },
        'pattern-slide': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
      },
    },
  },
  plugins: [],
}