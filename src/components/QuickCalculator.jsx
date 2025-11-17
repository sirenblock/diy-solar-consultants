import { useState } from 'react';
import Link from 'next/link';

export default function QuickCalculator() {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const estimateSavings = () => {
    if (!monthlyBill) return null;

    const bill = parseFloat(monthlyBill);
    const rate = 0.13; // Average electricity rate
    const monthlyUsage = bill / rate; // kWh per month
    const dailyUsage = monthlyUsage / 30;
    const sunHours = 5; // Average
    const systemSize = (dailyUsage / sunHours / 0.8).toFixed(2);
    const annualSavings = Math.round(bill * 12 * 0.75); // 75% savings estimate
    const systemCost = Math.round(systemSize * 1300); // $1.30/watt
    const systemCostAfterCredit = Math.round(systemCost * 0.7); // After 30% tax credit
    const paybackYears = (systemCostAfterCredit / annualSavings).toFixed(1);
    const lifetime25Savings = Math.round(annualSavings * 25 * 1.03); // With 3% annual increase

    return {
      systemSize,
      annualSavings,
      systemCost,
      systemCostAfterCredit,
      paybackYears,
      lifetime25Savings,
      monthlySavings: Math.round(annualSavings / 12)
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!monthlyBill || monthlyBill < 20) {
      setError('Please enter a valid monthly bill amount');
      return;
    }

    if (!zipCode || zipCode.length !== 5) {
      setError('Please enter a valid 5-digit ZIP code');
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to API endpoint
      const response = await fetch('/api/send-roi-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          monthlyBill,
          zipCode,
          estimate: estimateSavings()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send report');
      }

      setShowResults(true);
    } catch (err) {
      console.error('Error:', err);
      setError('Sorry, there was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const results = estimateSavings();

  return (
    <div className="bg-gradient-to-br from-solar-600 via-solar-500 to-energy-500 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
      {!showResults ? (
        <>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              Calculate Your Solar Savings
            </h3>
            <p className="text-lg md:text-xl text-solar-50">
              Get a FREE personalized solar savings report sent to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Monthly Electric Bill
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 text-lg font-semibold">
                  $
                </span>
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  placeholder="150"
                  min="20"
                  className="w-full pl-10 pr-4 py-4 rounded-lg text-gray-900 text-lg font-semibold placeholder-gray-400 focus:ring-4 focus:ring-white/30 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                ZIP Code
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                placeholder="90210"
                maxLength="5"
                className="w-full px-4 py-4 rounded-lg text-gray-900 text-lg font-semibold placeholder-gray-400 focus:ring-4 focus:ring-white/30 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Email for Your FREE Report
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-4 rounded-lg text-gray-900 text-lg placeholder-gray-400 focus:ring-4 focus:ring-white/30 focus:outline-none"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-300 rounded-lg text-white text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-solar-600 font-bold py-4 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Get My FREE Solar Report'
              )}
            </button>

            <p className="text-xs text-center text-solar-50">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4">Success!</h3>
          <p className="text-xl md:text-2xl mb-8 text-solar-50">
            Check your email for your detailed solar savings report
          </p>

          {results && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    ${results.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-lg text-solar-100">Estimated Annual Savings</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {results.paybackYears}
                  </div>
                  <div className="text-lg text-solar-100">Years to Payback</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-solar-100">Recommended System Size:</span>
                  <span className="text-xl font-bold">{results.systemSize} kW</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-solar-100">Estimated Investment:</span>
                  <span className="text-xl font-bold">
                    ${results.systemCostAfterCredit.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-solar-100">25-Year Savings:</span>
                  <span className="text-xl font-bold text-green-300">
                    ${results.lifetime25Savings.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <Link
              href="/design-request"
              className="inline-block w-full bg-white text-solar-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
            >
              Get Custom Solar Design
            </Link>

            <button
              onClick={() => {
                setShowResults(false);
                setMonthlyBill('');
                setZipCode('');
                setEmail('');
              }}
              className="w-full text-white/80 hover:text-white text-sm underline"
            >
              Calculate for a different location
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
