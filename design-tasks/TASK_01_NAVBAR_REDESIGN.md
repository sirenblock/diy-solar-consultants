# Task 01: Modern Navigation Bar Redesign

## Objective
Redesign the navigation bar with a modern, minimal aesthetic while improving usability and mobile experience.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Design Requirements

### 1. Modern Navbar Design
- **Glass morphism effect**: Semi-transparent background with backdrop blur
- **Floating appearance**: Subtle shadow, rounded corners when scrolled
- **Minimal height**: Reduce to 64px (16rem) for cleaner look
- **Better spacing**: More breathing room between elements
- **Smooth transitions**: Animate background, shadow on scroll

### 2. Logo Redesign
- Use modern sans-serif icon or custom SVG logo
- Simplify to icon + "DIY Solar" text (remove tagline from nav)
- Scale to 40px height max
- Add subtle hover animation

### 3. Navigation Links
- **Clean typography**: Use medium weight, not bold
- **Hover effects**: Underline animation from center
- **Active state**: Subtle indicator dot or underline
- **Better spacing**: 2rem between links
- **Dropdown menus**: Modern dropdown for Services with smooth animation

### 4. CTA Button in Nav
- Single primary CTA: "Get Free Quote"
- Modern button design with gradient or solid color
- Subtle shadow and hover lift effect
- Secondary: Phone number as icon button

### 5. Mobile Menu Redesign
- Full-screen overlay menu (not slide-out drawer)
- Fade-in animation with backdrop blur
- Large, easy-to-tap links
- Beautiful hamburger → X animation
- Include contact info and social links

## Implementation Details

### Modern Header Component
```jsx
// /src/components/Header.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-solar-500 to-energy-600 rounded-xl flex items-center justify-center shadow-lg shadow-solar-500/20 group-hover:shadow-solar-500/40 transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                DIY Solar
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/equipment" className="nav-link">Equipment</Link>
              <Link href="/portfolio" className="nav-link">Portfolio</Link>
              <Link href="/pricing" className="nav-link">Pricing</Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+18885551234"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-solar-600 transition-colors rounded-lg hover:bg-gray-100"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(888) 555-1234</span>
              </a>
              <Link
                href="/design-request"
                className="px-5 py-2.5 bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-lg font-medium shadow-lg shadow-solar-600/30 hover:shadow-solar-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-white/95 backdrop-blur-lg p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link href="/about" className="mobile-nav-link">About</Link>
              <Link href="/services" className="mobile-nav-link">Services</Link>
              <Link href="/equipment" className="mobile-nav-link">Equipment</Link>
              <Link href="/portfolio" className="mobile-nav-link">Portfolio</Link>
              <Link href="/pricing" className="mobile-nav-link">Pricing</Link>
              <Link href="/contact" className="mobile-nav-link">Contact</Link>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/design-request"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-solar-600 to-energy-600 text-white text-center rounded-lg font-medium shadow-lg"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+18885551234"
                  className="mt-3 block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 text-center rounded-lg font-medium hover:border-solar-600 transition-colors"
                >
                  Call (888) 555-1234
                </a>
              </div>
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
```

### Add to globals.css
```css
/* Smooth animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
```

## Design Specifications

### Colors
- **Background (not scrolled)**: `bg-white/60` with `backdrop-blur-md`
- **Background (scrolled)**: `bg-white/80` with `backdrop-blur-lg`
- **Logo gradient**: `from-solar-500 to-energy-600`
- **CTA gradient**: `from-solar-600 to-energy-600`

### Typography
- **Logo**: `text-xl font-bold`
- **Nav links**: `font-medium` (500 weight)
- **Mobile links**: `text-2xl font-medium`

### Spacing
- **Nav height**: `h-16` (64px)
- **Link gap**: `gap-8` (2rem)
- **Button gap**: `gap-3`

### Effects
- **Glass morphism**: `backdrop-blur-lg`
- **Shadows**: `shadow-lg shadow-solar-600/30`
- **Hover lift**: `hover:-translate-y-0.5`

## Success Criteria
- ✅ Modern glass morphism effect
- ✅ Smooth scroll animations
- ✅ Beautiful mobile menu
- ✅ Improved logo design
- ✅ Better spacing and hierarchy
- ✅ Accessible keyboard navigation
- ✅ Smooth hover effects

## Testing
- Test on mobile, tablet, desktop
- Verify animations are smooth (60fps)
- Check accessibility with keyboard
- Test with reduced motion preferences
- Verify backdrop blur works on all browsers
