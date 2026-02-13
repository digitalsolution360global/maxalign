"use client";
import Image from "next/image";
import { FaTeeth, FaSmile, FaTooth, FaXRay, FaTeethOpen } from "react-icons/fa";

const servicesLeft = [
  {
    title: "Dentures",
    description:
      "Custom-crafted solutions in Marathahalli for comfortable chewing and natural-looking smiles.",
    icon: <FaTeethOpen className="text-white text-2xl md:text-3xl" />,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Pain-free tooth preservation using advanced techniques at our Bengaluru clinic.",
    icon: <FaTeeth className="text-white text-2xl md:text-3xl" />,
  },
  {
    title: "Periodontal care",
    description:
      "Specialized gum disease management for Marathahalli residents with monsoon-adapted protocols.",
    icon: <FaTooth className="text-white text-2xl md:text-3xl" />,
  },
];

const servicesRight = [
  {
    title: "Orthodontic treatment and Invisalign",
    description:
      "Discreet Invisalign solutions for perfect smiles - top-rated in Bengaluru.",
    icon: <FaSmile className="text-white text-2xl md:text-3xl" />,
  },
  {
    title: "Pyorrhea treatment",
    description:
      "Advanced infection control and tissue regeneration therapy in Marathahalli.",
    icon: <FaTeeth className="text-white text-2xl md:text-3xl" />,
  },
  {
    title: "Digital Dental x rays",
    description:
      "Instant low-radiation 3D imaging for accurate treatment planning in Bengaluru.",
    icon: <FaXRay className="text-white text-2xl md:text-3xl" />,
  },
];

export default function ServicesCenterSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B7A75] mb-16">
          Our Umbrella of Services
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left services */}
          <div className="flex flex-col gap-12 md:w-1/3">
            {servicesLeft.map(({ title, description, icon }, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="bg-[#0B7A75] rounded-full w-16 h-16 flex items-center justify-center animate-bounce flex-shrink-0">
                  {icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0B7A75]">
                    {title}
                  </h3>
                  <p className="text-gray-700 mt-1">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="md:w-1/3 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/img2.jpg"
                alt="Dental services"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right services */}
          <div className="flex flex-col gap-12 md:w-1/3">
            {servicesRight.map(({ title, description, icon }, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="bg-[#0B7A75] rounded-full w-16 h-16 flex items-center justify-center animate-bounce flex-shrink-0">
                  {icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0B7A75]">
                    {title}
                  </h3>
                  <p className="text-gray-700 mt-1">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
