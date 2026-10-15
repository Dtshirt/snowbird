/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2545',
          blue: '#13315C',
          steel: '#8DA9C4',
          sky: '#EEF4ED',
          gold: '#C29B0C',
          goldLight: '#E5B93B',
          red: '#B23A48',
          cream: '#FBF7F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        card: '0 4px 20px rgba(11, 37, 69, 0.08)',
        cardHover: '0 10px 30px rgba(11, 37, 69, 0.12)',
        cta: '0 8px 24px rgba(194, 155, 12, 0.25)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B2545 0%, #13315C 60%, #1e4373 100%)',
        'sun-glow': 'radial-gradient(circle at top right, rgba(229,185,59,0.15), transparent 60%)'
      }
    }
  },
  plugins: []
};
