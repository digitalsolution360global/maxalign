"use client";
import React from "react";
import { useState } from "react";

export default function TopDental() {
    const faqs = [
    {
      question: "Why choose MaxAlign Clinic in Marathahalli?",
      answer: "Because it combines expert care, affordable dental treatment, modern technology, and patient comfort – making it the best dental clinic in Marathahalli for all oral health needs."
    },
    {
      question: "Is bad breath always dental-related?",
      answer: "Most of the time, yes, but it can also be due to sinus infections or digestive issues. A dentist can identify if it’s oral-health related."
    },
    {
      question: "Is tooth sensitivity permanent?",
      answer: "Not always. With professional care, desensitizing treatments, and lifestyle adjustments, symptoms of tooth sensitivity can be greatly reduced."
    },
    {
      question: "How do I know if I have a cavity?",
      answer: "Early cavities may show signs like sensitivity, dark spots, or pain. Regular dental checkups at a Marathahalli dental clinic help detect them early."
    },
    {
      question: "Can gum disease really cause tooth loss?",
      answer: "Yes. If untreated, gum disease can lead to severe infections, bone loss, and loose or missing teeth. Regular gum care prevents this."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full bg-white">

     {/* Top Banner */}
<div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
  <div className="md:text-center px-6 z-10 max-w-7xl animate-fadeSlideInLeft">
    <h1
      className="text-3xl md:text-5xl font-extrabold text-white
                 relative inline-block
                 tracking-tight
                 text-shadow-[2px_2px_0_rgba(0,0,0,0.3),
                              4px_4px_0_rgba(0,0,0,0.2),
                              6px_6px_0_rgba(0,0,0,0.1)]"
    >
      Top Dental Problems and Their Solutions by Dentists in Marathahalli
    </h1>
  </div>
</div>

{/* Intro Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="max-w-5xl mx-auto md:text-center">

      <h2 className="text-2xl md:text-4xl font-bold text-[#0A1F26] leading-tight">
        Your Smile Is Your Right – Keep It Healthy and Bright with MaxAlign Dental Clinic
      </h2>

      <p className="mt-8 text-gray-700 leading-relaxed text-lg">
        A healthy, smiling face is not rare or a goal; it is your right to keep it.
        A smiling face is the symbol of good oral hygiene and good health.
        Yet, this attractive feature is missing in some cases for patients
        who are dealing with oral problems.
      </p>

      <p className="mt-6 text-gray-600 leading-relaxed">
        Whether it is your gum disease, toothaches, or any oral-related problems,
        the MaxAlign clinic is the ultimate solution for everything.
        The good news is that the experts from our dental clinic treat you properly
        so that no issues will occur over a long period of time, and guide you with
        proper oral care.
      </p>

      <p className="mt-6 text-gray-600 leading-relaxed">
        At <span className="font-semibold text-[#0A1F26]">MaxAlign Dental Clinic in Marathahalli</span>,
        patients receive comprehensive care from experienced specialists.
        Whether you require a routine checkup with advanced corrective treatments
        or simple oral healthcare, we make sure to achieve higher patient satisfaction
        and bring a bright smile to your face.
      </p>

    </div>
  </div>
</section>

{/* Tooth Decay & Cavities Section - Left Image, Right Content */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Image */}
      <div className="w-full">
        <img
          src="/assets/services/teeth.jpg" // aap apni image ka path yahan den
          alt="Tooth Decay Treatment"
          className="w-full h-[350px] md:h-[450px] rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26]">
          1. Treat Your Tooth Decay and Cavities from the Best Dental Clinic in Marathahalli
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          This type of dental problem is very common among patients, and most of them
          fail to treat it due to costly treatment packages. At{" "}
          <span className="font-semibold text-[#0A1F26]">MaxAlign Dental Hospital Marathahalli</span>, 
          a team of professional dental experts handles all such cases with ease.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Patients can resolve all types of oral problems, including tooth decay
          and cavities, without pain or money-draining procedures. MaxAlign was founded
          with a clear mission—to serve patients ethically, effectively, and affordably.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Our top dentists in Marathahalli provide detailed and thorough treatment plans
          for cavities and tooth decay, ensuring long-lasting relief and improved oral health.
        </p>

        {/* Optional CTA */}
        <div className="mt-6">
          <a
            href="/appointment"
            className="inline-block bg-[#4EE0D4] text-[#062023] px-6 py-3 rounded-lg font-semibold hover:bg-[#0A1F26] hover:text-white transition"
          >
            Book a Consultation
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Tooth Decay & Prevention Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26]">
          Understanding Tooth Decay and Cavities
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          Tooth decay happens when bacteria and food particles form plaque in the mouth,
          eroding the enamel. Cavities can lead to tooth pain, sensitivity, and infections
          if left untreated. At MaxAlign Dental Clinic, we provide timely treatments to
          restore oral health effectively.
        </p>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
         Cavities can lead to tooth pain, sensitivity, and infections
          if left untreated. At MaxAlign Dental Clinic, we provide timely treatments to
          restore oral health effectively.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Prevention is the best policy. Our expert dentists suggest maintaining oral health
          with consistent practices to avoid future problems.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="/appointment"
            className="inline-block bg-[#4EE0D4] text-[#062023] px-6 py-3 rounded-lg font-semibold hover:bg-[#0A1F26] hover:text-white transition"
          >
            Book Your Dental Check-Up
          </a>
        </div>
      </div>

      {/* Right List */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-[#0A1F26] mb-4">
          Treatments We Offer:
        </h3>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>Tooth fillings for early-stage cavities using modern methods</li>
          <li>Tooth-colored materials that blend seamlessly with natural teeth</li>
          <li>Root canal or crown treatments for severe cases</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#0A1F26] mt-6 mb-4">
          Preventive Practices:
        </h3>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>Brush your teeth after waking up and before bed</li>
          <li>Floss daily to remove hidden plaque</li>
          <li>Schedule routine dental cleanings at MaxAlign Clinic</li>
          <li>Don’t ignore toothaches – visit the clinic for timely treatment</li>
        </ul>
      </div>

    </div>
  </div>
</section>


{/* Gum Treatment Section */}
<section className="bg-[#0B7A75] text-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Smooth and Pain-Free Gum Treatment
        </h2>

        <p className="mt-6 text-gray-200 leading-relaxed text-lg">
          Bleeding or swollen gums cause pain and irritation when untreated, progressing 
          from mild gingivitis to worse conditions. Negligence, poor oral hygiene, and 
          irregular checkups at the right dental hospital in Marathahalli often cause this.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          At MaxAlign Dental Care Marathahalli, you will get customized treatment for gum pain, ensuring smooth recovery and long-term oral health.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="/appointment"
            className="inline-block bg-[#4EE0D4] text-[#062023] px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#062023] transition"
          >
            Book Your Appointment
          </a>
        </div>
      </div>

      {/* Right Treatments List */}
      <div className="bg-black/40 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-[#4EE0D4] mb-4">
          Gum Treatments We Offer:
        </h3>
        <ul className="space-y-3 text-gray-200 list-disc list-inside">
          <li>Professional scaling and root planing for mild cases</li>
          <li>Advanced periodontal therapies for severe cases</li>
          <li>Restoration of gum health and prevention of tooth loss</li>
          <li>Affordable and personalized solutions for all patients</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* Crooked or Misaligned Teeth Section */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 md:text-center bg-white rounded-2xl shadow-lg p-10">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F26]">
      Bring Comfort to Your Crooked or Misaligned Teeth
    </h2>

    <p className="mt-6 text-gray-700 leading-relaxed text-lg">
      No need to worry about misaligned teeth damaging your confidence. At MaxAlign, we provide personalized treatments for kids and adults.
    </p>

    <p className="mt-4 text-gray-600 leading-relaxed text-lg">
      Thanks to our top dentists in Marathahalli, patients receive customized orthodontic care, including advanced aligner treatments.
    </p>

    <p className="mt-4 text-gray-600 leading-relaxed text-lg">
      For issues like bad breath, tooth loss, or replacements, MaxAlign offers the best range of treatments at affordable costs.
    </p>

    {/* CTA Button */}
    <div className="mt-8">
      <a
        href="/appointment"
        className="inline-block bg-[#0B7A75] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#083f41] transition"
      >
        Book Your Appointment
      </a>
    </div>
  </div>
</section>


{/* Conclusion Section */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F26]">
      Conclusion
    </h2>

    <p className="mt-6 text-gray-700 leading-relaxed text-lg">
      Ignoring oral health is not a healthy lifestyle. Minor issues can grow into major, hard-to-treat problems. At MaxAlign dental clinic in Marathahalli, we recommend patients get thorough treatment and affordable care.
    </p>

    <p className="mt-4 text-gray-600 leading-relaxed text-lg">
      Regain your smile with effective treatments and clinically-proven solutions at MaxAlign Clinic, the best dental clinic in Marathahalli.
    </p>

    
  </div>
</section>


{/* FAQ Section */}
 <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F26] text-center">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-100 transition"
              >
                <span className="text-gray-800 font-semibold text-lg">{faq.question}</span>
                <span className="text-gray-600 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
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
