'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Denver, CO',
    system: '8.5 kW System',
    date: 'Installed March 2024',
    rating: 5,
    image: 'SM',
    quote: 'The engineering plans were flawless. Our permit was approved on the first submission, and the inspector was impressed with the level of detail. Saved us $18,000 compared to traditional installers!',
    verified: true
  },
  {
    name: 'Mike Rodriguez',
    location: 'Austin, TX',
    system: '12 kW System + Battery',
    date: 'Installed January 2024',
    rating: 5,
    image: 'MR',
    quote: 'As a contractor, I appreciated the professional stamped plans. Everything was code-compliant and the installation guide was incredibly detailed. My crew had zero questions during the install.',
    verified: true
  },
  {
    name: 'Jennifer Park',
    location: 'Portland, OR',
    system: '10.2 kW System',
    date: 'Installed April 2024',
    rating: 5,
    image: 'JP',
    quote: 'The ROI calculator was spot-on. We\'re saving exactly what they projected, about $220/month. The design optimized every inch of our roof. Best investment we\'ve made in our home.',
    verified: true
  },
  {
    name: 'David Thompson',
    location: 'Phoenix, AZ',
    system: '15 kW Commercial System',
    date: 'Installed February 2024',
    rating: 5,
    image: 'DT',
    quote: 'Used them for my business location. The commercial-grade engineering and utility interconnection support was worth every penny. System is producing 20% more than estimated thanks to their optimization.',
    verified: true
  },
  {
    name: 'Lisa Anderson',
    location: 'Charlotte, NC',
    system: '7.8 kW System',
    date: 'Installed May 2024',
    rating: 5,
    image: 'LA',
    quote: 'My husband and I did the installation ourselves following their detailed plans. Passed inspection on first try. The support team answered every question within hours. Couldn\'t have done it without them.',
    verified: true
  },
  {
    name: 'Robert Kim',
    location: 'San Diego, CA',
    system: '9.6 kW System',
    date: 'Installed December 2023',
    rating: 5,
    image: 'RK',
    quote: 'The structural calculations gave me peace of mind. Living in earthquake country, I needed to know my roof could handle it. Their PE stamp made the bank financing a breeze too.',
    verified: true
  }
];

export default function TestimonialCarousel({ className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`relative ${className}`}>
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-8 right-8 text-solar-100 opacity-50">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>

        {/* Testimonial Content */}
        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-solar-500 to-energy-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {currentTestimonial.image}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</h4>
                {currentTestimonial.verified && (
                  <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verified Customer
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm">{currentTestimonial.location}</p>
              <p className="text-solar-600 text-sm font-semibold">{currentTestimonial.system}</p>
              <p className="text-gray-500 text-xs mt-1">{currentTestimonial.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-solar-600"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-solar-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-solar-600"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
