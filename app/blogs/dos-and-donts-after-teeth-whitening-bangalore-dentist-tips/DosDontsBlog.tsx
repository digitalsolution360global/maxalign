"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DosDontsBlog() {
  const latestBlogs = [
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      img: "/assets/blogs/professional-teeth-whitening.webp",
      link: "/blogs/professional-teeth-whitening",
      date: "19-07-2025"
    },
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      img: "/assets/blogs/max-align-best-dental-clinic.webp",
      link: "/blogs/max-align-best-dental-clinic",
      date: "13-07-2025"
    },
    {
      title: "Common Dental Problems in Bangalore and How to Prevent Them",
      img: "/assets/blogs/common-dental-problems-bangalore.webp",
      link: "/blogs/common-dental-problems-bangalore",
      date: "09 Jan 2026"
    },
    {
      title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore",
      img: "/assets/blogs/teeth-whitening.webp",
      link: "/blogs/teeth-whitening",
      date: "08-07-2025"
    },
    {
      title: "How Technology is Changing Dentistry in Bangalore: From AI to Laser Treatments",
      img: "/assets/blogs/laser-dentistry-benefits-for-pain-free-treatment-in-bangalore.webp",
      link: "/blogs/dental-technology-bangalore-ai-laser-treatments",
      date: "15 Jan 2026"
    },
  ];

  const faqs = [
    {
      question: "How soon can I resume drinking regular filter coffee after my treatment?",
      answer: "You should not consume coffee for the first 48 hours. After that, you should use a straw, and after that rinse your mouth immediately."
    },
    {
      question: "Is it normal to experience sharp tooth sensitivity after a whitening session?",
      answer: "Yes, you may experience a mild sensitivity for 24 to 48 hours. However, it is temporary. We recommend that you use a desensitizing toothpaste."
    },
    {
      question: "Can I use standard whitening toothpaste right after an in-office treatment?",
      answer: "No, standard toothpastes that claim to give whitening are not good enough. They can damage vulnerable post-treatment enamel. Our dentists recommend you use a gentle, non-abrasive formula."
    },
    {
      question: "How long do professional whitening results typically last with proper care?",
      answer: "When you get the best oral treatment and maintain oral hygiene, your brighter smile can last anywhere from 12 to 24 months."
    },
    {
      question: "What should I do if I accidentally consume a dark food item early on?",
      answer: "In case you have consumed any type of dark food, you should immediately rinse your mouth thoroughly. Do use lukewarm water and brush your teeth gently with a toothbrush."
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
              Do&apos;s and Don&apos;ts After Teeth Whitening: Expert Tips from Bangalore Dentists
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
                  src="/assets/blogs/dos-and-donts-after-teeth-whitening-bangalore-dentist-tips.webp"
                  alt="Do's and Don'ts After Teeth Whitening – Expert Tips from Bangalore Dentists"
                  width={900}
                  height={450}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
                  <span>👤 Admin</span>
                  <span>📅 29 Jun 2026</span>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

                  {/* ---- Introduction ---- */}
                  <p>
                    A professional <a href="https://www.maxaligndental.com/services/teeth-whitening" className="underline text-[#0B7A75]">teeth whitening Bangalore</a> treatment is not just a requirement, but an important necessity. It reveals a sparkling, youthful smile.
                </p>

                <p>
                  When you invest in the best, you safeguard the treatment and the investment. Expert <strong>post whitening care</strong> is non-negotiable at <a href="https://www.maxaligndental.com/" className="underline text-[#0B7A75]">Max Align</a>. We give a dazzling smile, but it is only half the battle won. The first 48 hours following your procedure represent a critical window.
                </p>

                <p>
                  Let&apos;s understand what to do after teeth whitening treatment in Bangalore first. This guide ensures that your brightened smile remains vibrant against local culinary temptations.
                </p>

                <p>
                  <strong>
                    Grab strict teeth whitening aftercare from our dentists – <Link className="underline text-[#0B7A75]" href="/appointment">book your appointment here</Link>!
                  </strong>
                </p>

                {/* ---- The Golden Do's ---- */}
                <h3 className="text-2xl font-bold text-[#0B7A75]">
                  The Golden Do&apos;s: Maximizing Your Brightness
                </h3>

                <p>
                  To avoid stains after whitening, you should focus on protecting sensitive enamel. The habits should be based on soothing and sealing your teeth. Let&apos;s get into the diet plan you need for the best brightness of your teeth:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Restrict your diet entirely to a &ldquo;white diet&rdquo; for the first 48 hours</li>
                  <li>Consume liquids other than plain water</li>
                  <li>Use a straw to bypass your front teeth completely</li>
                  <li>Rinse with lukewarm water after every meal to neutralize local acidic residues</li>
                </ul>

                <p>
                  At Max Align, we provide specialized oral hygiene tips. They are tailored for post-bleaching phases. That&apos;s how users can maximize their experience and elongate the whiteness of their teeth.
                </p>

                <p>
                  <strong>
                    Transform your daily oral routine today—<Link className="underline text-[#0B7A75]" href="/appointment">book a personalized maintenance consultation at Max Align!</Link>
                  </strong>
                </p>

                {/* ---- The Crucial Don'ts ---- */}
                <h3 className="text-2xl font-bold text-[#0B7A75]">
                  The Crucial Don&apos;ts: What to Avoid
                </h3>

                <p>
                  The most vital rule to <strong>maintain white teeth for longer</strong> is to follow some basic steps. Yes, the dentists at Max Align always suggest you the following steps to do. They are the best for improving your teeth whitening experience.
                </p>

                <p>
                  Let&apos;s discover what to avoid first to <strong>maintain white teeth for longer</strong>:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Eliminate filter coffee, tea, dark sodas, and red wines from your immediate diet.</li>
                  <li>Avoid smoking and tobacco products for a minimum of seven days after treatment.</li>
                  <li>Stay away from acidic foods, citrus juices, and heavily spiced foods</li>
                  <li>
                    <strong>
                      Protect your stunning smile from dark stains – <Link className="underline text-[#0B7A75]" href="/appointment">Join Max Align Today!</Link>
                    </strong>
                  </li>
                </ul>

                {/* ---- Conclusion ---- */}
                <h3 className="text-2xl font-bold text-[#0B7A75]">
                  Conclusion
                </h3>

                <p>
                  Professional <strong>teeth whitening Bangalore</strong> is something unique that Max Align offers at the best place. This achievement requires a blend of professional expertise and disciplined personal maintenance.
                </p>

                <p>
                  At Max Align, we always favor strategic <strong>post whitening care</strong>. Here, we prioritize <strong>teeth whitening aftercare</strong> and engage patients with advanced oral hygiene tips. That&apos;s how you can choose to avoid stains after whitening.
                </p>

                <p>
                  Trust our dedicated clinic &amp; easily <strong>maintain white teeth for longer</strong>. <Link className="underline text-[#0B7A75]" href="/appointment">Connect with Max Align to claim your flawless smile transformation today!</Link>
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
    </section >

      {/* ================== FAQ SECTION ================== */ }
      < section className = "bg-white" >
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
        </section >
      </div >
    </>
  );
}
