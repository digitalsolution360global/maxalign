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
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
