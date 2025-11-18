'use client';

import { Zap } from 'lucide-react';

export default function Logo({ className = "", showText = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 bg-gradient-to-br from-solar-500 to-energy-600 rounded-xl flex items-center justify-center shadow-lg shadow-solar-500/20 group-hover:shadow-solar-500/40 transition-shadow">
        <Zap className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              DIY Solar
            </span>
            <span className="text-xl font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Consultants
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
