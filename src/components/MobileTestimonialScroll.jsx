'use client';
import { Star } from 'lucide-react';

/**
 * Mobile-optimized horizontal scroll testimonials
 * Touch-friendly with smooth scrolling
 */
export default function MobileTestimonialScroll({ testimonials }) {
  return (
    <div className="relative -mx-4 px-4 md:-mx-0 md:px-0">
      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto overflow-y-hidden -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0">
        <div className="flex gap-4 pb-4 md:grid md:grid-cols-3 md:gap-6 md:pb-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-auto bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                {testimonial.system && (
                  <p className="text-xs text-solar-600 font-medium mt-1">
                    {testimonial.system}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint - Mobile Only */}
      <div className="text-center mt-2 md:hidden">
        <p className="text-xs text-gray-500">Swipe to see more →</p>
      </div>
    </div>
  );
}
