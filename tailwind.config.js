/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'foreground': '#0066cc',
        'card': '#f0f9ff',
        'border': '#00ccff',
        'muted': '#0099ff',
        'muted-foreground': '#00ccff',
        'medical-blue': '#0066cc',
        'medical-dark': '#001f3f',
        'success': '#10b981',
        'warning': '#f59e0b',
        'danger': '#ef4444',
        'critical': '#991b1b',
        'cyan-bright': '#00d4ff',
        'blue-bright': '#0066ff',
      },
      fontFamily: {
        sans: ['Geist', 'Geist Fallback'],
        mono: ['Geist Mono', 'Geist Mono Fallback'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(100px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

