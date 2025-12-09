import React from "react";
import DentalImplants from "./DentalImplants";

/* ✅ SEO Metadata */
export const metadata = {
  title:
    "Dental Implants in Marathahalli | Permanent Tooth Replacement | MaxAlign Dental",
  description:
    "Restore your smile with advanced dental implants in Marathahalli. MaxAlign Dental offers safe, long-lasting tooth replacement solutions by expert implant specialists.",

  keywords: [
    "Dental Implants Marathahalli",
    "Tooth Replacement Bengaluru",
    "Best Dental Implants Clinic",
    "Implant Dentist Marathahalli",
    "MaxAlign Dental"
  ],

  openGraph: {
    title:
      "Dental Implants in Marathahalli | Permanent Tooth Replacement | MaxAlign Dental",
    description:
      "Get permanent and natural-looking dental implants at MaxAlign Dental in Marathahalli.",
    url: "https://maxaligndental.com/services/dental-implants",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/services/dental-implants.jpg", // public/images/og-implants.jpg
        width: 1200,
        height: 630,
        alt: "Dental Implants Treatment in Marathahalli",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dental Implants in Marathahalli | Permanent Tooth Replacement | MaxAlign Dental",
    description:
      "Advanced dental implant solutions for permanent tooth replacement at MaxAlign Dental.",
    images: ["/assets/services/dental-implants.jpg"],
  },
};

export default function Page() {
  return <DentalImplants />;
}
