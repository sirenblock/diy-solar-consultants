import { useState } from 'react'

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
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
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
              <p>Please try emailing us directly at <a href="mailto:info@diysolar.com" className="underline font-medium">info@diysolar.com</a> or call us at <a href="tel:+15555551234" className="underline font-medium">(555) 555-1234</a>.</p>
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
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Smith"
            autoComplete="name"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 transition-colors ${
              touched.name && errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-required="true"
            aria-invalid={touched.name && errors.name ? 'true' : 'false'}
            aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            autoComplete="email"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 transition-colors ${
              touched.email && errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-required="true"
            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="(555) 123-4567"
            autoComplete="tel"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 transition-colors ${
              touched.phone && errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-describedby="phone-help"
            aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
          />
          {touched.phone && errors.phone ? (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.phone}
            </p>
          ) : (
            <p id="phone-help" className="mt-2 text-sm text-gray-500">
              Optional - for faster response
            </p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
            What are you interested in? <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 transition-colors ${
              touched.projectType && errors.projectType ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-required="true"
            aria-invalid={touched.projectType && errors.projectType ? 'true' : 'false'}
            aria-describedby={touched.projectType && errors.projectType ? 'projectType-error' : undefined}
          >
            <option value="">Select an option</option>
            <option value="Solar System Design">Solar System Design</option>
            <option value="Permitting Services">Permitting Services</option>
            <option value="Equipment Sourcing">Equipment Sourcing</option>
            <option value="Technical Consulting">Technical Consulting</option>
            <option value="Complete Package">Complete Package (Design + Permit + Equipment)</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>
          {touched.projectType && errors.projectType && (
            <p id="projectType-error" className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.projectType}
            </p>
          )}
        </div>

        {/* System Size */}
        <div>
          <label htmlFor="systemSize" className="block text-sm font-semibold text-gray-700 mb-2">
            Estimated System Size (if known)
          </label>
          <select
            id="systemSize"
            name="systemSize"
            value={formData.systemSize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 transition-colors"
            aria-describedby="systemSize-help"
          >
            <option value="">Select size (optional)</option>
            <option value="Under 5 kW">Under 5 kW</option>
            <option value="5-8 kW">5-8 kW</option>
            <option value="8-12 kW">8-12 kW</option>
            <option value="12-16 kW">12-16 kW</option>
            <option value="16+ kW">16+ kW</option>
            <option value="Commercial (20+ kW)">Commercial (20+ kW)</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <p id="systemSize-help" className="mt-2 text-sm text-gray-500">
            Don&apos;t worry if you&apos;re unsure - we can help you determine this
          </p>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 transition-colors"
            aria-describedby="timeline-help"
          >
            <option value="">Select timeline (optional)</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="12+ months">12+ months</option>
            <option value="Just researching">Just researching</option>
          </select>
          <p id="timeline-help" className="mt-2 text-sm text-gray-500">
            When are you planning to start?
          </p>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us about your project, questions, or what you're trying to accomplish..."
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 transition-colors resize-y ${
              touched.message && errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-required="true"
            aria-invalid={touched.message && errors.message ? 'true' : 'false'}
            aria-describedby={touched.message && errors.message ? 'message-error' : 'message-count'}
          />
          {touched.message && errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.message}
            </p>
          ) : (
            <p id="message-count" className={`mt-2 text-sm ${charCount >= 10 ? 'text-gray-500' : 'text-gray-400'}`}>
              {charCount} characters (minimum 10)
            </p>
          )}
        </div>

        {/* Newsletter Opt-in */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="newsletter"
              name="newsletter"
              type="checkbox"
              checked={formData.newsletter}
              onChange={handleChange}
              className="h-4 w-4 text-solar-600 focus:ring-solar-500 border-gray-300 rounded cursor-pointer"
              aria-describedby="newsletter-help"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="newsletter" className="font-medium text-gray-700 cursor-pointer">
              Send me DIY solar tips and guides
            </label>
            <p id="newsletter-help" className="text-sm text-gray-500">
              We send helpful guides and updates (unsubscribe anytime)
            </p>
          </div>
        </div>

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

        <p className="text-sm text-gray-500 text-center">
          <span className="text-red-500">*</span> Required fields
        </p>
      </form>
    </div>
  )
}
