/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#043263',
          navyDark: '#021e3c',
          navyLight: '#07488c',
          blue: '#0072CE',
          cyan: '#00B2FE',
          cyanLight: '#e0f6ff',
          bg: '#F4F8FC',
          dark: '#0F172A',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20bd5a',
          dark: '#128C7E',
          teal: '#075E54',
          light: '#dcf8c6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(4, 50, 99, 0.1), 0 8px 10px -6px rgba(4, 50, 99, 0.1)',
        'brand-lg': '0 20px 35px -5px rgba(4, 50, 99, 0.15), 0 10px 15px -5px rgba(4, 50, 99, 0.08)',
        'cyan-glow': '0 0 20px rgba(0, 178, 254, 0.4)',
        'whatsapp-glow': '0 8px 25px rgba(37, 211, 102, 0.45)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
