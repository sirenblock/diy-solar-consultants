export const caseStudies = [
  {
    id: 'austin-suburban',
    name: 'Austin Suburban Solar',
    category: 'Residential Grid-Tied',
    featured: true,
    headerImage: '/images/portfolio/austin-suburban-main.jpg',

    // Quick stats
    stats: {
      systemSize: 8.5,
      location: 'Austin, Texas',
      state: 'TX',
      region: 'Southwest',
      type: 'Grid-tied, String inverter with optimizers',
      installType: 'DIY with electrician for final connection',
      timeline: '8 weeks',
      totalSavings: 12800,
      savingsPercent: 53
    },

    // Client background
    background: "John M. is a retired electrician who wanted to reduce his electricity bills and gain energy independence. With experience in electrical work but none in solar, he sought professional design while planning to do the installation himself.",

    // Challenges
    challenges: [
      'Moderate shading from oak trees in backyard',
      'Two-plane roof (south and west-facing)',
      'Older 100-amp electrical panel',
      'HOA approval required'
    ],

    // Solution
    solution: {
      description: 'Our engineering team designed an 8.5kW system split across two roof planes with SolarEdge optimizers to mitigate shading issues. The design included a panel upgrade and professional HOA submission package.',
      details: [
        '8.5kW system split across two roof planes',
        'SolarEdge inverter with P370 optimizers to mitigate shading',
        '22 panels: 16 on south roof, 6 on west roof',
        'Panel upgrade to 125-amp service included in design',
        'Professional HOA submission package with renderings'
      ]
    },

    // System details
    system: {
      panels: {
        model: 'Canadian Solar HiKu7 390W',
        quantity: 22,
        warranty: '25 years'
      },
      inverter: 'SolarEdge SE7600H-US with P370 optimizers',
      mounting: 'IronRidge XR100 rails on composition shingle',
      annualProduction: 11850,
      annualSavings: 1540
    },

    // Cost breakdown
    costs: {
      equipment: 9200,
      designPermitting: 1200,
      electrician: 800,
      totalDIY: 11200,
      afterTaxCredit: 7840,
      professionalQuote: 24000,
      savings: 12800,
      savingsPercent: 53
    },

    // Installation experience
    testimonial: {
      text: "I installed the mounting and panels myself over two weekends. The design was incredibly detailed - every measurement, every wire size, every connection. Permit was approved on first submission. I hired an electrician for the panel upgrade and final AC connection. System has been producing exactly as projected for 18 months now. Best investment I've made.",
      author: 'John M.',
      location: 'Austin, TX',
      rating: 5
    },

    // Results
    results: [
      { icon: 'check', text: 'Permit approved first submission (3 weeks)' },
      { icon: 'check', text: 'Installation completed in 3 weekends' },
      { icon: 'check', text: 'Passed inspection on first attempt' },
      { icon: 'check', text: 'System producing 101% of estimates (18 months average)' },
      { icon: 'check', text: 'Electricity bill reduced from $185/mo to $22/mo' },
      { icon: 'check', text: 'Payback period: 5.1 years' },
      { icon: 'check', text: '25-year savings: $48,000+' }
    ],

    // Lessons learned
    lessonsLearned: "Take your time with the mounting - it's the most critical part. The electrical is straightforward if you follow the design. Don't skip the optimizer installation - they really do help with shading.",

    // Photos
    photos: [
      { url: '/images/portfolio/austin-before.jpg', caption: 'House before solar installation' },
      { url: '/images/portfolio/austin-mounting.jpg', caption: 'Mounting installation progress' },
      { url: '/images/portfolio/austin-panels.jpg', caption: 'Panel installation' },
      { url: '/images/portfolio/austin-complete.jpg', caption: 'Completed system' },
      { url: '/images/portfolio/austin-monitoring.jpg', caption: 'Production monitoring dashboard' }
    ],

    // Metadata
    propertyType: 'Residential',
    sizeCategory: 'Medium',
    completedDate: '2023-05',
    monthsOperating: 18
  },

  {
    id: 'denver-powerwall',
    name: 'Denver Home with Powerwall',
    category: 'Residential with Battery',
    featured: true,
    headerImage: '/images/portfolio/denver-powerwall-main.jpg',

    stats: {
      systemSize: 12,
      location: 'Denver, Colorado',
      state: 'CO',
      region: 'West',
      type: 'Grid-tied with whole-home battery backup',
      installType: 'DIY with roofer for mounting',
      timeline: '10 weeks',
      totalSavings: 21500,
      savingsPercent: 45
    },

    background: "Sarah L. and her family wanted both energy independence and backup power for Colorado's occasional grid outages, especially during winter storms.",

    challenges: [
      'Steep roof pitch (9:12)',
      'High snow load requirements (55 psf)',
      'Complex battery integration',
      'Net metering with Xcel Energy'
    ],

    solution: {
      description: 'We designed a 12kW system optimized for Colorado sun hours with Tesla Powerwall 3 integration and enhanced mounting for snow loads.',
      details: [
        '12kW system optimized for Colorado sun hours',
        'Tesla Powerwall 3 for whole-home backup',
        'Enhanced mounting for snow loads',
        'Enphase IQ8+ microinverters for panel-level optimization',
        'Powerwall compatibility engineering'
      ]
    },

    system: {
      panels: {
        model: 'REC Alpha Pure-R 430W',
        quantity: 28,
        warranty: '25 years'
      },
      inverter: 'Enphase IQ8+ microinverters (28 units)',
      battery: 'Tesla Powerwall 3 (13.5 kWh)',
      mounting: 'IronRidge XR100 with enhanced snow brackets',
      annualProduction: 15200,
      annualSavings: 2280
    },

    costs: {
      equipment: 14800,
      battery: 10500,
      designPermitting: 1600,
      roofer: 1800,
      electrician: 600,
      totalDIY: 29300,
      afterTaxCredit: 20510,
      professionalQuote: 48000,
      savings: 21500,
      savingsPercent: 45
    },

    testimonial: {
      text: "We hired a roofer to handle the mounting because of our steep pitch - best decision. We did all the electrical ourselves with guidance from DIY Solar Consultants. The Powerwall installation was more complex than the panels, but the design package made it manageable. System has provided backup during three power outages so far.",
      author: 'Sarah L.',
      location: 'Denver, CO',
      rating: 5
    },

    results: [
      { icon: 'check', text: 'Permit approved (2 weeks, one minor revision)' },
      { icon: 'check', text: 'Installation over 4 weekends' },
      { icon: 'check', text: 'Inspection passed first attempt' },
      { icon: 'check', text: 'System producing 98% of estimates (14 months)' },
      { icon: 'check', text: 'Powerwall provided backup during 3 outages (4-8 hours each)' },
      { icon: 'check', text: 'Monthly bill: $285 → $45' },
      { icon: 'check', text: 'Payback period: 7.2 years (accounting for backup value)' }
    ],

    lessonsLearned: "Hiring a professional roofer for steep pitches is worth it. Battery integration requires careful planning - follow the design specs exactly.",

    photos: [
      { url: '/images/portfolio/denver-before.jpg', caption: 'Steep roof before installation' },
      { url: '/images/portfolio/denver-mounting.jpg', caption: 'Roofer installing mounting system' },
      { url: '/images/portfolio/denver-microinverter.jpg', caption: 'Microinverter installation detail' },
      { url: '/images/portfolio/denver-powerwall.jpg', caption: 'Tesla Powerwall 3 installation' },
      { url: '/images/portfolio/denver-monitoring.jpg', caption: 'Monitoring dashboard in backup mode' }
    ],

    propertyType: 'Residential',
    sizeCategory: 'Large',
    completedDate: '2023-08',
    monthsOperating: 14
  },

  {
    id: 'tampa-budget',
    name: 'Tampa Budget Solar',
    category: 'Small Residential',
    featured: false,
    headerImage: '/images/portfolio/tampa-budget-main.jpg',

    stats: {
      systemSize: 6,
      location: 'Tampa, Florida',
      state: 'FL',
      region: 'Southeast',
      type: 'Grid-tied, microinverters',
      installType: '100% DIY',
      timeline: '7 weeks',
      totalSavings: 10400,
      savingsPercent: 59
    },

    background: "Mike R. wanted to reduce his high Florida electricity bills (AC runs constantly) but had a limited budget. He chose a smaller system to start, with plans to expand later.",

    challenges: [
      'Limited budget ($8,000 target)',
      'Hurricane wind load requirements (180 mph)',
      'Occasional shading from palm trees',
      'Future expansion desired'
    ],

    solution: {
      description: 'Budget-friendly 6kW system with expansion potential, hurricane-rated mounting, and dual microinverters for cost savings.',
      details: [
        '6kW system with expansion potential',
        'Budget-friendly Jinko panels with proven track record',
        'APsystems microinverters (dual configuration for lower cost)',
        'Hurricane-rated mounting with enhanced attachments',
        'Designed for easy expansion (add 4-6 panels later)'
      ]
    },

    system: {
      panels: {
        model: 'Jinko Tiger Neo 410W',
        quantity: 15,
        warranty: '25 years'
      },
      inverter: 'APsystems DS3-H (8 dual microinverters)',
      mounting: 'IronRidge XR100 with hurricane clips',
      annualProduction: 8900,
      annualSavings: 1335
    },

    costs: {
      equipment: 6200,
      designPermitting: 900,
      totalDIY: 7100,
      afterTaxCredit: 4970,
      professionalQuote: 17500,
      savings: 10400,
      savingsPercent: 59
    },

    testimonial: {
      text: "I'm not particularly handy, but I took my time and followed the instructions carefully. Installed over three weekends. The microinverters made the electrical simple - just plug and play. Haven't hired anyone - saved every dollar. System works perfectly and my bills are down $110/month.",
      author: 'Mike R.',
      location: 'Tampa, FL',
      rating: 5
    },

    results: [
      { icon: 'check', text: 'Permit approved first submission (2 weeks)' },
      { icon: 'check', text: 'Installation: 3 weekends' },
      { icon: 'check', text: 'Passed inspection first try' },
      { icon: 'check', text: 'Producing 103% of estimates (10 months)' },
      { icon: 'check', text: 'Bill reduced: $165/mo → $52/mo' },
      { icon: 'check', text: 'Payback period: 3.7 years' },
      { icon: 'check', text: 'Planning expansion (4 more panels) next year' }
    ],

    lessonsLearned: "You don't need to be an expert - just follow the design carefully. Microinverters are very DIY-friendly. Budget systems can deliver great results.",

    photos: [
      { url: '/images/portfolio/tampa-progress1.jpg', caption: 'Installation progress - Day 1' },
      { url: '/images/portfolio/tampa-progress2.jpg', caption: 'DIY installation process' },
      { url: '/images/portfolio/tampa-wiring.jpg', caption: 'Microinverter wiring detail' },
      { url: '/images/portfolio/tampa-complete.jpg', caption: 'Completed 6kW system' },
      { url: '/images/portfolio/tampa-bills.jpg', caption: 'Electric bill comparison' }
    ],

    propertyType: 'Residential',
    sizeCategory: 'Small',
    completedDate: '2023-11',
    monthsOperating: 10
  },

  {
    id: 'phoenix-luxury',
    name: 'Phoenix Luxury Solar',
    category: 'Large Residential Premium',
    featured: true,
    headerImage: '/images/portfolio/phoenix-luxury-main.jpg',

    stats: {
      systemSize: 15,
      location: 'Phoenix, Arizona',
      state: 'AZ',
      region: 'Southwest',
      type: 'Grid-tied with extensive battery backup',
      installType: 'DIY with contractors for specific tasks',
      timeline: '12 weeks',
      totalSavings: 28350,
      savingsPercent: 36
    },

    background: "David and Jennifer T. wanted a premium system with maximum production and extensive backup capability for their large home with pool.",

    challenges: [
      'Large system requiring multiple roof planes',
      'High cooling loads (pool equipment, AC)',
      'Desire for whole-home backup including AC',
      'Complex architectural shingles',
      'Aesthetic requirements (all-black panels)'
    ],

    solution: {
      description: 'Premium 15kW system with dual Powerwall 3 units, split across three roof planes with high-efficiency all-black panels.',
      details: [
        '15kW split across three roof planes',
        'Two Tesla Powerwall 3 units (27 kWh total)',
        'Premium REC panels for efficiency and aesthetics',
        'SolarEdge inverter system for optimal performance',
        'Professional tile work coordination'
      ]
    },

    system: {
      panels: {
        model: 'REC Alpha Pure-R 470W',
        quantity: 32,
        warranty: '25 years'
      },
      inverter: 'SolarEdge SE10000H-US with P505 optimizers',
      battery: '2× Tesla Powerwall 3 (27 kWh total)',
      mounting: 'Quick Mount PV on tile roof',
      annualProduction: 24500,
      annualSavings: 3680
    },

    costs: {
      equipment: 21000,
      battery: 21000,
      designPermitting: 2000,
      roofer: 3500,
      electrician: 2000,
      totalDIY: 49500,
      afterTaxCredit: 34650,
      professionalQuote: 78000,
      savings: 28350,
      savingsPercent: 36
    },

    testimonial: {
      text: "The system exceeded our expectations. Powers our entire home including AC and pool during outages. The design was comprehensive and professional. We hired contractors for specific tasks but saved significantly by managing the project ourselves.",
      author: 'David T.',
      location: 'Phoenix, AZ',
      rating: 5
    },

    results: [
      { icon: 'check', text: 'Large, complex system completed successfully' },
      { icon: 'check', text: 'Powers entire home including AC during outages' },
      { icon: 'check', text: 'Bill reduced: $385/mo → $75/mo' },
      { icon: 'check', text: 'Payback period: 9.4 years' },
      { icon: 'check', text: 'Significant increase in home value' },
      { icon: 'check', text: 'All-black aesthetic perfectly matches home' }
    ],

    lessonsLearned: "Premium systems require more coordination but deliver exceptional results. Professional help for specialized tasks is a smart investment.",

    photos: [
      { url: '/images/portfolio/phoenix-aerial.jpg', caption: 'Aerial view of three-plane installation' },
      { url: '/images/portfolio/phoenix-tile-work.jpg', caption: 'Professional tile work' },
      { url: '/images/portfolio/phoenix-panels.jpg', caption: 'All-black REC Alpha panels' },
      { url: '/images/portfolio/phoenix-powerwalls.jpg', caption: 'Dual Powerwall 3 installation' },
      { url: '/images/portfolio/phoenix-monitoring.jpg', caption: 'Production monitoring system' }
    ],

    propertyType: 'Residential',
    sizeCategory: 'Extra Large',
    completedDate: '2023-06',
    monthsOperating: 16
  },

  {
    id: 'portland-commercial',
    name: 'Portland Retail Shop',
    category: 'Small Commercial',
    featured: true,
    headerImage: '/images/portfolio/portland-commercial-main.jpg',

    stats: {
      systemSize: 35,
      location: 'Portland, Oregon',
      state: 'OR',
      region: 'West',
      type: 'Commercial grid-tied, ground mount',
      installType: 'DIY with contractors',
      timeline: '14 weeks',
      totalSavings: 45500,
      savingsPercent: 38
    },

    background: "A small retail business wanted to reduce operating costs and demonstrate environmental commitment to their community.",

    challenges: [
      'Commercial permitting requirements',
      'Three-phase electrical integration',
      'Ground mount design and engineering',
      'Structural engineering required',
      'Local zoning approval needed'
    ],

    solution: {
      description: 'Ground-mounted 35kW commercial system with three-phase integration, complete permitting package, and structural engineering.',
      details: [
        'Ground-mounted array (better than roof for maintenance)',
        'Commercial string inverters (3-phase)',
        'Engineered racking system',
        'Complete commercial permitting package',
        'Zoning approval documentation'
      ]
    },

    system: {
      panels: {
        model: 'Longi Hi-MO 6 450W',
        quantity: 78,
        warranty: '25 years'
      },
      inverter: 'SMA Sunny Tripower 25kW (3-phase)',
      mounting: 'Ground-mount racking system',
      annualProduction: 48300,
      annualSavings: 6280
    },

    costs: {
      equipment: 38000,
      groundMount: 12000,
      designEngineering: 4500,
      contractors: 18000,
      totalDIY: 72500,
      afterIncentives: 40000,
      professionalQuote: 118000,
      savings: 45500,
      savingsPercent: 38
    },

    testimonial: {
      text: "The commercial design package was incredibly thorough - everything needed for permits, zoning, and three-phase integration. We managed the project ourselves with contractors for installation. Significant cost savings and our customers love seeing our commitment to renewable energy.",
      author: 'Business Owner',
      location: 'Portland, OR',
      rating: 5
    },

    results: [
      { icon: 'check', text: 'Offsets 75% of business electricity usage' },
      { icon: 'check', text: 'Payback period: 6.4 years (with accelerated depreciation)' },
      { icon: 'check', text: 'Enhanced business reputation' },
      { icon: 'check', text: 'Visible demonstration of sustainability commitment' },
      { icon: 'check', text: 'Qualifies for commercial tax incentives' }
    ],

    lessonsLearned: "Commercial projects require more documentation but the savings are substantial. Ground mount makes maintenance easy.",

    photos: [
      { url: '/images/portfolio/portland-site.jpg', caption: 'Ground mount site preparation' },
      { url: '/images/portfolio/portland-racking.jpg', caption: 'Commercial racking installation' },
      { url: '/images/portfolio/portland-panels.jpg', caption: '78-panel ground array' },
      { url: '/images/portfolio/portland-inverter.jpg', caption: 'Three-phase commercial inverter' },
      { url: '/images/portfolio/portland-complete.jpg', caption: 'Completed commercial installation' }
    ],

    propertyType: 'Commercial',
    sizeCategory: 'Commercial',
    completedDate: '2023-04',
    monthsOperating: 18
  },

  {
    id: 'montana-offgrid',
    name: 'Montana Off-Grid Retreat',
    category: 'Off-Grid Cabin',
    featured: false,
    headerImage: '/images/portfolio/montana-offgrid-main.jpg',

    stats: {
      systemSize: 4.5,
      location: 'Rural Montana',
      state: 'MT',
      region: 'West',
      type: 'Off-grid with generator backup',
      installType: '100% DIY',
      timeline: '6 weeks',
      totalSavings: 'N/A',
      savingsPercent: 'N/A'
    },

    background: "Remote cabin with no utility access - solar was the only option besides running a generator full-time.",

    challenges: [
      'Off-grid design (no utility backup)',
      'High latitude (limited winter sun)',
      'Heavy snow loads',
      'Battery sizing for multi-day autonomy',
      'Generator integration required'
    ],

    solution: {
      description: 'Oversized off-grid system with large battery bank, hybrid inverter, and optimized for winter production with steep tilt angle.',
      details: [
        'Oversized array for winter production',
        'Large battery bank for multi-day autonomy',
        'Hybrid system with generator backup',
        'Steep tilt angle (60°) for snow shedding and winter optimization',
        'Propane generator integration'
      ]
    },

    system: {
      panels: {
        model: 'Canadian Solar 400W',
        quantity: 12,
        warranty: '25 years'
      },
      inverter: 'Outback Radian hybrid inverter/charger',
      battery: 'SimpliPhi PHI batteries (30 kWh)',
      generator: 'Backup propane generator',
      mounting: 'Ground mount at 60° tilt',
      annualProduction: 5800,
      annualSavings: 2400
    },

    costs: {
      equipment: 5200,
      batteries: 16000,
      inverter: 4500,
      mounting: 2000,
      design: 1200,
      totalDIY: 28900,
      afterTaxCredit: 20230,
      generatorOnly: 'Saves $2,400/year in fuel',
      savings: 'Energy independence',
      savingsPercent: 'N/A'
    },

    testimonial: {
      text: "Living off-grid in Montana requires a robust system. The design accounts for our harsh winters and limited sun. Generator runtime dropped 85%. True energy independence achieved.",
      author: 'Cabin Owner',
      location: 'Rural Montana',
      rating: 5
    },

    results: [
      { icon: 'check', text: '100% energy independence achieved' },
      { icon: 'check', text: 'Generator runtime reduced 85%' },
      { icon: 'check', text: 'Powers cabin year-round' },
      { icon: 'check', text: 'System handles Montana winters successfully' },
      { icon: 'check', text: 'Fuel savings: $2,400/year' },
      { icon: 'check', text: 'Multi-day battery autonomy' }
    ],

    lessonsLearned: "Off-grid systems need significant oversizing for winter. Battery capacity is critical. Backup generator is essential for extended cloudy periods.",

    photos: [
      { url: '/images/portfolio/montana-site.jpg', caption: 'Remote Montana location' },
      { url: '/images/portfolio/montana-mount.jpg', caption: '60° ground mount for snow' },
      { url: '/images/portfolio/montana-batteries.jpg', caption: '30 kWh battery bank' },
      { url: '/images/portfolio/montana-inverter.jpg', caption: 'Hybrid inverter system' },
      { url: '/images/portfolio/montana-winter.jpg', caption: 'System in winter operation' }
    ],

    propertyType: 'Residential',
    sizeCategory: 'Small',
    completedDate: '2023-09',
    monthsOperating: 12
  }
];

// Aggregate statistics across all projects
export const portfolioStats = {
  totalSystems: '5,000+',
  totalStates: 50,
  totalSavings: '$50M+',
  averageSavings: '40-60%',
  approvalRate: '98%',
  longestRunning: '15+',
  clientSatisfaction: {
    rating: 4.9,
    wouldRecommend: 98,
    completedSuccessfully: 95,
    producingAtEstimates: 92
  }
};

// Filter options
export const filterOptions = {
  sizeCategories: ['All', 'Small', 'Medium', 'Large', 'Extra Large', 'Commercial'],
  regions: ['All', 'Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'],
  systemTypes: ['All', 'Grid-tied only', 'Battery backup', 'Off-grid'],
  propertyTypes: ['All', 'Residential', 'Commercial']
};

// Sort options
export const sortOptions = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'size-asc', label: 'System Size (Small to Large)' },
  { value: 'size-desc', label: 'System Size (Large to Small)' },
  { value: 'savings-desc', label: 'Savings (High to Low)' }
];
