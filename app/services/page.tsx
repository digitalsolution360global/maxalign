import React from "react";
import ServiceSection from "./ServiceSection";

/* ✅ SEO Metadata */
export const metadata = {
  title: "Complete Dental Care Services | MaxAlign Dental",
  description:
    "Explore our comprehensive dental treatments designed to meet your individual oral health needs.",

  keywords: [
    "Dental Services",
    "MaxAlign Dental Services",
    "Complete Dental Care",
    "Dental Treatments Bengaluru",
    "Oral Health Services"
  ],

  openGraph: {
    title: "Complete Dental Care Services | MaxAlign Dental",
    description:
      "Discover a full range of professional dental services tailored to your oral health needs at MaxAlign Dental.",
    url: "https://maxaligndental.com/services",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/img2.jpg", // public/images/og-services.jpg
        width: 1200,
        height: 630,
        alt: "MaxAlign Dental Care Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Complete Dental Care Services | MaxAlign Dental",
    description:
      "Explore expert dental treatments and complete oral care solutions at MaxAlign Dental.",
    images: ["/assets/img2.jpg"],
  },
};

export default function Page() {
  return <ServiceSection />;
}
