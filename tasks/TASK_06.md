# TASK 06: Contact Page + Simple Contact Form

## Your Mission
Create a professional Contact page with a simple contact form, contact information, response time expectations, and trust signals.

## Company Context
**DIY Solar Consultants** prioritizes responsive communication with potential clients. The contact page should make it easy for visitors to reach out with questions, while setting clear expectations for response times and next steps.

## What to Build

### 1. Page Header
**Hero Section:**
- Headline: "Get in Touch"
- Subheading: "Have questions about solar design or DIY installation? We're here to help."
- Background: Clean gradient or subtle solar imagery

### 2. Page Layout

**Two-Column Layout (Desktop) / Stacked (Mobile):**
- Left Column: Contact Form (60% width)
- Right Column: Contact Info & Details (40% width)

### 3. Contact Form

**Form Header:**
- Title: "Send Us a Message"
- Subtitle: "We typically respond within 24 hours"

**Form Fields:**

**Name (Required):**
- Label: "Full Name"
- Input: Text field
- Placeholder: "John Smith"
- Validation: Minimum 2 characters
- Error message: "Please enter your name"

**Email (Required):**
- Label: "Email Address"
- Input: Email field
- Placeholder: "john@example.com"
- Validation: Valid email format
- Error message: "Please enter a valid email address"

**Phone (Optional):**
- Label: "Phone Number"
- Input: Tel field
- Placeholder: "(555) 123-4567"
- Validation: Valid phone format (US)
- Help text: "Optional - for faster response"

**Project Type (Required):**
- Label: "What are you interested in?"
- Input: Dropdown/Select
- Options:
  - Solar System Design
  - Permitting Services
  - Equipment Sourcing
  - Technical Consulting
  - Complete Package (Design + Permit + Equipment)
  - General Question
  - Other
- Default: "Select an option"
- Error message: "Please select a project type"

**System Size (Optional):**
- Label: "Estimated System Size (if known)"
- Input: Dropdown
- Options:
  - Under 5 kW
  - 5-8 kW
  - 8-12 kW
  - 12-16 kW
  - 16+ kW
  - Commercial (20+ kW)
  - Not sure yet
- Help text: "Don't worry if you're unsure - we can help you determine this"

**Timeline (Optional):**
- Label: "Project Timeline"
- Input: Dropdown
- Options:
  - Within 1 month
  - 1-3 months
  - 3-6 months
  - 6-12 months
  - 12+ months
  - Just researching
- Help text: "When are you planning to start?"

**Message (Required):**
- Label: "Message"
- Input: Textarea (4-6 rows)
- Placeholder: "Tell us about your project, questions, or what you're trying to accomplish..."
- Validation: Minimum 10 characters
- Character counter: "XXX characters (minimum 10)"
- Error message: "Please provide some details about your inquiry"

**Newsletter Opt-in (Optional):**
- Checkbox: "Send me DIY solar tips and guides"
- Default: Unchecked
- Help text: "We send helpful guides and updates (unsubscribe anytime)"

**Submit Button:**
- Text: "Send Message"
- Loading state: "Sending..." with spinner
- Success state: "Message Sent!"
- Disabled until form is valid

**Form Validation:**
- Real-time validation on blur
- Clear error messages
- Required field indicators (asterisk or "Required")
- Submit button disabled until form valid
- Success/error feedback after submission

**Success Message (After Submission):**
Display in place of form:
- Headline: "Thanks for reaching out!"
- Message: "We've received your message and will respond within 24 hours. Check your email for a confirmation."
- Next Steps:
  - "While you wait, check out our [Solar Calculator](/calculator)"
  - "Browse [Equipment Options](/equipment)"
  - "Read our [FAQ](/faq)"
- Button: "Send Another Message" (resets form)

**Error Handling:**
- If submission fails: "Sorry, something went wrong. Please try emailing us directly at [email] or call [phone]."
- Preserve form data so user doesn't lose information

### 4. Contact Information (Right Column)

**Section 1: Contact Details**
Title: "Contact Information"

**Email:**
- Icon: Email icon
- Label: "Email"
- Value: info@diysolar.com (or appropriate email)
- Clickable: Opens email client
- Help text: "Best for detailed questions and project inquiries"

**Phone:**
- Icon: Phone icon
- Label: "Phone"
- Value: (XXX) XXX-XXXX
- Clickable: Tel link for mobile
- Help text: "Available Monday-Friday, 9am-6pm EST"

**Response Time:**
- Icon: Clock icon
- Text: "We respond within 24 hours"
- Subtext: "Most inquiries answered same business day"

---

**Section 2: What to Expect**
Title: "What Happens Next?"

**Step 1:**
- Icon: Envelope or message
- Title: "We Review Your Message"
- Description: "Our team reviews your inquiry and gathers relevant information"

**Step 2:**
- Icon: Calendar or phone
- Title: "Initial Response (24 hours)"
- Description: "We respond with answers, next steps, or schedule a consultation"

**Step 3:**
- Icon: Clipboard or checklist
- Title: "Free Consultation"
- Description: "If interested, we schedule a detailed consultation to discuss your project"

**Step 4:**
- Icon: Document or blueprint
- Title: "Custom Proposal"
- Description: "We provide a tailored quote and timeline for your solar project"

---

**Section 3: Trust Signals**
Title: "Why Choose Us?"

Display badges/stats:
- Licensed PE Engineers
- NABCEP Certified
- 5,000+ Systems Designed
- 98% Approval Rate
- All 50 States
- 25+ Years Experience

---

**Section 4: Quick Links**
Title: "Helpful Resources"

Links to:
- [Solar Calculator](/calculator) - "Estimate your system size"
- [Design Request Form](/design-request) - "Ready to start? Skip ahead"
- [FAQ](/faq) - "Find quick answers"
- [Pricing](/pricing) - "View our packages"
- [About Us](/about) - "Learn about our team"

---

**Section 5: Service Areas**
Title: "We Serve All 50 States"

- Text: "Licensed Professional Engineers in every state"
- Text: "We've designed systems from Alaska to Florida, Maine to Hawaii"
- Optional: Small US map graphic

### 5. Alternative Contact Methods (Optional)

**Prefer a different approach?**

**Live Chat (if available):**
- Button: "Start Live Chat"
- Hours: "Available Mon-Fri, 9am-6pm EST"

**Schedule Call:**
- Button: "Schedule a Call"
- Link to Calendly or scheduling system

**Social Media (if applicable):**
- LinkedIn, Facebook, Twitter/X icons with links

### 6. FAQ Snippet (Optional)

**Common Questions:**
Display 3-4 most common questions with short answers and link to full FAQ:

**Q: How much does a solar design cost?**
A: Starting at $XXX for design-only, $XXX for design + permitting. [View Pricing](/pricing)

**Q: How long does design take?**
A: 5-7 business days for standard designs. Expedited service available. [Learn More](/services)

**Q: Do you offer free consultations?**
A: Yes, initial consultations are always free with no obligation. [Contact Us](#form)

Link: "View all FAQs →"

### 7. Call to Action (Bottom of Page)

**Not ready to reach out yet?**
- Headline: "Explore Your Options"
- Three CTA buttons:
  - "Try Solar Calculator" (primary)
  - "View Services & Pricing"
  - "Read Customer Reviews"

### 8. Schema Markup for SEO

Implement ContactPage and Organization schema:
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "DIY Solar Consultants",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "email": "info@diysolar.com",
      "contactType": "Customer Service",
      "availableLanguage": "English",
      "areaServed": "US"
    }
  }
}
```

## Technical Requirements

**React Component:** `src/pages/contact.jsx`

**Form Component:** `src/components/ContactForm.jsx` (reusable)

**Form Handling:**
- Client-side validation (React Hook Form or similar)
- Server-side submission (API route)
- Email notification to company
- Auto-reply email to user (confirmation)
- reCAPTCHA or honeypot spam prevention
- Form data sanitization

**Email Integration Options:**
- Send via API to company email
- Store in database for CRM
- Use service like SendGrid, Mailgun, or AWS SES
- Include form data in email notification

**SEO:**
- Meta title: "Contact Us - DIY Solar Design & Permitting | DIY Solar Consultants"
- Meta description: "Get in touch with our licensed PE solar engineers. Ask questions about solar design, permitting, equipment, or DIY installation. We respond within 24 hours."
- Schema markup for ContactPage
- Semantic HTML

**Accessibility:**
- Proper form labels
- ARIA attributes
- Error announcements for screen readers
- Keyboard navigation
- Focus management
- High contrast text

**Mobile Responsive:**
- Stack columns on mobile
- Touch-friendly inputs
- Readable font sizes
- Appropriate input types (email, tel)

**Security:**
- CSRF protection
- Input sanitization
- Rate limiting (prevent spam)
- reCAPTCHA or alternative spam prevention
- Secure email handling

## Design Elements

**Color Scheme:**
- Form: Clean white background
- Buttons: Primary brand color
- Success: Green confirmation
- Errors: Red/orange with clear icons
- Info: Blue highlights

**Icons:**
- Form field icons (optional but helpful)
- Contact method icons (email, phone, chat)
- Trust signal badges
- Step indicators

**Typography:**
- Clear, readable labels
- Helpful placeholder text
- Supportive help text
- Clear hierarchy

**Spacing:**
- Generous spacing between fields
- Clear visual grouping
- Easy-to-tap buttons (44px min)

## Form Backend

**On Form Submission:**

1. Validate all fields
2. Sanitize inputs
3. Check for spam (reCAPTCHA score or honeypot)
4. Send email notification to company:
   ```
   Subject: New Contact Form Submission - [Project Type]

   Name: [Name]
   Email: [Email]
   Phone: [Phone]
   Project Type: [Type]
   System Size: [Size]
   Timeline: [Timeline]

   Message:
   [Message]

   Newsletter: [Yes/No]
   Submitted: [Timestamp]
   ```

5. Send confirmation email to user:
   ```
   Subject: We received your message - DIY Solar Consultants

   Hi [Name],

   Thanks for reaching out! We've received your message and will respond within 24 hours.

   In the meantime, you might find these resources helpful:
   - Solar Calculator: [link]
   - FAQ: [link]
   - Equipment Guide: [link]

   Best regards,
   DIY Solar Consultants Team
   ```

6. Return success response to frontend
7. Optional: Store in database for CRM/analytics

## SEO Keywords
- Contact solar designer
- Solar design consultation
- DIY solar help
- Solar engineering contact
- Solar permit questions

## Tone
Friendly, approachable, responsive, helpful. Make it easy to reach out and set clear expectations for what happens next.

## Deliverables
1. `src/pages/contact.jsx` - Contact page component
2. `src/components/ContactForm.jsx` - Reusable contact form
3. Form validation logic
4. API route for form submission (`/api/contact`)
5. Email templates (company notification + user confirmation)
6. Spam prevention implementation
7. Success/error state handling
8. Styling (Tailwind or CSS module)
9. Mobile responsive implementation
10. SEO meta tags and schema markup
11. Accessibility compliance

**Build in diy-solar-consultants directory. Make it user-friendly, trustworthy, and conversion-optimized. The form should be simple enough to encourage submissions while gathering useful information.**
