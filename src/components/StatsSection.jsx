export default function StatsSection() {
  const stats = [
    {
      number: '10,000+',
      label: 'Happy Customers',
      subtext: 'Nationwide installations'
    },
    {
      number: '$28M+',
      label: 'Total Savings Generated',
      subtext: 'For our customers'
    },
    {
      number: '50',
      label: 'States Served',
      subtext: 'Coast to coast coverage'
    },
    {
      number: '4.9/5',
      label: 'Average Rating',
      subtext: 'From 3,200+ reviews'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-solar-600 to-energy-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Numbers That Matter
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Join thousands of homeowners who have achieved energy independence with our expert guidance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg md:text-xl font-semibold text-white/95">{stat.label}</p>
              <p className="text-sm text-white/80">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Additional credibility markers */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-white/80">First-time permit approval</p>
            </div>
            <div>
              <p className="text-2xl font-bold">15+ Years</p>
              <p className="text-sm text-white/80">Industry experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">$12,800</p>
              <p className="text-sm text-white/80">Average savings vs installers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5.1 Years</p>
              <p className="text-sm text-white/80">Average payback period</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
