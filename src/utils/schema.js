/**
 * Schema.org Markup Utilities
 * Centralized schema generation for SEO and rich snippets
 */

// Base organization data
const ORGANIZATION_DATA = {
  name: 'DIY Solar Consultants',
  legalName: 'DIY Solar Consultants LLC',
  url: 'https://diysolar.com',
  telephone: '+1-888-555-1234',
  email: 'info@diysolarcosnultants.com',
  foundingDate: '2015',
  numberOfEmployees: '15-25',
  description: 'Professional solar design, permitting, and equipment sourcing services for DIY homeowners',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'United States',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  }
};

/**
 * Enhanced Organization Schema
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  ...ORGANIZATION_DATA,
  founder: {
    '@type': 'Person',
    name: 'John Doe'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '5000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/diysolar',
    'https://twitter.com/diysolar',
    'https://www.linkedin.com/company/diy-solar-consultants',
    'https://www.youtube.com/diysolar'
  ],
  award: [
    'Best Solar Design Service 2024',
    'Top Rated DIY Solar Consultant'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solar Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Solar System Design',
          description: 'Professional solar system design with PE stamp'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Permitting Services',
          description: 'Complete permit package preparation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Equipment Sourcing',
          description: 'Tier-1 solar equipment at competitive prices'
        }
      }
    ]
  }
});

/**
 * LocalBusiness Schema (for homepage)
 */
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  ...ORGANIZATION_DATA,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '5000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: '$$',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.8283',
    longitude: '-98.5795'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  }
});

/**
 * Service Schema Generator
 */
export const generateServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: ORGANIZATION_DATA.name
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  serviceType: service.type || 'Solar Energy Consultation',
  hasOfferCatalog: service.catalog && {
    '@type': 'OfferCatalog',
    name: service.catalogName || 'Service Options',
    itemListElement: service.catalog
  },
  aggregateRating: service.rating && {
    '@type': 'AggregateRating',
    ratingValue: service.rating.value || '4.9',
    reviewCount: service.rating.count || '5000'
  },
  offers: service.offers && {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: service.offers.price,
    priceSpecification: service.offers.priceRange && {
      '@type': 'PriceSpecification',
      minPrice: service.offers.priceRange.min,
      maxPrice: service.offers.priceRange.max,
      priceCurrency: 'USD'
    },
    availability: 'https://schema.org/InStock'
  }
});

/**
 * Multiple Services Schema (for services page)
 */
export const generateServicesPageSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': '#solar-design',
      name: 'Solar System Design',
      description: 'Custom solar system sizing, panel placement, production estimates, and ROI analysis by licensed Professional Engineers',
      provider: {
        '@type': 'Organization',
        name: ORGANIZATION_DATA.name
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '500',
          maxPrice: '1500',
          priceCurrency: 'USD'
        },
        availability: 'https://schema.org/InStock'
      },
      serviceOutput: 'Complete solar system design package with PE stamp'
    },
    {
      '@type': 'Service',
      '@id': '#permitting',
      name: 'Permitting Plansets',
      description: 'Professional engineering stamps, electrical diagrams, and AHJ-specific documentation',
      provider: {
        '@type': 'Organization',
        name: ORGANIZATION_DATA.name
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      }
    },
    {
      '@type': 'Service',
      '@id': '#equipment',
      name: 'Equipment Sourcing',
      description: 'Tier-1 solar panels, inverters, batteries, and mounting systems at 15-30% savings',
      provider: {
        '@type': 'Organization',
        name: ORGANIZATION_DATA.name
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      }
    },
    {
      '@type': 'Service',
      '@id': '#consulting',
      name: 'Technical Consulting',
      description: 'Installation guidance, troubleshooting, and code compliance verification',
      provider: {
        '@type': 'Organization',
        name: ORGANIZATION_DATA.name
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      }
    }
  ]
});

/**
 * Product Schema Generator
 */
export const generateProductSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  brand: product.brand && {
    '@type': 'Brand',
    name: product.brand
  },
  manufacturer: product.manufacturer && {
    '@type': 'Organization',
    name: product.manufacturer
  },
  model: product.model,
  sku: product.sku,
  gtin: product.gtin,
  category: product.category,
  image: product.image,
  aggregateRating: product.rating && {
    '@type': 'AggregateRating',
    ratingValue: product.rating.value,
    reviewCount: product.rating.count,
    bestRating: '5',
    worstRating: '1'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: product.price,
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    seller: {
      '@type': 'Organization',
      name: ORGANIZATION_DATA.name
    }
  },
  additionalProperty: product.specs && product.specs.map(spec => ({
    '@type': 'PropertyValue',
    name: spec.name,
    value: spec.value
  }))
});

/**
 * Equipment Category Schema (for equipment page)
 */
export const generateEquipmentCategorySchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Solar Equipment Categories',
  description: 'Tier-1 solar panels, inverters, battery storage, and mounting systems',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'ProductGroup',
        name: 'Solar Panels',
        description: 'Tier-1 solar panels with 25+ year warranties',
        hasVariant: [
          {
            '@type': 'Product',
            name: 'REC Alpha Pure-R',
            description: 'Premium efficiency panels with 25-year warranty'
          },
          {
            '@type': 'Product',
            name: 'Q.PEAK DUO',
            description: 'High-efficiency half-cut cell technology'
          }
        ]
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'ProductGroup',
        name: 'Inverters',
        description: 'String inverters, microinverters, and power optimizers'
      }
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'ProductGroup',
        name: 'Battery Storage',
        description: 'Backup power and energy independence solutions'
      }
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'ProductGroup',
        name: 'Mounting Systems',
        description: 'Engineered mounting for every roof type'
      }
    }
  ]
});

/**
 * BreadcrumbList Schema Generator
 */
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url ? `https://diysolar.com${crumb.url}` : undefined
  }))
});

/**
 * HowTo Schema Generator (for process page)
 */
export const generateHowToSchema = (howto) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howto.name,
  description: howto.description,
  image: howto.image,
  totalTime: howto.totalTime, // ISO 8601 duration format (e.g., 'P12W' for 12 weeks)
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: howto.cost
  },
  tool: howto.tools && howto.tools.map(tool => ({
    '@type': 'HowToTool',
    name: tool
  })),
  supply: howto.supplies && howto.supplies.map(supply => ({
    '@type': 'HowToSupply',
    name: supply
  })),
  step: howto.steps && howto.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image,
    url: step.url,
    itemListElement: step.directions && step.directions.map(direction => ({
      '@type': 'HowToDirection',
      text: direction
    }))
  }))
});

/**
 * Review Schema Generator
 */
export const generateReviewSchema = (review) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: review.author
  },
  datePublished: review.date,
  reviewBody: review.text,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: review.rating,
    bestRating: '5',
    worstRating: '1'
  },
  itemReviewed: {
    '@type': 'Service',
    name: review.serviceName || ORGANIZATION_DATA.name
  }
});

/**
 * AggregateRating Schema Generator
 */
export const generateAggregateRatingSchema = (rating) => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: rating.value || '4.9',
  reviewCount: rating.count || '5000',
  bestRating: '5',
  worstRating: '1',
  itemReviewed: {
    '@type': 'Organization',
    name: ORGANIZATION_DATA.name
  }
});

/**
 * WebPage Schema Generator
 */
export const generateWebPageSchema = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://diysolar.com${page.url}`,
  url: `https://diysolar.com${page.url}`,
  name: page.title,
  description: page.description,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://diysolar.com/#website',
    url: 'https://diysolar.com',
    name: 'DIY Solar Consultants'
  },
  breadcrumb: page.breadcrumbs && generateBreadcrumbSchema(page.breadcrumbs),
  primaryImageOfPage: page.image && {
    '@type': 'ImageObject',
    url: page.image
  }
});

/**
 * VideoObject Schema Generator
 */
export const generateVideoSchema = (video) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnail,
  uploadDate: video.uploadDate,
  duration: video.duration, // ISO 8601 duration format (e.g., 'PT10M30S' for 10 min 30 sec)
  contentUrl: video.url,
  embedUrl: video.embedUrl,
  publisher: {
    '@type': 'Organization',
    name: ORGANIZATION_DATA.name,
    logo: {
      '@type': 'ImageObject',
      url: `${ORGANIZATION_DATA.url}/images/logo.png`,
      width: 600,
      height: 60
    }
  }
});

/**
 * Helper function to inject schema into page head
 * Usage: <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
 */
export const serializeSchema = (schema) => JSON.stringify(schema);

/**
 * Generate multiple schemas (graph)
 */
export const generateSchemaGraph = (schemas) => ({
  '@context': 'https://schema.org',
  '@graph': schemas
});
