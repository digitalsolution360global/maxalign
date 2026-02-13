"use client";
import Image from "next/image";

export default function Intro() {
  const services = ["Braces", "Aligners", "RCT", "Crown", "Extraction", "Implant"];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/img1.jpg"
              alt="Maxalign Dental Clinic"
              fill
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B7A75]">
          Maxalign Dental – a multispecialty dental clinic in Marathahalli, Bengaluru
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
           Welcome to the smiling world of Maxalign Dental Clinic, your all-in-one dental care in Marathahalli, Bengaluru.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
          As a premier Best Dental Clinic Marathahalli, we take pride in offering the country’s best services, including general dental care, dental implants, cosmetic dentistry, professional teeth whitening, advanced oral care, and comfort dentistry.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
          Our Dental clinic in Marathahalli is designed to meet the oral needs of people with a focus on quality, comfort, and long-term oral health.
          </p>

          {/* Services */}
          <div className="flex flex-wrap gap-4 mt-4">
            {services.map((service, index) => (
              <span
                key={index}
                className="bg-[#0B7A75] text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-[#096863] transition text-sm sm:text-base"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
