import { useState, useRef, useEffect } from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Checkbox from './Checkbox'
import SecurityBadges from './SecurityBadges'
import Link from 'next/link'
import {
  trackFormStart,
  trackFormFieldInteraction,
  trackFormError,
  trackFormSubmission,
  trackConversion,
  trackEnhancedLead
} from '@/utils/analytics'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    systemSize: '',
    timeline: '',
    message: '',
    newsletter: false,
    // Honeypot field for spam prevention
    website: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  const [charCount, setCharCount] = useState(0)
  const formStartTracked = useRef(false)

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value || value.trim().length < 2) {
          return 'Please enter your name'
        }
        return ''

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value || !emailRegex.test(value)) {
          return 'Please enter a valid email address'
        }
        return ''

      case 'phone':
        if (value) {
          const phoneRegex = /^[\d\s\-\(\)]+$/
          if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
            return 'Please enter a valid phone number'
          }
        }
        return ''

      case 'projectType':
        if (!value) {
          return 'Please select a project type'
        }
        return ''

      case 'message':
        if (!value || value.trim().length < 10) {
          return 'Please provide some details about your inquiry'
        }
        return ''

      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === 'checkbox' ? checked : value

    // Track form start on first interaction
    if (!formStartTracked.current) {
      trackFormStart('Contact Form');
      formStartTracked.current = true;
    }

    // Track field interaction
    if (!touched[name]) {
      trackFormFieldInteraction('Contact Form', name);
    }

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }))

    // Update character count for message field
    if (name === 'message') {
      setCharCount(value.length)
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target

    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    if (error) {
      trackFormError('Contact Form', name, error);
    }
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'projectType', 'message']
    const newErrors = {}

    requiredFields.forEach(field => {
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
      }
    })

    // Validate optional phone if provided
    if (formData.phone) {
      const phoneError = validateField('phone', formData.phone)
      if (phoneError) {
        newErrors.phone = phoneError
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check honeypot - if filled, it's a bot
    if (formData.website) {
      return
    }

    // Validate all fields
    const isValid = validateForm()
    if (!isValid) {
      // Mark all required fields as touched to show errors
      setTouched({
        name: true,
        email: true,
        projectType: true,
        message: true
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Track successful submission
        trackFormSubmission('Contact Form', {
          project_type: formData.projectType,
          system_size: formData.systemSize,
          timeline: formData.timeline,
          newsletter_opted_in: formData.newsletter
        });

        // Track as conversion
        trackConversion('contact_form_submission', 2299, {
          project_type: formData.projectType,
          timeline: formData.timeline
        });

        // Track enhanced lead data
        trackEnhancedLead({
          projectType: formData.projectType,
          systemSize: formData.systemSize,
          timeline: formData.timeline
        });

        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          systemSize: '',
          timeline: '',
          message: '',
          newsletter: false,
          website: ''
        })
        setCharCount(0)
        setTouched({})
        setErrors({})
        // Reset form start tracker for potential re-submission
        formStartTracked.current = false;
      } else {
        // Track submission error
        trackFormError('Contact Form', 'submission', 'Server error - form submission failed');
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Track submission error
      trackFormError('Contact Form', 'submission', error.message || 'Network error');
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = () => {
    return formData.name.trim().length >= 2 &&
           formData.email &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
           formData.projectType &&
           formData.message.trim().length >= 10 &&
           (!formData.phone || /^[\d\s\-\(\)]+$/.test(formData.phone))
  }

  // Success message display
  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-energy-100 mb-6">
            <svg className="h-8 w-8 text-energy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="heading-md text-gray-900 mb-4">Thanks for reaching out!</h3>

          <p className="text-lg text-gray-600 mb-8">
            We&apos;ve received your message and will respond within 24 hours. Check your email for a confirmation.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">While you wait:</h4>
            <ul className="space-y-3 text-left">
              <li>
                <a href="/calculator" className="text-solar-600 hover:text-solar-700 font-medium flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Check out our Solar Calculator
                </a>
              </li>
              <li>
                <a href="/equipment" className="text-solar-600 hover:text-solar-700 font-medium flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Browse Equipment Options
                </a>
              </li>
              <li>
                <a href="/faq" className="text-solar-600 hover:text-solar-700 font-medium flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Read our FAQ
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setSubmitStatus(null)}
            className="btn-secondary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
      <div className="mb-8">
        <h2 className="heading-md text-gray-900 mb-2">Send Us a Message</h2>
        <p className="text-gray-600">We typically respond within 24 hours</p>
      </div>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex">
            <svg className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-red-700">
              <p className="font-semibold mb-1">Sorry, something went wrong.</p>
              <p>Please try emailing us directly at <a href="mailto:info@diysolarconsultants.com" className="underline font-medium">info@diysolarconsultants.com</a> or call us at <a href="tel:+18885551234" className="underline font-medium">(888) 555-1234</a>.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        {/* Name Field */}
        <Input
          id="name"
          name="name"
          type="text"
          label="Full Name *"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="name"
          error={touched.name && errors.name}
          success={touched.name && !errors.name && formData.name.length >= 2}
          aria-required="true"
          aria-invalid={touched.name && errors.name ? 'true' : 'false'}
        />

        {/* Email Field */}
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address *"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="email"
          error={touched.email && errors.email}
          success={touched.email && !errors.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
          aria-required="true"
          aria-invalid={touched.email && errors.email ? 'true' : 'false'}
        />

        {/* Phone Field */}
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="tel"
          error={touched.phone && errors.phone}
          success={touched.phone && !errors.phone && formData.phone && /^[\d\s\-\(\)]+$/.test(formData.phone)}
          helperText="Optional - for faster response"
          aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
        />

        {/* Project Type */}
        <Select
          id="projectType"
          name="projectType"
          label="What are you interested in? *"
          value={formData.projectType}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.projectType && errors.projectType}
          success={touched.projectType && !errors.projectType && formData.projectType}
          aria-required="true"
          aria-invalid={touched.projectType && errors.projectType ? 'true' : 'false'}
        >
          <option value="">Select an option</option>
          <option value="Solar System Design">Solar System Design</option>
          <option value="Permitting Services">Permitting Services</option>
          <option value="Equipment Sourcing">Equipment Sourcing</option>
          <option value="Technical Consulting">Technical Consulting</option>
          <option value="Complete Package">Complete Package (Design + Permit + Equipment)</option>
          <option value="General Question">General Question</option>
          <option value="Other">Other</option>
        </Select>

        {/* System Size */}
        <Select
          id="systemSize"
          name="systemSize"
          label="Estimated System Size (if known)"
          value={formData.systemSize}
          onChange={handleChange}
          helperText="Don't worry if you're unsure - we can help you determine this"
        >
          <option value="">Select size (optional)</option>
          <option value="Under 5 kW">Under 5 kW</option>
          <option value="5-8 kW">5-8 kW</option>
          <option value="8-12 kW">8-12 kW</option>
          <option value="12-16 kW">12-16 kW</option>
          <option value="16+ kW">16+ kW</option>
          <option value="Commercial (20+ kW)">Commercial (20+ kW)</option>
          <option value="Not sure yet">Not sure yet</option>
        </Select>

        {/* Timeline */}
        <Select
          id="timeline"
          name="timeline"
          label="Project Timeline"
          value={formData.timeline}
          onChange={handleChange}
          helperText="When are you planning to start?"
        >
          <option value="">Select timeline (optional)</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="12+ months">12+ months</option>
          <option value="Just researching">Just researching</option>
        </Select>

        {/* Message */}
        <TextArea
          id="message"
          name="message"
          label="Message *"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.message && errors.message}
          success={touched.message && !errors.message && formData.message.trim().length >= 10}
          charCount
          helperText="Tell us about your project, questions, or what you're trying to accomplish"
          aria-required="true"
          aria-invalid={touched.message && errors.message ? 'true' : 'false'}
        />

        {/* Newsletter Opt-in */}
        <Checkbox
          id="newsletter"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          label="Send me DIY solar tips and guides"
          description="We send helpful guides and updates (unsubscribe anytime)"
        />

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className={`w-full px-6 py-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center ${
              !isFormValid() || isSubmitting
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-solar-600 hover:bg-solar-700 shadow-md hover:shadow-lg'
            }`}
            aria-label={isSubmitting ? 'Sending message' : 'Send message'}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Security Badges */}
        <SecurityBadges />

        {/* Privacy Notice */}
        <div className="text-sm text-gray-600 text-center">
          <p className="mb-2">
            <span className="text-red-500">*</span> Required fields
          </p>
          <p>
            We respect your privacy. Read our{' '}
            <Link href="/privacy" className="text-solar-600 underline hover:text-solar-700">
              Privacy Policy
            </Link>
            . Your information is never sold or shared.
          </p>
        </div>
      </form>
    </div>
  )
}
