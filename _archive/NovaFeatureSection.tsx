// tailwind.config.js (or CSS variables equivalent)
module.exports = {
  theme: {
    extend: {
      colors: {
        apb: {
          void: '#04060A',        // Base canvas background
          slate: '#0B0F17',       // Card & panel surface
          pewter: '#8A99AD',      // Secondary text & chiseled metallic borders
          'pewter-dark': '#1F2937',// Inactive borders & dividers
          orange: '#FF5A00',      // High-voltage energetic accent
          'orange-glow': '#FF7A29',// Hover states & atmospheric blurs
          navy: '#0C2340',        // Deep Auburn collegiate base
          electric: '#00E5FF',    // Digital vortex cyan accent
        }
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 90, 0, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.4)',
        'chiseled': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 10px 30px -10px rgba(0,0,0,0.8)',
      }
    }
  }
}
