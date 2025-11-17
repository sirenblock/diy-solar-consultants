# TASK 05: Solar Calculator Page

## Your Mission
Create an interactive solar system sizing calculator that helps visitors estimate their system size, costs, savings, and ROI while capturing leads for detailed reports.

## Company Context
**DIY Solar Consultants** provides this calculator as both a valuable tool for DIY homeowners and a lead generation mechanism. The calculator should provide useful estimates while encouraging users to request a professional design for precise calculations.

## What to Build

### 1. Page Header
**Hero Section:**
- Headline: "Solar System Size Calculator"
- Subheading: "Find out how much solar you need and how much you can save"
- Brief description: "Get instant estimates for system size, costs, and savings based on your energy usage and location"

### 2. Calculator Interface Design

**Layout:**
- Clean, step-by-step interface
- Real-time calculations as user inputs data
- Visual feedback (charts, graphs)
- Mobile-friendly inputs
- Progress indicator showing completion

### 3. Input Fields

**Step 1: Energy Usage**
Title: "Tell us about your energy usage"

**Option A: Monthly Electric Bill**
- Label: "Average Monthly Electric Bill"
- Input: Dollar amount ($)
- Range: $50 - $1,000+
- Help text: "Find this on your utility bill. We'll use this to estimate your usage."

**Option B: Monthly kWh Usage** (Alternative input)
- Label: "Average Monthly kWh Usage"
- Input: Number (kWh)
- Range: 200 - 3,000+ kWh
- Help text: "If you know your usage in kWh, enter it here"
- Toggle between Option A and Option B

**Utility Rate (Optional Advanced Input):**
- Label: "Average electricity rate ($/kWh)"
- Input: Dollar amount
- Default: $0.14/kWh (national average)
- Help text: "We'll estimate this based on your location, or you can enter your exact rate"

---

**Step 2: Location**
Title: "Where will the system be installed?"

**ZIP Code:**
- Label: "ZIP Code"
- Input: 5-digit ZIP code
- Validation: Valid US ZIP code
- Help text: "We'll use this to estimate solar production in your area"

**State:** (Auto-filled from ZIP, or manual select)
- Dropdown: All 50 states
- Used for cost estimates and incentive calculations

**Solar Resource Data:**
- Auto-populate based on ZIP code using NREL PVWatts API or static database
- Display: "Average sun hours per day: X.X hours"
- Display: "Good/Excellent/Moderate solar resource area"

---

**Step 3: Roof & Property**
Title: "Tell us about your property"

**Available Roof Space:**
- Label: "Approximate available roof space"
- Options (Radio buttons or dropdown):
  - Small (200-400 sq ft) - Enough for 3-6 kW
  - Medium (400-600 sq ft) - Enough for 6-10 kW
  - Large (600-1,000 sq ft) - Enough for 10-16 kW
  - Very Large (1,000+ sq ft) - Enough for 16+ kW
  - Not sure
- Help text: "Don't worry if you're unsure - we'll help you assess this"

**Roof Orientation (Optional):**
- Label: "Primary roof orientation"
- Options: South, Southwest, Southeast, East, West, North, Mixed, Not sure
- Help text: "South-facing roofs produce the most energy"

**Shading:**
- Label: "Is your roof shaded?"
- Options (Radio buttons):
  - No shading (full sun all day)
  - Minimal shading (shaded < 2 hours/day)
  - Moderate shading (shaded 2-4 hours/day)
  - Heavy shading (shaded > 4 hours/day)
  - Not sure
- Help text: "Shading affects production. We can work with shaded roofs."

---

**Step 4: Goals & Preferences**
Title: "What are your solar goals?"

**System Goal:**
- Label: "How much of your energy do you want to offset?"
- Options (Slider or radio buttons):
  - 50% offset
  - 75% offset
  - 100% offset (most common)
  - 125% offset (future EV, growth)
  - Maximum roof space
- Display: "Targeting XX% of your energy usage"

**Battery Storage:**
- Label: "Are you interested in battery backup?"
- Options (Radio buttons):
  - Yes, whole-home backup
  - Yes, essential loads only
  - Maybe, want to see costs
  - No, grid-tied only
- Help text: "Batteries add $10,000-$20,000 but provide backup power"

**Timeline:**
- Label: "When are you planning to install?"
- Options:
  - Within 3 months
  - 3-6 months
  - 6-12 months
  - 12+ months
  - Just researching
- Help text: "This helps us prioritize your quote"

### 4. Calculation Logic

**System Size Calculation:**
```
Annual kWh Usage = Monthly Bill / Utility Rate × 12
OR
Annual kWh Usage = Monthly kWh × 12

System Size (kW) = (Annual kWh × Offset %) / (Sun Hours × 365 × System Efficiency)

Where:
- Sun Hours = Location-specific (from NREL data)
- System Efficiency = 0.80 (80% typical system efficiency accounting for losses)
- Offset % = User's selected offset (50%, 75%, 100%, 125%)
```

**Number of Panels:**
```
Number of Panels = System Size (watts) / Panel Wattage

Assume: 400W average panel
```

**Roof Space Required:**
```
Roof Space = Number of Panels × 18 sq ft per panel
(Average panel is ~17.5 sq ft, add spacing)
```

**Annual Production:**
```
Annual kWh Production = System Size (kW) × Sun Hours × 365 × 0.80
```

**Cost Estimates:**

**Equipment Costs (DIY):**
- Panels: $0.60-$0.80 per watt
- Inverter (string): $0.20-$0.30 per watt
- Inverter (micro): $0.40-$0.50 per watt
- Mounting: $0.15-$0.20 per watt
- BOS (balance of system): $0.10-$0.15 per watt
- **Total DIY Equipment: $1.05-$1.95 per watt**

**Add Design & Permit:**
- Design: $500-$800
- Permitting: $300-$600

**Total DIY Cost = (System Size × $1.05-$1.95) + Design + Permit**

**Professional Installation Cost (for comparison):**
- $2.50-$3.50 per watt (national average)
- **Total Pro Cost = System Size × $2.50-$3.50**

**Savings Calculation:**
```
DIY Cost vs. Professional Installation Savings:
Savings = Professional Cost - DIY Cost
Savings % = (Savings / Professional Cost) × 100
```

**Annual Electricity Savings:**
```
Annual Savings = Annual Production (kWh) × Utility Rate
```

**ROI Calculation:**
```
Payback Period = Net Cost / Annual Savings

Where:
Net Cost = Total DIY Cost - Federal Tax Credit (30%)

Simple ROI = (Annual Savings / Net Cost) × 100
```

**Battery Cost Addition (if selected):**
- Essential loads (10-13 kWh): +$8,000-$12,000
- Whole home (13-20 kWh): +$12,000-$18,000
- Large system (20+ kWh): +$18,000-$30,000

### 5. Results Display

**Results Section:**
Title: "Your Solar Estimate"
Subtitle: "Here's what we recommend for your home"

**Display Cards/Sections:**

**1. Recommended System Size**
- Large display: "X.X kW System"
- Details: "XX panels @ 400W each"
- Details: "Requires ~XXX sq ft of roof space"
- Visual: Solar panel icon or illustration

**2. Annual Production**
- Large display: "XX,XXX kWh/year"
- Details: "Offsets XX% of your energy usage"
- Details: "Equivalent to X tons of CO2 avoided"
- Visual: Chart showing production vs. usage

**3. Cost Breakdown**
- **DIY Installation:**
  - Equipment: $XX,XXX
  - Design & Permit: $X,XXX
  - Subtotal: $XX,XXX
  - Federal Tax Credit (30%): -$X,XXX
  - **Your Cost: $XX,XXX**

- **vs. Professional Installation:**
  - Professional Quote: $XX,XXX
  - After Tax Credit: $XX,XXX
  - **Your Savings: $XX,XXX (XX%)**

- Visual: Side-by-side cost comparison chart

**4. Savings & ROI**
- **Annual Savings:** $X,XXX/year in electricity
- **Payback Period:** X.X years
- **25-Year Savings:** $XXX,XXX (total lifetime savings)
- **25-Year ROI:** XXX%
- Visual: Line graph showing cumulative savings over 25 years

**5. Environmental Impact**
- CO2 Offset: XX tons over 25 years
- Equivalent to: XX trees planted or XX,XXX miles not driven
- Visual: Environmental icon

**Battery Addition (if selected):**
- Battery System: XX kWh capacity
- Battery Cost: +$XX,XXX
- Backup Power: Powers X essential circuits for XX hours
- Updated total cost and payback

### 6. Assumptions & Disclaimers

**Display (collapsible section):**
"Assumptions used in this calculation:"
- Utility rate: $X.XX/kWh
- Sun hours: X.X hours/day (based on your location)
- System efficiency: 80% (accounts for inverter losses, shading, temperature)
- Panel wattage: 400W average
- Federal tax credit: 30% (through 2032)
- Utility rate inflation: 3% annually
- System degradation: 0.5% per year

"This is an estimate only. Actual results depend on specific site conditions, equipment selection, and installation quality. For precise calculations and engineering, request a professional design."

### 7. Lead Capture Form

**After showing results, display form:**

**Headline:** "Get Your Detailed Solar Report"
**Subheading:** "Receive a comprehensive analysis with equipment recommendations, financing options, and next steps"

**Form Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Best time to contact (optional)
- Additional comments/questions (optional)
- Checkbox: "I'm interested in a professional design quote"
- Checkbox: "Send me DIY solar guides and tips"

**CTA Button:** "Get My Free Report"

**After Submission:**
- Thank you message
- "We'll email your detailed report within 24 hours"
- Next steps: "Schedule a consultation" link
- "Browse our equipment" link
- "View pricing packages" link

### 8. Additional Features

**Save & Share:**
- "Save this estimate" button (saves to localStorage or email)
- "Share this estimate" button (shareable link or PDF download)

**Start Over:**
- "Calculate another system" button to reset

**Educational Tips:**
Display helpful tips throughout:
- "Tip: South-facing roofs produce 20-25% more energy than east/west"
- "Tip: String inverters cost less but microinverters offer panel-level monitoring"
- "Tip: Federal tax credit is 30% through 2032, then drops to 26%"

**Comparison Scenarios:**
Allow users to toggle:
- String inverter vs. Microinverter costs
- With battery vs. Without battery
- 100% offset vs. 125% offset (for future EV)

### 9. Call to Action

**After Results Section:**
- Primary CTA: "Request Professional Design" (link to design request form)
- Secondary CTA: "Schedule Free Consultation"
- Tertiary CTA: "View Equipment Options"

**Trust Signals:**
- "5,000+ systems designed"
- "98% permit approval rate"
- "Licensed PE engineers"

## Technical Requirements

**React Component:** `src/pages/calculator.jsx`

**State Management:**
- React state for form inputs
- Derived state for calculations
- Form validation

**APIs/Data Sources:**
- NREL PVWatts API for solar resource data (or static database)
- ZIP code to lat/long conversion
- State electricity rate database

**Calculations:**
- Real-time calculations as user inputs data
- Debounced updates for smooth UX
- Range validation (reasonable system sizes)

**Visualizations:**
- Chart.js, Recharts, or Victory for graphs
- Cost comparison bar charts
- Production vs. usage chart
- Savings over time line graph

**Form Handling:**
- Client-side validation
- Email integration (send results via email)
- Lead capture to database/CRM or email notification

**SEO:**
- Meta title: "Free Solar Calculator - Estimate System Size & Savings | DIY Solar Consultants"
- Meta description: "Calculate your solar system size, costs, and savings instantly. Find out how much you can save with DIY solar installation. Free estimates in 2 minutes."
- Schema markup for WebApplication

**Performance:**
- Fast calculations (< 100ms)
- Smooth animations
- Mobile optimized inputs
- Lazy load charts

**Accessibility:**
- Keyboard navigation
- ARIA labels for inputs
- Clear error messages
- High contrast for readability

## Design Elements

**Color Coding:**
- Green for savings/positive results
- Blue for information
- Orange/yellow for warnings or assumptions
- Clear visual hierarchy

**Icons:**
- Solar panel icon
- Dollar sign for costs
- Graph icon for savings
- Battery icon for storage
- Calculator icon

**Mobile Responsiveness:**
- Stack inputs vertically on mobile
- Collapsible sections for results
- Touch-friendly input controls
- Readable font sizes

## SEO Keywords
- Solar calculator
- Solar system size calculator
- Solar panel cost calculator
- Solar savings calculator
- DIY solar cost estimator
- How much solar do I need
- Solar ROI calculator

## Tone
Helpful, educational, transparent. Make users feel empowered with information. Be realistic about estimates while highlighting potential savings.

## Deliverables
1. `src/pages/calculator.jsx` - Calculator page component
2. `src/components/SolarCalculator.jsx` - Calculator logic component
3. Calculation functions/utilities
4. Chart components for visualizations
5. Lead capture form component
6. Results display component
7. Styling (Tailwind or CSS module)
8. Mobile responsive implementation
9. Form validation logic
10. Email/lead capture integration
11. SEO meta tags and schema markup

**Build in diy-solar-consultants directory. Make it accurate, user-friendly, and conversion-optimized. The calculator should provide genuine value while encouraging users to request professional design services.**
