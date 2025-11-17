# Component Library Integration Guide

## Overview

This project now includes a modern, accessible component library built with:
- **Radix UI** - Unstyled, accessible component primitives
- **Headless UI** - Tailwind CSS's headless component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## What's New

### UI Components (`src/components/ui/`)

1. **Button** (`button.jsx`) - Modern button component with multiple variants
2. **Dialog** (`dialog.jsx`) - Modal dialog using Radix UI
3. **Dropdown Menu** (`dropdown-menu.jsx`) - Accessible dropdown menus
4. **Tabs** (`tabs.jsx`) - Tab navigation component
5. **Accordion** (`accordion.jsx`) - Collapsible content sections
6. **Tooltip** (`tooltip.jsx`) - Helpful hover tooltips
7. **Toast** (`toast.jsx`) - Notification system

### Specialized Components

- **QuoteDialog** (`QuoteDialog.jsx`) - Custom quote request form using Headless UI
- **ComponentExamples** (`ComponentExamples.jsx`) - Live examples of all components

### Demo Page

Visit `/components-demo` to see all components in action.

## Quick Start

### 1. Using Buttons

```jsx
import { Button } from '@/components/ui/button';

// Different variants
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outlined Button</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### 2. Using Dialogs

```jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Solar System Details</DialogTitle>
          <DialogDescription>
            Your custom solar design information
          </DialogDescription>
        </DialogHeader>
        {/* Your content */}
      </DialogContent>
    </Dialog>
  );
}
```

### 3. Using the Quote Dialog

```jsx
import QuoteDialog, { useQuoteDialog } from '@/components/QuoteDialog';
import { Button } from '@/components/ui/button';

function MyPage() {
  const { isOpen, open, close } = useQuoteDialog();

  return (
    <>
      <Button onClick={open}>Get Free Quote</Button>
      <QuoteDialog isOpen={isOpen} onClose={close} />
    </>
  );
}
```

### 4. Using Tabs

```jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function ServiceTabs() {
  return (
    <Tabs defaultValue="residential">
      <TabsList>
        <TabsTrigger value="residential">Residential</TabsTrigger>
        <TabsTrigger value="commercial">Commercial</TabsTrigger>
      </TabsList>
      <TabsContent value="residential">
        Residential solar content...
      </TabsContent>
      <TabsContent value="commercial">
        Commercial solar content...
      </TabsContent>
    </Tabs>
  );
}
```

### 5. Using Accordion (FAQ)

```jsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQ() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="cost">
        <AccordionTrigger>How much does solar cost?</AccordionTrigger>
        <AccordionContent>
          Solar systems typically cost between $15,000 and $25,000...
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="lifespan">
        <AccordionTrigger>How long do panels last?</AccordionTrigger>
        <AccordionContent>
          Quality panels last 25-30 years or more...
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### 6. Using Tooltips

```jsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

function MyComponent() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span className="cursor-help">kWh</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Kilowatt-hour: A unit of energy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

### 7. Using Toast Notifications

First, wrap your app with `ToastProvider`:

```jsx
// In _app.jsx or layout
import { ToastProvider } from '@/components/ui/toast';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
```

Then use in any component:

```jsx
import { useToast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';

function MyComponent() {
  const { addToast } = useToast();

  const handleSuccess = () => {
    addToast({
      title: 'Success!',
      description: 'Your request has been submitted.',
      variant: 'success',
    });
  };

  return <Button onClick={handleSuccess}>Submit</Button>;
}
```

## Color Theming

The components use the custom solar theme colors:

- **Solar colors**: `solar-50` through `solar-900` (warm oranges)
- **Energy colors**: `energy-50` through `energy-900` (bright blues)
- **Semantic colors**: `success`, `warning`, `error`

## Accessibility Features

All components include:
- ✅ Keyboard navigation
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Screen reader support
- ✅ Proper contrast ratios

## Migration Guide

### Replacing Old Buttons

**Old:**
```jsx
<button className="bg-blue-600 text-white px-4 py-2 rounded">
  Click Me
</button>
```

**New:**
```jsx
import { Button } from '@/components/ui/button';

<Button variant="default">Click Me</Button>
```

### Replacing Old Modals

**Old:**
```jsx
{isOpen && (
  <div className="fixed inset-0 bg-black/50">
    <div className="bg-white p-6 rounded">
      Content
    </div>
  </div>
)}
```

**New:**
```jsx
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>Content</DialogContent>
</Dialog>
```

### Replacing Old Accordion

The project has both:
- **Old**: `src/components/Accordion.jsx` (custom implementation)
- **New**: `src/components/ui/accordion.jsx` (Radix UI-based)

**Migration:**
```jsx
// Old
import Accordion from '@/components/Accordion';

// New
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
```

## Best Practices

1. **Use semantic variants**: Choose button variants based on action importance
   - `default` for primary actions
   - `secondary` for alternative actions
   - `outline` for less prominent actions
   - `ghost` for subtle actions

2. **Accessibility first**: Always provide proper labels and ARIA attributes

3. **Consistent sizing**: Use the defined size variants instead of custom classes

4. **Toast for feedback**: Use toast notifications for user action feedback

5. **Tooltips for help**: Add tooltips to technical terms and icons

## Testing

The dev server runs successfully with all components:
```bash
npm run dev
```

Visit these pages to test:
- `/components-demo` - Full component showcase
- Any page with the new components integrated

## Next Steps

1. Gradually migrate existing components to use the new UI library
2. Add toast notifications to form submissions
3. Replace custom modals with the Dialog component
4. Use Tabs for organizing service sections
5. Implement tooltips for technical terminology

## Support

For issues or questions about the component library:
1. Check the component README: `src/components/ui/README.md`
2. View live examples: Visit `/components-demo`
3. Review Radix UI docs: https://www.radix-ui.com/
4. Review Headless UI docs: https://headlessui.com/

---

**Version**: 1.0.0
**Last Updated**: November 2025
