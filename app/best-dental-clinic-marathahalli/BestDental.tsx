"use client";
import { useState } from "react";

export default function BestDental() {
    const faqs = [
    {
      question: "How often should I visit a dentist in Marathahalli for a regular check-up?",
      answer: "Ideally, every 6 months for preventive care and professional cleaning."
    },
    {
      question: "What makes MaxAlign Dental the best dental clinic in Marathahalli?",
      answer: "We combine advanced technology, experienced dentists, and affordable care."
    },
    {
      question: "Do regular dental check-ups prevent cavities?",
      answer: "Yes, early detection and professional cleaning significantly reduce cavity risks."
    },
    {
      question: "Are dental treatments at MaxAlign Dental painful?",
      answer: "No, we use modern techniques with minimal invasive methods for maximum comfort."
    },
    {
      question: "Does MaxAlign Dental offer cosmetic dentistry in Marathahalli?",
      answer: "Yes, we provide teeth whitening, veneers, aligners, and smile design services."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
         {/* Banner Section */}
        <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
          <div className="md:text-center px-6 z-10 max-w-7xl animate-fadeSlideInLeft">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white 
                           relative inline-block 
                           tracking-tight
                           text-shadow-[2px_2px_0_rgba(0,0,0,0.3),
                                        4px_4px_0_rgba(0,0,0,0.2),
                                        6px_6px_0_rgba(0,0,0,0.1)]">
            The Importance of Regular Dental Check-Ups – MaxAlign Dental
            </h1>
           
          </div>
        </div>

    

 {/* Intro Section with Image Left & Content Right */}
<section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Image */}
      <div className="w-full ">
        <img
          src="/assets/services/dental-implants.jpg"
          alt="Healthy Smile Dental Services"
          className="w-full md:h-[70vh] h-[40vh] rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26] relative inline-block">
          Healthy Smile Dental Services in Marathahalli
          <span className="block w-20 h-1 bg-[#4EE0D4] mt-3 rounded-full"></span>
        </h2>

        <p className="mt-8 text-gray-700 leading-relaxed text-lg">
          At <span className="font-semibold text-[#0A1F26]">MaxAlign Dental</span>,
          we believe that every patient deserves a healthy and confident smile.
          Our philosophy focuses on delivering high-quality dental care that
          supports a healthy lifestyle through modern techniques and
          patient-centric treatment.
        </p>

        <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
          <p>
            Many people underestimate the importance of regular dental check-ups.
            Timely dental visits play a crucial role in preventing oral problems
            before they become serious. Routine examinations allow early
            diagnosis and long-term oral health maintenance.
          </p>

          <p>
            If you are searching for an on-time, reliable, and trusted dental
            clinic in Marathahalli, MaxAlign Dental is the right choice. Choosing
            the right dental care is no longer a challenge when you are treated
            by experienced professionals.
          </p>

          {/* <p>
            Discover why MaxAlign Dental is recognized as one of the best dental
            clinics in Marathahalli, offering comprehensive dental solutions for
            patients of all age groups with comfort, care, and precision.
          </p> */}
        </div>
      </div>

    </div>
  </div>
</section>

{/* Comprehensive Oral Health Care */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

    {/* Left Content */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26]">
        Get Your Comprehensive Oral Health Care from Expert Dentist in Marathahalli
      </h2>

      <p className="mt-6 text-gray-700 leading-relaxed">
       No one has understood the impact of oral health check up as they neglected the issues with their teeth very often. But each expert dental care Marathahalli won’t recommend it. At MaxAlign Dental Clinic, we provide a comprehensive and an Advanced dental treatment Marathahalli.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
       Oral health impacts on our body in most of the cases. If your gum or tooth is not healthy, then it may raise some serious questions. Whether you want a cure or certain preventive measures, our clinic provides a complete setup.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
       Here, we educate our patients about how they should maintain their gum health so that they can be happy and healthy for a long time without any issue.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
         It is important for patients to practice that hygiene routine. Invest in your health with professional dental care in Marathahalli – schedule your visit now.
      </p>
    </div>

    {/* Right List Box */}
    <div className="bg-gray-50 rounded-2xl p-10 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-[#0A1F26] mb-6">
        This clinic offers you astonishing treatments so that you can deal with:
      </h3>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#4EE0D4] rounded-full"></span>
          Cavities
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#4EE0D4] rounded-full"></span>
          Gum Disease
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#4EE0D4] rounded-full"></span>
          Enamel Wear at an Early Stage
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#4EE0D4] rounded-full"></span>
          Root Canal Treatment & More
        </li>
      </ul>

      <p className="mt-6 text-gray-600 leading-relaxed">
        At MaxAlign Dental, we emphasize preventive dental care in Marathahalli through routine cleanings, detailed oral examinations, and early intervention strategies.
      </p>

   
    </div>

  </div>
</section>


{/* Personalized Dental Treatment Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/services/dental-implants.jpg')", // apni image ka path yahan do
  }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-24">
    <div className="max-w-7xl mx-auto md:text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
        Personalized Dental Treatment at Minimal Cost: Choose MaxAlign Dental Center
      </h2>

      <p className="mt-6 text-gray-200 leading-relaxed text-lg">
        Every smile matters to each experienced dentist in Marathahalli.
        At MaxAlign Dental Center, we hire the best doctors in the city to
        treat you with care and provide ultimate-level personalized dental
        treatment without compromise.
      </p>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Our experienced dentists in Marathahalli carefully plan treatment
        schedules and guide you through every step, explaining how to
        maintain proper oral hygiene and perform daily dental care routines
        on time to avoid unnecessary dental issues.
      </p>

      <div className="mt-8">
        <a
          href="/appointment"
          className="inline-block bg-[#4EE0D4] text-[#062023] px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
        >
          Book Your Appointment
        </a>
      </div>
    </div>
  </div>
</section>

{/* Advanced Dental Treatments Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">

    {/* Heading */}
    <div className="max-w-4xl md:text-center mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26]">
        Advanced Dental Treatments at MaxAlign Dental
      </h2>

      <p className="mt-6 text-gray-700 leading-relaxed">
        For your info, get to know every Advanced dental treatment Marathahalli
        that MaxAlign provides in Marathahalli:
      </p>
    </div>

    {/* Treatments Grid */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        "Restorative treatments (fillings, crowns) tailored to tooth structure and needs.",
        "Cosmetic dentistry options like whitening and veneers designed for your unique smile.",
        "Personalized preventive care using sealants, fluoride, and tailored recall intervals.",
        "Specialized care adapted for medical conditions like diabetes or pregnancy.",
        "Minimally invasive procedures to maximize comfort and preserve natural tooth structure.",
        "Technology-driven planning using digital X-rays and 3D imaging for precision.",
        "Individualized anxiety management with sedation or calming approaches.",
        "Dental care plans tailored for every stage of life, from children to seniors.",
        "Customized orthodontic solutions, including personalized braces or aligners.",
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <p className="text-gray-700 leading-relaxed">
            {item}
          </p>
        </div>
      ))}

    </div>

    {/* Bottom Content */}
    <div className="mt-12 md:text-center mx-auto max-w-7xl">
      <p className="text-gray-700  leading-relaxed">
        If you are searching for an Affordable dental clinic Marathahalli, then
        MaxAlign Clinic is the right choice to go with. Never miss your chance
        to take care of your oral health at minimal cost with expert suggestions.
      </p>

     

     
    </div>

  </div>
</section>

{/* Book Dental Check-Up CTA */}
<section className="bg-gradient-to-r from-[#0A1F26] to-[#062023]">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Left Content */}
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Book Your Dental Check-Up Now
        </h2>
        <p className="mt-3 text-gray-300 leading-relaxed">
          Choose the best dental clinic in Marathahalli for affordable yet
          advanced treatments – book your visit now.
        </p>
      </div>

      {/* Right Button */}
      <div>
        <a
          href="/appointment"
          className="inline-block bg-[#4EE0D4] text-[#062023] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-white transition"
        >
          Book Appointment
        </a>
      </div>

    </div>
  </div>
</section>


{/* Conclusion Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="max-w-6xl mx-auto md:text-center">

      <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26]">
        Conclusion
      </h2>

      <p className="mt-6 text-gray-700 leading-relaxed text-lg">
        Your oral health deserves attention before problems arise. At{" "}
        <span className="font-semibold text-[#0A1F26]">MaxAlign Dental</span>,
        the trusted dental clinic in Marathahalli, we are committed to providing
        professional dental care, advanced treatments, and personalized dental
        solutions to keep your smile bright and healthy.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Whether you’re looking for routine check-ups or advanced cosmetic
        dentistry, our experienced dentists in Marathahalli are here to help
        you with comprehensive and compassionate care.
      </p>

      <p className="mt-6 text-gray-800 font-medium">
        Don’t wait for dental problems to worsen – book your dental appointment
        in Marathahalli at MaxAlign Dental and experience care that puts your
        smile first.
      </p>

      {/* Optional CTA */}
      <div className="mt-8">
        <a
          href="/appointment"
          className="inline-block border-2 border-[#4EE0D4] text-[#0A1F26] px-7 py-3 rounded-lg font-semibold hover:bg-[#4EE0D4] hover:text-[#062023] transition"
        >
          Book Appointment
        </a>
      </div>

    </div>
  </div>
</section>

<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26] text-center">
      Frequently Asked Questions
    </h2>

    <div className="mt-10 max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="text-gray-800 font-bold text-lg">{faq.question}</span>
            <span className="text-gray-600 text-xl">
              {openIndex === index ? "-" : "+"}
            </span>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="px-6 py-4 bg-white text-gray-700 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>







    </div>
  );
}
