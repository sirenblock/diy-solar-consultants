// State-specific solar information

export const statesData = {
  california: {
    id: 'california',
    name: 'California',
    abbreviation: 'CA',
    averageSunHours: 5.8,
    electricityRate: 0.32,
    typicalSystemCost: 15000,
    typicalSystemSize: 6.5,
    paybackPeriod: 6.8,
    permitFees: '200-500',
    permitTimeline: '2-4 weeks',
    necVersion: '2023',
    rapidShutdown: 'Required',
    peStampRequired: 'Sometimes (depends on AHJ)',
    netMetering: 'NEM 3.0 (reduced export credits)',
    fireSetbacks: 'Required (varies by AHJ)',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'SGIP (Self-Generation Incentive Program)',
        amount: 'Up to $1,000/kWh for batteries',
        type: 'State Battery Rebate'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Title 24 compliance',
      'Fire setback requirements (varies by jurisdiction)',
      'Rapid shutdown mandatory',
      'Online permit portals in most cities',
      'NEM 3.0 reduces export value (battery recommended)',
      'HOA restrictions limited by state law'
    ],
    majorUtilities: [
      'Pacific Gas & Electric (PG&E)',
      'Southern California Edison (SCE)',
      'San Diego Gas & Electric (SDG&E)',
      'Sacramento Municipal Utility District (SMUD)'
    ],
    interconnectionInfo: {
      timeline: '4-8 weeks',
      onlineApplication: true,
      requirements: 'Submit after permit approval and inspection'
    },
    resources: ['california-permitting', 'fire-setback-calculator']
  },

  florida: {
    id: 'florida',
    name: 'Florida',
    abbreviation: 'FL',
    averageSunHours: 5.6,
    electricityRate: 0.13,
    typicalSystemCost: 14500,
    typicalSystemSize: 7.0,
    paybackPeriod: 10.2,
    permitFees: '250-600',
    permitTimeline: '3-6 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'Yes (for most systems)',
    netMetering: 'Full retail rate',
    fireSetbacks: 'Not typically required',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      },
      {
        name: 'Sales Tax Exemption',
        amount: '100% exemption on equipment',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Hurricane wind load calculations required',
      'HVHZ (High Velocity Hurricane Zone) requirements in coastal areas',
      'PE seal required for most residential systems',
      'Strict structural requirements',
      'Rapid shutdown required',
      'HOA cannot prohibit solar (but can set guidelines)'
    ],
    majorUtilities: [
      'Florida Power & Light (FPL)',
      'Duke Energy Florida',
      'Tampa Electric (TECO)',
      'City of Tallahassee'
    ],
    interconnectionInfo: {
      timeline: '6-10 weeks',
      onlineApplication: 'Varies by utility',
      requirements: 'Net metering agreement required before PTO'
    },
    resources: ['florida-permitting', 'structural-calculations']
  },

  texas: {
    id: 'texas',
    name: 'Texas',
    abbreviation: 'TX',
    averageSunHours: 5.4,
    electricityRate: 0.12,
    typicalSystemCost: 13500,
    typicalSystemSize: 6.8,
    paybackPeriod: 9.5,
    permitFees: '150-400',
    permitTimeline: '2-4 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'No (typically)',
    netMetering: 'Varies by utility',
    fireSetbacks: 'Varies by jurisdiction',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Local jurisdiction requirements vary significantly',
      'No state-level solar mandate',
      'PE stamp typically not required',
      'Wind load calculations for certain areas',
      'HOA restrictions vary'
    ],
    majorUtilities: [
      'Oncor Electric Delivery',
      'CenterPoint Energy',
      'AEP Texas',
      'Austin Energy'
    ],
    interconnectionInfo: {
      timeline: '4-8 weeks',
      onlineApplication: 'Varies by utility',
      requirements: 'Deregulated market - varies by retail provider'
    },
    resources: ['texas-permitting', 'universal-permit-checklist']
  },

  newyork: {
    id: 'newyork',
    name: 'New York',
    abbreviation: 'NY',
    averageSunHours: 3.9,
    electricityRate: 0.20,
    typicalSystemCost: 16000,
    typicalSystemSize: 6.0,
    paybackPeriod: 8.5,
    permitFees: '200-500',
    permitTimeline: '3-5 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'Sometimes',
    netMetering: 'Full retail rate',
    fireSetbacks: 'Required in some jurisdictions',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'NY-Sun Incentive',
        amount: '$0.10-$0.40/watt',
        type: 'State Rebate'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      },
      {
        name: 'NY State Tax Credit',
        amount: '25% (up to $5,000)',
        type: 'State Tax Credit'
      }
    ],
    keyRequirements: [
      'NY-Sun incentive application',
      'Net metering guaranteed at retail rate',
      'Strong solar access rights',
      'SREC program participation available'
    ],
    majorUtilities: [
      'Con Edison',
      'National Grid',
      'NYSEG',
      'RG&E'
    ],
    interconnectionInfo: {
      timeline: '6-12 weeks',
      onlineApplication: true,
      requirements: 'Standardized interconnection agreement'
    },
    resources: ['newyork-permitting', 'universal-permit-checklist']
  },

  arizona: {
    id: 'arizona',
    name: 'Arizona',
    abbreviation: 'AZ',
    averageSunHours: 6.5,
    electricityRate: 0.13,
    typicalSystemCost: 13000,
    typicalSystemSize: 7.2,
    paybackPeriod: 8.8,
    permitFees: '150-350',
    permitTimeline: '2-3 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'No',
    netMetering: 'Partial credit',
    fireSetbacks: 'Varies by jurisdiction',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Excellent solar resource',
      'Net metering at reduced rate (varies by utility)',
      'No state incentives currently',
      'HOA restrictions limited by state law'
    ],
    majorUtilities: [
      'Arizona Public Service (APS)',
      'Salt River Project (SRP)',
      'Tucson Electric Power'
    ],
    interconnectionInfo: {
      timeline: '4-6 weeks',
      onlineApplication: true,
      requirements: 'Utility-specific requirements'
    },
    resources: ['arizona-permitting', 'universal-permit-checklist']
  },

  northcarolina: {
    id: 'northcarolina',
    name: 'North Carolina',
    abbreviation: 'NC',
    averageSunHours: 4.8,
    electricityRate: 0.11,
    typicalSystemCost: 14000,
    typicalSystemSize: 6.5,
    paybackPeriod: 9.8,
    permitFees: '150-400',
    permitTimeline: '2-4 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'Sometimes',
    netMetering: 'Full retail rate',
    fireSetbacks: 'Not typically required',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'Property Tax Exemption',
        amount: '80% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Strong net metering policy',
      'Good solar resource',
      'Growing solar market',
      'Relatively straightforward permitting'
    ],
    majorUtilities: [
      'Duke Energy Carolinas',
      'Duke Energy Progress',
      'Dominion Energy'
    ],
    interconnectionInfo: {
      timeline: '4-8 weeks',
      onlineApplication: 'Varies',
      requirements: 'Standard interconnection process'
    },
    resources: ['northcarolina-permitting', 'universal-permit-checklist']
  },

  nevada: {
    id: 'nevada',
    name: 'Nevada',
    abbreviation: 'NV',
    averageSunHours: 6.2,
    electricityRate: 0.12,
    typicalSystemCost: 13500,
    typicalSystemSize: 6.8,
    paybackPeriod: 9.2,
    permitFees: '150-400',
    permitTimeline: '2-4 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'Sometimes',
    netMetering: 'Full retail rate (caps may apply)',
    fireSetbacks: 'Varies',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Excellent solar resource',
      'Net metering restored (caps may apply)',
      'Solar access rights',
      'HOA restrictions limited'
    ],
    majorUtilities: [
      'NV Energy'
    ],
    interconnectionInfo: {
      timeline: '4-6 weeks',
      onlineApplication: true,
      requirements: 'Standard NV Energy process'
    },
    resources: ['nevada-permitting', 'universal-permit-checklist']
  },

  newjersey: {
    id: 'newjersey',
    name: 'New Jersey',
    abbreviation: 'NJ',
    averageSunHours: 4.2,
    electricityRate: 0.16,
    typicalSystemCost: 15500,
    typicalSystemSize: 6.2,
    paybackPeriod: 7.5,
    permitFees: '200-500',
    permitTimeline: '3-5 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'Sometimes',
    netMetering: 'Full retail rate',
    fireSetbacks: 'Varies',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'SREC Program',
        amount: '$80-90 per SREC',
        type: 'SREC Sales'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      },
      {
        name: 'Sales Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Strong SREC market',
      'Excellent incentives',
      'Net metering at retail rate',
      'Solar access rights'
    ],
    majorUtilities: [
      'PSE&G',
      'JCP&L',
      'Atlantic City Electric',
      'Rockland Electric'
    ],
    interconnectionInfo: {
      timeline: '6-10 weeks',
      onlineApplication: true,
      requirements: 'Register for SREC program'
    },
    resources: ['newjersey-permitting', 'srec-guide']
  },

  massachusetts: {
    id: 'massachusetts',
    name: 'Massachusetts',
    abbreviation: 'MA',
    averageSunHours: 4.1,
    electricityRate: 0.22,
    typicalSystemCost: 16000,
    typicalSystemSize: 6.0,
    paybackPeriod: 6.8,
    permitFees: '200-600',
    permitTimeline: '3-6 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'Sometimes',
    netMetering: 'Full retail rate',
    fireSetbacks: 'Required',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'SMART Program',
        amount: '$0.20-$0.40/kWh produced',
        type: 'State Production Incentive'
      },
      {
        name: 'State Tax Credit',
        amount: '15% (up to $1,000)',
        type: 'State Tax Credit'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'SMART program enrollment',
      'Strong solar incentives',
      'High electricity rates make solar attractive',
      'Fire setback requirements'
    ],
    majorUtilities: [
      'Eversource',
      'National Grid',
      'Unitil'
    ],
    interconnectionInfo: {
      timeline: '6-12 weeks',
      onlineApplication: true,
      requirements: 'SMART program application required'
    },
    resources: ['massachusetts-permitting', 'smart-program-guide']
  },

  colorado: {
    id: 'colorado',
    name: 'Colorado',
    abbreviation: 'CO',
    averageSunHours: 5.5,
    electricityRate: 0.13,
    typicalSystemCost: 14000,
    typicalSystemSize: 6.5,
    paybackPeriod: 9.0,
    permitFees: '150-400',
    permitTimeline: '2-4 weeks',
    necVersion: '2020',
    rapidShutdown: 'Required',
    peStampRequired: 'Sometimes',
    netMetering: 'Full retail rate',
    fireSetbacks: 'Varies',
    incentives: [
      {
        name: 'Federal Solar Tax Credit',
        amount: '30%',
        type: 'Federal Tax Credit'
      },
      {
        name: 'Xcel Energy Rebate',
        amount: '$0.30-$0.50/watt',
        type: 'Utility Rebate'
      },
      {
        name: 'Property Tax Exemption',
        amount: '100% exemption',
        type: 'Tax Exemption'
      }
    ],
    keyRequirements: [
      'Excellent solar resource',
      'Strong utility incentives (Xcel Energy)',
      'Net metering at retail rate',
      'Community solar options available'
    ],
    majorUtilities: [
      'Xcel Energy',
      'Colorado Springs Utilities',
      'Fort Collins Utilities'
    ],
    interconnectionInfo: {
      timeline: '4-8 weeks',
      onlineApplication: true,
      requirements: 'Utility-specific interconnection'
    },
    resources: ['colorado-permitting', 'xcel-solar-rewards']
  }
};

export const statesList = Object.keys(statesData).map(key => ({
  id: statesData[key].id,
  name: statesData[key].name,
  abbreviation: statesData[key].abbreviation
}));

export function getStateInfo(stateId) {
  return statesData[stateId];
}

export function getAllStates() {
  return Object.values(statesData);
}
