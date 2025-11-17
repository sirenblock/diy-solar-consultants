export default function CertificationShowcase({ className = '' }) {
  const certifications = [
    {
      title: 'Professional Engineer License',
      description: 'Licensed in all 50 states',
      details: 'Our PE-stamped plans meet all state and local building codes',
      icon: (
        <svg className="w-12 h-12 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'NABCEP Certified',
      description: 'Solar PV Installation Professional',
      details: 'North American Board of Certified Energy Practitioners',
      icon: (
        <svg className="w-12 h-12 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'ICC Certified',
      description: 'International Code Council',
      details: 'Residential Building Inspector & Solar PV Specialist',
      icon: (
        <svg className="w-12 h-12 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'OSHA Certified',
      description: 'Safety Standards Compliance',
      details: '30-Hour Construction Safety & Health',
      icon: (
        <svg className="w-12 h-12 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  const memberships = [
    {
      name: 'Solar Energy Industries Association (SEIA)',
      role: 'Professional Member',
      icon: (
        <svg className="w-8 h-8 text-energy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      name: 'American Solar Energy Society (ASES)',
      role: 'Active Member',
      icon: (
        <svg className="w-8 h-8 text-energy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'Better Business Bureau (BBB)',
      role: 'A+ Accredited',
      icon: (
        <svg className="w-8 h-8 text-energy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const partners = [
    { name: 'Tesla Energy', category: 'Battery Storage' },
    { name: 'Enphase', category: 'Microinverters' },
    { name: 'SolarEdge', category: 'Inverters' },
    { name: 'Canadian Solar', category: 'Solar Panels' },
    { name: 'LG Energy', category: 'Panels & Storage' },
    { name: 'SunPower', category: 'Premium Panels' }
  ];

  return (
    <div className={className}>
      {/* Main Certifications */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Licensed & Certified Professionals
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Our team holds the highest industry certifications to ensure your solar project meets all safety, code, and quality standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{cert.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-solar-600 font-semibold text-sm mb-2">{cert.description}</p>
              <p className="text-gray-600 text-sm">{cert.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Memberships */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Professional Memberships
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 flex items-start gap-4"
            >
              <div className="flex-shrink-0">{membership.icon}</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{membership.name}</h4>
                <p className="text-sm text-gray-600">{membership.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manufacturer Partners */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Authorized Equipment Partners
        </h3>
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-100 to-energy-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900 text-sm">{partner.name}</p>
                <p className="text-xs text-gray-500 mt-1">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
