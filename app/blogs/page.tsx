import React from "react";
import BlogSection from "./BlogSection";

/* ✅ SEO Metadata */
export const metadata = {
  title: "MaxAlign Dental Blog | Tips & Insights",
  description:
    "Read dental care tips, treatment info, and expert advice on the MaxAlign Dental blog.",

  keywords: [
    "Dental Blog",
    "MaxAlign Dental Blog",
    "Oral Health Tips",
    "Dental Care Articles",
    "Dentist Advice Bangalore"
  ],

  openGraph: {
    title: "MaxAlign Dental Blog | Tips & Insights",
    description:
      "Read dental care tips, treatment info, and expert advice from MaxAlign Dental specialists.",
    url: "https://maxaligndental.com/blog",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/img2.jpg", // public/images/og-blog.jpg
        width: 1200,
        height: 630,
        alt: "MaxAlign Dental Blog",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MaxAlign Dental Blog | Tips & Insights",
    description:
      "Read dental care tips and expert insights on the MaxAlign Dental blog.",
    images: ["/assets/img2.jpg"],
  },
};

export default function Page() {
  return <BlogSection />;
}
