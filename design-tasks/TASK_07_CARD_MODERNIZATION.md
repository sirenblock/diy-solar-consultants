# Task 07: Card Components Modernization

## Objective
Card Components Modernization - Create modern, minimal, and professional design patterns.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements



1. **Modern Shadows**: Use shadow-md to shadow-2xl with colors
2. **Hover Effects**: Lift (-translate-y-1) and glow (shadow increase)
3. **Rounded Corners**: rounded-xl or rounded-2xl
4. **Internal Padding**: p-6 to p-8
5. **Border Option**: border border-gray-100 for subtle definition
6. **Image Cards**: Proper aspect ratios (16:9, 4:3, 1:1)

## Card Component
\`\`\`jsx
export function Card({ children, hover = true, className = '' }) {
  return (
    <div className={\`bg-white rounded-xl shadow-lg border border-gray-100 p-6 \${hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' : ''} \${className}\`}>
      {children}
    </div>
  );
}

export function TestimonialCard({ name, location, quote, rating }) {
  return (
    <Card hover>
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </Card>
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
- /src/components/Card.jsx
- Multiple page files for implementation
