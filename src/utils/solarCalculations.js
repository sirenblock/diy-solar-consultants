/**
 * Solar System Calculation Utilities
 * All formulas and calculations for system sizing, costs, savings, and ROI
 */

// Constants
const SYSTEM_EFFICIENCY = 0.80; // 80% typical system efficiency
const AVERAGE_PANEL_WATTAGE = 400; // Watts
const SQ_FT_PER_PANEL = 18; // Square feet including spacing
const FEDERAL_TAX_CREDIT = 0.30; // 30% through 2032
const UTILITY_RATE_INFLATION = 0.03; // 3% annual inflation
const SYSTEM_DEGRADATION = 0.005; // 0.5% per year
const SYSTEM_LIFESPAN = 25; // Years

// Cost constants (per watt)
const COSTS = {
  diy: {
    panels: { min: 0.60, max: 0.80 },
    inverterString: { min: 0.20, max: 0.30 },
    inverterMicro: { min: 0.40, max: 0.50 },
    mounting: { min: 0.15, max: 0.20 },
    bos: { min: 0.10, max: 0.15 }, // Balance of system
  },
  professional: { min: 2.50, max: 3.50 },
  design: { min: 500, max: 800 },
  permit: { min: 300, max: 600 },
  battery: {
    essential: { min: 8000, max: 12000 }, // 10-13 kWh
    wholeHome: { min: 12000, max: 18000 }, // 13-20 kWh
    large: { min: 18000, max: 30000 }, // 20+ kWh
  },
};

// Solar resource data by state (average sun hours per day)
export const SOLAR_RESOURCE_DATA = {
  AZ: { sunHours: 6.5, quality: 'Excellent' },
  CA: { sunHours: 5.8, quality: 'Excellent' },
  NV: { sunHours: 6.2, quality: 'Excellent' },
  NM: { sunHours: 6.3, quality: 'Excellent' },
  CO: { sunHours: 5.5, quality: 'Excellent' },
  TX: { sunHours: 5.3, quality: 'Good' },
  FL: { sunHours: 5.2, quality: 'Good' },
  NC: { sunHours: 5.0, quality: 'Good' },
  GA: { sunHours: 5.0, quality: 'Good' },
  UT: { sunHours: 5.6, quality: 'Excellent' },
  HI: { sunHours: 5.5, quality: 'Excellent' },
  OR: { sunHours: 4.5, quality: 'Good' },
  WA: { sunHours: 4.2, quality: 'Moderate' },
  NY: { sunHours: 4.3, quality: 'Moderate' },
  MA: { sunHours: 4.4, quality: 'Moderate' },
  NJ: { sunHours: 4.6, quality: 'Good' },
  MD: { sunHours: 4.7, quality: 'Good' },
  VA: { sunHours: 4.8, quality: 'Good' },
  PA: { sunHours: 4.4, quality: 'Moderate' },
  IL: { sunHours: 4.5, quality: 'Moderate' },
  OH: { sunHours: 4.3, quality: 'Moderate' },
  MI: { sunHours: 4.2, quality: 'Moderate' },
  WI: { sunHours: 4.4, quality: 'Moderate' },
  MN: { sunHours: 4.5, quality: 'Moderate' },
  // Default for other states
  DEFAULT: { sunHours: 4.5, quality: 'Moderate' },
};

// Average electricity rates by state ($/kWh)
export const ELECTRICITY_RATES = {
  CA: 0.26,
  HI: 0.33,
  MA: 0.23,
  CT: 0.22,
  NH: 0.20,
  NY: 0.20,
  RI: 0.21,
  VT: 0.18,
  AK: 0.23,
  ME: 0.18,
  DEFAULT: 0.14, // National average
};

/**
 * Calculate annual kWh usage from monthly bill
 */
export function calculateAnnualUsageFromBill(monthlyBill, utilityRate) {
  const monthlyKwh = monthlyBill / utilityRate;
  return monthlyKwh * 12;
}

/**
 * Calculate annual kWh usage from monthly kWh
 */
export function calculateAnnualUsageFromKwh(monthlyKwh) {
  return monthlyKwh * 12;
}

/**
 * Calculate required system size in kW
 */
export function calculateSystemSize(annualKwh, offsetPercent, sunHours, shadingFactor = 1.0) {
  const targetProduction = annualKwh * (offsetPercent / 100);
  const systemSizeKw = targetProduction / (sunHours * 365 * SYSTEM_EFFICIENCY * shadingFactor);
  return Math.round(systemSizeKw * 10) / 10; // Round to 1 decimal
}

/**
 * Apply shading factor based on shading level
 */
export function getShadingFactor(shadingLevel) {
  const factors = {
    none: 1.0,
    minimal: 0.95,
    moderate: 0.85,
    heavy: 0.70,
  };
  return factors[shadingLevel] || 1.0;
}

/**
 * Apply orientation factor
 */
export function getOrientationFactor(orientation) {
  const factors = {
    south: 1.0,
    southwest: 0.95,
    southeast: 0.95,
    east: 0.85,
    west: 0.85,
    north: 0.60,
    mixed: 0.90,
  };
  return factors[orientation] || 1.0;
}

/**
 * Calculate number of panels needed
 */
export function calculatePanelCount(systemSizeKw) {
  const systemSizeWatts = systemSizeKw * 1000;
  return Math.ceil(systemSizeWatts / AVERAGE_PANEL_WATTAGE);
}

/**
 * Calculate required roof space
 */
export function calculateRoofSpace(panelCount) {
  return panelCount * SQ_FT_PER_PANEL;
}

/**
 * Calculate annual production in kWh
 */
export function calculateAnnualProduction(systemSizeKw, sunHours, shadingFactor = 1.0, orientationFactor = 1.0) {
  return Math.round(systemSizeKw * sunHours * 365 * SYSTEM_EFFICIENCY * shadingFactor * orientationFactor);
}

/**
 * Calculate DIY equipment costs
 */
export function calculateDIYCost(systemSizeKw, inverterType = 'string', includeBattery = null) {
  const systemSizeWatts = systemSizeKw * 1000;

  // Calculate equipment costs
  const panelCost = systemSizeWatts * ((COSTS.diy.panels.min + COSTS.diy.panels.max) / 2);

  const inverterCost = inverterType === 'micro'
    ? systemSizeWatts * ((COSTS.diy.inverterMicro.min + COSTS.diy.inverterMicro.max) / 2)
    : systemSizeWatts * ((COSTS.diy.inverterString.min + COSTS.diy.inverterString.max) / 2);

  const mountingCost = systemSizeWatts * ((COSTS.diy.mounting.min + COSTS.diy.mounting.max) / 2);
  const bosCost = systemSizeWatts * ((COSTS.diy.bos.min + COSTS.diy.bos.max) / 2);

  const equipmentTotal = panelCost + inverterCost + mountingCost + bosCost;

  // Add design and permit costs
  const designCost = (COSTS.design.min + COSTS.design.max) / 2;
  const permitCost = (COSTS.permit.min + COSTS.permit.max) / 2;

  const subtotal = equipmentTotal + designCost + permitCost;

  // Add battery if selected
  let batteryCost = 0;
  if (includeBattery) {
    const batteryRange = COSTS.battery[includeBattery];
    if (batteryRange) {
      batteryCost = (batteryRange.min + batteryRange.max) / 2;
    }
  }

  const totalCost = subtotal + batteryCost;
  const taxCredit = totalCost * FEDERAL_TAX_CREDIT;
  const netCost = totalCost - taxCredit;

  return {
    equipment: Math.round(equipmentTotal),
    design: Math.round(designCost),
    permit: Math.round(permitCost),
    battery: Math.round(batteryCost),
    subtotal: Math.round(subtotal),
    batteryCost: Math.round(batteryCost),
    totalBeforeCredit: Math.round(totalCost),
    taxCredit: Math.round(taxCredit),
    netCost: Math.round(netCost),
  };
}

/**
 * Calculate professional installation cost
 */
export function calculateProfessionalCost(systemSizeKw, includeBattery = null) {
  const systemSizeWatts = systemSizeKw * 1000;
  const avgCostPerWatt = (COSTS.professional.min + COSTS.professional.max) / 2;

  let subtotal = systemSizeWatts * avgCostPerWatt;

  // Add battery if selected
  let batteryCost = 0;
  if (includeBattery) {
    const batteryRange = COSTS.battery[includeBattery];
    if (batteryRange) {
      batteryCost = (batteryRange.min + batteryRange.max) / 2;
    }
    subtotal += batteryCost;
  }

  const taxCredit = subtotal * FEDERAL_TAX_CREDIT;
  const netCost = subtotal - taxCredit;

  return {
    totalBeforeCredit: Math.round(subtotal),
    batteryCost: Math.round(batteryCost),
    taxCredit: Math.round(taxCredit),
    netCost: Math.round(netCost),
  };
}

/**
 * Calculate savings comparing DIY vs Professional
 */
export function calculateSavings(diyCost, professionalCost) {
  const savings = professionalCost.netCost - diyCost.netCost;
  const savingsPercent = (savings / professionalCost.netCost) * 100;

  return {
    savings: Math.round(savings),
    savingsPercent: Math.round(savingsPercent),
  };
}

/**
 * Calculate annual electricity savings
 */
export function calculateAnnualElectricitySavings(annualProduction, utilityRate) {
  return Math.round(annualProduction * utilityRate);
}

/**
 * Calculate payback period
 */
export function calculatePaybackPeriod(netCost, annualSavings) {
  if (annualSavings === 0) return null;
  return Math.round((netCost / annualSavings) * 10) / 10;
}

/**
 * Calculate lifetime savings over 25 years with utility rate inflation
 */
export function calculateLifetimeSavings(annualProduction, utilityRate) {
  let totalSavings = 0;
  let currentRate = utilityRate;
  let currentProduction = annualProduction;

  for (let year = 1; year <= SYSTEM_LIFESPAN; year++) {
    totalSavings += currentProduction * currentRate;
    currentRate *= (1 + UTILITY_RATE_INFLATION);
    currentProduction *= (1 - SYSTEM_DEGRADATION);
  }

  return Math.round(totalSavings);
}

/**
 * Calculate ROI percentage
 */
export function calculateROI(lifetimeSavings, netCost) {
  if (netCost === 0) return null;
  return Math.round(((lifetimeSavings - netCost) / netCost) * 100);
}

/**
 * Calculate environmental impact
 */
export function calculateEnvironmentalImpact(annualProduction) {
  // CO2 offset: ~0.92 lbs per kWh (national average)
  const co2PerKwh = 0.92 / 2000; // Convert to tons
  const annualCO2 = annualProduction * co2PerKwh;
  const lifetimeCO2 = annualCO2 * SYSTEM_LIFESPAN;

  // Trees equivalent: 1 tree absorbs ~48 lbs CO2 per year
  const treesEquivalent = Math.round((lifetimeCO2 * 2000) / (48 * SYSTEM_LIFESPAN));

  // Miles not driven: ~0.89 lbs CO2 per mile
  const milesNotDriven = Math.round((lifetimeCO2 * 2000) / 0.89);

  return {
    annualCO2Tons: Math.round(annualCO2 * 10) / 10,
    lifetimeCO2Tons: Math.round(lifetimeCO2),
    treesEquivalent,
    milesNotDriven,
  };
}

/**
 * Get cumulative savings data for charting
 */
export function getCumulativeSavingsData(annualProduction, utilityRate, netCost) {
  const data = [];
  let cumulativeSavings = -netCost; // Start with initial investment as negative
  let currentRate = utilityRate;
  let currentProduction = annualProduction;

  data.push({ year: 0, savings: Math.round(cumulativeSavings) });

  for (let year = 1; year <= SYSTEM_LIFESPAN; year++) {
    const yearSavings = currentProduction * currentRate;
    cumulativeSavings += yearSavings;

    data.push({
      year,
      savings: Math.round(cumulativeSavings),
    });

    currentRate *= (1 + UTILITY_RATE_INFLATION);
    currentProduction *= (1 - SYSTEM_DEGRADATION);
  }

  return data;
}

/**
 * Get solar resource data for a state
 */
export function getSolarResourceData(state) {
  return SOLAR_RESOURCE_DATA[state] || SOLAR_RESOURCE_DATA.DEFAULT;
}

/**
 * Get electricity rate for a state
 */
export function getElectricityRate(state) {
  return ELECTRICITY_RATES[state] || ELECTRICITY_RATES.DEFAULT;
}

/**
 * Check if roof space is adequate
 */
export function checkRoofSpaceAdequacy(requiredSpace, availableSpace) {
  const spaceCategories = {
    small: 400,
    medium: 600,
    large: 1000,
    veryLarge: Infinity,
  };

  const maxAvailable = spaceCategories[availableSpace] || 0;

  return {
    adequate: requiredSpace <= maxAvailable,
    requiredSpace,
    maxAvailable: maxAvailable === Infinity ? '1000+' : maxAvailable,
  };
}

/**
 * Main calculation function that returns all results
 */
export function calculateSolarSystem(inputs) {
  const {
    monthlyBill,
    monthlyKwh,
    utilityRate,
    state,
    offsetPercent,
    roofSpace,
    roofOrientation,
    shading,
    inverterType,
    batteryOption,
  } = inputs;

  // Calculate annual usage
  const annualUsage = monthlyKwh
    ? calculateAnnualUsageFromKwh(monthlyKwh)
    : calculateAnnualUsageFromBill(monthlyBill, utilityRate);

  // Get solar resource data
  const solarData = getSolarResourceData(state);
  const { sunHours, quality } = solarData;

  // Apply factors
  const shadingFactor = getShadingFactor(shading);
  const orientationFactor = getOrientationFactor(roofOrientation);

  // Calculate system size
  const systemSizeKw = calculateSystemSize(annualUsage, offsetPercent, sunHours, shadingFactor * orientationFactor);

  // Calculate panels and roof space
  const panelCount = calculatePanelCount(systemSizeKw);
  const requiredRoofSpace = calculateRoofSpace(panelCount);
  const roofCheck = checkRoofSpaceAdequacy(requiredRoofSpace, roofSpace);

  // Calculate production
  const annualProduction = calculateAnnualProduction(systemSizeKw, sunHours, shadingFactor, orientationFactor);
  const actualOffset = Math.round((annualProduction / annualUsage) * 100);

  // Calculate costs
  const diyCost = calculateDIYCost(systemSizeKw, inverterType, batteryOption);
  const proCost = calculateProfessionalCost(systemSizeKw, batteryOption);
  const savings = calculateSavings(diyCost, proCost);

  // Calculate savings and ROI
  const annualSavings = calculateAnnualElectricitySavings(annualProduction, utilityRate);
  const paybackPeriod = calculatePaybackPeriod(diyCost.netCost, annualSavings);
  const lifetimeSavings = calculateLifetimeSavings(annualProduction, utilityRate);
  const roi = calculateROI(lifetimeSavings, diyCost.netCost);

  // Calculate environmental impact
  const environmental = calculateEnvironmentalImpact(annualProduction);

  // Get chart data
  const savingsChartData = getCumulativeSavingsData(annualProduction, utilityRate, diyCost.netCost);

  return {
    system: {
      sizeKw: systemSizeKw,
      panelCount,
      requiredRoofSpace,
      roofCheck,
    },
    production: {
      annualKwh: annualProduction,
      offsetPercent: actualOffset,
      sunHours,
      solarQuality: quality,
    },
    costs: {
      diy: diyCost,
      professional: proCost,
      savings,
    },
    financial: {
      annualSavings,
      paybackPeriod,
      lifetimeSavings,
      roi,
    },
    environmental,
    chartData: {
      cumulativeSavings: savingsChartData,
    },
    assumptions: {
      utilityRate,
      sunHours,
      systemEfficiency: SYSTEM_EFFICIENCY,
      panelWattage: AVERAGE_PANEL_WATTAGE,
      federalTaxCredit: FEDERAL_TAX_CREDIT,
      utilityRateInflation: UTILITY_RATE_INFLATION,
      systemDegradation: SYSTEM_DEGRADATION,
      systemLifespan: SYSTEM_LIFESPAN,
      shadingFactor,
      orientationFactor,
    },
  };
}
