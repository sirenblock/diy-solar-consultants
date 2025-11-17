import { TestimonialCard } from './Card';

export default function StateTestimonialCard({ testimonial }) {
  return (
    <TestimonialCard
      name={testimonial.name}
      location={testimonial.location}
      quote={testimonial.quote}
      rating={testimonial.rating}
      system={testimonial.system}
      savingsAmount={testimonial.savingsAmount}
    />
  );
}
