# Task 02: Professional Footer Redesign

## Objective
Transform the footer into a modern, organized, and visually appealing section that serves as a comprehensive site map and trust builder.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Design Requirements

### 1. Modern 4-Column Layout
- Company info + logo (Column 1)
- Quick Links (Column 2)
- Services (Column 3)
- Contact + Newsletter (Column 4)
- Responsive stack on mobile

### 2. Newsletter Signup
- Modern email input with inline button
- Placeholder: "Get solar tips & updates"
- Success message after signup
- Privacy note below

### 3. Visual Design
- Dark background option: bg-gray-900
- Or gradient: from-gray-800 to-gray-900
- Light text with proper contrast
- Subtle dividers between sections
- Company logo in white/light variant

### 4. Trust Elements
- Small trust badges at bottom
- Certifications (NABCEP, Licensed PE)
- Payment/security icons if applicable
- Social proof statistics

### 5. Social Links
- Icon-only buttons with hover effects
- LinkedIn, Facebook, Twitter, YouTube
- Subtle glow effect on hover

## Implementation

```jsx
// /src/components/Footer.jsx
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-solar-400 to-energy-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">DIY Solar</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional solar design and permitting services for DIY homeowners. Save 40-60% with expert guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="social-icon"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="social-icon"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="social-icon"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="social-icon"><Youtube className="w-5 h-5" /></a>
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
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#design" className="footer-link">System Design</Link></li>
              <li><Link href="/services#permitting" className="footer-link">Permitting</Link></li>
              <li><Link href="/services#equipment" className="footer-link">Equipment Sourcing</Link></li>
              <li><Link href="/services#consulting" className="footer-link">Consulting</Link></li>
              <li><Link href="/calculator" className="footer-link">ROI Calculator</Link></li>
              <li><Link href="/resources" className="footer-link">Resources</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact + Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <form className="mb-6">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-solar-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-solar-600/50 transition-all"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Get solar tips & exclusive offers</p>
            </form>

            <div className="space-y-3">
              <a href="tel:+18885551234" className="flex items-center gap-2 footer-link">
                <Phone className="w-4 h-4" />
                <span>(888) 555-1234</span>
              </a>
              <a href="mailto:info@diysolar.com" className="flex items-center gap-2 footer-link">
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
            <span className="flex items-center gap-2">🎓 Licensed PE - 50 States</span>
            <span className="flex items-center gap-2">⚡ NABCEP Certified</span>
            <span className="flex items-center gap-2">✓ 5,000+ Systems</span>
            <span className="flex items-center gap-2">⭐ 98% Approval Rate</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 DIY Solar Consultants. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-link {
          @apply text-gray-400 hover:text-white transition-colors duration-200;
        }
        .social-icon {
          @apply w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:shadow-lg hover:shadow-solar-600/20 transition-all duration-200;
        }
      `}</style>
    </footer>
  );
}
```

## Success Criteria
- ✅ Modern 4-column responsive layout
- ✅ Newsletter signup functional
- ✅ Social media links with hover effects
- ✅ Trust badges prominently displayed
- ✅ Proper contrast ratios (WCAG AA)
- ✅ Mobile-optimized stacking
