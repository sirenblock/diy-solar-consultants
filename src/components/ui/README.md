# Modern UI Component Library

This directory contains modern, accessible UI components for the DIY Solar Consultants website. The components are built using Radix UI primitives and styled with Tailwind CSS.

## Components

### Button

A versatile button component with multiple variants and sizes.

```jsx
import { Button } from '@/components/ui/button';

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">Icon</Button>
```

### Dialog

A modal dialog component for displaying content in an overlay.

```jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button>Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Dropdown Menu

A dropdown menu component for navigation and actions.

```jsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Options</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Tabs

A tabs component for organizing content into sections.

```jsx
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Accordion

An accordion component for collapsible content sections.

```jsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Question 2</AccordionTrigger>
    <AccordionContent>Answer 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Tooltip

A tooltip component for displaying helpful information on hover.

```jsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Helpful information</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Toast

A toast notification system for displaying temporary messages.

```jsx
import { useToast } from '@/components/ui/toast';

function MyComponent() {
  const { addToast } = useToast();

  return (
    <Button
      onClick={() =>
        addToast({
          title: 'Success!',
          description: 'Action completed successfully.',
          variant: 'success', // 'success' | 'error' | 'warning' | 'default'
          duration: 5000, // optional, default is 5000ms
        })
      }
    >
      Show Toast
    </Button>
  );
}
```

**Note:** Wrap your app with `ToastProvider` to use toasts:

```jsx
import { ToastProvider } from '@/components/ui/toast';

function App({ children }) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}
```

## QuoteDialog Component

A specialized dialog component for capturing quote requests, built with Headless UI.

```jsx
import QuoteDialog, { useQuoteDialog } from '@/components/QuoteDialog';

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

## Styling

All components use:
- **Tailwind CSS** for styling
- **Solar theme colors** (solar-50 through solar-900)
- **Energy theme colors** (energy-50 through energy-900)
- **Semantic colors** (success, warning, error)

## Accessibility

All components are built with accessibility in mind:
- Keyboard navigation support
- ARIA attributes
- Focus management
- Screen reader support

## Browser Support

These components support all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Dependencies

- `@radix-ui/react-*` - Accessible component primitives
- `@headlessui/react` - Unstyled, accessible UI components
- `lucide-react` - Icon library
- `class-variance-authority` - Variant handling
- `tailwind-merge` - Tailwind class merging
- `clsx` - Conditional classes
