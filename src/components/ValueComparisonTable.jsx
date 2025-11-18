export default function ValueComparisonTable() {
  const comparisonData = [
    {
      feature: 'Typical Cost for 10kW System',
      us: '$4,000-$6,000',
      them: '$25,000-$35,000',
      highlight: true
    },
    {
      feature: 'Expert Design Included',
      us: true,
      them: true
    },
    {
      feature: 'Installation Labor',
      us: 'You choose',
      them: 'Required'
    },
    {
      feature: 'Timeline Flexibility',
      us: 'Complete control',
      them: 'Their schedule'
    },
    {
      feature: 'Equipment Choice',
      us: 'Any brand',
      them: 'Limited options'
    },
    {
      feature: 'Learning Experience',
      us: 'Full education',
      them: 'None'
    },
    {
      feature: 'Ongoing Support',
      us: 'Included',
      them: 'Limited warranty only'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
        How We&apos;re Different
      </h3>

      <div className="overflow-x-auto -mx-6 md:mx-0">
        <div className="inline-block min-w-full align-middle px-6 md:px-0">
          <table className="min-w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-3 md:p-4 font-semibold text-gray-700 text-sm md:text-base"></th>
                <th className="p-3 md:p-4 text-center">
                  <div className="bg-solar-600 text-white rounded-lg py-2 px-3 md:px-4 inline-block">
                    <p className="font-bold text-sm md:text-base">DIY Solar Consultants</p>
                  </div>
                </th>
                <th className="p-3 md:p-4 text-center text-gray-600 text-sm md:text-base">
                  Traditional Installers
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-200 ${row.highlight ? 'bg-green-50' : ''}`}
                >
                  <td className="p-3 md:p-4 font-medium text-gray-900 text-sm md:text-base">
                    {row.feature}
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    {typeof row.us === 'boolean' ? (
                      row.us ? (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className={`font-semibold text-sm md:text-base ${row.highlight ? 'text-green-600 text-lg md:text-xl' : 'text-green-600'}`}>
                        {row.us}
                      </span>
                    )}
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    {typeof row.them === 'boolean' ? (
                      row.them ? (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className={`text-gray-600 text-sm md:text-base ${row.highlight ? 'line-through' : ''}`}>
                        {row.them}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile-friendly note */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-900">
          <strong>Average savings:</strong> DIY homeowners save $15,000-$20,000 on a typical 10kW system compared to traditional installers.
        </p>
      </div>
    </div>
  );
}
