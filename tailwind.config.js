/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apb: {
          void: '#04060A',
          slate: '#0B0F17',
          pewter: '#8A99AD',
          'pewter-dark': '#1F2937',
          orange: '#FF5A00',
          'orange-glow': '#FF7A29',
          navy: '#0C2340',
          electric: '#00E5FF',
        }
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 90, 0, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.4)',
        'chiseled': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 10px 30px -10px rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [],
}/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apb: {
          void: '#04060A',
          slate: '#0B0F17',
          pewter: '#8A99AD',
          'pewter-dark': '#1F2937',
          orange: '#FF5A00',
          'orange-glow': '#FF7A29',
          navy: '#0C2340',
          electric: '#00E5FF',
        }
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 90, 0, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.4)',
        'chiseled': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 10px 30px -10px rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [],
}
