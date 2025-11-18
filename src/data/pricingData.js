export const packages = [
  {
    id: 'design-only',
    name: 'Basic Design',
    price: 1499,
    originalPrice: 1999,
    savings: 500,
    paymentPlan: 'Or 3 payments of $533',
    badge: 'Simple Projects',
    featured: false,
    subtitle: 'Perfect for simple roofs',
    timeline: '5-7 business days',
    includes: [
      'Complete system design and engineering',
      'Custom panel layout optimized for your roof',
      'Equipment selection and specifications',
      'String sizing and electrical calculations',
      'Production estimates (monthly/annual kWh)',
      'ROI and financial analysis',
      'Complete bill of materials (BOM)',
      'Installation guidelines',
      'Single-line electrical diagram',
      'Digital files (PDF)',
      'One design revision included',
      'Email support during design phase'
    ],
    excludes: [
      'PE-stamped permit documents',
      'Permit planset preparation',
      'Equipment sourcing',
      'Installation support',
      'Structural calculations'
    ],
    bestFor: [
      'Jurisdictions not requiring PE stamp',
      'DIYers confident in permit process',
      'Those who want to source their own equipment',
      'Budget-conscious homeowners',
      'Simple residential systems'
    ]
  },
  {
    id: 'design-permit',
    name: 'Professional Design',
    price: 2299,
    originalPrice: 3499,
    savings: 1200,
    paymentPlan: 'Or 4 payments of $599',
    valueNote: 'Saves you $15K+ vs installers',
    badge: 'MOST POPULAR',
    featured: true,
    subtitle: 'Complete DIY solution',
    savingsBadge: 'Save $1,200',
    timeline: '5-7 business days',
    successRate: '98% first-time permit approval',
    includes: [
      'Everything in Design Only package',
      'PE-stamped engineering drawings',
      'Complete permit planset',
      'Code-compliant electrical diagrams',
      'Three-line electrical diagram',
      'Structural analysis and calculations (when required)',
      'AHJ-specific documentation',
      'Fire setback calculations (where applicable)',
      'Rapid shutdown design (NEC 690.12)',
      'Grounding and bonding details',
      'Equipment cut sheets and certifications',
      'Permit submission guidance',
      'FREE permit revisions (until approved)',
      'Building department coordination support',
      'Email/phone support through permitting'
    ],
    bestFor: [
      'Most residential installations',
      'Jurisdictions requiring PE stamp',
      'Systems over 10kW',
      'Anyone wanting smooth permit approval',
      'Peace of mind and professional liability protection'
    ]
  },
  {
    id: 'full-service',
    name: 'Premium + Support',
    price: 3499,
    originalPrice: 4999,
    savings: 1500,
    paymentPlan: 'Or 6 payments of $599',
    badge: 'White-glove Service',
    featured: false,
    subtitle: 'White-glove service',
    savingsBadge: 'Save $1,500',
    timeline: 'Design + Permit: 5-7 days\nEquipment sourcing: 1-2 weeks\nSupport: Throughout installation',
    includes: [
      'Everything in Design + Permitting package',
      'Equipment sourcing service',
      'Competitive pricing from distributors (15-30% below retail)',
      'Complete bill of materials with pricing',
      'Equipment compatibility verification',
      'Purchase coordination and shipping',
      'Installation technical support',
      'Email support during installation',
      'Phone consultations (up to 3 hours)',
      'Troubleshooting assistance',
      'Wiring verification',
      'Inspection preparation guidance',
      'Utility interconnection support',
      'System commissioning guidance',
      'Warranty registration assistance'
    ],
    bestFor: [
      'First-time DIY solar installers',
      'Those wanting comprehensive support',
      'Maximum savings on equipment',
      'Anyone wanting hands-on guidance',
      'Complex or large systems (>10kW)'
    ],
    typicalSavings: [
      'Equipment: $1,500-$3,000 (vs. retail)',
      'Installation troubleshooting: Priceless',
      'Peace of mind: Included'
    ]
  },
  {
    id: 'consultation',
    name: 'Solar Consultation',
    price: 0,
    priceNote: 'FREE (or $99 credited toward design if purchased)',
    badge: null,
    featured: false,
    subtitle: 'Not sure where to start? Let\'s talk.',
    timeline: '30-60 minute consultation call',
    includes: [
      '30-60 minute consultation call',
      'Solar feasibility assessment',
      'Preliminary system size estimate',
      'Estimated costs and savings',
      'Service recommendations',
      'Answer all your questions',
      'No obligation'
    ],
    bestFor: [
      'Anyone exploring solar',
      'Uncertain if DIY is right for them',
      'Wanting to understand the process',
      'Budget planning'
    ]
  }
];

export const addons = [
  {
    id: 'expedited-design',
    name: 'Expedited Design',
    price: 200,
    description: 'Rush design completion in 2-3 business days (vs. 5-7 days)',
    bestFor: 'Urgent timeline, quick turnaround needed'
  },
  {
    id: 'battery-storage',
    name: 'Battery Storage Design',
    price: 300,
    description: 'Complete battery system integration with sizing, electrical design, and backup loads analysis',
    compatibleWith: 'Tesla Powerwall, Enphase, LG, Generac, others'
  },
  {
    id: 'additional-revisions',
    name: 'Additional Design Revisions',
    price: 150,
    priceNote: '$150 per major revision',
    description: 'Major design changes beyond included revisions',
    note: 'Minor adjustments and permit-required changes always free'
  },
  {
    id: 'structural-report',
    name: 'Structural Engineering Report',
    price: null,
    priceRange: '$400-$600',
    description: 'Detailed structural analysis with load calculations, attachment details, and PE stamp',
    requiredFor: 'Commercial buildings, older structures, specific jurisdictions'
  },
  {
    id: 'extended-support',
    name: 'Extended Installation Support',
    price: 95,
    priceNote: '$95/hour',
    description: 'Additional phone support beyond package with scheduled calls, troubleshooting, and guidance',
    recommendedFor: 'Complex installations, first-time DIYers'
  },
  {
    id: 'site-survey',
    name: 'Site Survey Coordination',
    price: null,
    priceRange: '$300-$500',
    description: 'Arrange professional site survey with roof measurements, shading analysis, and electrical audit',
    usefulFor: 'Complex roof, difficult to measure, accuracy critical'
  },
  {
    id: 'hoa-package',
    name: 'HOA Submission Package',
    price: 250,
    description: 'Professional renderings, specifications, and benefit analysis for HOA approval',
    successRate: 'Very high (solar cannot be prohibited in most states)'
  },
  {
    id: 'utility-interconnection',
    name: 'Utility Interconnection Application',
    price: 150,
    description: 'Complete and submit utility interconnection paperwork',
    usefulFor: 'Complex utility requirements, time-saving'
  },
  {
    id: 'commercial-solar',
    name: 'Commercial Solar Design',
    price: null,
    priceNote: 'Custom pricing',
    description: 'Large commercial systems (20kW+) based on system size, complexity, three-phase requirements, and structural needs',
    contact: 'Contact for quote'
  },
  {
    id: 'installation-verification',
    name: 'Equipment Installation Verification',
    price: 200,
    description: 'Remote review of installation photos before inspection with quality check, code compliance verification, and recommendations',
    benefit: 'Catch issues before inspector'
  }
];

export const comparisonFeatures = [
  { name: 'Price', key: 'price' },
  { name: 'Custom System Design', packages: ['design-only', 'design-permit', 'full-service'] },
  { name: 'Production Estimates', packages: ['design-only', 'design-permit', 'full-service'] },
  { name: 'Equipment Selection', packages: ['design-only', 'design-permit', 'full-service'] },
  { name: 'ROI Analysis', packages: ['design-only', 'design-permit', 'full-service'] },
  { name: 'Installation Guidelines', packages: ['design-only', 'design-permit', 'full-service'] },
  { name: 'Bill of Materials', packages: ['design-only', 'design-permit', 'full-service'] },
  { name: 'Single-Line Diagram', packages: ['design-only', 'design-permit', 'full-service'] },
  { name: 'Three-Line Diagram', packages: ['design-permit', 'full-service'] },
  { name: 'PE-Stamped Drawings', packages: ['design-permit', 'full-service'] },
  { name: 'Permit Planset', packages: ['design-permit', 'full-service'] },
  { name: 'Structural Calculations', packages: ['design-permit', 'full-service'] },
  { name: 'Permit Revisions', packages: ['design-permit', 'full-service'], note: 'unlimited' },
  { name: 'Equipment Sourcing', packages: ['full-service'] },
  { name: 'Competitive Equipment Pricing', packages: ['full-service'], note: '15-30% savings' },
  { name: 'Installation Phone Support', packages: ['full-service'], note: '3 hours' },
  { name: 'Troubleshooting Help', packages: ['full-service'] },
  { name: 'Commissioning Guidance', packages: ['full-service'] },
  { name: 'Warranty Registration', packages: ['full-service'] }
];

export const faqs = [
  {
    question: 'Why do prices vary by system size?',
    answer: 'Larger systems require more engineering time, more complex calculations, and more detailed documentation. Our base packages cover most residential systems up to 15kW. Larger systems may incur additional fees.'
  },
  {
    question: 'What if my project is more complex than expected?',
    answer: 'We\'ll let you know upfront during consultation. Complex projects (unusual roof, challenging site, unique requirements) may require additional engineering time. We always communicate additional costs before starting work.'
  },
  {
    question: 'Do you offer discounts for multiple systems?',
    answer: 'Yes! If you\'re installing solar on multiple properties (or helping friends/family), contact us for volume pricing.'
  },
  {
    question: 'Is the federal tax credit included in these prices?',
    answer: 'No. Our service fees qualify for the 30% federal tax credit, but that\'s a tax benefit you receive when filing taxes. Our prices are pre-tax-credit.'
  },
  {
    question: 'What\'s included in "permit revisions"?',
    answer: 'If your permit is rejected or corrections are requested by the building department, we revise the plans at no charge until approved. This is unlimited for AHJ-requested changes. If you want to change the design significantly after approval (different equipment, size change), that may incur revision fees.'
  },
  {
    question: 'Can I upgrade my package later?',
    answer: 'Yes! If you start with Design Only and later want permitting or equipment sourcing, we can upgrade your package and credit what you\'ve already paid.'
  },
  {
    question: 'Do you charge by system size?',
    answer: 'Our base prices cover typical residential systems (up to 15kW). Very large residential (15-25kW) may add $100-$300. Commercial systems are custom quoted.'
  },
  {
    question: 'What if I only need part of a service?',
    answer: 'Contact us! We can sometimes customize services. For example, if you already have a design and just need permitting, or just need equipment sourcing.'
  }
];

export const successStories = [
  {
    name: 'John M.',
    location: 'Texas',
    systemSize: '8.5kW',
    ourFee: 995,
    equipment: 9200,
    otherCosts: 800,
    otherCostsLabel: 'Electrician',
    totalDIY: 10995,
    professionalQuote: 24000,
    saved: 13005,
    savingsPercent: 54
  },
  {
    name: 'Sarah L.',
    location: 'Colorado',
    systemSize: '12kW + Battery',
    ourFee: 1495,
    equipment: 25800,
    otherCosts: 1800,
    otherCostsLabel: 'Roofer',
    totalDIY: 29095,
    professionalQuote: 48000,
    saved: 18905,
    savingsPercent: 39
  },
  {
    name: 'Mike R.',
    location: 'Florida',
    systemSize: '6kW',
    ourFee: 595,
    equipment: 6500,
    otherCosts: 0,
    otherCostsLabel: null,
    totalDIY: 7095,
    professionalQuote: 17500,
    saved: 10405,
    savingsPercent: 59
  }
];

export const paymentInfo = {
  methods: [
    'Credit/Debit Card (Visa, Mastercard, Amex, Discover)',
    'ACH Bank Transfer',
    'PayPal',
    'Check (mailed)',
    'Wire Transfer (for large commercial projects)'
  ],
  terms: [
    '50% deposit to begin design work',
    '50% upon delivery of completed design/permit package',
    'Full payment required before equipment sourcing (if included)'
  ],
  financing: {
    description: 'We don\'t offer financing directly, but your solar project may qualify for:',
    options: [
      'Home equity loans (tax-deductible interest)',
      'Personal loans',
      'Credit union green energy loans',
      'Cash-out refinance'
    ],
    note: 'We provide all documentation needed for loan applications.'
  }
};

export const guarantee = {
  title: 'Money-Back Guarantee',
  description: 'If we can\'t deliver a code-compliant, permit-ready solar design for your property, we\'ll refund your payment 100%. No questions asked.',
  points: [
    'If your project isn\'t feasible for solar, full refund',
    'If we can\'t get your permit approved, full refund',
    'If you\'re not satisfied with our design quality, we\'ll make it right or refund'
  ],
  confidence: [
    '5,000+ successful designs',
    '98% permit approval rate',
    'Licensed PEs in all 50 states',
    'We stand behind our work'
  ]
};

export const valueStack = {
  totalValue: 8500,
  yourInvestment: 2299,
  savingsAmount: 6201,
  savingsPercent: 73,
  items: [
    { item: 'Custom Solar System Design', value: '$2,500' },
    { item: 'Engineered Stamped Drawings', value: '$1,200' },
    { item: 'Permit-Ready Plans', value: '$800' },
    { item: 'Equipment Sourcing Guide', value: '$500' },
    { item: 'Installation Training Videos', value: '$400' },
    { item: 'Expert Consultation (2 hrs)', value: '$600' },
    { item: '90-Day Support Package', value: '$1,500' },
    { item: 'Lifetime Access to Resources', value: '$1,000' }
  ]
};

export const savingsComparison = {
  traditional: 28500,
  withDIY: 12200,
  totalSavings: 16300,
  savingsPercent: 57
};
