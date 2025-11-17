export default function CaseStudyCard({ caseStudy, onClick }) {
  const { name, category, stats, headerImage, costs, testimonial, featured } = caseStudy;

  // Format currency
  const formatCurrency = (amount) => {
    if (typeof amount !== 'number') return amount;
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
    >
      {/* Header Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {/* Placeholder gradient since we don't have actual images */}
        <div className="absolute inset-0 bg-gradient-to-br from-solar-400 to-energy-500 opacity-80" />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 right-3 bg-energy-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

        {/* System Size Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-md">
          <span className="text-lg font-bold text-solar-600">{stats.systemSize}kW</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-solar-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-200">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Location</p>
            <p className="text-sm font-semibold text-gray-900">{stats.location}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Timeline</p>
            <p className="text-sm font-semibold text-gray-900">{stats.timeline}</p>
          </div>
          {costs.savingsPercent !== 'N/A' && (
            <>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Total Savings</p>
                <p className="text-sm font-semibold text-energy-600">
                  {formatCurrency(costs.savings)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Savings</p>
                <p className="text-sm font-semibold text-energy-600">{costs.savingsPercent}%</p>
              </div>
            </>
          )}
        </div>

        {/* System Type */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">System Type</p>
          <p className="text-sm text-gray-700 line-clamp-2">{stats.type}</p>
        </div>

        {/* Testimonial Preview */}
        {testimonial && (
          <div className="bg-gray-50 rounded-md p-3 mb-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-600 line-clamp-2 italic">
              "{testimonial.text}"
            </p>
            <p className="text-xs text-gray-500 mt-1">
              - {testimonial.author}, {testimonial.location}
            </p>
          </div>
        )}

        {/* View Details Button */}
        <button className="w-full py-2 px-4 bg-solar-50 text-solar-600 font-semibold rounded-md hover:bg-solar-100 transition-colors duration-200 group-hover:bg-solar-600 group-hover:text-white">
          View Full Case Study →
        </button>
      </div>
    </div>
  );
}
