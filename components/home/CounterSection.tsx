"use client";
import { useEffect, useState } from "react";
import { FaSmile, FaTooth, FaStar } from "react-icons/fa";

const stats = [
  {
    value: 10,
    label: "Years of Expertise",
    icon: <FaTooth className="text-4xl md:text-5xl text-white" />,
    description:
      "Max Align pioneers precision smile design. Our advanced technology ensures flawless alignment.",
    suffix: "+",
  },
  {
    value: 5000,
    label: "Smiles Transformed",
    icon: <FaSmile className="text-4xl md:text-5xl text-white" />,
    description:
      "Trusted by patients nationwide. We deliver life-changing dental confidence.",
    suffix: "+",
  },
  {
    value: 99,
    label: "Success Rate",
    icon: <FaStar className="text-4xl md:text-5xl text-white" />,
    description:
      "Proven clinical excellence. Your dream smile guaranteed.",
    suffix: "%",
  },
];

export default function CounterSection() {
  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    const increments = [10, 50, 1];
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, idx) => {
          if (count < stats[idx].value) {
            const next = count + increments[idx];
            return next > stats[idx].value ? stats[idx].value : next;
          }
          return count;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/assets/banner/dental-bg.jpg')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B7A75]">
          Comprehensive Dental Care
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Affordable Dental Clinic in Marathahalli for All Age Groups
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0B7A75] via-[#083f41] to-black 
                         rounded-2xl p-8 flex flex-col items-center gap-4 
                         shadow-xl hover:shadow-3xl hover:scale-[1.03] 
                         transition-all duration-300 text-white"
            >
              {/* ICON */}
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                {stat.icon}
              </div>

              {/* COUNTER */}
              <h3 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
                {counters[index]}
                {stat.suffix}
              </h3>

              {/* LABEL */}
              <h4 className="text-xl font-semibold">{stat.label}</h4>

              {/* DESCRIPTION */}
              <p className="text-white/80 text-center text-sm md:text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
