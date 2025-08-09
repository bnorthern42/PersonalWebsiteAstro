module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Dark slate
        primary: '#ffffff', // White text
        secondary: '#94a3b8', // Gray subtext
        accent: '#0070f3', // Blue links/buttons
        'accent-hover': '#6366f1', // Purple hover
        'card-bg': '#0d0f1a', // Dark card
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card-hover': '0 10px 20px rgba(0, 112, 243, 0.15)',
      },
    },
  },
  plugins: [],
};