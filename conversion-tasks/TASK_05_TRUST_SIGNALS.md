# Task 05: Trust & Credibility Signals

## Objective
Build maximum trust with guarantees, certifications, security badges, and credibility markers to reduce conversion friction.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Trust Elements to Add

### 1. Money-Back Guarantee
```jsx
// Add to homepage and pricing page
<div className="bg-green-50 border-2 border-green-600 rounded-xl p-8 text-center max-w-2xl mx-auto my-12">
  <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
  <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
  <p className="text-lg text-gray-700 mb-4">
    If you're not completely satisfied with your solar design within 30 days, we'll refund your consultation fee—no questions asked.
  </p>
  <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
    <CheckCircle className="w-5 h-5" />
    <span>Risk-Free Design Service</span>
  </div>
</div>
```

### 2. Certifications & Licenses
```jsx
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h3 className="text-center text-2xl font-bold mb-8">Certified & Licensed Professionals</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
          <Award className="w-10 h-10 text-blue-600" />
        </div>
        <p className="font-semibold">NABCEP Certified</p>
        <p className="text-sm text-gray-600">Since 2015</p>
      </div>
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
          <Shield className="w-10 h-10 text-green-600" />
        </div>
        <p className="font-semibold">Licensed in 50 States</p>
        <p className="text-sm text-gray-600">Full Coverage</p>
      </div>
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
          <Star className="w-10 h-10 text-orange-600" />
        </div>
        <p className="font-semibold">BBB A+ Rating</p>
        <p className="text-sm text-gray-600">Accredited Business</p>
      </div>
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
          <Lock className="w-10 h-10 text-purple-600" />
        </div>
        <p className="font-semibold">$2M Insured</p>
        <p className="text-sm text-gray-600">Full Protection</p>
      </div>
    </div>
  </div>
</section>
```

### 3. Security Badges on Forms
```jsx
// Add below all forms
<div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
  <div className="flex items-center gap-2">
    <Lock className="w-4 h-4 text-green-600" />
    <span>SSL Encrypted</span>
  </div>
  <div className="flex items-center gap-2">
    <Shield className="w-4 h-4 text-blue-600" />
    <span>Privacy Protected</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-purple-600" />
    <span>No Spam Ever</span>
  </div>
</div>
```

### 4. As Seen In / Press Mentions
```jsx
<section className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <p className="text-center text-gray-600 mb-8">As Featured In</p>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
      {/* Add logos of publications */}
      <div className="text-center font-bold text-xl text-gray-700">Solar Power World</div>
      <div className="text-center font-bold text-xl text-gray-700">Energy.gov</div>
      <div className="text-center font-bold text-xl text-gray-700">EnergySage</div>
      <div className="text-center font-bold text-xl text-gray-700">Green Builder</div>
      <div className="text-center font-bold text-xl text-gray-700">Renewable Energy</div>
    </div>
  </div>
</section>
```

### 5. Years in Business Badge
```jsx
<div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
  <Calendar className="w-5 h-5 text-blue-600" />
  <span className="font-semibold text-blue-900">Serving Since 2015 • 9+ Years</span>
</div>
```

### 6. Privacy Policy Link (Prominent)
```jsx
// In footer and near forms
<div className="text-sm text-gray-600 text-center">
  We respect your privacy. Read our <Link href="/privacy" className="text-solar-600 underline">Privacy Policy</Link>.
  Your information is never sold or shared.
</div>
```

### 7. Free Consultation Badge
```jsx
<div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-lg px-6 py-3">
  <Gift className="w-6 h-6 text-green-600" />
  <div>
    <p className="font-bold text-green-900">100% Free Consultation</p>
    <p className="text-sm text-green-700">No Credit Card Required</p>
  </div>
</div>
```

## Files to Update
- `/src/pages/index.jsx` - Add trust sections
- `/src/pages/pricing.jsx` - Add guarantee
- `/src/components/Footer.jsx` - Add certifications
- `/src/components/ContactForm.jsx` - Add security badges
- `/src/components/DesignRequestForm.jsx` - Add trust signals
- `/src/pages/privacy.jsx` - Create if missing

## Success Criteria
✅ Money-back guarantee prominently displayed
✅ Certification badges visible
✅ Security badges on all forms
✅ Years in business highlighted
✅ Press mentions shown
✅ Privacy policy easily accessible
✅ No credit card required messaging
