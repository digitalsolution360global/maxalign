import React from "react";
import GallerySection from "./GallerySection";

/* ✅ SEO Metadata */
export const metadata = {
  title: "Dental Results Gallery | MaxAlign Dental Photo Gallery",
  description:
    "Explore photos of happy smiles and real patient results from MaxAlign Dental’s expert team.",

  keywords: [
    "Dental Gallery",
    "MaxAlign Dental Gallery",
    "Before After Dental Results",
    "Smile Makeover Gallery",
    "Dental Clinic Photos Bengaluru"
  ],

  openGraph: {
    title: "Dental Results Gallery | MaxAlign Dental Photo Gallery",
    description:
      "View real patient smile transformations and dental treatment results at MaxAlign Dental.",
    url: "https://maxaligndental.com/gallery",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/img1.jpg", // public/images/og-gallery.jpg
        width: 1200,
        height: 630,
        alt: "MaxAlign Dental Results Gallery",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dental Results Gallery | MaxAlign Dental Photo Gallery",
    description:
      "Explore real dental transformations and patient smile results from MaxAlign Dental.",
    images: ["/assets/img1.jpg"],
  },
};

export default function Page() {
  return <GallerySection />;
}
