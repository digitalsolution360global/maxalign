import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "DentalCare",
  description: "Modern Dental Clinic Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
