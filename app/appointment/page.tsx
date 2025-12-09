import React from "react";
import AppointmentSection from "./AppointmentSection";

/* ✅ SEO Metadata */
export const metadata = {
  title: "Book Appointment | MaxAlign Dental Clinic Marathahalli",
  description:
    "Book your dental appointment at MaxAlign Dental Clinic in Marathahalli. Expert dentists, modern equipment, and patient-focused dental care.",

  keywords: [
    "Dental Appointment Marathahalli",
    "Book Dentist Appointment",
    "MaxAlign Dental Clinic",
    "Dentist Near Me",
    "Dental Care Bangalore"
  ],

  openGraph: {
    title: "Book Appointment | MaxAlign Dental Clinic Marathahalli",
    description:
      "Schedule your dental appointment with expert dentists at MaxAlign Dental Clinic, Marathahalli.",
    url: "https://maxaligndental.com/appointment",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/img1.jpg", // public/images/og-appointment.jpg
        width: 1200,
        height: 630,
        alt: "Book Dental Appointment at MaxAlign Dental",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | MaxAlign Dental Clinic Marathahalli",
    description:
      "Book your dental appointment with trusted dentists at MaxAlign Dental Clinic, Marathahalli.",
    images: ["/assets/img1.jpg"],
  },
};

export default function Page() {
  return <AppointmentSection />;
}
