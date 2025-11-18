'use client';
import { useState } from 'react';
import { Phone, MessageSquare, X, Calculator } from 'lucide-react';
import Link from 'next/link';

/**
 * Floating Action Button (FAB) for mobile devices
 * Provides quick access to call, message, and calculator
 */
export default function MobileFloatingAction() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-40 lg:hidden">
      {/* Expanded action buttons */}
      {open && (
        <div className="flex flex-col gap-3 mb-3">
          {/* Calculator */}
          <Link
            href="/calculator"
            className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-600/40 active:scale-90 transition-transform animate-scale-in"
            data-location="mobile-fab-calculator"
            onClick={() => setOpen(false)}
          >
            <Calculator className="w-6 h-6" />
          </Link>

          {/* Message/Contact */}
          <Link
            href="/contact"
            className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-600/40 active:scale-90 transition-transform animate-scale-in"
            style={{ animationDelay: '50ms' }}
            data-location="mobile-fab-contact"
            onClick={() => setOpen(false)}
          >
            <MessageSquare className="w-6 h-6" />
          </Link>

          {/* Call */}
          <a
            href="tel:+18885551234"
            className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/40 active:scale-90 transition-transform animate-scale-in"
            style={{ animationDelay: '100ms' }}
            data-location="mobile-fab-phone"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      )}

      {/* Main FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gradient-to-r from-solar-600 to-energy-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-solar-600/50 active:scale-90 transition-all duration-200"
        aria-label={open ? 'Close actions' : 'Open actions'}
        aria-expanded={open}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6 animate-pulse" />
        )}
      </button>
    </div>
  );
}
