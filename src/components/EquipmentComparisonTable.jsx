import React, { useState, useMemo } from 'react';

const EquipmentComparisonTable = ({ data, type }) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterManufacturer, setFilterManufacturer] = useState('all');

  // Get unique manufacturers for filter
  const manufacturers = useMemo(() => {
    const uniqueMfgs = [...new Set(data.map(item => item.manufacturer))];
    return ['all', ...uniqueMfgs.sort()];
  }, [data]);

  // Filter data
  const filteredData = useMemo(() => {
    if (filterManufacturer === 'all') return data;
    return data.filter(item => item.manufacturer === filterManufacturer);
  }, [data, filterManufacturer]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortField) return filteredData;

    return [...filteredData].sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      // Handle numeric fields
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      // Handle string fields
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      return 0;
    });
  }, [filteredData, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return sortDirection === 'asc' ? (
      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  return (
    <div className="space-y-4">
      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-4 bg-gray-50 p-4 rounded-lg">
        <label className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Filter by Manufacturer:</span>
          <select
            value={filterManufacturer}
            onChange={(e) => setFilterManufacturer(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {manufacturers.map(mfg => (
              <option key={mfg} value={mfg}>
                {mfg === 'all' ? 'All Manufacturers' : mfg}
              </option>
            ))}
          </select>
        </label>

        {sortField && (
          <button
            onClick={() => {
              setSortField(null);
              setSortDirection('asc');
            }}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Clear Sort
          </button>
        )}
      </div>

      {/* Table Container - Responsive */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        {type === 'panels' && (
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                <th
                  onClick={() => handleSort('model')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Model <SortIcon field="model" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('powerNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Power <SortIcon field="powerNumeric" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('efficiencyNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Efficiency <SortIcon field="efficiencyNumeric" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Warranty
                </th>
                <th
                  onClick={() => handleSort('tempCoeffNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Temp Coeff <SortIcon field="tempCoeffNumeric" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('priceNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Price <SortIcon field="priceNumeric" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">{item.manufacturer}</div>
                    <div className="text-sm text-gray-500">{item.model}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.power}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.efficiency}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <div>{item.performanceWarranty}</div>
                    <div className="text-xs text-gray-500">{item.productWarranty} product</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.temperatureCoefficient}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      item.priceNumeric === 3 ? 'bg-purple-100 text-purple-800' :
                      item.priceNumeric === 2 ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.priceRange}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {type === 'inverters' && (
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Example
                </th>
                <th
                  onClick={() => handleSort('warranty')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Warranty <SortIcon field="warranty" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Monitoring
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Best For
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.example}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.warranty}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.monitoring}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.bestFor}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {type === 'batteries' && (
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                <th
                  onClick={() => handleSort('model')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Model <SortIcon field="model" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('capacityNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Capacity <SortIcon field="capacityNumeric" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('powerNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Power <SortIcon field="powerNumeric" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('warrantyNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Warranty <SortIcon field="warrantyNumeric" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('efficiencyNumeric')}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-1">
                    Efficiency <SortIcon field="efficiencyNumeric" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">{item.manufacturer}</div>
                    <div className="text-sm text-gray-500">{item.model}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.capacity}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.power}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.warranty}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.efficiency}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{item.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {sortedData.length} of {data.length} items
        {filterManufacturer !== 'all' && ` (filtered by ${filterManufacturer})`}
      </div>
    </div>
  );
};

export default EquipmentComparisonTable;
