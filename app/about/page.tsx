import React from "react";
import AboutSection from "./aboutsection";

/* ✅ SEO Metadata */
export const metadata = {
  title: "About MaxAlign Dental | Dental Care in Marathahalli",
  description:
    "Learn more about MaxAlign Dental’s expert team, patient care philosophy, and commitment to quality dental solutions.",

  keywords: [
    "MaxAlign Dental",
    "Dental Clinic in Marathahalli",
    "Best Dentist in Marathahalli",
    "Dental Care Bangalore",
    "About MaxAlign Dental"
  ],

  openGraph: {
    title: "About MaxAlign Dental | Dental Care in Marathahalli",
    description:
      "Learn more about MaxAlign Dental’s expert team, patient care philosophy, and commitment to quality dental solutions.",
    url: "https://maxaligndental.com/about",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/about-us-img-2.jpg", // public/images/og-about.jpg
        width: 1200,
        height: 630,
        alt: "About MaxAlign Dental Clinic",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About MaxAlign Dental | Dental Care in Marathahalli",
    description:
      "Learn more about MaxAlign Dental’s expert team, patient care philosophy, and commitment to quality dental solutions.",
    images: ["/assets/about-us-img-2.jpg"],
  },
};

export default function Page() {
  return <AboutSection />;
}
