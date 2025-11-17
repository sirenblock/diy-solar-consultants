import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/toast';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ComponentExamples() {
  const { addToast } = useToast();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Component Library Examples
          </h1>
          <p className="text-lg text-gray-600">
            Modern, accessible components for DIY Solar Consultants
          </p>
        </div>

        <div className="space-y-12">
          {/* Buttons */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </section>

          {/* Dialog */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dialog</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Solar System Details</DialogTitle>
                  <DialogDescription>
                    View detailed information about your solar system design.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-gray-700">
                    Your custom solar system includes high-efficiency panels, a state-of-the-art inverter,
                    and professional installation. Expected annual savings: $2,400.
                  </p>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Get Started</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          {/* Dropdown Menu */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dropdown Menu</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Select Option
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Solar Services</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Residential Solar</DropdownMenuItem>
                <DropdownMenuItem>Commercial Solar</DropdownMenuItem>
                <DropdownMenuItem>Solar Maintenance</DropdownMenuItem>
                <DropdownMenuItem>Battery Storage</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          {/* Tabs */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tabs</h2>
            <Tabs defaultValue="residential" className="w-full">
              <TabsList>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
              </TabsList>
              <TabsContent value="residential" className="mt-4">
                <div className="p-6 bg-solar-50 rounded-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Residential Solar Solutions
                  </h3>
                  <p className="text-gray-700">
                    Custom-designed solar systems for your home. Reduce your energy bills and
                    increase your property value with our residential solar solutions.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="commercial" className="mt-4">
                <div className="p-6 bg-energy-50 rounded-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Commercial Solar Solutions
                  </h3>
                  <p className="text-gray-700">
                    Large-scale solar installations for businesses. Reduce operating costs and
                    demonstrate your commitment to sustainability.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="industrial" className="mt-4">
                <div className="p-6 bg-success-50 rounded-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Industrial Solar Solutions
                  </h3>
                  <p className="text-gray-700">
                    Heavy-duty solar systems for industrial facilities. Maximize energy independence
                    and minimize environmental impact.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Accordion */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accordion</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How much does solar cost?</AccordionTrigger>
                <AccordionContent>
                  The cost of solar varies based on system size, location, and equipment quality.
                  On average, a residential system costs between $15,000 and $25,000 before incentives.
                  Federal tax credits can reduce this by 30%.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long do solar panels last?</AccordionTrigger>
                <AccordionContent>
                  Quality solar panels typically last 25-30 years or more. Most manufacturers offer
                  25-year performance warranties, guaranteeing at least 80% efficiency after 25 years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Will solar work on my roof?</AccordionTrigger>
                <AccordionContent>
                  Most roofs are suitable for solar panels. We evaluate factors like roof orientation,
                  shading, age, and structural integrity. South-facing roofs with minimal shade typically
                  perform best, but we can design systems for most situations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Tooltip */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tooltip</h2>
            <TooltipProvider>
              <div className="space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover for info</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-solar-100 text-solar-800 cursor-help">
                      kWh
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Kilowatt-hour: A unit of energy equal to 1,000 watts used for one hour</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </section>

          {/* Toast */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Toast Notifications</h2>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  addToast({
                    title: 'Success!',
                    description: 'Your quote request has been submitted.',
                    variant: 'success',
                  })
                }
                variant="outline"
              >
                Show Success Toast
              </Button>
              <Button
                onClick={() =>
                  addToast({
                    title: 'Error',
                    description: 'Something went wrong. Please try again.',
                    variant: 'error',
                  })
                }
                variant="outline"
              >
                Show Error Toast
              </Button>
              <Button
                onClick={() =>
                  addToast({
                    title: 'Warning',
                    description: 'Please verify your information before submitting.',
                    variant: 'warning',
                  })
                }
                variant="outline"
              >
                Show Warning Toast
              </Button>
              <Button
                onClick={() =>
                  addToast({
                    title: 'Information',
                    description: 'Your design is being processed.',
                    variant: 'default',
                  })
                }
                variant="outline"
              >
                Show Info Toast
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
