import { portfolioStats } from '@/data/caseStudies';

export default function StatsDisplay() {
  return (
    <section className="section-container bg-gradient-to-br from-solar-600 to-energy-600 text-white">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Portfolio Results at a Glance</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Proven track record of successful solar installations across the country
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold mb-2">{portfolioStats.totalSystems}</div>
          <div className="text-sm lg:text-base text-white/80">Systems Designed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold mb-2">{portfolioStats.totalStates}</div>
          <div className="text-sm lg:text-base text-white/80">States Served</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold mb-2">{portfolioStats.totalSavings}</div>
          <div className="text-sm lg:text-base text-white/80">Total Savings</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold mb-2">{portfolioStats.averageSavings}</div>
          <div className="text-sm lg:text-base text-white/80">Average Savings</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold mb-2">{portfolioStats.approvalRate}</div>
          <div className="text-sm lg:text-base text-white/80">Permit Approval</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold mb-2">{portfolioStats.longestRunning}</div>
          <div className="text-sm lg:text-base text-white/80">Years Running</div>
        </div>
      </div>

      {/* Client Satisfaction Stats */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-center mb-6">Client Satisfaction</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-3xl font-bold">{portfolioStats.clientSatisfaction.rating}</span>
              <span className="text-xl">/5</span>
            </div>
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(portfolioStats.clientSatisfaction.rating) ? 'text-yellow-400' : 'text-white/30'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm text-white/80">Average Rating</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{portfolioStats.clientSatisfaction.wouldRecommend}%</div>
            <div className="text-sm text-white/80">Would Recommend</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{portfolioStats.clientSatisfaction.completedSuccessfully}%</div>
            <div className="text-sm text-white/80">Completed Successfully</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{portfolioStats.clientSatisfaction.producingAtEstimates}%</div>
            <div className="text-sm text-white/80">Producing at Estimates</div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 pt-8 border-t border-white/20">
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Licensed PE Engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>NABCEP Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>All 50 States</span>
          </div>
        </div>
      </div>
    </section>
  );
}
