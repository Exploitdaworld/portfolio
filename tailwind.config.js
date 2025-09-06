/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        cyber: {
          blue: '#00d4ff',
          green: '#00ff88',
          pink: '#ff006e',
          purple: '#7c3aed',
          dark: '#0f0f23',
          darker: '#1a1a2e',
          slate: '#16213e',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #debbe2ff 0%, #e67ec7ff 35%, #ec3055ff 100%)',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'scan': 'scan 0.1s linear infinite',
        'pulse-cyber': 'pulse-cyber 2s infinite',
        'fadeInUp': 'fadeInUp 0.8s ease both',
        'blob': 'blob 7s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': {
            textShadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(255, 0, 110, 0.2), 0 0 60px rgba(9, 9, 121, 0.1)',
          },
          'to': {
            textShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 50px rgba(255, 0, 110, 0.4), 0 0 80px rgba(9, 9, 121, 0.3)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.6' },
          '25%': { transform: 'translateY(-20px) rotate(90deg)', opacity: '0.8' },
          '50%': { transform: 'translateY(-40px) rotate(180deg)', opacity: '1' },
          '75%': { transform: 'translateY(-20px) rotate(270deg)', opacity: '0.8' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' },
        },
        'pulse-cyber': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 136, 0.5)',
        'cyber-hover': '0 0 30px rgba(0, 255, 136, 0.8)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'cyber': '10px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
