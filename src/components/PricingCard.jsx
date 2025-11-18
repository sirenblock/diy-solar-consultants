import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { useReducedMotion } from '@/components/animations';
import { CheckCircle, XCircle, DollarSign } from 'lucide-react';

export default function PricingCard({ pkg, onSelect }) {
  const {
    id,
    name,
    price,
    originalPrice,
    savings,
    paymentPlan,
    valueNote,
    priceNote,
    badge,
    featured,
    subtitle,
    savingsBadge,
    timeline,
    successRate,
    includes,
    excludes,
    bestFor,
    typicalSavings
  } = pkg;

  const shouldReduceMotion = useReducedMotion();

  const CardComponent = shouldReduceMotion ? Card : motion(Card);

  const cardProps = shouldReduceMotion ? {} : {
    whileHover: {
      y: -8,
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  };

  return (
    <CardComponent
      {...cardProps}
      variant={featured ? 'elevated' : 'outlined'}
      padding="lg"
      className={`relative ${
        featured
          ? 'border-green-600 bg-green-50 shadow-2xl scale-105'
          : 'hover:border-green-300'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold ${
          featured
            ? 'bg-green-600 text-white'
            : 'bg-gray-800 text-white'
        }`}>
          {badge}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          {price === 0 ? (
            <div>
              <div className="text-4xl font-bold text-green-600">FREE</div>
              {priceNote && <div className="text-sm text-gray-600 mt-1">{priceNote}</div>}
            </div>
          ) : (
            <div>
              {/* Anchor Pricing - Show original price crossed out */}
              {originalPrice && savings && (
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">${originalPrice.toLocaleString()}</span>
                  <span className="bg-red-100 text-red-700 text-sm font-bold px-2 py-1 rounded">
                    Save ${savings.toLocaleString()}
                  </span>
                </div>
              )}
              {/* Current Price - Charm Pricing */}
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-gray-900">${price.toLocaleString()}</span>
              </div>
              {/* Payment Plan */}
              <p className="text-gray-600 mt-2">One-time payment</p>
              {paymentPlan && (
                <p className="text-sm text-gray-500">{paymentPlan}</p>
              )}
              {valueNote && (
                <p className="text-xs text-green-600 mt-1 font-semibold">{valueNote}</p>
              )}
            </div>
          )}
        </div>
        <p className="text-gray-600">{subtitle}</p>
        {savingsBadge && !originalPrice && (
          <div className="mt-3 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            {savingsBadge}
          </div>
        )}
      </div>

      {/* Success Rate */}
      {successRate && (
        <div className="mb-6 p-3 bg-green-100 border border-green-300 rounded-lg text-center">
          <div className="text-green-800 font-semibold">{successRate}</div>
        </div>
      )}

      {/* What's Included */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What's NOT Included */}
      {excludes && excludes.length > 0 && (
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">NOT Included:</h4>
          <ul className="space-y-2">
            {excludes.map((item, index) => (
              <li key={index} className="flex items-start">
                <XCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-500">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Timeline */}
      {timeline && (
        <div className="mb-6 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm font-semibold text-gray-700 mb-1">Timeline:</div>
          <div className="text-sm text-gray-600 whitespace-pre-line">{timeline}</div>
        </div>
      )}

      {/* Typical Savings */}
      {typicalSavings && (
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">Typical Savings:</h4>
          <ul className="space-y-2">
            {typicalSavings.map((item, index) => (
              <li key={index} className="flex items-start">
                <DollarSign className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Best For */}
      {bestFor && (
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">Best For:</h4>
          <ul className="space-y-2">
            {bestFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      {shouldReduceMotion ? (
        <button
          onClick={() => onSelect && onSelect(pkg)}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
            featured
              ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
              : 'bg-gray-800 text-white hover:bg-gray-900'
          }`}
        >
          {id === 'consultation' ? 'Schedule Free Consultation' :
           id === 'design-permit' ? 'Get Started' :
           id === 'full-service' ? 'Get Complete Package' :
           'Get Design Quote'}
        </button>
      ) : (
        <motion.button
          onClick={() => onSelect && onSelect(pkg)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
            featured
              ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
              : 'bg-gray-800 text-white hover:bg-gray-900'
          }`}
        >
          {id === 'consultation' ? 'Schedule Free Consultation' :
           id === 'design-permit' ? 'Get Started' :
           id === 'full-service' ? 'Get Complete Package' :
           'Get Design Quote'}
        </motion.button>
      )}
    </CardComponent>
  );
}
