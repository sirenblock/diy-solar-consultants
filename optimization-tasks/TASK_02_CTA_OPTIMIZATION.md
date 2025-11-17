# Task 02: Conversion-Focused CTAs & Urgency Elements

## Objective
Add strategic call-to-action buttons and urgency/scarcity elements throughout the site to maximize conversion rates.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Add Sticky CTA Bar
Create a sticky bottom bar that appears on scroll with primary CTA:
- "Get Free Quote" button
- Phone number for immediate contact
- Only shows after user scrolls 30% down page
- Hides when footer is visible
- Mobile-optimized design

### 2. Add Urgency Elements to Pricing Page
- "Limited spots available this month" banner
- "X homeowners requested quotes this week" counter
- "Special offer expires in X days" countdown
- "Only Y design slots left this month" scarcity indicator

### 3. Create Exit-Intent Popup
- Triggers when user moves cursor to leave page
- Offer: "Free Solar ROI Calculator"
- Lead capture form with email
- One-time display per session
- Mobile-friendly alternative (scroll-based trigger)

### 4. Add In-Content CTAs
Place strategic CTAs within long-form content:
- After every 2-3 paragraphs on About page
- Within service descriptions
- After testimonials
- In the middle of FAQ sections

### 5. Enhance Existing CTAs
- Make all CTAs action-oriented ("Get My Custom Design" vs "Learn More")
- Add micro-copy under buttons ("No credit card required")
- Use contrasting colors (energy-600 for primary)
- Add hover effects and animations
- Include trust signals near CTAs

### 6. Add Floating Action Button (Mobile)
- Persistent phone/contact button on mobile
- Positioned bottom-right corner
- Includes WhatsApp or SMS option
- Pulse animation to draw attention

## Implementation Details

### Components to Create
1. `/src/components/StickyCTABar.jsx`
2. `/src/components/ExitIntentPopup.jsx`
3. `/src/components/UrgencyBanner.jsx`
4. `/src/components/FloatingActionButton.jsx`
5. `/src/components/InlineCTA.jsx`

### Sticky CTA Bar Example
```jsx
import { useState, useEffect } from 'react';

export default function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 30 && scrollPercentage < 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-solar-600 text-white py-4 px-6 shadow-2xl z-50 transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="font-semibold">Ready to save 40-60% on solar installation?</p>
        <div className="flex gap-4">
          <a href="tel:+18885551234" className="btn-secondary bg-white text-solar-600">
            Call Now
          </a>
          <Link href="/design-request" className="btn-primary bg-energy-600">
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
```

### Urgency Banner Example
```jsx
export default function UrgencyBanner() {
  const spotsLeft = 7; // Could be dynamic

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 text-center">
      <p className="font-bold">
        ⚡ Limited Time: Only {spotsLeft} design slots available this month!
        <Link href="/design-request" className="underline ml-2">
          Reserve Your Spot →
        </Link>
      </p>
    </div>
  );
}
```

## Pages to Update
- **All pages**: Add StickyCTABar
- **Homepage**: Add urgency banner at top
- **Pricing**: Add multiple urgency elements
- **About**: Add inline CTAs
- **Services**: Add CTAs after each service section
- **FAQ**: Add CTAs after answer groups
- **Equipment**: Add "Get Quote" CTAs for each equipment type

## A/B Testing Recommendations
- Test different CTA copy
- Test button colors
- Test urgency message variations
- Test popup timing and triggers

## Success Criteria
- ✅ Sticky CTA bar implemented and functional
- ✅ Exit-intent popup working (desktop)
- ✅ Mobile floating action button visible
- ✅ At least 3 urgency elements on pricing page
- ✅ Inline CTAs added to long-form content
- ✅ All CTAs have action-oriented copy
- ✅ Trust signals near all major CTAs

## Analytics to Track
- Click-through rate on sticky CTA
- Exit-intent popup conversion rate
- Mobile floating button engagement
- Which CTA positions perform best

## Notes
- Don't overwhelm users with too many popups
- Ensure all CTAs are keyboard accessible
- Test on multiple devices and screen sizes
- Comply with GDPR/privacy requirements for popups
