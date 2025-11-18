# Content Upgrade Usage Examples

Quick reference for adding lead magnets to your pages.

## Import the Components

```jsx
import { 
  ContentUpgrade,
  ChecklistUpgrade, 
  CalculatorUpgrade, 
  GuideUpgrade,
  ComparisonUpgrade 
} from '@/components/ContentUpgrade';
```

## Pre-Built Variants (Easiest)

### 1. Checklist Download
```jsx
<ChecklistUpgrade />
```
**Result:** Blue-themed box offering the DIY Solar Guide checklist

### 2. Calculator Download
```jsx
<CalculatorUpgrade />
```
**Result:** Green-themed box offering the ROI Calculator

### 3. Complete Guide Download
```jsx
<GuideUpgrade />
```
**Result:** Purple-themed box offering the 97-page guide

### 4. Equipment Comparison
```jsx
<ComparisonUpgrade />
```
**Result:** Orange-themed box offering the equipment comparison guide

## Compact Versions (Inline CTAs)

```jsx
<ChecklistUpgrade compact={true} />
<CalculatorUpgrade compact={true} />
```

## Custom Content Upgrades

### Example 1: Custom Checklist
```jsx
<ContentUpgrade
  type="checklist"
  title="Battery Storage Checklist"
  description="Get our complete battery sizing and installation checklist"
  features={[
    'Battery capacity calculations',
    'Wiring diagrams included',
    'Safety protocols'
  ]}
  buttonText="Send Me the Checklist"
/>
```

### Example 2: Custom Calculator
```jsx
<ContentUpgrade
  type="calculator"
  title="Panel Tilt Angle Calculator"
  description="Calculate the optimal tilt angle for your solar panels"
  features={[
    'Based on your latitude',
    'Seasonal adjustments',
    'Production estimates'
  ]}
/>
```

### Example 3: Compact Custom
```jsx
<ContentUpgrade
  type="guide"
  title="Inverter Selection Guide"
  description="Choose the right inverter for your system"
  compact={true}
/>
```

## Real-World Page Examples

### Example: Blog Post About Installation

```jsx
// pages/blog/how-to-install-solar-panels.jsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChecklistUpgrade, CalculatorUpgrade } from '@/components/ContentUpgrade';

export default function InstallationGuide() {
  return (
    <>
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-20">
        <h1>How to Install Solar Panels Yourself</h1>
        
        <p>Introduction to DIY solar installation...</p>
        
        {/* Early CTA - Simple checklist */}
        <ChecklistUpgrade compact={true} />
        
        <h2>Step 1: Planning Your System</h2>
        <p>Content about planning...</p>
        
        <h2>Step 2: Calculating System Size</h2>
        <p>Content about sizing...</p>
        
        {/* Mid-article CTA - Calculator */}
        <CalculatorUpgrade />
        
        <h2>Step 3: Installation Process</h2>
        <p>Content about installation...</p>
        
        {/* End-of-article CTA - Complete guide */}
        <GuideUpgrade />
      </article>
      
      <Footer />
    </>
  );
}
```

### Example: Resource Page

```jsx
// pages/resources/equipment-guide.jsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ComparisonUpgrade } from '@/components/ContentUpgrade';

export default function EquipmentGuide() {
  return (
    <>
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1>Solar Equipment Buyer's Guide</h1>
        
        <section>
          <h2>Solar Panels</h2>
          <p>Overview of top panels...</p>
          
          {/* Contextual upgrade */}
          <ComparisonUpgrade />
        </section>
        
        <section>
          <h2>Inverters</h2>
          <p>Inverter types and features...</p>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
```

### Example: Case Study

```jsx
// pages/case-studies/texas-home.jsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContentUpgrade } from '@/components/ContentUpgrade';

export default function TexasCaseStudy() {
  return (
    <>
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-20">
        <h1>How Mike Saved $18,000 with DIY Solar in Texas</h1>
        
        <p>Mike's story...</p>
        
        {/* Custom upgrade matching the case study */}
        <ContentUpgrade
          type="guide"
          title="Want Similar Results?"
          description="Download our complete guide to DIY solar installation and start saving"
          features={[
            'Save $15,000+ on installation costs',
            'Step-by-step installation process',
            'Texas-specific permitting guide'
          ]}
          buttonText="Get the Guide"
        />
        
        <h2>System Details</h2>
        <p>Technical details...</p>
      </article>
      
      <Footer />
    </>
  );
}
```

## Strategic Placement Tips

### Blog Posts
1. **Early** (after intro): Compact version to build trust
2. **Middle** (after problem): Full version with features
3. **End** (after solution): Guide to next steps

### Resource Pages
- After overview section
- Between major sections
- End of page

### Case Studies
- After describing problem
- After showing results
- End with specific call-to-action

## Color Themes Reference

| Type | Color | Best For |
|------|-------|----------|
| `checklist` | Blue | Lists, guides, step-by-step content |
| `calculator` | Green | Tools, calculators, financial content |
| `guide` | Purple | Comprehensive guides, ebooks |
| `comparison` | Orange | Product comparisons, reviews |

## Performance Notes

- All forms submit to `/api/subscribe`
- Inline success messages (no page reload)
- Automatic Google Analytics tracking
- Mobile-optimized layouts
- Email validation included

## Testing Checklist

- [ ] Form submits successfully
- [ ] Success message appears
- [ ] Email validation works
- [ ] Mobile layout looks good
- [ ] Colors match page theme
- [ ] CTA placement feels natural
- [ ] Analytics tracking fires

## Need Help?

See full documentation in:
- `/conversion-tasks/TASK-08-IMPLEMENTATION-GUIDE.md`
- Component source: `/src/components/ContentUpgrade.jsx`
