# Task 10: FAQ Schema & Rich Snippets

## Objective
Implement comprehensive FAQ schema markup across the website to enable rich snippets in search results and improve SEO visibility.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Verify Existing FAQ Schema
- Check current FAQ page schema
- Ensure proper FAQPage type
- Validate JSON-LD formatting
- Test with Rich Results Tool

### 2. Add FAQ Sections to Service Pages
Each service page should have FAQ section:
- 5-8 relevant questions per service
- Schema markup for each Q&A pair
- Expandable accordion UI
- SEO-optimized answers (150-300 words)

### 3. Create FAQ Component with Schema
Reusable FAQ component that automatically generates schema:
```jsx
<FAQSection questions={faqData} />
```

### 4. Add FAQ to Homepage
- "Quick Answers" section above fold
- Top 6 most common questions
- Full schema markup
- Links to full FAQ page

### 5. Optimize FAQ Content for Rich Snippets
- Clear, concise questions
- Comprehensive answers
- Include keywords naturally
- 2-3 sentences minimum per answer
- Use proper HTML formatting

### 6. Add HowTo Schema Where Applicable
Some FAQs are better as HowTo:
- "How do I request a design?"
- "How to prepare for installation"
- Step-by-step format

## Implementation Details

### Enhanced FAQ Component with Schema
```jsx
// /src/components/FAQ.jsx
import { useState } from 'react';

export default function FAQ({ questions, generateSchema = true }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqSchema = {
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
  };

  return (
    <>
      {generateSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <span
                className="font-semibold text-gray-900 pr-8"
                itemProp="name"
              >
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-solar-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div
                className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text" className="text-gray-700 prose prose-sm max-w-none">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
```

### Service-Specific FAQ Data
```javascript
// /src/data/serviceFAQs.js
export const designFAQs = [
  {
    question: "How long does the solar system design process take?",
    answer: "Our standard solar system design turnaround is 5-7 business days for most residential projects. Complex installations with unique requirements may take 7-10 days. We also offer expedited service with 2-3 day turnaround for an additional fee. The timeline includes custom system sizing, panel layout optimization, electrical diagrams, and production estimates."
  },
  {
    question: "What information do you need to design my solar system?",
    answer: "To create an accurate solar design, we need: (1) Your recent electricity bills (last 12 months preferred), (2) Property address and roof dimensions, (3) Photos of your roof and electrical panel, (4) Utility company name, (5) Any shade concerns or obstacles. We provide a detailed questionnaire that guides you through all required information."
  },
  // Add 5-8 more questions...
];

export const permittingFAQs = [
  {
    question: "Do I need a licensed engineer to stamp my solar permit?",
    answer: "Requirements vary by jurisdiction. Most cities and counties require a Professional Engineer (PE) stamp for solar installations, especially for residential systems over 10kW or any commercial installation. Our engineers are licensed in all 50 states and can provide PE stamps wherever required. Even if not required, having a PE-stamped design significantly increases permit approval chances and demonstrates professionalism to your local building department."
  },
  // Add more...
];
```

### Homepage Quick FAQ Section
```jsx
// Add to homepage
<section className="section-container bg-gray-50">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="heading-lg mb-4">Quick Answers</h2>
    <p className="text-gray-600">
      Common questions about our solar design services
    </p>
  </div>

  <FAQ questions={homepageFAQs.slice(0, 6)} />

  <div className="text-center mt-8">
    <Link href="/faq" className="text-solar-600 font-semibold hover:text-solar-700">
      View All FAQs →
    </Link>
  </div>
</section>
```

## FAQ Content Strategy

### Question Format
- Use natural language (how people actually search)
- Include target keywords
- Be specific, not vague
- Start with question words (How, What, Why, When, etc.)

**Good Examples:**
- "How much does professional solar design cost?"
- "What's included in a solar permit package?"
- "Do I need batteries with my solar system?"

**Bad Examples:**
- "Pricing information"
- "Permits"
- "Batteries"

### Answer Format
- 150-300 words optimal
- Answer question in first sentence
- Provide detailed explanation
- Include internal links where relevant
- End with related CTA when appropriate

## Files to Create/Modify
- `/src/components/FAQ.jsx` - Enhanced with schema
- `/src/data/serviceFAQs.js` - FAQ content by category
- `/src/data/homepageFAQs.js` - Top questions for homepage
- `/src/pages/services.jsx` - Add FAQ section
- `/src/pages/pricing.jsx` - Add FAQ section
- `/src/pages/index.jsx` - Add Quick Answers section
- `/src/pages/equipment.jsx` - Add FAQ section

## Schema Validation

### Test URLs
1. Google Rich Results Test: https://search.google.com/test/rich-results
2. Schema.org Validator: https://validator.schema.org/
3. Google Search Console - Enhancements Report

### Common Schema Errors to Avoid
- Missing required properties (name, text)
- Incorrect @type values
- Malformed JSON-LD
- Empty answer fields
- Duplicate questions

## Success Criteria
- ✅ FAQ schema on 5+ pages
- ✅ All schema validates without errors
- ✅ Rich snippets appear in test tool
- ✅ 30+ total Q&A pairs across site
- ✅ FAQ accordion UI functional
- ✅ Mobile-optimized FAQ display
- ✅ Internal links in answers
- ✅ Microdata attributes on elements

## SEO Impact
- FAQ rich snippets increase CTR by 30%+
- Answer boxes opportunity
- Featured snippet potential
- Long-tail keyword coverage
- Increased SERP real estate

## Content Guidelines
- Research actual customer questions
- Check "People Also Ask" in Google
- Review competitor FAQs
- Use support ticket data
- Target voice search queries

## Testing Checklist
- [ ] Validate schema with Google tool
- [ ] Test accordion functionality
- [ ] Check mobile display
- [ ] Verify schema on all pages
- [ ] Test with screen readers
- [ ] Check Search Console for errors
- [ ] Monitor for rich snippet appearance

## Notes
- Update FAQs based on actual questions
- Refresh answers quarterly
- Track which FAQs get most engagement
- Add new questions from customer feedback
- Link to FAQ from support emails
