import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  currentPage: 'home' | 'about' | 'menu' | 'gallery' | 'contact';
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  currentPage
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Function to update or create meta tag
    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!tag) {
        tag = document.createElement('link');
        tag.rel = rel;
        document.head.appendChild(tag);
      }
      tag.href = href;
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle || title, 'property');
    updateMetaTag('og:description', ogDescription || description, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Caffeine Cove', 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);

    // Page-specific structured data
    const removeStructuredData = () => {
      const existingScript = document.querySelector('script[type="application/ld+json"][data-page]');
      if (existingScript) {
        existingScript.remove();
      }
    };

    const addStructuredData = (data: any) => {
      removeStructuredData();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page', currentPage);
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Add page-specific structured data
    if (currentPage === 'home') {
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Caffeine Cove",
        "description": description,
        "url": canonicalUrl,
        "servesCuisine": ["Coffee", "Beverages", "Light Meals", "Snacks"],
        "priceRange": "$$",
        "hasMenu": "https://caffeinecove.in/menu",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "215 ~ 218 Ar Mall, Mota Varachha",
          "addressLocality": "Surat",
          "postalCode": "394101",
          "addressCountry": "IN"
        },
        "telephone": "+91 9327672485",
        "email": "caffeinecove7@gmail.com",
        "sameAs": [
          "https://caffeinecove.in/"
        ]
      });
    } else if (currentPage === 'menu') {
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Caffeine Cove Menu",
        "description": description,
        "url": canonicalUrl,
        "inLanguage": "en",
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Coffee",
            "description": "Premium coffee beverages"
          },
          {
            "@type": "MenuSection", 
            "name": "Food",
            "description": "Fresh food and snacks"
          }
        ]
      });
    } else {
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": canonicalUrl,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Caffeine Cove",
          "url": "https://caffeinecove.in/"
        }
      });
    }

  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, currentPage]);

  return null; // This component only updates the head, doesn't render anything
};

export default SEOHead;