export default function GuaranteeBadge({ variant = 'full', className = '' }) {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">100% Satisfaction Guarantee</p>
          <p className="text-xs text-gray-600">Free revisions until approved</p>
        </div>
      </div>
    );
  }

  const guarantees = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '100% Satisfaction Guarantee',
      description: 'Free revisions until you are completely satisfied with your design'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Licensed Engineer Guarantee',
      description: 'All plans stamped by licensed Professional Engineers'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Money-Back Guarantee',
      description: 'Full refund if your permit is rejected due to our design errors'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Lifetime Support',
      description: 'Free technical support for the life of your solar system'
    }
  ];

  return (
    <div className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 ${className}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Our Guarantee to You
        </h3>
        <p className="text-gray-600">
          Your satisfaction and success are our top priorities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guarantees.map((guarantee, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-green-100"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                {guarantee.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{guarantee.title}</h4>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          We stand behind our work with industry-leading guarantees because we're confident in the quality of our designs.
        </p>
      </div>
    </div>
  );
}
