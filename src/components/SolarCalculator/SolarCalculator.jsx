import React, { useState, useEffect } from 'react';
import Step1EnergyUsage from './Step1EnergyUsage';
import Step2Location from './Step2Location';
import Step3RoofProperty from './Step3RoofProperty';
import Step4Goals from './Step4Goals';
import ResultsDisplay from './ResultsDisplay';
import LeadCaptureForm from './LeadCaptureForm';
import { calculateSolarSystem, getElectricityRate } from '../../utils/solarCalculations';
import { trackEvent, trackCalculatorUsage } from '@/utils/analytics';

const SolarCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [results, setResults] = useState(null);
  const [calculatorStartTime, setCalculatorStartTime] = useState(null);

  // Form inputs
  const [inputs, setInputs] = useState({
    // Step 1: Energy Usage
    usageInputType: 'bill', // 'bill' or 'kwh'
    monthlyBill: 150,
    monthlyKwh: 900,
    utilityRate: 0.14,
    customRate: false,

    // Step 2: Location
    zipCode: '',
    state: '',

    // Step 3: Roof & Property
    roofSpace: 'medium',
    roofOrientation: 'south',
    shading: 'none',

    // Step 4: Goals
    offsetPercent: 100,
    batteryOption: null, // null, 'essential', 'wholeHome', 'large'
    inverterType: 'string',
    timeline: 'researching',
  });

  // Track calculator start
  useEffect(() => {
    trackEvent('calculator_started', {
      calculator_type: 'solar_system_size'
    });
    setCalculatorStartTime(Date.now());
  }, []);

  // Update utility rate when state changes
  useEffect(() => {
    if (inputs.state && !inputs.customRate) {
      const stateRate = getElectricityRate(inputs.state);
      setInputs(prev => ({ ...prev, utilityRate: stateRate }));
    }
  }, [inputs.state, inputs.customRate]);

  // Calculate results when inputs change (if on results page)
  useEffect(() => {
    if (showResults) {
      calculateResults();
    }
  }, [showResults]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      // Track step progression
      trackEvent('calculator_step_completed', {
        calculator_type: 'solar_system_size',
        step: currentStep,
        next_step: currentStep + 1
      });

      setCurrentStep(prev => prev + 1);
    } else {
      calculateResults();
      setShowResults(true);

      // Track calculator completion
      const completionTime = calculatorStartTime ? Math.round((Date.now() - calculatorStartTime) / 1000) : 0;

      trackCalculatorUsage({
        monthly_bill: inputs.usageInputType === 'bill' ? inputs.monthlyBill : null,
        monthly_kwh: inputs.usageInputType === 'kwh' ? inputs.monthlyKwh : null,
        state: inputs.state,
        zip_code: inputs.zipCode,
        offset_percent: inputs.offsetPercent,
        has_battery: inputs.batteryOption !== null,
        battery_type: inputs.batteryOption,
        inverter_type: inputs.inverterType,
        completion_time_seconds: completionTime
      });
    }
  };

  const prevStep = () => {
    if (showResults) {
      setShowResults(false);
      setCurrentStep(4);
    } else if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const calculationInputs = {
      monthlyBill: inputs.usageInputType === 'bill' ? inputs.monthlyBill : null,
      monthlyKwh: inputs.usageInputType === 'kwh' ? inputs.monthlyKwh : null,
      utilityRate: inputs.utilityRate,
      state: inputs.state,
      offsetPercent: inputs.offsetPercent,
      roofSpace: inputs.roofSpace,
      roofOrientation: inputs.roofOrientation,
      shading: inputs.shading,
      inverterType: inputs.inverterType,
      batteryOption: inputs.batteryOption,
    };

    const calculatedResults = calculateSolarSystem(calculationInputs);
    setResults(calculatedResults);
  };

  const handleStartOver = () => {
    setShowResults(false);
    setShowLeadForm(false);
    setCurrentStep(1);
    setResults(null);
  };

  const handleGetReport = () => {
    // Track report request (high-intent action)
    trackEvent('calculator_report_requested', {
      calculator_type: 'solar_system_size',
      system_size_kw: results?.systemSize,
      estimated_cost: results?.systemCost
    });

    setShowLeadForm(true);
  };

  const handleLeadFormSubmit = (leadData) => {
    console.log('Lead captured:', leadData);

    // Track lead capture (conversion)
    trackEvent('lead_captured', {
      source: 'calculator',
      calculator_type: 'solar_system_size',
      system_size_kw: results?.systemSize,
      estimated_cost: results?.systemCost
    });

    // TODO: Send to API/email service
    alert('Thank you! We\'ll email your detailed report within 24 hours.');
    setShowLeadForm(false);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        if (inputs.usageInputType === 'bill') {
          return inputs.monthlyBill > 0 && inputs.utilityRate > 0;
        }
        return inputs.monthlyKwh > 0 && inputs.utilityRate > 0;
      case 2:
        return inputs.zipCode.length === 5 && inputs.state !== '';
      case 3:
        return inputs.roofSpace !== '';
      case 4:
        return true;
      default:
        return true;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {!showResults ? (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep
                        ? 'bg-solar-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step < currentStep ? 'bg-solar-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs md:text-sm text-gray-600">
              <span>Energy</span>
              <span>Location</span>
              <span>Property</span>
              <span>Goals</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="min-h-[400px]">
            {currentStep === 1 && (
              <Step1EnergyUsage inputs={inputs} onChange={handleInputChange} />
            )}
            {currentStep === 2 && (
              <Step2Location inputs={inputs} onChange={handleInputChange} />
            )}
            {currentStep === 3 && (
              <Step3RoofProperty inputs={inputs} onChange={handleInputChange} />
            )}
            {currentStep === 4 && (
              <Step4Goals inputs={inputs} onChange={handleInputChange} />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`px-6 py-3 rounded-lg font-semibold ${
                isStepValid()
                  ? 'bg-solar-600 text-white hover:bg-solar-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === 4 ? 'Calculate' : 'Next'}
            </button>
          </div>
        </div>
      ) : !showLeadForm ? (
        <ResultsDisplay
          results={results}
          inputs={inputs}
          onGetReport={handleGetReport}
          onStartOver={handleStartOver}
          onBack={prevStep}
        />
      ) : (
        <LeadCaptureForm
          onSubmit={handleLeadFormSubmit}
          onBack={() => setShowLeadForm(false)}
        />
      )}
    </div>
  );
};

export default SolarCalculator;
