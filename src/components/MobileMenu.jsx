'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Primary CTAs */}
        <div className="p-6 space-y-3 border-b border-gray-200">
          <a
            href="tel:+18885551234"
            className="flex items-center justify-center gap-2 w-full bg-solar-600 text-white py-4 rounded-lg font-semibold hover:bg-solar-700 transition-colors min-h-[44px]"
            onClick={handleLinkClick}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (888) 555-1234
          </a>
          <Link
            href="/design-request"
            className="flex items-center justify-center gap-2 w-full bg-energy-600 text-white py-4 rounded-lg font-semibold hover:bg-energy-700 transition-colors min-h-[44px]"
            onClick={handleLinkClick}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Get Free Quote
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-4 px-4 text-gray-700 hover:bg-gray-100 rounded-lg text-lg font-medium transition-colors min-h-[44px] flex items-center"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
