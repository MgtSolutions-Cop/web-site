export default function JsonLd() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService", // O "Organization"
      "name": "MGD Bitforge",
      "image": "https://mgdbitforge.cloud/icon.png", // Asegúrate de tener el icono
      "description": "Empresa experta en Gestión Documental y Desarrollo de Software en Colombia.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bogotá D.C.", 
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "postalCode": "110111", // Pon un código postal genérico de Bogotá si no tienes oficina física pública
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 4.6097, // Coordenadas centro de Bogotá (aprox)
        "longitude": -74.0817
      },
      "url": "https://mgdbitforge.cloud",
      "telephone": "+573132294537",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/mgdbitforge", // Si tienes LinkedIn, ponlo aquí
        // "https://facebook.com/..."
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }