// Comprehensive state-specific information for local SEO landing pages

export const stateData = {
  california: {
    name: 'California',
    slug: 'california',
    abbreviation: 'CA',
    specialRequirement: 'Title 24 compliance and fire setback requirements',
    systemsDesigned: '1,247',
    topIncentive: 'SGIP battery storage rebates',
    climate: 'sunny Mediterranean',
    specialConsideration: 'Fire setbacks required in high fire risk areas per California Building Code.',
    homeownerCount: '5,240',
    incentiveCount: '12',
    avgElectricRate: '$0.34/kWh',
    avgSystemSize: '8.2 kW',
    avgSavings: '$2,850/year',
    coordinates: {
      lat: 36.7783,
      lng: -119.4179
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost including installation and battery storage',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'California SGIP',
        description: 'Self-Generation Incentive Program for battery storage systems. Higher rebates for low-income customers.',
        value: 'Up to $250/kWh',
        expires: 'Ongoing'
      },
      {
        name: 'Net Energy Metering 3.0 (NEM 3)',
        description: 'Export excess solar energy to grid. Battery storage highly recommended under NEM 3.',
        value: 'Export Credits',
        expires: 'Ongoing'
      },
      {
        name: 'Property Tax Exemption',
        description: 'Solar installations are exempt from property tax assessment increases',
        value: '100% Exemption',
        expires: '2026'
      },
      {
        name: 'DAC-SASH Program',
        description: 'Disadvantaged Communities - Single-family Affordable Solar Homes program',
        value: 'Up to $3.00/W',
        expires: 'Ongoing'
      },
      {
        name: 'Local Utility Rebates',
        description: 'Many California utilities offer additional rebates for solar and storage',
        value: 'Varies by utility',
        expires: 'Varies'
      }
    ],
    majorCities: [
      { name: 'Los Angeles', systemsCompleted: '452', population: '3.9M' },
      { name: 'San Diego', systemsCompleted: '287', population: '1.4M' },
      { name: 'San Francisco', systemsCompleted: '194', population: '874K' },
      { name: 'Sacramento', systemsCompleted: '143', population: '525K' },
      { name: 'San Jose', systemsCompleted: '118', population: '1.0M' },
      { name: 'Fresno', systemsCompleted: '87', population: '543K' }
    ],
    testimonials: [
      {
        name: 'Sarah Chen',
        location: 'Los Angeles, CA',
        system: '12 kW with Tesla Powerwall',
        quote: 'The design met all California Title 24 requirements and fire setbacks perfectly. Our permit was approved in just 4 days! The engineer walked us through every detail.',
        rating: 5,
        savingsAmount: '$3,200/year'
      },
      {
        name: 'Michael Torres',
        location: 'San Diego, CA',
        system: '9.6 kW Ground Mount',
        quote: 'They understood NEM 3.0 inside and out. Helped us navigate the SGIP battery rebate and saved us thousands. Best decision we made for our home.',
        rating: 5,
        savingsAmount: '$2,890/year'
      },
      {
        name: 'Jennifer Wong',
        location: 'Sacramento, CA',
        system: '7.8 kW Rooftop',
        quote: 'As a DIYer, I needed professional engineering for the permit. They delivered a perfect PE-stamped plan set that sailed through Sacramento County review.',
        rating: 5,
        savingsAmount: '$2,340/year'
      }
    ],
    faqs: [
      {
        question: 'Does California require a PE stamp for solar permits?',
        answer: 'Most California jurisdictions require a licensed Professional Engineer (PE) stamp for residential solar systems, especially systems over 5 kW. Our engineers are licensed in California and provide PE stamps as part of our permit package. This ensures your design meets California Building Code, Title 24 energy efficiency standards, and local fire setback requirements.'
      },
      {
        question: 'How does NEM 3.0 affect my solar system design in California?',
        answer: 'NEM 3.0 (Net Billing) significantly reduced export rates, making battery storage essential for maximizing savings. Our designs optimize for self-consumption and include battery storage recommendations. We also help you navigate the SGIP battery rebate program, which can offset 40-60% of battery costs.'
      },
      {
        question: 'What are California\'s fire setback requirements for solar?',
        answer: 'California requires specific setbacks from the ridge, eaves, and hips of your roof in high fire risk areas. These vary by jurisdiction but typically range from 18" to 36". Our engineers ensure your design meets all fire code requirements while maximizing your array size.'
      },
      {
        question: 'How long does solar permitting take in California?',
        answer: 'With a professional PE-stamped design, most California jurisdictions approve permits in 3-7 business days. Some cities offer same-day approval. We ensure your plans are complete and code-compliant to avoid delays and revision requests.'
      }
    ],
    utilityCompanies: [
      'Pacific Gas & Electric (PG&E)',
      'Southern California Edison (SCE)',
      'San Diego Gas & Electric (SDG&E)',
      'Sacramento Municipal Utility District (SMUD)',
      'Los Angeles Department of Water and Power (LADWP)'
    ]
  },

  texas: {
    name: 'Texas',
    slug: 'texas',
    abbreviation: 'TX',
    specialRequirement: 'wind load calculations for hurricane zones',
    systemsDesigned: '892',
    topIncentive: 'Federal Solar Tax Credit and property tax exemption',
    climate: 'hot and sunny',
    specialConsideration: 'High cooling loads make solar highly cost-effective. ERCOT grid independence considerations.',
    homeownerCount: '3,150',
    incentiveCount: '8',
    avgElectricRate: '$0.14/kWh',
    avgSystemSize: '9.8 kW',
    avgSavings: '$1,920/year',
    coordinates: {
      lat: 31.9686,
      lng: -99.9018
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost including installation',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'Property Tax Exemption',
        description: 'Solar installations are 100% exempt from property tax increases in Texas',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Austin Energy Solar Rebate',
        description: 'City of Austin offers performance-based incentives for solar installations',
        value: 'Up to $0.10/kWh',
        expires: 'Subject to funding'
      },
      {
        name: 'CPS Energy Solar Rebate',
        description: 'San Antonio\'s CPS Energy offers rebates for solar installations',
        value: 'Up to $0.60/W',
        expires: 'Subject to funding'
      },
      {
        name: 'Net Metering',
        description: 'Most Texas utilities offer net metering or bill credit programs',
        value: 'Retail Rate Credits',
        expires: 'Varies by utility'
      }
    ],
    majorCities: [
      { name: 'Houston', systemsCompleted: '312', population: '2.3M' },
      { name: 'Dallas', systemsCompleted: '245', population: '1.3M' },
      { name: 'Austin', systemsCompleted: '189', population: '979K' },
      { name: 'San Antonio', systemsCompleted: '146', population: '1.5M' },
      { name: 'Fort Worth', systemsCompleted: '98', population: '956K' },
      { name: 'El Paso', systemsCompleted: '67', population: '679K' }
    ],
    testimonials: [
      {
        name: 'David Martinez',
        location: 'Houston, TX',
        system: '11.2 kW with Battery Backup',
        quote: 'After the 2021 freeze, we wanted energy independence. The design included hurricane-rated mounting and battery backup. We stayed powered during the last outage!',
        rating: 5,
        savingsAmount: '$2,100/year'
      },
      {
        name: 'Amanda Johnson',
        location: 'Austin, TX',
        system: '8.5 kW Rooftop',
        quote: 'Austin Energy rebate plus federal tax credit made this a no-brainer. The engineering was top-notch and the permit process was seamless.',
        rating: 5,
        savingsAmount: '$1,780/year'
      },
      {
        name: 'Robert Kim',
        location: 'Dallas, TX',
        system: '10.4 kW Ground Mount',
        quote: 'Texas heat means our AC runs constantly. Solar cut our summer bills by 75%. The PE-stamped plans were exactly what Oncor required.',
        rating: 5,
        savingsAmount: '$2,340/year'
      }
    ],
    faqs: [
      {
        question: 'Do I need a PE stamp for solar permits in Texas?',
        answer: 'Texas requires a licensed Professional Engineer stamp for solar installations in most jurisdictions, particularly for structural calculations and electrical design. Our Texas-licensed PEs provide complete stamped plan sets that meet all state and local requirements.'
      },
      {
        question: 'How does the Texas property tax exemption work for solar?',
        answer: 'Texas law exempts 100% of your solar installation value from property tax assessment. This means installing solar won\'t increase your property taxes, making it even more cost-effective. The exemption is automatic and ongoing.'
      },
      {
        question: 'Is battery backup important in Texas?',
        answer: 'After recent grid challenges, many Texas homeowners choose battery backup for energy security. We design systems with battery integration in mind, ensuring you can add storage now or in the future. Battery costs also qualify for the 30% federal tax credit.'
      },
      {
        question: 'Does Texas have net metering?',
        answer: 'Texas doesn\'t have statewide net metering, but many utilities offer similar programs. Policies vary by provider - some offer retail rate credits, others offer wholesale rates. We design your system to maximize self-consumption and benefits under your specific utility\'s program.'
      }
    ],
    utilityCompanies: [
      'Oncor Electric Delivery',
      'CenterPoint Energy',
      'AEP Texas',
      'Austin Energy',
      'CPS Energy (San Antonio)',
      'El Paso Electric'
    ]
  },

  florida: {
    name: 'Florida',
    slug: 'florida',
    abbreviation: 'FL',
    specialRequirement: 'hurricane wind load calculations (150+ mph zones)',
    systemsDesigned: '743',
    topIncentive: 'Property tax exemption and sales tax exemption',
    climate: 'subtropical',
    specialConsideration: 'Hurricane-rated mounting required. High humidity and salt air considerations for coastal areas.',
    homeownerCount: '2,890',
    incentiveCount: '7',
    avgElectricRate: '$0.13/kWh',
    avgSystemSize: '8.7 kW',
    avgSavings: '$1,680/year',
    coordinates: {
      lat: 27.9944,
      lng: -81.7603
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'Property Tax Exemption',
        description: 'Solar installations are 100% exempt from property value assessment increases',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Sales Tax Exemption',
        description: 'Florida exempts solar equipment from state sales tax',
        value: '6% Savings',
        expires: 'Ongoing'
      },
      {
        name: 'Net Metering',
        description: 'Florida requires all utilities to offer net metering at retail rates',
        value: 'Retail Rate Credits',
        expires: 'Ongoing'
      },
      {
        name: 'Local Utility Rebates',
        description: 'Some Florida utilities offer additional solar rebates',
        value: 'Varies by utility',
        expires: 'Subject to funding'
      }
    ],
    majorCities: [
      { name: 'Miami', systemsCompleted: '218', population: '467K' },
      { name: 'Tampa', systemsCompleted: '187', population: '399K' },
      { name: 'Orlando', systemsCompleted: '156', population: '309K' },
      { name: 'Jacksonville', systemsCompleted: '134', population: '954K' },
      { name: 'Fort Lauderdale', systemsCompleted: '98', population: '183K' },
      { name: 'Naples', systemsCompleted: '76', population: '23K' }
    ],
    testimonials: [
      {
        name: 'Carlos Rodriguez',
        location: 'Miami, FL',
        system: '9.2 kW Hurricane-Rated',
        quote: 'Living in South Florida, hurricane protection was critical. The engineering included 180 mph wind rating and corrosion-resistant hardware. System survived hurricane season without issues!',
        rating: 5,
        savingsAmount: '$1,920/year'
      },
      {
        name: 'Lisa Thompson',
        location: 'Tampa, FL',
        system: '7.8 kW with Backup',
        quote: 'The sales tax exemption and property tax exemption made Florida perfect for solar. Designs met all Tampa Electric requirements and permit was approved in one week.',
        rating: 5,
        savingsAmount: '$1,560/year'
      },
      {
        name: 'Mark Stevens',
        location: 'Orlando, FL',
        system: '10.1 kW Rooftop',
        quote: 'Florida sunshine is perfect for solar! The PE stamp from their licensed engineer made permitting with Duke Energy straightforward. Already seeing 80% reduction in electric bills.',
        rating: 5,
        savingsAmount: '$1,840/year'
      }
    ],
    faqs: [
      {
        question: 'Are solar systems in Florida required to withstand hurricanes?',
        answer: 'Yes, Florida Building Code requires solar installations to meet strict wind load requirements, typically 150-180 mph depending on your location. Our engineers design hurricane-rated systems using reinforced mounting, proper attachment spacing, and engineered calculations that meet or exceed code requirements.'
      },
      {
        question: 'Does Florida have good net metering policies?',
        answer: 'Yes! Florida has excellent net metering laws that require utilities to credit you at retail rates for excess solar production. This makes solar very cost-effective in Florida, especially with the state\'s abundant sunshine.'
      },
      {
        question: 'What permits do I need for solar in Florida?',
        answer: 'Florida requires building permits for solar installations, which must include PE-stamped structural and electrical plans. We provide complete permit packages with Professional Engineer stamps from Florida-licensed engineers, ensuring code compliance and smooth approval.'
      },
      {
        question: 'How does coastal salt air affect solar panels in Florida?',
        answer: 'Coastal areas require special consideration for corrosion resistance. We specify marine-grade mounting hardware, proper grounding, and recommend panels with robust frames for coastal installations. Proper design ensures 25+ year system life even in harsh environments.'
      }
    ],
    utilityCompanies: [
      'Florida Power & Light (FPL)',
      'Duke Energy Florida',
      'Tampa Electric (TECO)',
      'Gulf Power',
      'Orlando Utilities Commission (OUC)',
      'JEA (Jacksonville)'
    ]
  },

  arizona: {
    name: 'Arizona',
    slug: 'arizona',
    abbreviation: 'AZ',
    specialRequirement: 'extreme heat and UV exposure considerations',
    systemsDesigned: '687',
    topIncentive: 'Property tax exemption and SRP rebates',
    climate: 'desert',
    specialConsideration: 'High temperatures affect panel efficiency. Optimal tilt angles differ from national averages due to southern latitude.',
    homeownerCount: '2,340',
    incentiveCount: '9',
    avgElectricRate: '$0.13/kWh',
    avgSystemSize: '9.4 kW',
    avgSavings: '$1,850/year',
    coordinates: {
      lat: 34.0489,
      lng: -111.0937
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'Property Tax Exemption',
        description: 'Solar energy devices are exempt from property tax assessment',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'SRP Solar Rebate',
        description: 'Salt River Project offers rebates for battery storage systems',
        value: 'Up to $1,800',
        expires: 'Subject to funding'
      },
      {
        name: 'APS Solar Incentives',
        description: 'Arizona Public Service offers various solar programs',
        value: 'Varies',
        expires: 'Ongoing'
      },
      {
        name: 'TEP Rebates',
        description: 'Tucson Electric Power offers solar and battery rebates',
        value: 'Varies by program',
        expires: 'Subject to funding'
      },
      {
        name: 'Net Metering',
        description: 'Most Arizona utilities offer net metering or export credit programs',
        value: 'Export Credits',
        expires: 'Varies by utility'
      }
    ],
    majorCities: [
      { name: 'Phoenix', systemsCompleted: '298', population: '1.7M' },
      { name: 'Tucson', systemsCompleted: '176', population: '548K' },
      { name: 'Mesa', systemsCompleted: '134', population: '511K' },
      { name: 'Scottsdale', systemsCompleted: '112', population: '241K' },
      { name: 'Chandler', systemsCompleted: '89', population: '280K' },
      { name: 'Glendale', systemsCompleted: '67', population: '253K' }
    ],
    testimonials: [
      {
        name: 'James Peterson',
        location: 'Phoenix, AZ',
        system: '11.5 kW with Battery',
        quote: 'Phoenix summers are brutal on electricity bills. Solar with battery storage means we\'re saving $200+ monthly. The design accounted for extreme heat and our system performs flawlessly.',
        rating: 5,
        savingsAmount: '$2,450/year'
      },
      {
        name: 'Maria Garcia',
        location: 'Tucson, AZ',
        system: '8.9 kW Rooftop',
        quote: 'TEP rebate plus the federal credit made this affordable. The engineering was perfect - permit approved same day by the city of Tucson. Desert sun is now our biggest asset!',
        rating: 5,
        savingsAmount: '$1,680/year'
      },
      {
        name: 'Tom Bradley',
        location: 'Scottsdale, AZ',
        system: '10.2 kW Ground Mount',
        quote: 'SRP\'s time-of-use rates made solar a no-brainer. The design maximized our array size and the PE stamp ensured code compliance. Best ROI of any home improvement.',
        rating: 5,
        savingsAmount: '$2,120/year'
      }
    ],
    faqs: [
      {
        question: 'How does Arizona\'s extreme heat affect solar panel performance?',
        answer: 'While panels are less efficient in extreme heat, Arizona\'s abundant sunshine more than compensates. We design systems accounting for temperature coefficients and specify panels with better high-temperature performance. Arizona\'s 300+ sunny days per year make it one of the best solar states despite summer heat.'
      },
      {
        question: 'Do I need a PE stamp for solar in Arizona?',
        answer: 'Yes, most Arizona jurisdictions require Professional Engineer stamped plans for residential solar, particularly for structural and electrical design. Our Arizona-licensed PEs provide complete stamped plan sets meeting all state and local requirements.'
      },
      {
        question: 'What are Arizona\'s net metering policies?',
        answer: 'Arizona utilities vary in their net metering policies. APS and SRP have moved to export rate structures, while some smaller utilities maintain retail rate net metering. We design systems optimized for your specific utility\'s program, maximizing self-consumption and battery storage where beneficial.'
      },
      {
        question: 'Is battery storage worth it in Arizona?',
        answer: 'With time-of-use rates and high demand charges from major utilities like APS and SRP, battery storage often provides excellent ROI in Arizona. Batteries also provide backup power during monsoon season outages. We help you evaluate battery economics for your specific situation.'
      }
    ],
    utilityCompanies: [
      'Arizona Public Service (APS)',
      'Salt River Project (SRP)',
      'Tucson Electric Power (TEP)',
      'Unisource Energy Services',
      'Arizona Electric Power Cooperative'
    ]
  },

  nevada: {
    name: 'Nevada',
    slug: 'nevada',
    abbreviation: 'NV',
    specialRequirement: 'wind and snow load calculations for northern regions',
    systemsDesigned: '412',
    topIncentive: 'NV Energy Solar Incentives',
    climate: 'desert',
    specialConsideration: 'Excellent solar resource. Northern Nevada requires snow load calculations. Las Vegas area has high cooling demand.',
    homeownerCount: '1,680',
    incentiveCount: '6',
    avgElectricRate: '$0.13/kWh',
    avgSystemSize: '8.9 kW',
    avgSavings: '$1,740/year',
    coordinates: {
      lat: 38.8026,
      lng: -116.4194
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'NV Energy Solar Incentive',
        description: 'Performance-based incentive for solar installations',
        value: 'Up to $0.03/kWh',
        expires: 'Subject to funding'
      },
      {
        name: 'Property Tax Exemption',
        description: 'Renewable energy systems exempt from property taxes',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Sales Tax Abatement',
        description: 'Partial sales tax exemption for solar equipment',
        value: 'Up to 75% reduction',
        expires: 'Ongoing'
      },
      {
        name: 'Net Metering',
        description: 'NV Energy offers net metering with 95% retail rate credit',
        value: '95% Retail Credits',
        expires: 'Ongoing'
      }
    ],
    majorCities: [
      { name: 'Las Vegas', systemsCompleted: '256', population: '656K' },
      { name: 'Henderson', systemsCompleted: '87', population: '331K' },
      { name: 'Reno', systemsCompleted: '76', population: '265K' },
      { name: 'North Las Vegas', systemsCompleted: '54', population: '262K' },
      { name: 'Sparks', systemsCompleted: '32', population: '106K' }
    ],
    testimonials: [
      {
        name: 'Rachel Cooper',
        location: 'Las Vegas, NV',
        system: '9.6 kW Rooftop',
        quote: 'Las Vegas summers push our AC to the limit. Solar eliminated our peak bills completely. The design was perfect for NV Energy requirements and permitting was fast.',
        rating: 5,
        savingsAmount: '$1,920/year'
      },
      {
        name: 'Steven Mitchell',
        location: 'Reno, NV',
        system: '8.2 kW with Snow Guards',
        quote: 'Reno gets snow in winter, so snow load engineering was critical. The PE-stamped plans included proper calculations and the system handles our weather perfectly.',
        rating: 5,
        savingsAmount: '$1,580/year'
      },
      {
        name: 'Diana Lopez',
        location: 'Henderson, NV',
        system: '10.8 kW Ground Mount',
        quote: 'NV Energy\'s incentive plus federal credit made this investment pay for itself in 5 years. Professional engineering made DIY installation possible while ensuring safety.',
        rating: 5,
        savingsAmount: '$2,040/year'
      }
    ],
    faqs: [
      {
        question: 'Does Nevada have good solar incentives?',
        answer: 'Yes! Nevada offers the federal 30% tax credit, NV Energy rebates, property tax exemption, sales tax abatement, and net metering at 95% retail rates. Combined, these incentives make Nevada one of the most solar-friendly states.'
      },
      {
        question: 'Do I need different designs for Las Vegas vs Reno?',
        answer: 'Yes, northern Nevada (Reno area) requires snow load calculations and potentially snow guards, while southern Nevada focuses on wind loads. We provide region-specific designs that meet all local code requirements.'
      },
      {
        question: 'How does NV Energy\'s net metering work?',
        answer: 'NV Energy credits excess solar production at 95% of retail rates, which is excellent compared to most states. This makes solar very cost-effective, especially with Nevada\'s abundant sunshine and high summer electricity rates.'
      },
      {
        question: 'Are PE-stamped plans required in Nevada?',
        answer: 'Most Nevada jurisdictions require Professional Engineer stamped plans for solar installations. We provide complete PE-stamped permit packages from Nevada-licensed engineers, ensuring smooth approval and code compliance.'
      }
    ],
    utilityCompanies: [
      'NV Energy (North)',
      'NV Energy (South)',
      'Valley Electric Association',
      'Mt. Wheeler Power',
      'Overton Power District'
    ]
  },

  'north-carolina': {
    name: 'North Carolina',
    slug: 'north-carolina',
    abbreviation: 'NC',
    specialRequirement: 'hurricane wind ratings for coastal areas',
    systemsDesigned: '534',
    topIncentive: 'Duke Energy solar rebates',
    climate: 'temperate',
    specialConsideration: 'Coastal areas require hurricane engineering. Good solar resource across the state. Strong net metering policy.',
    homeownerCount: '2,120',
    incentiveCount: '7',
    avgElectricRate: '$0.12/kWh',
    avgSystemSize: '8.4 kW',
    avgSavings: '$1,520/year',
    coordinates: {
      lat: 35.7596,
      lng: -79.0193
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'Property Tax Exemption',
        description: '80% of appraised value exempt from property taxes',
        value: '80% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Duke Energy Solar Rebates',
        description: 'Rebates for residential solar installations (subject to availability)',
        value: 'Up to $0.60/W',
        expires: 'Subject to funding'
      },
      {
        name: 'Net Metering',
        description: 'Full retail rate net metering for systems under 1 MW',
        value: 'Retail Rate Credits',
        expires: 'Ongoing'
      },
      {
        name: 'NC GreenPower',
        description: 'Renewable energy credits program',
        value: 'SREC payments',
        expires: 'Ongoing'
      }
    ],
    majorCities: [
      { name: 'Charlotte', systemsCompleted: '187', population: '897K' },
      { name: 'Raleigh', systemsCompleted: '156', population: '474K' },
      { name: 'Greensboro', systemsCompleted: '98', population: '301K' },
      { name: 'Durham', systemsCompleted: '87', population: '283K' },
      { name: 'Winston-Salem', systemsCompleted: '76', population: '250K' },
      { name: 'Asheville', systemsCompleted: '54', population: '95K' }
    ],
    testimonials: [
      {
        name: 'Emily Harrison',
        location: 'Charlotte, NC',
        system: '8.8 kW Rooftop',
        quote: 'Duke Energy rebate plus federal credit made solar very affordable. The PE-stamped plans sailed through Charlotte permitting. Cutting our bills by 70% feels amazing!',
        rating: 5,
        savingsAmount: '$1,640/year'
      },
      {
        name: 'Kevin Brown',
        location: 'Raleigh, NC',
        system: '9.2 kW Ground Mount',
        quote: 'NC has excellent net metering. The engineering was thorough and professional - exactly what Wake County required. System producing even better than projected.',
        rating: 5,
        savingsAmount: '$1,780/year'
      },
      {
        name: 'Patricia Davis',
        location: 'Wilmington, NC',
        system: '7.6 kW Hurricane-Rated',
        quote: 'Living on the coast, hurricane protection was essential. The design included 140 mph wind rating and corrosion-resistant components. Peace of mind with every storm.',
        rating: 5,
        savingsAmount: '$1,420/year'
      }
    ],
    faqs: [
      {
        question: 'Does North Carolina have good net metering?',
        answer: 'Yes! North Carolina has excellent net metering that credits excess production at full retail rates. This is one of the best net metering policies in the Southeast, making solar very cost-effective.'
      },
      {
        question: 'Are Duke Energy rebates still available?',
        answer: 'Duke Energy periodically offers solar rebates, though programs are often oversubscribed. We stay current on all available incentives and help you apply for rebates, tax credits, and other programs to maximize your savings.'
      },
      {
        question: 'Do coastal NC homes need special solar engineering?',
        answer: 'Yes, coastal areas require hurricane wind engineering, typically 130-150 mph ratings depending on location. We provide engineered designs with reinforced mounting and proper attachment for coastal installations.'
      },
      {
        question: 'What permits are required for solar in NC?',
        answer: 'North Carolina requires building permits with PE-stamped plans for solar installations. Electrical permits are also required. We provide complete permit packages with Professional Engineer stamps from NC-licensed engineers.'
      }
    ],
    utilityCompanies: [
      'Duke Energy Carolinas',
      'Duke Energy Progress',
      'Dominion Energy North Carolina',
      'Piedmont EMC',
      'Blue Ridge Energy',
      'Cape Hatteras Electric Cooperative'
    ]
  },

  'new-york': {
    name: 'New York',
    slug: 'new-york',
    abbreviation: 'NY',
    specialRequirement: 'snow load and roof penetration waterproofing',
    systemsDesigned: '623',
    topIncentive: 'NY-Sun Incentive and property tax abatement',
    climate: 'four-season continental',
    specialConsideration: 'Snow loads critical for roof design. Excellent state incentives. High electricity rates make ROI attractive.',
    homeownerCount: '2,450',
    incentiveCount: '11',
    avgElectricRate: '$0.21/kWh',
    avgSystemSize: '7.8 kW',
    avgSavings: '$2,140/year',
    coordinates: {
      lat: 43.2994,
      lng: -74.2179
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'NY-Sun Incentive',
        description: 'State incentive for solar installations (varies by region and utility)',
        value: '$0.20-$0.40/W',
        expires: 'Subject to funding'
      },
      {
        name: 'Property Tax Abatement',
        description: '100% property tax exemption for solar installations',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Sales Tax Exemption',
        description: 'Solar equipment exempt from state and local sales tax',
        value: '8% Savings',
        expires: 'Ongoing'
      },
      {
        name: 'Net Metering',
        description: 'Full retail rate net metering with monthly rollover',
        value: 'Retail Rate Credits',
        expires: 'Ongoing'
      },
      {
        name: 'Renewable Energy Credits',
        description: 'Earn credits for solar production in some regions',
        value: 'SREC/NYGATS',
        expires: 'Ongoing'
      },
      {
        name: 'Low-Income Solar',
        description: 'Additional incentives for low-to-moderate income households',
        value: 'Up to $1.00/W',
        expires: 'Ongoing'
      }
    ],
    majorCities: [
      { name: 'New York City', systemsCompleted: '234', population: '8.3M' },
      { name: 'Buffalo', systemsCompleted: '87', population: '276K' },
      { name: 'Rochester', systemsCompleted: '76', population: '211K' },
      { name: 'Syracuse', systemsCompleted: '65', population: '148K' },
      { name: 'Albany', systemsCompleted: '54', population: '99K' },
      { name: 'Long Island', systemsCompleted: '143', population: '2.8M' }
    ],
    testimonials: [
      {
        name: 'Jonathan Berg',
        location: 'Buffalo, NY',
        system: '8.2 kW with Snow Guards',
        quote: 'Buffalo gets serious snow! The engineering included 70 psf snow load rating and proper snow guards. NY-Sun incentive plus high ConEd rates = great ROI.',
        rating: 5,
        savingsAmount: '$2,240/year'
      },
      {
        name: 'Michelle Santos',
        location: 'Long Island, NY',
        system: '7.4 kW Rooftop',
        quote: 'LIPA rates are crazy high. Solar cut our bills by 80%. The PE stamp and complete permit package made approval smooth. Already recommended to three neighbors!',
        rating: 5,
        savingsAmount: '$2,180/year'
      },
      {
        name: 'Robert Chen',
        location: 'Syracuse, NY',
        system: '9.1 kW Ground Mount',
        quote: 'National Grid\'s net metering is excellent. The state incentive plus federal credit covered nearly half the cost. Engineering was first-rate and installation went perfectly.',
        rating: 5,
        savingsAmount: '$1,960/year'
      }
    ],
    faqs: [
      {
        question: 'Does solar work well in New York with all the snow and clouds?',
        answer: 'Yes! New York gets excellent solar production, especially in summer. While winter production is lower, high electricity rates (20-25¢/kWh) and generous incentives make NY one of the best states for solar ROI. Snow typically slides off tilted panels naturally.'
      },
      {
        question: 'What is the NY-Sun incentive?',
        answer: 'NY-Sun provides upfront incentives for solar installations, typically $0.20-0.40 per watt depending on your region and utility. Combined with federal tax credits, this can cover 40-50% of system costs. We handle all incentive applications.'
      },
      {
        question: 'Are PE stamps required for solar in New York?',
        answer: 'Yes, New York requires Professional Engineer stamps for solar installations, including structural calculations and electrical design. Our NY-licensed PEs provide complete stamped plan sets meeting all state and local code requirements.'
      },
      {
        question: 'How much snow load should my solar system handle in NY?',
        answer: 'Snow loads vary across NY from 30-70 psf depending on location. Buffalo and upstate areas require higher ratings. We design for your specific location\'s code requirements, ensuring safe, compliant installations that handle worst-case snow conditions.'
      }
    ],
    utilityCompanies: [
      'Consolidated Edison (ConEd)',
      'National Grid',
      'NYSEG (New York State Electric & Gas)',
      'Rochester Gas & Electric (RG&E)',
      'Central Hudson Gas & Electric',
      'LIPA (Long Island Power Authority)'
    ]
  },

  colorado: {
    name: 'Colorado',
    slug: 'colorado',
    abbreviation: 'CO',
    specialRequirement: 'high altitude UV exposure and snow load engineering',
    systemsDesigned: '489',
    topIncentive: 'Xcel Energy Solar Rewards',
    climate: 'high-altitude semi-arid',
    specialConsideration: 'Excellent solar resource at high altitude. Snow loads critical. Strong utility incentives and net metering.',
    homeownerCount: '1,890',
    incentiveCount: '8',
    avgElectricRate: '$0.14/kWh',
    avgSystemSize: '8.6 kW',
    avgSavings: '$1,680/year',
    coordinates: {
      lat: 39.5501,
      lng: -105.7821
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'Xcel Energy Solar Rewards',
        description: 'Upfront incentive for solar installations',
        value: 'Up to $0.08/W',
        expires: 'Subject to funding'
      },
      {
        name: 'Property Tax Exemption',
        description: 'Renewable energy equipment exempt from property taxes',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Sales Tax Exemption',
        description: 'Solar equipment exempt from state sales tax',
        value: '2.9% Savings',
        expires: 'Ongoing'
      },
      {
        name: 'Net Metering',
        description: 'Retail rate net metering with annual reconciliation',
        value: 'Retail Rate Credits',
        expires: 'Ongoing'
      },
      {
        name: 'Local Rebates',
        description: 'Many Colorado municipalities offer additional solar incentives',
        value: 'Varies by location',
        expires: 'Varies'
      }
    ],
    majorCities: [
      { name: 'Denver', systemsCompleted: '198', population: '716K' },
      { name: 'Colorado Springs', systemsCompleted: '134', population: '488K' },
      { name: 'Aurora', systemsCompleted: '87', population: '387K' },
      { name: 'Fort Collins', systemsCompleted: '76', population: '170K' },
      { name: 'Boulder', systemsCompleted: '65', population: '108K' }
    ],
    testimonials: [
      {
        name: 'Sarah Williams',
        location: 'Denver, CO',
        system: '8.9 kW with Snow Guards',
        quote: 'Colorado sun is incredible for solar! The design handled our heavy snow load perfectly. Xcel Energy rebate plus federal credit made the economics a slam dunk.',
        rating: 5,
        savingsAmount: '$1,820/year'
      },
      {
        name: 'Mike Anderson',
        location: 'Boulder, CO',
        system: '7.7 kW Rooftop',
        quote: 'Boulder has strict building codes. The PE-stamped plans met all requirements perfectly. System produces amazingly well at our altitude. Couldn\'t be happier!',
        rating: 5,
        savingsAmount: '$1,540/year'
      },
      {
        name: 'Jennifer Martinez',
        location: 'Colorado Springs, CO',
        system: '9.4 kW Ground Mount',
        quote: 'Springs gets tons of sun and occasional heavy snow. Engineering included proper snow load calculations. Colorado Springs Utilities made interconnection easy.',
        rating: 5,
        savingsAmount: '$1,920/year'
      }
    ],
    faqs: [
      {
        question: 'How does high altitude affect solar in Colorado?',
        answer: 'Colorado\'s high altitude is actually excellent for solar! Thinner atmosphere means less solar energy absorption, resulting in 5-10% higher production than sea level. Panels also run cooler in Colorado\'s climate, improving efficiency. Colorado is one of the best solar states.'
      },
      {
        question: 'What snow loads are required for Colorado solar?',
        answer: 'Snow loads vary across Colorado from 20-60 psf depending on elevation and location. Mountain areas require higher ratings. We design for your specific location\'s code requirements and include snow guards where beneficial.'
      },
      {
        question: 'Is Xcel Energy Solar Rewards still available?',
        answer: 'Xcel periodically offers Solar Rewards incentives, though programs can fill quickly. We stay current on all available programs and help you maximize federal, state, and utility incentives for the best possible economics.'
      },
      {
        question: 'Do I need a PE stamp for solar in Colorado?',
        answer: 'Most Colorado jurisdictions require Professional Engineer stamped plans, especially for structural calculations. Our Colorado-licensed PEs provide complete stamped permit packages meeting all state and local requirements.'
      }
    ],
    utilityCompanies: [
      'Xcel Energy',
      'Black Hills Energy',
      'Colorado Springs Utilities',
      'Fort Collins Utilities',
      'Platte River Power Authority',
      'Holy Cross Energy'
    ]
  },

  massachusetts: {
    name: 'Massachusetts',
    slug: 'massachusetts',
    abbreviation: 'MA',
    specialRequirement: 'snow load engineering and roof age assessment',
    systemsDesigned: '567',
    topIncentive: 'SMART Program incentives',
    climate: 'four-season continental',
    specialConsideration: 'Outstanding state incentives. Snow loads critical. High electricity rates. Strong SREC market.',
    homeownerCount: '2,280',
    incentiveCount: '10',
    avgElectricRate: '$0.28/kWh',
    avgSystemSize: '7.9 kW',
    avgSavings: '$2,520/year',
    coordinates: {
      lat: 42.4072,
      lng: -71.3824
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'SMART Program',
        description: 'Solar Massachusetts Renewable Target - performance-based incentive',
        value: '$0.28-0.37/kWh',
        expires: '20 years'
      },
      {
        name: 'Solar Renewable Energy Credits (SRECs)',
        description: 'Earn and sell SRECs for solar production',
        value: '$200-300/SREC',
        expires: 'Ongoing'
      },
      {
        name: 'Property Tax Exemption',
        description: '100% exemption for renewable energy systems',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Sales Tax Exemption',
        description: 'Solar equipment exempt from state sales tax',
        value: '6.25% Savings',
        expires: 'Ongoing'
      },
      {
        name: 'State Tax Credit',
        description: 'Massachusetts offers a state income tax credit',
        value: 'Up to $1,000',
        expires: 'Ongoing'
      },
      {
        name: 'Net Metering',
        description: 'Retail rate net metering with annual true-up',
        value: 'Retail Rate Credits',
        expires: 'Ongoing'
      }
    ],
    majorCities: [
      { name: 'Boston', systemsCompleted: '187', population: '675K' },
      { name: 'Worcester', systemsCompleted: '98', population: '206K' },
      { name: 'Springfield', systemsCompleted: '76', population: '156K' },
      { name: 'Cambridge', systemsCompleted: '65', population: '118K' },
      { name: 'Lowell', systemsCompleted: '54', population: '115K' }
    ],
    testimonials: [
      {
        name: 'Thomas O\'Brien',
        location: 'Boston, MA',
        system: '8.4 kW Rooftop',
        quote: 'Eversource rates are brutal. SMART program plus SRECs mean our system will pay for itself in 4 years. The engineering handled our old colonial roof perfectly.',
        rating: 5,
        savingsAmount: '$2,840/year'
      },
      {
        name: 'Linda Murphy',
        location: 'Worcester, MA',
        system: '7.6 kW with Battery',
        quote: 'MA incentives are the best in the country! Federal credit, SMART, SRECs, and tax exemptions made this a no-brainer. PE-stamped plans sailed through city review.',
        rating: 5,
        savingsAmount: '$2,380/year'
      },
      {
        name: 'James Sullivan',
        location: 'Cambridge, MA',
        system: '6.8 kW Rooftop',
        quote: 'Historic home in Cambridge required careful engineering. They navigated all the historic district requirements and delivered code-compliant PE plans. System performs great!',
        rating: 5,
        savingsAmount: '$2,120/year'
      }
    ],
    faqs: [
      {
        question: 'What is the Massachusetts SMART program?',
        answer: 'SMART (Solar Massachusetts Renewable Target) provides fixed-rate payments for solar production over 10-20 years. Combined with high electricity rates and other incentives, Massachusetts offers some of the best solar economics in the nation. We help you apply and maximize SMART benefits.'
      },
      {
        question: 'How do SRECs work in Massachusetts?',
        answer: 'Solar Renewable Energy Credits (SRECs) are generated by your system and can be sold for additional income. MA SRECs typically trade for $200-300 each. A typical home system generates 8-10 SRECs per year, adding significant value to your investment.'
      },
      {
        question: 'Are PE stamps required in Massachusetts?',
        answer: 'Yes, Massachusetts requires Professional Engineer stamped plans for solar installations, including structural and electrical engineering. Our MA-licensed PEs provide complete permit packages meeting all state and local building codes.'
      },
      {
        question: 'How much snow load should solar systems handle in MA?',
        answer: 'Massachusetts snow loads typically range from 30-60 psf depending on location. Berkshire areas require higher ratings. We design for your specific location\'s code requirements, ensuring safe installations that handle worst-case snow conditions.'
      }
    ],
    utilityCompanies: [
      'Eversource Energy',
      'National Grid',
      'Unitil',
      'Cape Light Compact',
      'Municipal Light Plants (many cities)'
    ]
  },

  'new-jersey': {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbreviation: 'NJ',
    specialRequirement: 'strict electrical and fire code compliance',
    systemsDesigned: '498',
    topIncentive: 'Successor Solar Incentive (SuSI) program',
    climate: 'humid continental',
    specialConsideration: 'High electricity rates. Strong SREC market. Strict permitting requirements. Excellent state support for solar.',
    homeownerCount: '2,010',
    incentiveCount: '9',
    avgElectricRate: '$0.17/kWh',
    avgSystemSize: '8.1 kW',
    avgSavings: '$1,980/year',
    coordinates: {
      lat: 40.0583,
      lng: -74.4057
    },
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost',
        value: '30% Tax Credit',
        expires: '2032'
      },
      {
        name: 'Successor Solar Incentive (SuSI)',
        description: 'Performance-based incentive replacing SRECs',
        value: '$0.07-0.09/kWh',
        expires: '15 years'
      },
      {
        name: 'Sales Tax Exemption',
        description: 'Solar equipment exempt from state sales tax',
        value: '6.625% Savings',
        expires: 'Ongoing'
      },
      {
        name: 'Property Tax Exemption',
        description: 'Solar installations exempt from property tax increases',
        value: '100% Exemption',
        expires: 'Ongoing'
      },
      {
        name: 'Net Metering',
        description: 'Retail rate net metering with monthly rollover',
        value: 'Retail Rate Credits',
        expires: 'Ongoing'
      },
      {
        name: 'Community Solar',
        description: 'Options for residents without suitable roofs',
        value: 'Varies',
        expires: 'Ongoing'
      }
    ],
    majorCities: [
      { name: 'Newark', systemsCompleted: '134', population: '311K' },
      { name: 'Jersey City', systemsCompleted: '98', population: '292K' },
      { name: 'Paterson', systemsCompleted: '67', population: '159K' },
      { name: 'Elizabeth', systemsCompleted: '54', population: '137K' },
      { name: 'Princeton', systemsCompleted: '43', population: '31K' }
    ],
    testimonials: [
      {
        name: 'Anthony Russo',
        location: 'Princeton, NJ',
        system: '8.7 kW Rooftop',
        quote: 'PSE&G rates were killing us. SuSI program plus federal credit made solar affordable. The engineering met all of Princeton\'s strict requirements. Permit approved in one week!',
        rating: 5,
        savingsAmount: '$2,180/year'
      },
      {
        name: 'Maria Fernandez',
        location: 'Newark, NJ',
        system: '7.4 kW Rooftop',
        quote: 'NJ has the best solar policies. The PE-stamped plans included all Newark\'s electrical requirements. System producing better than promised and our bills are down 85%.',
        rating: 5,
        savingsAmount: '$1,840/year'
      },
      {
        name: 'David Kim',
        location: 'Jersey City, NJ',
        system: '9.2 kW with Battery',
        quote: 'Jersey City permitting is strict but with proper engineering it was smooth. SuSI payments provide ongoing income for 15 years. Best investment we\'ve made!',
        rating: 5,
        savingsAmount: '$2,240/year'
      }
    ],
    faqs: [
      {
        question: 'What is New Jersey\'s SuSI program?',
        answer: 'The Successor Solar Incentive (SuSI) program replaced SRECs and provides fixed payments for solar production over 15 years. Combined with high electricity rates and other incentives, NJ offers excellent solar economics. We handle all SuSI registration and applications.'
      },
      {
        question: 'Are solar permits difficult to get in NJ?',
        answer: 'New Jersey has strict but well-defined permitting requirements. With proper PE-stamped plans meeting all electrical and fire codes, permits are typically approved within 1-2 weeks. We provide complete permit packages designed for smooth approval.'
      },
      {
        question: 'Do I need a PE stamp for solar in New Jersey?',
        answer: 'Yes, New Jersey requires Professional Engineer stamped plans for solar installations. Our NJ-licensed PEs provide complete stamped plan sets meeting all state and local requirements, including NJ\'s strict electrical and fire safety codes.'
      },
      {
        question: 'How does NJ net metering work?',
        answer: 'New Jersey offers excellent net metering at full retail rates with monthly rollover and annual reconciliation. This, combined with SuSI payments, makes solar very cost-effective in NJ despite lower solar irradiance compared to sunnier states.'
      }
    ],
    utilityCompanies: [
      'PSE&G (Public Service Electric & Gas)',
      'JCP&L (Jersey Central Power & Light)',
      'Atlantic City Electric',
      'Rockland Electric Company',
      'Orange & Rockland Utilities'
    ]
  }
};

// Helper functions
export function getStateData(slug) {
  return stateData[slug] || null;
}

export function getAllStates() {
  return Object.values(stateData);
}

export function getStatesList() {
  return Object.keys(stateData).map(slug => ({
    slug,
    name: stateData[slug].name,
    abbreviation: stateData[slug].abbreviation
  }));
}

export default stateData;
