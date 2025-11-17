# Task 04: Typography System Overhaul

## Objective
Implement a professional, modern typography system with proper hierarchy and font loading.

## Requirements
1. **Install Modern Fonts**: Inter or Manrope via @next/font
2. **Type Scale**: Consistent sizing from xs to 6xl
3. **Line Heights**: 1.2 for headings, 1.6 for body
4. **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
5. **Heading Components**: H1-H6 with consistent styling
6. **Letter Spacing**: Tighter for headings (-0.02em)

## Implementation
```javascript
// next.config.js
const { Inter } = require('@next/font/google');

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
```

```jsx
// Create Heading components
export function H1({ children, className = '' }) {
  return (
    <h1 className={`text-5xl md:text-6xl font-bold tracking-tight leading-tight ${className}`}>
      {children}
    </h1>
  );
}
```

Update tailwind.config.js:
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      }
    }
  }
}
```

## Success Criteria
- ✅ Modern font loaded
- ✅ Consistent type scale
- ✅ Proper line heights
- ✅ Heading components created
