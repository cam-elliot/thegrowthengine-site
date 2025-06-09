import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'FAQ' | 'Person' | 'BreadcrumbList';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Growth Engine",
          "url": "https://thegrowthengine.com.au",
          "logo": "https://thegrowthengine.com.au/logo.jpg",
          "description": "B2B revenue optimization consulting helping ambitious businesses accelerate growth through strategic sales and marketing alignment.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AU",
            "addressRegion": "NSW"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+61-XXX-XXX-XXX",
            "contactType": "customer service",
            "email": "info@thegrowthengine.com.au"
          },
          "founder": {
            "@type": "Person",
            "name": "Cam Elliot"
          },
          "serviceArea": {
            "@type": "Country",
            "name": "Australia"
          },
          "industry": "Business Consulting"
        };
        break;
        
      case 'Service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "The Growth Engine",
            "url": "https://thegrowthengine.com.au"
          },
          "serviceType": "Business Consulting",
          "category": "Revenue Optimization"
        };
        break;
        
      case 'FAQ':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };
        break;
        
      case 'Person':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Cam Elliot",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "The Growth Engine"
          },
          "description": "B2B revenue optimization expert helping businesses build scalable growth engines"
        };
        break;
        
      case 'BreadcrumbList':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };
        break;
    }
    
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [type, data]);

  return null;
}