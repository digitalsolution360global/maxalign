"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CommonDentalBlog() {
  const latestBlogs = [
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/professional-teeth-whitening",
      date: "19-07-2025"
    },
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      img: "/assets/blogs/b1.jpg",
      link: "/blogs/max-align-best-dental-clinic",
      date: "13-07-2025"
    },
    {
      title: "How Invisible Aligners Work",
      img: "/assets/blogs/b3.jpg",
      link: "/blogs/importance-of-dental-checkups",
      date: "10-07-2025"
    },
    {
      title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/teeth-whitening",
      date: "08-07-2025"
    },
    {
      title: "Top 7 Dental Care Tips To Keep Your Smile Healthy This Winter",
      img: "/assets/blogs/winter-dental-care.webp",
      link: "/blogs/top-7-dental-care-tips-to-keep-your-smile-healthy-this-winter",
      date: "15 Jan 2026"
    },
  ];
  const faqs = [
    {
      question: "What are the most common dental problems in Bangalore?",
      answer: (
        <div className="space-y-4">
          <p>Common dental problems are listed below:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>tooth decay</li>
            <li>gum disease</li>
            <li>tooth sensitivity</li>
          </ul>
          <p>
            To combat them effectively, you need regular check-ups at a trusted family dental clinic in Bangalore, and that is “MaxAlign”.
          </p>
        </div>
      )
    },
    {
      question: "Can stress really cause dental problems?",
      answer: "Yes, stress is a bad part of life, as it leads to teeth grinding and weakens your immune response in the worst cases. We advise our patients to visit us in case of any susceptible gum disease and jaw pain."
    },
    {
      question: "Why choose MaxAlign for expert dental care in Bangalore?",
      answer: "MaxAlign combines world-class technology, such as advanced diagnostics and laser dentistry, with a patient-first approach to provide the most comfortable and effective dental experience in the city. We are the trusted partner for any type of gum disease and tooth decay issue."
    },
    {
      question: "What is the best way to treat tooth sensitivity?",
      answer: "Start by using a desensitizing toothpaste and a soft-bristle brush. If the pain remains, we advise patients to visit our dental clinic."
    },
    {
      question: "Is Bangalore's water quality affecting my teeth?",
      answer: "Yes, high mineral content in some areas can lead to faster tartar buildup. So, it’s better to take precautions from the expert dentists at MaxAlign."
    }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const blogDate = {
    date: "09 Jan 2026"
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
              Common Dental Problems in Bangalore and How to Prevent Them
            </h1>
          </div>
        </section>

        {/* ================== PAGE CONTENT ================== */}
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* ============== LEFT ARTICLE - Image inside content box ============== */}
            <article className="md:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-hidden">
                <Image
                  src="/assets/blogs/common-dental-problems-bangalore.webp"
                  alt="Featured Blog"
                  width={900}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
                  <span>👤 Admin</span>
                  <span>📅 09 Jan 2026</span>
                </div>


                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">



                  <p>
                    Prevention is always the right way to treat any type of dental problem. At a trusted dental care, dentists always provide the best methods to fight them. Do you know how to fight against gum disease and tooth decay?
                  </p>

                  <p>
                    Well, you may find various common and uncommon oral health tips. But every problem should be solved with science and advanced expertise!
                  </p>

                  <p>
                    With improper diet plans and an unplanned schedule of dinner with friends, oral health may be ignored. But frequent ignorance may lead to some serious dental problems Bangalore. To fight the odds, health enthusiasts should take precautions, as any type of dental infection is a bad sign.
                  </p>

                  <p>
                    It’s time for people to take care of their dental infections and join MaxAlign for advanced treatment. Let’s explore more about preventive measures from the most-trusted family dental clinic in Bangalore.
                  </p>

                  <p>
                    <strong>Don’t know how to prevent cavities and gum problems - Consult with MaxAlign’s dentists today at a reasonable cost!</strong>
                  </p>

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Navigating the Challenge of Tooth Decay in Urban Bangalore
                  </h3>

                  <p>
                    Tooth decay is always a major issue for any patient who has not followed a proper oral healthcare routine. After consuming sugary or starchy foods, it is always recommended to rinse your mouth and brush properly.
                  </p>

                  <p>
                    Lack of basic treatment lets the bacteria in your mouth produce acids that eat away at your enamel. Having sticky processed foods and acidic beverages like carbonated drinks and specialty coffees accelerates this process.
                  </p>

                  <p>
                    You should know how to deal with such gum diseases and other dental problems Bangalore. With MaxAlign, everything is possible as we provide a complete preventive dentistry treatment without fail.
                  </p>

                  <p>
                    By choosing us, you ensure that early lesions are detected using AI-driven diagnostics before they turn into painful cavities, keeping your natural teeth intact for years to come.
                  </p>

                  <p>
                    The expert dental care in Bangalore is at your nearest center, as we operate as one of the finest dental care service providers in the city.
                  </p>

                  <p>
                    <strong>Don’t let a tiny cavity turn into a major headache. Schedule your preventive screening at MaxAlign today!</strong>
                  </p>

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Silent Struggles: Managing Gum Disease and Inflammation
                  </h3>

                  <p>
                    Gum disease isn’t uncommon due to the unhealthy food cycle, poor oral healthcare routine, and bad lifestyle in the city, which have caused the issue.
                  </p>

                  <p>
                    Preventing gum problems requires a disciplined oral hygiene regimen that goes beyond the basics. While brushing twice a day is essential, the use of interdental brushes and antibacterial mouthwashes is crucial for the Bangalore lifestyle.
                  </p>

                  <p>
                    Visiting the best expert dental care in Bangalore ensures that your gums remain firm, pink, and healthy, providing a solid foundation for your smile.
                  </p>

                  <p>
                    <strong>Make your gum healthy and keep your life steady – book a consultation with the nearest MaxAlign’s expert for an advanced gum health assessment today!</strong>
                  </p>

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Treat Dental Infections Wisely and Avoid Sensitivity
                  </h3>

                  <p>
                    A painful dental infection at the root of the tooth is a serious issue that can’t be ignored. In a city where the lifestyle and food cycle are improper, neglecting these symptoms can lead to dental emergencies.
                  </p>

                  <p>
                    At MaxAlign, we utilize 3D imaging to pinpoint the exact source of infections, allowing for precise, pain-free treatments. We recommend that patients switch to a soft-bristled brush and desensitizing toothpaste, which can offer immediate relief for minor sensitivity.
                  </p>

                  <p>
                    Don’t suffer in silence; modern dentistry offers quick, effective solutions to bring back your comfort. Get expert advice from our dentists and learn how to prevent cavities and gum problems.
                  </p>

                  <p>
                    <strong>Stop living with tooth sensitivity and pain. Contact MaxAlign for a permanent solution to your dental discomfort!</strong>
                  </p>

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Conclusion
                  </h3>

                  <p>
                    No more dental problems Bangalore, as MaxAlign is the ultimate solution for a perfect and trusted dental care partner. Remember, a visit to a family dental clinic isn't just about fixing what’s broken—it’s about preserving the beauty and function of your smile for a lifetime.
                  </p>

                  <p>
                    Let’s work together to keep the city’s smiles as bright and healthy as ever.
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
                    <Link key={i} href={blog.link} className="flex gap-4 items-start hover:opacity-90 transition group">
                      <Image src={blog.img} alt={blog.title} width={80} height={80} className="rounded-xl object-cover shrink-0 w-20 h-20" />
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#0B7A75] transition line-clamp-2">{blog.title}</p>
                        <p className="text-gray-500 text-xs mt-1">{blog.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* Book Appointment CTA */}
                <Link href="/appointment" className="block mt-6 rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <p className="text-white font-bold text-lg">Ready for your best smile?</p>
                  <p className="text-white/90 text-sm mt-1 mb-4">Expert care at Maxalign Dental</p>
                  <span className="inline-block w-full py-3 px-6 rounded-lg bg-white text-[#0B7A75] font-semibold hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition">BOOK APPOINTMENT</span>
                </Link>
              </div>
            </aside>


          </div>
        </section>
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
    </>
  );
}
