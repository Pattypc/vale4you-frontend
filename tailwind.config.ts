import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
        firasans: 'var(--font-firasans)'
      },
      colors: {
        'primary-100': '#fdff00',
        'primary-200': '#ffff42',
        'primary-300': '#ffff61',
        'primary-400': '#ffff7b',
        'primary-500': '#ffff93',
        'primary-600': '#ffffa9',
        'primary-700': '#FFC800',
        'primary-tone-by-tone': '#282719',
        'dark-100': '#141414',
        'dark-200': '#0B0C0E',
        'dark-300': '#292929',
        'dark-400': '#404040',
        'dark-500': '#585858',
        'dark-600': '#727272',
        'dark-700': '#8c8c8c',
        'alert-failure': '#FF0000',
        'alert-warning': '#FF6D00',
        'alert-success': '#04fb04',
        'alert-completed': '#5570F1',
        'white-100': '#FFFFFF',
        'white-200': '#F5F5F5',
        'white-300': '#F7F7F7',
        'white-400': '#CCCCCC',
        'white-500': '#999999',
        'white-600': '#666666',
        'white-700': '#333333'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
