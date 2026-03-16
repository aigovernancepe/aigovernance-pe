import { company } from '../data/company';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${company.url}/#organization`,
    name: company.name,
    alternateName: company.alternateName,
    url: company.url,
    logo: `${company.url}${company.logo}`,
    image: `${company.url}${company.logo}`,
    email: company.email,
    foundingDate: company.foundingDate,
    founder: { '@type': 'Person', name: company.founder },
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
    },
    areaServed: [
      { '@type': 'Country', name: 'Peru' },
      { '@type': 'City', name: 'Lima' },
    ],
    priceRange: company.priceRange,
    openingHours: company.openingHours,
    sameAs: [company.linkedin],
    knowsLanguage: company.languages,
    description: company.description,
  };
}

export function localBusinessSchema(area: { name: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${company.url}/areas/${area.slug}/#localbusiness`,
    name: `${company.name} - ${area.name}`,
    url: `${company.url}/areas/${area.slug}/`,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.name,
      addressRegion: area.name === 'Lima' ? 'Lima' : undefined,
      addressCountry: 'PE',
    },
    areaServed: { '@type': area.slug === 'peru' ? 'Country' : 'City', name: area.name },
    priceRange: company.priceRange,
    openingHours: company.openingHours,
    parentOrganization: { '@id': `${company.url}/#organization` },
  };
}

export function serviceSchema(service: {
  title: string;
  slug: string;
  description: string;
  category: string;
  duration: string;
  audience: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${company.url}/servicios/${service.category}/${service.slug}/#service`,
    name: service.title,
    description: service.description,
    provider: { '@id': `${company.url}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'Peru' },
      { '@type': 'City', name: 'Lima' },
    ],
    serviceType: service.title,
    termsOfService: `${company.url}/servicios/${service.category}/${service.slug}/`,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Duración', value: service.duration },
      { '@type': 'PropertyValue', name: 'Audiencia', value: service.audience },
    ],
  };
}

export function serviceInAreaSchema(
  service: { title: string; slug: string; description: string },
  area: { name: string; slug: string }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${company.url}/areas/${area.slug}/${service.slug}/#service`,
    name: `${service.title} en ${area.name}`,
    description: `${service.description} Servicio disponible en ${area.name}, Perú.`,
    provider: { '@id': `${company.url}/#organization` },
    areaServed: { '@type': area.slug === 'peru' ? 'Country' : 'City', name: area.name },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function webPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    inLanguage: 'es-PE',
    isPartOf: { '@type': 'WebSite', url: company.url, name: company.name },
  };
}
