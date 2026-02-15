// Local SEO schema markup utilities

export function generateLocalBusinessSchema(state) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://diysolarconsultants.com/solar-design-${state.slug}`,
    name: `DIY Solar Consultants - ${state.name}`,
    description: `Professional solar system design and engineering services for ${state.name} homeowners. Licensed PE engineers, ${state.name}-specific permitting expertise, and comprehensive support.`,
    url: `https://diysolarconsultants.com/solar-design-${state.slug}`,
    telephone: '+1-888-555-1234',
    email: 'info@diysolarconsultants.com',
    priceRange: '$$',
    areaServed: {
      '@type': 'State',
      name: state.name,
      '@id': `https://en.wikipedia.org/wiki/${state.name.replace(/ /g, '_')}`
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: state.coordinates.lat,
        longitude: state.coordinates.lng
      },
      geoRadius: '500000' // Serves entire state
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: state.abbreviation,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: state.coordinates.lat,
      longitude: state.coordinates.lng
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: state.systemsDesigned.replace(/,/g, ''),
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Solar Design Services in ${state.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Solar System Design',
            description: `Professional solar system engineering and design for ${state.name} homes`,
            areaServed: {
              '@type': 'State',
              name: state.name
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PE-Stamped Solar Plans',
            description: `Licensed Professional Engineer stamped plans for ${state.name} solar permits`,
            areaServed: {
              '@type': 'State',
              name: state.name
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Solar Permit Support',
            description: `Complete permit package preparation for ${state.name} jurisdictions`,
            areaServed: {
              '@type': 'State',
              name: state.name
            }
          }
        }
      ]
    },
    knowsAbout: [
      `${state.name} solar permitting requirements`,
      `${state.name} solar incentives`,
      `${state.name} building codes`,
      'Solar system design',
      'Photovoltaic engineering',
      'Battery storage systems'
    ],
    slogan: `Expert Solar Design Services for ${state.name} Homeowners`
  };
}

export function generateBreadcrumbSchema(state) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://diysolarconsultants.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'State Services',
        item: 'https://diysolarconsultants.com#states'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${state.name} Solar Design`,
        item: `https://diysolarconsultants.com/solar-design-${state.slug}`
      }
    ]
  };
}

export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateReviewSchema(testimonials, state) {
  return testimonials.map(testimonial => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: `Solar Design Services - ${state.name}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'DIY Solar Consultants'
      }
    },
    author: {
      '@type': 'Person',
      name: testimonial.name
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: testimonial.quote,
    publisher: {
      '@type': 'Organization',
      name: 'DIY Solar Consultants'
    }
  }));
}

export function generateServiceSchema(state) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Solar System Design and Engineering',
    provider: {
      '@type': 'LocalBusiness',
      name: 'DIY Solar Consultants'
    },
    areaServed: {
      '@type': 'State',
      name: state.name
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Solar Services in ${state.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Solar System Design',
            description: `Custom solar system design for ${state.name} homes`
          }
        }
      ]
    }
  };
}
