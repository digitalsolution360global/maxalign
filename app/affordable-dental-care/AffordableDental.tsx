"use client";
import React from "react";
import { useState } from "react";
export default function AffordableDental() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};


  const faqs = [
    {
      q: "What makes MaxAlign Dental Clinic the best dental clinic Marathahalli offers?",
      a: "MaxAlign leads with advanced technology, highly trained top dentists near Marathahalli, and a patient-first philosophy, making it one of the most recommended clinics in Marathahalli. Expect expertise, convenience, and compassionate service in every visit.",
    },
    {
      q: "What dental services are available at MaxAlign Clinic?",
      a: "We cover preventive, cosmetic, restorative, pediatric dentistry, orthodontics (braces, Invisalign), dental implants, gum care, and emergency services—all under one roof for streamlined care.",
    },
    {
      q: "Do you offer affordable dental treatment Marathahalli families can rely on?",
      a: "Absolutely. Our pricing is transparent, with packages for families, students, and seniors. We provide quality care at rates designed for every budget, plus flexible payment plans and insurance assistance.",
    },
    {
      q: "Can kids get specialized dental care at your clinic?",
      a: "Definitely. Our pediatric dentist provides a child-friendly environment, offering gentle checkups, cavity fillings, preventive treatments, and orthodontic care to make each visit stress-free for kids.",
    },
    {
      q: "Are the dentists at MaxAlign considered top dentist near Marathahalli?",
      a: "Yes. Our team features experienced professionals. We are a certified Invisalign provider and orthodontic specialist. Patient testimonials consistently rate us as the top dentist near Marathahalli.",
    },
  ];
  return (
    <>
      {/* Top Banner */}
          
        <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
          <div className="md:text-center px-6 z-10 max-w-7xl animate-fadeSlideInLeft">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white 
                           relative inline-block 
                           tracking-tight
                           text-shadow-[2px_2px_0_rgba(0,0,0,0.3),
                                        4px_4px_0_rgba(0,0,0,0.2),
                                        6px_6px_0_rgba(0,0,0,0.1)]">
            Affordable Dental Care Without Compromising Quality – Marathahalli’s Top Choice
            </h1>
           
          </div>
        </div>
     {/* Intro Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="max-w-5xl mx-auto md:text-center">

      <h2 className="text-2xl md:text-4xl font-bold text-[#0A1F26]">
        Welcome to Affordable Excellence in Dental Care
      </h2>

      <p className="mt-8 text-gray-700 leading-relaxed text-lg">
        Affordable dental clinics are hard to find these days. When patients
        choose cheaper options, they get treated wrongly in most cases.
        However, an aware person should not be willing to join an unreliable
        source where he or she can’t even get the appropriate dental treatment.
      </p>

      <p className="mt-6 text-gray-600 leading-relaxed">
        So, getting the right and best dental clinic Marathahalli, Bengaluru can
        give you the required and personalized treatment with up-to-the-mark
        facilities and affordable pricing.
      </p>

      <p className="mt-6 text-gray-600 leading-relaxed">
        When it comes to affordable dental treatment in Marathahalli, one name
        comes to the forefront, and that is{" "}
        <span className="font-semibold text-[#0A1F26]">MaxAlign Dental</span>.
        Here you will find skilled professionals, customizable dental treatment,
        advanced features, and the latest equipment to treat your oral problems.
      </p>

      <p className="mt-6 text-gray-700 font-medium">
        Let’s understand why MaxAlign Dental Hospital in Marathahalli is the
        right choice for dental patients who seek expert treatment at an
        affordable cost.
      </p>

    </div>
  </div>
</section>

{/* MaxAlign Clinic Offer Section */}
<section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-20">

    {/* Heading */}
    <div className="max-w-4xl mx-auto md:text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-[#0A1F26]">
        What Does MaxAlign Clinic Offer – the Best Dental Clinic Marathahalli
      </h2>

      <p className="mt-6 text-gray-700 leading-relaxed">
        At the MaxAlign clinic, a patient dealing with various oral problems will
        be treated properly without any delay. Thanks to our experts, who provide
        on-time treatment and show consistency over many years since we opened
        in Marathahalli.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        For anyone who wants to know why to go with MaxAlign’s dental clinic
        should easily understand when you go through the following details:
      </p>
    </div>

    {/* Features Grid */}
<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {[
    "Use cutting-edge equipment",
    "Appoint an expert and experienced dentist in Marathahalli",
    "Years of success stories and positive patient testimonials",
    "Persuasive behavior from doctors",
    "Get a comfortable ambiance",
    "Easy and subtle treatment with proper customization",
    "Treat every patient with the same intent and objective",
    "Transparent and affordable dental treatment Marathahalli",
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
    >
      <div className="flex items-start gap-3">
        {/* Tick Icon */}
        <span className="flex items-center justify-center  text-[#062023] font-bold text-sm">
          ✓
        </span>

        <p className="text-gray-700 leading-relaxed font-medium">
          {item}
        </p>
      </div>
    </div>
  ))}

</div>

    

  </div>
</section>


{/* Safety, Care & Patient Education Section */}
<section className="bg-gradient-to-r from-[#0A1F26] via-[#062023] to-black">
  <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Safe, Trusted & Patient-First Dental Care at MaxAlign Clinic
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed text-lg">
          Whether patients seek oral surgery or preventive care for necessary
          oral diseases, we, at{" "}
          <span className="font-semibold text-white">MaxAlign Clinic</span>,
          provide the best services. We always prioritize the safety of the
          patients and come up with solutions through:
        </p>

        {/* Safety Points */}
        <ul className="mt-8 space-y-4">
          <li className="flex items-start gap-4">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#4EE0D4] text-[#062023] font-bold">
              ✓
            </span>
            <span className="text-gray-200">
              Comprehensive sterilization protocols
            </span>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#4EE0D4] text-[#062023] font-bold">
              ✓
            </span>
            <span className="text-gray-200">
              Vaccination drives among staff
            </span>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#4EE0D4] text-[#062023] font-bold">
              ✓
            </span>
            <span className="text-gray-200">
              A strong feedback culture
            </span>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="bg-white/5 backdrop-blur rounded-2xl p-10 border border-white/10">
        <p className="text-gray-300 leading-relaxed text-lg">
          We just don’t provide treatment only but love to educate our patients
          so that they can understand and practice the necessary preventive
          measures.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          We also guide you to stay out of unnecessary practices so that your
          oral health remains stronger and subtle for a long time.
        </p>

        <p className="mt-8 text-[#4EE0D4] font-semibold">
          Because informed patients always make healthier choices.
        </p>
      </div>

    </div>
  </div>
</section>


{/* Expertise Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="max-w-5xl mx-auto md:text-center">

      <h2 className="text-2xl md:text-4xl font-bold text-[#0A1F26]">
        MaxAlign Dental Clinic Marathahalli
      </h2>

      <p className="mt-4 text-lg md:text-xl font-semibold text-[#0B7A75]">
        Expertise That Inspires Confidence: Affordable Dental Treatment Marathahalli
      </p>

      <div className="mt-10 space-y-6 text-gray-700 leading-relaxed text-lg">

        <p>
          Great dental care is more than equipment; it’s about trust in your
          practitioner.
        </p>

        <p>
          MaxAlign is renowned for housing some of the most skilled and
          experienced professionals, known as top dentists near Marathahalli.
          Our team has years of experience in routine check-ups, complex
          surgeries, and cosmetic makeovers—always delivered with patience and
          empathy.
        </p>

        <p>
          With continuous learning and a focus on gentle treatment (including
          sedation options for anxious patients), you’ll experience dentistry
          that’s both relaxing and reliable.
        </p>

      </div>

    </div>
  </div>
</section>


{/* Dental Treatments Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#0A1F26]">
          Dental Treatments at its Best: Treat Your Oral Problems with Ease at MaxAlign
        </h2>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-lg">

          <p>
            It is not always about the size of a clinic but the treatment it
            provides. People often go with someone who has established their
            brand in the market and charges more for numerous dental treatments.
          </p>

          <p>
            Well, at MaxAlign, we do not promote any kind of practices that drain
            the bank balance of our patients. The prime objective is to provide
            a suitable and customized treatment so that the patient can rest
            assured and wait for a swift recovery.
          </p>

         

          
        </div>
      </div>

      {/* Right Services */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">

        <h3 className="text-xl font-bold text-[#0A1F26] mb-6">
          Services Include
        </h3>

        <ul className="space-y-4">

          {[
            "Orthodontics (braces, clear aligners)",
            "Aesthetic dentistry",
            "Dental implants",
            "Gum therapy",
            "Pediatric care",
          ].map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-[#0B7A75] text-lg">✔</span>
              <span className="text-gray-700 text-lg">
                {service}
              </span>
            </li>
          ))}

        </ul>

      </div>

    </div>

  </div>
</section>


{/* Affordable Quality Section */}
<section className="bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="max-w-5xl mx-auto md:text-center">

      <h2 className="text-2xl md:text-4xl font-bold text-[#0A1F26]">
        Quality You Can Afford: Accessible Smiles for Every Budget
      </h2>

      <p className="mt-8 text-gray-700 leading-relaxed text-lg">
        At MaxAlign, we redefine how value and quality go hand in hand in
        Marathahalli’s competitive dental landscape.
      </p>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed text-lg">

        <p>
          Our clinic proudly stands out for affordable dental treatment
          Marathahalli residents rely on. We firmly believe high costs should
          not deter anyone from lasting oral health. Transparent,
          budget-friendly pricing covers routine care and advanced solutions,
          with no hidden fees.
        </p>

        <p>
          Families, students, and seniors benefit from custom packages and
          flexible payment options, supported by insurance collaborations and
          attentive staff. Our preventive philosophy helps reduce long-term
          costs through regular checkups and early interventions, so your
          future dental needs stay manageable.
        </p>

      </div>

      <div className="mt-10">
        <p className="text-lg font-semibold text-[#0B7A75]">
          Discover truly affordable dentistry—unlock exclusive offers at
          MaxAlign today! Smile with confidence—affordable dental solutions
          for every family in Marathahalli.
        </p>
      </div>

    </div>

  </div>
</section>

 <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0A1F26] text-center">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="text-lg font-bold text-[#0A1F26]">
                    {faq.q}
                  </span>
                  <span className="text-2xl font-bold text-[#0B7A75]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 py-5 text-gray-700 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  




      {/* Next Sections Yahan Add Kar Sakte Ho */}
    </>
  );
}
