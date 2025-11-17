# Example Page Implementation: About Page

This document shows a complete example of how to implement the internal linking strategy on a single page.

## Step 1: Add Imports

**Add these imports at the top of the file:**

```jsx
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedResources from '@/components/RelatedResources'
```

**Complete import section should look like:**

```jsx
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'  // ← NEW
import Footer from '@/components/Footer'
import RelatedResources from '@/components/RelatedResources'  // ← NEW
```

---

## Step 2: Add Breadcrumbs After Header

**Find the Header component and add Breadcrumbs immediately after:**

```jsx
<Header />
<Breadcrumbs />  {/* ← NEW */}

<main className="pt-20">
  {/* Page content */}
</main>
```

---

## Step 3: Add Contextual Links in Content

### Example 1: In Introduction Paragraph

**BEFORE:**
```jsx
<p className="text-lg text-gray-700 leading-relaxed">
  At DIY Solar Consultants, we believe that going solar shouldn't mean
  sacrificing professional expertise or paying installer markups.
</p>
```

**AFTER:**
```jsx
<p className="text-lg text-gray-700 leading-relaxed">
  At DIY Solar Consultants, we believe that going solar shouldn't mean
  sacrificing professional expertise or paying installer markups. Our{' '}
  <Link href="/services" className="text-solar-600 hover:text-solar-700 underline">
    comprehensive design services
  </Link>
  {' '}provide licensed PE-stamped plans at a fraction of traditional costs, following{' '}
  <Link href="/process" className="text-solar-600 hover:text-solar-700 underline">
    our proven 4-step process
  </Link>
  .
</p>
```

### Example 2: In Services Description

**BEFORE:**
```jsx
<p className="text-gray-700">
  We provide professional solar design and permitting services
  for DIY homeowners nationwide.
</p>
```

**AFTER:**
```jsx
<p className="text-gray-700">
  We provide{' '}
  <Link href="/services#design" className="text-solar-600 hover:text-solar-700 underline">
    professional solar design
  </Link>
  {' '}and{' '}
  <Link href="/services#permitting" className="text-solar-600 hover:text-solar-700 underline">
    permitting services
  </Link>
  {' '}for DIY homeowners nationwide. View our{' '}
  <Link href="/pricing" className="text-solar-600 hover:text-solar-700 underline font-semibold">
    transparent pricing
  </Link>
  {' '}to get started.
</p>
```

### Example 3: In Team/Credentials Section

**BEFORE:**
```jsx
<p>
  Our team consists of licensed Professional Engineers (PE) and
  NABCEP-certified solar professionals with over 25 years of combined experience.
</p>
```

**AFTER:**
```jsx
<p>
  Our team consists of licensed Professional Engineers (PE) and
  NABCEP-certified solar professionals with over 25 years of combined experience
  designing systems across all 50 states. We've successfully completed{' '}
  <Link href="/portfolio" className="text-solar-600 hover:text-solar-700 underline">
    over 5,000 solar installations
  </Link>
  {' '}with a 98% first-time permit approval rate.
</p>
```

### Example 4: In CTA Section

**BEFORE:**
```jsx
<p className="text-xl mb-6">
  Ready to start your DIY solar project with professional support?
</p>
<Link href="/design-request" className="btn-primary">
  Get Started
</Link>
```

**AFTER:**
```jsx
<p className="text-xl mb-6">
  Ready to start your DIY solar project with professional support?
  Browse our{' '}
  <Link href="/services" className="text-solar-600 hover:text-solar-700 underline font-semibold">
    service offerings
  </Link>
  {' '}or{' '}
  <Link href="/pricing" className="text-solar-600 hover:text-solar-700 underline font-semibold">
    view pricing
  </Link>
  {' '}to learn more.
</p>
<Link href="/design-request" className="btn-primary">
  Request Design Quote
</Link>
```

---

## Step 4: Define Related Resources Array

**Add this before the return statement in your component:**

```jsx
export default function About() {
  // Define related resources for this page
  const relatedResources = [
    {
      title: 'Our Services',
      description: 'Discover our comprehensive solar design, permitting, and support offerings',
      href: '/services',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'How We Work',
      description: 'Learn about our proven 4-step process for DIY solar success',
      href: '/process',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Get Started',
      description: 'Request a custom solar design quote for your property',
      href: '/design-request',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* ... page content ... */}
    </>
  )
}
```

---

## Step 5: Add Related Resources Before Footer

**At the end of your main content, before Footer:**

```jsx
      {/* ... existing page sections ... */}

      </main>

      {/* Related Resources Section - NEW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RelatedResources resources={relatedResources} title="Continue Exploring" />
      </div>

      <Footer />
    </>
  )
}
```

---

## Complete Implementation Example

Here's a simplified but complete example showing all elements together:

```jsx
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import RelatedResources from '@/components/RelatedResources'

export default function About() {
  // Related resources definition
  const relatedResources = [
    {
      title: 'Our Services',
      description: 'Discover our comprehensive solar design, permitting, and support offerings',
      href: '/services'
    },
    {
      title: 'How We Work',
      description: 'Learn about our proven 4-step process for DIY solar success',
      href: '/process'
    },
    {
      title: 'Get Started',
      description: 'Request a custom solar design quote for your property',
      href: '/design-request'
    }
  ]

  return (
    <>
      <Head>
        <title>About DIY Solar Consultants | Professional Solar Design Services</title>
        {/* ... other head elements ... */}
      </Head>

      <Header />
      <Breadcrumbs />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-container bg-gradient-to-br from-solar-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Professional Solar Expertise for DIY Homeowners
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At DIY Solar Consultants, we provide{' '}
              <Link href="/services" className="text-solar-600 hover:text-solar-700 underline">
                comprehensive design services
              </Link>
              {' '}that give you professional expertise without installer markups.
              Our{' '}
              <Link href="/process" className="text-solar-600 hover:text-solar-700 underline">
                proven process
              </Link>
              {' '}ensures permit-ready plans at{' '}
              <Link href="/pricing" className="text-solar-600 hover:text-solar-700 underline font-semibold">
                transparent prices
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Mission Section with Contextual Links */}
        <section className="section-container bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe going solar should be accessible to every homeowner. By providing
              professional{' '}
              <Link href="/services#design" className="text-solar-600 hover:text-solar-700 underline">
                solar system design
              </Link>
              ,{' '}
              <Link href="/services#permitting" className="text-solar-600 hover:text-solar-700 underline">
                PE-stamped permitting
              </Link>
              , and{' '}
              <Link href="/equipment" className="text-solar-600 hover:text-solar-700 underline">
                equipment sourcing
              </Link>
              , we help DIY homeowners save 40-60% while maintaining professional standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of licensed engineers has completed{' '}
              <Link href="/portfolio" className="text-solar-600 hover:text-solar-700 underline">
                over 5,000 successful installations
              </Link>
              {' '}across all 50 states. Have questions?{' '}
              <Link href="/faq" className="text-solar-600 hover:text-solar-700 underline">
                Visit our FAQ
              </Link>
              {' '}or{' '}
              <Link href="/contact" className="text-solar-600 hover:text-solar-700 underline font-semibold">
                contact our team
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ... other sections ... */}

        {/* CTA Section with Contextual Links */}
        <section className="section-container bg-gradient-to-br from-solar-600 to-solar-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Go Solar?</h2>
            <p className="text-xl mb-8 text-solar-100">
              Explore our{' '}
              <Link href="/services" className="text-white hover:text-solar-200 underline font-semibold">
                comprehensive services
              </Link>
              , review{' '}
              <Link href="/pricing" className="text-white hover:text-solar-200 underline font-semibold">
                transparent pricing
              </Link>
              , or request a custom design quote.
            </p>
            <Link href="/design-request" className="btn-primary bg-white text-solar-700 hover:bg-solar-50">
              Request Design Quote
            </Link>
          </div>
        </section>
      </main>

      {/* Related Resources - Before Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RelatedResources resources={relatedResources} title="Continue Exploring" />
      </div>

      <Footer />
    </>
  )
}
```

---

## Key Points Summary

### ✅ Contextual Link Checklist:
- Use descriptive anchor text (not "click here")
- Add 3-5 links per major section
- Link to related content naturally
- Use consistent styling classes
- Make links relevant to surrounding text

### ✅ Styling Classes:
- Standard link: `className="text-solar-600 hover:text-solar-700 underline"`
- Emphasized link: `className="text-solar-600 hover:text-solar-700 underline font-semibold"`
- Light background link: `className="text-white hover:text-solar-200 underline font-semibold"`

### ✅ Related Resources Guidelines:
- Show 2-3 most relevant pages
- Include optional icons for visual interest
- Keep descriptions concise (1 sentence)
- Place before Footer component

### ✅ Breadcrumbs:
- Add immediately after Header
- Automatically generated from URL
- No configuration needed
- Hidden on homepage automatically

---

## Testing Your Implementation

After implementing, verify:

1. **Visual Check:**
   - [ ] Breadcrumbs appear correctly
   - [ ] All links are properly styled
   - [ ] Related Resources section looks good
   - [ ] Mobile responsive

2. **Functional Check:**
   - [ ] All links navigate correctly
   - [ ] No 404 errors
   - [ ] Breadcrumbs navigate properly
   - [ ] Hover states work

3. **SEO Check:**
   - [ ] Anchor text is descriptive
   - [ ] Links are contextually relevant
   - [ ] No over-linking (not every mention is linked)
   - [ ] Natural reading flow maintained
