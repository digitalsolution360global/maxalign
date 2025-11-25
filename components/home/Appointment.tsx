"use client";

import Image from "next/image";
import Link from "next/link";

export default function Appointment() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0C3436] via-[#0A1F26] to-[#0C3436] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4EE0D4]">
            Book an Appointment
          </h2>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Ready for a brighter, healthier smile? Contact MaxAlign, the 
            <span className="text-[#4EE0D4] font-semibold">
              {" "}best dentist near Marathahalli, Bangalore{" "}
            </span>
            today and schedule an appointment with the top orthodontist in 
            Marathahalli, Bengaluru.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Whether you need affordable cavity filling in Marathahalli, 
            invisible aligners, or professional teeth whitening at the 
            best dental clinic in Marathahalli — we’ve got you covered.
          </p>

          <Link href="/contact">
            <button className="mt-6 bg-[#4EE0D4] hover:bg-[#36c9c0] text-black px-8 py-3 rounded-md font-semibold shadow-md transition">
              Book Now
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/assets/img3.jpg" // change to your image
            alt="Dental Appointment"
            width={500}
            height={500}
            className="rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
