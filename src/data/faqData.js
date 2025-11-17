// FAQ Data Structure for DIY Solar Consultants

export const faqCategories = [
  {
    id: 'general',
    name: 'General Solar Questions',
    slug: 'general-solar-questions',
  },
  {
    id: 'services',
    name: 'Our Services',
    slug: 'our-services',
  },
  {
    id: 'design',
    name: 'Design Process',
    slug: 'design-process',
  },
  {
    id: 'permitting',
    name: 'Permitting & Codes',
    slug: 'permitting-codes',
  },
  {
    id: 'equipment',
    name: 'Equipment & Costs',
    slug: 'equipment-costs',
  },
  {
    id: 'installation',
    name: 'DIY Installation',
    slug: 'diy-installation',
  },
  {
    id: 'battery',
    name: 'Battery Storage',
    slug: 'battery-storage',
  },
  {
    id: 'support',
    name: 'Support & Guarantees',
    slug: 'support-guarantees',
  },
];

export const faqData = [
  // CATEGORY 1: General Solar Questions
  {
    id: 'q1',
    category: 'general',
    question: 'How much can I really save by going DIY?',
    answer: `Most homeowners save 40-60% compared to professional installation, typically $12,000-$18,000 on an average residential system. Here's the breakdown:

**Professional Installation:** $2.50-$3.50 per watt ($20,000-$28,000 for 8kW)

**DIY with Our Services:** $1.30-$2.20 per watt ($10,400-$17,600 for 8kW)

**Savings:** $9,600-$10,400+ (40-60%)

The savings come from eliminating installation labor markup (typically $1.00-$1.50/watt) while still getting professional design and engineering.

**Additional benefit:** Better ROI. Professional systems typically pay back in 8-10 years, while DIY systems pay back in 4-6 years.`,
  },
  {
    id: 'q2',
    category: 'general',
    question: 'Is DIY solar really a good idea? Can I do it myself?',
    answer: `If you're reasonably handy and comfortable with electrical work (or willing to hire an electrician for final connections), yes! Most DIY solar installers successfully complete their projects by:

**What makes it feasible:**
- Modern plug-and-play equipment (especially microinverters)
- Comprehensive installation guides from manufacturers
- Our detailed design documents and support
- YouTube tutorials and DIY solar communities
- Licensed electrician for final electrical work (recommended)

**Skills needed:**
- Comfortable working on roof (or hire roofer for mounting)
- Basic carpentry/construction
- Ability to follow detailed instructions
- Basic electrical knowledge (or hire electrician)

**What we provide:**
- Professional system design
- Detailed installation drawings
- Equipment selection and specifications
- Technical support during installation
- Code-compliant engineering

**Important:** You don't have to do everything yourself. Many DIY'ers hire contractors for specific tasks (roof mounting, electrical connections) while doing the rest themselves - still saving 30-40%.`,
  },
  {
    id: 'q3',
    category: 'general',
    question: 'How long does a DIY solar installation typically take?',
    answer: `**Timeline breakdown:**

- **Design phase (us):** 5-7 business days
- **Permitting:** 2-6 weeks (varies by jurisdiction)
- **Equipment ordering:** 1-3 weeks
- **Installation (you):** 1-5 days for typical residential system
- **Inspection & interconnection:** 1-3 weeks

**Total: 6-12 weeks from design request to system activation**

The actual installation work is typically 2-4 days for a residential system (spread over weekends). Commercial or complex systems may take longer.`,
  },
  {
    id: 'q4',
    category: 'general',
    question: 'What\'s the difference between your service and just doing it completely myself?',
    answer: `Great question! Here's the comparison:

**Complete DIY (No Professional Help):**
- ✗ Risk of improper sizing (undersized or oversized)
- ✗ 60-70% permit rejection rate
- ✗ Potential code violations
- ✗ Safety issues from incorrect electrical design
- ✗ Suboptimal equipment selection
- ✗ No liability protection
- ✗ May void equipment warranties
- ✗ Utility may refuse interconnection
- ✓ Lowest upfront cost

**DIY with Our Services:**
- ✓ Professional engineering ensures optimal sizing
- ✓ 98% first-time permit approval
- ✓ Code-compliant design
- ✓ Safe, properly sized electrical system
- ✓ Expert equipment recommendations
- ✓ PE-stamped drawings (liability protection)
- ✓ Manufacturer warranties protected
- ✓ Utility interconnection approved
- ✓ Still 40-60% cheaper than professional installation

**Bottom line:** You get professional quality at DIY prices. Worth the investment for peace of mind and proper system performance.`,
  },
  {
    id: 'q5',
    category: 'general',
    question: 'Will solar work in my state/climate?',
    answer: `Yes! Solar works in all 50 states - even Alaska. Here's why:

- Solar panels produce electricity from light, not heat
- Germany (cloudier than most US states) is a global solar leader
- Cold climates can actually boost panel efficiency
- Snow reflects light, increasing production

**We've designed systems in:**
- Sunny states: California, Arizona, Texas, Florida
- Cloudy states: Washington, Oregon, Pennsylvania
- Cold states: Alaska, Montana, Minnesota, Maine
- Everything in between

**What matters more than climate:**
1. Electricity rates (higher rates = better ROI)
2. Available incentives
3. Roof orientation and shading
4. Available roof space`,
  },

  // CATEGORY 2: Our Services
  {
    id: 'q6',
    category: 'services',
    question: 'What exactly do you provide?',
    answer: `We offer four core services, available individually or as packages:

**1. Solar System Design**
- Custom system sizing based on energy usage
- Optimal panel placement and layout
- Production estimates and ROI analysis
- Equipment selection and specifications
- String sizing and electrical calculations
- Complete design drawings

**2. Permitting Plansets**
- PE-stamped engineering drawings
- Code-compliant electrical diagrams
- Structural calculations (when required)
- AHJ-specific documentation
- Ready to submit to building department

**3. Equipment Sourcing**
- Competitive pricing on tier-1 equipment
- 15-30% savings vs. retail
- Complete bill of materials
- Verified compatibility
- Manufacturer warranty protection

**4. Technical Consulting**
- Installation guidance
- Troubleshooting support
- Code compliance questions
- System optimization
- Performance analysis`,
  },
  {
    id: 'q7',
    category: 'services',
    question: 'How long does the design process take?',
    answer: `Standard turnaround: **5-7 business days**

**Timeline:**
- Day 0: You submit design request form
- Day 1: We review and request any additional info
- Days 2-6: Engineers create your custom design
- Day 7: You receive complete design package

**Expedited service available:** 2-3 business days (additional fee)

**Complex projects:** May take 7-10 days
- Commercial systems
- Challenging roof conditions
- Unusual utility requirements
- Multiple buildings/arrays

**What you receive:**
- Complete design drawings (PDF)
- Equipment specifications and datasheets
- Production and financial analysis
- Installation guidelines
- Permit-ready planset (if included)`,
  },
  {
    id: 'q8',
    category: 'services',
    question: 'Do you provide engineering stamps/PE seals?',
    answer: `**Yes!** We have licensed Professional Engineers (PE) in all 50 states.

**When PE stamps are required:**
- Many jurisdictions for systems over 10kW
- Some jurisdictions for all solar systems
- Commercial installations
- Structural modifications
- Buildings with specific occupancy types

**When PE stamps typically aren't required:**
- Simple residential systems in many areas
- Systems under 10kW in some jurisdictions
- Specific AHJ policies vary

**We provide:**
- PE-stamped engineering drawings where required
- Structural calculations when needed
- Professional liability coverage
- Code compliance verification

**Important:** Even if not legally required, PE-stamped drawings:
- Speed up permit approval
- Provide liability protection
- Satisfy picky inspectors
- May be required for rebates/incentives
- Protect equipment warranties`,
  },
  {
    id: 'q9',
    category: 'services',
    question: 'What if my permit gets rejected?',
    answer: `Our **98% first-time approval rate** means this rarely happens, but if it does:

**We provide FREE revisions** until your permit is approved.

**Our guarantee:**
- We address all AHJ comments at no charge
- Revise drawings as needed
- Coordinate with building department
- Support you through resubmission

**Why our approval rate is so high:**
- Licensed PEs familiar with local codes
- AHJ-specific documentation
- Conservative engineering
- Complete, professional drawings
- Experience with 5,000+ systems nationwide

**Common rejection reasons (and how we prevent them):**
- ✓ Missing information → We include everything upfront
- ✓ Code violations → PE ensures compliance
- ✓ Incomplete calculations → We provide full engineering
- ✓ Wrong forms → We know local requirements

**Bottom line:** If it gets rejected, we fix it. You're covered.`,
  },
  {
    id: 'q10',
    category: 'services',
    question: 'Can you help with equipment sourcing? How much can I save?',
    answer: `Yes! We can source all equipment for your system.

**Savings:** 15-30% below retail pricing

**How it works:**
1. We design your system with specific equipment
2. We get quotes from distributors (tier-1 manufacturers)
3. You approve pricing
4. We coordinate ordering and shipping
5. Equipment ships directly to you

**What we source:**
- Solar panels
- Inverters (string, micro, optimizers)
- Mounting/racking systems
- Battery storage
- Balance of system (BOS): wire, conduit, disconnects, breakers

**Example savings (8kW system):**
- Panels: Save $800-$1,200
- Inverter: Save $300-$600
- Mounting: Save $200-$400
- BOS: Save $200-$300
- **Total savings: $1,500-$2,500**

**Benefits:**
- Tier-1 equipment (not questionable online sellers)
- Verified compatibility
- Manufacturer warranties protected
- Professional-grade components
- Current pricing (we track market rates)`,
  },

  // CATEGORY 3: Design Process
  {
    id: 'q11',
    category: 'design',
    question: 'What information do you need to create my design?',
    answer: `**Essential information:**
- Recent electric bills (12 months ideal, 3 months minimum)
- Property address
- Roof type, age, and approximate pitch
- Available roof space and orientation
- Shading conditions
- Main electrical panel size (amp rating)

**Very helpful (but not required):**
- Roof photos from multiple angles
- Electrical panel photo
- Property survey or site plan
- Specific equipment preferences

**We can determine from satellite/tools:**
- Exact roof dimensions
- Roof pitch (if you're unsure)
- Basic shading analysis
- Roof orientation

**You provide this via:**
- Design request form (detailed questionnaire)
- Photo uploads
- Follow-up email if needed`,
  },
  {
    id: 'q12',
    category: 'design',
    question: 'Can you design systems with battery backup?',
    answer: `Absolutely! We design all types of battery storage systems:

**Battery systems we design:**
- Tesla Powerwall 3
- Enphase IQ Battery 5P
- LG Energy Solution RESU
- Generac PWRcell
- SolarEdge Energy Hub
- And others

**What we provide:**
- Battery sizing for your backup needs
- Integration with solar system
- Backup load calculations
- Electrical design for battery
- Critical loads panel (if needed)
- Rapid shutdown compliance

**Design considerations:**
- Essential loads vs. whole-home backup
- AC-coupled vs. DC-coupled
- Battery capacity sizing
- Inverter compatibility
- Cost-benefit analysis

**Typical costs:**
- Essential loads (10-13 kWh): $8,000-$12,000
- Partial home (13-20 kWh): $12,000-$18,000
- Whole home (20+ kWh): $18,000-$30,000+`,
  },
  {
    id: 'q13',
    category: 'design',
    question: 'Do you design commercial systems?',
    answer: `Yes! We design commercial solar systems of all sizes.

**Commercial capabilities:**
- Small commercial (20-50kW): Professional offices, small retail
- Medium commercial (50-250kW): Warehouses, larger retail, multi-tenant
- Large commercial (250kW+): Industrial, manufacturing, large facilities

**Commercial design includes:**
- Three-phase electrical design
- Commercial inverter selection
- Ground-mount options (if applicable)
- Structural engineering for flat/low-slope roofs
- Complex shading analysis
- Demand charge analysis
- Utility interconnection (including utility-scale requirements)

**Additional commercial considerations:**
- Tax incentives (ITC, depreciation, bonus depreciation)
- Power purchase agreements (PPA) modeling
- Multiple meter configurations
- Transformer upgrades
- Switchgear modifications

**Pricing:** Custom quotes based on complexity`,
  },

  // CATEGORY 4: Permitting & Codes
  {
    id: 'q14',
    category: 'permitting',
    question: 'How does the permitting process work?',
    answer: `Here's the typical flow:

**Step 1: Design & Documentation (5-7 days)**
- We create permit-ready planset
- Include all required forms and calculations
- PE stamp (where required)

**Step 2: Permit Submission (you or us)**
- Submit to local building department
- Pay permit fees (varies: $50-$500)
- Provide property owner authorization

**Step 3: Plan Review (1-4 weeks)**
- Building department reviews
- May request clarifications or changes
- We handle any revisions needed

**Step 4: Permit Approval**
- Receive approved permit and placards
- Can begin installation

**Step 5: Installation (1-5 days)**
- You install system per approved plans
- Document installation with photos

**Step 6: Inspection (1-2 weeks)**
- Schedule inspection with building dept
- Inspector verifies compliance
- May require corrections

**Step 7: Utility Interconnection (1-4 weeks)**
- Submit interconnection application to utility
- Utility installs net meter (if needed)
- Permission to operate (PTO) granted
- System goes live!

**Total time:** 4-10 weeks from permit submission to PTO`,
  },
  {
    id: 'q15',
    category: 'permitting',
    question: 'What codes and standards do solar systems need to meet?',
    answer: `Solar installations must comply with several codes:

**National Electrical Code (NEC):**
- Article 690: Solar Photovoltaic Systems
- Article 705: Interconnected Electric Power Production Sources
- Rapid shutdown requirements (690.12)
- Grounding and bonding
- Overcurrent protection
- Disconnects and labeling

**International Building Code (IBC) / International Residential Code (IRC):**
- Structural loads (wind, snow, seismic)
- Roof penetrations and flashing
- Fire setbacks (access pathways)
- Attachment methods

**Local Codes:**
- City/county amendments to NEC/IBC
- Fire department access requirements
- Historic district restrictions
- HOA requirements (where applicable)

**Utility Requirements:**
- Interconnection standards (IEEE 1547)
- Anti-islanding protection
- Metering requirements
- Disconnect location

**We ensure compliance with:**
- All applicable codes in your jurisdiction
- Latest NEC (currently 2023, some areas on 2020 or 2017)
- Local amendments and requirements
- Utility interconnection standards

**You don't need to know these codes** - that's what we're for!`,
  },
  {
    id: 'q16',
    category: 'permitting',
    question: 'Do I need to pull the permit myself?',
    answer: `Depends on your jurisdiction:

**Property owner can pull permit:**
- Most jurisdictions allow property owners to pull permits for their own property
- This is the most common approach for DIY solar

**Contractor license required:**
- Some jurisdictions require licensed contractor
- California, Arizona, and a few others have restrictions
- Commercial projects often require contractor

**We advise you on:**
- Your jurisdiction's specific requirements
- Whether you can pull permit as homeowner
- If contractor license needed
- Permit application process

**If contractor required:**
- We can connect you with licensed contractors who will pull permit for a fee
- Many will pull permit without doing installation ($200-$500)
- Some states allow remote permitting agents

**Permit submission typically requires:**
- Completed application
- Our engineered planset
- Site plan
- Equipment specifications
- Permit fee payment
- Proof of homeownership`,
  },

  // CATEGORY 5: Equipment & Costs
  {
    id: 'q17',
    category: 'equipment',
    question: 'What equipment brands do you recommend?',
    answer: `We only recommend tier-1 manufacturers with proven track records:

**Solar Panels:**
- REC Solar (Alpha Pure-R) - Premium
- Q CELLS (Q.PEAK DUO) - Mid-premium
- Jinko Solar (Tiger Neo) - Value
- Canadian Solar (HiKu7) - Reliable value
- Longi Solar (Hi-MO 6) - Value

**Inverters - String:**
- SolarEdge HD-Wave
- SMA Sunny Boy
- Fronius Primo/Symo

**Inverters - Micro:**
- Enphase IQ8 Series
- APsystems DS3

**Batteries:**
- Tesla Powerwall 3
- Enphase IQ Battery 5P
- LG Energy Solution RESU
- Generac PWRcell

**Mounting:**
- IronRidge
- Unirac
- Quick Mount PV
- S-5! (metal roofs)

**Why these brands?**
- Strong financial stability
- Comprehensive warranties (25 years panels, 10-25 years inverters)
- Proven reliability
- Available support and service
- Local service centers
- High quality control`,
  },
  {
    id: 'q18',
    category: 'equipment',
    question: 'How much does a typical DIY solar system cost?',
    answer: `Costs vary by system size, equipment, and location, but here are typical ranges:

**Small System (5kW):**
- Equipment: $5,000-$7,500
- Design + Permit: $800-$1,200
- **Total: $5,800-$8,700**
- After tax credit (30%): **$4,060-$6,090**

**Medium System (8kW):**
- Equipment: $8,000-$12,000
- Design + Permit: $800-$1,400
- **Total: $8,800-$13,400**
- After tax credit (30%): **$6,160-$9,380**

**Large System (12kW):**
- Equipment: $12,000-$18,000
- Design + Permit: $1,000-$1,600
- **Total: $13,000-$19,600**
- After tax credit (30%): **$9,100-$13,720**

**Add Battery Storage:**
- Essential backup (10-13 kWh): +$8,000-$12,000
- Whole home (20+ kWh): +$15,000-$25,000

**Compare to Professional Installation:**
- 5kW: $12,500-$17,500 (save $6,660-$8,910)
- 8kW: $20,000-$28,000 (save $10,620-$14,620)
- 12kW: $30,000-$42,000 (save $16,280-$22,880)`,
  },
  {
    id: 'q19',
    category: 'equipment',
    question: 'Are there financing options for DIY solar?',
    answer: `Yes! Several financing options exist:

**1. Cash Purchase (Best ROI)**
- Lowest total cost
- Best return on investment
- Immediate savings
- No interest payments

**2. Home Equity Loan/HELOC**
- Low interest rates (6-9%)
- Tax-deductible interest (consult tax advisor)
- Access to 30% federal tax credit
- Flexible terms

**3. Personal Loan**
- No collateral required
- Quick approval
- Higher rates (8-15%)
- 5-15 year terms

**4. Cash-Out Refinance**
- Lowest rates if refinancing anyway
- Long terms (15-30 years)
- Requires home equity

**5. Credit Union Green Energy Loans**
- Some credit unions offer solar-specific loans
- Competitive rates
- Usually require membership

**We don't offer financing directly**, but we provide:
- Detailed cost estimates for loan applications
- ROI calculations
- Energy savings projections
- Documentation for lenders

**Federal Tax Credit:**
- 30% of total system cost (through 2032)
- Includes equipment, design, permits
- One-time credit on next tax filing
- Can be carried forward if exceeds tax liability

**State/Local Incentives:**
- Varies by location
- Rebates, tax credits, SRECs
- We inform you of available programs`,
  },
  {
    id: 'q20',
    category: 'equipment',
    question: 'How long do solar panels and equipment last?',
    answer: `Solar systems are very long-lived:

**Solar Panels:**
- Expected lifespan: 30-40+ years
- Warranty: 25 years (performance)
- Degradation: ~0.5% per year
- After 25 years: Still producing 87-90%

**Inverters:**
- String inverters: 10-15 years (warranty: 10-12 years, extendable to 25)
- Microinverters: 20-25+ years (warranty: 25 years)
- Usually first component requiring replacement

**Mounting/Racking:**
- 25-30+ years
- Matches roof lifespan
- Corrosion-resistant materials

**Batteries:**
- 10-15 years (varies by chemistry and use)
- Warranty: 10 years typically
- Throughput warranty (MWh cycled)

**Other Components:**
- Wire, conduit: 40+ years
- Disconnects, breakers: 30+ years

**Maintenance:**
- Minimal (rain cleans panels)
- Occasional inspection
- Inverter replacement (once)
- Very low ongoing costs

**Return on Investment:**
- Systems typically pay for themselves in 4-6 years (DIY)
- Continue producing 20-35+ more years
- Lifetime savings: $40,000-$100,000+`,
  },

  // CATEGORY 6: DIY Installation
  {
    id: 'q21',
    category: 'installation',
    question: 'How difficult is the installation really?',
    answer: `Difficulty depends on system size and your skills:

**Easier DIY Projects:**
- Ground-mount systems (no roof work)
- Simple roof (asphalt shingle, low pitch, south-facing)
- Microinverter systems (plug-and-play)
- Small systems (< 8kW, ~20 panels)
- Electrical panel nearby

**More Challenging:**
- Complex roofs (multi-plane, steep, tile)
- Large systems (30+ panels)
- String inverters (DC calculations critical)
- Battery integration
- Service panel upgrades
- Long conduit runs

**Skills assessment:**
- Comfortable on roof? (or hire roofer)
- Basic carpentry/construction? (mounting)
- Electrical knowledge? (or hire electrician)
- Can follow detailed instructions? (critical)
- Physically capable? (panels are 40-50 lbs)

**What you can outsource:**
- Roof mounting (hire roofer): $1,000-$2,500
- Electrical connections (hire electrician): $500-$1,500
- Heavy lifting (hire laborers): $300-$800
- **Still save 30-40% overall**

**Time investment:**
- Planning/prep: 5-10 hours
- Installation: 2-5 days (weekends)
- Inspection prep: 2-4 hours

**Our support:**
- Detailed installation drawings
- Email/phone technical support
- Installation best practices guide
- Troubleshooting assistance

**Community resources:**
- DIY solar forums (Reddit r/solar, Solar Panel Talk)
- YouTube installation videos
- Manufacturer guides
- Local DIY groups`,
  },
  {
    id: 'q22',
    category: 'installation',
    question: 'Do I need to hire an electrician?',
    answer: `Depends on your electrical knowledge and local requirements:

**When electrician is recommended:**
- No electrical experience
- Uncomfortable with electrical work
- Service panel upgrade required
- Unfamiliar with NEC code
- Complex string inverter wiring
- Battery integration

**What electrician typically does:**
- Final AC interconnection (inverter to panel)
- Service panel modifications
- Grounding and bonding
- Meter installation (if allowed)
- Final inspection sign-off

**What you can typically do yourself:**
- Mounting panels
- DC wiring (panels to inverter)
- Conduit installation
- Microinverter wiring (simpler than string)
- Basic connections

**Electrician cost:**
- Simple interconnection: $500-$1,000
- Panel upgrade + interconnection: $1,500-$3,000
- Complex systems: $2,000-$4,000

**Still saves money:**
- Professional install labor: $8,000-$15,000
- Electrician: $500-$3,000
- **Net savings: $5,000-$12,000**

**Local requirements:**
- Some jurisdictions require licensed electrician for final connection
- We advise on your area's specific requirements
- Many allow homeowner electrical work on own property

**Our recommendation:**
- Do the roof work yourself (or hire roofer)
- Have electrician do final electrical (safer, code-compliant)
- Best of both worlds: maximum savings, professional electrical`,
  },
  {
    id: 'q23',
    category: 'installation',
    question: 'What tools do I need for installation?',
    answer: `Most are common tools, some are solar-specific:

**Basic Tools (you probably have):**
- Cordless drill/driver
- Socket set
- Wrenches
- Screwdrivers
- Tape measure
- Chalk line
- Level
- Utility knife
- Wire cutters/strippers
- Multimeter

**Solar-Specific Tools:**
- MC4 crimping tool ($30-$60) - for panel connections
- MC4 disconnect tool ($10-$20) - for unplugging
- Torque wrench ($50-$150) - for proper bolt torque
- Wire fish/pull ($15-$30) - for running wire

**Roof Work Tools:**
- Ladder (tall enough for your roof)
- Roof anchors/harness (safety!)
- Stud finder
- Caulking gun (for flashing)

**Electrical Tools:**
- Wire strippers (14-10 AWG)
- Conduit bender (if using metal conduit)
- Hole saw set (for conduit penetrations)
- Fish tape (for pulling wire)

**Nice to Have:**
- Laser level (alignment)
- Impact driver (faster installation)
- Oscillating multi-tool (cutting)

**Safety Equipment (Essential):**
- Fall protection harness
- Roof anchors
- Safety glasses
- Work gloves
- Hard hat

**Total tool cost if buying everything:** $500-$1,500
- Many you already own
- Can rent expensive items (lift, torque wrench)
- Borrow from friends
- One-time investment

**We provide:**
- Tool list specific to your system
- Torque specifications
- Installation best practices`,
  },

  // CATEGORY 7: Battery Storage
  {
    id: 'q24',
    category: 'battery',
    question: 'Should I add battery storage?',
    answer: `Depends on your goals and situation:

**Good reasons to add batteries:**
- ✓ Frequent power outages
- ✓ Essential backup needed (medical equipment, refrigeration)
- ✓ Hurricane/storm-prone area
- ✓ Grid unreliable
- ✓ Time-of-use (TOU) rates with expensive peak hours
- ✓ Want energy independence
- ✓ Future grid resilience concerns

**Reasons to skip batteries (for now):**
- ✗ Reliable grid
- ✗ Net metering available (grid = free battery)
- ✗ Budget constrained
- ✗ Flat/tiered rates (no TOU pricing)
- ✗ No critical backup needs

**Financial consideration:**
- Batteries add $10,000-$20,000
- ROI depends on utility rates and outage frequency
- Backup value vs. financial payback

**Our recommendation:**
- Design system "battery-ready"
- Add batteries now or later
- Many inverters support battery addition
- Future battery costs expected to decrease

**We design both:**
- Grid-tied only (no battery)
- Grid-tied with battery backup
- Show cost comparison`,
  },
  {
    id: 'q25',
    category: 'battery',
    question: 'How much battery capacity do I need?',
    answer: `Depends on what you want to power and for how long:

**Essential Loads Only (8-12 hours):**
- Refrigerator: 150W average
- Internet/router: 50W
- LED lights: 100W
- Phone charging: 50W
- **Total: ~350W × 10 hours = 3.5 kWh**
- **Battery needed: 5-7 kWh** (accounting for efficiency)
- Cost: $6,000-$10,000

**Partial Home Backup (12-24 hours):**
- Essential loads: 350W
- TV: 150W
- Microwave (occasional): 200W average
- Well pump: 500W intermittent
- Garage door: 50W intermittent
- **Total: ~800W × 16 hours = 12.8 kWh**
- **Battery needed: 15-18 kWh**
- Cost: $12,000-$16,000

**Whole Home Backup (24+ hours):**
- All circuits except heavy loads
- HVAC (mini-split or small AC): 1,500W
- All above loads: 1,200W
- **Total: ~2,700W × 12 hours = 32 kWh**
- **Battery needed: 35-40 kWh** (multiple batteries)
- Cost: $25,000-$35,000

**Battery Systems:**
- Tesla Powerwall 3: 13.5 kWh
- Enphase IQ 5P: 5 kWh (stack multiple)
- LG RESU: 9.8-16 kWh
- Multiple units can be combined

**Solar recharging:**
- With solar, battery recharges during day
- Extends backup duration significantly
- 8kW system can recharge 13.5 kWh in 3-4 sun-hours

**We help you:**
- Calculate backup loads
- Size appropriate battery
- Balance cost vs. backup needs
- Design critical loads panel (if partial backup)`,
  },

  // CATEGORY 8: Support & Guarantees
  {
    id: 'q26',
    category: 'support',
    question: 'What kind of support do you provide during installation?',
    answer: `Comprehensive support throughout your project:

**Design Phase:**
- Email support for questions
- Phone consultations
- Design revisions if needed
- Equipment recommendations

**Permitting Phase:**
- Permit package revisions (if rejected)
- AHJ coordination support
- Code questions answered

**Installation Phase:**
- Email technical support (24-48 hour response)
- Phone support for complex issues
- Installation best practices
- Troubleshooting guidance
- String sizing verification
- Wiring questions

**Commissioning:**
- System startup guidance
- Inverter programming help
- Monitoring setup
- Performance verification

**Post-Installation:**
- Performance troubleshooting
- Utility interconnection assistance
- Warranty claim support
- System optimization

**Support channels:**
- Email: support@diysolar.com (24-48 hour response)
- Phone: (XXX) XXX-XXXX (scheduled calls)
- Documentation: Detailed guides and resources

**NOT included:**
- On-site installation help
- 24/7 emergency support
- Free design changes after approval
- Issues from not following design

**Available for additional fee:**
- Extended consulting packages
- Hourly phone support
- Video troubleshooting sessions
- Installation review/verification`,
  },
  {
    id: 'q27',
    category: 'support',
    question: 'What if something goes wrong with my system?',
    answer: `Here's how issues are handled:

**Design/Engineering Issues (our responsibility):**
- We fix any design errors at no charge
- Revise documents if needed
- Support until issue resolved

**Equipment Defects:**
- Contact manufacturer (we help)
- Warranty claims supported
- We verify compatibility of replacements

**Installation Errors (your responsibility):**
- We can provide troubleshooting support
- May require consulting fees for extensive help
- Can recommend local electricians

**Permit/Code Issues:**
- Free revisions for AHJ requests
- We support until permit approved
- Address inspector comments

**Performance Issues:**
- Help diagnose cause
- Verify against production estimates
- Identify shading, soiling, or equipment issues

**Safety Concerns:**
- Immediate guidance provided
- May recommend shutting system down
- Professional electrician referral

**Our commitment:**
- Professional designs that work
- Support for issues within our scope
- Help coordinate warranty claims
- Guidance for troubleshooting

**Your responsibility:**
- Follow installation instructions
- Use qualified electrician if needed
- Proper installation per design
- Safety compliance`,
  },
  {
    id: 'q28',
    category: 'support',
    question: 'Do you offer any guarantees?',
    answer: `Yes, several guarantees:

**98% First-Time Permit Approval Guarantee:**
- If permit rejected, we revise for free
- Continue until permit approved
- No additional charges for revisions

**Design Accuracy:**
- Production estimates within ±10% (assuming proper installation)
- System sizing appropriate for energy needs
- Equipment compatibility verified

**Code Compliance:**
- Designs meet all applicable codes
- NEC, IBC/IRC, local amendments
- PE-stamped where required

**Response Time:**
- Design completion: 5-7 business days (standard)
- Email support: 24-48 hours
- Permit revisions: 2-3 business days

**Professional Engineering:**
- Licensed PEs stamp all designs
- Liability coverage
- Professional standards

**What we don't guarantee:**
- Production (dependent on weather, maintenance, proper installation)
- Equipment performance (covered by manufacturer warranties)
- Permit timeline (AHJ-dependent)
- Installation quality (your responsibility)
- Utility approval speed

**If you're not satisfied:**
- We work to resolve concerns
- Additional design iterations if reasonable
- Professional, responsive communication`,
  },
];
