import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "DentalCare",
  description: "Modern Dental Clinic Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className="bg-white text-black">
        <Header />

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
