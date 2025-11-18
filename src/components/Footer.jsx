'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Facebook, Twitter, Linkedin, Youtube, Phone, Mail, ShieldCheck, Star, CheckCircle } from 'lucide-react'
import { trackPhoneClick, trackEmailClick } from '@/utils/analytics'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-solar-400 to-energy-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">DIY Solar</span>
                  <span className="text-xl font-medium text-gray-300">Consultants</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional solar design and permitting services for DIY homeowners. Save 40-60% with expert guidance.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
              <li><Link href="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="/calculator" className="footer-link">Solar Calculator</Link></li>
              <li><Link href="/resources" className="footer-link">Resources</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#design" className="footer-link">System Design</Link></li>
              <li><Link href="/services#permitting" className="footer-link">PE Stamping</Link></li>
              <li><Link href="/services#equipment" className="footer-link">Equipment Sourcing</Link></li>
              <li><Link href="/services#consulting" className="footer-link">Solar Consulting</Link></li>
              <li><Link href="/process" className="footer-link">Our Process</Link></li>
              <li><Link href="/equipment" className="footer-link">Equipment Guide</Link></li>
            </ul>

            {/* State Services */}
            <div className="mt-8">
              <h4 className="text-white font-semibold text-sm mb-3">Popular States</h4>
              <ul className="space-y-2">
                <li><Link href="/solar-design/california" className="footer-link text-sm">California</Link></li>
                <li><Link href="/solar-design/texas" className="footer-link text-sm">Texas</Link></li>
                <li><Link href="/solar-design/florida" className="footer-link text-sm">Florida</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact + Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-solar-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-solar-600/50 transition-all"
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed ? (
                <p className="text-sm text-energy-500 mt-2">✓ Successfully subscribed!</p>
              ) : (
                <p className="text-xs text-gray-500 mt-2">Get solar tips & exclusive offers</p>
              )}
            </form>

            <div className="space-y-3">
              <a
                href="tel:+18885551234"
                onClick={() => trackPhoneClick('+18885551234', 'Footer')}
                className="flex items-center gap-2 footer-link"
              >
                <Phone className="w-4 h-4" />
                <span>(888) 555-1234</span>
              </a>
              <a
                href="mailto:info@diysolar.com"
                onClick={() => trackEmailClick('info@diysolar.com', 'Footer')}
                className="flex items-center gap-2 footer-link"
              >
                <Mail className="w-4 h-4" />
                <span>info@diysolar.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-solar-500" />
              Licensed PE - 50 States
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5 text-energy-500" fill="currentColor" />
              NABCEP Certified
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-solar-500" />
              5,000+ Systems
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-energy-500" />
              98% Approval Rate
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} DIY Solar Consultants. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          @apply text-gray-400 hover:text-white transition-colors duration-200;
        }
        .social-icon {
          @apply w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:shadow-lg hover:shadow-solar-600/20 transition-all duration-200;
        }
      `}</style>
    </footer>
  )
}
