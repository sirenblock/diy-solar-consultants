'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import Button, { IconButton } from './Button';
import Logo from './Logo';
import { trackPhoneClick } from '@/utils/analytics';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/equipment', label: 'Equipment' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pricing', label: 'Pricing' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5'
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="group">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+18885551234"
                onClick={() => trackPhoneClick('+18885551234', 'Header - Desktop')}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-solar-600 transition-colors rounded-lg hover:bg-gray-100"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(888) 555-1234</span>
              </a>
              <Button
                href="/design-request"
                variant="primary"
                size="md"
                location="header-desktop"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              variant="ghost"
              size="md"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              icon={isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-white/95 backdrop-blur-lg p-6 animate-fade-in overflow-y-auto">
            <div className="flex flex-col gap-4">
              {/* Primary actions first - mobile optimization */}
              <div className="space-y-3 pb-6 border-gray-200">
                <a
                  href="tel:+18885551234"
                  onClick={() => trackPhoneClick('+18885551234', 'Header - Mobile')}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-lg active:scale-95 transition-transform shadow-lg shadow-blue-600/30"
                  data-location="header-mobile-phone"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (888) 555-1234</span>
                </a>
                <Button
                  href="/design-request"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  location="header-mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Button>
              </div>

              {/* Navigation links */}
              <Link
                href="/"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .nav-link {
          @apply text-gray-700 font-medium transition-all duration-200 relative;
        }
        .nav-link:hover {
          @apply text-solar-600;
        }
        .nav-link::after {
          content: '';
          @apply absolute -bottom-1 left-1/2 w-0 h-0.5 bg-solar-600 transition-all duration-200;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          @apply w-full;
        }
        .mobile-nav-link {
          @apply text-2xl font-medium text-gray-800 py-3 hover:text-solar-600 transition-colors;
        }
      `}</style>
    </>
  );
}
