import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudy({ title, location, systemSize, cost, savings, payback, image, slug }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>

        {/* ROI Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">System Size</p>
            <p className="text-2xl font-bold text-blue-600">{systemSize} kW</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Total Cost</p>
            <p className="text-2xl font-bold text-green-600">${cost.toLocaleString()}</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Annual Savings</p>
            <p className="text-2xl font-bold text-orange-600">${savings.toLocaleString()}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Payback Period</p>
            <p className="text-2xl font-bold text-purple-600">{payback} years</p>
          </div>
        </div>

        <Link
          href={`/portfolio#${slug}`}
          className="inline-flex items-center text-solar-600 font-semibold hover:text-solar-700 transition-colors"
        >
          Read Full Case Study
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
