# Task 08: Exit Intent & Lead Magnets

## Objective
Capture abandoning visitors with exit-intent popups, valuable lead magnets, and compelling offers to maximize email captures and lead generation.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Exit Intent Popup System

```jsx
// src/components/ExitIntentPopup.jsx
'use client';
import { useState, useEffect } from 'react';
import { X, Download, Calculator, FileText } from 'lucide-react';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let hasShown = sessionStorage.getItem('exitIntentShown');
    
    const handleMouseLeave = (e) => {
      // Trigger when mouse leaves top of page (exiting)
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Also trigger after 30 seconds if not engaged
    const timeout = setTimeout(() => {
      if (!hasShown && !show) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit to email service
    await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'exit-intent' })
    });
    setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative animate-scaleIn">
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div className="p-8 md:p-12">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-solar-500 to-energy-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Download className="w-10 h-10 text-white" />
            </div>

            {/* Headline */}
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Wait! Get Your FREE Solar Savings Guide
            </h3>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 text-center mb-8">
              Before you go, download our comprehensive guide with everything you need to know about going solar DIY.
            </p>

            {/* What's included */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="font-semibold mb-4 text-gray-900">You'll Get:</p>
              <ul className="space-y-3">
                {[
                  'Complete DIY Solar Installation Checklist',
                  'Equipment Buying Guide (Save $5K+)',
                  'Permitting & Inspection Roadmap',
                  'ROI Calculator Spreadsheet',
                  'Common Mistakes to Avoid'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none text-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all text-lg"
              >
                Download FREE Guide Now
              </button>
            </form>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>No Spam Ever</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Join 10,000+ Readers</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Check Your Email!</h3>
            <p className="text-lg text-gray-600 mb-8">
              We've sent your FREE Solar Savings Guide to <strong>{email}</strong>
            </p>
            <button
              onClick={() => setShow(false)}
              className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

## Lead Magnets to Create

### 1. DIY Solar Savings Guide (PDF)
**Title:** "The Complete DIY Solar Guide: Save $15K+ on Your Installation"

**Contents:**
- Introduction to DIY solar
- Cost breakdown comparison
- Equipment buying guide
- Installation timeline
- Permitting process
- Common mistakes
- Resource list

### 2. Solar Calculator Spreadsheet
**Title:** "Solar ROI Calculator - Calculate Your Exact Savings"

**Features:**
- Input electric bill
- Input system size
- Calculate payback period
- 25-year savings projection
- Federal/state incentives calculator

### 3. Equipment Comparison Guide
**Title:** "2024 Solar Panel & Inverter Comparison Guide"

**Contents:**
- Top 10 solar panels rated
- Best inverters for DIY
- Battery storage options
- Where to buy (with discounts)
- Specifications comparison table

### 4. Permitting Checklist
**Title:** "State-by-State Solar Permitting Checklist"

**Contents:**
- Requirements by state
- Required documents
- Inspection timeline
- Fees to expect
- Contact information

## Lead Magnet Delivery Pages

```jsx
// src/pages/free-guide.jsx
export default function FreeGuidePage() {
  return (
    <>
      <Head>
        <title>Free DIY Solar Guide | DIY Solar Consultants</title>
      </Head>

      <section className="pt-20 pb-32 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image of guide */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 rotate-2 hover:rotate-0 transition-transform">
                <div className="aspect-[8.5/11] bg-gradient-to-br from-solar-500 to-energy-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-yellow-900 font-bold px-6 py-3 rounded-full rotate-12 shadow-lg">
                97 Pages of Expert Advice
              </div>
            </div>

            {/* Right: Opt-in form */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Download Your FREE DIY Solar Guide
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to save $15,000+ by going solar yourself. 
                No fluff, just actionable steps from NABCEP-certified experts.
              </p>

              {/* Benefits list */}
              <ul className="space-y-4 mb-8">
                {[
                  'Complete cost breakdown & savings calculator',
                  'Step-by-step installation timeline',
                  'Equipment buying guide with vendor discounts',
                  'Permitting & inspection roadmap',
                  'Safety checklist & best practices'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Email form */}
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none text-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all text-lg flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download FREE Guide Now
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                No credit card required. Instant access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

## Content Upgrades

Add in-content lead magnets:

```jsx
// Within blog posts or resource pages
<div className="bg-gradient-to-r from-solar-50 to-energy-50 border-2 border-solar-300 rounded-2xl p-8 my-12">
  <div className="flex items-start gap-6">
    <div className="w-16 h-16 bg-solar-600 rounded-xl flex items-center justify-center flex-shrink-0">
      <Download className="w-8 h-8 text-white" />
    </div>
    <div className="flex-1">
      <h4 className="text-2xl font-bold mb-2">Want the Checklist?</h4>
      <p className="text-gray-600 mb-4">
        Get our complete Solar Installation Checklist as a downloadable PDF.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-solar-600 outline-none"
        />
        <button className="px-6 py-2 bg-solar-600 text-white font-semibold rounded-lg hover:bg-solar-700">
          Send It
        </button>
      </form>
    </div>
  </div>
</div>
```

## Files to Create/Update
- `/src/components/ExitIntentPopup.jsx` - Create exit popup
- `/src/pages/free-guide.jsx` - Lead magnet landing page
- `/src/pages/calculator-spreadsheet.jsx` - Calculator download page
- `/src/pages/_app.jsx` - Add ExitIntentPopup globally
- `/public/downloads/` - Add PDF lead magnets

## Success Criteria
✅ Exit-intent popup on all major pages
✅ At least 3 valuable lead magnets created
✅ Dedicated landing pages for each lead magnet
✅ Email capture forms optimized
✅ Thank you/confirmation pages
✅ Automated email delivery

## Analytics
- Track popup show rate
- Track popup conversion rate
- Track email opt-in source
- Track lead magnet downloads
