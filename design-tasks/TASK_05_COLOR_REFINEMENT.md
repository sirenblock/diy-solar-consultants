# Task 05: Color Palette & Theme Refinement

## Objective
Refine the color system for better contrast, accessibility, and modern aesthetics.

## Requirements
1. **Refined Solar Colors**: Warmer, more vibrant oranges
2. **Refined Energy Colors**: Brighter, energetic blues
3. **Neutral Grays**: 50-950 scale for backgrounds/text
4. **Success/Warning/Error**: Semantic colors
5. **WCAG AA Compliance**: All text meets contrast ratios
6. **CSS Custom Properties**: For theme switching

## Color Palette
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        solar: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        energy: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## Success Criteria
- ✅ All colors meet WCAG AA
- ✅ Consistent usage across site
- ✅ Updated tailwind config
