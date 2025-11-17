import React from 'react';

const FormProgress = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, title: 'System Details', description: 'System requirements' },
    { number: 2, title: 'Roof & Mounting', description: 'Property information' },
    { number: 3, title: 'Contact & Timeline', description: 'Your information' },
  ];

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-solar-600">
            {Math.round(progressPercentage)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-solar-500 to-energy-500 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="hidden md:flex justify-between items-start">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;

          return (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                {/* Circle Indicator */}
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
                    ${
                      isCompleted
                        ? 'bg-energy-500 text-white'
                        : isActive
                        ? 'bg-solar-500 text-white ring-4 ring-solar-200'
                        : 'bg-gray-200 text-gray-500'
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>

                {/* Step Title and Description */}
                <div className="mt-3 text-center">
                  <div
                    className={`text-sm font-semibold ${
                      isActive || isCompleted ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      isActive || isCompleted ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {step.description}
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-gray-200 -mt-16 mx-2">
                  <div
                    className={`h-full transition-all duration-500 ${
                      step.number < currentStep ? 'bg-energy-500' : ''
                    }`}
                    style={{ width: step.number < currentStep ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Step Indicator */}
      <div className="md:hidden">
        <div className="flex items-center justify-center space-x-2">
          {steps.map((step) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;

            return (
              <div
                key={step.number}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-energy-500 w-3'
                      : isActive
                      ? 'bg-solar-500 w-8'
                      : 'bg-gray-300'
                  }
                `}
              ></div>
            );
          })}
        </div>
        <div className="text-center mt-4">
          <div className="text-base font-semibold text-gray-900">
            {steps[currentStep - 1].title}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {steps[currentStep - 1].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProgress;
