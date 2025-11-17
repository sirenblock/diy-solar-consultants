export default function TrustBadges({ variant = 'horizontal', className = '' }) {
  const badges = [
    {
      icon: (
        <svg className="w-8 h-8 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: 'Licensed PE - 50 States',
      subtext: 'Professional Engineers'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: 'NABCEP Certified',
      subtext: 'Industry Gold Standard'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      text: '5,000+ Systems',
      subtext: 'Designed & Approved'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: '98% Approval Rate',
      subtext: 'First-Time Success'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-solar-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      text: 'Google 4.9★',
      subtext: '1,000+ Reviews'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      text: 'BBB A+ Rated',
      subtext: 'Accredited Business'
    },
  ];

  const gridClass = variant === 'horizontal'
    ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
    : 'grid-cols-2 md:grid-cols-3';

  return (
    <div className={`grid ${gridClass} gap-4 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="mb-2">{badge.icon}</div>
          <div className="font-bold text-gray-900 text-sm leading-tight">{badge.text}</div>
          <div className="text-xs text-gray-500 mt-1">{badge.subtext}</div>
        </div>
      ))}
    </div>
  );
}
