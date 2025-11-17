'use client';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function CustomerCounter({ className = '' }) {
  const stats = [
    {
      value: 542,
      suffix: '+',
      label: 'Homeowners Served This Month',
      description: 'And growing every day'
    },
    {
      value: 45600,
      suffix: ' kW',
      label: 'Solar Designed This Year',
      description: 'Enough to power 4,000+ homes'
    },
    {
      value: 28400,
      prefix: '$',
      label: 'Average Cost Savings',
      description: 'Per installation over 25 years'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Customer Satisfaction',
      description: 'Based on verified reviews'
    }
  ];

  return (
    <div className={`bg-gradient-to-br from-solar-600 to-energy-600 rounded-2xl p-8 md:p-12 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Trusted by Thousands
        </h2>
        <p className="text-solar-100 text-lg">
          Join the solar revolution with confidence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix || ''}
                prefix={stat.prefix || ''}
              />
            </div>
            <div className="text-lg font-semibold text-white mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-solar-100">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
