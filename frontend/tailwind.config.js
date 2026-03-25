/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0D0F14',
          1: '#13161E',
          2: '#181C26',
          3: '#1E2330',
        },
        border: '#252A38',
        accent: {
          DEFAULT: '#00C2FF',
          dim: '#0099CC',
        },
        danger: '#FF3B3B',
        warning: '#F5A623',
        success: '#00E087',
        muted: '#5A6480',
        text: {
          primary: '#E8EAF0',
          secondary: '#8B93A8',
          muted: '#5A6480',
        },
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        heading: ['Syne', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '4px',
        full: '9999px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        scanline: 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
