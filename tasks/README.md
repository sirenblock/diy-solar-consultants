# DIY Solar Consultants - Task Files

This directory contains 12 comprehensive task prompt files for building the DIYSolarConsultants.com website.

## Task Overview

Each task file is a detailed prompt for building a specific part of the website. They include:
- Mission statement and company context
- Detailed content requirements
- Technical requirements (React/Next.js components)
- SEO keywords and meta tags
- Tone guidelines
- Deliverables list

## Task Files

### TASK_01.md - Homepage + Header/Footer Components
**Size:** 8.8KB  
**Includes:**
- Hero section with value propositions
- Services overview grid
- Process summary
- Stats section with key metrics
- Header component (navigation)
- Footer component (company info, links, newsletter)

### TASK_02.md - About Page
**Size:** 10KB  
**Includes:**
- Team credentials (Licensed PE, NABCEP certified)
- 25+ years combined experience
- Why choose us (tabs: Expert Knowledge, Streamlined Process, Cost Effective)
- Testimonials from real clients
- Trust signals and certifications
- All 50 states coverage

### TASK_03.md - Services Page
**Size:** 12KB  
**Includes:**
- Solar System Design details
- Permitting Plansets details
- Equipment Sourcing details
- Technical Consulting
- Service comparison table
- Turnaround times
- What's included in each service

### TASK_04.md - Equipment Page
**Size:** 17KB  
**Includes:**
- Tier-1 Solar Panels (REC, Q.PEAK, Jinko, Canadian Solar, Longi)
- Inverters (String: SolarEdge, SMA, Fronius / Micro: Enphase IQ8, APsystems)
- Battery Storage (Tesla Powerwall 3, Enphase IQ, LG RESU, Generac PWRcell)
- Mounting Systems (IronRidge, Unirac, Quick Mount, S-5!)
- Detailed equipment comparison tables
- Specs, warranties, and pricing guidance

### TASK_05.md - Solar Calculator Page
**Size:** 13KB  
**Includes:**
- Interactive system sizing tool
- Inputs: Monthly electric bill, location, roof space, goals
- Outputs: System size, cost estimates, savings projections, ROI
- Visual charts and graphs
- Email capture for detailed report
- Lead generation functionality

### TASK_06.md - Contact Page + Simple Contact Form
**Size:** 11KB  
**Includes:**
- Contact form (Name, Email, Phone, Project Type, Message)
- Contact information (email, phone hours)
- Response time expectations ("We respond within 24 hours")
- What happens next section
- Trust signals
- Quick links to resources

### TASK_07.md - Solar Design Request Multi-Step Form
**Size:** 20KB  
**Includes:**
- **Step 1: System Details** (size, panels, inverter, battery preferences)
- **Step 2: Roof & Mounting** (roof type, pitch, orientation, shading, mounting)
- **Step 3: Contact Info** (name, email, phone, address, timeline)
- Progress indicator
- Form validation
- Save and continue functionality
- File upload for photos/documents

### TASK_08.md - FAQ Page
**Size:** 33KB (most comprehensive)  
**Includes:**
- 28 detailed Q&A covering:
  - General Solar Questions (5 questions)
  - Our Services (5 questions)
  - Design Process (3 questions)
  - Permitting & Codes (3 questions)
  - Equipment & Costs (4 questions)
  - DIY Installation (3 questions)
  - Battery Storage (2 questions)
  - Support & Guarantees (3 questions)
- Accordion UI for easy navigation
- Search functionality
- Category filtering

### TASK_09.md - Process/How It Works Page
**Size:** 23KB  
**Includes:**
- 4-step detailed process with visuals:
  - **Step 1: Consultation** (assess needs, site conditions)
  - **Step 2: Design** (create custom design in 5-7 days)
  - **Step 3: Permitting** (prepare documentation, 98% approval)
  - **Step 4: Support** (installation guidance throughout)
- Timeline expectations
- What to expect at each stage
- Success stories and case studies
- Common concerns addressed

### TASK_10.md - Portfolio/Case Studies Page
**Size:** 18KB  
**Includes:**
- 6 detailed case studies:
  - Small residential (6kW)
  - Medium residential (8.5kW)
  - Large residential with battery (12kW + Powerwall)
  - Premium system (15kW + dual Powerwall)
  - Small commercial (35kW)
  - Off-grid cabin
- Before/after details
- Client testimonials
- Cost breakdowns and savings
- Results achieved

### TASK_11.md - Resources/Guides Page
**Size:** 21KB  
**Includes:**
- DIY solar installation guides
- Permitting checklists by state (all 50 states)
- Equipment selection guides
- Interactive calculators and tools
- State-specific information
- Video tutorial placeholders
- 15-20 blog articles
- Downloadable PDFs and templates

### TASK_12.md - Pricing/Packages Page
**Size:** 18KB  
**Includes:**
- 3 main service packages:
  - Design Only ($595)
  - Design + Permitting ($995) - Most Popular
  - Full Service Package ($1,495)
- Service package comparison table
- Add-on services (10+ options)
- Payment options and terms
- Money-back guarantee
- Pricing FAQs
- Savings calculator

## Total Content

- **Total Files:** 12 task files
- **Total Size:** ~190KB of detailed specifications
- **Total Pages:** Equivalent to 12 complete website pages
- **Components:** 30+ React components specified
- **Forms:** 2 comprehensive forms (contact + multi-step design request)
- **Calculators:** 7+ interactive calculators
- **Guides:** 15+ educational guides
- **Blog Articles:** 15-20 articles specified

## Key Features Across All Tasks

### Company Messaging (Consistent)
- **Value Proposition:** 40-60% savings, professional expertise without installation markup
- **Trust Signals:** Licensed PE, NABCEP certified, 5,000+ systems, 98% approval rate
- **Coverage:** All 50 states
- **Experience:** 25+ years combined

### Technical Requirements (All Pages)
- React/Next.js 14
- Tailwind CSS
- Mobile-first responsive design
- SEO optimized (meta tags, schema markup)
- Accessibility compliant (WCAG 2.1 AA)
- Fast performance (< 3s load time)

### SEO Focus
- Primary keywords: DIY solar design, solar permit package, professional solar design
- Long-tail keywords targeting specific needs
- Schema markup for all page types
- Semantic HTML structure

### Conversion Elements
- Multiple CTAs throughout each page
- Lead capture forms
- Email opt-ins
- Trust signals prominently displayed
- Clear pricing and value proposition

## Usage Instructions

1. **Choose a task** based on priority or parallel execution
2. **Read the entire task file** to understand scope
3. **Build according to specifications** in the diy-solar-consultants directory
4. **Follow technical requirements** (React, Tailwind, SEO, accessibility)
5. **Maintain consistent branding** across all pages
6. **Use the tone guidelines** for content writing

## Dependencies

Some tasks have dependencies:
- **Header/Footer (TASK_01)** should be built first (used by all pages)
- **Contact Form (TASK_06)** components can be reused in other pages
- **Calculator (TASK_05)** is referenced from multiple pages
- **Equipment data (TASK_04)** is referenced in design forms and guides

## Execution Strategy

### Sequential Approach:
1. TASK_01 (Homepage + Header/Footer)
2. TASK_02 (About)
3. TASK_12 (Pricing)
4. TASK_03 (Services)
5. TASK_06 (Contact)
6. TASK_07 (Design Request Form) - Primary conversion
7. TASK_05 (Calculator) - Lead generation
8. TASK_04 (Equipment)
9. TASK_08 (FAQ)
10. TASK_09 (Process)
11. TASK_10 (Portfolio)
12. TASK_11 (Resources)

### Parallel Approach (Recommended):
- **Team 1:** Core pages (01, 02, 03, 12)
- **Team 2:** Forms & Tools (05, 06, 07)
- **Team 3:** Content pages (08, 09, 10, 11)
- **Team 4:** Equipment & technical (04)

## Notes

- All prices mentioned are placeholders (indicated with $XXX or specific amounts)
- Testimonials are realistic examples but should be replaced with actual client testimonials
- Image placeholders should be replaced with professional photography
- Video tutorial sections are marked as placeholders for future content
- State-specific permitting guides can start with top 10 states and expand

## Contact

For questions about these tasks, refer to PROJECT.md or contact the project lead.
