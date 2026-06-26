"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DentalTechnologyBlog() {
  const latestBlogs = [
    {
      title: "Common Dental Problems in Bangalore and How to Prevent Them",
      img: "/assets/blogs/common-dental-problems-bangalore.webp",
      link: "/blogs/common-dental-problems-bangalore",
      date: "09 Jan 2026",
    },
    {
      title: "Top 7 Dental Care Tips To Keep Your Smile Healthy This Winter",
      img: "/assets/blogs/winter-dental-care.webp",
      link: "/blogs/top-7-dental-care-tips-to-keep-your-smile-healthy-this-winter",
      date: "15 Jan 2026",
    },
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      img: "/assets/blogs/professional-teeth-whitening.webp",
      link: "/blogs/professional-teeth-whitening",
      date: "19-07-2025",
    },
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      img: "/assets/blogs/max-align-best-dental-clinic.webp",
      link: "/blogs/max-align-best-dental-clinic",
      date: "13-07-2025",
    },
    {
      title: "Laser Dentistry Benefits for Pain-Free Treatment in Bangalore",
      img: "/assets/blogs/laser-dentistry-benefits-for-pain-free-treatment-in-bangalore.webp",
      link: "/blogs/laser-dentistry-benefits-for-pain-free-treatment-in-bangalore",
      date: "10-07-2025",
    },
  ];

  const faqs = [
    {
      question:
        "What is the main benefit of digital dentistry compared to traditional methods?",
      answer:
        "The main benefit of using advanced digital dentistry is to eliminate messy impressions and reduce the number of visits required for treatments.",
    },
    {
      question: "Is laser dentistry safe for all ages?",
      answer:
        "Yes, laser dentistry is highly safe and perfect for all age groups. This procedure promotes faster healing for both children and adults.",
    },
    {
      question: "Does 3D dental scanning involve harmful radiation?",
      answer:
        "No, the scanning doesn't cause any harm as it uses a very low dose of radiation compared to traditional medical CT scans.",
    },
    {
      question: "Can technology actually make a dental procedure painless?",
      answer:
        "Yes, the use of modern tech and tools can do the best for patients. Each method allows for better anesthesia delivery, less invasive instruments, and early problem detection.",
    },
    {
      question: "How much more does tech-based dental care cost?",
      answer:
        "The treatment is costly, but it often saves you money in the long run by reducing return visits.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================== DARK BLOG BANNER ================== */}
      <div className="bg-white">
        <section
          className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center
    bg-gradient-to-b from-[#0A1F26] via-[#0B7A75] to-[#0A1F26]"
        >
          <div className="text-center px-6 max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight">
              How Technology is Changing Dentistry in Bangalore: From AI to
              Laser Treatments
            </h1>
          </div>
        </section>

        {/* ================== PAGE CONTENT ================== */}
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* ============== LEFT ARTICLE ============== */}
            <article className="md:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-hidden">
                <Image
                  src="/assets/blogs/laser-dentistry-benefits-for-pain-free-treatment-in-bangalore.webp"
                  alt="Advanced Dental Technology in Bangalore – AI and Laser Treatments at Max Align"
                  width={900}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
                  <span>👤 Admin</span>
                  <span>📅 20 Jun 2026</span>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

                  {/* Introduction */}
                  <p>
                    The time has come to get rid of uncomfortable appointments
                    and guessing games. Yes, at Max Align Dental Clinic, we
                    provide the best treatment based on your oral health. We
                    leverage advanced dental technology Bangalore residents
                    deserve comfort in every chair.
                  </p>

                  <p>
                    Our tech-forward approach ensures you know exactly what to
                    expect, every step of the way. Let&apos;s build a safer and more
                    secure oral healthcare routine with technical upgrades.
                  </p>

                  {/* Section 1 */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    The New Era of Digital Dentistry Bangalore
                  </h3>

                  <p>
                    Talking about advanced oral treatment, we integrate
                    computer-aided design and manufacturing (CAD/CAM) into our
                    daily workflows. That&apos;s how our dentists eliminate the margin
                    of error associated with traditional methods.
                  </p>

                  <p>
                    The latest dental technology in Bangalore clinics like ours
                    is designed to replace error. That&apos;s why we use
                    evidence-based planning, and this results in faster
                    turnarounds and predictable outcomes.
                  </p>

                  <p>Our dental clinic offers the following attributes:</p>

                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      Speeds up the fabrication process for crowns and
                      restorations.
                    </li>
                    <li>
                      Provides instant, high-resolution visualization of your
                      dental health.
                    </li>
                    <li>
                      Eliminates the need for messy, uncomfortable physical
                      impressions.
                    </li>
                    <li>
                      Enhances communication between your dentist and the lab.
                    </li>
                    <li>
                      Reduces the number of appointments needed for complex
                      procedures.
                    </li>
                  </ul>

                  <p>
                    <strong>
                      Ready for a perfect fit? Book your digital consultation at
                      Max Align today.
                    </strong>
                  </p>

                  {/* Section 2 */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Precision Meets Comfort with Laser Dentistry and 3D Dental
                    Scanning
                  </h3>

                  <p>
                    Let&apos;s explore more about what we possibly can do with our
                    advanced dental care support. With Max Align, we provide 3D
                    dental scanning. This is how we can create a digital replica
                    of your mouth in seconds.
                  </p>

                  <p>
                    The benefits of modern dental treatments truly shine when
                    you go with our laser dentistry. This allows us to perform
                    soft-tissue procedures. Also, it ensures your tissue heals
                    faster and your comfort remains the top priority.
                  </p>

                  <p>
                    Let&apos;s discover why you need the advanced treatment:
                  </p>

                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      Laser dentistry reduces the need for traditional stitches
                      or anesthesia.
                    </li>
                    <li>
                      3D dental scanning captures every angle with sub-millimeter
                      accuracy.
                    </li>
                    <li>
                      Lasers sterilize the area while working, reducing the risk
                      of infection.
                    </li>
                  </ul>

                  <p>
                    <strong>
                      Experience dentistry without the noise—choose Max Align
                      for gentle, high-tech care.
                    </strong>
                  </p>

                  {/* Section 3 */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    The Future of Painless Dental Treatment
                  </h3>

                  <p>
                    It is wise to seek painless dental treatment in Bangalore.
                    By combining artificial intelligence for early diagnostics
                    with ergonomic equipment, we identify a problem early, and
                    we can treat it with conservative methods.
                  </p>

                  <p>
                    That&apos;s how we ensure patients stay out of heavy-duty
                    surgery. Our dentists are so good at removing the fear
                    factor and allowing you to maintain your oral health with
                    absolute confidence.
                  </p>

                  {/* Conclusion */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Conclusion
                  </h3>

                  <p>
                    By adopting the latest dental technology in Bangalore
                    clinics, you can get the best treatment from Max Align. We
                    have the digital dentistry Bangalore standards that allow us
                    to move away from outdated, stressful practices.
                  </p>

                  <p>
                    <strong>
                      Experience the difference at Max Align – call us and book
                      your visit now.
                    </strong>
                  </p>
                </div>
              </div>
            </article>

            {/* ============== RIGHT SIDEBAR ============== */}
            <aside className="space-y-8">
              <div className="bg-white shadow-lg rounded-xl p-6 border">
                <h3 className="text-2xl font-bold text-[#0B7A75] mb-4">
                  Latest Blogs
                </h3>

                <div className="space-y-4">
                  {latestBlogs.map((blog, i) => (
                    <Link
                      key={i}
                      href={blog.link}
                      className="flex gap-4 items-start hover:opacity-90 transition group"
                    >
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        width={80}
                        height={80}
                        className="rounded-xl object-cover shrink-0 w-20 h-20"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#0B7A75] transition line-clamp-2">
                          {blog.title}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {blog.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Book Appointment CTA */}
                <Link
                  href="/appointment"
                  className="block mt-6 rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <p className="text-white font-bold text-lg">
                    Ready for your best smile?
                  </p>
                  <p className="text-white/90 text-sm mt-1 mb-4">
                    Expert care at Maxalign Dental
                  </p>
                  <span className="inline-block w-full py-3 px-6 rounded-lg bg-white text-[#0B7A75] font-semibold hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition">
                    BOOK APPOINTMENT
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================== FAQ SECTION ================== */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 pb-20">
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
                    <span className="text-gray-800 font-bold text-lg">
                      {faq.question}
                    </span>
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
    </>
  );
}
