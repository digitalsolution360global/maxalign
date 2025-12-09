import DoctorProfile from "./Profile";

/* ✅ SEO Metadata */
export const metadata = {
  title: "Our Doctors | Expert Dentists at MaxAlign Dental",
  description:
    "Meet the experienced dentists at MaxAlign Dental. Our expert team is committed to providing high-quality, patient-focused dental care.",

  keywords: [
    "MaxAlign Dental Doctors",
    "Dentists at MaxAlign Dental",
    "Best Dentists in Bengaluru",
    "Dental Specialists Bengaluru",
    "Expert Dental Care"
  ],

  openGraph: {
    title: "Our Doctors | Expert Dentists at MaxAlign Dental",
    description:
      "Get to know the skilled and compassionate dentists who deliver exceptional dental care at MaxAlign Dental.",
    url: "https://maxaligndental.com/doctors",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/img3.jpg", // public/images/og-doctors.jpg
        width: 1200,
        height: 630,
        alt: "Expert Dentists at MaxAlign Dental",
      },
    ],
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Doctors | Expert Dentists at MaxAlign Dental",
    description:
      "Meet the expert dentists providing quality dental care at MaxAlign Dental.",
    images: ["/assets/img3.jpg"],
  },
};

export default function Page() {
  return <DoctorProfile />;
}
