// Solar Equipment Data for DIY Solar Consultants

export const solarPanels = [
  {
    id: 'rec-alpha-pure-r',
    manufacturer: 'REC',
    model: 'Alpha Pure-R',
    power: '430W - 470W',
    powerNumeric: 470,
    efficiency: '22.3% - 22.6%',
    efficiencyNumeric: 22.6,
    technology: 'Heterojunction (HJT), zero busbar',
    performanceWarranty: '25 years',
    productWarranty: '20 years',
    warrantyNumeric: 20,
    temperatureCoefficient: '-0.26%/°C',
    tempCoeffNumeric: -0.26,
    bestFor: 'Maximum efficiency, premium installations, hot climates',
    features: [
      'Highest efficiency in residential market',
      'Excellent low-light performance',
      'Superior temperature coefficient',
      'All-black aesthetic',
      'Made in Singapore'
    ],
    priceRange: '$$',
    priceCategory: 'Premium',
    priceNumeric: 3
  },
  {
    id: 'qcells-peak-duo',
    manufacturer: 'Q CELLS',
    model: 'Q.PEAK DUO BLK-G10+',
    power: '400W - 430W',
    powerNumeric: 430,
    efficiency: '20.6% - 21.4%',
    efficiencyNumeric: 21.4,
    technology: 'Q.ANTUM, half-cut cells',
    performanceWarranty: '25 years',
    productWarranty: '12 years',
    warrantyNumeric: 12,
    temperatureCoefficient: '-0.34%/°C',
    tempCoeffNumeric: -0.34,
    bestFor: 'Balanced performance and value, residential/commercial',
    features: [
      'Excellent quality-to-price ratio',
      'Strong performance in all conditions',
      'Anti-reflective coating',
      'All-black design',
      'Made in South Korea'
    ],
    priceRange: '$$',
    priceCategory: 'Mid-Premium',
    priceNumeric: 2
  },
  {
    id: 'jinko-tiger-neo',
    manufacturer: 'Jinko',
    model: 'Tiger Neo',
    power: '420W - 445W',
    powerNumeric: 445,
    efficiency: '21.5% - 22.3%',
    efficiencyNumeric: 22.3,
    technology: 'N-type TOPCon, half-cut',
    performanceWarranty: '25 years',
    productWarranty: '12 years',
    warrantyNumeric: 12,
    temperatureCoefficient: '-0.30%/°C',
    tempCoeffNumeric: -0.30,
    bestFor: 'High performance at competitive pricing',
    features: [
      'N-type technology (higher efficiency)',
      'Excellent degradation rate (0.4%/year)',
      'Strong wind/snow load rating',
      'Great value',
      'Made in China/Malaysia'
    ],
    priceRange: '$',
    priceCategory: 'Value',
    priceNumeric: 1
  },
  {
    id: 'canadian-hiku7',
    manufacturer: 'Canadian Solar',
    model: 'HiKu7',
    power: '410W - 445W',
    powerNumeric: 445,
    efficiency: '21.0% - 21.6%',
    efficiencyNumeric: 21.6,
    technology: 'PERC, half-cut cells',
    performanceWarranty: '25 years',
    productWarranty: '12 years',
    warrantyNumeric: 12,
    temperatureCoefficient: '-0.35%/°C',
    tempCoeffNumeric: -0.35,
    bestFor: 'Reliable performance, proven track record',
    features: [
      'Established manufacturer',
      'Proven reliability',
      'Strong warranty support',
      'Good value',
      'Made in Canada/China'
    ],
    priceRange: '$',
    priceCategory: 'Value',
    priceNumeric: 1
  },
  {
    id: 'longi-himo6',
    manufacturer: 'Longi',
    model: 'Hi-MO 6',
    power: '425W - 450W',
    powerNumeric: 450,
    efficiency: '21.8% - 22.5%',
    efficiencyNumeric: 22.5,
    technology: 'N-type TOPCon, HPBC',
    performanceWarranty: '25 years',
    productWarranty: '12 years',
    warrantyNumeric: 12,
    temperatureCoefficient: '-0.29%/°C',
    tempCoeffNumeric: -0.29,
    bestFor: 'High efficiency at competitive price',
    features: [
      'World\'s largest solar manufacturer',
      'Advanced N-type technology',
      'Excellent temperature coefficient',
      'Proven quality control',
      'Made in China'
    ],
    priceRange: '$',
    priceCategory: 'Value',
    priceNumeric: 1
  }
];

export const stringInverters = [
  {
    id: 'solaredge-hdwave',
    manufacturer: 'SolarEdge',
    model: 'HD-Wave',
    type: 'String Inverter',
    powerRange: '3kW - 11.4kW (residential), up to 100kW (commercial)',
    powerNumeric: 11.4,
    efficiency: '99%',
    efficiencyNumeric: 99,
    warranty: '12 years (extendable to 25 years)',
    warrantyNumeric: 12,
    monitoring: 'Built-in, panel-level (with optimizers)',
    bestFor: 'Residential/commercial, works with optimizers',
    features: [
      'Industry-leading efficiency',
      'Integrated rapid shutdown',
      'DC-coupled battery ready',
      'Excellent monitoring platform',
      'Fixed voltage architecture'
    ],
    requires: 'SolarEdge P-Series optimizers (one per panel)',
    priceRange: '$$',
    priceCategory: 'Mid-Premium',
    priceNumeric: 2
  },
  {
    id: 'sma-sunnyboy',
    manufacturer: 'SMA',
    model: 'Sunny Boy',
    type: 'String Inverter',
    powerRange: '3kW - 7.7kW (residential)',
    powerNumeric: 7.7,
    efficiency: '97.5% - 98%',
    efficiencyNumeric: 98,
    warranty: '10 years (extendable to 20 years)',
    warrantyNumeric: 10,
    monitoring: 'Sunny Portal (string-level)',
    bestFor: 'Simple installations, proven reliability',
    features: [
      'German engineering',
      'Extremely reliable',
      'Built-in arc-fault detection',
      'Wide MPPT voltage range',
      'OptiTrac technology'
    ],
    priceRange: '$$',
    priceCategory: 'Mid-Premium',
    priceNumeric: 2
  },
  {
    id: 'fronius-primo-symo',
    manufacturer: 'Fronius',
    model: 'Primo/Symo',
    type: 'String Inverter',
    powerRange: 'Primo: 3-8.2kW, Symo: 10-24kW',
    powerNumeric: 24,
    efficiency: '97% - 98%',
    efficiencyNumeric: 98,
    warranty: '10 years (extendable to 20 years)',
    warrantyNumeric: 10,
    monitoring: 'Solar.web (string-level)',
    bestFor: 'Residential and commercial',
    features: [
      'Austrian quality',
      'SnapINverter design (easy mounting)',
      'Dynamic peak manager',
      'Integrated arc-fault detection',
      'WiFi and Ethernet'
    ],
    priceRange: '$$',
    priceCategory: 'Mid-Premium',
    priceNumeric: 2
  }
];

export const microinverters = [
  {
    id: 'enphase-iq8',
    manufacturer: 'Enphase',
    model: 'IQ8 Series',
    type: 'Microinverter',
    models: 'IQ8M (330W), IQ8+ (384W), IQ8A (480W)',
    powerNumeric: 480,
    efficiency: '97.0% - 97.5%',
    efficiencyNumeric: 97.5,
    warranty: '25 years',
    warrantyNumeric: 25,
    monitoring: 'Enlighten (panel-level, real-time)',
    bestFor: 'Complex roofs, shading, maximum monitoring',
    features: [
      'Industry-leading warranty',
      'Panel-level optimization',
      'Grid-forming technology',
      'Sunlight backup capability',
      'Rapid shutdown built-in',
      'Easy expansion'
    ],
    priceRange: '$$',
    priceCategory: 'Premium',
    priceNumeric: 3
  },
  {
    id: 'apsystems-ds3',
    manufacturer: 'APsystems',
    model: 'DS3',
    type: 'Microinverter',
    models: 'Dual microinverter (2 panels)',
    maxInput: '880W total',
    powerNumeric: 880,
    efficiency: '97.3%',
    efficiencyNumeric: 97.3,
    warranty: '15 years (extendable to 20)',
    warrantyNumeric: 15,
    monitoring: 'EMA Manager (panel-level)',
    bestFor: 'Cost-conscious microinverter installations',
    features: [
      'Dual configuration (lower cost than single micros)',
      'Good efficiency',
      'Reliable performance',
      'Rapid shutdown compliant'
    ],
    priceRange: '$$',
    priceCategory: 'Mid-Range',
    priceNumeric: 2
  }
];

export const powerOptimizers = [
  {
    id: 'solaredge-pseries',
    manufacturer: 'SolarEdge',
    model: 'P-Series Optimizers',
    type: 'Power Optimizer',
    models: 'P370, P401, P485, P505, P600, P700, P800, P950',
    efficiency: '99.5%',
    efficiencyNumeric: 99.5,
    warranty: '25 years',
    warrantyNumeric: 25,
    bestFor: 'Use with SolarEdge inverters',
    features: [
      'Panel-level monitoring',
      'Module-level MPPT',
      'Integrated rapid shutdown',
      'Shade mitigation',
      'Flexible design'
    ],
    required: 'Must use with SolarEdge inverter',
    priceRange: '$',
    priceCategory: 'Per panel',
    priceNumeric: 1
  },
  {
    id: 'tigo-ts4',
    manufacturer: 'Tigo',
    model: 'TS4',
    type: 'Power Optimizer',
    models: 'TS4-A-O (optimization), TS4-A-S (shutdown only)',
    efficiency: '99.5%',
    efficiencyNumeric: 99.5,
    warranty: '25 years',
    warrantyNumeric: 25,
    bestFor: 'Retrofitting existing systems, selective optimization',
    features: [
      'Works with any inverter',
      'Selective deployment (only where needed)',
      'Monitoring capability',
      'Rapid shutdown',
      'Flexible solution'
    ],
    priceRange: '$',
    priceCategory: 'Per panel',
    priceNumeric: 1
  }
];

export const batteries = [
  {
    id: 'tesla-powerwall3',
    manufacturer: 'Tesla',
    model: 'Powerwall 3',
    capacity: '13.5 kWh usable',
    capacityNumeric: 13.5,
    power: '11.5 kW continuous (on-grid), 10 kW (off-grid)',
    powerNumeric: 11.5,
    warranty: '10 years',
    warrantyNumeric: 10,
    efficiency: '97.5% round-trip',
    efficiencyNumeric: 97.5,
    bestFor: 'Whole-home backup, Tesla ecosystem',
    features: [
      'Integrated solar inverter (6 inverter channels)',
      'Sleek design',
      'App-based monitoring and control',
      'Scalable (up to 4 units)',
      'Excellent software',
      'Backup gateway included'
    ],
    priceRange: '$$',
    priceCategory: 'Premium',
    priceNumeric: 3,
    priceEstimate: '$10,500 + install'
  },
  {
    id: 'enphase-iq5p',
    manufacturer: 'Enphase',
    model: 'IQ Battery 5P',
    capacity: '5.0 kWh per unit (modular)',
    capacityNumeric: 5.0,
    power: '3.84 kW continuous, 7.68 kW peak (per unit)',
    powerNumeric: 3.84,
    warranty: '15 years',
    warrantyNumeric: 15,
    efficiency: '89% round-trip',
    efficiencyNumeric: 89,
    bestFor: 'Enphase systems, modular expansion',
    features: [
      'Fully modular (stack up to 20 units)',
      'Integrated with Enphase ecosystem',
      'LFP chemistry (safer, longer life)',
      'Excellent warranty',
      'Easy expansion'
    ],
    priceRange: '$$',
    priceCategory: 'Per unit',
    priceNumeric: 2,
    priceEstimate: '$7,000 per 5kWh unit'
  },
  {
    id: 'lg-resu',
    manufacturer: 'LG Energy Solution',
    model: 'RESU',
    capacity: 'RESU10: 9.8 kWh, RESU16: 16 kWh',
    capacityNumeric: 16,
    power: '5 kW continuous, 7 kW peak',
    powerNumeric: 5,
    warranty: '10 years',
    warrantyNumeric: 10,
    efficiency: '95% round-trip',
    efficiencyNumeric: 95,
    bestFor: 'DC-coupled systems, SolarEdge',
    features: [
      'Compact design',
      'Proven reliability',
      'Works with multiple inverter brands',
      'High efficiency',
      'Good warranty'
    ],
    priceRange: '$$',
    priceCategory: 'Mid-Range',
    priceNumeric: 2,
    priceEstimate: '$8,000-$12,000'
  },
  {
    id: 'generac-pwrcell',
    manufacturer: 'Generac',
    model: 'PWRcell',
    capacity: 'Modular 9-18 kWh (3kWh modules)',
    capacityNumeric: 18,
    power: '4.5-9 kW continuous',
    powerNumeric: 9,
    warranty: '10 years',
    warrantyNumeric: 10,
    efficiency: '96% round-trip',
    efficiencyNumeric: 96,
    bestFor: 'Backup-focused, Generac ecosystem',
    features: [
      'Modular design',
      'Made in USA',
      'Smart load management',
      'Generac brand reputation',
      'Good for whole-home backup'
    ],
    priceRange: '$$',
    priceCategory: 'Mid-Range',
    priceNumeric: 2,
    priceEstimate: '$10,000-$17,000'
  }
];

export const mountingSystems = [
  {
    id: 'ironridge-xr',
    manufacturer: 'IronRidge',
    model: 'XR Rails',
    roofTypes: ['Composition shingle', 'tile', 'metal', 'flat'],
    bestFor: 'Most residential installations',
    features: [
      'Industry-leading quality',
      'Structural engineering support',
      'Wide range of attachments',
      '25-year warranty',
      'Code-compliant designs',
      'Wind/snow load calculations included'
    ],
    components: 'XR Rails, flashings, L-feet, attachments',
    warranty: '25 years',
    warrantyNumeric: 25,
    priceRange: '$$',
    priceCategory: 'Premium quality',
    priceNumeric: 2
  },
  {
    id: 'unirac-solarmount',
    manufacturer: 'Unirac',
    model: 'SolarMount',
    roofTypes: ['Composition shingle', 'tile', 'metal'],
    bestFor: 'Residential and light commercial',
    features: [
      'Easy installation',
      'Pre-assembled components',
      'Good value',
      'Reliable performance',
      '10-year warranty'
    ],
    components: 'Rails, flashings, standoffs',
    warranty: '10 years',
    warrantyNumeric: 10,
    priceRange: '$',
    priceCategory: 'Mid-range',
    priceNumeric: 1
  },
  {
    id: 'quickmount-pv',
    manufacturer: 'Quick Mount PV',
    model: 'Waterproof Flashings',
    roofTypes: ['Composition shingle primarily'],
    bestFor: 'Waterproof flashings, fast installation',
    features: [
      'Excellent flashing system',
      'No roof penetration leaks',
      'Fast installation',
      'Compatible with most rail systems',
      '25-year warranty on flashings'
    ],
    components: 'Waterproof flashings and mounts',
    warranty: '25 years',
    warrantyNumeric: 25,
    priceRange: '$$',
    priceCategory: 'Premium flashings',
    priceNumeric: 2
  },
  {
    id: 's5-metal',
    manufacturer: 'S-5!',
    model: 'Metal Roof Systems',
    roofTypes: ['Standing seam metal', 'corrugated metal'],
    bestFor: 'Metal roof installations',
    features: [
      'No roof penetrations (standing seam)',
      'Engineered for metal roofs',
      'Clamp-based attachment',
      'Extremely durable',
      'Roof warranty preserved'
    ],
    components: 'Clamps, brackets, rails',
    warranty: '25 years',
    warrantyNumeric: 25,
    priceRange: '$$',
    priceCategory: 'Specialized',
    priceNumeric: 2
  }
];

export const inverterTypeComparison = [
  {
    type: 'String',
    example: 'SolarEdge',
    warranty: '12yr',
    monitoring: 'Panel-level',
    bestFor: 'Most installs',
    cost: '$$'
  },
  {
    type: 'String',
    example: 'SMA/Fronius',
    warranty: '10yr',
    monitoring: 'String-level',
    bestFor: 'Simple roofs',
    cost: '$$'
  },
  {
    type: 'Micro',
    example: 'Enphase IQ8',
    warranty: '25yr',
    monitoring: 'Panel-level',
    bestFor: 'Complex/shade',
    cost: '$$'
  },
  {
    type: 'Micro',
    example: 'APsystems',
    warranty: '15yr',
    monitoring: 'Panel-level',
    bestFor: 'Budget micro',
    cost: '$$'
  }
];

export const batterySizingGuide = [
  {
    useCase: 'Essential loads only (8-12 hrs)',
    capacity: '10-13 kWh'
  },
  {
    useCase: 'Partial home (12-24 hrs)',
    capacity: '13-20 kWh'
  },
  {
    useCase: 'Whole home (24+ hrs)',
    capacity: '20-40+ kWh'
  },
  {
    useCase: 'Multiple days',
    capacity: '40+ kWh (multiple batteries)'
  }
];
