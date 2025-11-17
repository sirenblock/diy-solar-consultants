# Task 06: Button & CTA Design System

## Objective
Button & CTA Design System - Create modern, minimal, and professional design patterns.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

1. **Primary Button**: Gradient bg, white text, shadow, hover lift
2. **Secondary Button**: White bg, border, hover fill
3. **Ghost Button**: Transparent, hover bg
4. **Icon Buttons**: Square/circle, consistent sizing
5. **Size Variants**: sm (py-2 px-4), md (py-3 px-6), lg (py-4 px-8)
6. **States**: Default, hover, active, disabled, loading

## Button Component
\`\`\`jsx
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-solar-600 to-energy-600 text-white shadow-lg shadow-solar-600/30 hover:shadow-solar-600/50 hover:-translate-y-0.5',
    secondary: 'bg-white border-2 border-gray-300 text-gray-800 hover:border-solar-600 hover:text-solar-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  return (
    <button 
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`













## Success Criteria
- ✅ Modern, professional design
- ✅ Consistent across all pages
- ✅ Responsive and accessible
- ✅ Smooth interactions
- ✅ Well-documented components

## Files to Modify
- /src/components/Button.jsx
- Multiple page files for implementation
