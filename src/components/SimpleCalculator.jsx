import { useState } from 'react';

export default function SimpleCalculator({ type = 'system-size' }) {
  const [inputs, setInputs] = useState({
    monthlyBill: '',
    electricityRate: '0.13',
    sunHours: '5',
    systemCost: '',
    monthlySavings: '',
    criticalLoads: '',
    backupHours: ''
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const calculateSystemSize = () => {
    const monthlyBill = parseFloat(inputs.monthlyBill);
    const rate = parseFloat(inputs.electricityRate);
    const sunHours = parseFloat(inputs.sunHours);

    const monthlyUsage = monthlyBill / rate; // kWh per month
    const dailyUsage = monthlyUsage / 30; // kWh per day
    const systemSize = (dailyUsage / sunHours / 0.8).toFixed(2); // kW (with 80% efficiency)
    const annualProduction = (systemSize * sunHours * 365 * 0.8).toFixed(0);
    const annualSavings = (annualProduction * rate).toFixed(0);

    setResults({
      systemSize,
      annualProduction,
      annualSavings,
      monthlyUsage: monthlyUsage.toFixed(0),
      estimatedCost: (systemSize * 1300).toFixed(0), // $1.30/watt for DIY
      estimatedCostWithCredit: (systemSize * 1300 * 0.7).toFixed(0) // After 30% tax credit
    });
  };

  const calculatePayback = () => {
    const systemCost = parseFloat(inputs.systemCost);
    const monthlySavings = parseFloat(inputs.monthlySavings);
    const annualSavings = monthlySavings * 12;

    const paybackYears = (systemCost / annualSavings).toFixed(1);
    const lifetime25Years = (annualSavings * 25 * 1.03).toFixed(0); // With 3% rate increase
    const roi = (((lifetime25Years - systemCost) / systemCost) * 100).toFixed(0);

    setResults({
      paybackYears,
      annualSavings: annualSavings.toFixed(0),
      lifetime25Years,
      roi,
      netProfit: (lifetime25Years - systemCost).toFixed(0)
    });
  };

  const calculateBatterySize = () => {
    const criticalLoads = parseFloat(inputs.criticalLoads); // Watts
    const backupHours = parseFloat(inputs.backupHours);

    const energyNeeded = (criticalLoads * backupHours / 1000).toFixed(1); // kWh
    const recommendedSize = (energyNeeded * 1.2).toFixed(1); // 20% buffer
    const estimatedCost = (recommendedSize * 1000).toFixed(0); // ~$1000/kWh

    setResults({
      energyNeeded,
      recommendedSize,
      estimatedCost,
      numberOfPowerwalls: Math.ceil(recommendedSize / 13.5) // Powerwall is 13.5 kWh
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    switch (type) {
      case 'system-size':
        calculateSystemSize();
        break;
      case 'payback':
        calculatePayback();
        break;
      case 'battery':
        calculateBatterySize();
        break;
      default:
        calculateSystemSize();
    }
  };

  const renderCalculator = () => {
    switch (type) {
      case 'system-size':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar System Size Calculator</h3>
            <p className="text-gray-600 mb-6">Calculate the optimal system size based on your electricity usage</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Electric Bill ($)
              </label>
              <input
                type="number"
                name="monthlyBill"
                value={inputs.monthlyBill}
                onChange={handleInputChange}
                placeholder="150"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Electricity Rate ($/kWh)
              </label>
              <input
                type="number"
                step="0.01"
                name="electricityRate"
                value={inputs.electricityRate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Average Sun Hours per Day
              </label>
              <input
                type="number"
                step="0.1"
                name="sunHours"
                value={inputs.sunHours}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Typical: 3.5-6.5 hours depending on location</p>
            </div>

            {results && (
              <div className="bg-solar-50 border border-solar-200 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Your Results:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Recommended System Size:</span>
                    <span className="font-bold text-solar-600">{results.systemSize} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your Monthly Usage:</span>
                    <span className="font-semibold">{results.monthlyUsage} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Production:</span>
                    <span className="font-semibold">{results.annualProduction} kWh/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Savings:</span>
                    <span className="font-semibold text-green-600">${results.annualSavings}/year</span>
                  </div>
                  <div className="border-t border-solar-300 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Estimated DIY Cost:</span>
                      <span className="font-semibold">${parseInt(results.estimatedCost).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">After 30% Tax Credit:</span>
                      <span className="font-bold text-solar-600">${parseInt(results.estimatedCostWithCredit).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'payback':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Payback Period Calculator</h3>
            <p className="text-gray-600 mb-6">Calculate your solar investment payback period and ROI</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total System Cost (after tax credit) ($)
              </label>
              <input
                type="number"
                name="systemCost"
                value={inputs.systemCost}
                onChange={handleInputChange}
                placeholder="8500"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Electricity Savings ($)
              </label>
              <input
                type="number"
                name="monthlySavings"
                value={inputs.monthlySavings}
                onChange={handleInputChange}
                placeholder="150"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                required
              />
            </div>

            {results && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Financial Analysis:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Payback Period:</span>
                    <span className="font-bold text-green-600 text-xl">{results.paybackYears} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Savings:</span>
                    <span className="font-semibold">${parseInt(results.annualSavings).toLocaleString()}/year</span>
                  </div>
                  <div className="border-t border-green-300 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">25-Year Total Savings:</span>
                      <span className="font-bold text-green-600">${parseInt(results.lifetime25Years).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Net Profit:</span>
                      <span className="font-bold text-green-600">${parseInt(results.netProfit).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">ROI:</span>
                      <span className="font-bold text-green-600">{results.roi}%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'battery':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Battery Sizing Calculator</h3>
            <p className="text-gray-600 mb-6">Calculate the battery capacity you need for backup power</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Critical Loads (Watts)
              </label>
              <input
                type="number"
                name="criticalLoads"
                value={inputs.criticalLoads}
                onChange={handleInputChange}
                placeholder="3000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Sum of refrigerator, lights, internet, etc.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Desired Backup Duration (Hours)
              </label>
              <input
                type="number"
                name="backupHours"
                value={inputs.backupHours}
                onChange={handleInputChange}
                placeholder="8"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                required
              />
            </div>

            {results && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Battery Requirements:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Energy Needed:</span>
                    <span className="font-semibold">{results.energyNeeded} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Recommended Size (with buffer):</span>
                    <span className="font-bold text-purple-600 text-xl">{results.recommendedSize} kWh</span>
                  </div>
                  <div className="border-t border-purple-300 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Estimated Cost:</span>
                      <span className="font-semibold">${parseInt(results.estimatedCost).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Number of Powerwalls:</span>
                      <span className="font-semibold">{results.numberOfPowerwalls} × 13.5 kWh</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleCalculate}>
        {renderCalculator()}

        <button type="submit" className="w-full mt-6 btn-primary">
          Calculate Results
        </button>
      </form>
    </div>
  );
}
