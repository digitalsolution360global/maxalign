"use client";
import Link from "next/link";
import { HiOutlineStar } from "react-icons/hi";
import { FaTooth } from "react-icons/fa";

export default function DentalBanner() {
  return (
    <section className="relative w-full bg-white text-black py-32 md:py-32 overflow-hidden">
      
      {/* Decorative Side Icons */}
      <div className="absolute left-0 top-1/4 text-[#0B7A75] text-6xl opacity-10 hidden md:block">
        <FaTooth />
      </div>
      <div className="absolute right-0 top-1/3 text-[#4EE0D4] text-6xl opacity-10 hidden md:block">
        <HiOutlineStar />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 md:text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B7A75]">
            Your Smile, Our Passion
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Experience expert dental care at Maxalign Dental Clinic. From general checkups to advanced cosmetic treatments, we ensure your smile stays healthy and radiant.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
            <Link href="/services">
              <button className="bg-[#0B7A75] hover:bg-[#096863] text-white px-6 py-3 rounded-md font-semibold shadow-md transition">
                Our Services
              </button>
            </Link>
            <Link href="/appointment">
              <button className="bg-[#4EE0D4] hover:bg-[#36c9c0] text-black px-6 py-3 rounded-md font-semibold shadow-md transition">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* Right Decorative Elements */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative hidden md:flex">
          {/* Back Circle */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-[#062023]/70 to-[#0A1F26]/70 rounded-full animate-pulse -right-12 top-12 z-0"></div>
          {/* Front Circle with Tooth */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-[#0B7A75]/80 to-[#4EE0D4]/80 rounded-full flex items-center justify-center z-10 animate-pulse">
            <FaTooth className="text-white text-6xl md:text-8xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
