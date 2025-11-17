# TASK 01: Homepage + Header/Footer Components

## Your Mission
Build the homepage for DIYSolarConsultants.com and create reusable Header and Footer components.

## Company Context
**DIY Solar Consultants** provides professional solar design, permitting, and equipment sourcing services for DIY homeowners. We help people save 40-60% on solar installation costs by providing expert technical support without the overhead of full installation services. Our licensed PE and NABCEP-certified professionals have designed 5,000+ systems across all 50 states with a 98% first-time permit approval rate.

## What to Build

### 1. Header Component (`src/components/Header.jsx`)
- Logo/company name: "DIY Solar Consultants"
- Navigation menu:
  - Home
  - About
  - Services
  - Equipment
  - Calculator
  - Contact
- Phone number or email: Prominently displayed
- Primary CTA button: "Get Your Solar Design"
- Mobile responsive hamburger menu
- Sticky header on scroll (optional but recommended)

### 2. Footer Component (`src/components/Footer.jsx`)

**Company Info Section:**
- Company name: DIY Solar Consultants
- Tagline: "Professional Solar Design for DIY Homeowners"
- Brief description: "Licensed PE and NABCEP-certified professionals providing solar design, permitting, and equipment sourcing services."

**Quick Links:**
- Home
- About
- Services
- Equipment
- Solar Calculator
- Contact
- FAQ
- Resources
- Pricing

**Services:**
- Solar System Design
- Permitting Plansets
- Equipment Sourcing
- Technical Consulting

**Trust Signals:**
- Licensed Professional Engineers
- NABCEP Certified
- 5,000+ Systems Designed
- 98% Permit Approval Rate
- All 50 States

**Newsletter Signup:**
- Email input field
- "Subscribe" button
- Text: "Get DIY solar tips and exclusive guides"

**Legal:**
- Copyright notice: "© 2024 DIY Solar Consultants. All rights reserved."
- Privacy Policy link
- Terms of Service link

### 3. Homepage (`src/pages/index.jsx`)

**Hero Section:**
- Headline: "Expert Solar Design & Permitting Services"
- Subheading: "Professional solar design for DIY homeowners. Save 40-60% on installation costs with expert guidance."
- Two CTA buttons:
  - Primary: "Get Your Solar Design" (links to /design-request)
  - Secondary: "Calculate System Size" (links to /calculator)
- Background: Professional solar design/blueprint image or clean gradient
- Trust badge strip: "Licensed PE | NABCEP Certified | 5,000+ Systems | 98% Approval Rate"

**Value Propositions Section:**
Title: "Why DIY Solar Consultants?"

Three columns:
1. **40-60% Cost Savings**
   - Icon: Dollar sign or savings icon
   - Description: "Professional expertise without installation markup. Get the same quality design at a fraction of the cost."

2. **98% Permit Approval Rate**
   - Icon: Checkmark or certificate
   - Description: "Licensed Professional Engineers in all 50 states. We get it right the first time."

3. **5,000+ Systems Designed**
   - Icon: Solar panel or house with solar
   - Description: "25+ years of combined experience. We've designed systems in every state and every condition."

**Key Statistics Section:**
Display prominently in a grid:
- **5,000+** Systems Designed
- **98%** First-Time Approval Rate
- **40-60%** Average Cost Savings
- **50** States Covered
- **25+** Years Experience
- **100%** DIY-Friendly Support

**Services Overview Grid:**
Six service cards in 2x3 or 3x2 grid:

1. **Solar System Design**
   - Icon: Blueprint or design icon
   - Brief: "Custom system sizing, panel placement, production estimates, and ROI analysis"
   - Link: "Learn More" → /services#design

2. **Permitting Plansets**
   - Icon: Document or stamp
   - Brief: "Professional engineering stamps, electrical diagrams, and AHJ-specific documentation"
   - Link: "Learn More" → /services#permitting

3. **Equipment Sourcing**
   - Icon: Shopping cart or package
   - Brief: "Tier-1 solar panels, inverters, batteries, and mounting systems at 15-30% savings"
   - Link: "Learn More" → /services#equipment

4. **Technical Consulting**
   - Icon: Headset or consultation
   - Brief: "Installation guidance, troubleshooting, and code compliance verification"
   - Link: "Learn More" → /services#consulting

5. **System Sizing Calculator**
   - Icon: Calculator
   - Brief: "Free interactive tool to estimate your system size, costs, and savings"
   - Link: "Try Calculator" → /calculator

6. **Battery Storage Design**
   - Icon: Battery
   - Brief: "Tesla Powerwall, Enphase, LG, and Generac battery system design and integration"
   - Link: "Learn More" → /services#battery

**Process Summary Section:**
Title: "How It Works"
Subtitle: "Professional solar design made simple"

Four-step process (horizontal timeline or vertical steps):

**Step 1: Consultation**
- Icon: Chat or handshake
- Description: "We assess your energy needs, site conditions, and goals"
- Timeline: "30-60 minutes"

**Step 2: Design**
- Icon: Pencil/ruler or blueprint
- Description: "Our engineers create a custom solar system tailored to your property"
- Timeline: "5-7 business days"

**Step 3: Permitting**
- Icon: Document with checkmark
- Description: "We prepare all necessary documentation for permit approval"
- Timeline: "Included in design"

**Step 4: Support**
- Icon: Toolbox or support
- Description: "We provide guidance throughout your DIY installation"
- Timeline: "Ongoing"

**Social Proof Section:**
Title: "Trusted by DIY Homeowners Nationwide"

Testimonials (3 cards):
1. "The design was incredibly detailed and the permit was approved on first submission. Saved me $18,000 doing the install myself!" - **John M., Texas** (8kW residential system)

2. "I'm technically capable but needed the engineering expertise. DIY Solar Consultants provided exactly that - professional design without the installation markup." - **Sarah L., Colorado** (12kW with battery)

3. "Their equipment sourcing saved me another 20% on top of the DIY savings. The whole process was smooth and professional." - **Mike R., Florida** (6kW residential)

**Call-to-Action Section:**
- Background: Accent color or subtle gradient
- Headline: "Ready to Start Your Solar Project?"
- Subheading: "Get a professional solar design and start saving on your energy bills"
- Two CTA buttons:
  - Primary: "Request Design Quote"
  - Secondary: "Contact Us"
- Trust signal: "Free consultation | No obligation | 5-7 day turnaround"

**FAQ Snippet Section (Optional):**
Title: "Common Questions"
3-4 most frequently asked questions with short answers:
- "How much can I really save going DIY?" → "40-60% on average, $12,000-$18,000 for typical residential systems"
- "Do you provide engineering stamps?" → "Yes, licensed PEs in all 50 states"
- "What if my permit gets rejected?" → "98% approval rate, free revisions if needed"
- Link to full FAQ page

## Technical Requirements
- React/Next.js 14 with App Router or Pages Router
- Tailwind CSS for styling
- Mobile-first responsive design (mobile, tablet, desktop breakpoints)
- SEO optimized:
  - Meta title: "DIY Solar Design & Permitting Services | DIY Solar Consultants"
  - Meta description: "Professional solar system design, permitting, and equipment sourcing for DIY homeowners. Save 40-60% with expert guidance. Licensed PE | NABCEP Certified | 98% approval rate."
  - Semantic HTML (proper heading hierarchy)
  - Schema markup for LocalBusiness
- Performance optimized:
  - Lazy load images
  - Optimize image sizes
  - Fast page load (< 3 seconds)
- Accessibility:
  - ARIA labels where appropriate
  - Keyboard navigation
  - Color contrast compliance
  - Alt text for all images

## SEO Keywords to Include Naturally
- DIY solar design
- Solar permit package
- Professional solar design
- DIY solar installation
- Solar system design services
- Solar permitting help
- Solar engineering services
- DIY solar cost savings

## Tone & Voice
Professional yet approachable. Technical expertise without jargon. Confident and knowledgeable but not condescending. Helpful, educational, clear, and transparent. DIY-friendly and supportive. Focus on empowerment and cost savings.

## Design Guidelines
- Color scheme: Professional blues/greens (solar/energy) with accent colors for CTAs
- Typography: Clean, modern, readable fonts
- Imagery: Solar panels, blueprints, happy homeowners, professional design visuals
- Icons: Consistent icon set (Heroicons, Lucide, or Font Awesome)
- White space: Generous spacing for readability
- Visual hierarchy: Clear distinction between sections

## Deliverables
1. `src/components/Header.jsx` - Reusable header component with navigation
2. `src/components/Footer.jsx` - Reusable footer component with all sections
3. `src/pages/index.jsx` - Complete homepage with all sections
4. Styling (Tailwind classes or CSS modules)
5. Mobile responsive implementation
6. SEO meta tags and schema markup

**Build these files in the diy-solar-consultants directory. Make them production-ready, fully responsive, conversion-optimized, and SEO-friendly.**
