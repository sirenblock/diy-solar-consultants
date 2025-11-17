# TASK 07: Solar Design Request Multi-Step Form

## Your Mission
Create a comprehensive multi-step form for requesting detailed solar system designs. This is the primary conversion point for the business - it should gather all necessary information while providing a smooth, professional user experience.

## Company Context
**DIY Solar Consultants** uses this form to collect detailed project information before creating custom solar designs. The form should be thorough enough to gather all necessary data while remaining user-friendly and not overwhelming.

## What to Build

### 1. Page Header
**Hero Section:**
- Headline: "Request Your Solar System Design"
- Subheading: "Tell us about your project and we'll create a custom solar design tailored to your property"
- Trust signals: "Licensed PE Engineers | 5-7 Day Turnaround | 98% Permit Approval Rate"

### 2. Form Structure

**Multi-Step Progress Indicator:**
Display progress at top of form:
- Step 1: System Details
- Step 2: Roof & Mounting
- Step 3: Contact & Timeline

Visual progress bar: "Step X of 3"
Percentage complete: "33% Complete"

**Navigation:**
- "Next" button (advances to next step after validation)
- "Back" button (returns to previous step, preserves data)
- "Save & Continue Later" button (optional - saves progress via email link)

---

## STEP 1: System Details

**Step Header:**
- Title: "System Details"
- Subtitle: "Tell us about the solar system you want to design"

### Fields:

**1. Desired System Size**
- Label: "Estimated System Size"
- Input: Radio buttons or dropdown
- Options:
  - Under 5 kW (small home, minimal usage)
  - 5-8 kW (typical residential)
  - 8-12 kW (large home or high usage)
  - 12-16 kW (very large home)
  - 16-20 kW (large residential or small commercial)
  - 20+ kW (commercial)
  - Not sure - help me determine this
- Required: Yes
- Help text: "Not sure? We can help determine optimal size. Upload recent energy bills in next step."

**If "Not sure" selected, show additional field:**
- Label: "Average Monthly Electric Bill"
- Input: Dollar amount
- Placeholder: "$150"
- Or: "Average Monthly kWh Usage"
- Input: Number
- Placeholder: "850 kWh"

---

**2. Energy Offset Goal**
- Label: "How much of your energy do you want to offset?"
- Input: Radio buttons or slider
- Options:
  - 50% offset (partial solar)
  - 75% offset (most usage)
  - 100% offset (net-zero energy)
  - 125% offset (future needs - EV, expansion)
  - Maximum possible (use all available space)
- Default: 100%
- Required: Yes
- Help text: "100% offset means your solar produces as much energy as you use annually"

---

**3. Solar Panel Preference**
- Label: "Solar Panel Preference"
- Input: Dropdown or radio with images
- Options:
  - REC Alpha Pure-R (premium, highest efficiency)
  - Q.PEAK DUO BLK-G10+ (mid-premium)
  - Jinko Tiger Neo (value, high performance)
  - Canadian Solar HiKu7 (reliable value)
  - Longi Hi-MO 6 (value, high efficiency)
  - No preference - recommend best option
  - Other (specify)
- Default: "No preference"
- Required: No
- Help text: "We'll recommend the best panels for your needs and budget"
- Link: "Compare panels" (opens modal or link to equipment page)

**If "Other" selected:**
- Text input: "Specify panel model"

---

**4. Panel Power Rating (Optional)**
- Label: "Preferred Panel Wattage"
- Input: Dropdown
- Options:
  - 370-400W
  - 400-430W
  - 430-460W
  - 460W+
  - No preference
- Help text: "Higher wattage = fewer panels needed"

---

**5. Inverter Type**
- Label: "Inverter Type Preference"
- Input: Radio buttons with descriptions
- Options:
  - **String Inverter** (Most economical, good for simple roofs)
  - **Microinverters** (Best for shading/complex roofs, panel-level monitoring)
  - **String Inverter + Optimizers** (Middle ground, panel-level monitoring)
  - **No preference - recommend best option**
- Required: Yes
- Help text: "Affects cost, performance, and monitoring capabilities"
- Link: "Compare inverter types" (modal or tooltip)

---

**6. Inverter Brand/Model (if preference)**
- Label: "Inverter Brand Preference"
- Input: Dropdown
- Conditional: Only show if not "No preference"
- Options (String):
  - SolarEdge HD-Wave
  - SMA Sunny Boy
  - Fronius Primo/Symo
  - Other (specify)
- Options (Microinverters):
  - Enphase IQ8 Series
  - APsystems DS3
  - Other (specify)
- Required: No

---

**7. Battery Storage**
- Label: "Battery Storage"
- Input: Radio buttons
- Options:
  - **Yes - Essential loads backup** (refrigerator, internet, lights)
  - **Yes - Partial home backup** (essential + some circuits)
  - **Yes - Whole home backup** (entire electrical panel)
  - **Maybe - include in quote for comparison**
  - **No - Grid-tied only**
- Required: Yes
- Help text: "Batteries add $10,000-$20,000+ but provide backup power during outages"

**If any "Yes" or "Maybe" selected, show:**

**8. Battery System Preference**
- Label: "Battery Preference"
- Input: Radio buttons
- Options:
  - Tesla Powerwall 3 (13.5 kWh, $10,500)
  - Enphase IQ Battery 5P (5 kWh modular)
  - LG RESU (9.8-16 kWh)
  - Generac PWRcell (9-18 kWh)
  - No preference - recommend best option
- Required: No
- Help text: "We'll help you select the right battery for your needs"

**9. Desired Battery Capacity (if battery selected)**
- Label: "How much backup do you need?"
- Input: Radio or slider
- Options:
  - 8-12 hours (essential loads)
  - 12-24 hours (partial home)
  - 24-48 hours (whole home)
  - Multiple days
  - Not sure - help me determine
- Help text: "More capacity = higher cost but longer backup duration"

---

**10. Additional Services**
- Label: "What else do you need?"
- Input: Checkboxes (multiple select)
- Options:
  - [ ] Permitting planset with PE stamp
  - [ ] Equipment sourcing assistance
  - [ ] Structural calculations (if required)
  - [ ] Installation consulting/support
  - [ ] Utility interconnection assistance
  - [ ] None - design only
- Help text: "Select all services you're interested in"

---

**Step 1 Validation:**
- Require: System size, offset goal, inverter type, battery preference
- Optional: Specific panel/inverter models
- Next button disabled until required fields complete

---

## STEP 2: Roof & Mounting

**Step Header:**
- Title: "Roof & Property Information"
- Subtitle: "Help us understand your roof and site conditions"

### Fields:

**1. Property Address**
- Label: "Installation Address"
- Input: Address autocomplete (Google Places API or similar)
- Fields:
  - Street Address (required)
  - City (required)
  - State (required, dropdown)
  - ZIP Code (required)
- Help text: "We'll use this to assess sun exposure and local code requirements"
- Required: Yes

---

**2. Roof Type**
- Label: "Primary Roof Type"
- Input: Radio buttons with images
- Options:
  - Composition shingle (asphalt)
  - Tile (clay or concrete)
  - Metal - standing seam
  - Metal - corrugated/ribbed
  - Flat/low-slope
  - Other (specify)
- Required: Yes
- Help text: "This determines the mounting system we'll specify"

**If "Other" selected:**
- Text input: "Describe roof type"

---

**3. Roof Age**
- Label: "Approximate Roof Age"
- Input: Radio buttons
- Options:
  - Less than 5 years old
  - 5-10 years old
  - 10-15 years old
  - 15-20 years old
  - 20+ years old
  - Not sure
- Required: Yes
- Help text: "Important: We recommend replacing roofs older than 15 years before solar installation"
- Warning (if 15+ years): "⚠️ Consider roof replacement before solar. Solar systems last 25+ years."

---

**4. Roof Pitch/Slope**
- Label: "Roof Pitch"
- Input: Radio buttons with visual diagram
- Options:
  - Flat (0-2:12)
  - Low slope (2:12 - 4:12)
  - Medium slope (4:12 - 7:12)
  - Steep (7:12 - 12:12)
  - Very steep (12:12+)
  - Not sure
- Required: Yes
- Help text: "Affects mounting and production. If unsure, we can assess from satellite imagery."

---

**5. Primary Roof Orientation**
- Label: "Which direction does your roof face?"
- Input: Radio buttons or compass selector
- Options:
  - South (best for solar)
  - Southwest
  - Southeast
  - East
  - West
  - North
  - Multiple orientations
  - Not sure
- Required: Yes
- Help text: "South-facing roofs produce the most energy in the Northern Hemisphere"

**If "Multiple orientations" selected:**
- Checkbox list: "Available roof sections"
  - [ ] South
  - [ ] Southwest
  - [ ] Southeast
  - [ ] East
  - [ ] West
  - [ ] North

---

**6. Shading Conditions**
- Label: "Is your roof shaded during the day?"
- Input: Radio buttons
- Options:
  - No shading (full sun all day)
  - Minimal shading (< 10% of roof, < 2 hours/day)
  - Moderate shading (10-30% of roof, 2-4 hours/day)
  - Heavy shading (> 30% of roof, > 4 hours/day)
  - Not sure
- Required: Yes
- Help text: "Shading affects production. Microinverters or optimizers help with shaded roofs."

**If shading present, show:**
- Label: "What causes the shading?"
- Checkboxes:
  - [ ] Trees
  - [ ] Neighboring buildings
  - [ ] Chimneys/vents
  - [ ] Other roof structures
  - [ ] Other

---

**7. Available Roof Space**
- Label: "Approximate available roof space"
- Input: Radio buttons
- Options:
  - Small (200-400 sq ft) - fits 3-6 kW
  - Medium (400-600 sq ft) - fits 6-10 kW
  - Large (600-1,000 sq ft) - fits 10-16 kW
  - Very large (1,000+ sq ft) - fits 16+ kW
  - Not sure - please assess
- Help text: "Don't worry if unsure - we'll determine this from satellite imagery"

---

**8. Roof Obstructions**
- Label: "Are there obstructions on the roof?"
- Checkboxes (multiple select):
  - [ ] Skylights
  - [ ] Vents/pipes
  - [ ] Chimneys
  - [ ] HVAC equipment
  - [ ] Satellite dish
  - [ ] None
- Help text: "We'll work around these in the design"

---

**9. Mounting System Preference**
- Label: "Mounting/Racking Preference"
- Input: Radio buttons
- Options:
  - IronRidge (premium, most common)
  - Unirac (reliable mid-range)
  - Quick Mount PV (excellent flashings)
  - S-5! (for metal roofs)
  - No preference - recommend best option
- Required: No
- Help text: "We'll recommend the appropriate system for your roof type"

---

**10. Electrical Service**
- Label: "Main Electrical Panel Amperage"
- Input: Radio buttons
- Options:
  - 100 amp
  - 125 amp
  - 150 amp
  - 200 amp
  - 400 amp (commercial)
  - Not sure
- Required: Yes
- Help text: "Found on main breaker in electrical panel. May require upgrade for larger systems."

**11. Panel Location**
- Label: "Where is your main electrical panel?"
- Input: Radio buttons
- Options:
  - Garage
  - Basement
  - Outside wall
  - Inside utility room
  - Other/not sure
- Help text: "Helps us plan conduit routing"

---

**12. Photos/Documents**
- Label: "Upload Photos or Documents (Optional but Helpful)"
- Input: File upload (multiple)
- Accepted: Images (JPG, PNG), PDFs
- Max size: 10MB per file
- Recommended uploads:
  - Roof photos (multiple angles)
  - Electrical panel photo
  - Recent electric bills (12 months if available)
  - Property survey (if available)
- Help text: "Photos greatly improve design accuracy"
- Display: Upload button + file list with remove option

---

**Step 2 Validation:**
- Require: Address, roof type, age, pitch, orientation, shading, panel size, obstructions
- Optional: Photos, specific mounting preference
- Back button: Returns to Step 1 (preserves data)
- Next button: Advances to Step 3 after validation

---

## STEP 3: Contact Info & Timeline

**Step Header:**
- Title: "Contact Information"
- Subtitle: "How should we reach you with your solar design?"

### Fields:

**1. Name**
- Label: "Full Name"
- Input: Text
- Required: Yes
- Validation: Minimum 2 characters

**2. Email**
- Label: "Email Address"
- Input: Email
- Required: Yes
- Validation: Valid email format
- Help text: "We'll send your design and quote to this address"

**3. Phone**
- Label: "Phone Number"
- Input: Tel
- Required: Yes
- Validation: Valid US phone format
- Help text: "For follow-up questions about your design"

**4. Best Time to Contact**
- Label: "Best time to reach you"
- Input: Checkboxes (multiple)
- Options:
  - [ ] Morning (8am-12pm)
  - [ ] Afternoon (12pm-5pm)
  - [ ] Evening (5pm-8pm)
  - [ ] Anytime
- Required: No

---

**5. Project Timeline**
- Label: "When are you planning to start your project?"
- Input: Radio buttons
- Options:
  - Within 1 month
  - 1-3 months
  - 3-6 months
  - 6-12 months
  - 12+ months
  - Just researching/gathering quotes
- Required: Yes
- Help text: "Helps us prioritize your design"

---

**6. How Did You Hear About Us?**
- Label: "How did you find us?"
- Input: Dropdown
- Options:
  - Google search
  - Social media
  - Referral from friend/family
  - Online forum/Reddit
  - YouTube
  - Blog/article
  - Other
- Required: No (for marketing tracking)

---

**7. Budget**
- Label: "Estimated Budget (Optional)"
- Input: Radio buttons
- Options:
  - Under $10,000
  - $10,000 - $15,000
  - $15,000 - $20,000
  - $20,000 - $30,000
  - $30,000+
  - Prefer not to say
- Required: No
- Help text: "Helps us recommend appropriate equipment and options"

---

**8. Additional Information**
- Label: "Anything else we should know?"
- Input: Textarea
- Placeholder: "Special requirements, concerns, goals, questions, etc."
- Max length: 1000 characters
- Character counter
- Required: No
- Help text: "Tell us about any specific goals, concerns, or requirements"

---

**9. Service Package Interest**
- Label: "Which package are you interested in?"
- Input: Radio buttons
- Options:
  - Design Only
  - Design + Permitting
  - Design + Permitting + Equipment Sourcing
  - Complete Package (Design + Permit + Equipment + Consulting)
  - Not sure - provide recommendations
- Required: Yes
- Link: "Compare packages" (link to pricing page)

---

**10. Agreement & Consent**

**Terms Acceptance:**
- Checkbox: "I agree to the Terms of Service and Privacy Policy"
- Required: Yes
- Links to terms and privacy policy

**Communication Consent:**
- Checkbox: "I agree to be contacted about my solar design request"
- Required: Yes

**Newsletter (Optional):**
- Checkbox: "Send me DIY solar tips, guides, and updates"
- Default: Unchecked
- Required: No

---

**11. Form Summary (Collapsible)**
Display summary of all entered information:
- "Review your information before submitting"
- Show key details from all 3 steps
- "Edit" links to go back to each step

---

**Submit Button:**
- Text: "Submit Design Request"
- Large, prominent button
- Loading state: "Submitting..." with spinner
- Success state: Redirect to thank you page

---

## After Submission: Thank You Page

**Success Message:**
- Large checkmark icon
- Headline: "Design Request Received!"
- Subheading: "We'll review your information and send your custom solar design within 5-7 business days"

**What Happens Next:**
1. **Email Confirmation (within 5 minutes)**
   - We'll send a confirmation email with your request details

2. **Engineer Review (1-2 business days)**
   - Our team reviews your property and requirements

3. **Custom Design (5-7 business days)**
   - We create your tailored solar system design

4. **Quote & Consultation**
   - We email your design, quote, and schedule a consultation call

**Confirmation Details:**
- Display confirmation number: "Request #XXXX"
- Display submitted info summary
- Email copy: "A copy has been sent to [email]"

**Next Steps:**
- "While you wait, explore these resources:"
  - Link: "Try Our Solar Calculator"
  - Link: "Browse Equipment Options"
  - Link: "Read Our DIY Installation Guide"
  - Link: "View FAQ"

**Questions?**
- "Have questions about your request?"
- Button: "Contact Us"
- Email: info@diysolar.com
- Phone: (XXX) XXX-XXXX

---

## Technical Requirements

**React Components:**
- `src/pages/design-request.jsx` - Main page
- `src/components/DesignRequestForm.jsx` - Multi-step form component
- `src/components/FormStep1.jsx` - System details step
- `src/components/FormStep2.jsx` - Roof & mounting step
- `src/components/FormStep3.jsx` - Contact & timeline step
- `src/components/FormProgress.jsx` - Progress indicator
- `src/pages/design-request-thank-you.jsx` - Success page

**State Management:**
- React state for form data (all steps)
- Current step tracking
- Validation state
- Form persistence (localStorage backup)

**Form Handling:**
- Multi-step navigation
- Preserve data when navigating back/forward
- Client-side validation per step
- Server-side validation on submission
- File upload handling
- Form data sanitization

**Validation:**
- Required field validation
- Format validation (email, phone, etc.)
- File type/size validation
- Conditional validation (based on selections)
- Clear error messages

**API Integration:**
- Address autocomplete
- File upload to cloud storage
- Form submission endpoint
- Email notifications

**Email Notifications:**

1. **To Company:**
```
Subject: New Solar Design Request - [Name]

Design Request #XXXX

SYSTEM DETAILS:
- Size: [Size]
- Offset: [%]
- Panel: [Panel preference]
- Inverter: [Type] - [Brand]
- Battery: [Yes/No] - [Type if yes]
- Services: [List]

ROOF & PROPERTY:
- Address: [Full address]
- Roof Type: [Type]
- Age: [Age]
- Pitch: [Pitch]
- Orientation: [Direction]
- Shading: [Condition]
- Panel: [Amp] service

CONTACT:
- Name: [Name]
- Email: [Email]
- Phone: [Phone]
- Best time: [Time]
- Timeline: [Timeline]
- Budget: [Budget]

Package Interest: [Package]

Additional Notes:
[Message]

Files Attached: [List]
```

2. **To Client (Confirmation):**
```
Subject: Your Solar Design Request - Confirmation

Hi [Name],

Thanks for requesting a solar design from DIY Solar Consultants! We've received your information and our engineers are excited to create a custom design for your property.

Your Request Number: #XXXX

What You Can Expect:
✓ Engineer review: 1-2 business days
✓ Custom design delivered: 5-7 business days
✓ Detailed quote and consultation call

Your Request Summary:
- System Size: [Size]
- Location: [City, State]
- Package: [Package]

We'll email your custom design to [email] within 5-7 business days.

Questions in the meantime? Reply to this email or call us at (XXX) XXX-XXXX.

Best regards,
DIY Solar Consultants Team

P.S. While you wait, check out our Solar Calculator to see estimated savings: [link]
```

**SEO:**
- Meta title: "Request Solar Design Quote | DIY Solar Consultants"
- Meta description: "Get a custom solar system design from licensed PE engineers. Complete design, permitting, and equipment sourcing. 5-7 day turnaround. Start your quote now."
- Schema markup for Service
- No index on thank you page

**Accessibility:**
- Keyboard navigation through steps
- ARIA labels and attributes
- Error announcements
- Focus management between steps
- High contrast error states

**Security:**
- CSRF protection
- Input sanitization
- File upload validation
- Rate limiting
- Secure file storage
- PII handling compliance

**Mobile Responsive:**
- Single column on mobile
- Touch-friendly inputs
- Appropriate input types
- Readable at all sizes
- Sticky progress bar

**Analytics:**
- Track step progression
- Identify drop-off points
- Conversion tracking
- Form abandonment tracking

## Design Elements

**Progress Indicator:**
- Visual stepper at top
- Percentage complete
- Step labels
- Current step highlighted

**Form Layout:**
- Generous spacing
- Grouped related fields
- Clear section headers
- Helpful tooltips and help text
- Visual feedback for validation

**Buttons:**
- Large, easy to tap
- Clear labels (Next, Back, Submit)
- Loading states
- Disabled states until valid

## SEO Keywords
- Solar design request
- Get solar quote
- Request solar design
- DIY solar design quote
- Solar system design form

## Tone
Professional, helpful, reassuring. Make the process feel thorough but not overwhelming. Provide helpful guidance throughout.

## Deliverables
1. Multi-step form components (Steps 1-3)
2. Progress indicator component
3. Form validation logic
4. File upload functionality
5. Thank you page
6. Form submission API endpoint
7. Email notification templates
8. Styling (Tailwind or CSS module)
9. Mobile responsive implementation
10. Form data persistence (localStorage)
11. Analytics event tracking
12. SEO meta tags

**Build in diy-solar-consultants directory. This is the PRIMARY CONVERSION POINT - make it professional, trustworthy, comprehensive, and user-friendly.**
