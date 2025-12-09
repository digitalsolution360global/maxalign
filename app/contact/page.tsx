import React from "react";
import ContactSection from "./ContactSection";

/* ✅ SEO Metadata */
export const metadata = {
  title: "Reach Out to Us | Contact MaxAlign Dental Bengaluru",
  description:
    "Contact MaxAlign Dental for expert dental care in Bengaluru. We are here to help with appointments, queries, and more.",

  keywords: [
    "Contact MaxAlign Dental",
    "Dental Clinic Contact Bengaluru",
    "Dentist Appointment Bengaluru",
    "Dental Care Support",
    "MaxAlign Dental Clinic"
  ],

  openGraph: {
    title: "Reach Out to Us | Contact MaxAlign Dental Bengaluru",
    description:
      "Get in touch with MaxAlign Dental for appointments, dental consultations, and expert care in Bengaluru.",
    url: "https://maxaligndental.com/contact",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/img3.jpg", // public/images/og-contact.jpg
        width: 1200,
        height: 630,
        alt: "Contact MaxAlign Dental Clinic Bengaluru",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reach Out to Us | Contact MaxAlign Dental Bengaluru",
    description:
      "Contact MaxAlign Dental for appointments and expert dental care in Bengaluru.",
    images: ["/assets/img3.jpg"],
  },
};

export default function Page() {
  return <ContactSection />;
}
