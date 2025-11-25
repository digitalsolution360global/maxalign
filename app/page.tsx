import Banner from "@/components/home/Banner";
import Intro from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import CounterSection from "@/components/home/CounterSection";
import ServicesCenterSection from "@/components/home/ServicesCenterSection";
import Appointment from "@/components/home/Appointment";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";





export default function HomePage() {
  return (
    <>
      <Banner />
      <Intro />
      <ServicesSection />
      <CounterSection />
      <ServicesCenterSection />
      <Appointment />
      <Testimonials />
      <ContactSection />
      {/* Other sections of homepage */}
    </>
  );
}
