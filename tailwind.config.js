/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        energy: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
    },
  },
  // Safelist classes that are generated dynamically or conditionally
  // This prevents them from being purged in production builds
  safelist: [
    // Solar color variants that might be used dynamically
    'bg-solar-600',
    'bg-solar-700',
    'text-solar-600',
    'text-solar-700',
    'text-energy-600',
    'text-energy-700',
    'border-solar-600',
    'border-energy-600',
    // Animation classes
    'animate-slide-up',
    'animate-fade-in',
    'animate-scale-in',
    'animate-shimmer',
    'animate-pulse-slow',
  ],
  plugins: [],
}
