# Task 09: Lead Capture Optimization

## Objective
Optimize lead capture forms and create lead magnets to increase email collection and design request submissions.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Create Multi-Step Form for Design Requests
Break long form into manageable steps:
- Step 1: Basic Info (name, email, phone, zip)
- Step 2: Property Details (roof type, shade, electric bill)
- Step 3: System Preferences (battery?, timeline, budget)
- Step 4: Review & Submit
- Progress indicator at top
- Save progress in localStorage

### 2. Add Form Validation with Helpful Errors
- Real-time validation as user types
- Clear error messages ("Please enter a valid email")
- Success states (green checkmark)
- Required field indicators
- Phone number formatting
- Email format validation

### 3. Create Lead Magnet: Solar Savings Calculator
- Embeddable widget for homepage
- Quick estimate tool (3-4 inputs max)
- Email required to see detailed results
- Send PDF report to email
- Include consultation CTA in report

### 4. Add Progress Indicators
- Multi-step form progress bar
- "Step 2 of 4" text indicator
- Completion percentage
- Visual feedback for each step

### 5. Optimize Form Field Design
- Larger input fields for mobile (min 44px height)
- Clear labels above fields
- Placeholder text with examples
- Autofocus on first field
- Tab order optimization
- Smart defaults where possible

### 6. Add Social Login Options
- "Sign in with Google" button
- Pre-fill form with social data
- Faster conversion
- OAuth implementation

### 7. Create Exit-Intent Email Capture
- Popup when user tries to leave
- Offer: "Free Solar ROI Report"
- Single email field
- "No spam, unsubscribe anytime"
- Cookie to show once per session

## Implementation Details

### Multi-Step Form Component
```jsx
// /src/components/MultiStepForm.jsx
import { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    // Step 2
    roofType: '',
    shadeLevel: '',
    monthlyBill: '',
    // Step 3
    batteryInterest: false,
    timeline: '',
    budget: '',
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      // Save to localStorage
      localStorage.setItem('designFormProgress', JSON.stringify({ step: step + 1, formData }));
    }
  };

  const handleBack = () => setStep(step - 1);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Step {step} of {totalSteps}</span>
          <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-solar-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} />}
        {step === 4 && <Step4 formData={formData} />}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={step < totalSteps ? handleNext : handleSubmit}
            className="ml-auto px-8 py-3 bg-solar-600 text-white rounded-lg hover:bg-solar-700"
          >
            {step < totalSteps ? 'Continue' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
}
```

### Form Validation Component
```jsx
// /src/components/FormField.jsx
export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  error = '',
  ...props
}) {
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validate = (val) => {
    if (required && !val) return false;
    if (type === 'email' && val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val);
    }
    if (type === 'tel' && val) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(val.replace(/\D/g, ''));
    }
    return true;
  };

  useEffect(() => {
    if (touched) {
      setIsValid(validate(value));
    }
  }, [value, touched]);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={() => setTouched(true)}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 ${
          touched && !isValid ? 'border-red-500' : touched && isValid ? 'border-green-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {touched && !isValid && error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {touched && isValid && (
        <div className="mt-1 flex items-center text-green-600 text-sm">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Looks good!
        </div>
      )}
    </div>
  );
}
```

### Lead Magnet Calculator Widget
```jsx
// /src/components/QuickCalculator.jsx
export default function QuickCalculator() {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);

  const estimateSavings = () => {
    const bill = parseFloat(monthlyBill);
    const annualSavings = bill * 12 * 0.75; // 75% savings estimate
    const systemCost = bill * 100; // Rough estimate
    return { annualSavings, systemCost };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send email with detailed report
    await fetch('/api/send-roi-report', {
      method: 'POST',
      body: JSON.stringify({ email, monthlyBill }),
    });
    setShowResults(true);
  };

  return (
    <div className="bg-gradient-to-br from-solar-600 to-energy-600 rounded-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Calculate Your Solar Savings</h3>
      {!showResults ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Monthly Electric Bill</label>
            <input
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(e.target.value)}
              placeholder="$150"
              className="w-full px-4 py-3 rounded-lg text-gray-900"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email for Detailed Report</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg text-gray-900"
              required
            />
          </div>
          <button type="submit" className="w-full bg-white text-solar-600 font-bold py-3 rounded-lg hover:bg-gray-100">
            Calculate My Savings
          </button>
          <p className="text-xs text-center opacity-90">
            We'll send a detailed PDF report to your email. No spam, ever.
          </p>
        </form>
      ) : (
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">
            ${estimateSavings().annualSavings.toLocaleString()}
          </div>
          <p className="text-xl mb-4">Estimated Annual Savings</p>
          <p className="mb-6">Check your email for a detailed breakdown!</p>
          <Link href="/design-request" className="inline-block bg-white text-solar-600 px-8 py-3 rounded-lg font-bold">
            Get Custom Design
          </Link>
        </div>
      )}
    </div>
  );
}
```

## Files to Create/Modify
- `/src/components/MultiStepForm.jsx` - New multi-step form
- `/src/components/FormField.jsx` - Reusable form field with validation
- `/src/components/QuickCalculator.jsx` - Lead magnet calculator
- `/src/components/ExitIntentPopup.jsx` - Email capture popup
- `/src/pages/design-request.jsx` - Replace with multi-step form
- `/src/pages/api/send-roi-report.js` - API for sending reports
- `/src/styles/globals.css` - Form styles

## Success Criteria
- ✅ Multi-step form reduces abandonment by 30%
- ✅ Form completion time under 2 minutes
- ✅ Real-time validation working on all fields
- ✅ Progress saved in localStorage
- ✅ Lead magnet generates 20+ emails/week
- ✅ Exit-intent captures 5% of leaving visitors
- ✅ Mobile form experience optimized
- ✅ Form analytics tracking implemented

## Testing Checklist
- [ ] Submit form with invalid data
- [ ] Test form on mobile devices
- [ ] Verify email delivery for lead magnet
- [ ] Test back button functionality
- [ ] Verify progress bar accuracy
- [ ] Test exit-intent trigger
- [ ] Check localStorage persistence
- [ ] Validate all required fields

## Conversion Optimization Tips
- Keep Step 1 short (4 fields max)
- Show progress to reduce abandonment
- Use micro-copy to reassure users
- Add trust signals near form
- Test different button copy
- A/B test number of steps
