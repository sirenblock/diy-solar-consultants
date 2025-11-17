import { useState } from 'react';
import { filterOptions, sortOptions } from '@/data/caseStudies';

export default function FilterBar({ onFilterChange, onSortChange }) {
  const [activeFilters, setActiveFilters] = useState({
    size: 'All',
    region: 'All',
    systemType: 'All',
    propertyType: 'All'
  });
  const [sortBy, setSortBy] = useState('recent');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    onSortChange(value);
  };

  const resetFilters = () => {
    const resetState = {
      size: 'All',
      region: 'All',
      systemType: 'All',
      propertyType: 'All'
    };
    setActiveFilters(resetState);
    setSortBy('recent');
    onFilterChange(resetState);
    onSortChange('recent');
  };

  const hasActiveFilters = Object.values(activeFilters).some(v => v !== 'All') || sortBy !== 'recent';

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg"
          >
            <span className="font-medium text-gray-700">
              Filters {hasActiveFilters && '(Active)'}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Filter Controls */}
        <div className={`${isExpanded ? 'block' : 'hidden'} lg:block space-y-4`}>
          {/* Top Row: Filter Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* System Size Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                System Size
              </label>
              <select
                value={activeFilters.size}
                onChange={(e) => handleFilterChange('size', e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              >
                {filterOptions.sizeCategories.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Region
              </label>
              <select
                value={activeFilters.region}
                onChange={(e) => handleFilterChange('region', e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              >
                {filterOptions.regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* System Type Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                System Type
              </label>
              <select
                value={activeFilters.systemType}
                onChange={(e) => handleFilterChange('systemType', e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              >
                {filterOptions.systemTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Property Type
              </label>
              <select
                value={activeFilters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              >
                {filterOptions.propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bottom Row: Sort & Reset */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-gray-200">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-gray-600 whitespace-nowrap">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-4 py-1.5 text-sm font-medium text-solar-600 hover:text-solar-700 hover:bg-solar-50 rounded-md transition-colors"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
