import Script from 'next/script';

interface StructuredDataProps {
  type?: 'homepage' | 'privacy' | 'terms';
}

const StructuredData = ({ type = 'homepage' }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ordermatic",
      "url": "https://www.ordermatic.ai",
      "logo": "https://www.ordermatic.ai/logo.png",
      "description": "AI-driven WhatsApp solution that automates orders, appointments, and customer support for businesses",
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.instagram.com/ordermaticai/",
        "https://linkedin.com/company/ordermatic"
      ]
    };

    const webApplication = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Ordermatic",
      "url": "https://www.ordermatic.ai",
      "description": "AI-powered WhatsApp automation platform for businesses to manage orders, appointments, and customer support 24/7",
      "operatingSystem": "Web Browser",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free consultation and demo available"
      },
      "featureList": [
        "24/7 Automated WhatsApp Responses",
        "Order Management System",
        "Appointment Scheduling",
        "Customer Support Automation",
        "Unified Dashboard",
        "POS and CRM Integration",
        "Multi-language Support",
        "Real-time Analytics"
      ]
    };

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the setup process like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Setup is straightforward: simply upload your product menu or service listings, set your business hours, and customize basic responses. We provide an intuitive dashboard where you can quickly manage all your content and settings—no coding required."
          }
        },
        {
          "@type": "Question", 
          "name": "How does the AI handle customer inquiries and orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our system uses advanced natural language processing (NLP) to understand customer messages and provide instant, context-aware responses. It can confirm orders, book appointments, and answer FAQs without human intervention."
          }
        },
        {
          "@type": "Question",
          "name": "Can it integrate with my existing POS or CRM system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Ordermatic supports seamless integrations with popular POS and CRM platforms. This ensures order data, customer details, and inventory information remain automatically synchronized across all tools you already use."
          }
        },
        {
          "@type": "Question",
          "name": "How do I monitor and manage orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All customer interactions and orders are aggregated in a single, easy-to-use dashboard. From there, you can track statuses, modify details, and respond to any inquiries that need a human touch—giving you full control at any point in the process."
          }
        },
        {
          "@type": "Question",
          "name": "Can the AI handle special requests or customized orders?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Absolutely. Our AI can handle variations like extra cheese, no onions, or specific dietary requirements, thanks to its built-in language understanding. If a request is exceptionally unique, the system can flag it for a human review to ensure accuracy."
          }
        },
        {
          "@type": "Question",
          "name": "What if a customer needs to speak directly with a real person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We understand some situations require a personal touch. Our platform allows you to seamlessly step into any conversation at any time. You'll receive a notification in the dashboard, and you can take over whenever human expertise is needed."
          }
        }
      ]
    };

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.ordermatic.ai"
        },
        ...(type === 'privacy' ? [{
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://www.ordermatic.ai/privacy-policy"
        }] : []),
        ...(type === 'terms' ? [{
          "@type": "ListItem", 
          "position": 2,
          "name": "Terms & Conditions",
          "item": "https://www.ordermatic.ai/terms"
        }] : [])
      ]
    };

    if (type === 'homepage') {
      return [baseOrganization, webApplication, faqData, breadcrumbList];
    } else if (type === 'privacy') {
      return [baseOrganization, breadcrumbList];
    } else if (type === 'terms') {
      return [baseOrganization, breadcrumbList];
    }

    return [baseOrganization];
  };

  const structuredDataArray = getStructuredData();

  return (
    <>
      {structuredDataArray.map((data, index) => (
        <Script
          key={index}
          id={`structured-data-${type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;