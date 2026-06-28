import { BUSINESS, type CarbType, type Faq } from "./content";

const SITE = "https://thecarburetorwhisperer.example";

export function automotiveBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: BUSINESS.name,
    description:
      "One-man mail-in carburetor rebuild shop in rural Ohio. Every carburetor type accepted by mail, flat pricing by type, honest diagnosis, bench-flow tested.",
    url: SITE,
    areaServed: "Worldwide",
    priceRange: BUSINESS.priceRange,
    foundingDate: BUSINESS.established,
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [BUSINESS.social.youtube],
    knowsAbout: [
      "Carburetor rebuild",
      "Classic car carburetor restoration",
      "Motorcycle carburetor cleaning",
    ],
  };
}

export function offerCatalog(types: CarbType[]) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Carburetor rebuild pricing by type",
    itemListElement: types.map((t) => ({
      "@type": "Offer",
      name: `${t.typeName} rebuild`,
      category: t.vehicleKind,
      price: t.priceFlat,
      priceCurrency: "USD",
      itemOffered: {
        "@type": "Service",
        name: `${t.typeName} carburetor rebuild`,
        description: t.whatsIncluded,
      },
    })),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
