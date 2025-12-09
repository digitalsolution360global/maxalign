import React from "react";
import CavityPage from "./CavityPage";

/* ✅ SEO Metadata */
export const metadata = {
  title:
    "Cavity Treatment in Marathahalli | Painless Tooth Fillings | MaxAlign Dental",
  description:
    "Looking for expert cavity treatment in Marathahalli? MaxAlign Dental provides painless tooth fillings and advanced care for tooth decay. Book now!",

  keywords: [
    "Cavity Treatment Marathahalli",
    "Painless Tooth Filling",
    "Tooth Decay Treatment",
    "Dental Clinic in Marathahalli",
    "MaxAlign Dental"
  ],

  openGraph: {
    title:
      "Cavity Treatment in Marathahalli | Painless Tooth Fillings | MaxAlign Dental",
    description:
      "Expert cavity treatment in Marathahalli with painless tooth fillings and advanced dental care at MaxAlign Dental.",
    url: "https://maxaligndental.com/services/cavity-treatment",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/services/cavity1.jpg", // public/images/og-cavity.jpg
        width: 1200,
        height: 630,
        alt: "Cavity Treatment in Marathahalli",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cavity Treatment in Marathahalli | Painless Tooth Fillings | MaxAlign Dental",
    description:
      "Painless tooth filling and cavity treatment by expert dentists in Marathahalli.",
    images: ["/assets/services/cavity1.jpg"],
  },
};

export default function Page() {
  return <CavityPage />;
}
