import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "Expert Dental Care in Bengaluru | MaxAlign Dental",
    template: "%s | MaxAlign Dental",
  },
  description:
    "From aligners to implants, MaxAlign Dental in Bengaluru offers comprehensive dental care with a patient-first approach.",

  keywords: [
    "Dental Clinic in Bengaluru",
    "MaxAlign Dental",
    "Best Dentist in Bengaluru",
    "Dental Implants Bengaluru",
    "Clear Aligners Bengaluru",
  ],

  icons: {
    icon: "/favicon.ico",       
    shortcut: "/favicon.ico",  
    apple: "/favicon.ico",      
  },

  openGraph: {
    title: "Expert Dental Care in Bengaluru | MaxAlign Dental",
    description:
      "From aligners to implants, MaxAlign Dental in Bengaluru offers comprehensive dental care with a patient-first approach.",
    siteName: "MaxAlign Dental",
    url: "https://maxaligndental.com",
    images: [
      {
        url: "/assets/max-align-about.jpg", // public/images/og-home.jpg
        width: 1200,
        height: 630,
        alt: "MaxAlign Dental Clinic Bengaluru",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Expert Dental Care in Bengaluru | MaxAlign Dental",
    description:
      "Comprehensive dental care in Bengaluru – aligners, implants, and advanced treatments at MaxAlign Dental.",
    images: ["/assets/max-align-about.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.maxaligndental.com/#dentist",
  "name": "MaxAlign Dental Clinic",
  "url": "https://www.maxaligndental.com/",
  "telephone": "+91 9321533345",
  "email": "info@maxaligndental.com",
  "image": "https://www.maxaligndental.com/images/clinic.jpg",
  "logo": "https://www.maxaligndental.com/images/logo.png",
  "description": "MaxAlign Dental Clinic provides orthodontic treatment, invisible aligners, dental implants, cosmetic dentistry, teeth whitening, cavity treatment, gum disease treatment and complete dental care in Marathahalli, Bengaluru.",
  "priceRange": "₹₹",
  "founder": {
    "@type": "Person",
    "name": "Dr. Ayushi Verma"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st Floor, Anjanadri Krest, SY No. 104/3A, Munnekollal Main Road",
    "addressLocality": "Marathahalli",
    "addressRegion": "Karnataka",
    "postalCode": "560037",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:30"
    }
  ],
  "medicalSpecialty": [
    "Dentistry",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Preventive Dentistry"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Bengaluru"
    },
    {
      "@type": "Place",
      "name": "Marathahalli"
    },
    {
      "@type": "Place",
      "name": "Whitefield"
    },
    {
      "@type": "Place",
      "name": "Bellandur"
    },
    {
      "@type": "Place",
      "name": "Brookefield"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Orthodontic Treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Invisible Aligners"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Implants"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Teeth Whitening"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cavity Treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gum Disease Treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smile Designing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Root Canal Treatment"
        }
      }
    ]
  },
  "sameAs": [
    "https://maps.app.goo.gl/LdaXjdwq3CeZT66fA",
    "https://www.instagram.com/maxalign.dental/"
    
  ]
}
  return (
    <html lang="en">
      <body>
        <head>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
        </head>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
