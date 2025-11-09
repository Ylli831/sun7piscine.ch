export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SUN7 Piscine",
    "image": "https://sun7piscine.ch/logo.png",
    "@id": "https://sun7piscine.ch",
    "url": "https://sun7piscine.ch",
    "telephone": "+41793463200",
    "email": "info@sun7piscine.ch",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esplanade des Récréation 22",
      "addressLocality": "Meyrin",
      "postalCode": "1217",
      "addressRegion": "Genève",
      "addressCountry": "CH"
    },
    "priceRange": "CHF",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sun7piscine",
      "https://www.instagram.com/sun7piscine",
      "https://www.linkedin.com/company/sun7piscine"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "description": "Expert en construction, rénovation et entretien de piscines et spas en Suisse Romande. Plus de 20 ans d'expérience, 500+ projets réalisés. Devis gratuit.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de piscine",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction de piscine",
            "description": "Construction de piscines sur mesure en Suisse Romande"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rénovation de piscine",
            "description": "Rénovation et modernisation de piscines existantes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entretien de piscine",
            "description": "Maintenance et entretien régulier de piscines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation de spa",
            "description": "Installation et entretien de spas et jacuzzis"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
