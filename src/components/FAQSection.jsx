import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Enhanced FAQ Component with Automatic Schema Generation
 *
 * Features:
 * - Automatic FAQPage schema.org markup for SEO
 * - Microdata attributes for rich snippets
 * - Accordion UI with smooth animations
 * - Mobile responsive design
 * - Accessible keyboard navigation
 * - Optional schema generation (for multiple FAQ sections on one page)
 *
 * @param {Array} questions - Array of FAQ objects with question and answer properties
 * @param {Boolean} generateSchema - Whether to generate FAQPage schema (default: true)
 * @param {String} title - Optional section title
 * @param {String} description - Optional section description
 */
export default function FAQSection({
  questions,
  generateSchema = true,
  title = null,
  description = null
}) {
  const [openIndex, setOpenIndex] = useState(null);

  // Generate FAQPage schema for rich snippets
  const faqSchema = generateSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  } : null;

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleQuestion(index);
    }
  };

  return (
    <div className="w-full">
      {/* JSON-LD Schema Markup */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Optional Section Header */}
      {(title || description) && (
        <div className="text-center mb-8 md:mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* FAQ Accordion */}
      <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleQuestion(index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-solar-500 focus:ring-inset"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span
                className="font-semibold text-gray-900 pr-8 text-base md:text-lg"
                itemProp="name"
              >
                {faq.question}
              </span>

              {/* Expand/Collapse Icon */}
              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 text-solar-600 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Answer Panel */}
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-4 md:px-6 py-4 md:py-5 bg-gray-50 border-t border-gray-200 animate-fadeIn"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div
                  className="text-gray-700 leading-relaxed text-sm md:text-base prose prose-sm max-w-none"
                  itemProp="text"
                >
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

/**
 * Alternative compact variant for smaller FAQ sections
 * Use this for quick FAQs or sidebar widgets
 */
export function FAQSectionCompact({ questions, generateSchema = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {generateSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": questions.map(q => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": q.answer
                }
              }))
            })
          }}
        />
      )}

      <div className="space-y-2">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors text-sm"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-solar-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
