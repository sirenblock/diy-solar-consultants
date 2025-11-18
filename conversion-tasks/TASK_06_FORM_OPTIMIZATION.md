# Task 06: Form Optimization for Conversions

## Objective
Reduce form friction, implement multi-step forms, add inline validation, and optimize for maximum completion rates.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Form Optimization Principles
1. **Fewer fields = higher conversion** (aim for 3-5 fields max on first step)
2. **Multi-step for complex forms** (break into digestible chunks)
3. **Inline validation** (immediate feedback)
4. **Clear error messages** (helpful, not punishing)
5. **Progress indicators** (show completion progress)
6. **Mobile-optimized** (large touch targets, proper keyboard types)

## Optimized Contact Form

```jsx
// src/components/OptimizedContactForm.jsx
'use client';
import { useState } from 'react';
import { Check, ArrowRight, Phone, Mail, User } from 'lucide-react';

export function OptimizedContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', electricBill: '', timeline: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10,}$/.test(phone.replace(/\D/g, ''));
  };

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Inline validation
    if (field === 'email' && value) {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value) ? '' : 'Please enter a valid email'
      }));
    }
    
    if (field === 'phone' && value) {
      setErrors(prev => ({
        ...prev,
        phone: validatePhone(value) ? '' : 'Please enter a valid 10-digit phone number'
      }));
    }
  };

  const nextStep = () => {
    // Validate current step
    if (step === 1) {
      if (!formData.name || !formData.email || !validateEmail(formData.email)) {
        setErrors({ email: 'Please complete required fields correctly' });
        return;
      }
    }
    setStep(step + 1);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
          <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-solar-600 to-energy-600 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Let's Get Started</h3>
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg outline-none transition-colors ${
                  errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-solar-600 focus:ring-solar-200'
                } focus:ring-2`}
                placeholder="john@example.com"
              />
              {formData.email && !errors.email && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
              )}
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <button
            onClick={nextStep}
            className="w-full bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-center text-gray-500">
            We'll never share your information. See our Privacy Policy.
          </p>
        </div>
      )}

      {/* Step 2: Project Details */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Tell Us About Your Project</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Approximate Monthly Electric Bill
            </label>
            <select
              value={formData.electricBill}
              onChange={(e) => handleFieldChange('electricBill', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
            >
              <option value="">Select range...</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-300">$200 - $300</option>
              <option value="300+">$300+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              When are you planning to go solar?
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => handleFieldChange('timeline', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
            >
              <option value="">Select timeline...</option>
              <option value="asap">As soon as possible</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6+months">6+ months</option>
              <option value="research">Just researching</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-lg hover:bg-gray-50 transition-all"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="flex-1 bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold">You're All Set!</h3>
          <p className="text-lg text-gray-600">
            We'll email you your custom solar design within 24-48 hours.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 text-left">
            <p className="font-semibold mb-2">What happens next?</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Our experts review your information</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>We create your custom solar design</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>You receive a detailed proposal with ROI</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
```

## Mobile Form Optimization
- Use `inputmode="numeric"` for number fields
- Use `type="tel"` for phone numbers
- Use `type="email"` for emails (brings up @ keyboard)
- Touch targets minimum 44px height
- Auto-focus first field on desktop only

## Files to Update
- `/src/components/OptimizedContactForm.jsx` - Create new optimized form
- `/src/components/DesignRequestForm.jsx` - Convert to multi-step
- `/src/pages/design-request.jsx` - Use new form
- `/src/pages/contact.jsx` - Use optimized form

## Success Criteria
✅ Multi-step forms for complex requests
✅ Inline validation with helpful errors
✅ Progress indicators on multi-step forms
✅ Mobile-optimized with proper input types
✅ Reduced to 3-5 fields on first step
✅ Clear success confirmations
