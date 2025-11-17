import React from 'react';
import { comparisonFeatures } from '../data/pricingData';

export default function ComparisonTable({ packages }) {
  // Filter out consultation package for comparison
  const mainPackages = packages.filter(pkg => pkg.id !== 'consultation');

  const hasFeature = (feature, packageId) => {
    if (feature.key === 'price') {
      return null; // Handle separately
    }
    return feature.packages && feature.packages.includes(packageId);
  };

  const getFeatureNote = (feature, packageId) => {
    if (feature.note && hasFeature(feature, packageId)) {
      return feature.note;
    }
    return null;
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-4 px-6 text-left font-bold">Feature</th>
            {mainPackages.map(pkg => (
              <th key={pkg.id} className="py-4 px-6 text-center font-bold min-w-[200px]">
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price Row */}
          <tr className="border-b border-gray-200 bg-green-50">
            <td className="py-4 px-6 font-bold text-gray-900">Price</td>
            {mainPackages.map(pkg => (
              <td key={pkg.id} className="py-4 px-6 text-center">
                <div className="text-2xl font-bold text-green-600">${pkg.price}</div>
              </td>
            ))}
          </tr>

          {/* Feature Rows */}
          {comparisonFeatures.map((feature, index) => {
            if (feature.key === 'price') return null; // Already handled above

            return (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="py-4 px-6 text-gray-900">{feature.name}</td>
                {mainPackages.map(pkg => {
                  const hasIt = hasFeature(feature, pkg.id);
                  const note = getFeatureNote(feature, pkg.id);

                  return (
                    <td key={pkg.id} className="py-4 px-6 text-center">
                      {hasIt ? (
                        <div className="flex flex-col items-center">
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {note && (
                            <div className="text-xs text-gray-600 mt-1">({note})</div>
                          )}
                        </div>
                      ) : (
                        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}

          {/* Timeline Row */}
          <tr className="border-b border-gray-200 bg-gray-100">
            <td className="py-4 px-6 font-bold text-gray-900">Turnaround Time</td>
            {mainPackages.map(pkg => (
              <td key={pkg.id} className="py-4 px-6 text-center text-sm text-gray-700">
                {pkg.timeline}
              </td>
            ))}
          </tr>

          {/* Best For Row */}
          <tr className="bg-white">
            <td className="py-4 px-6 font-bold text-gray-900">Best For</td>
            {mainPackages.map(pkg => (
              <td key={pkg.id} className="py-4 px-6 text-center text-sm text-gray-700">
                {pkg.bestFor && pkg.bestFor[0]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Mobile-friendly version */}
      <div className="md:hidden space-y-4 mt-8">
        {mainPackages.map(pkg => (
          <div key={pkg.id} className="border-2 border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
            <div className="text-2xl font-bold text-green-600 mb-4">${pkg.price}</div>
            <div className="space-y-2">
              {comparisonFeatures.map((feature, index) => {
                if (feature.key === 'price') return null;
                const hasIt = hasFeature(feature, pkg.id);
                const note = getFeatureNote(feature, pkg.id);

                return (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-700">{feature.name}</span>
                    {hasIt ? (
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {note && <span className="text-xs text-gray-600 ml-1">({note})</span>}
                      </div>
                    ) : (
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
