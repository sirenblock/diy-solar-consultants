import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

/**
 * Base Card Component - Modern, minimal, professional design pattern
 *
 * Features:
 * - Modern shadows with depth (shadow-md to shadow-2xl)
 * - Smooth hover effects (lift and glow)
 * - Rounded corners (xl or 2xl)
 * - Proper internal padding
 * - Optional border for subtle definition
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.hover - Enable hover effects (default: true)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Card style variant: 'default' | 'elevated' | 'outlined' | 'minimal'
 * @param {string} props.padding - Padding size: 'sm' | 'md' | 'lg' (default: 'md')
 * @param {Function} props.onClick - Optional click handler
 */
export function Card({
  children,
  hover = true,
  className = '',
  variant = 'default',
  padding = 'md',
  onClick
}) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const variantClasses = {
    default: 'bg-white rounded-xl shadow-lg border border-gray-100',
    elevated: 'bg-white rounded-2xl shadow-xl border border-gray-50',
    outlined: 'bg-white rounded-xl border-2 border-gray-200 shadow-sm',
    minimal: 'bg-white rounded-lg shadow-md border border-gray-100'
  };

  const hoverClasses = hover
    ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer'
    : 'transition-shadow duration-200';

  return (
    <div
      className={`${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Card Header Component
 */
export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card Title Component
 */
export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-xl font-bold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
}

/**
 * Card Content Component
 */
export function CardContent({ children, className = '' }) {
  return (
    <div className={`text-gray-700 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card Footer Component
 */
export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-6 pt-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Image Card Component - For cards with images
 * Supports proper aspect ratios
 *
 * @param {Object} props
 * @param {string} props.imageUrl - Image source URL
 * @param {string} props.imageAlt - Alt text for image
 * @param {string} props.aspectRatio - '16:9' | '4:3' | '1:1' (default: '16:9')
 */
export function ImageCard({
  imageUrl,
  imageAlt,
  aspectRatio = '16:9',
  children,
  hover = true,
  className = ''
}) {
  const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  };

  return (
    <Card hover={hover} className={`overflow-hidden p-0 ${className}`}>
      <div className={`${aspectRatioClasses[aspectRatio]} relative overflow-hidden bg-gray-200`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        {children}
      </div>
    </Card>
  );
}

/**
 * Testimonial Card Component
 * Modern design for customer testimonials
 *
 * @param {Object} props
 * @param {string} props.name - Customer name
 * @param {string} props.location - Customer location
 * @param {string} props.quote - Testimonial text
 * @param {number} props.rating - Star rating (1-5)
 * @param {string} props.system - Optional system details
 * @param {string} props.savingsAmount - Optional savings amount
 */
export function TestimonialCard({
  name,
  location,
  quote,
  rating = 5,
  system,
  savingsAmount,
  className = ''
}) {
  return (
    <Card hover className={`h-full flex flex-col ${className}`}>
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-4 flex-grow italic leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Customer Info */}
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
        {system && (
          <p className="text-sm text-solar-600 font-medium mt-1">{system}</p>
        )}
        {savingsAmount && (
          <p className="text-sm text-energy-600 font-semibold mt-2">
            Saving {savingsAmount}
          </p>
        )}
      </div>
    </Card>
  );
}

/**
 * Icon Card Component
 * Card with an icon at the top
 */
export function IconCard({
  icon,
  title,
  description,
  children,
  hover = true,
  className = ''
}) {
  return (
    <Card hover={hover} className={`text-center ${className}`}>
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-solar-100 text-solar-600 mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}

      {/* Additional Content */}
      {children}
    </Card>
  );
}

/**
 * Stat Card Component
 * For displaying statistics or metrics
 */
export function StatCard({
  number,
  label,
  icon,
  trend,
  variant = 'default',
  className = ''
}) {
  const variantColors = {
    default: 'text-solar-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600'
  };

  return (
    <Card hover={false} variant="minimal" className={className}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className={`text-3xl font-bold ${variantColors[variant]}`}>
            {number}
          </p>
          {trend && (
            <p className="text-xs text-gray-500 mt-1">{trend}</p>
          )}
        </div>
        {icon && (
          <div className={`${variantColors[variant]} opacity-20`}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

// Export all components as default as well
export default Card;
